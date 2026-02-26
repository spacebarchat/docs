# Bot and application usage

## Creating an application

If your client doesn't have a Developer Portal (yet), you can use the below API requests to create an application.
Make sure to replace the instance API URL if it's different.

1. Create an application:
	```http
	POST https://api.{{ project.domain }}/api/v9/applications
	Authorization: <User token, e.g. from initial Gateway connection to instance>
	Content-Type: application/json

	{
		"name": "My Application"
	}
	```
2. Note the returned `id`.
3. Create a bot:
	```http
	POST https://api.{{ project.domain }}/api/v9/applications/<id>/bot
	Authorization: <User token>
	```

This will return a token for you to use.

## Adding an application to a server

```http
POST https://api.{{ project.domain }}/api/v9/oauth2/authorize?client_id=<id>
Authorization: <User token of server owner/member with Manage Guild permissions>
Content-Type: application/json

{
	"guild_id": "<server ID>",
	"permissions": "<permission BigInt, e.g. 0 for no permissions or 8 for Administrator>",
	"authorize": true
}
```
