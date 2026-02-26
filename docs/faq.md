# Frequently Asked Questions

??? info "Is {{ project.name }} still in development? Production Ready?"

    Yes, {{ project.name }} is still in development. Our unpaid team of volunteers is very small though, so progress is very dependent on our motivation
    and outside life.

    The [{{ project.name }} server]({{ repositories.base_url }}/{{ repositories.server }}) program has been in development since at least 28/11/2020,
	and has most core features implemented. API compatibility is reasonable, although not quite perfect; some third party clients may not function,
    although the official Discord.com client which we test against functions correctly for the most part.

    The big Discord.com features currently left unimplemented or with partial implementations are:

    * Voice/Video support (WebRTC protocol support implemented, but lacking UDP protocol implementation)
    * Voice activities
    * OAuth2 scopes and other applications (Bot applications work by are left unscoped)
    * Message threads
    * Pomelo (new username system without discriminators)
    * Auto moderation

    For a more complete overview of what is left unimplemented, please refer to [the missing routes viewer](./contributing/server/missingroute.md).

    The [{{ project.name }} client]({{ repositories.base_url }}/{{ repositories.client }}) however is very premature, starting development around 1/03/2023.
    It is not ready production use or as your daily driver. It lacks many core features and is not recommended to be used.
	Please setup a third party client, or help contribute to our codebase! Any and all help is appreciated.

??? info "How do you use the Client?"

    As described in [Clients](/setup/clients), the official client is not ready yet. You are free to use
    a {{ project.name }} compatible client to connect, but no support will be provided.

??? info "Voice/Video when?"

    Currently there is experimental voice/video WebRTC support in {{ project.name }}. UDP connections are not currently supported.
    
    This is a very difficult feature to get working, especially given that
    we must implement it the exact same way as Discord.com for client compatibility, so if you find any bugs please open an issue in [{{ project.name }} server]({{ repositories.base_url }}/{{ repositories.server }}).
    
    [We would also be incredibly thankful for any assistance.](/contributing)

??? info "Free Nitro?"

    Please do not use Discord trademarks to refer to anything regarding {{ project.name }}.
    As an instance owner, you can grant yourself or others *premium* features which may be used to determine your abilities
    *client-side*. However, {{ project.name }}-server currently does not have any distinction between premium and free users.
    All users can access all features, given they have the [rights](setup/server/security/rights.md) to do so.

    You cannot give yourself premium features on Discord.com using a {{ project.name }} instance.

??? info "How do I boost my guild? Or, how do I buy premium?"

    You cannot buy premium features through {{ project.name }} as {{ project.name }} does not support any payment backend.

    Additionally, {{ project.name }} does not currently have any distinction between premium and free users or guilds.
    All users and guilds have access to all features server-side.

    In the case of users, you may run into issues with the client preventing you from using certain features
    if the user's `premium_type` or `premium` values are not set correctly. By default, {{ project.name }} will do this for you, however.

    In the case of guilds, you may run into issues with uploading animated icons or banners, etc.
    If so, simply give the guild the [features](setup/server/configuration/guildFeatures.md) you require.
    You can set them to be given to all guilds by default using the [config](setup/server/configuration/index.md) `guild_defaultFeatures` array.

??? info "Can I log in with my Discord account?"

    No. {{ project.name }} and Discord are entirely separate services, with their own separate databases
    and authentication. {{ project.name }} cannot access any private data from Discord.com.
    As always, you should not provide login credentials for Discord.com, or any other service,
    to others.

??? info "Does {{ project.name }} use the same servers as Discord?"

    No. Discord servers, as in the bare-metal running the service, are completely inaccessible
    to people, outside of course the Discord.com service provided. It is impossible for us to use their
    infrastructure. {{ project.name }} instances are hosted entirely by their owner(s).

    If you mean Discord 'server' as in a *guild*, also no. {{ project.name }} is not a proxy for
    Discord guilds. {{ project.name }} does not create Discord.com accounts or ask for your own at any time
    (outside of OAuth features provided by the instance such as account connections or 'login with' buttons)
    If {{ project.name }} was to try this, Discord's automated spam filters would surely block your instance,
    and ban any offending accounts.

    Lastly, you can simply view [our codebase]({{ repositories.base_url }}/{{ repositories.server }}).
    A simple proxy would not need to be this complex or large.
    We implement the entire Discord.com API, Gateway, among others.
    None of this would be necessary if we were simply abusing Discord.com.

??? info "Do you use Discord.com code?"

    Absolutely not. If a potential contributor makes any indication of being a Discord employee,
    or to have access to leaked Discord.com code, we take measures in line with our [Code of Conduct](/contributing/conduct.md)
    to ensure the {{ project.name }} codebase is free of any proprietary code. We want absolutely nothing to do with it.

??? info "Is this illegal?"

    The {{ project.name }} maintainers do not believe it to be, no. See: [Oracle v. Google](https://en.wikipedia.org/wiki/Google_LLC_v._Oracle_America,_Inc.).

??? info "Why are you doing this, anyway?"

    1. We love free, open source software.
    2. There are many existing bots, applications, users, features, and ideas surrounding Discord.com.
    3. {{ project.name }} allows these users and developers to maintain a familiar ecosystem with minimal friction.
    4. Reimplementing allows us to extend the Discord protocol in ways Discord.com may not deem feasible, economical, whateverical.
    5. This includes privacy features, such as end to end encryption for example.
    6. The reverse engineering effort by our team may be useful to outside developers looking to understand how similar services work.
    7. The Discord protocol, despite its API complexity, is quite simple and linear. No complex conflict resolution like Matrix, for example.

??? info "Editing the database is annoying, is there a graphical interface for this?"

    Currently no, there is no graphical interface for managing your {{ project.name }} instance.
    An admin dashboard is planned, but we currently have higher priorities.

??? info "When will this feature be available?"

    We do not provide ETAs. Users tend to take them as deadlines, and for a small team of <5 maintainers
    who do not get payment for their work, this is unreasonable.

??? info "It's pretty funny how you have a Discord.com guild for support."

    We know. Also that's not a question.
