# Reverse Proxy

## NGINX

Generally, our community sets up Fosscord instances behind NGINX, a powerful reverse proxy.

Below is an example NGINX config. On Ubuntu, you can put this in `/etc/nginx/sites-available/fosscord`,
and enable it with `ln -s /etc/nginx/sites-available/fosscord /etc/nginx/sites-enabled/` and `systemctl restart nginx`

```nginx
server {
	# Change server_name
    server_name fosscord.example.com;
    listen 80;

    location / {
			# do NOT change this
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

			# This is important. It allows Websocket connections through NGINX.
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
    }
}
```

## SSL

After you've set up NGINX, it's very simple to also set up SSL using `certbot`.
On Ubuntu:

```bash
sudo apt install certbot python3-certbot-nginx
certbot --nginx
```

You should be asked various questions, such as which site you want to enable SSL for.
Afterwhich, you should now have a SSL secured Fosscord instance!

But wait! There's more, actually. If you have changed your `gateway_endpointPublic`
or `cdn_endpointPublic` addresses, you'll probably have to update those to use the new protocol (`https` or `wss`).
