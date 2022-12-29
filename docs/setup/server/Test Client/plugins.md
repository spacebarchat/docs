There is no plugin API available to use with the test client currently.
You cannot install BetterDiscord, Powercord/Replugged, or other client mod plugins without heavy modification at this time.

However, you _can_ install [Vencord](https://github.com/Vendicated/Vencord)
quite easily with only slight modifications to the [user script](https://github.com/Vendicated/Vencord#installing-on-browser).
Simply find and replace all mentions of `GM_xmlhttpRequest` with `new XMLHttpRequest`, and `unsafeWindow` with `window`.
Throw the edited file into the `assets/preload-plugins` directory, restart the server, and you now have Vencord installed instance-wide!
