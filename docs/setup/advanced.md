### Advanced Setup with terminal

This is the latest bleeding edge version of fosscord-server, which may have bugs.

You need to install git from [git-scm.com](https://git-scm.com/downloads) or your package manager.

You need to install nodejs version 14 or higher from [nodejs.org](https://nodejs.org/) or your package manager.

#### Note: It is highly recommend that the following commands be used in a user account and not in Root since it poses threats to your server. 


1. First clone the Fosscrod-server github repository by running the following command: 
```
git clone https://github.com/fosscord/fosscord-server
```

2. After that go to the directory fosscord-server/bundle 
```
cd fosscord-server
cd bundle
```

3. If you have not installed npm yet run the below cmd: 
```
sudo apt install npm 
```

4. Lets now setup our database. We will be using postgresqlfor this setup.
```
su postgres -c psql
```

5. Now that postgresql is installed lets setup a new user and a database:
```
CREATE USER fosscord WITH CREATEDB PASSWORD 'your.password';
create database fosscord with owner fosscord;
``` 
Note: Change the 'your.password' with the password you would like to keep for your database. You will need this password for accessing your DB. 

6. We will now create a env file to configure fosscord server to use the custom DB instead of the default one. 
```
nano .env
```
7. Paste the following in the env file that was just created: 
```
DATABASE=postgres://fosscord:Beastcord@localhost/fosscord
THREADS=1
```
After pasting the above lines do ctrl + x followed by Y then press the Enter key on your keyboard to save the file. (Windows) 

8. Create a new file named fosscord.service in the path /etc/systemd/system/fosscord.service 
```
nano /etc/systemd/system/fosscord.service
```
Paste this 
```
[Unit]
Description=Fosscord server
[Service]
User=root
WorkingDirectory=/root/fosscord-server/bundle
ExecStart=npm run start:bundle
Restart=always
[Install]
WantedBy=multi-user.target
```

9. Make sure you are in the fosscord-server/bundle and run the following commands: 
```
npm run setup
npm run start:bundle
```
If the output is working fine then you are good to go. If not you have done some mistakes go up and look what mistake you have done and fix it to proceed. 

10. We will now use nginx to make our server point to a domain intead of an IP address. 
```
apt install nginx
```

11. Create a file named yourdomain.com.conf
```
nano /etc/nginx/conf.d/yourdomain.com.conf
```
#### Note: Make sure to change yourdomain.com to your domain name. 

12. Inside the file paste the following lines: 
```
limit_req_zone $binary_remote_addr zone=registerzone:10m rate=1r/m;
server {
        listen 80;

        server_name domain.com;
        location / {
                proxy_pass http://127.0.0.1:3001/;
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
}
```
#### Note: Change the domain.com right next to server_name to your own domain name.

13. Lets now restart nginx and install certbot, paste the following commands in the terminal:
```
sudo systemctl restart nginx
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx -d domain.com
```
#### Note: Change the domain.com to your domain name in the last command.

14. We will now setup a system where the instance run everytime your server is online.
```
apt install lnav
systemctl enable --now fosscord
```
#### Note: To view the logs run the following command
```
journalctl -xefu fosscord | lnav
```

### Note: Make sure you setup your DNS settings accordingly. 
