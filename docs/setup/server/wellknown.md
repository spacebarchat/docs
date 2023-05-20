# well-known

Instance owners may host a `/.well-known/spacebar` file on a domain containing the instance's API endpoint for Spacebar instance discovery.

Users can enter a domain, e.g. `spacebar.chat` as shorthand, and their client will query `https://spacebar.chat/.well-known/spacebar` for the instance API URL,
and from there the Gateway and CDN endpoints.

Example `/.well-known/spacebar` file:

```json
{
	"api": "https://api.spacebar.chat/api/v9"
}
```
