# Setup

## Server

### Download

For stable fosscord-server release use this version.

Download the server release from [GitHub](https://github.com/fosscord/fosscord-server/releases) for your operating system. (Size ~60mb)

Double click the file to start the server. (The first time it takes longer as it needs to setup the server)

You can now access it on [http://localhost:3001](http://localhost:3001).

### With terminal/shell

You will be able to use the latest bleeding edge version of fosscord-server. (Which may have bugs)

You need to install git from [git-scm.com](https://git-scm.com/downloads) or your package manager.

You need to install nodejs from [nodejs.org](https://nodejs.org/) or your package manager.

Then clone and start the server, by executing this in the

```
git clone https://github.com/fosscord/fosscord-server
cd fosscord-server/bundle
npm install
npm start
```

You can now access it on [http://localhost:3001](http://localhost:3001)

### Docker

Optionally if you want to use Docker:

```
git clone https://github.com/fosscord/fosscord-server
cd fosscord-server
docker-compose up
```

You can now access it on [http://localhost:3001](http://localhost:3001)

## Client

Our client is not ready for the public. _([help contributing](https://github.com/fosscord/fosscord-client))_

However the server already has a discord test client built in, which can be used to access Fosscord.
