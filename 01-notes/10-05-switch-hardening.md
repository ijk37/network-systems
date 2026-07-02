# &#128216; 10-05: Switch & Port Hardening

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_10-Security_in_Network_Design-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 10: Security in Network Design">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/10-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128204; Layer 2 Attacks and Their Defenses

| Attack | Defense |
|--------|---------|
| **MAC flooding** | **Port security** (limit MACs per port) |
| **Rogue DHCP server** | **DHCP snooping** (trust only uplink ports) |
| **ARP spoofing (MITM)** | **Dynamic ARP Inspection (DAI)** |
| **IP spoofing** | **IP Source Guard** |
| **VLAN hopping** | Disable DTP, set unused native VLAN, disable unused ports |
| **STP manipulation** | **BPDU Guard**, Root Guard |
| **Unauthorized devices** | **802.1X**, disable/shut unused ports |

---

## &#128272; Port Security

Restricts a port to specific or a maximum number of MAC addresses; on violation it can **shut down**, **restrict**, or **protect**. Defends against MAC flooding and rogue devices.

---

## &#128225; DHCP Snooping + DAI + IP Source Guard

These work together using a **binding table**:

1. **DHCP snooping** — permits DHCP server replies only from trusted (uplink) ports and builds an IP/MAC/port binding table.
2. **DAI** — validates ARP against that table, blocking forged ARP replies.
3. **IP Source Guard** — permits only traffic whose source IP/MAC matches a binding.

---

## &#129521; VLAN Hardening

- Move user/management traffic **off VLAN 1**.
- Set a dedicated, unused **native VLAN** on trunks.
- Disable **DTP** auto-trunking; hardcode access vs. trunk.
- **Shut down unused ports** (place in an unused VLAN).

---

> [!TIP]
> **Key idea —** Harden Layer 2: **port security** (MAC flooding), **DHCP snooping + DAI + IP Source Guard** (rogue DHCP / ARP / IP spoofing), **BPDU Guard** (STP), and disable unused ports + DTP (VLAN hopping).

See also: [Secure Network Design](10-04-secure-network-design.md), [Virtual LAN (VLAN)](08-12-vlan.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Secure Network Design](10-04-secure-network-design.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 10 Exercise](../02-exercises/10-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [Performance Concepts &amp; QoS](11-01-performance-concepts.md)

</div>
<!-- /course-footer -->
