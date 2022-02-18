## PostgreSQL Setup with terminal

1. Lets setup our database. We will be using postgresql for this setup.
```
su postgres -c psql
```

2. Now that postgresql is installed lets setup a new user and a database:
```
CREATE USER fosscord WITH CREATEDB PASSWORD 'your.password';
create database fosscord with owner fosscord;
``` 
Note: Change the 'your.password' with the password you would like to keep for your database. You will need this password for accessing your DB. 

3. We will now create a env file to configure fosscord server to use the custom DB instead of the default one. 
```
nano .env
```
4. Paste the following in the env file that was just created: 
```
DATABASE=postgres://fosscord:Beastcord@localhost/fosscord
THREADS=1
```
After pasting the above lines do ctrl + x followed by Y then press the Enter key on your keyboard to save the file. (Windows) 

If the output is working fine then you are good to go. If not you have done some mistakes go up and look what mistake you have done and fix it to proceed. 

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

// made by GamerZ14
// adapted by AToska21
