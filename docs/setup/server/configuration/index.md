# Configuration

{{ project.name }} is configured via a JSON file. Use the `CONFIG_PATH` [environment variable](env.md) to set the path to the JSON file.

## Schema

The JSON file has the following top-level sections:

| key             | description                      |
| --------------- | -------------------------------- |
| `gateway`       | Options for the gateway service  |
| `cdn`           | Options for the CDN service      |
| `api`           | Options for the API service      |
| `general`       | General-purpose options          |
| `limits`        | Limits imposed on users          |
| `metrics`       | Options for metric collection    |
| `security`      | Security options                 |
| `login`         | Login options                    |
| `register`      | Registration options             |
| `regions`       | Voice chat server region options |
| `guild`         | Guild options                    |
| `gif`           | GIF search options               |
| `rabbitmq`      | RabbitMQ options                 |
| `templates`     | Guild template options           |
| `sentry`        | Sentry analytics options         |
| `defaults`      | User and guild defaults          |
| `external`      | Embed provider options           |
| `email`         | Options for sending emails       |
| `passwordReset` | Password reset options           |

### Gateway Options (`gateway`)

| key                            | default          | type          | description                                              |
| ------------------------------ | ---------------- | ------------- | -------------------------------------------------------- |
| `endpointPrivate`              | null             | string        | Used for internal communication with gateway             |
| `endpointPublic`               | null             | string        | Publicly announced gateway endpoint                      |


### CDN Options (`cdn`)

| key                                | default          | type          | description                                              |
| ---------------------------------- | ---------------- | ------------- | -------------------------------------------------------- |
| `endpointPrivate`                  | null             | string        | CDN endpoint. See `gateway.endpointPrivate`              |
| `endpointPublic`                   | null             | string        | CDN endpoint. See `gateway.endpointPublic`               |
| `resizeHeightMax`                  | 1000             | number        | Maximum image resize height for embeds.                  |
| `resizeWidthMax`                   | 1000             | number        | Maximum image resize width for embeds.                   |
| [`imagorServerUrl`](imageProxy.md) | null             | string        | Endpoint to proxy embed images, e.g. using Imagor.       |


### API Options (`api`)

| key                                | default          | type          | description                                                |
| ---------------------------------- | ---------------- | ------------- | ---------------------------------------------------------- |
| `defaultVersion`                   | 9                | string        | API version to use when not specified                      |
| `activeVersions`                   | 6, 7, 8, 9       | string[]      | Allowed API version numbers                                |
| `endpointPublic`                   | null             | string        | Endpoint the API is available at, usually `<Base URL>/api` |


### General Options (`general`)

| key                        | default                                                            | type          | description                                                |
| -------------------------- | ------------------------------------------------------------------ | ------------- | ---------------------------------------------------------- |
| `instanceName`             | {{ project.name }} Instance                                        | string        | Announced instance name                                                       |
| `instanceDescription`      | This is a {{ project.name }} instance made in the pre-release days | string        | Announced instance description                                                |
| `frontPage`                | null                                                               | string        | Announced instance front page                                                 |
| `tosPage`                  | null                                                               | string        | Announced instance TOS page                                                   |
| `correspondenceEmail`      | null                                                               | string        | Announced instance correspondence email                                       |
| `correspondenceUserID`     | null                                                               | Snowflake     | Announced instance correspondence user ID (from this instance)                |
| `image`                    | null                                                               | string        | Announced instance image URL                                                  |
| `instanceId`               | Snowflake of instance creation date                                | Snowflake     | Announced instance ID. Deprecated.                                            |
| `autoCreateBotUsers`       | false                                                              | boolean       | Whether to automatically create a bot when creating an application    |


### Limits Options (`limits`)

