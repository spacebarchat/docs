# Email

{{ project.name }} can be configured to send email, to enable the following functionality:

-   Email verification
-   Password resets
-   Password change notifications

{{ project.name }} supports the following email transports:

-   SMTP
-   [Mailjet](https://www.mailjet.com/)
-   [Mailgun](https://www.mailgun.com/)
-   [Sendgrid](https://sendgrid.com/)

Once you have an account with one of the above services, or an SMTP service, you can begin configuring {{ project.name }} to send mail.

You must edit:

-   The `general.frontPage` [config](index.md) value, used to generate verification/password reset links.
    Be sure to set it to the {{ project.name }} web app URL. For example, `https://staging.{{ project.domain }}`
-   The `email.senderAddress` config value, used as the 'from' email address. If it's not set, `general.correspondenceEmail` is used.

Optionally:

-   By default users are automatically verified. To change this, update the `defaults_user_verified` [config](index.md) value to `false`.
-   If you would like users to be forced to verify their email before using the service, set the `login_requireVerification` config to `true`.
-   You may force users to pass a CAPTCHA before requesting a password reset by setting `passwordReset_requireCaptcha` to `true`

## Email Config

=== "SMTP"

    | key                 | type    | description                 |
    | ------------------- | ------- | --------------------------- |
    | email.smtp.host     | string  | SMTP Host for sending email |
    | email.smtp.port     | number  | SMTP port                   |
    | email.smtp.secure   | boolean | Use TLS for SMTP            |
    | email.smtp.username | string  | SMTP username               |
    | email.smtp.password | string  | SMTP password               |

=== "Mailgun"

    | key                  | type   | description     |
    | -------------------- | ------ | --------------- |
    | email.mailgun.apiKey | string | Mailgun API key |
    | email.mailgun.domain | string | Mailgun domain  |

=== "Mailjet"

    | key                     | type   | description        |
    | ----------------------- | ------ | ------------------ |
    | email.mailjet.apiKey    | string | Mailjet API key    |
    | email.mailjet.apiSecret | string | Mailjet API secret |

=== "Sendgrid"

    | key                   | type   | description      |
    | --------------------- | ------ | ---------------- |
    | email.sendgrid.apiKey | string | Sendgrid API key |

## Email templates

{{ project.name }}'s email templates are stored in [`{{ project.name.lower() }}-server/assets/email_templates`]({{ repositories.base_url }}/{{ repositories.server }}/tree/master/assets/email_templates).
They are simple HTML files, which you may edit freely. Although HTML mail is very restricted, so a lot of content may not render properly.

Below are the available strings replaced in mail templates.

| string                  | replaced with                                                                |
| ----------------------- |------------------------------------------------------------------------------|
| `{instanceName}`        | `general.instanceName` config value                                          |
| `{userUsername}`        | The username of the user this email is being sent to                         |
| `{userDiscriminator}`   | The discriminator of the user this email is being sent to                    |
| `{userId}`              | The ID of the user this email is being sent to                               |
| `{phoneNumber}`         | The last 4 digits of the user's phone number.                                |
| `{userEmail}`           | The user's email address                                                     |
| `{actionUrl}`           | The generated password reset or email verification link                      |
| `{ipAddress}`           | The IP address of new login (New login emails are not currently implemented) |
| `{locationCity}`        | The GeoIP city of new login                                                  |
| `{locationRegion}`      | The GeoIP region of new login                                                |
| `{locationCountryName}` | The GeoIP country of new login                                               |
