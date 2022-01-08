# Client

### ENDPOINT

In order to set your **ENDPOINT** follow these simple steps

- Go to this folder (`%appdata%/yourdiscord_client | Example: %appdata%/discordptb`)

- There is a file called (`settings.json`) the contents of this file are (`They can be different depending on your discord's client settings`) :


```js
{
  "IS_MAXIMIZED": true,
  "IS_MINIMIZED": false,
  "WINDOW_BOUNDS": {
    "x": 335,
    "y": 86,
    "width": 940,
    "height": 600
  },
  "BACKGROUND_COLOR": "#202225"
}
```

- Add this line to ( `settings.json` )

```js
"WEBAPP_ENDPOINT" : "https://your_fosscord_instace_url"
```

- It should look like this after you add the line:

```js
{
  "IS_MAXIMIZED": true,
  "IS_MINIMIZED": false,
  "WINDOW_BOUNDS": {
    "x": 335,
    "y": 86,
    "width": 940,
    "height": 600
  },
  "BACKGROUND_COLOR": "#202225",
  "WEBAPP_ENDPOINT" : "https://your_fosscord_instace_url"
}
```

- After this close your discord client and reopen it and you are all done!
