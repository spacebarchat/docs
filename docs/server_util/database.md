# Database

## Philosophy

The instance hoster should be able to use any database they want for their specific size and purpose.

That is why we use [typeorm](https://typeorm.io/) for database entities (models) for every data structure we use, because typeorm supports many different database engines.

We use strings for all ids and bitfields (Tho when working with bitfields we convert it to BigInts and pass it to the utility `BitField` class)

## Documentation

Have a look at the [typeorm documentation](https://typeorm.io/) to get familiar with it or watch this [tutorial](https://youtu.be/Paz0gnODPE0).

TypeORM supports MySQL, MariaDB, Postgres, CockroachDB, SQLite, Microsoft SQL Server, Oracle, SAP Hana, sql.js

## Getting Started

Import the entity you want to select, manipulate, delete or insert from `@fosscord/util`

[List of all entities](https://github.com/fosscord/fosscord-server/blob/typeorm/util/src/entities/index.ts): `Application, Attachment, AuditLog, Ban, BaseClass, Channel, Config, ConnectedAccount, Emoji, Guild, Invite, Member, Message, RateLimit, ReadState, Recipient, Relationship, Role, Sticker, Team, TeamMember, Template, User, VoiceState, Webhook`

### Example database query

```ts
import { Guild } from "fosscord-server-util";

await new Guild({ ... }).save(); // inserts a new guild or updates it if it already exists

const guild = await Guild.findOne({ id: "23948723947932" }).exec(); // searches for a guild

await Guild.delete({ owner_id: "34975309473" })
```

## Entities

The typeorm database entities are located in [`util/src/entities/`](https://github.com/fosscord/fosscord-server/tree/master/util/src/entities).

To add your own database entity, create a new file, export the model and import/export it in [`util/src/entities/index.ts`](<(https://github.com/fosscord/fosscord-server/tree/master/util/src/entities/index.ts)>).

### Example entity

```ts
@Entity("users")
export class User extends BaseClass {
	// id column is automatically added by BaseClass

	@Column()
	username: string;

	@JoinColumn({ name: "connected_account_ids" })
	@OneToMany(() => ConnectedAccount, (account: ConnectedAccount) => account.user)
	connected_accounts: ConnectedAccount[];

	static async getPublicUser(user_id: string, opts?: FindOneOptions<User>) {
		const user = await User.findOne(
			{ id: user_id },
			{
				...opts,
				select: [...PublicUserProjection, ...(opts?.select || [])],
			}
		);
		if (!user) throw new HTTPError("User not found", 404);
		return user;
	}
}
```

## Emit events

Most Routes modify the database and therefore need to inform the clients with events for data changes.

Events are either stored locally if the server was started through the bundle or in RabbitMQ and are distributed to the gateway servers.

You can find all events on the [discord docs page](https://discord.com/developers/docs/topics/gateway#commands-and-events) and in [`util/src/interfaces/Event.ts`](https://github.com/fosscord/fosscord-server/blob/master/util/src/interfaces/Event.ts).

To emit an event import the `emitEvent` function from `@fosscord/util`

```ts
import { emitEvent } from "../../../util/Event";
```

You need to specify whom you want to send the event to, to do that either pass `guild_id`, `user_id` or `channel_id`.
Additionally you need to set the [eventname](https://github.com/fosscord/fosscord-server/blob/typeorm/util/src/interfaces/Event.ts#L465) e.g. `GUILD_DELETE`.

```ts
{
	guild_id?: bigint; // specify this if this event should be sent to all guild members
	channel_id?: bigint; // specify this if this event should be sent to all channel members
	user_id?: bigint; // specify this if this event should be sent to the specific user
	event: string; // the EVENTNAME, you can find all gateway event names in the @fosscord/util Events file
	data?: any; // event payload data
}
```

For easy intellisense, annotate the parameter with the corresponding [Event interface](https://github.com/fosscord/fosscord-server/blob/typeorm/util/src/interfaces/Event.ts) from `@fosscord/util`:

```ts
import { GuildDeleteEvent } from "@fosscord/util";

emitEvent({...} as GuildDeleteEvent);
```

### Example emit event

Putting it all together:

```ts
await emitEvent({
	user_id: "3297349345345874",
	event: "GUILD_DELETE",
	data: {
		id: "96784598743975349",
	},
} as GuildDeleteEvent);
```
