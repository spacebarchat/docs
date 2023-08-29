# React Client

!!! note "The {{ project.name }} client is under heavy development and not ready to be used in production yet."

The official {{ project.name }} client is currently being developed at [this repository]({{ repositories.base_url }}/{{ repositories.client }}).

## Official host

The client is currently hosted at [https://app.{{ project.domain }}](https://app.{{ project.domain }}).
You can use it to connect to our official instance by default, or you can use it to connect to your
own instance by editing the `Instance` field on the login page (This requires having [wellknown](/setup/server/wellknown/) setup).

Replace the above endpoints with your own. If your domain name is `https://whatever.notasite`, then you'll most likely want to enter
`https://whatever.notasite/api/v9` for the API endpoint, etc.

## Setup/Building

### Dependencies

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org): Version 18+
-   [pnpm](https://pnpm.io/)

In your terminal:

```bash
# Download {{ project.name }} Client
git clone {{ repositories.base_url }}/{{ repositories.client }}.git

# Enter the cloned directory
cd client

# Install dependencies
pnpm install
```

To start the client for development, run

```bash
pnpm start
```

To build static files for the web (i.e. when hosting it yourself), run

```bash
pnpm build
```

Files will be built to `build`. These files need to be served by a Web Server such as Nginx or Apache, the `index.html` file cannot just be opened in a browser.

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
