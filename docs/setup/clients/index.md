# Clients

!!! note "The Fosscord client is, at the time of writing this (March 17th, 2023), under heavy development and not ready to be used in production just yet."

!!! note "Windows support is currently broken."

The official Fosscord client is currently being developed at [this repository](https://github.com/fosscord/fosscord-client/tree/dev/bare-rewrite).

## Dependencies

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org). Version 16+
-   [yarn](https://yarnpkg.com/) (preferred) or npm

## Setup/Building

In your terminal:

```bash
# Download Fosscord Client
git clone https://github.com/fosscord/fosscord-client.git

# Enter the cloned directory, switch branches to the one, which is actually being developed
cd fosscord-client; git switch dev/bare-rewrite

# Install dependencies
yarn install
```

To start the client with Metro for development, run

```bash
yarn start
```

!!! note "Platform-specific development commands:"

    For development for Android, run

    ```bash
    yarn android
    ```

    For development for iOS, run

    ```bash
    yarn ios
    ```

    For development for Windows, run

    ```bash
    yarn windows
    ```

To build static files for the web, run

```bash
yarn build:web
```

Files will be built to `web-build`

## Contributing

To contribute:

-   [Fork the repository](https://github.com/fosscord/fosscord-client/fork)
-   Run the building instructions.
-   Commit & Push.
-   Pull Request & Done!

### What can I contribute?

-   "Core" features like settings, editing messages, dms, markdown rendering, etc. What do you think are basic features that you would want? Some of the GitHub Issues apply to this.
-   Implementing other things like voice/video is fine too, though
-   [This](https://github.com/fosscord/fosscord-client/issues/21) is a good starting point and lists all things that are still missing from the client.
