# Home

!!! note "Interested in contributing? We'd love to have you on board! [Click here](contributing)"

!!! tip "Want to skip to the server installation guide? [Click here](setup/server)"

!!! question "Have a question? It might be in [here](faq.md)"

## What is {{ project.name }}?

{{ project.name }} is a free open source reimplementation and extension
of Discord's client-server API, with the goal of complete feature parity with discord.com,
all while adding some additional goodies, security, privacy, and configuration options.

{{ project.name }} allows you to host a complete, discord.com-compatible chat service
with complete control over its content, usage, security, configuration, and featureset.
Being discord.com-compatible will allow all existing clients, bots, and applications written for
discord.com to be used on any {{ project.name }} instance, which we believe will be immensely useful
for any transition process between services.

As {{ project.name }} is an entirely separate service from discord.com, a {{ project.name }} server by itself **cannot**
access private data controlled by discord.com. You **cannot** use a {{ project.name }} server to chat with your friends on discord.com.
You also **cannot** use a {{ project.name }} server to grant premium ("Nitro") features to a discord.com account (although you can grant these to a {{ project.name }} account).

Our goal is to achieve complete feature parity with discord.com, as well as
implement additional security, privacy, and other useful features serverside.
In addition to our server software, we aim to create {{ project.name }}-aware clients that can be used to connect
to multiple {{ project.name }}-compatible instances with rich theming and plugin support.

## Support

For any kind of support regarding {{ project.name }}, feel free to ask questions in our [discord.com guild](https://discord.gg/Ms5Ev7S6bF)
or our [official {{ project.name }} instance](https://api.old.server.{{ project.domain }}).

For bug reporting and feature requests please create an [issue]({{ repositories.base_url }}/{{ repositories.server }}/issues/new/choose) on Github.
