# Frequently Asked Questions

??? info "Voice/Video when???"

    Currently there is no voice or video support in any Fosscord instance.
    This is a very difficult feature to get working, especially given that
    we must implement it the exact same way as Discord.com for client compatibility.
    [We would be incredibly thankful for any assistance.](/contributing)

??? info "Free Nitro???"

    Please do not use Discord trademarks to refer to anything regarding Fosscord.
    As an instance owner, you can grant yourself or others *premium* features which may be used to determine your abilities
    *client-side*. However, Fosscord-server currently does not have any distinction between premium and free users.
    All users can access all features, given they have the [right](security/rights.md) to do so.

    You cannot give yourself premium features on Discord.com using a Fosscord instance.

??? info "Can I log in with my Discord account?"

    No. Fosscord and Discord are entirely separate services, with their own separate databases
    and authentication. Fosscord cannot access any private data from Discord.com.
    As always, you should not provide login credentials for Discord.com, or any other service,
    to others.

??? info "Does Fosscord use the same servers as Discord?"

    No. Discord servers, as in the bare-metal running the service, are completely inaccessible
    to people, outside of course the Discord.com service provided. It is impossible for us to use their
    infrastructure. Fosscord is hosted entirely by you, the instance owner (or whoever is the owner of your instance).

    If you mean Discord 'server' as in a *guild*, also no. Fosscord is not a proxy for
    Discord guilds. Fosscord does not create Discord.com accounts, or ask for your own, at any time
    (outside of a Discord.com account connection for your Fosscord user, which is still not us asking for your credentials).
    If Fosscord was to try this, Discord's automated spam filters would surely block your instance.

    Lastly, you can simply view [our codebase](https://github.com/fosscord/fosscord-server).
    A simple proxy would not need to be this complex or large.
    We implement the entire Discord.com API, Gateway, among others.
    None of this would be necessary if we were simply abusing Discord.com.

??? info "Do you use Discord.com code?"

    Absolutely not. If a potential contributor makes any indication of being a Discord employee,
    or to have access to leaked Discord.com code, we take measures in line with our [Code of Conduct](/contributing/conduct.md)
    to ensure the Fosscord codebase is free of any proprietary code. We want absolutely nothing to do with it.

??? info "What about the test client? That's just the Discord.com one!"

    Yes, this is true. However, this is purely for testing and development purposes.
    Fosscord is first and foremost a *backend* server implementation, and we simply use Discord.com's client
    to achieve our goals. Efforts are being made to move away from this with our own client, but as you may have guessed,
    building a Discord-compatible client is difficult.

    You can read more about the test client [here](Test%20Client/index.md)

??? info "Is this illegal?"

    The person writing this does not believe it to be illegal, no.
    The only aspect of Fosscord that is not entirely written by us is the test client which we simply proxy from Discord.com,
    and we take measures to show that the client is purely for development and research purposes.

??? info "Why are you doing this, anyway?"

    Personally, it's because it's fun. But if you ask 'Officially':

    1. We love free, open source software.
    2. There are many existing bots, applications, users, features, and ideas surrounding Discord.com.
    3. Fosscord allows these users and developers to maintain a familiar ecosystem with minimal friction.
    4. Reimplementing allows us to extend the Discord protocol in ways Discord.com may not deem feasible, economical, whateverical.
    5. This includes privacy features, such as end to end encryption for example.
    6. The reverse engineering effort by our team may be useful to outside developers looking to understand how similar services work.
    7. The Discord protocol despite it's API complexity is quite simple and linear, which makes this project more feasible.

??? info "Editing the database is annoying, is there a graphical interface for this?"

    Currently no, there is no graphical interface for managing your Fosscord instance.
    An admin dashboard is planned, but we currently have higher priorities right now.

??? info "When will this feature be available?"

    We do not provide ETAs. Users tend to take them as deadlines, and for a small team of <5 maintainers
    who do not get payment for their work, this is unreasonable.

??? info "It's pretty funny how you have a Discord.com guild for support."

    We know. Also that's not a question.
