# Bots
Fosscord is backwards compatible to discord, which means you can reuse your existing discord bot library and only need to change the api endpoints.
Currently the bot dashboard is still in development and not yet finished. Until then you can use regular user accounts.
To get the user token, open the instance in your browser and enable DevTools (hit ``F12`` or ``Right click on the page -> Inspect``).
Logout, register a new account and navigate to the network tab inside of the DevTools. (image coming soon)
Enable the xhr/fetch request filter and click on any api request and copy the ``Authorization`` header.
