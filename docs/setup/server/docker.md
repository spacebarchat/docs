# Docker

## Dev environment

This clones the master branch into a docker builder and runs a build before starting it.
To run it you need docker and docker-compose
`sudo docker compose up` or `sudo docker compose up -d`

## Prod environment with local file storage or with S3

Set the following environment variables in your environment (adapt POSTGRES_USER, POSTGRES_PASSWORD):

```
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=postgres
export POSTGRES_DATABASE=fosscord
```

This clones the master branch into a docker builder and runs a build before starting it.
To run it you need docker and docker-compose
`sudo docker-compose -f docker-compose.prod.yaml up` or `sudo docker-compose -f docker-compose.prod.yaml up -d`

Additional you can set S3 storage backend:

```
export S3_BUCKET=S3://...
export S3_BUCKET_NAME=test
export S3_BUCKET_REGION=eu-central-1
```

Then start it with: `docker-compose -f docker-compose.prod.s3.yaml up` or `docker-compose -f docker-compose.prod.s3.yaml up -d`

At first start, you get an. This error can be ignored due to first start.

```
db_1        | 2023-03-04 17:28:25.790 UTC [63] ERROR:  relation "config" does not exist at character 31
db_1        | 2023-03-04 17:28:25.790 UTC [63] STATEMENT:  SELECT COUNT(1) AS "cnt" FROM "config" "ConfigEntity"
```
