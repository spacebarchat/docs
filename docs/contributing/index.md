# Contributing

!!! info "[Have you read the Code of Conduct?](conduct.md)"

## Notable Technologies

-   Typescript
-   [Typeorm](https://www.npmjs.com/package/typeorm)
-   [WS](https://www.npmjs.com/package/ws)
-   [Express](https://www.npmjs.com/package/express)

## Structure

Fosscord is written in Typescript and is comprised of 4 main parts:

-   REST HTTP API server
-   Websocket Gateway server for realtime communication with clients
-   HTTP CDN server for storing user file content.
-   `utils` module to separate our database models, schemas, and other things from the above 3 components.

### Gateway

The Gateway is a WebSocket server that is responsible for listening and emitting events to/from connected clients.

### API

The API is a HTTP REST server which does the bulk of the database reads/writes.

## Documentation

Unfortunately writing documentation is quite annoying. There's tons of comments in the codebase tho, so don't worry :)
