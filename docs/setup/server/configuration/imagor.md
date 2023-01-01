# Imagor

[Imagor](https://github.com/cshum/imagor) is a "fast, secure image processing server"
used by Fosscord for external image resizing, primarily by embeds from other websites when linked in a message.
If left unused, Fosscord will simply not provide a proxy_url for clients, which may leave external images unavailable
or cause the client to download directly from the image host.

## Dependencies

-   [Docker](https://www.docker.com/)

## Setup

To setup Imagor for Fosscord, first grab the `security_requestSignature` config value from Fosscord's database,
and create a `imagor.env` file somewhere safe, with the following content (do not include the `[]`)

```
IMAGOR_SECRET=[security_requestSignature value]
```

You can now start Imagor with

```bash
docker run --env-file ./imagor.env -p 8000:8000 shumc/imagor
```

`8000` here is our port. Make sure that it'd available to people outside your network.
If you're using a reverse proxy such as Nginx for Fosscord already, you could add this to your config's `server` block

```nginx
location /media {
	proxy_pass http://127.0.0.1:8000;
}
```

Along with any additional config you already have, of course.
Alternative (and perhaps the better choice) would be to create a new domain, say `media.whatever.com` specifically for Imagor.

Our last step is to simply tell Fosscord about Imagor. Just set the `cdn_imagorServerUrl` config value to your public endpoint for Imagor, wrapped in quotes.

Congrats! After a restart, you've now got Imagor resizing your images!
