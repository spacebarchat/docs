# Embeds

Embeds in Fosscord are external content that is displayed within your messages when linked to.
Fosscord tries its best to fetch content from these external sites,
but sometimes we require an API key or other authentication with the site to display their content (or nicer looking embeds).

For external images, it's best to set up [Imagor](imagor.md) for image resizing.
The client may or may not fetch images directly from their source if this is not set up,
and as such some users may not see all images.
In the case where a client does fetch an image from it's source, without Imagor an attacker
may be able to learn the IP addresses of users.

## Twitter

Go to the [Twitter developer portal](https://developer.twitter.com/) and sign up for developer access.
You must have a phone number attached to your account to sign up.
Create an application for use with the Twitter API (We don't need to post messages to Twitter itself).
Make sure to create a bearer token for authentication.
Once you have your API key, set the `external_twitter` [config](index.md) value to your API key, wrapped in quotes.
