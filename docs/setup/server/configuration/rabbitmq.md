# RabbitMQ

[RabbitMQ](https://www.rabbitmq.com/) is an open source message broker.
Fosscord can be configured to use it for communication between the API server and Gateway server.
RabbitMQ is required to be set up when you run the API and Gateway servers separately (outside of bundle).
Without it, the Gateway server won't know when you send new events for things such as message creation.
In the message create case, you will be able to send messages, but will have to reload the client to view new messages from others.

After you've downloaded and installed RabbitMQ,
edit Fosscord's [config](index.md), set `rabbitmq_host` to `"amqp://guest:guest@host:5672"`

The `guest` RabbitMQ account can only be accessed via localhost, by default.
If you want to run Fosscord over multiple systems,
you'll need to set up [access control](https://www.rabbitmq.com/access-control.html) in RabbitMQ.
