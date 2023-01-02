## Using your Discord.com desktop client with a Fosscord instance

There are 3 options, all of which require the Fosscord server have [erlpack](https://npmjs.com/package/@yukikaze-bot/erlpack) installed.

1. The simpler one is to set the `DISCORD_WEBAPP_ENDPOINT` environment variable on the machine running the client
   to the Fosscord web app URL. This assumes the Fosscord instance has the [test client](../server/Test%20Client/index.md) enabled.

1. You may edit your desktop client's `settings.json` file at  
   `%appdata%/discord/settings.json`, adding the following line

```json
"WEBAPP_ENDPOINT" : "https://your_fosscord_instance_url"
```

such that it looks like this, as an example

```json
{
	"IS_MAXIMIZED": true,
	"IS_MINIMIZED": false,
	"WINDOW_BOUNDS": {
		"x": 335,
		"y": 86,
		"width": 940,
		"height": 600
	},
	"BACKGROUND_COLOR": "#202225",
	"WEBAPP_ENDPOINT": "https://your_fosscord_instance_url"
}
```

This also assumes the Fosscord instance has enabled the test client.

1. If an instance does not have the test client enabled, you can [host the proxy yourself](https://github.com/fosscord/Discord-Client-Proxy),
   and simply set it to use your desired Fosscord instance.
