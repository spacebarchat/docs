# Server

## Setup

### [Download](https://github.com/fosscord/fosscord-server/releases)

This is the stable fosscord-server release.

Download the server release from [GitHub](https://github.com/fosscord/fosscord-server/releases) for your operating system. (Size ~80mb)

Double click the file to start the server. (The first time it takes longer as it needs to setup the server)

You can now access it on [http://localhost:3001](http://localhost:3001).

### With terminal

This is the latest bleeding edge version of fosscord-server, which may have bugs.

You need to install git from [git-scm.com](https://git-scm.com/downloads) or your package manager.

You need to install nodejs version 14 or higher from [nodejs.org](https://nodejs.org/) or your package manager.

Now you can clone and start the server by executing this in the terminal/shell:

```
git clone https://github.com/fosscord/fosscord-server
cd fosscord-server
cd bundle
npm run setup
npm run start:bundle
```

You can now access it on [http://localhost:3001](http://localhost:3001)

To update it run (notice will discard all changed files):

```
git reset --hard HEAD
git pull
npm run setup
npm run start:bundle
```

### With Docker

!!! failure "Not Supported Currently"
    Avoid using Docker build until further notice. The current build is faulty and will not build correctly. Instead, install using the terminal in the section "With Terminal". 

Optionally if you want to use Docker:

```
git clone https://github.com/fosscord/fosscord-server
cd fosscord-server
docker-compose up
```

You can now access it on [http://localhost:3001](http://localhost:3001)

## Configuration

For an always up to date version of the currently available configuration options use [Config.ts](https://github.com/fosscord/fosscord-server/blob/master/util/src/entities/Config.ts#L40).

| Name                               | Type    | Default                 | Description                                                                                            |
|------------------------------------|---------|-------------------------|--------------------------------------------------------------------------------------------------------|
| gateway_endpointClient             | string  | null                    | The gateway endpoint that gets delivered to the client                                                 |
| gateway_endpointPrivate            | string  | null                    | The gateway endpoint that is used internally to communicate between gateway servers                    |
| gateway_endpointPublic             | string  | null                    | The gateway endpoint that is publicly used by bots                                                     |
| cdn_endpointPublic                 | string  | "/"                     | The cdn endpoint that is served in message attachments                                                 |
| cdn_endpointClient                 | string  | null                    | The cdn endpoint that is used by clients                                                               |
| cdn_endpointPrivate                | string  | "http://localhost:3001" | The cdn endpoint that is used internally to upload images from the api to the cdn.                     |
| general_instanceId                 | string  | _auto generated_        | Unique identifier for the Fosscord instance                                                            |
| limits_user_maxGuilds              | number  | 100                     | Maximum number of guilds the user is allowed to create and join                                        |
| limits_user_maxUsername            | number  | 32                      | Maximum number of characters for a username                                                            |
| limits_user_maxFriends             | number  | 1000                    | Maximum number of friends a user can have                                                              |
| limits_guild_maxRoles              | number  | 250                     | Maximum number of roles a guild can have                                                               |
| limits_guild_maxEmojis             | number  | 50                      | Maximum number of custom emojis a guild can have                                                       |
| limits_guild_maxMembers            | number  | 250000                  | Maximum number of members a guild can have                                                             |
| limits_guild_maxChannels           | number  | 50                      | Maximum number of channels a guild can have                                                            |
| limits_guild_maxChannelsInCategory | number  | 50                      | Maximum number of channels a category can contain                                                      |
| limits_guild_hideOfflineMember     | number  | 1000                    | Amount of members when a guild is considered large and offline members are hidden                      |
| limits_message_maxCharacters       | number  | 2000                    | Maximum length of characters a message can have                                                        |
| limits_message_maxTTSCharacters    | number  | 200                     | Maximum length of characters a text to speech message can have                                         |
| limits_message_maxReactions        | number  | 20                      | Maximum number of reactions a message can have                                                         |
| limits_message_maxAttachmentSize   | number  | 8388608                 | Maximum size a message attachment can have in bytes                                                    |
| limits_message_maxBulkDelete       | number  | 100                     | Maximum amount of messages that can be deleted per bulk delete command                                 |
| limits_channel_maxPins             | number  | 50                      | Maximum amount of pinned messages a channel can have                                                   |
| limits_channel_maxTopic            | number  | 1024                    | Maximum amount of characters a channel topic description can have                                      |
| limits_channel_maxWebhooks         | number  | 10                      | Maximum amount of webhooks a channel can have                                                          |
| limits_rate_disabled               | boolean | false                   | Check to enable rate limits                                                                            |
| limits_rate_                       |         | _TODO_                  |                                                                                                        |
| security_autoUpdate                | boolean | true                    | Check if updates should automatically be searched for and non destructively be installed               |
| security_requestSignature          | string  | _auto generated_        | Request signature that is used internally to sign requests                                             |
| security_jwtSecret                 | string  | _auto generated_        | JSON web token secret to sign and verify jwt tokens                                                    |
| security_forwardedFor              | string  | null                    | Header name that is used to retrieve the real ip of a request e.g. X-Forwarded-For or CF-Connecting-IP |
| security_captcha_enabled           | boolean | false                   | Check to enable captchas                                                                               |
| security_captcha_service           | string  | null                    | Captcha provider, one of: "recaptcha", "hcaptcha"                                                      |
| security_captcha_sitekey           | string  | null                    | Captcha provider site key                                                                              |
| security_captcha_secret            | string  | null                    | Captcha provider secret to check if the user supplied captcha result is correct                        |
| security_ipdataApiKey              | string  | _public key_            | IPdata.co api key to check if a register ip address is using proxies                                   |
| login_requireCaptcha               | boolean | false                   | Check to require captchas to login                                                                     |