| key                                    | default          | type          | description                                                   |
| -------------------------------------- | ---------------- | ------------- | ------------------------------------------------------------- |
| `user.maxGuilds`                       | 1048576          | number        | Maxmimum guilds a user can join                               |
| `user.maxUsername`                     | 32               | number        | Maximum username length                                       |
| `user.maxFriends`                      | 5000             | number        | Maximum number of friends per user                            |
| `guild.maxRoles`                       | 1000             | number        | Maximum number of roles in a guild                            |
| `guild.maxEmojis`                      | 2000             | number        | Maximum number of emojis in a guild                           |
| `guild.maxMembers`                     | 25000000         | number        | Maximum number of members in a guild                          |
| `guild.maxChannels`                    | 65535            | number        | Maximum number of channels in a guild                         |
| `guild.maxChannelsInCategory`          | 65535            | number        | Maximum number of channels per category in a guild            |
| `message.maxCharacters`                | 1048576          | number        | Maximum character count per message                           |
| `message.maxTTSCharacters`             | 160              | number        | Maximum character count per text to speech messages           |
| `message.maxReactions`                 | 2048             | number        | Maximum number of reactions per message                       |
| `message.maxAttachmentSize`            | 1073741824       | number        | Maximum total attachment size per message                     |
| `message.maxBulkDelete`                | 1000             | number        | Maximum number of messages deletable through bulk delete      |
| `message.maxEmbedDownloadSize`         | 5242880          | number        | Maximum download size of external embeddable content          |
| `channel.maxPins`                      | 500              | number        | Maximum number of pins per channel                            |
| `channel.maxTopic`                     | 1024             | number        | Maximum channel topic character length                        |
| `channel.maxWebhooks`                  | 100              | number        | Maximum number of webhooks per channel                        |
| `rate.enabled`                         | false            | boolean       | Whether rate limits are enabled                               |
| `rate.ip.count`                        | 500              | number        | Allowed number of requests per IP within window               |
| `rate.ip.window`                       | 5                | number        | IP rate limit window, in seconds                              |
| `rate.global.count`                    | 250              | number        | Allowed number of requests globally within window             |
| `rate.global.window`                   | 5                | number        | Global rate limit window, in seconds                          |
| `rate.error.count`                     | 10               | number        | Number of allowed errors per user within window               |
| `rate.error.window`                    | 5                | number        | User error rate limit window, in seconds                      |
| `rate.routes.guild.count`              | 5                | number        | Allowed number of /guild\* requests per user within window    |
| `rate.routes.guild.window`             | 5                | number        | User /guild\* rate limit window, in seconds                   |
| `rate.routes.webhook.count`            | 10               | number        | Allowed number of /webhooks\* requests per user within window |
| `rate.routes.webhook.window`           | 5                | number        | User /webhooks\* rate limit window, in seconds                |
| `rate.routes.channel.count`            | 10               | number        | Allowed number of /channel\* requests per user within window  |
| `rate.routes.channel.window`           | 5                | number        | User /channel\* rate limit window, in seconds                 |
| `rate.routes.auth.login.count`         | 5                | number        | Allowed number of IP /login requests within window            |
| `rate.routes.auth.login.window`        | 60               | number        | IP /login rate limit window, in seconds                       |
| `rate.routes.auth.register.count`      | 2                | number        | Allowed number of IP /register requests within window         |
| `rate.routes.auth.register.window`     | 43200            | number        | IP /register rate limit window, in seconds                    |
| `absoluteRate.register.limit`          | 25               | number        | Absolute number of registrations instance-wide per window     |
| `absoluteRate.register.window`         | 3600000          | number        | Global /register rate limit window, in milliseconds           |
| `absoluteRate.register.enabled`        | true             | boolean       | Whether absolute register rate limits are enabled             |
| `absoluteRate.sendMessage.limit`       | 200              | number        | Absolute number of messages instance-wide per window          |
| `absoluteRate.sendMessage.window`      | 60000            | number        | Global sendMessage window, in milliseconds                    |
| `absoluteRate.sendMessage.enabled`     | true             | boolean       | Whether absolute message sending rate limits are enabled      |


### Metrics Options (`metrics`)


| key                                | default          | type          | description                                                |
| ---------------------------------- | ---------------- | ------------- | ---------------------------------------------------------- |
| `timeout`                          | 30000            | number        | Currently unused                                           |


### Security Options (`security`)

