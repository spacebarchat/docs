# Running the server as a docker container

1. Add an isolated network to share between the server and the database:
```sh
docker network create spacebar-network
```

2. Set up a database for the server:
```sh
docker run \
  -d \
  --name spacebar-db \
  --network spacebar-network \
  -e POSTGRES_PASSWORD=postgres \
  -v spacebar-db:/var/lib/postgresql \
  postgres:alpine
```

3. Run the server docker image to let it generate the config:
```sh
docker run \
  --rm \
  --name spacebar-server \
  --network spacebar-network \
  -e DATABASE=postgres://postgres:postgres@spacebar-db/postgres \
  -e CONFIG_PATH=config.json \
  -v ./data:/data \
  ghcr.io/{{ repositories.server }}
```

4. Set config values for `general_serverName`, `cdn_endpointPublic`, `cdn_endpointPrivate` to `http://localhost:3001`, `api_endpointPublic` to `http://localhost:3001/api/v9` and `gateway_endpointPublic` to `ws://localhost:3001`

5. Run the server docker image after the config changes:
```sh
docker run \
  --name spacebar-server \
  --network spacebar-network \
  -e DATABASE=postgres://postgres:postgres@spacebar-db/postgres \
  -e CONFIG_PATH=config.json \
  -v ./data/:/data \
  -p 3001:3001 \
  ghcr.io/{{ repositories.server }}
```
