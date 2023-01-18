# Reverse Proxy

## NGINX

Generally, our community sets up Fosscord instances behind NGINX, a powerful reverse proxy.

Below is an example NGINX config. On Ubuntu, you can put this in the `/etc/nginx/sites-available/fosscord.conf` file,
and enable it with `ln -s /etc/nginx/sites-available/fosscord.conf /etc/nginx/sites-enabled/` and `systemctl restart nginx`

!!! info

    Other distros, and Windows, may not have a `sites-available`, `sites-enabled` directory structure.
    You may need to edit the `/etc/nginx/nginx.conf` file instead, or place new files in a `conf.d` directory, for example.
    Check which directories exist on your system to be sure.

```nginx
server {
	# Change server_name
    server_name fosscord.example.com;
    listen 80;

    location / {
			# Only change this if Nginx and Fosscord are not on the same machine.
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

	# Uncomment this if using Imagor:
	#location /media/ {
	#	# If you changed the port, be sure to change it here too
	#	proxy_pass http://127.0.0.1:8000/;
	#}
}
```

## SSL

[SSL](https://en.wikipedia.org/wiki/Secure_Sockets_Layer) is a technology used to keep your website secure.
Put very simply, it's the padlock next to the URL in your browser.

After you've set up NGINX, it's very simple to also set up SSL using `certbot`.
=== "Ubuntu"

    ```sh
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx
    ```

=== "Arch"

    ```sh
    sudo pacman -Syu certbot certbot-nginx
    sudo certbot --nginx
    ```

=== "Other Distros"

    Please refer to [Certbots documentation](https://certbot.eff.org/)

You should be asked various questions, such as which site you want to enable SSL for.
After which, you should now have a SSL secured Fosscord instance!

But wait, there's more! If you have changed your `gateway_endpointPublic`
or `cdn_endpointPublic` addresses, you'll probably have to update those to use the new protocol (`https` or `wss`).