| key                                         | default                       | type                    | description                                                           |
| ------------------------------------------- | ----------------------------- | ----------------------- | --------------------------------------------------------------------- |
| [`captcha.enabled`](../security/captcha.md) | false                         | boolean                 | Whether to enable captchas for login/register                         |
| `captcha.service`                           | null                          | "recaptcha", "hcaptcha" | Which captcha service to use                                          |
| `captcha.sitekey`                           | null                          | string                  | Captcha service sitekey                                               |
| `captcha.secret`                            | null                          | string                  | Captcha service secret                                                |
| `twoFactor.generateBackupCodes`             | true                          | boolean                 | Whether to generate backup codes for MFA users                        |
| `autoUpdate`                                | true                          | boolean                 | Automatically updates NPM packages daily. Currently unused            |
| `requestSignature`                          | Random secret                 | string                  | The signature required for CDN or [Imagor](imageProxy.md) usage       |
| `jwtSecret`                                 | Random secret                 | string                  | The secret used for user token generation                             |
| [`forwardedFor`](../reverseProxy.md)        | null                          | string                  | HTTP header for user's real IP                                        |
| `ipdataApiKey`                              | {{ project.name }} IPdata key | string                  | API key used for IP geolocation and proxy detection                   |
| `mfaBackupCodeCount`                        | 10                            | number                  | Number of MFA backup codes to generate                                |
| `statsWorldReadable`                        | true                          | boolean                 | Whether instance stats are publically accessible or require right     |
| `defaultRegistrationTokenExpiration`        | 604800000                     | number                  | [Registration token](../security/regTokens.md) expiry in milliseconds |


### Login Options (`login`)

| key                                         | default                       | type                    | description                                                           |
| ------------------------------------------- | ----------------------------- | ----------------------- | --------------------------------------------------------------------- |
| `requireCaptcha`                            | false                         | boolean                 | Whether login requires captcha verification                           |
| `requireVerification`                       | false                         | boolean                 | Whether login requires email verification                             |


### Registration Options (`register`)


| key                                         | default                       | type                    | description                                                           |
| ------------------------------------------- | ----------------------------- | ----------------------- | --------------------------------------------------------------------- |
| `email.required`                            | false                         | boolean                 | Whether an email is required for registration                         |
| `email.allowlist`                           | false                         | boolean                 | Whether `register_email_domains` is an allowlist                      |
| `email.blocklist`                           | true                          | boolean                 | Whether `register_email_domains` is a blocklist                       |
| `email.domains`                             | []                            | string[]                | The email domains list to use as a block/allow list                   |
| `dateOfBirth.required`                      | true                          | boolean                 | Whether a date of birth is required for registration                  |
| `dateOfBirth.minimum`                       | 13                            | number                  | The minimum age of registration                                       |
| `password.required`                         | false                         | boolean                 | Whether a password is required for registration                       |
| `password.minLength`                        | 8                             | number                  | Minimum password length                                               |
| `password.minNumbers`                       | 2                             | number                  | Minimum number of number characters in passwords                      |
| `password.minUpperCase`                     | 2                             | number                  | Minimum number of uppercase characters in passwords                   |
| `password.minSymbols`                       | 0                             | number                  | Minimum number of symbols in passwords                                |
| `disabled`                                  | false                         | boolean                 | Whether registration is disabled                                      |
| `requireCaptcha`                            | true                          | boolean                 | Whether registration requires captcha verification                    |
| `requireInvite`                             | false                         | boolean                 | Whether registration requires a guild invite                          |
| `guestsRequireInvite`                       | true                          | boolean                 | Whether guests accounts require a guild invite                        |
| `allowNewRegistration`                      | true                          | boolean                 | Whether registration is enabled. Deprecated, use `register_disabled`. |
| `allowMultipleAccounts`                     | true                          | boolean                 | Allow multiple accounts with the same client fingerprint              |
| `blockProxies`                              | true                          | boolean                 | Whether proxies are blocked from registration                         |
| `incrementingDiscriminators`                | false                         | boolean                 | Whether discriminators are random or incrementing                     |
| [`defaultRights`](../security/rights.md)    | 875069521787904               | string                  | The rights assigned to users _upon registration_                      |


### Voice Region Options (`regions`)

| key                                         | default                       | type                    | description                                                           |
| ------------------------------------------- | ----------------------------- | ----------------------- | --------------------------------------------------------------------- |
| `default`                                   | {{ project.name.lower() }}    | string                  | The default voice region to use                                       |
| `useDefaultAsOptimal`                       | true                          | boolean                 | Whether to calculate closest or use default as optimal voice region   |
| `available`                                 | []                            | Region[] (see below)    | Advertised voice regions                                              |


Regions are defined with the following structure

