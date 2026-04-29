# CAPTCHAs

{{ project.name }} currently supports two CAPTCHA providers; reCAPTCHA and hCaptcha.

=== "hCaptcha"

    1. Navigate to [https://www.hcaptcha.com/](https://www.hcaptcha.com/)
    2. Create an account - `Add hCaptcha for Publishers to my website or app`
    3. Copy your `sitekey` to the [config](../configuration/index.md) `security.captcha.sitekey` value, wrapped in quotes
    4. Copy your `secret` to the config `security.captcha.secret` value, wrapped in quotes
    5. Set the config `security.captcha.service` value to `"hcaptcha"`
    6. Set the  `security.captcha.enabled` value to `true`, *not* wrapped in quotes.

=== "reCAPTCHA"

    1. Navigate to [https://www.google.com/u/1/recaptcha/admin/create](https://www.google.com/u/1/recaptcha/admin/create)
    2. Fill in your websites details
    3. Select `reCAPTCHA v2` -> `"I'm not a robot" Checkbox`
    4. Add your domain. For example, `staging.{{ project.domain }}`. Go to the next screen.
    5. Copy your `sitekey` to the [config](../configuration/index.md) `security.captcha.sitekey` value, wrapped in quotes
    6. Copy your `secret` to the config `security.captcha.secret` value, wrapped in quotes
    7. Set the config `security.captcha.service` value to `"recaptcha"`
    8. Set the `security.captcha.enabled` value to `true`, *not* wrapped in quotes.

    reCAPTCHA v3 and other v2 types may or may not work.
