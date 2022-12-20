# Contributing

!!! info "[Have you read the Code of Conduct?](conduct.md)"

## Structure

Fosscord is written in Typescript and is comprised of 4 main parts:

-   REST HTTP API server
-   Websocket Gateway server for realtime communication with clients
-   HTTP CDN server for storing user file content.
-   `utils` module to separate our database models, schemas, and other things from the above 3 components.
