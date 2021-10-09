# Bots

Fosscord is backwards compatible to discord, which means you can reuse your existing discord bot library and only need to change the api endpoints.

Currently the bot dashboard is still in development and not yet finished. Until then you can use regular user accounts. Similarly in the instances where the human/bot distinction is disabled, just a regular user would be used.

## Retrieve the user token:

1. Open the instance in your browser
2. Logout of your current account
3. Enable DevTools (hit `F12` or `Right click on the page -> Inspect`).
4. Register a new account
5. Open the network tab inside of DevTools
6. Enable the xhr/fetch request filter
7. Click on any (api) request and then
8. Inside of "Request Headers" copy the value of the `authorization` header.

**Done**: You now can use this token to login with your bot libary or authorize any api request by putting it inside the authorization header.

**Notice**: Currently you can but don't need to prefix the token with "`Bot `".

## Libraries

### Discord.js

### Discord.py

### JDA
