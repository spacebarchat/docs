To get the permission for a guild member import the `getPermission` from `fosscord-server-util`.

```ts
import { getPermission } from "fosscord-server-util";
```

The first argument is the user_id the second the guild_id and the third an optional channel_id

```ts
const permissions = await getPermission(user_id: string, guild_id: string, channel_id?: string)

const permissions = await getPermission("106142653265366125", "4061326832657368175")
```

### Example

```ts
const perms = await getPermission(req.userid, guild_id);
// preferred method: Use this if you want to check if a user lacks a certain permission and abort the operation
perms.hasThrow("MANAGE_GUILD") // will throw an error if the users lacks the permission

if (perms.has("MANAGE_GUILD")) {
    ...
}
```
