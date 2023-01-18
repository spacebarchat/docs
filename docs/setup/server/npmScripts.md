# NPM scripts

Can be executed using `npm run {script name}`

## `setup`

Shorthand for `build` and `generate:schema`

## `sync:db`

Syncronise the database schema between Fosscord source code and your database.
**May incur data loss**. You do not normally need to run this script, as Fosscord-server will perform it when necessary.

## `build`

Builds the Fosscord source code

## `start`

Starts the bundled server. API, Gateway, and CDN run under the same process when using bundle, using the same port.

## `start:api`, `start:gateway`, `start:cdn`

Starts the respective component.

## `generate:client`

Downloads a (mostly) complete discord.com web client and runs some basic patches:

-   Replaces all mentions of "Server" -> "Guild"
-   Replaces "Discord" -> "Fosscord"
-   "Nitro" -> "Premium"
-   Replaces the Discord logo home button with a Fosscord logo
-   Prevents `localStorage` deletion (for [plugins](Test%20Client/plugins.md))
-   Adds `fast-identify` support

Running this script will, at the time of writing, download roughly ~5000 assets.
To only download JS files (~700 assets), set the [`ONLY_CACHE_JS` environment variable](configuration/env.md)

### fast-identify

Essentially, it's a small mod to the fast-connect script Discord clients already use,
which sends a small `IDENTIFY` payload to the server, which speeds up how fast we receive `READY`.
Without the client patch however, the `READY` payload received will just be ignored by the client,
and it'll attempt to re-auth after a few seconds.

## `generate:rights`

Generates a Discord.com-like rights value for use as a default right.
Also displays the 'all rights' value, which `1` is a placeholder for.

## `generate:changelog`

Injects the changelog at `fosscord-server/assets/changelog.txt` into the Discord.com client.

## `generate:schema`

Recreates the `fosscord-server/assets/schema.json` file, which is used for API and Gateway request validation.
