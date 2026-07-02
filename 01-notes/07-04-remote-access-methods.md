# &#128216; 07-04: Remote Access Methods

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_07-Cloud_Computing_and_Remote_Access-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 07: Cloud Computing and Remote Access">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/07-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128204; Ways to Reach Remote Systems

| Method | Purpose |
|--------|---------|
| **VPN** | Encrypted tunnel into a private network |
| **RDP (3389)** | Graphical Windows desktop |
| **SSH (22)** | Encrypted CLI |
| **VDI / DaaS** | Centrally hosted virtual desktops |
| **Out-of-band mgmt** | Manage devices even if the main network is down |

---

## &#128204; VPN Types (recap)

- **Site-to-site** — connects whole networks (IPsec).
- **Client-to-site** — individual users into the LAN.
- **Clientless (SSL/TLS)** — browser portal to internal web apps.
- **Full vs. split tunnel** — all traffic vs. only corporate traffic through the VPN.

A **VPN concentrator** terminates many tunnels at the edge.

---

## &#128204; Out-of-Band Management

Uses a **separate path** (console/serial port, dedicated management interface, or cellular modem) so admins can reach devices **even during a production-network outage** — critical for recovery.

---

## &#128204; Secure-Access Building Blocks

| Control | Benefit |
|---------|---------|
| **Jump box / bastion host** | Single hardened, audited entry point to internal systems |
| **MFA** | A stolen password alone isn't enough |
| **Least privilege** | Admins get only the access they need |

> Never expose **RDP** directly to the Internet — put it behind a VPN/gateway with MFA.

---

## &#127757; SD-WAN

**SD-WAN** centrally manages and steers traffic across multiple transports (broadband, LTE, MPLS) by application policy — improving WAN performance and reducing MPLS cost.

---

> [!TIP]
> **Key idea —** Remote access = **VPN + SSH/RDP + VDI**, hardened with **MFA, jump boxes, and least privilege**. Keep an **out-of-band** path for managing devices during outages.

See also: [Remote Access](04-05-remote-access.md), [Secure Network Design](10-04-secure-network-design.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="07-03-virtualization.md">Virtualization</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/07-exercise.md">Module 07 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="08-01-network-segmentation.md">Network Segmentation</a>

</div>
<!-- /course-footer -->
