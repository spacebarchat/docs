# Migrations

## What you need to know

-   SQL
-   Preferably the various syntax of SQL used by MariaDB/MySQL and Postgres.
    Although if you only write the migration for one, making a PR so others can is good enough.

## Generating Migrations

To generate a database migration in fosscord-server:

1. On the branch/commit you want to migrate _from_, generate the database.
   You can run the server or run [`npm run sync:db`](../../setup/server/npmScripts.md#syncdb).
2. Switch to branch/commit you want to migrate _to_, and run
    ```
    npm run generate:migration -- src/util/migrations/:dbms:/:migrationName:
    ```
    where `:dbms:` is the db you use, and `:migrationName:` is whatever you wish to call it.
	The migration must be named a valid Javascript class name.
3. The generated file is what TypeORM will do if you were to run `npm run sync:db`.
   Obviously, this is not always what you want. Edit it to preserve as much of the original data as possible.

Once you've got your migration written, running the server will automatically run the migrations.
Make sure you have backups of the original (step one) database, so you don't have to keep switching branches.
