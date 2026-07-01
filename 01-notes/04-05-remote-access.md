# 04-05: Remote Access

## Methods to Reach Systems Remotely

| Method | Port | Use |
|--------|------|-----|
| **SSH** | 22 | Encrypted CLI (Linux/network devices) |
| **RDP** | 3389 | Graphical Windows desktop |
| **VPN** | varies | Encrypted tunnel into a private network |
| **Telnet** | 23 | Legacy CLI — **insecure, avoid** |
| **Out-of-band** | console/serial | Manage devices even if the network is down |

---

## VPNs

A **VPN (Virtual Private Network)** creates an **encrypted tunnel** over an untrusted network (the Internet).

| VPN type | Connects |
|----------|----------|
| **Site-to-site** | Two networks (branch ↔ HQ), usually via IPsec on firewalls/routers |
| **Client-to-site (remote-access)** | An individual user's device into the corporate LAN |
| **Clientless (SSL/TLS)** | Browser-based access to internal web apps via an HTTPS portal |

### Tunnel scope
- **Full tunnel** — *all* client traffic goes through the VPN (more secure, more load).
- **Split tunnel** — only corporate-bound traffic uses the VPN.

A **VPN concentrator** terminates and manages many tunnels at the edge.

---

## Securing Remote Access

- Never expose **RDP (3389)** directly to the Internet — it's a top ransomware vector. Put it behind a **VPN/gateway**, require **MFA**, and restrict source IPs.
- Use **MFA** on all remote-access services.
- Use a **jump box / bastion host** as a single, hardened, audited entry point.

---

## Key Idea

> Remote access = **SSH** (CLI), **RDP** (GUI), **VPN** (tunnel). Always protect it with **MFA**, restrict exposure, and use **out-of-band** management for resilience.

See also: [[04-04-secure-protocols]], [[07-04-remote-access-methods]]
