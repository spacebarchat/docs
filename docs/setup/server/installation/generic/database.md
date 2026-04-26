# Database

{{ project.name }} requires a PostgreSQL database server. This allows us to tailor support for one implementation,
rather than maintaining 10 of them.

We won't go into the setup of these servers here, given the scope of our documentation,
but to configure {{ project.name }} to use your shiny new database, simply set the `DATABASE` [environment variable](../../configuration/env.md)
to your new database connection string. You can generally find decent documentation with a quick web search:

  - NixOS: <https://wiki.nixos.org/wiki/PostgreSQL>
  - Debian/ubuntu: <https://wiki.debian.org/PostgreSql> (also see [upstream documentation](https://wiki.postgresql.org/wiki/Apt))
  - Arch Linux: <https://wiki.archlinux.org/title/PostgreSQL>
  - Gentoo: <https://wiki.gentoo.org/wiki/PostgreSQL> ([QuickStart guide](https://wiki.gentoo.org/wiki/PostgreSQL/QuickStart))
  - Fedora: <https://docs.fedoraproject.org/en-US/quick-docs/postgresql/>

Usually, such a string will look something like `postgres://username:password@127.0.0.1:5432/databaseName`

For .NET based services (eg. the Admin API), the connection string will be in an appsettings file, with the following
format: `Host=127.0.0.1; Username=username; Password=password Database=spacebar; Port=5432; Include Error Detail=true; Maximum Pool Size=1000; Command Timeout=6000; Timeout=600;`