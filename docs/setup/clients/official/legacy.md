# Legacy Client

!!! danger "This version is no longer under active development! Please see [React Client](dev.md) for the current in-development version."

!!! warning "Windows support is currently broken."

## Official host

The client will connect to our official instance by default, or you can use it to connect to your
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

Replace the above endpoints with your own. If your domain name is `https://example.com`, then you'll most likely want to enter
`https://example.com/api/v9` for the API endpoint, etc.

You can also edit these settings by visiting `https://client.example.com/settings`

## Setup/Building

### Dependencies

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org). Version 18+
-   [yarn](https://yarnpkg.com/)

In your terminal:

```bash
# Download {{ project.name }} Client
git clone {{ repositories.base_url }}/{{ repositories.client }}.git -b legacy-v2

# Enter the cloned directory
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

Files will be built to `web-build`. These files need to be served by a Web Server such as Nginx or Apache, the `index.html` file cannot just be opened in a browser.

## Contributing

This version is no longer being developed, you are free to clone the repository and make your own changes though!
