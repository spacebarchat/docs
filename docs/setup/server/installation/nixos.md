# NixOS

!!! warn "The NixOS module is still in development and subject to change."

!!! warn "It is not currently possible to use the NixOS module outside flakes-based setups"

{{ project.name }} comes with an integrated NixOS module, which takes care of a lot of the configuration for you. In particular, the module automatically configures [seperate systemd services](generic/systemd.md) for the API, gateway, and CDN services and configures unix sockets for [message passing](./generic/ipc).

## Installation

Include the following input in your flake:

```nix
spacebar = {
  url = "github:spacebarchat/server";
  inputs.nixpkgs.follows = "nixpkgs";
};
```

And import the spacebar module:

```nix
imports = [
  spacebar.nixosModules.default
];
```

## Configuration

!!! warn "The options `enableAdminApi` and `enableCdnCs` currently have no effect and it is not recommended to use them."

The module expose the option `services.spacebarchat-server`. You will want to set `serverName` to your instance domain. Additionally, you should point `requestSignaturePath` and `cdnSignaturePath` as files containing secrets for signing requests.

The options `{api,gateway,cdn}Endpoint` should be configured for the connection information of the services. This can be done manually or by importing `${spacebar}/nix/modules/default/lib.nix` and using the function `mkEndpoint`. For example:

```nix
apiEndpoint = {
  useSsl = true;
  host = "api.spacebar.mydomain.net";
  localPort = 3001;
  publicPort = 443; # by default, if useSsl = true
}

gatewayEndpoint = (import "${spacebar}/nix/modules/default/lib.nix").mkEndpoint "gateway.spacebar.mydomain.net" 3002 true;
```

Nginx can be configured to act as a reverse proxy for those endpoints via `nginx.enable`.

The configuration file is generated from `settings`. See [Configuration](../configuration/) for detailed documentation.

Additional [environment variables](../configuration/env.md) can be set via `extraEnvironment` if desired. In particular, you will probably want to set up a [PostgreSQL database](generic/database.md) and set `extraEnvironemtn.DATABASE`. You can use

```nix
extraEnvironment.DATABASE = "postgres://?host=/run/postgresql";
```

if postgresql is running on the same host and local auth is enabled (by default on NixOS), or

```nix
extraEnvironment.DATABASE = "postgres://user:password@postgresql.host/spacebar"
```

for more involved setups.

### Example Configuration

A minimal configuration might look as follows:

```nix
spacebarchat-server = {
  enable = true;
  apiEndpoint = {
    useSsl = false;
    host = "api.sb.localhost";
    localPort = 3001;
    publicPort = 8080;
  };
  gatewayEndpoint = {
    useSsl = false;
    host = "gw.sb.localhost";
    localPort = 3002;
    publicPort = 8080;
  };
  cdnEndpoint = {
    useSsl = false;
    host = "cdn.sb.localhost";
    localPort = 3003;
    publicPort = 8080;
  };
  nginx.enable = true;
  serverName = "sb.localhost";
};
```

A more complicated setup can be found [here](https://cgit.rory.gay/Rory-Open-Architecture.git/tree/host/Rory-ovh/services/containers/spacebar/services/spacebar.nix)