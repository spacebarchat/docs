# Web Fermi

!!! warning "Fermi is under heavy development but may be used as it's still rather complete"

Fermi is currently being developed at [this repository](https://github.com/MathMan05/Fermi).

## Official host

Fermi is officially hosted [here](https://fermi.chat/)

!!! note

    Fermi supports pointing to your own instance by default, you can read about it [here](https://github.com/MathMan05/Fermi/blob/main/InstanceInfo.md)

!!! warning

    If you want you instance to play nice with other instances of Fermi using their account switchers, you need to disable CORS, or allow requests from the instances of Fermi you trust

## Setup/Building

### Dependencies

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org) or [Bun](https://bun.sh/)

In your terminal:

```bash
# Download Fermi
git clone https://github.com/MathMan05/Fermi.git

# Enter the cloned directory
cd Fermi

# Install dependencies
npm i

# Or if you're on bun
bun i
```
then build Fermi

```bash
npm run build

#or if you're on bun
bun run build

```

To start Fermi, run

```bash
npm run start

# If you're using bun
bun run start
```
!!! note

    Fermi defualts to opening on port 8080, if you want to change the port you'll need to change either the env variable PORT or put the port on the command you run, ex: `npm start ./dist/index.js 43`. This port can be changed in scr/index.ts line 193

If you're wanting to also develop Fermi, you'll need to start the typescript compiler in watch mode on the base directory of the project.

## Contributing

To contribute:

-   Fork [Fermi](https://github.com/MathMan05/Fermi)
-   Run the building instructions.
-   Commit & push.
-   Pull request & done!

### What can I contribute?

-   More settings, and general bug fixes, CSS improvements or anything you think needs to be fixed/improved
-   [This](https://github.com/users/MathMan05/projects/1/views/1) is a good list for things that need to be done, though it's incomplete, so if you think something is missing and you want to add it, just do it! MathMan05 is more than willing to answer your questions if you have any!
-   Even if you can't code, there's stuff you can still do! Like [reporting bugs](https://github.com/MathMan05/Fermi/issues), or updating the documentation! Even if you don't help Fermi directly, if you contributed to the Spacebar server itself, it'd still be a huge help towards Fermi, especially if you improve/fix op codes 8/14.
-   If you have a Spacebar instance you can put it on Fermis [instance list](https://github.com/MathMan05/Fermi/blob/main/InstanceInfo.md), if you don't it'll show up on Fermi if it's on the [official instance list](https://github.com/spacebarchat/spacebarchat/tree/master/instances), but it's good if you do put it on the list as it'll let Fermi have some additional information, and your instance will be higher on the list, even if you partially fill it out, Fermi will merge both listings so no information is lost.
-   Translation work would also be very appreciated. you can do it [here](https://translatewiki.net/wiki/Translating:Fermi) if you like
