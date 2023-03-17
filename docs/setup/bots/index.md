# Bots and Applications

{{ name }} is backwards-compatibile with Discord.com, and so all
existing bots and applications designed for Discord.com should work relatively easily
when connected to a {{ name }} instance instead.

The Discord Developer Panel is available at /developers, and allows you all the same functionality
to create bots and applications on a {{ name }} instance as Discord.com.

## Bot Libraries

### Discord.js

The `Client` class constructor accepts a `http` object, which you can use to change
the endpoints used.

```js
const { Client } = require("discord.js");

const client = new Client({
 http: {
  version: 9,
  api: "https://api.{{ name.lower() }}.com",
  cdn: "https://cdn.{{ name.lower() }}.com",
  invite: "https://{{ name.lower() }}.com/invite",
 },
});

client.login("your token here");
```

### Discord.py

```py
import discord

discord.http.Route.BASE = "https://api.{{ name.lower() }}.com"
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

    field.set(null, "https://api.{{ name.lower() }}.com");
}
```
