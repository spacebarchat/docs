# Clients

!!! note "The {{ project.name }} client is, at the time of writing this (March 17th, 2023), under heavy development and not ready to be used in production just yet."

!!! warning "Windows support is currently broken."

The official {{ project.name }} client is currently being developed at [this repository]({{ repositories.base_url }}/{{ repositories.client }}/tree/dev/bare-rewrite).

## Official host

We currently host the client at [https://app.{{ project.domain }}](https://app.{{ project.domain }}).
You can use it to connect to our official instance by default,
or you can use it to connect to your own by editing your local storage to include the `routeSettings` key with the below example content:

```json
{
 "api": "https://staging.{{ project.domain }}/api/v9",
 "cdn": "https://cdn.staging.{{ project.domain }}",
 "gateway": "wss://gateway.staging.{{ project.domain }}",
 "invite": "https://staging.{{ project.domain }}/invite",
 "template": "https://staging.{{ project.domain }}/template",
 "gift": "https://staging.{{ project.domain }}/gift",
 "scheduledEvent": "https://staging.{{ project.domain }}/events"
}
```

Replace the above endpoints with your own. If your domain name is `https://whatever.notasite`, then you'll most likely want to enter
`https://whatever.noasite/api/v9` for the API endpoint, etc.

## Setup/Building

### Dependencies

- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org). Version 16+
- [yarn](https://yarnpkg.com/) (preferred) or npm

In your terminal:

```bash
# Download {{ project.name }} Client
git clone {{ repositories.base_url }}/{{ repositories.client }}.git

# Enter the cloned directory, switch branches to the one, which is actually being developed
cd client; git switch dev/bare-rewrite

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

- [Fork the repository]({{ repositories.base_url }}/{{ repositories.client }}/fork)
- Run the building instructions.
- Commit & Push.
- Pull Request & Done!

### What can I contribute?

- "Core" features like settings, editing messages, dms, markdown rendering, etc. What do you think are basic features that you would want? Some of the GitHub Issues apply to this.
- Implementing other things like voice/video is fine too, though
- [This]({{ repositories.base_url }}/{{ repositories.client }}/issues/21) is a good starting point and lists the core features that are still missing from the client.
