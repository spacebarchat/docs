# Environment Variables

Some configuration is done via environment variables. If you can't find what you're looking for here, try [database configuration](configuration.md)

## Editing

In order to edit environment variables, just create a file called ``.env`` in ``bundle/``. In there, you can declare variables in the format ``VARIABLE=value``.

If you want to globally assign variables, use `export` on Linux or `set` on Windows.
For example: `export THREADS=8`.
Note that this will reset on every restart of your operating system, so you may want to make it run on boot.

## Options

This list may be incomplete.

| Name | Description |
| --- | --- |
| THREADS | Amount of threads/workers to use |
| DATABASE | Connection URL of the database |
