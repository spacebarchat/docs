# Admin API Setup

{{ project.name }}-server Admin API setup ranges in difficulty depending on how you want to configure your system.
This page provides a minimal setup guide to get you up and running,
you should check out the other pages on this site to take your instance to the next level.

For this guide, we assume you're familar with the terminal.

Running the {{ project.name }}-server Admin API on services such as Ngrok, Heroku or Vercel is **not** supported.

Additionally, the Admin API has not been tested on Windows, 

## Dependencies

-   [Git](https://git-scm.com/)
-   [.NET SDK](https://dot.net). Version 9.0+.
-   [PostgreSQL](https://postgresql.org/). The Admin API does **not** work with SQLite.
-   [RabbitMQ](https://rabbitmq.com/). The Admin API heavily relies on a server setup with RabbitMQ.
-   Hint: If you have the [`nix`](https://nixos.org/download/) package manager installed, you can skip all of the above by running `nix develop .#` in your terminal.

## Setup

In your terminal:

```bash
# Download {{ project.name }}
git clone {{ repositories.base_url }}/{{ repositories.server }}.git

# Navigate to project root
cd server/extra/admin-api/Spacebar.AdminApi

# Configure Admin API (ignore JSON comment warnings)
nvim appsettings.Development.json

# Build the Admin API
dotnet build -c Release

# Start the Admin API
dotnet bin/Release/net9.0/Spacebar.AdminApi.dll
```

## Setup Test Client (optional)

We're assuming you're in the same directory as where you built the admin api:

```sh
# Navigate to project root
cd ../Utilities/Spacebar.AdminApi.TestClient

# Start the Test Client
dotnet run -c Release
```

If all went according to plan, you can now access your new {{ project.name }} instance at the URLs printed in console! Congrats!

If you set up your server remotely, verify the server is up and running. We recommend using SSH Port Forwarding rather than exposing
the admin API over the internet for the time being. (ie. `ssh -L 1234:127.0.0.1:5678 chat.example.com`, where 1234 is the local port,
and 5678 is the port on the server. You can also run both of these locally, if you repeat the -L part for both PostgreSQL (5432) and 
RabbitMQ (5673), and adjust the app settings to point to the local ports @ localhost).
