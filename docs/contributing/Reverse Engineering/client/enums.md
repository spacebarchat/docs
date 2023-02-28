# Enums and bitfields and such

Various interesting enums/bitfields/etc found by inspecting the client source

## `usage_flags`

Bitfield which tracks which premium features you have used in order
to convince you out of unsubscribing from premium features.

| name                  | value |
| --------------------- | ----- |
| PREMIUM_DISCRIMINATOR | 1     |
| ANIMATED_AVATAR       | 2     |
| PROFILE_BANNER        | 4     |

## `purchased_flags`

Bitfield which may track which premium features have ever been bought on this account.
Uses the values of each [premium type](https://discord.com/developers/docs/resources/user#user-object-premium-types)
