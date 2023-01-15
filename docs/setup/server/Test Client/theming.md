# Theming

'Theming' here refers to the theming of the [test client](index.md).
Fosscord can inject additional CSS into the client to allow you to change quite a lot about it's appearence.

There's three different CSS files injected into the client, in `/assets/public`, including `fosscord-login.css`, `fosscord.css`, and `user.css`.
Fosscord developers may make changes to `fosscord.css` occasionally, so it's best to not touch this.
`user.css` and `fosscord.css` are applied to all routes in the client, while `fosscord-login.css` is only applied to the login/register routes.

You can essentially throw any BetterDiscord/Replugged CSS theme into the `user.css` file and, given it was designed for the same client version, it'll work.
