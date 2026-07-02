# &#128216; 03-03: IPv6 Addressing

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_03-Addressing-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 03: Addressing">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/03-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128161; Why IPv6?

IPv4's 32-bit space (~4.3 billion addresses) is exhausted. **IPv6** uses **128 bits**, providing a virtually unlimited address space.

---

## &#128204; Format

Eight groups (hextets) of four hex digits, separated by colons:

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

### &#128313; Compression rules
1. **Drop leading zeros** in each hextet: `0db8` → `db8`, `0000` → `0`.
2. **Replace one run of consecutive all-zero hextets with `::`** (only once).

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
2001:db8:85a3::8a2e:370:7334        (compressed)
```

---

## &#128204; Address Types

| Prefix | Type | Notes |
|--------|------|-------|
| `2000::/3` | Global unicast | Internet-routable |
| `fe80::/10` | Link-local | Valid only on the local link |
| `::1/128` | Loopback | Equivalent to 127.0.0.1 |
| `ff00::/8` | Multicast | No broadcast in IPv6 |
| `fc00::/7` | Unique local | Private-like (ULA) |

---

## &#128204; Interface ID & Autoconfiguration

- A LAN subnet is almost always **/64**: first 64 bits = network prefix, last 64 = **interface ID**.
- **EUI-64** derives the interface ID from the 48-bit MAC (insert `FFFE`, flip U/L bit).
- **SLAAC** lets a host build its own address from the Router Advertisement prefix + interface ID — no DHCP needed.
- **NDP** (ICMPv6) replaces ARP for neighbor/router discovery.

---

> [!TIP]
> **Key idea —** IPv6 = **128 bits, eight hextets**, compressed with **`::` (once)** and dropped leading zeros. LANs use **/64**; hosts can self-configure via **SLAAC/EUI-64**.

See also: [IPv4 Addressing](03-02-ipv4-addressing.md), [Subnets in IPv6](08-11-ipv6-subnetting.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [IPv4 Addressing](03-02-ipv4-addressing.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 03 Exercise](../02-exercises/03-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [DHCP](03-04-dhcp.md)

</div>
<!-- /course-footer -->
