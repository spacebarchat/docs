If you had followed the [setup guide](index.md), you'll have installed Fosscord using [Git](https://git-scm.com/).
Thus, you can update the server by running `git pull` in the `fosscord-server` directory.

If you had made any changes locally, you may run into merge conflicts,
where the Fosscord team has made changes to the same code you changed. If it's not important to you, you can simply run `git reset --hard HEAD`
_which will delete all your changes_. If you want to keep them, you'll have to go through each conflict and resolve them.

After downloading the new version, go through the setup guide as normal again:

```bash
# Install any new javascript packages
npm i

# Build and generate schema
npm run setup

# Start the server
npm run start
```
