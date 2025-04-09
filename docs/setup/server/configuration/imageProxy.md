# Image proxy

If the configuration `cdn_imagorServerUrl` is empty (which is the default), `proxy_url` is set to the same value as the original `url`, causing clients to download images directly from the image host.
This may lead to privacy concerns, as an attacker is able to learn users IP addresses.

To combat this, {{ project.name }} supports using an image proxy to serve and resize images.

## Imagor

[Imagor](https://github.com/cshum/imagor) is a "fast, secure image processing server"
used by {{ project.name }} for external image resizing, primarily by embeds from other websites when linked in a message.

### Dependencies

- [Docker](https://www.docker.com/)

### Setup

To setup Imagor for {{ project.name }}, first grab the `security_requestSignature` config value from {{ project.name }}'s database,
and create a `imagor.env` file somewhere safe, with the following content.
**Make sure to edit the file with the correct information**. Your requestSignture should _not_ start or end with `"`.

```
IMAGOR_SECRET=security_requestSignature value from your {{ project.name }} config
PORT=8000
```

You can now start Imagor with

```bash
docker run --env-file ./imagor.env -p 8000:8000 shumc/imagor
```

`8000` here is our port. Make sure that it'd available to people outside your network.
If you would like to change the port Imagor listens on, be sure to change both the PORT value in `imagor.env`,
and the `-p` value used in docker.

If you're using a [reverse proxy](../reverseProxy.md) such as Nginx for {{ project.name }} already, you could add this to your config's `server` block

```nginx
location /media/ {
    # If you changed the port, be sure to change it here too
    proxy_pass http://127.0.0.1:8000/;
}
```

Along with any additional config you already have, of course.
Alternative (and perhaps the better choice) would be to create a new domain, say `media.example.com` specifically for Imagor.

```nginx
server {
    # Change the server_name to reflect your true domain
    server_name media.example.com;

    add_header Last-Modified $date_gmt;
    proxy_set_header Host $host;
    proxy_pass_request_headers on;
    proxy_set_header X-Forwarded-For $remote_addr;

    location / {
        # If you had changed the port, change it here as well
        proxy_pass http://127.0.0.1:8000;
    }
}
```

Our last step is to simply tell {{ project.name }} about Imagor. Just set the `cdn_imagorServerUrl` config value to your public endpoint for Imagor, wrapped in quotes.

For example, if you used the `/media` location in your existing nginx config, it will look something like `"https://{{ project.domain }}/media"`.
If you used a subdomain, it will look like `"https://media.{{ project.domain }}"`.
Don't include a trailing backslash.

Congrats! After a restart, you've now got Imagor resizing your images!

## Built-in image proxy

While we recommend using Imagor, {{ project.name }} has a built-in image proxy that can be used instead of Imagor if you just want to test the server or are unable to use Docker.

To use it, simply set the `cdn_imagorServerUrl` to your API URL, but use `/imageproxy` instead of `/api`.
For example, if the API is running at `https://api.{{ project.domain }}/api`, you would set `cdn_imagorServerUrl` to `"https://api.{{ project.domain }}/imageproxy"`.

Note that to support resizing the image to the given format, it's required to install either [sharp](https://www.npmjs.com/package/sharp) (preferred) or [jimp](https://www.npmjs.com/package/jimp):

```bash
npm install sharp
```

## Your own image proxy

You can also point the `cdn_imagorServerUrl` [config](index.md) to your own image proxy, if you have one that supports the Imagor URL format:

1. Construct URL path: `<Image width>x<Height>/<Unencoded URL without https://>`
2. Create a SHA-1 HMAC of the URL path using `security_requestSignature`
3. Construct final `proxy_url`: `<cdn_imagorServerUrl configuration>/<SHA-1 hash>/<Path from above>`
