# Web Jank Client

!!! warning "Jank client is under heavy development and not ready to be used in production yet."

Jank client is currently being developed at [this repository](https://github.com/MathMan05/JankClient).

## Official host

Jank Client is officially hosted [here](https://jankclient.greysilly7.xyz/)

!!! note

    Jank client supports pointing to your own instance by default, you can read about it [here](https://github.com/MathMan05/JankClient/blob/main/InstanceInfo.md)

!!! warning

    If you want you instance to play nice with other instances of Jank Client using their account switchers, you need to disable CORS, or allow requests from the instances of Jank Client you trust

## Setup/Building

### Dependencies

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org) or [Bun](https://bun.sh/)

In your terminal:

```bash
# Download Jank Client
git clone https://github.com/MathMan05/JankClient.git

# Enter the cloned directory
cd JankClient

# Install dependencies
npm i

# Or if you're on bun
bun i
```
then build the client

```bash
npm run build

#or if you're on bun
bun run build

```

To start the client, run

```bash
npm run start

# If you're using bun
bun run start
```
!!! note

    Jank Client defualts to opening on port 8080, if you want to change the port you'll need to change either the env variable PORT or put the port on the command you run, ex: `npm start ./dist/index.js 43`

If you're wanting to also develop Jank Client, you'll need to start the typescript compiler in watch mode on the base directory of the project.

## Contributing

To contribute:

-   Fork [Jank Client](https://github.com/MathMan05/JankClient)
-   Run the building instructions.
-   Commit & push.
-   Pull request & done!

### What can I contribute?

-   More settings, and general bug fixes, CSS improvements or anything you think needs to be fixed/improved
-   [This](https://github.com/users/MathMan05/projects/1/views/1) is a good list for things that need to be done, though it's incomplete, so if you think something is missing and you want to add it, just do it! MathMan05 is more than willing to answer your questions if you have any!
-   Even if you can't code, there's stuff you can still do! Like [reporting bugs](https://github.com/MathMan05/JankClient/issues), or updating the documentation! Even if you don't help Jank Client directly, if you contributed to the Spacebar server itself, it'd still be a huge help towards Jank Client, especially if you improve/fix op codes 8/14.
-   If you have a Spacebar instance you can put it on Jank Clients [instance list](https://github.com/MathMan05/JankClient/blob/main/InstanceInfo.md), if you don't it'll show up on Jank Client if it's on the [official instance list](https://github.com/spacebarchat/spacebarchat/tree/master/instances), but it's good if you do put it on the list as it'll let Jank Client have some additional information, and your instance will be higher on the list, even if you partially fill it out, Jank Client will merge both listings so no information is lost.
-   Translation work would also be very appreciated. you can do it [here](https://translatewiki.net/wiki/Translating:JankClient) if you like
