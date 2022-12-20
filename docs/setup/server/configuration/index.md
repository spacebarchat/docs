# Configuration

Fosscord's configuration is done through the `config` table of your database.
The table schema consists of two columns `key` and `value`, where `value` is a JSON value.
For now, you can update this through SQL manually or a GUI database editor such as
[DBeaver](https://dbeaver.io/) or [SQLite Browser](https://sqlitebrowser.org/) if using SQLite.

The available configuration options, as 20/12/22 are listed below.
If a key is prepended by `?`, it is optional. The `?` is not a part of the key name.

TODO: All available config options.
