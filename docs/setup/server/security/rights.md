## About

Rights are instance-wide, per-user permissions for everything you may perform on the instance,
such as sending messages, editing messages, or shutting down the server.

You may modify a users rights by editing the `rights` column in the `users` table.

The rights value is a bitfield string. To grant multiple rights you must add their values together.
For example, to grant `CREATE_GUILDS` and `SEND_MESSAGES`, set their `rights` to  
`(1 << 15) = 32768` +  
`(1 << 25) = 33554432` =  
`33587200`

The default rights value given to users (set through the `register_defaultRights` config value)
is generated through the `npm run generate:rights` script. The script generates a rights value that mimicks Discord.com.

## OPERATOR Rights

!!! danger "It is EXTREMELY DISCOURAGED to give OPERATOR rights to all users, or to set the default rights to OPERATOR. If your rights value is an odd number, that includes operator."

Operator rights currently grants access to the following, in addition to all rights:

-   Server shutdown through GET `/api/stop`
-   [Registration token creation](regTokens.md) through GET `/api/auth/generate-registration-tokens`

## Calculator

<style>
	#rights-calculator * {
		padding: 0;
		margin: 0;
		font-size: 0.65rem;

	}

	#rights-calculator #rights-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}

	#rights-calculator #rights-container input {
		margin-right: 10px;
		width: 20px;
		height: 20px;
	}

	#rights-calculator #rights-output-container {
		margin-top: 10px;
		padding: 10px;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 10px;
	}
</style>

<div id="rights-calculator">
	<div id="rights-container"></div>
	<div id="rights-output-container">
		<p>Rights: <span id="rights-output"></span></p>
	</div>
</div>

## Available rights

