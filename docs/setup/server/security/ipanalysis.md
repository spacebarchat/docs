# Blocking Proxies/VPNs

Fosscord supports scanning the IP addresses of users who register in order to block proxies, VPNs, hosting providers, and various 'bad IPs'.
Fosscord uses [GetIPIntel](https://getipintel.net/)'s free API to do so. You can read more about how it works there.

You can enable this by setting, in your instance [config](../configuration/index.md):

* `register_blockProxies` to `true`.
* `general_correspondenceEmail` to a valid email address which can send and receive email. This is sent to GetIPIntel.

!!! warning

	GetIPIntel is a free service, and to prevent abuse has very tight request limits.
	At the time of writing, you are allowed to make 500 requests per day, and no more than 15 requests per minute.
	If you expect to exceed this with your instance we recommend not enabling it.