# Voice

## Types of voice connections

Discord supports two types of voice connections:

- UDP voice connections - used by the desktop client and bots
    - Connection initiation: uses raw ip and port to connect over UDP. Does not need ICE, so it is better for clients behind NAT.
    - Transport Encryption: uses AEAD AES256-GCM or AEAD XChaCha20 Poly1305
    - E2E Encryption: uses DAVE
    - Well documented in [Discord developer docs](https://docs.discord.com/developers/topics/voice-connections)
- WebRTC voice connections - used by the browser client
    - Connection initiation: uses SDP to negotiate video/audio and connection information. Uses ICE to find connection candidates.
    - Transport Encryption: uses the Secure Real-time Transport Protocol (SRTP)
    - E2E Encryption: uses DAVE
    - Documented in our [WebRTC docs](/contributing/reverse-engineering/voice/webrtc)

A voice connection is composed of two parts: a WebSocket connection to the Voice Gateway, and a UDP/WebRTC connection to the SFU. Since clients connecting from a browser and those connecting from the Desktop client have to be able to communicate with one another in a voice channel, the Voice Gateway and SFU have to accept both types of connections. The client tells the Voice Gateway which type of voice connection it will be using, and the Voice Gateway is able to negotiate the selected type of connection between the SFU and the client.
## Architecture

Discord is able to support many voice connections by distributing them across regions. When a user signals that they are joining a voice channel, the Discord Gateway sends them the endpoint of the Voice Gateway they should connect to, optimizing for one in the geographical region of the user if their voice channel hasn't started yet, or to the region already hosting the voice channel if it has already been initiated.

Each voice server is composed of a WebSocket Voice Gateway and an SFU. The Voice Gateway is used for signaling between the SFU and the user's client, and controls the SFU. The SFU just routes the media packets to the other users in the voice channel, regardless if they are a WebRTC or UDP connection.

<img src="/assets/images/discord-voice.png">