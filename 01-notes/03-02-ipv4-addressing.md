# &#128216; 03-02: IPv4 Addressing

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_03-Addressing-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 03: Addressing">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/03-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128204; Structure

An **IPv4 address** is **32 bits**, written as four decimal **octets** (0–255):

```
192.168.1.10
 |   |   | |
 8   8   8 8  bits  = 32 bits total
```

Each octet is 8 bits, so its range is **0–255** (2^8 = 256 values).

- A host needs **IP address + subnet mask** to know its network, and a **default gateway** to reach other networks.

---

## &#129518; Subnet Mask

The **subnet mask** separates the **network** portion (1s) from the **host** portion (0s).

| CIDR | Mask | Default class |
|------|------|---------------|
| /8 | 255.0.0.0 | A |
| /16 | 255.255.0.0 | B |
| /24 | 255.255.255.0 | C |

---

## &#128204; Private (RFC 1918) Ranges

Not routable on the Internet — used inside networks with NAT:

| Range | CIDR |
|-------|------|
| 10.0.0.0 – 10.255.255.255 | /8 |
| 172.16.0.0 – 172.31.255.255 | /12 |
| 192.168.0.0 – 192.168.255.255 | /16 |

---

## &#128204; Special Addresses

| Address | Meaning |
|---------|---------|
| **127.0.0.1** | Loopback (localhost) — tests the local stack |
| **169.254.x.x** | **APIPA** — self-assigned when DHCP fails |
| **0.0.0.0** | "This/any host" or default route |
| **255.255.255.255** | Limited broadcast (local subnet) |
| **224.0.0.0 – 239.255.255.255** | Multicast (Class D) |

---

## &#128204; Public vs. Private & NAT

- **Public** addresses are globally unique and Internet-routable.
- **Private** addresses are reused internally; **NAT** translates them to a public address to reach the Internet.

---

## &#129517; Scenario: Reading an IP Configuration

When troubleshooting a host, do not look at the IP address alone. Read the address, mask, gateway, and DNS settings together.

| Symptom | Likely clue | What it suggests |
| --- | --- | --- |
| Host has `169.254.x.x` | APIPA address | DHCP did not provide a lease |
| Host can ping gateway but not websites by name | IP works, DNS fails | Check DNS server and name resolution |
| Host can ping local devices but not remote networks | No working gateway | Check default gateway and routing |
| Host IP does not match local subnet | Wrong address or mask | Recheck DHCP scope, static config, or VLAN |

Example: a workstation is configured as `192.168.10.75/24` with gateway `192.168.20.1`. The host may reach devices in `192.168.10.0/24`, but traffic to other networks will fail because the gateway is not in the host's local subnet.

---

> [!TIP]
> **Key idea —** IPv4 = **32 bits, four octets (0–255)**. The **subnet mask** marks network vs. host bits. Know the **private ranges**, **loopback (127.0.0.1)**, and **APIPA (169.254.x.x)**.

See also: [IPv6 Addressing](03-03-ipv6-addressing.md), [IP Address Structure](08-02-ip-address-structure.md), [Subnet Mask](08-03-subnet-mask.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [MAC Addresses](03-01-mac-addresses.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 03 Exercise](../02-exercises/03-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [IPv6 Addressing](03-03-ipv6-addressing.md)

</div>
<!-- /course-footer -->
