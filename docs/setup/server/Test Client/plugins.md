There is no plugin API available to use with the test client currently.
You cannot install BetterDiscord, Powercord/Replugged, or other client mod plugins without heavy modification at this time.

However, you _can_ install [Vencord](https://github.com/Vendicated/Vencord)
quite easily with only slight modifications to the [user script](https://github.com/Vendicated/Vencord#installing-on-browser).

For instances you control, simply find and replace all mentions of `GM_xmlhttpRequest` with `new XMLHttpRequest`, and `unsafeWindow` with `window`.
Throw the edited file into the `assets/preload-plugins` directory, restart the server, and you now have Vencord installed instance-wide!

If you want to install Vencord on instances you do not control, do not perform any of the above steps, and simply modify
the `@match` line at the top to include the instance(s). For [staging.fosscord.com](https://staging.fosscord.com):

```js
// @match *://*.staging.fosscord.com/*
```

    You may now install the modified user script in your favourite user script browser extension, such as [Tampermonkey](https://www.tampermonkey.net/)
