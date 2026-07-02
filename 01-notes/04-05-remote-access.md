# &#128216; 04-05: Remote Access

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_04-Network_Protocols-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 04: Network Protocols">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/04-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128204; Methods to Reach Systems Remotely

| Method | Port | Use |
|--------|------|-----|
| **SSH** | 22 | Encrypted CLI (Linux/network devices) |
| **RDP** | 3389 | Graphical Windows desktop |
| **VPN** | varies | Encrypted tunnel into a private network |
| **Telnet** | 23 | Legacy CLI — **insecure, avoid** |
| **Out-of-band** | console/serial | Manage devices even if the network is down |

---

## &#128204; VPNs

A **VPN (Virtual Private Network)** creates an **encrypted tunnel** over an untrusted network (the Internet).

| VPN type | Connects |
|----------|----------|
| **Site-to-site** | Two networks (branch ↔ HQ), usually via IPsec on firewalls/routers |
| **Client-to-site (remote-access)** | An individual user's device into the corporate LAN |
| **Clientless (SSL/TLS)** | Browser-based access to internal web apps via an HTTPS portal |

### &#128313; Tunnel scope
- **Full tunnel** — *all* client traffic goes through the VPN (more secure, more load).
- **Split tunnel** — only corporate-bound traffic uses the VPN.

A **VPN concentrator** terminates and manages many tunnels at the edge.

---

## &#128204; Securing Remote Access

- Never expose **RDP (3389)** directly to the Internet — it's a top ransomware vector. Put it behind a **VPN/gateway**, require **MFA**, and restrict source IPs.
- Use **MFA** on all remote-access services.
- Use a **jump box / bastion host** as a single, hardened, audited entry point.

---

> [!TIP]
> **Key idea —** Remote access = **SSH** (CLI), **RDP** (GUI), **VPN** (tunnel). Always protect it with **MFA**, restrict exposure, and use **out-of-band** management for resilience.

See also: [Secure Protocols & Encryption](04-04-secure-protocols.md), [Remote Access Methods](07-04-remote-access-methods.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Secure Protocols &amp; Encryption](04-04-secure-protocols.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 04 Exercise](../02-exercises/04-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [Copper Cabling](05-01-copper-cabling.md)

</div>
<!-- /course-footer -->
