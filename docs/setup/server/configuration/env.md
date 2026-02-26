# Environment Variables

Below is a list of environment variables used by {{ project.name }}.
You can set environment variables easily by creating an `.env` file
in the `{{ project.name.lower() }}-server` folder, with the format `NAME=VALUE` with each on new lines.

| Name             | Value          | Description                                                                                                                                    |
| ---------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| THREADS          | number         | Number of threads to run {{ project.name }} on when using bundle. Make sure you've enabled RabbitMQ if using more than one                     |
| PORT             | number         | Port to listen on. Used by all components, including bundle. If using bundle, all components run under the same port                           |
| DATABASE         | string         | Database connection string. Defaults to SQLite3 at project root                                                                                |
| DB_SYNC          | bool           | Unsafely synchronise database model on startup. **Not recommended for use in production environments!**                                        |
| CONFIG_PATH      | string         | File path for JSON config, if not using `config` db table                                                                                      |
| WS_LOGEVENTS     | boolean        | If set, log websocket events except messages from gateway                                                                                      |
| WS_VERBOSE       | boolean        | If set, log websocket messages sent/received by gateway                                                                                        |
| WS_DUMP          | boolean        | If set, dump websocket messages sent/received to disk                                                                                          |
| CDN              | string         | Lowest priority value for public CDN announcements                                                                                             |
| GATEWAY          | string         | Lowest priority value for public gateway announcements                                                                                         |
| STORAGE_LOCATION | string         | CDN storage location. File path or S3 bucket                                                                                                   |
| STORAGE_PROVIDER | "s3" or "file" | CDN storage provider                                                                                                                           |
| STORAGE_BUCKET   | string         | S3 bucket name                                                                                                                                 |
| STORAGE_REGION   | string         | S3 storage region                                                                                                                              |
| STORAGE_ENDPOINT | string         | Custom S3 endpoint. Only used when STORAGE_PROVIDER = "s3". Defaults to "https://s3.${region}.amazonaws.com"                                   |
| DB_LOGGING       | boolean        | If "true", logs all SQL queries to the terminal                                                                                                |
| LOG_REQUESTS     | filter         | What requests to log, per response code (eg. `-200` to log every non-200 response code, or `404` to log requests with a Not Found status code) |
