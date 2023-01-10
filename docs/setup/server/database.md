# Database

By default, Fosscord will use SQLite. SQLite is nice for testing or development,
but if you plan to run an instance with any sort of demand, you'd best set up a more Proper™ database
such as MariaDB or PostreSQL, which are both popular choices within the community.

We won't go into the setup of these servers here, given the scope of our documentation,
but to configure Fosscord to use your shiny new database, simply set the `DATABASE` [environment variable](configuration/env.md)
to your new database connection string.

Usually, such a string will look something like  
`type://username:password@your-IP/databaseName`
