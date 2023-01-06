# SystemD

Below is an example SystemD service for running Fosscord.  
Save it in `/etc/systemd/system/fosscord.service`.

```toml
[Unit]
Description=Fosscord, for better and secure communication

[Service]
User=<your user>
WorkingDirectory=<fosscord directory>
ExecStart=npm run start
Restart=always
StandardError=journal
StandardOutput=journal

[Install]
WantedBy=multi-user.target
```

!!! error "Do not run Fosscord as the root user. This is a security risk to your system."

Make sure to edit the file as needed, such as replacing the user.
It is a good idea to create a new user on your system to run Fosscord.
If you would like to run the API, CDN or Gateway separately,
you can edit the `ExecStart` command used in line with the [npm script](npmScripts.md).
Also be sure to run [RabbitMQ](configuration/rabbitmq.md) in that case.

You can now start Fosscord using `sudo systemctl start fosscord`.

To automatically run Fosscord on boot, use `sudo systemctl enable fosscord`.

To view the server logs, you may use `journalctl -u fosscord`, or with `-f` to view them as they come.

You may also use the `lnav` package to get nice, colourised and scrolling output:  
`journalctl -xefu fosscord | lnav`
