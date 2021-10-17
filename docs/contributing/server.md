# Server

## Requirements

Accept the [code of conduct](/contributing/) and follow the server [setup guide](/setup) to setup the development environment.

## Gateway

The Gateway is a WebSocket server that is responsible for listening and emitting events.

For documentation, head over to the [Discord docs](https://discord.dev) as our own documentation is not written yet.

If you want to work on a feature, please comment on the corresponding issue or open a issue so so nobody implements something twice.

For the WebSocket, we use the [ws](https://www.npmjs.com/package/ws) package and we'll write our own packet handler for the individual opcodes and events.

## API

The API is a HTTP REST server that process requests and manipulates the database.

You can find the api documentation [here](/api/).

You can find the Roadmap overview [here](https://github.com/fosscord/fosscord-server/issues/140).

Every route has its own [issue](https://github.com/fosscord/fosscord-api/issues?q=is%3Aopen+is%3Aissue+label%3ARoute).

If you want to work on a feature please comment on the corresponding issue or write us on our [development server](https://discord.gg/ZrnGQP6p3d) so we can assign and discuss it and nobody implements something twice.

### Structure

You can find the [API directory](https://github.com/fosscord/fosscord-server/tree/master/api) in the [fosscord-server](https://github.com/fosscord/fosscord-server) Github repository.

Inside it you can find:

#### Translation

We use [i18next](https://www.i18next.com/) to manage translation/localization in _some_ API Responses.

The `.json` language files are located in `/api/locales/` and are separated by namespaces.

#### Source code

We use [TypeScript](https://www.typescriptlang.org/) (JavaScript with types).
The `.ts` source files are located in [`/api/src/`](https://github.com/fosscord/fosscord-server/tree/master/api/src) and will be compiled to `.js` in the `/api/dist/` directory.

#### Middlewares

All Express [Middlewares](http://expressjs.com/en/guide/writing-middleware.html) are in [`/api/src/middlewares/`](https://github.com/fosscord/fosscord-server/tree/master/api/src/middlewares) and need to be manually loaded by [`/api/src/Server.ts`](https://github.com/fosscord/fosscord-server/blob/master/api/src/Server.ts).

#### Routes

All Express [Router](http://expressjs.com/en/4x/api.html#router) routes are in [`/api/src/routes/`](https://github.com/fosscord/fosscord-server/tree/master/api/src/routes) and are automatically registered based on the file structure.

#### Models

All database TypeORM entities are located in [`/util/src/entities`](https://github.com/fosscord/fosscord-server/tree/master/util/src/entities)

#### Util

All Utility functions are in the directory `/src/util/` and in [`@fosscord/util`](https://github.com/fosscord/fosscord-server/tree/master/util)

## Configuration

### Philosophy

Every fosscord server instance should be completely configurable in every way, without the need to change the source code.

The config should have reasonable defaults similar to discord.

Only in special cases it should require a third party config value.

The config should be changeable over the [admin dashboard](https://github.com/fosscord/fosscord-server/tree/master/dashboard) and update in realtime without the need to restart the servers.

The very first time the server starts, it saves to default config in the database. The next start it will load the config from the database.

### Example

You **should not** `get()` the Config in the root of your file and it instead load the config every time you access a value.

Import `Config` from fosscord-server-util:

```js
// at the top of the file import the Config file from /src/util/Config.ts
import { Config } from "@fosscord-server-util";
```

Access the Config in your route:

```js
router.get("/", (req: Request, res: Response) => {
    // call Config.get() to get the whole config object and then just access the property you want
    const { allowNewRegistration } = Config.get().register;
});
```

`Config.get()` returns the current config object and is not expensive at all

### Extending

The default Config is located in [server-util `/src/util/Config.ts`](https://github.com/fosscord/fosscord-server/blob/master/util/src/util/Config.ts) and exports a `interface DefaultOptions` and a `const DefaultOptions` object with reasonable default values.

To add your own values to the config, add the properties to the `interface` with corresponding types and add default values to `const DefaultOptions`.

Also you don't need to worry about updating "old config versions", because new values will automatically be synced with the database.

Note, however, that if the database already has a default value it won't update it.

## Routes

All routes are located in the directory `/src/routes/` and are loaded on start by a the [lambert-server](https://www.npmjs.com/package/lambert-server) package.

The HTTP API path is generated automatically based on the folder structure, so it is important that you name your files accordingly.

If you want to use URL Params like `:id` in e.g. `/users/:id` you need to use `#` instead of `:` for the folder/filename, because of file naming issues on windows.

`index.ts` files **won't** serve `/api/index` and instead alias the parent folder e.g. `/api/`

Your file needs to default export a [express.Router()](https://expressjs.com/de/4x/api.html#router):

```ts
import { Router } from express;
const router = Router();
export default router;
```

Now you can just use any regular express function on the router variable e.g:

```ts
router.get("/", (req, res) => {});
router.post("/", (req, res) => {});
router.get("/members", (req, res) => {});
```

### Authentication

Every request must contain the authorization header except the `/login` and `/register` route.

You can add additional non-auth routes in [`/src/middlewares/Authentication.ts`](https://github.com/fosscord/fosscord-server/blob/master/api/src/middlewares/Authentication.ts#L5)

To access the user id for the current request use `req.user_id`

### Body Validation

We use a custom body validation logic from lambert-server to check if the JSON body is valid.

To import the function from `/src/util/instanceOf.ts` use:

```ts
import { check } from "/src/util/instanceOf";
```

Now you can use the [middleware](http://expressjs.com/en/guide/using-middleware.html) `check` for your routes by calling check with your Body Schema.

```ts
router.post("/", check(...), (req,res) => {});
```

#### Schema

A Schema is a Object Structure with key-value objects that checks if the supplied body is an instance of the specified class.

```ts
{ id: String, roles: [String] }
```

_Notice if you use e.g. BigInt even if you can't supply it with JSON, it will automatically convert the supplied JSON number/string to a BigInt._

_Also if you want to check for an array of, just put the type inside `[]`._

#### Optional Parameter

You can specify optional parameters if you prefix the key with a `$` (dollar sign) e.g.: `{ $captcha: String }`, this will make the captcha property in the body optional.

#### Limit String length

Additionally import the class `Length` from instanceOf and specify the type by making a new `Length` Object taking following parameters:

```ts
import { Length } from "/src/util/instanceOf";
const min = 2;
const max = 32;
const type = String;

{
    username: new Length(min, max, type);
}
```

this will limit the maximum string/number/array length to the `min` and `max` value.

#### Example

```ts
import { check, Length } from "/src/util/instanceOf";
const SCHEMA = {
    username: new Length(2, 32, String),
    age: Number,
    $posts: [{ title: String }],
};
app.post("/", check(SCHEMA), (req, res) => {});
```

#### Throw Errors

If the body validation fails it will automatically throw an error.

The `errors` structure is a key-value Object describing what field contained the error:

```json
{
    "code": 50035,
    "message": "Invalid Form Body",
    "errors": {
        "email": {
            "_errors": [
                {
                    "message": "Email is already registered",
                    "code": "EMAIL_ALREADY_REGISTERED"
                }
            ]
        },
        "username": {
            "_errors": [
                {
                    "message": "Must be between 2 - 32 in length",
                    "code": "BASE_TYPE_BAD_LENGTH"
                }
            ]
        }
    }
}
```

To manually throw a `FieldError` import `FieldErrors`

```ts
import { FieldErrors } from /src/iltu / instanceOf;
```

To make sure your errors are understood in all languages translate it with [i18next](https://www.i18next.com/translation-function/essentials) and `req.t`.

So after you have checked the field is invalid throw the `FieldErrors`.

```ts
throw FieldErrors(( login: { message: req.t("auth:login.INVALID_LOGIN"), code: "INVALID_LOGIN" }});
```

## Database

### Philosophy

The instance hoster should be able to use any database they want for their specific size and purpose.

That is why we use [typeorm](https://typeorm.io/) for database entities (models) for every data structure we use, because typeorm supports many different database engines.

We use strings for all ids and bitfields (Tho when working with bitfields we convert it to BigInts and pass it to the utility `BitField` class).

### General

Have a look at the [typeorm documentation](https://typeorm.io/) to get familiar with it or watch this [tutorial](https://youtu.be/Paz0gnODPE0).

TypeORM supports MySQL, MariaDB, Postgres, CockroachDB, SQLite, Microsoft SQL Server, Oracle, SAP Hana, sql.js.

### Getting Started

Import the entity you want to select, manipulate, delete or insert from `@fosscord/util`

[List of all entities](https://github.com/fosscord/fosscord-server/blob/master/util/src/entities/index.ts): `Application, Attachment, AuditLog, Ban, BaseClass, Channel, Config, ConnectedAccount, Emoji, Guild, Invite, Member, Message, RateLimit, ReadState, Recipient, Relationship, Role, Sticker, Team, TeamMember, Template, User, VoiceState, Webhook`

### Example database query

```ts
import { Guild } from "fosscord-server-util";

await new Guild({ ... }).save(); // inserts a new guild or updates it if it already exists

const guild = await Guild.findOne({ id: "23948723947932" }).exec(); // searches for a guild

await Guild.delete({ owner_id: "34975309473" }) // deletes all guilds of the specific owner
```

### Entities

The typeorm database entities are located in [`util/src/entities/`](https://github.com/fosscord/fosscord-server/tree/master/util/src/entities).

To add your own database entity, create a new file, export the model and import/export it in [`util/src/entities/index.ts`](https://github.com/fosscord/fosscord-server/tree/master/util/src/entities/index.ts).

#### Example entity

```ts
@Entity("users")
export class User extends BaseClass {
    // id column is automatically added by BaseClass

    @Column()
    username: string;

    @JoinColumn({ name: "connected_account_ids" })
    @OneToMany(
        () => ConnectedAccount,
        (account: ConnectedAccount) => account.user
    )
    connected_accounts: ConnectedAccount[];

    static async getPublicUser(user_id: string, opts?: FindOneOptions<User>) {
        return await User.findOneOrFail(
            { id: user_id },
            {
                ...opts,
                select: [...PublicUserProjection, ...(opts?.select || [])],
            }
        );
    }
}
```

## Emit Events

Most Routes modify the database and therefore need to inform the clients with events for data changes.

Events are either stored locally if the server was started through the bundle or in RabbitMQ and are distributed to the gateway servers.

You can find all events on the [discord docs page](https://discord.com/developers/docs/topics/gateway#commands-and-events) and in [`util/src/interfaces/Event.ts`](https://github.com/fosscord/fosscord-server/blob/master/util/src/interfaces/Event.ts).

To emit an event import the `emitEvent` function from `@fosscord/util`

```ts
import { emitEvent } from "../../../util/Event";
```

You need to specify whom you want to send the event to, to do that either pass `guild_id`, `user_id` or `channel_id`.
Additionally you need to set the [eventname](https://github.com/fosscord/fosscord-server/blob/master/util/src/interfaces/Event.ts#L539) e.g. `GUILD_DELETE`.

```ts
{
	guild_id?: bigint; // specify this if this event should be sent to all guild members
	channel_id?: bigint; // specify this if this event should be sent to all channel members
	user_id?: bigint; // specify this if this event should be sent to the specific user
	event: string; // the EVENTNAME, you can find all gateway event names in the @fosscord/util Events file
	data?: any; // event payload data
}
```

For easy intellisense, annotate the parameter with the corresponding [Event interface](https://github.com/fosscord/fosscord-server/blob/master/util/src/interfaces/Event.ts) from `@fosscord/util`:

```ts
import { GuildDeleteEvent } from "@fosscord/util";

emitEvent({...} as GuildDeleteEvent);
```

### Example

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

## Permissions

To get the permission for a guild member import the `getPermission` from `fosscord-server-util`.

```ts
import { getPermission } from "fosscord-server-util";
```

The first argument is the user_id the second the guild_id and the third an optional channel_id.

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
