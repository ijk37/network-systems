# 07-04: Remote Access Methods

## Ways to Reach Remote Systems

| Method | Purpose |
|--------|---------|
| **VPN** | Encrypted tunnel into a private network |
| **RDP (3389)** | Graphical Windows desktop |
| **SSH (22)** | Encrypted CLI |
| **VDI / DaaS** | Centrally hosted virtual desktops |
| **Out-of-band mgmt** | Manage devices even if the main network is down |

---

## VPN Types (recap)

- **Site-to-site** — connects whole networks (IPsec).
- **Client-to-site** — individual users into the LAN.
- **Clientless (SSL/TLS)** — browser portal to internal web apps.
- **Full vs. split tunnel** — all traffic vs. only corporate traffic through the VPN.

A **VPN concentrator** terminates many tunnels at the edge.

---

## Out-of-Band Management

Uses a **separate path** (console/serial port, dedicated management interface, or cellular modem) so admins can reach devices **even during a production-network outage** — critical for recovery.

---

## Secure-Access Building Blocks

| Control | Benefit |
|---------|---------|
| **Jump box / bastion host** | Single hardened, audited entry point to internal systems |
| **MFA** | A stolen password alone isn't enough |
| **Least privilege** | Admins get only the access they need |

> Never expose **RDP** directly to the Internet — put it behind a VPN/gateway with MFA.

---

## SD-WAN

**SD-WAN** centrally manages and steers traffic across multiple transports (broadband, LTE, MPLS) by application policy — improving WAN performance and reducing MPLS cost.

---

## Key Idea

> Remote access = **VPN + SSH/RDP + VDI**, hardened with **MFA, jump boxes, and least privilege**. Keep an **out-of-band** path for managing devices during outages.

See also: [[04-05-remote-access]], [[10-04-secure-network-design]]
