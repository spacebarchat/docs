# Docker Compose

## Compose file

```yml
services:
  spacebar-gateway:
    image: ghcr.io/{{ repositories.server }}-gateway:latest
    env_file: .env
    networks:
      - spacebar-network
    volumes:
      - ./data:/data
    ports:
      - "3001:3001"
    restart:  unless-stopped
  
  spacebar-api:
    image: ghcr.io/{{ repositories.server }}-api:latest
    env_file: .env
    networks:
      - spacebar-network
    volumes:
      - ./data:/data
    ports:
      - "3002:3001"
    restart:  unless-stopped
  
  spacebar-cdn:
    image: ghcr.io/{{ repositories.server }}-cdn:latest
    env_file: .env
    networks:
      - spacebar-network
    volumes:
      - ./data:/data
    ports:
      - "3003:3001"
    restart:  unless-stopped
  
  spacebar-db:
    image: postgres:18-alpine
    networks:
      - spacebar-network
    volumes:
      - spacebar-db:/var/lib/postgresql
    environment:
      - POSTGRES_PASSWORD=postgres
    restart: unless-stopped
  
  rabbitmq:
    image: rabbitmq:4-management-alpine
    volumes:
      - rabbitmq_data:/var/lib/rabbitmq
    restart: unless-stopped
    networks:
      - spacebar-network

networks:
  spacebar-network:

volumes:
  spacebar-db:
  rabbitmq_data:
```

## Volumes

| Mount               | Type  | Container(s) | Purpose                           |
|---------------------|-------|--------------|-----------------------------------|
| /data               | Bind  | spacebar-*   | All Spacebar persistent data      |
| /var/lib/postgresql | Named | postgres     | Persistent database               |
| /var/lib/rabbitmq   | Named | rabbitmq     | Persistent data for message queue |
 
## Setup

There's some prep to get things running the first time.

1. First steps:

Before anything, make sure you have a domain to use, and are familiar with creating subdomains and setting up
a reverse proxy (like NGINX or Caddy) to point to the containers. Due to the very, _very_ many ways this can be
done, we won't cover specifics here, but you'll need to point `your.domain` (placeholder) to the following
subdomains and ports:

`spacebar.your.domain` -> `localhost:3001`  
`api.your.domain` -> `localhost:3002`  
`cdn.your.domain` -> `localhost:3003`

Create the .env file with the following variables:
```shell
DATABASE=postgres://postgres:postgres@spacebar-db/postgres
CONFIG_PATH=config.json
```

Run the compose setup for a minute to generate the other required files:
```shell
docker compose up
```
Wait until the logs stop moving and it looks like it's finished setting up, then `ctrl+c` to exit.

This will place a few files into the `./data` bind, including `jwt.key` and `jwt.key.pub`, along with a fresh 
`config.json` file.

2. Edit the `config.json` file with your server information
This covers only what's different for a Docker Compose setup compared to a baremetal install.
For the full list of config file options, check out the [configuration settings](../configuration/index.md)

| Key                       | Description                                        | Example                          |
|---------------------------|----------------------------------------------------|----------------------------------|
| `gateway.endpointPrivate` | Internal (e.g. api-to-cdn) gateway communication   | ws://spacebar-gateway:3001       |
| `gateway.endpointPublic`  | External (e.g. from a user) gateway communication  | wss://spacebar.your.domain       |
| `cdn.endpointPrivate`     | Internal CDN communication                         | http://spacebar-cdn:3001         |
| `cdn.gatewayPublic`       | External CDN communication                         | https://cdn.your.domain          |
| `api.endpointPrivate`     | Internal API communication                         | http://spacebar-api:3001/api/v9  |
| `api.endpointPublic`      | External API communication                         | https://api.your.domain/api/v9   |
| `rabbitmq.host`           | Internal communication between Spacebar containers | amqp://guest:guest@rabbitmq:5672 |

3. Bring up the containers
Everything should be good to go. Run the following command to start the containers running in the background.
```shell
docker compose up -d
```

## Fermi

4. If you want to host Fermi, the web client for Spacebar, as well
Spacebar needs a client to connect to it for it to be used. Spacebar doesn't come with one by default, so you'll need
one like Fermi. It can be added to this compose setup pretty easily.

### Build Fermi
Fermi doesn't have a native Docker image just yet, so we have to build it ourselves.

Clone the git repository:
```shell
git clone https://github.com/MathMan05/Fermi.git
```

Create a new `fermi` directory in the same place as the docker-compose.yml and create an empty `uptime.json` file:
```shell
mkdir fermi
touch fermi/uptime.json
```

Edit the `instances.json` file in the repository to include your new server. Read the details on how to do
that [in the Fermi GitHub](https://github.com/MathMan05/Fermi/blob/main/InstanceInfo.md).
We recommend copying this file somewhere safe, as updating the git repo will likely overwrite these changes.

Build the Docker image:
```shell
docker build -t fermi:latest .
```

### Compose file

Add the following service to the existing compose file:

```shell
  fermi:
    image: fermi:latest
    networks:
      - spacebar-network
    volumes:
      - ./fermi/uptime.json:/exec/uptime.json
    ports:
      - 8080:8080
    restart: unless-stopped
```

### Reverse Proxy

Add another route to your reverse proxy pointing your domain or subdomain to the new Fermi port, `8080`.
Most people use the `app.your.domain` subdomain for Fermi, but you can also use the plain domain itself if you won't
be using it for something else.

### Finished

After restarting the compose, or starting it for the first time if you read ahead, you should be able to open up 
the Fermi app and connect to your Spacebar instance. 