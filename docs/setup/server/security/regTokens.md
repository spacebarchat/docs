# Registration Tokens

Registration tokens are a one-time use token for allowing a new user registration to bypass various restrictions:

-   Bypass `register_allowNewRegistrations = false`
-   Bypass `register_disabled = true`
-   Bypass [captchas](captcha.md)
-   Bypass `register_allowMultipleAccounts = false`
-   Bypass `register_blockProxies = true`
-   Bypass `register_requireInvite = true`
-   Bypass `register_guestsRequireInvite = true`
-   Bypass [absolute register rate limits](limits.md)

To create a registration token, send a GET request to `/auth/generate-registration-tokens` as an account with `OPERATOR` [rights](rights.md).

There are a few query parameters available. Append them to the request URL, for example `/auth/generate-registration-tokens?count=10&plain=true`

| Parameter     | Type | Default | Description                                       |
| ------------- | ---- | ------- | ------------------------------------------------- |
| `count`       | int  | 1       | The number of tokens to generate                  |
| `plain`       | bool | false   | Return a newline separated string instead of JSON |
| `length`      | int  | 255     | The length of each returned token                 |
| `include_url` | bool | false   | Prefix tokens with URL to register page           |

To use a registration token, append `?token={your registration token}` to the register route. For example

```
https://staging.fosscord.com/register?token=some token
```