| Right                     | Value   | When enabled                                                                                                                                          |
| ------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OPERATOR`                | 1 << 0  | All rights                                                                                                                                            |
| `MANAGE_APPLICATIONS`     | 1 << 1  | Ability to alter or remove others' applications                                                                                                       |
| `MANAGE_GUILDS`           | 1 << 2  | Same as the per-guild `MANAGE_GUILD` permission, but applies to all guilds and DM channels, can join any guild without invite                         |
| `MANAGE_MESSAGES`         | 1 << 3  | Can delete or edit any message they can read                                                                                                          |
| `MANAGE_RATE_LIMITS`      | 1 << 4  | Add, change, define rate limits of other users, can also grant others `BYPASS_RATE_LIMITS` when combined with `BYPASS_RATE_LIMITS` and `MANAGE_USERS` |
| `MANAGE_ROUTING`          | 1 << 5  | Create, alter, enable, disable custom message routing rules in any channel/guild                                                                      |
| `MANAGE_TICKETS`          | 1 << 6  | Respond to or resolve other users' support tickets                                                                                                    |
| `MANAGE_USERS`            | 1 << 7  | Create, alter, remove, ban users; create, modify, remove user groups                                                                                  |
| `ADD_MEMBERS`             | 1 << 8  | Can manually add members into their guilds and group DMs                                                                                              |
| `BYPASS_RATE_LIMITS`      | 1 << 9  | Makes the user exempt from all rate limits                                                                                                            |
| `CREATE_APPLICATIONS`     | 1 << 10 | Can create, edit, remove own applications                                                                                                             |
| `CREATE_CHANNELS`         | 1 << 11 | Can create guild channels and custom channels                                                                                                         |
| `CREATE_DMS`              | 1 << 12 | Can create 1:1 DMs (a user without `SEND_MESSAGES` cannot be added however)                                                                           |
| `CREATE_DM_GROUPS`        | 1 << 13 | Can create group DMs (a user without `SEND_MESSAGES` cannot be added however)                                                                         |
| `CREATE_GUILDS`           | 1 << 14 | Can create guilds                                                                                                                                     |
| `CREATE_INVITES`          | 1 << 15 | Can create mass invites in the guilds that they have `CREATE_INSTANT_INVITE`                                                                          |
| `CREATE_ROLES`            | 1 << 16 | Can create roles and per-guild or per-channel permission overrides in the guilds that they have permissions                                           |
| `CREATE_TEMPLATES`        | 1 << 17 | Can create templates for guilds, custom channels and channels with custom routing                                                                     |
| `CREATE_WEBHOOKS`         | 1 << 18 | Can create webhooks in the guilds that they have permissions                                                                                          |
| `JOIN_GUILDS`             | 1 << 19 | Can join guilds by using invites or vanity names                                                                                                      |
| `PIN_MESSAGES`            | 1 << 20 | Can modify the pinned messages in the guilds that they have permission                                                                                |
| `SELF_ADD_REACTIONS`      | 1 << 21 | Can react to messages, subject to permissions                                                                                                         |
| `SELF_DELETE_MESSAGES`    | 1 << 22 | Can delete own messages                                                                                                                               |
| `SELF_EDIT_MESSAGES`      | 1 << 23 | Can edit own messages                                                                                                                                 |
| `SELF_EDIT_NAME`          | 1 << 24 | Can edit own username, nickname and avatar                                                                                                            |
| `SEND_MESSAGES`           | 1 << 25 | Can send messages in the channels that they have permissions                                                                                          |
| `USE_ACTIVITIES`          | 1 << 26 | Can use voice activities, such as watch together or whiteboard                                                                                        |
| `USE_VIDEO`               | 1 << 27 | Can use video and screenshare in guilds/channels that they have permissions                                                                           |
| `USE_VOICE`               | 1 << 28 | Can use voice in guilds/channels that they have permissions                                                                                           |
| `INVITE_USERS`            | 1 << 29 | Can create user-specific invites in guilds that they have `INVITE_USERS`                                                                              |
| `SELF_DELETE_DISABLE`     | 1 << 30 | Can delete/disable own account                                                                                                                        |
| `DEBTABLE`                | 1 << 31 | Can use pay-to-use features once paid                                                                                                                 |
| `CREDITABLE`              | 1 << 32 | Can earn money using monetization features in guilds that have `MONETIZATION_ENABLED`                                                                 |
| `KICK_BAN_MEMBERS`        | 1 << 33 | Can kick or ban guild or group DM members in the guilds/groups that they have KICK_MEMBERS, or BAN_MEMBERS                                            |
| `SELF_LEAVE_GROUPS`       | 1 << 34 | Can leave the guilds or group DMs that they joined on their own (one can always leave a guild or group DMs they have been force-added)                |
| `PRESENCE`                | 1 << 35 | Inverts the presence confidentiality default (OPERATOR's presence is not routed by default, others' are) for a given user                             |
| `SELF_ADD_DISCOVERABLE`   | 1 << 36 | Can mark discoverable guilds that they have permissions to mark as discoverable                                                                       |
| `MANAGE_GUILD_DIRECTORY`  | 1 << 37 | Can change anything in the primary guild directory                                                                                                    |
| `POGGERS`                 | 1 << 38 | Can send confetti, screenshake, random user mention (@someone)                                                                                        |
| `USE_ACHIEVEMENTS`        | 1 << 39 | Can use achievements and cheers                                                                                                                       |
| `INITIATE_INTERACTIONS`   | 1 << 40 | Can initiate interactions                                                                                                                             |
| `RESPOND_TO_INTERACTIONS` | 1 << 41 | Can respond to interactions                                                                                                                           |
| `SEND_BACKDATED_EVENTS`   | 1 << 42 | Can send backdated events                                                                                                                             |
| `USE_MASS_INVITES`        | 1 << 43 | Can accept mass (guild) invites                                                                                                                       |
| `ACCEPT_INVITES`          | 1 << 44 | Can accept user-specific invites and DM requests                                                                                                      |
| `SELF_EDIT_FLAGS`         | 1 << 45 | Can modify own flags                                                                                                                                  |
| `EDIT_FLAGS`              | 1 << 46 | Can modify other's flags                                                                                                                              |
| `MANAGE_GROUPS`           | 1 << 47 | Can manage other's groups                                                                                                                             |
| `VIEW_SERVER_STATS`       | 1 << 48 | Can view server stats /api/policies/stats                                                                                                             |

<script src="/assets/js/rightsCalculator.js"></script>
