# Rate Limiting

{{ project.name }} has various forms of rate limiting built in. If you are logged in, you can bypass these with the `BYPASS_RATE_LIMITS` [right](rights.md)

-   Absolute rate limits, which effect all requests to a route regardless of source (`limits.absoluteRate.*`)
-   User or IP specific rate limits (`limits.rate.*`)

## Absolute ratelimiting

There are currently two types of absolute rate limiting:

-   `limits.absoluteRate.register.*` - Controls the absolute count of registrations allowed within a window. Useful for mitigating registration spam, in addition to [captchas](captcha.md)
-   `limits.absoluteRate.sendMessage.*` - Controls the absolute count of messages allowed to be sent within a window.

Absolute rate limits do not consider the source of the request, only the total number of requests instance-wide.

Both of the above are individually enabled.

## User/IP specific ratelimiting

These rate limits are enabled with a single toggle (`limits.rate.enabled`)

-   `limits.rate.ip.*` - Controls the count of requests to any endpoint from a single IP over some window.
-   `limits.rate.global.*` - Number of requests to any endpoint for the same user and IP
-   `limits.rate.error.*` - Number of errors allowed per window for an IP
-   `limits.rate.routes.guild.*` - Guild related requests for same user and IP
-   `limits.rate.routes.webhook.*` - Webhook related requests for same user and IP
-   `limits.rate.routes.channel.*` - Channel related requests for same user and IP
-   `limits.rate.routes.auth.login.*` - Login requests for same user and IP
-   `limits.rate.routes.auth.register.*` - Register requests (successful only) for same IP

## What do you mean by window and count?

Each ratelimiter accepts a `window` and `count`. The rate limiter tracks the number of requests to an endpoint within a `window`, in seconds.
If number of requests within the last `window` seconds exceeds the `count` set, it will block the request.

For example, setting:

```
limits.rate.ip.count = 10
limits.rate.ip.window = 1
```

will prevent all requests to any API endpoints from an IP if they exceed 10 requests in 1 second.