| key                                         | default                       | type                    | description                                                           |
| ------------------------------------------- | ----------------------------- | ----------------------- | --------------------------------------------------------------------- |
| `id`                                        | {{ project.name.lower() }}    | string                  | The available voice region IDs                                        |
| `name`                                      | {{ project.name }}            | string                  | The available voice region names                                      |
| `endpoint`                                  | 127.0.0.1:3004                | string                  | The available voice region endpoint URLs                              |
| `vip`                                       | false                         | boolean                 | Whether this voice region is VIP exclusive                            |
| `custom`                                    | false                         | boolean                 | Whether this is a custom voice region (used for events/etc)           |
| `deprecated`                                | false                         | boolean                 | Whether this is a deprecated voice region (clients avoid these)       |


### Guild Options (`guild`)

| key                                         | default                       | type                    | description                                                           |
| ------------------------------------------- | ----------------------------- | ----------------------- | --------------------------------------------------------------------- |
| `discovery.showAllGuilds`                   | false                         | boolean                 | Whether guild discovery shows guilds without the DISCOVERABLE feature |
| `discovery.useRecommendation`               | false                         | boolean                 | Currently unused                                                      |
| `discovery.offset`                          | 0                             | number                  | Default offset when returning discoverable guilds. Currently unused   |
| `discovery.limit`                           | 24                            | number                  | Maximum number of guild discovery elements per page                   |
| `autoJoin.enabled`                          | true                          | boolean                 | Whether users auto join guild(s) on registration                      |
| `autoJoin.canLeave`                         | true                          | boolean                 | Whether users can leave the auto-joined guild(s)                      |
| [`defaultFeatures`](guildFeatures.md)        null                           | string[]                | Features automatically granted to guilds upon creation                |


### GIF Search Options (`gif`)

| key                                         | default                          | type                    | description                                                           |
| ------------------------------------------- | -------------------------------- | ----------------------- | --------------------------------------------------------------------- |
| `enabled`                                   | true                             | boolean                 | Whether GIF features are enabled                                      |
| `provider`                                  | tenor                            | "tenor"                 | Which GIF service to use                                              |
| `apiKey`                                    | {{ project.name }} tenor API key | string                  | GIF service API key                                                   |


### RabbitMQ Options (`rabbitmq`)

See [RabbitMQ](rabbitmq.md) for more information.

| key                                         | default                          | type                    | description                                                           |
| ------------------------------------------- | -------------------------------- | ----------------------- | --------------------------------------------------------------------- |
| `host`                                      | null                             | string                  | RabbitMQ connection string                                            |


### Guild Template Options (`templates`)

| key                                         | default                          | type                    | description                                                           |
| ------------------------------------------- | -------------------------------- | ----------------------- | --------------------------------------------------------------------- |
| `enabled`                                   | true                             | boolean                 | Whether guild templates are enabled                                   |
| `allowTemplateCreation`                     | true                             | boolean                 | Whether new guild templates can be created                            |
| `allowDiscordTemplates`                     | true                             | boolean                 | Whether guild templates from Discord.com can be fetched               |
| [`allowRaws`](/concepts/guildTemplates.md)  | true                             | boolean                 | Whether raw guild templates are allowed                               |


### Sentry Enabled (`sentry`)

| key                                         | default                            | type                    | description                                                           |
| ------------------------------------------- | ---------------------------------- | ----------------------- | --------------------------------------------------------------------- |
| `enabled`                                   | false                              | boolean                 | Whether server-side Sentry analytics is enabled                       |
| `endpoint`                                  | {{ project.name }} sentry endpoint | string                  | Sentry endpoint                                                       |
| `traceSampleRate`                           | 1                                  | number                  | Sentry sample rate (1 means all requests)                             |
| `environment`                               | System hostname                    | string                  | Sentry environment name                                               |


### User and Guild Defaults (`defaults`)

