# Fermo

!!! warning "Fermo is under heavy development but may be used as it's still rather complete"

*Fermo is a fork of [Fermi](https://github.com/MathMan05/Fermi), which formerly used to target Spacebar.*

Fermo is currently being developed at [this repository](https://github.com/oh64/Fermo).

## Official host

Fermo is officially hosted [here](https://fermo.sovr.top/)

!!! note

    Fermo supports pointing to your own instance by default, you can read about it [here](https://github.com/oh64/Fermo/blob/main/InstanceInfo.md)

!!! warning

    If you want you instance to play nice with other instances of Fermo using their account switchers, you need to disable CORS, or allow requests from the instances of Fermo you trust

## Setup/Building

### Dependencies

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org)

In your terminal:

```bash
# Download Fermo
git clone https://github.com/oh64/Fermo.git

# Enter the cloned directory
cd Fermo

# Install dependencies
npm i
```
then build Fermo

```bash
npm run build

```

To start Fermo, run

```bash
npm run start
```
!!! note

    Fermo defaults to opening on port 8080, if you want to change the port you'll need to change either the env variable PORT or put the port on the command you run, ex: `npm start ./dist/index.js 43`

!!! warning

    ***DO NOT*** edit the default port in index.ts, use `Environment=PORT=1234` in your systemd service file instead!

If you're wanting to also develop Fermo, you'll need to start the typescript compiler in watch mode on the base directory of the project.

## Contributing

To contribute:

-   Fork [Fermo](https://github.com/oh64/Fermo)
-   Run the building instructions.
-   Commit & push.
-   Pull request & done!

### What can I contribute?

-   More settings, and general bug fixes, CSS improvements or anything you think needs to be fixed/improved
-   Even if you can't code, there's stuff you can still do! Like [reporting bugs](https://github.com/oh64/Fermo/issues), or updating the documentation! Even if you don't help Fermo directly, if you contributed to the Spacebar server itself, it'd still be a huge help towards Fermo, especially if you improve/fix op codes 8/14.
-   If you have a Spacebar instance you can put it on Fermos [instance list](https://github.com/oh64/Fermo/blob/main/InstanceInfo.md), if you don't it'll show up on Fermo if it's on the [official instance list](https://github.com/spacebarchat/spacebarchat/tree/master/instances), but it's good if you do put it on the list as it'll let Fermo have some additional information, and your instance will be higher on the list, even if you partially fill it out, Fermo will merge both listings so no information is lost.
