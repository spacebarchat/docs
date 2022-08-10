# Database

By default, Fosscord uses Sqlite as its database. But doing this in a production environment is highly discouraged for performance reasons.

You can change the database Fosscord uses by editing the ``DATABASE`` environment variable. This is further explained [here](env.md)

## Connection URL

The connection URL you need to specify looks like this:

```
[type]://[username]:[password]@[address]/[dbname]
```

Replace the variables marked with ``[]`` with the following:

| Name | Description |
| --- | --- |
| [type] | The type of database to use, either ``mariadb`` or ``postgres`` |
| [username] | The name of a user with access to the database |
| [password] | The password for the user |
| [address] | The network address the database is located at, most likely ``localhost`` |
| [dbname] | The name of the database to use |