---
weight: -100
---

# Installation

{{ project.name }} supports the following installation methods:

- [Bare metal](baremetal.md) as separate npm modules. Recommended for production deployments
- [NixOS](nixos.md) as a "ready-to-go" solution - used in production to host the spacebar.chat instance
- [Docker](docker.md)

Alternatively, if you're looking to do a quick local test:
- [Bare Metal (single-process)](bundle.md) as a single-process npm bundle. Not recommended except for evaluation purposes.
- With nix: `nix run github:spacebarchat/server#nixosConfigurations.testVm.config.system.build.vm -vL` - may enable unstable options