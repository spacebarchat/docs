# Clients

!!! note "The {{ project.name }} client is, at the time of writing this (March 17th, 2023), under heavy development and not ready to be used in production just yet."

!!! warning "Windows support is currently broken."

The official {{ project.name }} client is currently being developed at [this repository]({{ repositories.base_url }}/{{ repositories.client }}).

## Official host

The new, React-only client is being hosted at [https://dev.app.{{ project.domain }}](https://dev.app.{{ project.domain }}).
An older, React Native version of the client can be found at
[https://app.{{ project.domain }}](https://app.{{ project.domain }}).
You can use it to connect to our official instance by default, or you can use it to connect to your
own instance by editing your local storage to include the `routeSettings` key with the below example
content:

```json
{
	"api": "https://api.old.server.{{ project.domain }}/api/v9",
	"cdn": "https://cdn.old.server.{{ project.domain }}",
	"gateway": "wss://gateway.old.server.{{ project.domain }}",
	"invite": "https://old.server.{{ project.domain }}/invite",
	"template": "https://old.server.{{ project.domain }}/template",
	"gift": "https://old.server.{{ project.domain }}/gift",
	"scheduledEvent": "https://old.server.{{ project.domain }}/events"
}
```

Replace the above endpoints with your own. If your domain name is `https://whatever.notasite`, then you'll most likely want to enter
`https://whatever.notasite/api/v9` for the API endpoint, etc.

If you're using the React Native client, you can also edit these settings by visiting [https://app.{{ project.domain }}/settings](https://app.{{ project.domain }}/settings).

## Setup/Building

These Instructions refer to the old, React Native client, and therefore do not apply to the new, React-only client.

### Dependencies

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org). Version 18+
-   [yarn](https://yarnpkg.com/)

In your terminal:

```bash
# Download {{ project.name }} Client
git clone {{ repositories.base_url }}/{{ repositories.client }}.git -b legacy-v2

# Enter the cloned directory, switch branches to the one, which is actually being developed
cd client

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

To build static files for the web (i.e. when hosting it yourself), run

```bash
yarn build:web
```

Files will be built to `web-build`

## Contributing

To contribute:

-   [Fork the repository]({{ repositories.base_url }}/{{ repositories.client }}/fork)
-   Run the building instructions.
-   Commit & Push.
-   Pull Request & Done!

### What can I contribute?

-   "Core" features like settings, editing messages, dms, markdown rendering, etc. What do you think are basic features that you would want? Some of the GitHub Issues apply to this.
-   Implementing other things like voice/video is fine too, though
-   [This]({{ repositories.base_url }}/{{ repositories.client }}/issues/21) is a good starting point and lists the core features that are still missing from the client.
