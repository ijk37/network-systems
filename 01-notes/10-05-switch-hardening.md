# 10-05: Switch & Port Hardening

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/10-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 10: Security in Network Design | 10-05 |
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

## Key Idea

> Harden Layer 2: **port security** (MAC flooding), **DHCP snooping + DAI + IP Source Guard** (rogue DHCP / ARP / IP spoofing), **BPDU Guard** (STP), and disable unused ports + DTP (VLAN hopping).

See also: [Secure Network Design](10-04-secure-network-design.md), [Virtual LAN (VLAN)](08-12-vlan.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="10-04-secure-network-design.md">Secure Network Design</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/10-exercise.md">Module 10 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="11-01-performance-concepts.md">Performance Concepts &amp; QoS</a>

</div>
<!-- /course-footer -->
