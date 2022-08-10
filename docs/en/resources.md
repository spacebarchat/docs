## Links

- [Documentation](https://docs.fosscord.com)
- [Roadmap](https://fosscord.notion.site/2c7fe9e73f9842d3bab3a4912dedd091) (Notion to-do board synced with GitHub issues)
- [Status](https://status.fosscord.com/) (Status page of the official fosscord instance)
- [GitHub](https://github.com/fosscord/) (GitHub organization)
- [OpenCollective](https://opencollective.com/fosscord) (Financially support the project to cover server costs and other expenses)
- [Discord server](https://discord.gg/ZrnGQP6p3d) (for support & organization (If we are finished we'll host our own support server))
- [Tor Hidden Service](http://7jexqzsbqndcsh6y7hybtaf5us5vt7mya7hi4fbi2tid6zazno3h44qd.onion/) (Official Fosscord instance on TOR)

## Project structure

Fosscord consists of many repositories, which together make up the client and server:

### Server

- **[fosscord-server](https://github.com/fosscord/fosscord-api) is the complete Fosscord Server** and it

Contains:

- [api](https://github.com/fosscord/fosscord-server/tree/master/api) a HTTP REST server
- [gateway](https://github.com/fosscord/fosscord-server/tree/master/gateway) a WebSocket Gateway server
- [rtc](https://github.com/fosscord/fosscord-server/tree/master/rtc) a _C++_ webRTC server for voice and video sharing.
- [webRTC-server](https://github.com/fosscord/fosscord-server/tree/master/webrtc-server) a _javascript_ webRTC server for voice and video communication
- [dashboard](https://github.com/fosscord/fosscord-server/tree/master/dashboard) An admin dashboard for the server (analytics, settings, administration, trust & safety)
- [util](https://github.com/fosscord/fosscord-server/tree/master/util) contains all shared logic like Database Models, Utility functions...
- [cdn](https://github.com/fosscord/fosscord-server/tree/master/cdn) is the content-delivery-content (CDN) that stores user uploaded images.

### Client

- [fosscord-ui](https://github.com/fosscord/fosscord-ui) is a user interface framework in the style of discord.
- [fosscord-themes](https://github.com/fosscord/fosscord-themes) contains all the official themes for the client.
- [fosscord-plugins](https://github.com/fosscord/fosscord-plugins) contains all the official plugins for the client.
- [fosscord-client](https://github.com/fosscord/fosscord-client) is the official (react)-native Fosscord client.
- ~~[fosscord-web-client](https://github.com/fosscord/fosscord-web-client) was an effort to develop a fosscord web client.~~ (Discontinued)
- ~~[react-native-withcss](https://github.com/fosscord/react-native-withcss) CSS support for react native~~ (Discontinued)
- ~~[css-mediaquery](https://github.com/fosscord/css-mediaquery) CSS media query support for react native~~ (Discontinued)

#### Others

- [fosscord-docs](https://github.com/fosscord/fosscord-docs) Documentation of Fosscord
- [fosscord-landingpage](https://github.com/fosscord/fosscord-landingpage) represents and explains the project.
- [fosscord.js](https://github.com/fosscord/fosscord.js) A powerful JavaScript library for interacting with the Fosscord API
- [fosscord.js-builders](https://github.com/fosscord/fosscord.js-builders) A collection of builders that you can use when creating your bot.
- [fosscord.py](https://github.com/fosscord/fosscord.py) An API wrapper for Fosscord written in Python.
- [docker](https://github.com/fosscord/docker) 🐳 Fosscord's Docker images and composing
