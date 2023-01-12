# Test Client

!!! warning "The test client included with fosscord-server is deprecated and will be removed in favour of [Discord-Client-Proxy](http://github.com/fosscord/Discord-Client-Proxy) in the future"

## Enabling the test client

The test client is a proxy to the Discord.com client used for development purposes.
You can enable the test client by setting the [`client_useTestClient` config](../configuration/index.md) value in your database.

Here's a step-by-step guide:

1. Open your [database](../database.md), with a tool such as DBeaver.
2. Go to the `config` table. In DBeaver, this is on the left in the Database Navigator.
3. In the Data tab of the main view, find the row containing `client_useTestClient`
4. Update it's `value` to read `true`, instead of `false`.
5. Save the database, and restart the server.

## How it works

By editing the `GLOBAL_ENV` variable used by the client, we can trick it into sending requests to the API/Gateway/CDN/etc to us,
instead of Discord.com. We simply proxy it from Discord.com otherwise.

## Updating

To update the client version served, edit the 4 `<script>` tags in the `<body>` of `assets/client_test/index.html`,
with ones used by a client version you wish to use.
To get the latest client scripts, simply download the HTML served by [https://discord.com/app](https://discord.com/app) (through `wget https://discord.com/app`, for example)
Do not replace the `assets/client_test/index.html` file with a fresh one from Discord.com, as there are additional changes made to the file by the Fosscord team.

## [Theming](theming.md)

## [Plugins](plugins.md)
