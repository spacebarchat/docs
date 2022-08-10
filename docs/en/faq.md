# Frequently Asked Questions

## Can I get free Nitro?

We Fosscord developers and server administrators can't grant you free nitro at discord.com.
A Fosscord instance administrator may choose to grant you free nitro or its equivalent powers in its own instance.
Do not beg for free Nitro in Fosscord Github repository, or in Fosscord Official Development Guild.

## Why are we reimplementing and extending the Discord protocol?

1. Despite its API complexity, underlying working principle of the protocol is quite simple. No complex conflict resolution like, say, Matrix.
2. People want persistent decentralised chats. Also to speak, Discord's event ordering is strictly linear, which again simplifies server, client and bot development.
3. Discord protocol has event authorisation finality, which simplifies the server design.
4. The server does most of the heavy lifting, which allows for more easy client and bot development.
5. There are many bots for Discord that can be modified to use a Fosscord instance.
6. We love free software. Hence our server is licensed under Affero GPLv3, and some other parts are licensed under GPLv3.
7. We embrace and love third party clients. The more clients there are, the harder for Discord Inc. to shut down this project.
8. Discord's security model is based on the enforcement of well-formedness throughout the protocol. And this is great for achieving security without an extensive lock-in. 

## By when will the version/feature X have been available?

As always, we don't give ETAs; because users tend to reinterpret ETAs as committed due dates.

## When is the next stable version going to be released?

When it's ready.
