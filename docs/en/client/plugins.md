# Plugins

## Philosophy

-   Plugins are executed in their environment to prevent security issues.
-   Plugins can create their own UI and loaded in a separate view _(similar to vscode extensions)_.
-   Plugins can access the component Api and therefore extend the client UI.
-   Plugins can access the WebSocket Connection/Rest API and intercept/transform events.
-   Plugins are restricted and can only do actions with the corresponding permission.
-   Plugins should be accessible through a store that needs to verify the plugins (with dev options to load plugins/add other stores).

## Permissions

-   Can't access the user's token (token plugins should rather be directly integrated into the client (e.g. account switcher)).
-   All permissions must meet the purpose of the plugin and must justify why they need the certain permission to be approved.
-   Shouldn't be able to make any request, except if it:

    -   Requests permission to access the api of the network.
    -   Requests permission to access a specific domain (e.g. plugins backend).
    -   Requests permission to access all domains.

-   Shouldn't be able to intercept events, except if it:

    -   Requests permission to a specific event(s).
    -   Requests permission to all events.

-   Needs to request permission to be able to extend the client's UI.

**_more coming soon_**
