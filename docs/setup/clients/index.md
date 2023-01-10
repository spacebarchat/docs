## Using your Discord.com desktop client with a Fosscord instance

=== "Environment Variables"

    This assumes your Fosscord instance has the [Test Client](../server/Test%20Client/) enabled, and [erlpack](https://npmjs.com/package/@yukikaze-bot/erlpack) installed.

    Set the `DISCORD_WEBAPP_ENDPOINT` environment variable on the machine running the client to the Fosscord web app URL, for example `https://staging.fosscord.com`.

    On Windows:

    1. Open the start menu and search for "Environment variables"
    2. Click "Environment Variables" at the bottom of this new window, titled "System Properties"
    3. Add a new user variable
    4. Set the name to `DISCORD_WEBAPP_ENDPOINT`, and the value to your instance URL.

    On Linux, you can:

    * run `DISCORD_WEBAPP_ENDPOINT=instance url discord` on the CLI
    * edit the `discord.desktop` file to include the above
    * add `EXPORT DISCORD_WEBAPP_ENDPOINT=url` to your bash/zsh/etc profile (`~/.bashrc` for example)
    * and probably lots more

=== "settings.json"

    This assumes your Fosscord instance has the [Test Client](../server/Test%20Client/) enabled, and [erlpack](https://npmjs.com/package/@yukikaze-bot/erlpack) installed.

    You may edit your desktop client's `settings.json` file at
    `%appdata%/discord/settings.json` on Windows and typically
    `~/.config/discord/settings.json` on Linux,
    adding the following line

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

=== "Webcord"

    This assumes your Fosscord instance has the [Test Client](../server/Test%20Client/) enabled.

    Webcord does not currently allow specifcying custom instance URLs.
    The available instances with Webcord are [https://app.freecord.ir](Freecord) and
    [staging.fosscord.com](https://staging.fosscord.com).

    1. Download and install [Webcord](https://github.com/SpacingBat3/WebCord)
    2. In the top bar, "File" -> "Settings"
    3. Scroll down to "Discord Instance" and select a Fosscord instance you would like to use

=== "Host the proxy yourself"

    If an instance does not have the test client enabled, you can [host the proxy yourself](https://github.com/fosscord/Discord-Client-Proxy), and simply set it to use your desired Fosscord instance.
