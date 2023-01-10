# Configuration

Fosscord's configuration is done through the `config` table of your database.
The table schema consists of two columns `key` and `value`, where `value` is a JSON value.
For now, you can update this through SQL manually or a GUI database editor such as
[DBeaver](https://dbeaver.io/).

!!! note "The `CONFIG_PATH` [environment variable](env.md) can be set to make Fosscord use a JSON file instead of a database table."

## Array Types

Arrays are represented by \_[number] in a config key. For example, multiple `guild_defaultFeatures` may be assigned such as

| key                       | value           |
| ------------------------- | --------------- |
| `guild_defaultFeatures_0` | `DISCOVERABLE`  |
| `guild_defaultFeatures_1` | `ANIMATED_ICON` |
| etc                       | etc             |

## Available Configuration Options

| key                                                | default                                                  | type                   | description                                                           |
| -------------------------------------------------- | -------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------- |
| gateway_endpointClient                             | null                                                     | string                 | Injected into index.html if available                                 |
| gateway_endpointPrivate                            | null                                                     | string                 | Used for internal communication with gateway                          |
| gateway_endpointPublic                             | null                                                     | string                 | Publicly announced gateway endpoint                                   |
| cdn_endpointClient                                 | null                                                     | string                 | See gateway_endpointClient                                            |
| cdn_endpointPrivate                                | http://localhost:3001                                    | string                 | See gateway_endpointPrivate                                           |
| cdn_endpointPublic                                 | http://localhost:3001                                    | string                 | See gateway_endpointPublic                                            |
| cdn_resizeHeightMax                                | 1000                                                     | number                 | Maximum image resize height for embeds.                               |
| cdn_resizeWidthMax                                 | 1000                                                     | number                 | Maximum image resize width for embeds.                                |
| [cdn_imagorServerUrl](imagor.md)                   | null                                                     | string                 | Imagor instance endpoint for external image resizing.                 |
| api_defaultVersion                                 | 9                                                        | string                 | API version to use when not specified                                 |
| api_activeVersions_0                               | 6, 7, 8, 9                                               | string[]               | Allowed API version numbers. [Array](#array-types).                   |
| general_instanceName                               | Fosscord Instance                                        | string                 | Announced instance name                                               |
| general_instanceDescription                        | This is a Fosscord instance made in the pre-release days | string                 | Announced instance description                                        |
| general_frontPage                                  | null                                                     | string                 | Announced instance front page                                         |
| general_tosPage                                    | null                                                     | string                 | Announced instance TOS page                                           |
| general_correspondenceEmail                        | null                                                     | string                 | Announced instance correspondence email                               |
| general_correspondenceUserID                       | null                                                     | string                 | Announced instance correspondence ID (from this instance)             |
| general_image                                      | null                                                     | string                 | Announced instance image URL                                          |
| general_instanceId                                 | Snowflake of instance creation date                      | Snowflake              | Announced instance ID                                                 |
| limits_user_maxGuilds                              | 1048576                                                  | number                 | Maxmimum guilds a user can join                                       |
| limits_user_maxUsername                            | 127                                                      | number                 | Maximum username length                                               |
| limits_user_maxFriends                             | 5000                                                     | number                 | Maximum number of friends per user                                    |
| limits_guild_maxRoles                              | 1000                                                     | number                 | Maximum number of roles in a guild                                    |
| limits_guild_maxEmojis                             | 2000                                                     | number                 | Maximum number of emojis in a guild                                   |
| limits_guild_maxMembers                            | 25000000                                                 | number                 | Maximum number of members in a guild                                  |
| limits_guild_maxChannels                           | 65535                                                    | number                 | Maximum number of channels in a guild                                 |
| limits_guild_maxChannelsInCategory                 | 65535                                                    | number                 | Maximum number of channels per category in a guild                    |
| limits_message_maxCharacters                       | 1048576                                                  | number                 | Maximum character count per message                                   |
| limits_message_maxTTSCharacters                    | 160                                                      | number                 | Maximum character count per text to speech messages                   |
| limits_message_maxReactions                        | 2048                                                     | number                 | Maximum number of reactions per message                               |
| limits_message_maxAttachmentSize                   | 1073741824                                               | number                 | Maximum total attachment size per message                             |
| limits_message_maxBulkDelete                       | 1000                                                     | number                 | Maximum number of messages deletable through bulk delete              |
| limits_message_maxEmbedDownloadSize                | 5242880                                                  | number                 | Maximum download size of external embeddable content                  |
| limits_channel_maxPins                             | 500                                                      | number                 | Maximum number of pins per channel                                    |
| limits_channel_maxTopic                            | 1024                                                     | number                 | Maximum channel topic character length                                |
| limits_channel_maxWebhooks                         | 100                                                      | number                 | Maximum number of webhooks per channel                                |
| limits_rate_enabled                                | true                                                     | boolean                | Whether rate limits are enabled                                       |
| limits_rate_ip_count                               | 500                                                      | number                 | Allowed number of requests per IP within window                       |
| limits_rate_ip_window                              | 5                                                        | number                 | IP rate limit window, in seconds                                      |
| limits_rate_global_count                           | 250                                                      | number                 | Allowed number of requests globally within window                     |
| limits_rate_global_window                          | 5                                                        | number                 | Global rate limit window, in seconds                                  |
| limits_rate_error_count                            | 10                                                       | number                 | Number of allowed errors per user within window                       |
| limits_rate_error_window                           | 5                                                        | number                 | User error rate limit window, in seconds                              |
| limits_rate_routes_guild_count                     | 5                                                        | number                 | Allowed number of /guild\* requests per user within window            |
| limits_rate_routes_guild_window                    | 5                                                        | number                 | User /guild\* rate limit window, in seconds                           |
| limits_rate_routes_webhook_count                   | 10                                                       | number                 | Allowed number of /webhooks\* requests per user within window         |
| limits_rate_routes_webhook_window                  | 5                                                        | number                 | User /webhooks\* rate limit window, in seconds                        |
| limits_rate_routes_channel_count                   | 10                                                       | number                 | Allowed number of /channel\* requests per user within window          |
| limits_rate_routes_channel_window                  | 5                                                        | number                 | User /channel\* rate limit window, in seconds                         |
| limits_rate_routes_auth_login_count                | 5                                                        | number                 | Allowed number of IP /login requests within window                    |
| limits_rate_routes_auth_login_window               | 60                                                       | number                 | IP /login rate limit window, in seconds                               |
| limits_rate_routes_auth_register_count             | 2                                                        | number                 | Allowed number of IP /register requests within window                 |
| limits_rate_routes_auth_register_window            | 43200                                                    | number                 | IP /register rate limit window, in seconds                            |
| limits_absoluteRate_register_limit                 | 25                                                       | number                 | Absolute number of registrations instance-wide per window             |
| limits_absoluteRate_register_window                | 3600000                                                  | number                 | Global /register rate limit window, in seconds                        |
| limits_absoluteRate_register_enabled               | true                                                     | boolean                | Whether absolute register rate limits are enabled                     |
| limits_absoluteRate_sendMessage_limit              | 200                                                      | number                 | Absolute number of messages instance-wide per window                  |
| limits_absoluteRate_sendMessage_window             | 60000                                                    | number                 | Global sendMessage window, in seconds                                 |
| limits_absoluteRate_sendMessage_enabled            | true                                                     | boolean                | Whether absolute message sending rate limits are enabled              |
| [security_captcha_enabled](../security/captcha.md) | false                                                    | boolean                | Whether to enable captchas for login/register                         |
| security_captcha_service                           | null                                                     | "recaptcha"/"hcaptcha" | Which captcha service to use                                          |
| security_captcha_sitekey                           | null                                                     | string                 | Captcha service sitekey                                               |
| security_captcha_secret                            | null                                                     | string                 | Captcha service secret                                                |
| security_twoFactor_generateBackupCodes             | true                                                     | boolean                | Whether to generate backup codes for MFA users                        |
| security_requestSignature                          | Secret secret                                            | string                 | The signature required for CDN or [Imagor](imagor.md) usage           |
| security_jwtSecret                                 | Secure secret                                            | string                 | The secret used for user token generation                             |
| [security_forwadedFor](../reverseProxy.md)         | null                                                     | string                 | HTTP header for user's real IP.                                       |
| security_ipdataApiKey                              | Fosscord IPdata key                                      | string                 | API key used for IP geolocation and proxy detection                   |
| security_mfaBackupCodeCount                        | 10                                                       | number                 | Number of MFA backup codes to generate                                |
| security_statsWorldReadable                        | true                                                     | boolean                | Whether instance stats are publically accessible or require right     |
| security_defaultRegistrationTokenExpiration        | 604800000                                                | number                 | Seconds for [registration tokens](../security/regTokens.md) to expire |
| login_requireCaptcha                               | false                                                    | boolean                | Whether login requires captcha verification                           |
| register_email_required                            | false                                                    | boolean                | Whether an email is required for registration                         |
| register_email_allowlist                           | false                                                    | boolean                | Whether `register_email_domains` is an allowlist                      |
| register_email_blocklist                           | true                                                     | boolean                | Whether `register_email_domains` is a blocklist                       |
| register_email_domains                             | []                                                       | string[]               | The email domains list to use as a block/allow list                   |
| register_dateOfBirth_required                      | true                                                     | boolean                | Whether a date of birth is required for registration                  |
| register_dateOfBirth_minimum                       | 13                                                       | number                 | The minimum age of registration                                       |
| register_password_required                         | false                                                    | boolean                | Whether a password is required for registration                       |
| register_password_minLength                        | 8                                                        | number                 | Minimum password length                                               |
| register_password_minNumbers                       | 2                                                        | number                 | Minimum number of number characters in passwords                      |
| register_password_minUpperCase                     | 2                                                        | number                 | Minimum number of uppercase characters in passwords                   |
| register_password_minSymbols                       | 0                                                        | number                 | Minimum number of symbols in passwords                                |
| register_disabled                                  | false                                                    | boolean                | Whether registration is disabled                                      |
| register_requireCaptcha                            | true                                                     | boolean                | Whether registration requires captcha verification                    |
| register_requireInvite                             | false                                                    | boolean                | Whether registration requires a guild invite                          |
| register_guestsRequireInvite                       | true                                                     | boolean                | Whether guests accounts require a guild invite                        |
| register_allowMultipleAccounts                     | true                                                     | boolean                | Allow multiple accounts with the same client fingerprint              |
| register_blockProxies                              | true                                                     | boolean                | Whether proxies are blocked from registration                         |
| register_incrementingDiscriminators                | false                                                    | boolean                | Whether discriminators are random or incrementing                     |
| [register_defaultRights](../security/rights.md)    | 30644591655940                                           | string                 | The rights assigned to users _upon registration_                      |
| regions_default                                    | fosscord                                                 | string                 | The default voice region to use                                       |
| regions_useDefaultAsOptimal                        | true                                                     | boolean                | Whether to calculate closest or use default as optimal voice region   |
| regions_available_0_id                             | fosscord                                                 | string[]               | The available voice region IDs                                        |
| regions_available_0_name                           | Fosscord                                                 | string[]               | The available voice region names                                      |
| regions_available_0_endpoint                       | 127.0.0.1:3004                                           | string[]               | The available voice region endpoint URLs                              |
| regions_available_0_vip                            | false                                                    | boolean[]              | Whether this voice region is VIP exclusive                            |
| regions_available_0_custom                         | false                                                    | boolean[]              | Whether this is a custom voice region (used for events/etc)           |
| regions_available_0_deprecated                     | false                                                    | boolean[]              | Whether this is a deprecated voice region (clients avoid these)       |
| guild_discovery_showAllGuilds                      | false                                                    | boolean                | Whether guild discovery should show all guilds                        |
| guild_discovery_limit                              | 24                                                       | number                 | Maximum number of guild discovery elements per page                   |
| guild_autoJoin_enabled                             | true                                                     | boolean                | Whether users auto join guild(s) on registration                      |
| guild_autoJoin_canLeave                            | true                                                     | boolean                | Whether users can leave the auto-joined guild(s)                      |
| [guild_defaultFeatures_0](guildFeatures.md)        | null                                                     | string                 | Features automatically granted to guilds upon creation                |
| gif_enabled                                        | true                                                     | boolean                | Whether GIF features are enabled                                      |
| gif_provider                                       | tenor                                                    | "tenor"                | Which GIF service to use                                              |
| gif_apiKey                                         | LIVDSRZULELA                                             | string                 | GIF service API key                                                   |
| [rabbitmq_host](rabbitmq.md)                       | null                                                     | string                 | RabbitMQ connection string                                            |
| templates_enabled                                  | true                                                     | boolean                | Whether guild templates are enabled                                   |
| templates_allowTemplateCreation                    | true                                                     | boolean                | Whether new guild templates can be created                            |
| templates_allowDiscordTemplates                    | true                                                     | boolean                | Whether guild templates from Discord.com can be fetched               |
| [templates_allowRaws](/concepts/guildTemplates.md) | true                                                     | boolean                | Whether raw guild templates are allowed                               |
| client_useTestClient                               | false                                                    | boolean                | Whether the Discord.com test client is enabled                        |
| sentry_enabled                                     | false                                                    | boolean                | Whether server-side Sentry analytics is enabled                       |
| sentry_endpoint                                    | Fosscord sentry endpoint                                 | string                 | Sentry endpoint                                                       |
| sentry_traceSampleRate                             | 1                                                        | number                 | Sentry sample rate (1 means all requests)                             |
| sentry_environment                                 | System hostname                                          | string                 | Sentry environment name                                               |
| defaults_user_premium                              | false                                                    | boolean                | Whether users are given premium upon registration                     |
| defaults_user_premium_type                         | 2                                                        | number                 | The premium type given to users upon registration                     |
| defaults_user_verified                             | true                                                     | boolean                | Whether users get verified email upon registration                    |
| [external_twitter](embeds.md)                      | null                                                     | string                 | Twitter API key used for Twitter embeds                               |
