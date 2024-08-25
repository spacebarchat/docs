# Bots and Applications

{{ project.name }} is compatible with Discord.com, and so all
existing bots and applications designed for Discord.com should work relatively easily
when connected to a {{ project.name }} instance instead.

## Bot Libraries

Below are some popular libraries for connecting bots to a {{ project.name }} instance.

Make sure to replace `api.{{ project.domain }}` and `cdn.{{ project.domain }}`
with the appropriate URLs of the instance you want to connect to.

You can get them from a client or from the [well-known](server/wellknown) instance endpoint.

### discord.js

The `Client` class constructor accepts configuration options that can be used to change
the endpoints.

```js
const { Client } = require("discord.js");

const client = new Client({
	rest: {
		api: "https://api.{{ project.domain }}/api",
		cdn: "https://cdn.{{ project.domain }}",
		version: "9"
	},
	ws: {
		version: 9
	},
	// intents, ...
});

client.login("your token here");
```

### discord.py

```py
import discord

discord.http.Route.BASE = "https://api.{{ project.domain }}/api"
client = discord.Client()

client.run("your token here")
```

### JDA

1. Create a RestConfig instance: `RestConfig restConfig = new RestConfig();`
2. Use RestConfig#setBaseUrl to tell JDA what your Rest URI is: `restConfig.setBaseUrl("https://api.{{ project.domain }}/api/v9");`
3. Create another class, and extend ConcurrentSessionController, e.g. `public class SpacebarSessionController extends ConcurrentSessionController`
4. Override the ConcurrentSessionController#getGateway method:
```java
	@NotNull
	@Override
	public String getGateway() {
		return "wss://gateway.{{ project.domain }}/?encoding=json&v=9&compress=zlib-stream";
	}
```
5. Finally, configure JDA to use your RestConfig & SpacebarSessionController, like this:
```java
JDA jda = JDABuilder.createDefault("your token here")
	.setRestConfig(restConfig)
	.setSessionController(new SpacebarSessionController())
	.build();
```
