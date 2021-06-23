## Project structure

Fosscord consists of many repositories, which together make up the client and the server:

### Server-side

-   [fosscord-api](https://github.com/fosscord/fosscord-api) is the REST HTTP API server.
-   [fosscord-gateway](https://github.com/fosscord/fosscord-gateway) is the WebSocket Gateway server.
-   [fosscord-rtc](https://github.com/fosscord/fosscord-rtc) will be the webrtc server for voice and video sharing.
-   [fosscord-dashboard](https://github.com/fosscord/fosscord-dashboard) An admin dashboard for the server (analytics, settings, administration, trust & safety)
-   [fosscord-server-util](https://github.com/fosscord/fosscord-server-util) contains all shared logic like Database Models, Utility functions...
-   [fosscord-cdn](https://github.com/fosscord/fosscord-cdn) is the content-delivery-content (CDN) that stores user uploaded images.
-   [fosscord-docs](https://github.com/fosscord/fosscord-docs) Documentation of Fosscord

### Client-side

-   [fosscord-ui](https://github.com/fosscord/fosscord-ui) is a user interface framework in the style of discord.
-   [fosscord-themes](https://github.com/fosscord/fosscord-themes) contains all the official themes for the client.
-   [fosscord-plugins](https://github.com/fosscord/fosscord-plugins) contains all the official plugins for the client.
-   [fosscord-landingpage](https://github.com/fosscord/fosscord-landingpage) represents and explains the project.
-   [fosscord-client](https://github.com/fosscord/fosscord-client) is the official Fosscord client.

#### Discontinued

-   [react-native-withcss](https://github.com/fosscord/react-native-withcss)
-   [css-mediaquery](https://github.com/fosscord/css-mediaquery)

## Issues

### Naming convention

- The issue name must have the main label as a prefix in brackets: e.g. `[Feature] Test` or `[Bug] Test`.

- The first letter of the prefix and the title must be uppercase.

- You are not allowed to use CAPS.

#### Example Issue:
_this issue follows the above mentioned conventions_

<img src="https://better-issues.herokuapp.com/render_issue?issue=https://github.com/fosscord/fosscord/issues/11&type=compact">