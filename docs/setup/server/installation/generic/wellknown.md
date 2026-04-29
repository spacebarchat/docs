# Domain delegation (.well-known)

Instance owners may host a `/.well-known/spacebar/client` file on a domain containing the instance's API endpoint for Spacebar instance discovery.

Users can enter a domain, e.g. `spacebar.chat` as shorthand, and their client will query `https://spacebar.chat/.well-known/spacebar/client` for the instance API,
Gateway and CDN endpoints.

Assuming you've configured your instance correctly, you should be able to reverse proxy this to your API.

For example:

=== "JSON"

	```json
    {
        "api": {
            "baseUrl": "https://api.rory.server.spacebar.chat:443",
            "apiVersions": {
                "default": "9",
                "active": [
                    "6",
                    "7",
                    "8",
                    "9"
                ]
            }
        },
        "cdn": {
            "baseUrl": "https://cdn.rory.server.spacebar.chat:443"
        },
        "gateway": {
            "baseUrl": "wss://gateway.rory.server.spacebar.chat:443",
            "encoding": [
                "etf",
                "json"
            ],
            "compression": [
                "zstd-stream",
                "zlib-stream",
                null
            ]
        },
        "admin": {
            "baseUrl": "https://admin.rory.server.spacebar.chat:443"
        }
    }
	```