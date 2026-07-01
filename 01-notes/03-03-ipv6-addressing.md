# 03-03: IPv6 Addressing

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/03-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 03: Addressing | 03-03 |
<!-- /course-header -->

## Why IPv6?

IPv4's 32-bit space (~4.3 billion addresses) is exhausted. **IPv6** uses **128 bits**, providing a virtually unlimited address space.

---

## Format

Eight groups (hextets) of four hex digits, separated by colons:

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

### Compression rules
1. **Drop leading zeros** in each hextet: `0db8` → `db8`, `0000` → `0`.
2. **Replace one run of consecutive all-zero hextets with `::`** (only once).

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
2001:db8:85a3::8a2e:370:7334        (compressed)
```

---

## Address Types

| Prefix | Type | Notes |
|--------|------|-------|
| `2000::/3` | Global unicast | Internet-routable |
| `fe80::/10` | Link-local | Valid only on the local link |
| `::1/128` | Loopback | Equivalent to 127.0.0.1 |
| `ff00::/8` | Multicast | No broadcast in IPv6 |
| `fc00::/7` | Unique local | Private-like (ULA) |

---

## Interface ID & Autoconfiguration

- A LAN subnet is almost always **/64**: first 64 bits = network prefix, last 64 = **interface ID**.
- **EUI-64** derives the interface ID from the 48-bit MAC (insert `FFFE`, flip U/L bit).
- **SLAAC** lets a host build its own address from the Router Advertisement prefix + interface ID — no DHCP needed.
- **NDP** (ICMPv6) replaces ARP for neighbor/router discovery.

---

## Key Idea

> IPv6 = **128 bits, eight hextets**, compressed with **`::` (once)** and dropped leading zeros. LANs use **/64**; hosts can self-configure via **SLAAC/EUI-64**.

See also: [IPv4 Addressing](03-02-ipv4-addressing.md), [Subnets in IPv6](08-11-ipv6-subnetting.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="03-02-ipv4-addressing.md">IPv4 Addressing</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/03-exercise.md">Module 03 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="03-04-dhcp.md">DHCP</a>

</div>
<!-- /course-footer -->
