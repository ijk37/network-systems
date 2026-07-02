# 10-05: Switch & Port Hardening

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_10-Security_in_Network_Design-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 10: Security in Network Design">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/10-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## Layer 2 Attacks and Their Defenses

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

## Port Security

Restricts a port to specific or a maximum number of MAC addresses; on violation it can **shut down**, **restrict**, or **protect**. Defends against MAC flooding and rogue devices.

---

## DHCP Snooping + DAI + IP Source Guard

These work together using a **binding table**:

1. **DHCP snooping** — permits DHCP server replies only from trusted (uplink) ports and builds an IP/MAC/port binding table.
2. **DAI** — validates ARP against that table, blocking forged ARP replies.
3. **IP Source Guard** — permits only traffic whose source IP/MAC matches a binding.

---

## VLAN Hardening

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

<div align="center">

<strong>Previous:</strong> <a href="10-04-secure-network-design.md">Secure Network Design</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/10-exercise.md">Module 10 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="11-01-performance-concepts.md">Performance Concepts &amp; QoS</a>

</div>
<!-- /course-footer -->
