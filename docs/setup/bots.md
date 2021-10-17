# Bots

Fosscord is backwards compatible to discord, which means you can reuse your existing discord bot library and only need to change the api endpoints.

Currently the bot dashboard is still in development and not yet finished. Until then you can use regular user accounts. Similarly in the instances where the human/bot distinction is disabled, just a regular user would be used.

## Retrieve the user token:

1. Open the instance in your browser
2. Logout of your current account
3. Register a new account
4. Enable DevTools (hit `F12` or `Right click on the page -> Inspect`).
5. Open the network tab inside of DevTools
6. Enable the xhr/fetch request filter
7. Execute any kind of action (navigate to a channel, send a message)
8. Click on any (api) request
9. Inside of "Request Headers" copy the value of the `authorization` header.

![Retrieve user token](https://user-images.githubusercontent.com/34555296/136654084-73c2c2a2-0a54-46f3-b10d-ff20cd64c656.jpg)

**Done**: You now can use this copied token to login with your bot libary or authorize any api request by putting it inside the authorization header.

**Notice**: Currently you can but don't need to prefix the token with "`Bot `".

## Libraries

Change `https://api.fosscord.com` to your desired endpoint.

Replace `your token here` with your copied token.

### Discord.js

Inside the client option you can specify the api endpoint:

```js
const { Client } = require("discord.js");

const client = new Client({
    http: {
        version: 9,
        api: "https://api.fosscord.com",
        cdn: "https://cdn.fosscord.com",
        invite: "https://fosscord.com/invite",
    },
});

client.login("your token here");
```

### Discord.py

```py
import discord

discord.http.Route.BASE = "https://api.fosscord.com"
client = discord.Client()

client.run('your token here')
```

### JDA

```java
import java.lang.reflect.*;
import net.dv8tion.jda.internal.requests.*;

public static void main(String[] args) {
	JDA jda = JDABuilder.createDefault("your token here").build();

	Field field = Requester.class.getDeclaredField("DISCORD_API_PREFIX")
	field.setAccessible(true);

	Field modifiers = Field.class.getDeclaredField("modifiers");
	modifiers.setAccessible(true);
	modifiers.setString(field, field.getModifiers() & ~Modifier.FINAL);

	field.set(null, "https://api.fosscord.com");
}
```
