# Setup

## Server

You need to install nodejs from [nodejs.org](https://nodejs.org/).

### Easy installation

-   Download the zip from [github](https://github.com/fosscord/fosscord-server/archive/refs/heads/master.zip) and extract it.
-   **Windows**: Double click on start.bat
-   **Mac/Linux**: Open start.sh with terminal/shell

You can now access it on [http://localhost:3001](http://localhost:3001)

### With terminal/shell

You need to install nodejs from https://git-scm.com/downloads

```
git clone https://github.com/fosscord/fosscord-server
cd fosscord-server/bundle
npm i
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
