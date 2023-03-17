# SystemD

Below is an example SystemD service for running {{ name }}.  
Save it in `/etc/systemd/system/{{ name }}.service`.

```toml
[Unit]
Description={{ name }}, for better and secure communication

[Service]
User=<your user>
WorkingDirectory=<{{ name }} directory>
ExecStart=npm run start
Restart=always
StandardError=journal
StandardOutput=journal

[Install]
WantedBy=multi-user.target
```

!!! error "Do not run {{ name }} as the root user. This is a security risk to your system."

Make sure to edit the file as needed, such as replacing the user.
It is a good idea to create a new user on your system to run {{ name }}.
If you would like to run the API, CDN or Gateway separately,
you can edit the `ExecStart` command used in line with the [npm script](npmScripts.md).
Also be sure to run [RabbitMQ](configuration/rabbitmq.md) in that case.

You can now start {{ name }} using `sudo systemctl start {{ name }}`.

To automatically run {{ name }} on boot, use `sudo systemctl enable {{ name }}`.

To view the server logs, you may use `journalctl -u {{ name }}`, or with `-f` to view them as they come.

You may also use the `lnav` package to get nice, colourised and scrolling output:  
`journalctl -xefu {{ name }} | lnav`
