# Environment Variables

Below is a list of environment variables used by Fosscord.
You can set environment variables easily by creating an `.env` file
in the `fosscord-server` folder, with the format `NAME=VALUE` with each on new lines.

| Name             | Value          | Description                                                                                                          |
| ---------------- | -------------- | -------------------------------------------------------------------------------------------------------------------- |
| THREADS          | number         | Number of threads to run Fosscord on when using bundle. Make sure you've enabled RabbitMQ if using more than one     |
| PORT             | number         | Port to listen on. Used by all components, including bundle. If using bundle, all components run under the same port |
| DATABASE         | string         | Database connection string. Defaults to SQlite3 at project root                                                      |
| CONFIG_PATH      | string         | File path for JSON config, if not using `config` db table                                                            |
| WS_LOGEVENTS     | boolean        | If set, log websocket events except messages from gateway                                                            |
| WS_VERBOSE       | boolean        | If set, log websocket messages sent/received by gateway                                                              |
| WS_DUMP          | boolean        | If set, dump websocket messages sent/received to disk                                                                |
| CDN              | string         | Lowest priority value for public CDN annoucements                                                                    |
| GATEWAY          | string         | Lowest priority value for public gateway annoucements                                                                |
| STORAGE_LOCATION | string         | CDN storage location. File path or S3 bucktet                                                                        |
| STORAGE_PROVIDER | "s3" or "file" | CDN storage provider                                                                                                 |
| STORAGE_BUCKET   | string         | S3 bucket name                                                                                                       |
| STORAGE_REGION   | string         | S3 storage region                                                                                                    |
| ONLY_CACHE_JS    | any            | If set, [`npm run generate:client`](../npmScripts.md#generateclient) will only cache JS files.                                      |
