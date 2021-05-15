To get the permission for a guild member import the `getPermission` from `fosscord-server-util`.

```ts
import { getPermission } from "fosscord-server-util";
```

The first argument is the user_id the second the guild_id and the third channel_id

If you want to receive the permission for a certain channel:

```ts
const permissions = await getPermission(user_id: string, guild_id: string, channel_id?: string)
```

### Example

```ts
const perms = await getPermission(req.userid, guild_id);
perms.hasThrow("MANAGE_GUILD") // will throw an error if the users lacks the permission

if (perms.has("MANAGE_GUILD")) {
    ...
}
```
