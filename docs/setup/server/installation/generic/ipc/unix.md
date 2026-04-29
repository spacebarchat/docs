# Unix sockets

Spacebar is capable of using Unix sockets for message passing. This is quite efficient, as it does not have the overhead
of using TCP/IP sockets, like RabbitMQ would.

This however relies on all parts of the server being on the same machine, as unix sockets are solely authenticated via
filesystem permissions.

## Configuration

You can configure the spacebar server to use Unix sockets by setting these environment variables:

```bash
EVENT_TRANSMISSION=unix
EVENT_SOCKET_PATH=/path/to/socket/directory #eg. /var/run/spacebar
```

Any socket in this directory will receive all traffic.

## Developer note: message format

Unix socket replication in Spacebar uses a very simple message format:
```
---------------------------------------------
| length (4 bytes) | JSON data (n bytes...) |
---------------------------------------------
```

Length is sent as a 32-bit network order (big endian) number, while JSON data is encoded as UTF-8.

One read operation from the socket connection may not contain a complete payload, it is up to the recipient to buffer
data as necessary, in order to have a full payload to decode.

Message sending is also relatively simple: connect to all sockets in the directory, copy the message to each of them.
It is up to the sender to handle errors when connecting or writing data.