# Migrating from Staging

'Staging' refers to [this branch](https://github.com/fosscord/fosscord-server/tree/staging) of fosscord-server,
which is deprecated in favour of [the refactor branch](https://github.com/fosscord/fosscord-server/tree/maddy/refactor) (if this is a 404, its just become the main branch now).

!!! warn "If you were using SQLite, you will be unable to migrate to the new version. SQLite is primarily for testing and development purposes, and it should not be used for production."

To migrate from Staging:

1. Download the new version of fosscord-server  
   `git clone https://github.com/fosscord/fosscord-server.git`
2. Copy your `.env` file from your previous installation to the new `fosscord-server` folder.
3. Copy any user data, specifically the `files` directory, to the new project root.
4. `npm i` in new installation
5. `npm run setup`
6. `npm run migrate-from-staging` to run the migrations on your database
7. `npm run start` to start the server

Make sure you modify any existing scripts of yours to use the new path,
or just rename the old one and move the new one in its place.
