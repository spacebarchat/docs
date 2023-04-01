# Spacebar Server Docker

GitHub: [Spacebar Docker GitHub](https://github.com/spacebarchat/docker)

## Dev environment

To run it you need docker and docker-compose
`sudo docker compose up` or `sudo docker compose up -d`

docker-compose.yaml

```
version: "3.9"
services:
  spacebar:
    image: spacebarchat/server:latest-sqlite
    ports:
      - "3001:3001"
    volumes:
      - spacebar-database:/exec/persistent/database/
      - spacebar-storage:/exec/persistent/storage
    environment:
      DATABASE: "/exec/persistent/database/database.db"
      STORAGE_PROVIDER: "file"
      STORAGE_LOCATION: "/exec/persistent/storage/"
      PORT: "3001"
volumes:
  spacebar-database:
  spacebar-storage:
```

## Prod environment with local file storage or with S3

Set the following environment variables in your environment (adapt POSTGRES_USER, POSTGRES_PASSWORD):

```
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=postgres
export POSTGRES_DATABASE=spacebar
```

docker-compose.prod.yaml

```
version: "3.9"
services:
  spacebar:
    image: spacebarchat/server:latest-postgressql
    restart: unless-stopped
    ports:
      - "3001:3001"
    volumes:
      - spacebar-storage:/exec/persistent/storage
    environment:
      DATABASE: postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DATABASE}
      STORAGE_PROVIDER: "file"
      STORAGE_LOCATION: "/exec/persistent/storage/"
      PORT: "3001"
    depends_on:
      db:
        condition: service_healthy
  db:
    image: postgres:15-alpine
    restart: unless-stopped
    environment:
      - POSTGRES_USER=${POSTGRES_USER:?err}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD:?err}
      - POSTGRES_DB=${POSTGRES_DATABASE:?err}
    ports:
      - '127.0.0.1:5432:5432'
    volumes:
      - db:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -d ${POSTGRES_DATABASE} -U ${POSTGRES_USER}"]
      interval: 10s
      timeout: 5s
      retries: 5
volumes:
  spacebar-storage:
  db:
```

To run it you need docker and docker-compose
`sudo docker-compose -f docker-compose.prod.yaml up` or `sudo docker-compose -f docker-compose.prod.yaml up -d`

### Additional you can set S3 storage backend:

```
export S3_BUCKET=S3://...
export S3_BUCKET_NAME=test
export S3_BUCKET_REGION=eu-central-1
```

docker-compose.prod.s3.yaml

```
version: "3.9"
services:
  spacebar:
    image: spacebarchat/server:latest-postgressql
    restart: unless-stopped
    ports:
      - "3001:3001"
    environment:
      DATABASE: postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DATABASE}
      STORAGE_PROVIDER: s3
      STORAGE_LOCATION: ${S3_BUCKET:?err}
      STORAGE_BUCKET: ${S3_BUCKET_NAME:?err}
      STORAGE_REGION: ${S3_BUCKET_REGION:?err}
      PORT: "3001"
    depends_on:
      db:
        condition: service_healthy
  db:
    image: postgres:15-alpine
    restart: unless-stopped
    environment:
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_DB=${POSTGRES_DATABASE}
    ports:
      - '127.0.0.1:5432:5432'
    volumes:
      - db:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -d ${POSTGRES_DATABASE} -U ${POSTGRES_USER}"]
      interval: 10s
      timeout: 5s
      retries: 5
volumes:
  db:
```

Then start it with: `docker-compose -f docker-compose.prod.s3.yaml up` or `docker-compose -f docker-compose.prod.s3.yaml up -d`

At first start, you get the following error. This error can be ignored due to first start.

```
db_1        | 2023-03-04 17:28:25.790 UTC [63] ERROR:  relation "config" does not exist at character 31
db_1        | 2023-03-04 17:28:25.790 UTC [63] STATEMENT:  SELECT COUNT(1) AS "cnt" FROM "config" "ConfigEntity"
```

## With NGINX and client (Which is under WIP)

Under spacebar-server-client-proxy there is a small project in experimental state. Which run the spacebar server, the spacebar client with an reverse proxy and ssl in it.
You need to clone the repo.
`git clone https://github.com/spacebarchat/docker.git`
And then go to `spacebar-server-client-proxy`
Please adapt the following env variables to your need:

```
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=your-password
export POSTGRES_DATABASE=spacebar
export MAIL_CERTBOT=your-email
export NGINX_HOST=your-domain
```

To run it you need docker and docker-compose
`sudo docker-compose -f docker-compose.prod.yaml up` or `sudo docker-compose -f docker-compose.prod.yaml up -d`

# Spacebar client

Due to the fact that it is under development for now, i provide no client README. It may change in the future. Take a look at the `With NGINX and client (Which is under WIP)` section
