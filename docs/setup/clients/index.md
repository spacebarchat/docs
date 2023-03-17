# Clients

!!! note "The {{ name }} client is, at the time of writing this (March 17th, 2023), under heavy development and not ready to be used in production just yet."

!!! note "Windows support is currently broken."

The official {{ name }} client is currently being developed at [this repository](https://github.com/{{ name.lower() }}/{{ name.lower() }}-client/tree/dev/bare-rewrite).

## Dependencies

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org). Version 16+
-   [yarn](https://yarnpkg.com/) (preferred) or npm

## Setup/Building

In your terminal:

```bash
# Download {{ name }} Client
git clone https://github.com/{{ name.lower() }}/{{ name.lower() }}-client.git

# Enter the cloned directory, switch branches to the one, which is actually being developed
cd {{ name.lower() }}-client; git switch dev/bare-rewrite

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

-   [Fork the repository](https://github.com/{{ name.lower() }}/{{ name.lower() }}-client/fork)
-   Run the building instructions.
-   Commit & Push.
-   Pull Request & Done!

### What can I contribute?

To quote the current lead client developer Puyodead1 directly:

> uh, Idk. for the moment, I think we should focus more on "core" features like settings, editing messages, dms, markdown rendering, etc etc etc. with that, I would also say just use common sense, what do you think are basic features that you would want? some of the github issues apply to this.
> but hey, if you want to work on something else like voice/video as a wild wacky idea, im not going to stop you. xD
> if anyone else wants to chime in on [this](https://github.com/{{ name.lower() }}/{{ name.lower() }}-client/issues/21), go ahead
>
> -- <cite>Puyodead1</cite>
