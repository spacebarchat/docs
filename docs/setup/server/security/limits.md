# Rate Limiting

Fosscord has various forms of rate limiting built in. If you are logged in, you can bypass these with the `BYPASS_RATE_LIMITS` [right](rights.md)

-   Absolute rate limits, which effect all requests to a route regardless of source (`limits_absoluteRate_*`)
-   User or IP specific rate limits (`limits_rate_*`)

## Absolute ratelimiting

There are currently two types of absolute rate limiting:

-   `limits_absoluteRate_register_*` - Controls the absolute count of registrations allowed within a window. Useful for mitigating registration spam, in addition to [captchas](captcha.md)
-   `limits_absoluteRate_sendMessage_*` - Controls the absolute count of messages allowed to be sent within a window.

Absolute rate limits do not consider the source of the request, only the total number of requests instance-wide.

Both of the above are individually enabled.

## User/IP specific ratelimiting

These rate limits are enabled with a single toggle (`limits_rate_enabled`)

-   `limits_rate_ip_*` - Controls the count of requests to any endpoint from a single IP over some window.
-   `limits_rate_global_*` - Number of requests to any endpoint for the same user and IP
-   `limits_rate_error_*` - Number of errors allowed per window for an IP
-   `limits_rate_routes_guild_*` - Guild related requests for same user and IP
-   `limits_rate_routes_webhook_*` - Webhook related requests for same user and IP
-   `limits_rate_routes_channel_*` - Channel related requests for same user and IP
-   `limits_rate_routes_auth_login_*` - Login requests for same user and IP
-   `limits_rate_routes_auth_register_*` - Register requests (successful only) for same IP

## What do you mean by window and count?

Each ratelimiter accepts a `window` and `count`. The rate limiter tracks the number of requests to an endpoint within a `window`, in seconds.
If number of requests within the last `window` seconds exceeds the `count` set, it will block the request.

For example, setting:

```
limits_rate_ip_count = 10
limits_rate_ip_window = 1
```

will prevent all requests to any API endpoints from an IP if they exceed 10 requests in 1 second.
