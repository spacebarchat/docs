# NPM scripts

Can be executed using `npm run {script name}`

## `setup`

Shorthand for `build` and `generate:schema`

## `sync:db`

Syncronise the database schema between {{ project.name }} source code and your database.
**May incur data loss**. You do not normally need to run this script, as {{ project.name }}-server will perform it when necessary.

## `build`

Builds the {{ project.name }} source code

## `watch`

Starts the compilation of the {{ project.name }} source code in watch mode, automatically recompiling when changes are detected.

## `start`

Starts the bundled server. API, Gateway, and CDN run under the same process when using bundle, using the same port.

## `start:api`, `start:gateway`, `start:cdn`

Starts the respective component.

## `generate:rights`

Generates a Discord.com-like rights value for use as a default right.
Also displays the 'all rights' value, which `1` is a placeholder for.

## `generate:schema`

Recreates the `{{ project.name.lower() }}-server/assets/schema.json` file, which is used for API and Gateway request validation.
