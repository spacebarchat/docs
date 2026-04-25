# Migrations

## What you need to know

-   SQL
-   Preferably the syntax of SQL used by Postgres.

## Generating Migrations

To generate a database migration in {{ project.name.lower() }}-server:

1. Create a new database and configure the DATABASE environment variable
2. On the branch/commit you want to migrate _from_ (or just current commit if your change is incremental),
   run the server to initialise the database.
3. Switch to branch/commit you want to migrate _to_, and run

    ```
    npm run generate:migration -- src/util/migration/postgres/:migrationName:
    ```

    `:migrationName:` is the name of your migration, and should generally describe the change(s).
    The migration must be named a valid Javascript class name (eg. `MyEntityAddFieldName`).

4. The generated file is what TypeORM will do if you were to run `npm run sync:db`.
   Obviously, this is not always what you want. Edit it to preserve as much of the original data as possible.
5. If relevant, update the .NET database models in extra/admin-api with the provided script.

You can also write the migration by hand, if you so desire.

Once you've got your migration written, re-building and running the server will automatically run the migrations.
Make sure you have backups of the original (step one) database, so you don't have to keep switching branches.
