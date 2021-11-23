# Hosting

Many users are confused on where to host their Fosscord instances. This guide will show you multiple hosting methods, and tell you what works and what does not.

As a rule of thumb: Free hosting methods generally do not work!

## <span style="color:green">Recommended Methods</span>

### Dedicated Servers
A dedicated server is the most classic hosting solution. It is an actual, physical machine that you get completely for yourself. They are more expensive than a typical VPS for example, but give you the most control, down to what exact hardware you want to use.

| Pro | Contra |
|---|---|
| Full Control | More expensive |
| You get the full potential of your server | No dynamic resources |

**Recommended providers:** [ServerBlaze](https://serverblaze.eu/) (Sponsor), [Hetzner](https://hetzner.com)

### Virtual Private Servers
A Virtual Private Server, or VPS for short, is a virtual machine that runs on a larger dedicated server. This makes a VPS cheaper than a dedicated server, as providers can rent out multiple VPS's per server. It also allows you to dynamically change the resources your server is getting, if your provider supports that.

| Pro | Contra |
|---|---|
| Affordable | Virtualized |
| Dynamic Resources | Hardware is shared with others |

**Recommended providers:** [Google Cloud](https://cloud.google.com/), [AWS](https://aws.amazon.com/), [Azure](https://azure.microsoft.com)

### Selfhosting
Depending on your electricity prices, this may be the cheapest option. Just use any machine that you don't actively need as a server, and run it at home! This could be an old PC, a [Raspberry Pi](https://www.raspberrypi.org/), actual server hardware, or technically even a phone. This gives you the most control possible, and also allows you to breathe some life into old devices!

**Note:** Publicly hosting a service from your internet connection reveals your IP address to the public. If you do not want that, you can look into services like [Cloudflare](https://www.cloudflare.com/).

| Pro | Contra |
|---|---|
| The most control | A lot of work |
| Repurpose old devices | Risk of DDOS attacks etc |

## <span style="color:red">Unsupported Methods</span>

- Specialized website hosting services, that don't give you root access to a server
- Online code collaboration sites like [**replit**](https://replit.com) or [**glitch**](https://glitch.com)
