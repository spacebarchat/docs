# Environment Variables

Some configuration is done via environment variables. If you can't find what you're looking for here, try [database configuration](configuration.md)

## Editing

In order to edit environment variables, just create a file called ``.env`` in ``bundle/``. In there, you can declare variables in the format ``VARIABLE=value``.

If you want to globally assign variables, use `export` on Linux or `set` on Windows.
For example: `export THREADS=8`.

Note that this only sets variables for the current shell. To make them run by default on opening any shell, add your commands to ``/etc/profile`` on Linux or use ``setx`` instead of ``set`` on Windows.

## Options

This list may be incomplete.

| Name | Description |
| --- | --- |
| THREADS | Amount of threads/workers to use |
| DATABASE | Connection URL of the database |

## Example

This list may be incomplete.

| Name | Description |
| --- | --- |
| WORK_DIR | /srv/fosscord-server |
| DEV_MODE | 0 |
| THREADS | 8 |
| DATABASE | db://username:password@db/dbname |
| STORAGE_LOCATION | /srv/fosscord-server/data/files/ |
| HTTP_PORT | 3001 |
| WS_PORT | 3002 |
| CDN_PORT | 3003 |
| RTC_PORT | 3004 |
| ADMIN_PORT | 3005 |
