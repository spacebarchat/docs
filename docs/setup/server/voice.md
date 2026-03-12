# Voice

**Currently only WebRTC connections are supported. UDP connections will be dropped** 

Voice support is left as an optional dependency in {{ project.name }}, which means that it is disabled by default unless you decide to install additional dependencies. {{ project.name }} is designed so that anyone can develop a voice package compatible with the project as long as the implementation adheres to the [WebRTC types]({{ repositories.base_url }}/{{ repositories.voice_types }}). Currently there are three sample implementations which can be used:

- (**Recommended**) [Pion Implementation]({{ repositories.base_url }}/{{repositories.voice_pion }}) - Golang SFU which is bridged via IPC to communicate with your voice gateway
    - ✅ Video
    - ✅ Audio
    - ✅ Guild + DM voice
    - ✅ Go Live streams
- [Medooze Implementation]({{ repositories.base_url }}/{{ repositories.voice_medooze }}) - SFU written in C++ with Node.js native bindings
    - ✅ Video
    - ✅ Audio
    - ✅ Guild + DM voice
    - ✅ Go Live streams
- [Mediasoup Implementation]({{ repositories.base_url }}/{{ repositories.voice_mediasoup }}) - From the Mediasoup FAQ: "mediasoup launches a set of C++ child processes (media workers) and communicates with them by means of inter-process communication"
    - ❌ Video
    - ✅ Audio
    - ✅ Guild + DM voice
    - ❌ Go Live streams (no video, only audio)

## Configuring Voice Gateway

By default the Voice Gateway is set to run on port 3004. You can change this default configuration by setting your desired port it in your `.env`:

```.env
WRTC_WS_PORT=3004
```

You also have to configure the Voice Gateway endpoint in your database. In table `config` you can set the default region endpoint to your Voice Gateway domain. It is set to `localhost:3004` by default:

```
"regions_available_0_endpoint":   "voice.example.com"
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

### Pion implementation installation

1. First install the package in your {{ project.name }} server:

    ```bash
    npm install {{ npm_packages.voice_pion }} --no-save
    ```

2. Configure the package name in your {{ project.name }} server `.env`:

    ```.env
    WRTC_LIBRARY={{ npm_packages.voice_pion }}
    ```

3. Download the Golang SFU from [Pion Repository]({{ repositories.base_url }}/{{repositories.voice_pion }})

4. Make sure you have Golang installed, then start your SFU:
    ```bash
    cd pion-sfu
    go run . -port <udp port> -ip <your server public ip>
    ```
The ip should be a public IP that can be accessed from the internet if this is a production instance. It will be the address that will get sent to the client during the WebRTC connection negotiation

### Medooze implementation installation

1. First install the package in your {{ project.name }} server:

    ```bash
    npm install {{ npm_packages.voice_medooze }} --no-save
    ```

2. Configure the package name in your {{ project.name }} server `.env`:

    ```.env
    WRTC_LIBRARY={{ npm_packages.voice_medooze }}
    ```

3. Configure the public IP for your WebRTC server in your {{ project.name }} server `.env`. This should be a public IP that can be accessed from the internet if this is a production instance. It will be the address that will get sent to the client during the WebRTC connection negotiation:

    ```.env
    WRTC_PUBLIC_IP=127.0.0.1
    ```

### Mediasoup implementation installation

1. First install the package in your {{ project.name }} server:

    ```bash
    npm install {{ npm_packages.voice_mediasoup }} --no-save
    ```

2. Configure the package name in your {{ project.name }} server `.env`:

    ```.env
    WRTC_LIBRARY={{ npm_packages.voice_mediasoup }}
    ```

3. Configure the public IP for your WebRTC server in your {{ project.name }} server `.env`. This should be a public IP that can be accessed from the internet if this is a production instance. It will be the address that will get sent to the client during the WebRTC connection negotiation:

    ```.env
    WRTC_PUBLIC_IP=127.0.0.1
    ```

## How to get your public ip

You can get your server's public ip by executing the following command in your server's command line: 
```bash
curl https://checkip.amazonaws.com
```