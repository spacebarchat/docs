# Selective Forwarding Unit (SFU) Server 

## WebRTC implementation details

The media SFU must be an ICE-lite server, which means that the client is the *controlling agent* which initiates the ICE connection to the SFU, which is in *controlled mode*. This can be denoted to the client by giving it a `remoteDescription` with the line `setup:passive` and optionally `a=ice-lite` in the SDP. ICE-lite servers make ICE connection simpler and more flexible for clients behind NAT, since the SFU's sole connection candidate will always be a public IP with an open port. Once the client begins connecting over ICE, the client will send a STUN Binding request to the SFU, which is used for the connectivity check. The SFU will reply with the STUN Binding response which will contain the client's translated transport address on the public side of any NATs between the client and its peer on the SFU, making it easier for clients behind NAT to connect.

The SFU and client will only exchange SDP once, at the beginning of the connection. A complete SDP will not be sent over the Voice Gateway, instead only the necessary connection details are exchanged. The client first sends an offer containing the client's fingerprint, ICE username + password, and separate from the SDP it will also include a list of supported codecs and their payload ids. The SFU server then replies with the answer, which will include the SFU host and port, fingerprint, and ICE username + password. Both server and client have to reconstruct the original offer/answer SDP from this fragment before setting it to their peer's `remoteDescription`. After connecting, the Discord client will use this single peerConnection for both receiving and sending streams. 

In summary, in order for the SFU server to be completely compatible with a Discord client, the server:

- Must support using a single peer connection for sending and receiving media.
- Must support server-side ICE-Lite, with the Discord client being the controlling agent in the ICE connection. 
- Must support the client deciding the codec payload ids (dynamic payload ids). 

## UDP implementation details

The UDP protocol is a stripped-down version of the WebRTC protocol, with no ICE, no DTLS, and with its own transport encryption to replace SRTP. The SFU's UDP endpoint is sent to the client in the **Opcode 2 Ready** message, then the UDP client sends a pseudo-STUN Binding Request to this endpoint, which is just a packet with the following format:
```
 ---------------------------------------------------------------------------
| 2 byte (0x1) | 2 byte msg length (70) | 4 byte audio SSRC | 66 byte padding |
 ---------------------------------------------------------------------------
```

The server then replies with a pseudo-STUN Binding Response, which contains the public IP address of the UDP client, and its port which was used in the UDP connection that sent the original request:
```
 ------------------------------------------------------------------------------------------------------------------------------------------
| 2 byte (0x2) | 2 byte msg length (70) | 4 byte audio SSRC | 64 byte Null-terminated string containing IP address | 2 byte containing port |
 -------------------------------------------------------------------------------------------------------------------------------------------
```

The client then sends this IP and port value to the Voice Gateway in the **Opcode 1 Select Protocol** message, which also specifies the transport encryption used, and the connecting protocol to be `udp`. 

The UDP protocol still uses regular RTP packets for sending and receiving media, but with its own custom transport encryption. When the UDP client sends media to the SFU, the RTP packets would then just be decrypted then forwarded to the other UDP/WebRTC clients, and similarly, the RTP packets coming from other WebRTC/UDP clients would be encrypted and forwarded to our UDP client.

Luckily the UDP protocol is heavily documented in the [Discord Developer Docs](https://docs.discord.com/developers/topics/voice-connections#transport-encryption-and-sending-voice)