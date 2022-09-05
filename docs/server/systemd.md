# Systemd Service

If you want to run Fosscord as a systemd service, simply put this in ``/etc/systemd/system/fosscord.service``:

```
[Unit]
Description=<your description>

[Service]
User=<your user>
WorkingDirectory=<fosscord directory>
ExecStart=npm run start:bundle
Restart=always

[Install]
WantedBy=multi-user.target
```

Then, execute ``sudo systemctl start fosscord`` from your terminal.

If you want to automatically run Fosscord on boot, execute ``sudo systemctl enable fosscord``