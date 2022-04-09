# Setup

<!-- ### [Download](https://github.com/fosscord/fosscord-server/releases)

This is the stable fosscord-server release.

Download the server release from [GitHub](https://github.com/fosscord/fosscord-server/releases) for your operating system. (Size ~80mb)

Double click the file to start the server. (The first time it takes longer as it needs to setup the server)

You can now access it on [http://localhost:3001](http://localhost:3001). -->

### With Terminal

This is the latest bleeding edge version of fosscord-server, which may have bugs.

#### Requirements

- [NodeJS](https://nodejs.org) v14+
- [Python](https://python.org) 3
- (Only on Linux) ``gcc`` and ``g++`` | Packaged with `build-essential` on Debian/Ubuntu and `base-devel` on Arch
- (Only on Windows) [Visual Studio](https://visualstudio.microsoft.com/) with the C++ package

#### Setup

Open a shell/terminal and execute these commands:

```
git clone https://github.com/fosscord/fosscord-server
cd fosscord-server
cd bundle
npm run setup
npm run start:bundle
```

You can now access Fosscord on [http://localhost:3001](http://localhost:3001)

#### Updating

To update Fosscord, execute these commands:

!!! warning "This reverts any edited files"

```
git reset --hard HEAD
git pull
npm run setup
npm run start:bundle
```

### With Docker

!!! failure "Not Supported Currently"
Avoid using Docker build until further notice. The current build is faulty and will not build correctly. Instead, install using the terminal in the section "With Terminal".

Optionally, if you want to use Docker:

```
git clone https://github.com/fosscord/fosscord-server
cd fosscord-server
docker-compose up -d
```

You can now access Fosscord on [http://localhost:3001](http://localhost:3001)