# NPM scripts

These are the most relevant NPM scripts, for a complete listing, see package.json.
Can be executed using `npm run {script name}`

## `sync:db`

Syncronise the database schema between {{ project.name }} source code and your database.
**May incur data loss**. You do not normally need to run this script, as {{ project.name }}-server will perform it when necessary.

## `build:tsgo`

Builds the {{ project.name }} source code

## `start`

Starts the bundled server. API, Gateway, and CDN run under the same process when using bundle, using the same port.
This should not be used in production!

## `start:api`, `start:gateway`, `start:cdn`, `start:webrtc`

Starts the respective component.

## `generate:schema`, `generate:openapi`

Recreates the `{{ project.name.lower() }}-server/assets/schema.json`, `{{ project.name.lower() }}-server/assets/openapi.json` files respectively,
the former of which is used for API and Gateway request validation.
