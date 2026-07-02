# 03-01: MAC Addresses

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_03-Addressing-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 03: Addressing">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/03-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## What Is a MAC Address?

A **MAC (Media Access Control) address** is a **48-bit** Layer 2 physical address burned into every NIC. It is written as **six pairs of hex digits**:

```
00:1A:2B:3C:4D:5E
```

- Also called a **physical** or **hardware** address.
- Used to deliver frames **within** a local network (broadcast domain).

---

## Structure

| First 24 bits (OUI) | Last 24 bits |
|---------------------|--------------|
| **Manufacturer ID** (Organizationally Unique Identifier) | Device-specific serial |

- The **OUI** identifies the NIC vendor (assigned by IEEE).
- The remaining half is unique per device from that vendor.

---

## MAC vs. IP

| | MAC address | IP address |
|---|-------------|------------|
| Layer | 2 (Data Link) | 3 (Network) |
| Scope | Local segment | End to end / global |
| Assigned by | Manufacturer (burned-in) | Admin / DHCP |
| Size | 48 bits | 32 (IPv4) / 128 (IPv6) |
| Changes when moved? | No | Yes (new network = new IP) |

> Think **MAC = who you physically are; IP = where you are on the network.**

---

## ARP: Bridging IP and MAC

**ARP (Address Resolution Protocol)** resolves a known **IP** to its **MAC** on the local segment so frames can be delivered. In IPv6, this is handled by **NDP** (Neighbor Discovery). View the cache with `arp -a`.

---

> [!TIP]
> **Key idea —** A MAC address is a **48-bit, vendor-assigned Layer 2 identifier** (OUI + device ID). It delivers frames locally; **ARP** maps IP → MAC.

See also: [IPv4 Addressing](03-02-ipv4-addressing.md), [CLI Troubleshooting Tools](03-07-cli-troubleshooting-tools.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="02-04-change-management.md">Change Management &amp; Agreements</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/03-exercise.md">Module 03 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="03-02-ipv4-addressing.md">IPv4 Addressing</a>

</div>
<!-- /course-footer -->
