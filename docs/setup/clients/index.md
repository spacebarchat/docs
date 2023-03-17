# Clients

The official {{ name }} client is currently being developed at [this repository.](https://github.com/{{ name.lower() }}/{{ name.lower() }}-client/tree/dev/bare-rewrite).
The {{ name }} client is, at the time of writing this (March 17th, 2023), under heavy development
and not ready to be used just yet.

## Building

To build the project you have to install `yarn` (preferred) or `npm` with NodeJS version 16 or higher. Clone the project using git, then execute

     cd fosscord-client; yarn install

To start the client, follow these instructions, depending on your NodeJS version:

<details>
  <summary>NodeJS == v16.x</summary>
  
  ```
  yarn start
  ```
  
</details>

or

<details>
  <summary>NodeJS > v16.x</summary>
  
  ```
  NODE_OPTIONS=--openssl-legacy-provider yarn start
  ```
  
</details>

## Contributing

To contribute:

<!-->

TODO tell people what issues to work on
<-->

-   [Fork the repository](https://github.com/fosscord/fosscord-client/fork)
-   Run the building instructions.
-   Commit & Push.
-   Pull Request & Done!
