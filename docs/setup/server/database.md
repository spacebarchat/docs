# Database

By default, {{ project.name }} will use SQLite. SQLite is nice for testing or development.
The SQLite database is stored in the `database.db` file at the server root by default.
You may delete this file to regenerate a new SQLite database on the next server start
(or through `npm run sync:db`).

However, if you plan to run an instance with any sort of demand, you'd best set up a more Proper™ database
such as MariaDB or PostgreSQL, which are both popular choices within the community.

We won't go into the setup of these servers here, given the scope of our documentation,
but to configure {{ project.name }} to use your shiny new database, simply set the `DATABASE` [environment variable](configuration/env.md)
to your new database connection string.

Usually, such a string will look something like `type://username:password@host-IP:port/databaseName`
