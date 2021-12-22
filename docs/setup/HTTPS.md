# Reverse Proxy/HTTPS (NGINX)

## Setup

### Apache2 is currently not supported.

A reverse proxy is when you take a web server, for our example, NGINX and you ue it to redirect traffic on port 80/443 to port 3001, but to
your browser, it still appears as port 80/443

A reverse proxy is the most efficient way to setup HTTPS on your instance.

To do this, you need a basic understanding of setting up a web server.

### Without HTTPS (you can remove the "location = api/register" part of the website, it's there to stop people from raiding your instance)

```
limit_req_zone $binary_remote_addr zone=registerzone:10m rate=1r/m;
server {
        listen 80;
        
        server_name fosscord.your.website;
        location / {
                proxy_pass http://127.0.0.1:3001;
                proxy_set_header Host $host;
                proxy_pass_request_headers      on;
                add_header Last-Modified $date_gmt;
                add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
                proxy_set_header  X-Real-IP $remote_addr;
                proxy_set_header  X-Forwarded-Proto https;
                proxy_set_header  X-Forwarded-For $remote_addr;
                proxy_set_header  X-Forwarded-Host $remote_addr;
                proxy_no_cache 1;
                proxy_cache_bypass 1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
    }

        // everything below this is safe to remove if you want to
        location = /api/v9/auth/register {
                limit_req zone=registerzone;
                proxy_pass http://127.0.0.1:3001;
                proxy_set_header Host $host;
                proxy_pass_request_headers      on;
                add_header Last-Modified $date_gmt;
                add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
                proxy_set_header  X-Real-IP $remote_addr;
                proxy_set_header  X-Forwarded-Proto https;
                proxy_set_header  X-Forwarded-For $remote_addr;
                proxy_set_header  X-Forwarded-Host $remote_addr;
                proxy_no_cache 1;
                proxy_cache_bypass 1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
        }
```

You can now use your website on port 80.


### Using HTTPS

Using the existing HTTP config, run this command

Generate your certificates with certbot.

``sudo certbot --nginx -d fosscord.your.website``

If you want your certificates to renew, run ``crontab -e`` and paste this in: ``0 12 * * * /usr/bin/certbot renew --quiet``. Then you should be all set!

If done correctly, you should have your website up and running with SSL. ``server_name`` is important because certbot will use it to sign the certificates.

An example of a correctly configured NGINX setup (using SSL):

!!! failure "THIS IS JUST AN EXAMPLE"
        Do not use this, use the command above, if you use it correctly, you should have a working instance with HTTPS.

```
limit_req_zone $binary_remote_addr zone=registerzone:10m rate=1r/m;
server {
        server_name fosscord.your.website;
        location / {
                proxy_pass http://127.0.0.1:3001;
                proxy_set_header Host $host;
                proxy_pass_request_headers      on;
                add_header Last-Modified $date_gmt;
                add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
                proxy_set_header  X-Real-IP $remote_addr;
                proxy_set_header  X-Forwarded-Proto https;
                proxy_set_header  X-Forwarded-For $remote_addr;
                proxy_set_header  X-Forwarded-Host $remote_addr;
                proxy_no_cache 1;
                proxy_cache_bypass 1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
    }

        // same thing here
        location = /api/v9/auth/register {
                limit_req zone=registerzone;
                proxy_pass http://127.0.0.1:3001;
                proxy_set_header Host $host;
                proxy_pass_request_headers      on;
                add_header Last-Modified $date_gmt;
                add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
                proxy_set_header  X-Real-IP $remote_addr;
                proxy_set_header  X-Forwarded-Proto https;
                proxy_set_header  X-Forwarded-For $remote_addr;
                proxy_set_header  X-Forwarded-Host $remote_addr;
                proxy_no_cache 1;
                proxy_cache_bypass 1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
        }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /yourcerts/website.crt; # managed by certbot
    ssl_certificate_key /yourcerts/privatekey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = fosscord.your.website) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


        server_name fosscord.your.website;
        listen 80;
    return 404; # managed by Certbot


}
```

### With Apache2

!!! failure "Not supported"
    Avoid using Apache2, since I've tried it and it just led to an infinite loading screen for me.

You can find how to use Apache2 reverse proxy on the internet. If you find out how to set it up correctly, please send a pull request to the repository [here](https://github.com/fosscord/fosscord-docs/)

// by AToska21
