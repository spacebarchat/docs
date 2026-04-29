---
title: Message passing
---

# Message passing

Spacebar generally prefers to be ran as separate processes. This invokes the need of a method to pass messages between
these processes. In order to facilitate this, Spacebar supports multiple ways to achieve this:

- [Unix sockets](./unix) - Fast, simple, self-contained - only works if all services are on the same machine.
- [RabbitMQ](./rabbitmq) - Network based message replication, requires extra setup.