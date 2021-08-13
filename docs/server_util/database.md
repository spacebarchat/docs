# Database

## Philosophy

We create [mongoose](http://mongoosejs.com/) models and typescript interfaces for every data structure in the database.

We use strings for all id's and for bitfields we use bigint's

## Documentation

Have a look at the [mongoose documentation](https://mongoosejs.com/docs/) to get familiar with it or watch this [tutorial](https://youtu.be/WDrU305J1yw)

## Getting Started

```ts
import mongoose from "mongoose";
```

and now you can query the database, here are some examples:

```ts
import { GuildModel} from "fosscord-server-util";

await new GuildModel({ ... }).save(); // inserts a new guild

const guild = await GuildModel.findOne({id: ... }).exec(); // searches for a guild
```

## Models

We have mongoose Database Models and additionally [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html).

They are located in the repo `fosscord-server-util` under `/src/models/`.

To add your own Database Model, create a new file and export the model and the interface.

Example:

```ts
export interface Event extends Document {
	guild_id?: bigint;
	user_id?: bigint;
	channel_id?: bigint;
	created_at?: number;
	event: EVENT;
	data?: any;
}

export const EventSchema = new Schema({
	guild_id: Types.Long,
	user_id: Types.Long,
	channel_id: Types.Long,
	created_at: { type: Number, required: true },
	event: { type: String, required: true },
	data: Object,
});

export const EventModel = model<Event>("Event", EventSchema, "events");
```

## Emit events

Most Routes modify the database and therefore need to inform the clients with events for data changes.

_(Events are stored in a MongoDB Event Store collection and distributed to the individual gateway servers)_

You can find all events on the [discord docs page](https://discord.com/developers/docs/topics/gateway#commands-and-events) and in [`server-util/src/modesl/Event.ts`](https://github.com/fosscord/fosscord-server-util/blob/master/src/models/Event.ts)

To emit an event import the `emitEvent` function from `/src/util/Event.ts`

```ts
import { emitEvent } from "../../../util/Event";
```

this will take a the following parameters:

```ts
{
	guild_id?: bigint; // specify this if this event should be sent to all guild members
	channel_id?: bigint; // specify this if this event should be sent to all channel members (e.g. group dm)
	user_id?: bigint; // specify this if this event should be sent to the specific user
	event: string; // the EVENTNAME, you can find all gateway event names in the fosscord-server-util Events file
	data?: any; // event payload data
}
```

For easy intellisense, annotate the parameter with the corresponding Event interface from `fosscord-server-util`:

```ts
import { GuildDeleteEvent } from "fosscord-server-util";

emitEvent({...} as GuildDeleteEvent);
// or with <> brackets:
emitEvent(<GuildDeleteEvent>{...});
```

### Example

Putting it all together:

```ts
await emitEvent({
	event: "GUILD_DELETE",
	data: {
		id: guildID,
	},
	guild_id: guildID,
} as GuildDeleteEvent);
```