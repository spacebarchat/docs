# User Flags

User flags describe special properties of users, including whether they are staff, a verified bot, a bug hunter, etc.

You can change a user's flags by setting the `public_flags` value in the `users` table.
You can assign multiple flags by simply summing the respective values.

A list of all user flags implemented on Discord.com is available [here](https://github.com/Delitefully/DiscordLists/blob/master/flags.md)

Currently, the only user flag to have an effect on server-side functionality is `STAFF` ( 1 ).
