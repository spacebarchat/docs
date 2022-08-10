# Reverse Proxy/SSL

If you're running a production instance of Fosscord, it is **strongly** recommended to use SSL (better known as https), which you can achieve by using a reverse proxy.

A reverse proxy not only gives your instance SSL support, but also allows you to run it alongside other web services behind the same port!

## Proxies

There are multiple reverse proxies you can use, the most popular being [Nginx](https://nginx.org) and [Traefik](https://traefik.io/traefik/).

Another popular solution that allows easy management via a webinterface and is based on Nginx is [NginxProxyManager](https://nginxproxymanager.com/).

## Setup

Choose your preferred reverse proxy, and install it using the respective setup instructions. 

Then, configure it to forward traffic from your domain (or a subdomain) to the port your Fosscord instance runs on (3001 by default).

To be able to use SSL, you will need an SSL certificate. If you're using NginxProxyManager, you just need to enable SSL support and your proxy will automatically generate and set up certificates for you. Otherwise, you will need to set up [Certbot](https://certbot.eff.org).

## Guides

[Nginx](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)

[NginxProxyManager](https://nginxproxymanager.com/guide/#quick-setup)

[Traefik](https://doc.traefik.io/traefik/getting-started/install-traefik/)

[Certbot](https://certbot.eff.org/instructions)