| key                                         | default                            | type                    | description                                                           |
| ------------------------------------------- | ---------------------------------- | ----------------------- | --------------------------------------------------------------------- |
| `user.premium`                              | true                               | boolean                 | Whether users are given premium upon registration                     |
| `user.premiumType`                          | 2                                  | number                  | The premium type given to users upon registration                     |
| `user.verified`                             | true                               | boolean                 | Whether users get verified email upon registration                    |
| `guild.maxPresences`                        | 250000                             | number                  | Maximum number of presences in a guild upon guild creation            |
| `guild.maxVideoChannelUsers`                | 200                                | number                  | Maximum default number of users in a voice channel with video enabled |
| `guild.afkTimeout`                          | 300                                | number                  | AFK timeout in seconds upon guild creation                            |
| `guild.defaultMessageNotifications`         | 1                                  | number                  | Message notification level upon guild creation                        |
| `guild.explicitContentFilter`               | 0                                  | number                  | Explicit content filter level upon guild creation                     |


### Embeds Options (`external`)

| key                                         | default                            | type                    | description                                                           |
| ------------------------------------------- | ---------------------------------- | ----------------------- | --------------------------------------------------------------------- |
| [`twitter`](embeds.md)                      | null                               | string                  | Twitter API key used for Twitter embeds                               |


### Email Options (`email`)

See [EMail](../email.md) for more information.


| key                                         | default               | type                                     | description                                                           |
| ------------------------------------------- | --------------------- | ---------------------------------------- | --------------------------------------------------------------------- |
| [`provider`](../email.md)                   | null                  | "smtp", "mailgun", "mailjet", "sendgrid" | Which email transport to use                                          |
| `senderAddress`                             | null                  | string                                   | Sender email address. Defaults to `general_correspondenceEmail`       |
| `smtp.host`                                 | null                  | string                                   | SMTP host for sending email                                           |
| `smtp.port`                                 | null                  | number                                   | SMTP port                                                             |
| `smtp.secure`                               | null                  | boolean                                  | Use TLS for SMTP                                                      |
| `smtp.username`                             | null                  | string                                   | SMTP username                                                         |
| `smtp.password`                             | null                  | string                                   | SMTP password                                                         |
| `mailgun.apiKey`                            | null                  | string                                   | Mailgun API key                                                       |
| `mailgun.domain`                            | null                  | string                                   | Mailgun domain                                                        |
| `mailjet.apiKey`                            | null                  | string                                   | Mailjet API key                                                       |
| `mailjet.apiSecret`                         | null                  | string                                   | Mailjet API secret                                                    |
| `sendgrid.apiKey`                           | null                  | string                                   | Sendgrid API key                                                      |


### Password Reset Options (`passwordReset`)

| key                                         | default                            | type                    | description                                                           |
| ------------------------------------------- | ---------------------------------- | ----------------------- | --------------------------------------------------------------------- |
| `requireCaptcha`                            | false                              | boolean                 | Require captcha to send password reset email                          |


## Sample Configuration

```json
{
  "api": {
    "endpointPrivate": "http://127.0.0.1:3001",
    "endpointPublic": "https://api.spacebar.example.net/api/v9"
  },
  "cdn": {
    "endpointPrivate": "http://127.0.0.1:3002",
    "endpointPublic": "https://cdn.spacebar.example.net"
  },
  "gateway": {
    "endpointPrivate": "http://127.0.0.1:3003",
    "endpointPublic": "wss://gateway.spacebar.example.net"
  },
  "general": {
    "instanceDescription": "I'm in space!",
    "instanceName": "A Spacebar Instance",
    "serverName": "spacebar.example.net"
  },
  "guild": {
    "autoJoin": {
      "bots": false,
      "canLeave": true,
      "enabled": true
    },
    "defaultFeatures": [
      "ALIASABLE_NAMES",
      "VANITY_URL",
      "CROSS_CHANNEL_REPLIES",
      "ANIMATED_ICON",
      "BANNER",
      "GUILD_TAGS",
      "GUILD_SERVER_GUIDE",
      "GUILD_ONBOARDING",
      "MEMBER_PROFILES",
      "NEWS",
      "ROLE_ICONS"
    ]
  },
  "limits": {
    "channel": {
      "maxTopic": 10000
    },
    "user": {
      "maxBio": 1000,
      "maxUsername": 64
    }
  },
  "rabbitmq": {
    "host": "amqp://guest:guest@127.0.0.1:5672"
  },
  "register": {
    "dateOfBirth": {
      "required": false
    },
    "disabled": true,
    "password": {
      "required": true
    },
    "requireInvite": true
  },
  "security": {
    "forwardedFor": "X-Forwarded-For",
    "trustedProxies": "127.0.0.1"
  }
}
```

