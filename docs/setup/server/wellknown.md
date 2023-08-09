# well-known

Instance owners may host a `/.well-known/spacebar` file on a domain containing the instance's API endpoint for Spacebar instance discovery.

Users can enter a domain, e.g. `spacebar.chat` as shorthand, and their client will query `https://spacebar.chat/.well-known/spacebar` for the instance API URL,
and from there the Gateway and CDN endpoints.

For example:

=== "JSON"

	```json
	{
		"api": "https://api.spacebar.chat/api/v9"
	}
	```

=== "NGINX"

	```nginx
	location /.well-known/spacebar {
		add_header Access-Control-Allow-Origin *;
		return 200 '{"api": "https://api.spacebar.chat/api/v9"}';
	}
	```