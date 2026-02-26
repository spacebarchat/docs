# Server Setup

{{ project.name }}-server setup ranges in difficulty depending on how you want to configure your system.
This page provides a minimal setup guide to get you up and running,
you should check out the other pages on this site to take your instance to the next level.

For this guide, we assume you're familar with the terminal.

We do **not** recommend or support running {{ project.name }} using services such as Ngrok, Heroku or vercel.  
You **must** have access to a terminal for this guide.

We do not recommend using Windows to run {{ project.name }}.

## Dependencies

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org). Version 24+ (for `npm`, `node` commands)
     (NOTE: Ubuntu and Debian based systems often ship with an outdated version of NodeJS, so you can use [NodeSource](https://github.com/nodesource/distributions) to install a newer version)
-   [Python](https://www.python.org/). Version 3.13 or later. Make sure this is executable via `python` in your terminal.  
     (See: `python-is-python3` package)
-   [.NET SDK](https://dot.net). Version 9.0+. Optional, but used for the experimental [Admin API](adminApi).
-   On Linux: `gcc`/`g++`. Packaged with `build-essential` on Debian/Ubuntu and `base-devel` on Arch.
-   On Windows: [Visual Studio](https://visualstudio.microsoft.com/) (**NOT** VSCode) with the `Desktop development with C++` package.
    You do not need the full Visual Studio install, the build tools are fine.
-   Hint: If you have the [`nix`](https://nixos.org/download/) package manager installed, you can skip all of the above by running `nix develop .#` in your terminal.

## Setup

In your terminal:

```bash
# Download {{ project.name }}
git clone {{ repositories.base_url }}/{{ repositories.server }}.git

# Navigate to project root
cd server

# Install javascript packages
npm i

# Build and generate schema + openapi. Separately, they are `build:src`, `generate:schema` and `generate:openapi`.
npm run build

# Start the bundle server ( API, CDN, Gateway in one )
npm run start
```

If all went according to plan, you can now access your new {{ project.name }} instance at [http://localhost:3001](http://localhost:3001)! Congrats!

If you set up your server remotely, you can use `curl http://localhost:3001/api/ping` to verify the server is up and running
(you should set up a reverse proxy, next!).

# Connecting from remote machines

For your server to be a bit more useful to those not on the same machine, you'll need to do a bit more configuration.

The official Spacebar client does automatic discovery of the endpoints it uses to communicate with the server,
but it needs to retrieve those from somewhere, that being the API server.

If you don't tell the API server where to find the other services, the official Spacebar client wont be able to connect.
Other clients which don't do automatic discovery will be, but that's because your users will need to provide the locations manually.

We'll be doing some [server configuration](configuration) in this step, which is stored in your servers database by default.
By default, Spacebar uses an SQLite database in the project root called `database.db`, but you might not want to use that for production.
[If you're going to switch databases, do it now.](database.md)

Once you've opened your database, navigate to the `config` table. You'll see 2 columns named `key` and `value`.
You'll want to set the `value` of the rows with the following keys to the correct values.

| key                      | value                                                    |
| ------------------------ | -------------------------------------------------------- |
| `api_endpointPublic`     | Your API endpoint. Likely `"https://DOMAIN_NAME/api/v9"` |
| `cdn_endpointPublic`     | Your CDN endpoint. Likely `"https://DOMAIN_NAME"`         |
| `gateway_endpointPublic` | Your Gateway endpoint. Likely `"wss://DOMAIN_NAME"`       |

!!! warning "You must wrap these `value`s in doublequotes as they are parsed as JSON!"

If you're in the CLI for this, heres some template SQL:

=== "SQLite"

    ```sql
    update config
    set value = '"HTTPS_OR_WSS://SERVER_ADDRESS"'
    where key = "THE_SERVICE_NAME_endpointPublic";
    ```

## Now what?

Well, now you can configure {{ project.name }} to your liking!

-   [Set up experimental and optional Admin API](adminApi)
-   [Skip to server configuration](configuration)
-   [Skip to reverse proxy / SSL](reverseProxy.md)
-   [Skip to security](security)
