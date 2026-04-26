# When must the server restart?

{{ project.name }}-server must restart in the following cases:

-   The .env file or config (database or [CONFIG_PATH](/setup/server/configuration)) has changed.
-   Files in the `assets` directory have changed.
-   Files inside `src` have changed (_remember to `npm run build`_).
-   The [RabbitMQ](/setup/server/configuration/rabbitmq) connection has been lost.
-   The server has been updated.

For all other cases, you do not need to restart the server. For example:

-   Editing any table in the database other than `config`. For example, to edit a `users` [`rights`](/setup/server/configuration/rabbitmq)
-   Database connection was lost (this should auto reconnect)

This is not an exhaustive list. If a change you made is not applied, the first thing you should try is restarting.
