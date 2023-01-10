# Server Setup

Fosscord-server setup ranges in difficulty depending on how you want to configure your system.
This page provides a minimal setup guide to get you up and running,
you should check out the other pages on this site to take your instance to the next level.

For this guide, we assume you're familar with the terminal.

We do **not** recommend or support running Fosscord using services such as Ngrok or Heroku.  
You **must** have access to a terminal for this guide.

We do not recommend using Windows to run Fosscord.

## Dependencies

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org). Version 16+
-   [Python](https://www.python.org/). Version 3+. Make sure this is executable via `python` in your terminal.  
    (See: `python-is-python3` package)
-   On Linux: `gcc`/`g++`. Packaged with `build-essential` on Debian/Ubuntu and `base-devel` on Arch.
-   On Windows: [Visual Studio](https://visualstudio.microsoft.com/) (**NOT** VSCode) with the `Desktop development with C++` package.
    You do not need the full Visual Studio install, the build tools are fine.

## Setup

In your terminal:

```bash
# Download Fosscord
git clone https://github.com/fosscord/fosscord-server.git

# Navigate to project root
cd fosscord-server

# Install javascript packages
npm i

# Build and generate schema. Separately, they are `build` and `generate:schema`.
npm run setup

# Start the bundle server ( API, CDN, Gateway in one )
npm run start
```

If all went according to plan, you can now access your new Fosscord instance at [http://localhost:3001](http://localhost:3001)! Congrats!

If you set up your server remotely, you can use `curl http://localhost:3001/api/ping` to verify the server is up and running,
(you should set up a reverse proxy, next!).

## Now what?

Well, now you can configure Fosscord to your liking!

-   [Skip to test client configuration](Test%20Client/index.md)
-   [Skip to server configuration](configuration)
-   [Skip to reverse proxy / SSL](reverseProxy.md)
-   [Skip to security](security)
