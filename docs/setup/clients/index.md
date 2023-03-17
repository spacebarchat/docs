# Clients

The official {{ name }} client is currently being developed at [this repository.](https://github.com/{{ name.lower() }}/{{ name.lower() }}-client/tree/dev/bare-rewrite).
The {{ name }} client is, at the time of writing this (March 17th, 2023), under heavy development
and not ready to be used just yet.

## Dependencies

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org). Version 16+
-   [yarn](https://yarnpkg.com/) (preferred) or npm

## Setup/Building

In your terminal:

```bash
# Download Fosscord Client
git clone https://github.com/{{ name.lower() }}/{{ name.lower() }}-client.git

# Enter the cloned directory, switch branches to the one, which is actually being developed
cd {{ name.lower() }}-client; git switch dev/bare-rewrite

# Install dependencies
yarn install
```

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

-   [Fork the repository](https://github.com/{{ name.lower() }}/{{ name.lower() }}-client/fork)
-   Run the building instructions.
-   Commit & Push.
-   Pull Request & Done!

### What can I contribute?

To quote the current lead client developer Puyodead1 directly:

> uh, Idk. for the moment, I think we should focus more on "core" features like settings, editing messages, dms, markdown rendering, etc etc etc. with that, I would also say just use common sense, what do you think are basic features that you would want? some of the github issues apply to this.
> but hey, if you want to work on something else like voice/video as a wild wacky idea, im not going to stop you. xD
> if anyone else wants to chime in on [this](https://github.com/fosscord/fosscord-client/issues/21), go ahead
>
> -- <cite>Puyodead1</cite>
