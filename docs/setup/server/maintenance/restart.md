# When must the server restart?

Fosscord-server must restart in the following cases:

* The .env file or config (database or [CONFIG_PATH](configuration/env.md)) has changed.
* Files in the `client_test`, `preload-plugins` folders of inside `assets` have changed.
* Files inside `src` have changed (*remember to `npm run build`*).
* The `assets/schemas.json` file has changed.
* The [RabbitMQ](configuration/rabbitmq.md) connection has been lost.

For all other cases, you do not need to restart the server. For example:

* Running `npm run generate:client`
* Running `npm run generate:changelog`
* Editing any table in the database other than `config`. For example, to edit a `users` [`rights`](security/rights.md)
* Database connection was lost (this should auto reconnect)

This is not an exhaustive list. If a change you made is not applied, the first thing you should try is restarting.