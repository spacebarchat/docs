# Bots and Applications

{{ project.name }} is backwards-compatibile with Discord.com, and so all
existing bots and applications designed for Discord.com should work relatively easily
when connected to a {{ project.name }} instance instead.

The Discord Developer Panel is available at /developers, and allows you all the same functionality
to create bots and applications on a {{ project.name }} instance as Discord.com.

## Bot Libraries

### Discord.js

The `Client` class constructor accepts a `http` object, which you can use to change
the endpoints used.

```js
const { Client } = require("discord.js");

const client = new Client({
	http: {
		version: 9,
		api: "https://api.{{ project.domain }}",
		cdn: "https://cdn.{{ project.domain }}",
		invite: "https://{{ project.domain }}/invite",
	},
});

client.login("your token here");
```

### Discord.py

```py
import discord

discord.http.Route.BASE = "https://api.{{ project.domain }}"
client = discord.Client()

client.run('your token here')
```

### JDA
1. Create a RestConfig instance: `RestConfig restConfig = new RestConfig();`
2. Use RestConfig#setBaseUrl to tell JDA what your Rest URI is (this NEEDS to include /api/<apiver>, because it's the api **base** url for all requests): `restConfig.setBaseUrl("https://{REPLACE HERE WITH YOUR API SERVER URL}/api/v9");`
3. Create another class, and extend ConcurrentSessionController, e.g. `public class SpacebarSessionController extends ConcurrentSessionController`
4. Override the ConcurrentSessionController#getGateway method:
```java
    @NotNull
    @Override
    public String getGateway() {
        return "wss://{REPLACE HERE WITH YOUR GATEWAY SERVER URL}/?encoding=json&v=9&compress=zlib-stream";
    }
```
5. Finally, configure JDA to use your RestConfig & SpacebarSessionController, like this:
```java
JDA jda = JDABuilder.createDefault("not_a_real_token_lol")
                .setRestConfig(restConfig)
                .setSessionController(new SpacebarSessionController())
                .build();
```