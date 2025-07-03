# Voice

**Currently only WebRTC connections are supported. UDP connections will be dropped** 

Voice support is left as an optional dependency in {{ project.name }}, which means that it is disabled by default unless you decide to install additional dependencies. {{ project.name }} is designed so that anyone can develop a voice package compatible with the project as long as the implementation adheres to the [WebRTC types]({{ repositories.base_url }}/{{ repositories.voice_types }}). Currently there are two sample implementations which can be used:

- [Medooze Implementation]({{ repositories.base_url }}/{{ repositories.voice_medooze }}) - Supports video&audio for guild voice, DM voice, as well as GoLive streams. Only supports Linux & MacOS environments.
- [Mediasoup Implementation]({{ repositories.base_url }}/{{ repositories.voice_mediasoup }}) - Supports audio only for guild voice, DM voice, and GoLive streams. Supports Windows, Linux, and MacOS environments

## Configuring Voice Gateway

By default the Voice Gateway is set to run on port 3004. You can change this default configuration by setting your desired port it in your `.env`:

```.env
WRTC_WS_PORT=3004
```

You also have to configure the Voice Gateway endpoint in your database. In table `config` you can set the default region endpoint to your Voice Gateway domain. It is set to `localhost:3004` by default:

```
"regions_available_0_endpoint":   "localhost:3004"
```

### Nginx reverse proxy for Voice Gateway

You will likely want to set your voice gateway behind a reverse proxy. Here's a sample Nginx configuration:

```nginx
server {
 # Change server_name
    server_name voice.example.com;
    listen 80;

    location / {
   # Only change this if Nginx and {{ project.name }} are not on the same machine.
            proxy_pass http://127.0.0.1:3004;
            proxy_set_header Host $host;
            proxy_pass_request_headers      on;
            add_header Last-Modified $date_gmt;
            add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
            proxy_set_header  X-Real-IP $remote_addr;
            proxy_set_header  X-Forwarded-Proto https;
            proxy_set_header  X-Forwarded-For $remote_addr;
            proxy_set_header  X-Forwarded-Host $remote_addr;
            proxy_no_cache 1;
            proxy_cache_bypass 1;

   # This is important. It allows Websocket connections through NGINX.
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
    }
}
```

## Configuring Voice Library

You can install one of the provided sample implementations or you can choose to install another third-party one. Installation process will be the same regardless:

### Medooze implementation installation

1. First install the package in your {{ project.name }} server:

    ```
    npm install {{ npm_packages.voice_medooze }} --no-save
    ```

2. Configure the package name in your {{ project.name }} server `.env`:

    ```
    WRTC_LIBRARY={{ npm_packages.voice_medooze }}
    ```

3. Configure the public IP for your WebRTC server in your {{ project.name }} server `.env`. This should be a public IP that can be accessed from the internet if this is a production instance. It will be the address that will get sent to the client during the WebRTC connection negotiation:

    ```
    WRTC_PUBLIC_IP=127.0.0.1
    ```

### Mediasoup implementation installation

The process is exactly the same as the Medooze installation, just replace the package name in the commands with ` {{ npm_packages.voice_mediasoup }} `