# &#128216; 03-01: MAC Addresses

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_03-Addressing-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 03: Addressing">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/03-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#10067; What Is a MAC Address?

A **MAC (Media Access Control) address** is a **48-bit** Layer 2 physical address burned into every NIC. It is written as **six pairs of hex digits**:

```
00:1A:2B:3C:4D:5E
```

- Also called a **physical** or **hardware** address.
- Used to deliver frames **within** a local network (broadcast domain).

---

## &#128204; Structure

| First 24 bits (OUI) | Last 24 bits |
|---------------------|--------------|
| **Manufacturer ID** (Organizationally Unique Identifier) | Device-specific serial |

- The **OUI** identifies the NIC vendor (assigned by IEEE).
- The remaining half is unique per device from that vendor.

---

## &#128204; MAC vs. IP

| | MAC address | IP address |
|---|-------------|------------|
| Layer | 2 (Data Link) | 3 (Network) |
| Scope | Local segment | End to end / global |
| Assigned by | Manufacturer (burned-in) | Admin / DHCP |
| Size | 48 bits | 32 (IPv4) / 128 (IPv6) |
| Changes when moved? | No | Yes (new network = new IP) |

> Think **MAC = who you physically are; IP = where you are on the network.**

---

## &#128204; ARP: Bridging IP and MAC

**ARP (Address Resolution Protocol)** resolves a known **IP** to its **MAC** on the local segment so frames can be delivered. In IPv6, this is handled by **NDP** (Neighbor Discovery). View the cache with `arp -a`.

---

> [!TIP]
> **Key idea —** A MAC address is a **48-bit, vendor-assigned Layer 2 identifier** (OUI + device ID). It delivers frames locally; **ARP** maps IP → MAC.

See also: [IPv4 Addressing](03-02-ipv4-addressing.md), [CLI Troubleshooting Tools](03-07-cli-troubleshooting-tools.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Change Management &amp; Agreements](02-04-change-management.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 03 Exercise](../02-exercises/03-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [IPv4 Addressing](03-02-ipv4-addressing.md)

</div>
<!-- /course-footer -->
