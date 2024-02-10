# Guild Features

Guild features are special modifiers assigned to guilds for additional functionality.

In {{ project.name }}, guild features are stored in the `features` column of the `guilds` table as a comma separated list, with no spaces.
For example, `ANIMATED_ICON,BANNER,DISCOVERABLE`.

A list of all guild features implemented on Discord.com is available [here](https://github.com/Delitefully/DiscordLists#guild-feature-glossary)

Below is a list of guild features that {{ project.name }} currently implements server-side, including ones not implemented by Discord.com:

| Feature                       | Description                                                 |
| ----------------------------- | ----------------------------------------------------------- |
| `VIP_REGIONS`                 | Grants access to VIP voice regions                          |
| `ALIASABLE_NAMES`             | Allows multiple vanity URLs                                 |
| `VANITY_URL`                  | Asserted if the guild has a vanity name                     |
| `INTERNAL_EMPLOYEE_ONLY`      | Requires all guild members be [staff](userFlags.md)         |
| `INVITES_DISABLED`            | Prevents joining this guild                                 |
| `CROSS_CHANNEL_REPLIES`       | Allows replies to be from outside the current channel       |
| `ALLOW_INVALID_CHANNEL_NAMES` | Allow 'bad' channel names (spaces, invalid characters, etc) |
| `IRC_LIKE_CATEGORY_NAMES`     | Use same validation for category names as channel names     |
| `ALLOW_UNNAMED_CHANNELS`      | Allow unnamed channels/categories                           |
| `DISCOVERABLE`                | Show this guild in Discovery                                |
