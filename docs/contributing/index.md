# Contributing

!!! question "[Have you read the Code of Conduct?](conduct.md)"

## Style and a note on etiquette

-   We use [prettier](https://www.npmjs.com/package/prettier) for code formatting. We have a `.prettierrc` file in fosscord-server's root
    and use a git precommit hook to autorun it.
-   Try to stay consistent with the rest of the project
-   Try to keep each commit to a single feature or idea, with descriptions of what it is and why it is done. No "Large refactor" commits that touch every file,
    unless absolutely required due to the nature of change.
-   Leave comments in your code about why something is done when appropriate, not just what it is doing.
-   If you're working on a feature, please announce that you're working on it (in the relevant GH issue or our Discord, preferably both),
    so that we can work more effectively and minimise conflicting change attempts.
    Additionally, please do not try to snipe features that others are working on.

## Structure

Fosscord is written in Typescript and is comprised of 4 main parts:

-   REST HTTP API server
-   Websocket Gateway server for realtime communication with clients
-   HTTP CDN server for storing user file content.
-   `utils` module to separate our database models, schemas, and other things from the above 3 components.

## Implementing endpoints, opcodes, etc

Generally, the approach is to just see what the Discord.com client sends and receives from Discord.com (through your browsers devtools, for example)
and guessing about any functionality server-side, if it's undocumented.

For a lot of things it's pretty simple to guess, `GET /api/users/@me` returns private details about your user for example.
This route is also detailed in [Discords own documentation](https://discord.com/developers/), [here specifically](https://discord.com/developers/docs/resources/user#get-current-user).

Discord generally does not document anything that is not related to application/bot development, though.
As an example, `GET /api/updates?platform={}` which returns the `url`, `pub_date`, `name` and any `notes` about the latest client release for a platform.

For the Gateway it's the same procedure, except now you can't use the network logger of your devtools
because the gateway returns responses encoded with [erlpack](https://github.com/discord/erlpack).
Easy fix though, just edit the `DeveloperOptionsStore` localStorage key so that `logGatewayEvents` is true, and reload the client.

!!! warning

    Make sure you rerun `npm run build` every time you edit source code. Additionally, make sure you run `npm run generate:schema` whenever you change a
    schema. If you want to do both, there's a shortcut: `npm run setup`.
