# WebRTC Signaling

Since WebRTC is a well-defined open standard and the browser-built in APIs are heavily documented in many online sources, we are not going to focus on the WebRTC browser API and how to use it to connect. Rather, this document will focus on the Discord-specific signaling portion of the connection establishment. For details on using the browser's WebRTC API, you can reference [Mozilla Developer Docs](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection)

## Connecting to voice

The signaling for connecting to voice over WebRTC is very similar to the one used by UDP clients. There's only a few differences, notably the fact that our connection information is exchanged in SDP format.

### 1. Getting our Voice Gateway endpoint and our token:

First send an **Opcode 4 Gateway Voice State Update** to Gateway:

Example:
```json
{
  "op": 4,
  "d": {
    "guild_id": "41771983423143937",
    "channel_id": "127121515262115840",
    "self_mute": false,
    "self_deaf": false
  }
}
```

Gateway will respond with 2 events: **Voice State Update** event and a **Voice Server Update** event

**Voice Server Update** will contain information about the Voice Gateway endpoint that we will connect to, as well as our token for authenticating to it.

```json
{
  "t": "VOICE_SERVER_UPDATE",
  "s": 2,
  "op": 0,
  "d": {
    "token": "my_token",
    "guild_id": "41771983423143937",
    "endpoint": "sweetwater-12345.discord.media:2048"
  }
}
```
### 2. Connecting to Voice Gateway

Now that we have the Voice Gateway endpoint and token, we can connect to it. Start a new WebSocket connection to `wss://endpoint_obtained_from_gateway`

Once connected, send an **Opcode 0 Identify** payload with our server_id, user_id, session_id, and token

```json
{
  "op": 0,
  "d": {
    "server_id": "41771983423143937",
    "user_id": "104694319306248192",
    "session_id": "my_session_id",
    "token": "my_token",
    "video": true,
    "streams": [
      {
        "type": "video",
        "rid": "100",
        "quality": 100
      }
    ],
    "max_dave_protocol_version": 1
  }
}
```

The Voice Gateway will respond with an **Opcode 2 Ready**

```json
{
  "op": 2,
  "d": {
    "ssrc": 1,
    "ip": "127.0.0.1",
    "port": 1234,
    "modes": ["xsalsa20_poly1305", "xsalsa20_poly1305_suffix", "xsalsa20_poly1305_lite"],
    "heartbeat_interval": 1,
    "streams": [
      {
        "type": "video",
        "rid": "100",
        "quality": 100,
        "ssrc": 2,
        "rtx_ssrc": 3,
      }
    ],
  }
}
```

The IP, Port, and SSRC values would be used by UDP clients for connecting and sending media packets, but since we will be using WebRTC to connect, we can disregard everything in this message. Our browser will generate its own SSRC values and the connection information will be exchanged over SDP

### 3. Start SDP negotiation

To start the SDP negotiation, we send **Opcode 1 Select Protocol** that includes our offer SDP

***>>Important: our offer sdp is truncated before being sent to the server. You can send a complete sdp offer, it does not really matter because the client and server will use SDP munging to negotiate any streams. It is important that the codecs array has the correct payload types, as this will be used for the SDP munging by the server***

```json
{
  "op": 1,
  "d": {
    "protocol": "webrtc",
    "data": "our sdp offer here",
    "sdp": "our sdp offer here",
    "codecs": [
      {
        "name": "opus",
        "type": "audio",
        "priority": 1000,
        "payload_type": 111,
      },
      {
        "name": "H264",
        "type": "video",
        "priority": 1000,
        "payload_type": 103,
        "rtx_payload_type": 104
      }
    ],
    "rtc_connection_id": "" // uuid
  }
}
```

Voice Gateway will respond with **Opcode 4 Session Description**

```json
{
    "op": 4,
    "d": {
      "video_codec": "H264",
      "sdp": "sdp answer here",
      "media_session_id": "",
      "audio_codec": "opus",
    },
}
```

The SDP answer will not be a full SDP, instead it is a truncated sdp that contains the necessary information for connection, such as the SFU server host and port, fingerprint, and ICE username + password. Using this basic information we should be able to start our WebRTC connection, but first we have to construct a complete SDP answer using this information so that our client peer accepts it as a valid sdp.

When re-constructing the SDP answer, remember to add `setup=passive` to the answer SDP, since that will tell the client to act in *controlling mode*, initiating the ICE connection to the SFU.

## Signaling track events

After we have successfully connected to the SFU over WebRTC, we are ready to begin sending and receiving media. Since the SFU and WebRTC client will only exchange SDP once (at the start of the connection), both the SFU and client will do have to do some clever tricking to negotiate the changing of the incoming/outgoing streams. The client will have to use something called **SDP munging**, where it alters the SDP manually, even generating its own SDP answer once it receives **Op Code 12 Video**

### Server->Client Op Code 12 Video

An incoming **Op Code 12 Video** event signals that a user in the voice channel has changed their outgoing tracks. It includes the `user_id` so that you can map each track to a user, based on the SSRC.

```json
{
    "audio_ssrc": 1,
    "video_ssrc": 2,
    "rtx_ssrc": 3,
    "user_id": "29229393982",
    "streams": [
      {
        "type": "video",
        "rid": "100",
        "ssrc": 2,
        "active": false,
        "quality": 100,
        "rtx_ssrc": 3,
        "max_bitrate": 2500,
        "max_framerate": 30,
        "max_resolution": { 
          "type": "fixed", "width": 1080, "height": 720 
        }
      }
    ]
}
```

A value > 0 for the SSRC indicates that the user is publishing that track, while a value of 0 for the track indicates the user is not currently publishing that track. If you receive a positive value SSRC for either audio, expect the PeerConnection onTrack event to be fired and to receive a track matching that SSRC. For video, the video_ssrc has to be > 0 AND you have to have at least 1 object wtih `active=true`. 

### Client->Server Op Code 12 Video

An outgoing **Op Code 12 Video** event signals that your client wants to change outgoing tracks. It is similar to the incoming event payload, but it omits the `user_id`, since the server already knows this event is coming from you.

```json
{
    "audio_ssrc": 1,
    "video_ssrc": 2,
    "rtx_ssrc": 3,
    "streams": [
      {
        "type": "video",
        "rid": "100",
        "ssrc": 2,
        "active": false,
        "quality": 100,
        "rtx_ssrc": 3,
        "max_bitrate": 2500,
        "max_framerate": 30,
        "max_resolution": { 
          "type": "fixed", "width": 1080, "height": 720 
        }
      }
    ]
}
```

Similarily, a value > 0 for the SSRC indicates that the user is publishing that track, while a value of 0 for the track indicates the user is not currently publishing that track. If you send a positive value for SSRC for audio, the server will be expecting for you to start sending a track matching that SSRC. For video, the video_ssrc has to be > 0 AND you have to have at least 1 object wtih `active=true`. 

## Other Voice Gateway events

The remaining Voice Gateway events will be exactly the same for WebRTC clients and UDP clients, so you can just reference the [Discord developer docs](https://docs.discord.com/developers/topics/voice-connections). These include Speaking events, Heartbeating, Buffered Resume, and the E2EE DAVE protocol-related message events.