# Setup

## Server

### [Download](https://github.com/fosscord/fosscord-server/releases)

This is the stable (Alpha) fosscord-server release.

Download the server release from [GitHub](https://github.com/fosscord/fosscord-server/releases) for your operating system. (Size ~60mb)

Double click the file to start the server. (The first time it takes longer as it needs to setup the server)

You can now access it on [http://localhost:3001](http://localhost:3001).

### With terminal/shell
### Manual Setup

This is the latest bleeding edge version of fosscord-server, which may have bugs.

You need to install git from [git-scm.com](https://git-scm.com/downloads) or your package manager.

You need to install nodejs from [nodejs.org](https://nodejs.org/) or your package manager.

You need to install rabbitmq from [rabbitmq.com](https://www.rabbitmq.com/download.html) or your package manager.

Now you can clone (git clone https://github.com/fosscord/fosscord-server) and start the server by executing each module in its own terminal/shell:

(API+DEMO CLIENT: port 3001)
```
git clone https://github.com/fosscord/fosscord-server
cd fosscord-server/api
npm install
npm start
```
(GATEWAY: port 3002)
```
cd fosscord-server/gateway
npm install
npm start
```
(CDN: port 3003)
```
cd fosscord-server/cdn
npm install
npm start
```
You can now access it on [http://localhost:3001](http://localhost:3001) (Demo ui runs on api port (3001). Other Ports: 3002, gateway (websocket) and 3003, CDN (http))

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
