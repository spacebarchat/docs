# Server Setup

A basic {{ project.name }} server setup consist of three services:

- The API service provides a REST API for the client
- The gateway service provides a websocket endpoint for the client
- The CDN service serves static files such as uploaded images.

In most cases you do not need to configure these services separately.

The following sections will guide you through the setup of a {{ project.name }} server:

- [Installation](./installation/) explains how to install and run a server for the first time,
- [Configuration](./configuration/) explains how to further configure your server to your needs,
- [Security](./security/) contains details on how to harden a {{ project.name }} setup,
- and a wide range of advanced topics can be found in the sidebar.

For this guide, we assume you're familar with the terminal.

We do **not** recommend or support running {{ project.name }} using services such as Ngrok, Heroku or vercel.  
You **must** have access to a terminal for this guide. We do not recommend using Windows to run {{ project.name }}.
