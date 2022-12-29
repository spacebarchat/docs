# Embeds

Embeds in Fosscord are external content that is displayed within your messages when linked to.
Fosscord tries its best to fetch content from these external sites,
but sometimes we require an API key or other authentication with the site to display their content (or nicer looking embeds).

## Twitter

Go to the [Twitter developer portal](https://developer.twitter.com/) and sign up for developer access.
Create an application for use with the Twitter API (We don't need to post messages to Twitter itself).
Once you have your API key, set the `external_twitter` [config](index.md) value to your API key, wrapped in quotes.
