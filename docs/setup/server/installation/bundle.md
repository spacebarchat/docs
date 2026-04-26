---
title: Baremetal (bundle)
---
# NPM Bundle

The easiest way to set up a {{ project.name }} server is by running the npm bundle, which runs the API, gateway, and CDN processes together.
This guide will assume that you own a paid domain name, and are on Linux.

## Dependencies

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org). Version 24+ (for `npm`, `node` commands)
     (NOTE: Ubuntu and Debian based systems often ship with an outdated version of NodeJS, so you can use [NodeSource](https://github.com/nodesource/distributions) to install a newer version)
-   [Python](https://www.python.org/). Version 3.13 or later. Make sure this is executable via `python` in your terminal.  
     (See: `python-is-python3` package)
-   [.NET SDK](https://dot.net). Version 9.0+. Optional, but used for the experimental [Admin API](../adminApi).
-   On Linux: `gcc`/`g++`. Packaged with `build-essential` on Debian/Ubuntu and `base-devel` on Arch.
-   On Windows: [Visual Studio](https://visualstudio.microsoft.com/) (**NOT** VSCode) with the `Desktop development with C++` package.
    You do not need the full Visual Studio install, the build tools are fine.
-   Hint: If you have the [`nix`](https://nixos.org/download/) package manager installed, you can skip all of the above by running `nix develop .#` in your terminal.

## Setup

First, set up a [PostgreSQL database](../database.md). Once that's done, you can continue setting up your Spacebar instance.

In your terminal:

```bash
# Download {{ project.name }}
git clone {{ repositories.base_url }}/{{ repositories.server }}.git && cd server

# Install javascript packages
npm i

# Build and generate schema + openapi. Separately, they are `build:src:tsgo`, `generate:schema` and `generate:openapi`.
npm run build:tsgo

# Set some environment variables regarding configuration
export CONFIG_PATH=config.json
export DATABASE='postgres://user:password@127.0.0.1/spacebar'

# Start the bundle server (API, CDN, Gateway in one) - not recommended for production instances
npm run start
```

The server should error out with some instructions, particularly missing configuration values:
```jsonc
{
  "api": { "endpointPublic": "https://api.spacebar.your-domain.net" }, // public URL to your API
  "gateway": { "endpointPublic": "wss://gateway.spacebar.your-domain.net" }, // public URL to your gateway
  "cdn": {
    "endpointPublic": "https://cdn.spacebar.your-domain.net", // public URL to your CDN
    "endpointPrivate": "http://localhost:3001" // special: this should be routable from the API! If not, file uploads will fail.
  },
  "general": { "serverName": "spacebar.your-domain.net" } // your "server name" should be the public domain of your instance, where .well-knowns are available
}
```

Then start the server again.

If all went according to plan, you can now access your new {{ project.name }} instance via `curl http://localhost:3001` on the server! Congrats!

# Connecting from remote machines

For your server to be a bit more useful to those not on the same machine, you'll need to do a bit more configuration.

Spacebar clients generally do automatic discovery of the endpoints it uses to communicate with the server,
but it needs to retrieve those from somewhere, that being the API server.

If you don't tell the API server where to find the other services, the Spacebar clients wont be able to connect.
Other clients which don't do automatic discovery will be, but that's because your users will need to provide the locations manually.

To achieve this, you'll need to configure a [reverse proxy w/ SSL](../reverseProxy.md).

## Now what?

Well, now you can configure {{ project.name }} to your liking!

-   [Set up experimental and optional Admin API](../adminApi)
-   [Do more in-depth configuration](../configuration)
-   [Explore security-related options](../security)
