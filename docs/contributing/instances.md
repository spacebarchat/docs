# For Instance Owners

The below are the rules for instance owners who look to be featured in our [community instances](https://github.com/spacebarchat/spacebarchat/tree/master/instances) list.
If you do not meet these criteria, your instance will simply not be featured on our website.

Your instance:

1. Rules must be in line with our [Code of Conduct](conduct.md).
2. Must not contain any Discord Inc. branding, such as including "cord" in the name or the Discord logo in promotional material.
3. Must not host the Discord Inc. client in any capacity.
4. Must be moderated for _at least_ publically accessible guilds. This includes guilds accessible from Discovery or a 'guild directory' channel in an auto join guild.
5. Must have at least regular uptime, meaning it is available at a consistent time of day.
6. Must have a valid and monitored [`general_correspondenceEmail` config](/setup/server/configuration) set.
7. Must not have default [rights](/setup/server/security/rights) that include operator or other administrative rights.
8. Use an [image proxy](/setup/server/configuration/imageProxy), e.g. Imagor, as no image proxy allows attackers to learn user IP addresses.
9. Have a valid SSL/TLS certificate for all endpoints.

We recommend (not required) that you:

-   Enable [Email verification](/setup/server/email), for anti-spam purposes.
-   Enable [Captcha](/setup/server/security/captcha), for anti-spam purposes.
-   Run your instance under [SystemD](/setup/server/systemd) or a similar system in your distro, for automatic restarting.
-   Provide some mechanism for users to report content. This may be as simple as more openly advertising your correspondence email (i.e. outside `GET /api/policies/instance` or `/api/ping`).
-   Provide some mechanism for instance status, such as [Grafana](https://grafana.com/).
-   Host a [`/.well-known/spacebar`](/setup/server/wellknown) file on the domain you wish users associate with your instance, e.g. `spacebar.chat`.
    If doing so, use this domain as the `url` field in your community instances PR.
