# Registration Tokens

Registration tokens are a one-time use token for allowing a new user registration to bypass various restrictions:

* Bypass `register_allowNewRegistrations = false`
* Bypass `register_disabled = true`
* Bypass [captchas](captcha.md)
* Bypass `register_allowMultipleAccounts = false`
* Bypass `register_blockProxies = true`
* Bypass `register_requireInvite = true`
* Bypass `register_guestsRequireInvite = true`
* Bypass [absolute register rate limits](limits.md)

To create a registration token, send a GET request to `/auth/generate-registration-tokens/` as an account with `OPERATOR` [rights](rights.md)

To use a registration token, append `?token={your registration token}` to the register route. For example
```
https://staging.fosscord.com/register?token=some token
```