# Using systemd

## Setup

### Explaination

A systemd service, otherwise known as a daemon, is when you use the incuded systemd/systemctl package with your distro
to make the computer run your program on it's own, without you having to use screen or anything else.

To do this, you need a medium understanding of linux.

### Using systemctl, service or systemd
Whatever you call it.

!!! failure "THIS IS JUST AN EXAMPLE"
        Only use this config as a base. DO NOT USE ROOT.

The directory this file should go in is ``/etc/systemd/system/fosscord.service`` or whatever your system uses.

```
[Unit]
Description=<your description here>

[Service]
User=root
WorkingDirectory=<fosscord directory>
ExecStart=npm run start:bundle
Restart=always

[Install]
WantedBy=multi-user.target
```
If you set it up correctly, you should be able to run ``systemctl start fosscord`` and, your fosscord works!

### Distros without "systemd"

!!! failure "Not supported"
    I haven't had any experience with Gentoo or any other distros. Sorry guys

If you find a way to do it there, please send a pull request to the repository [here](https://github.com/fosscord/fosscord-docs/)

// by AToska21
