## Advanced Setup with terminal

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


## How to setup Captcha in your instance?

To setup captcha for your server you will have to open your database. To view your DB we suggest you use [DBeaver](https://dbeaver.io/download/).
Follow these steps to reach your config file

1. Connect DBeaver to your database. After connecting you will see something like this ![image](https://user-images.githubusercontent.com/84021897/148377042-1884dd4e-a0f4-4c3f-aaa3-c144b6737244.png)

2. Open the database folder by clicking the small arrow located to the left side of the folder name, then proceed to schemas followed by public then tables.
3. You will now see a list of tables. Among them is a table named config. Open that and you will see ![image](https://user-images.githubusercontent.com/84021897/148377619-8e3d16da-87f1-4991-b0b7-d6fb8badf6e1.png)

Make sure to click the data folder to edit the config. 
4. You will now have to edit the following rows in the database

| **Service Name**         | **Value**                 | **Description**                                       |
|--------------------------|---------------------------|-------------------------------------------------------|
| register_requireCaptcha  | true                      | Enables captcha when you register                     |
| security_captcha_enabled | true                      | Enables Captcha if set to true                        |
| security_captcha_sitekey | "sitekey"                 | The site key which can be accessed from the site only |
| security_captcha_service | "hcaptcha" or "reacptcha" | If you are using hcaptcha put "hcaptcha"              |
| security_captcha_secret  | "secret"                  | Will be provided by the service you register to       |
| login_requireCaptcha     | true                      | Enables Captcha when you login                        |

5. Save the file and restart your server. 

## How to setup CDN to enable uploading attachments

1. Open your DB
2. Go to your config
3. Edit the rows as follows: 

| **Service Name**       | **Value**                    | **Example for servers with SSL** | **Example for servers without SSL** |
|------------------------|------------------------------|----------------------------------|-------------------------------------|
| cdn_endpointPublic     | "http(s)://your.domain.name" | "https://your.domain.name"       | "http://your.domain.name"           |
| gateway_endpointPublic | "ws(s)://your.domain.name"   | "wss://your.domain.name"         | "ws://your.domain.name"             |
