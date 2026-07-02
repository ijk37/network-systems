# &#128216; 03-07: CLI Troubleshooting Tools

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_03-Addressing-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 03: Addressing">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/03-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128204; IP Configuration

| Command | OS | Shows |
|---------|-----|-------|
| `ipconfig` / `ipconfig /all` | Windows | IP, mask, gateway, DNS, MAC, DHCP |
| `ifconfig` | Linux/macOS (legacy) | Interface config |
| `ip addr` / `ip route` | Linux (modern) | Addresses and routes |

---

## &#128204; Connectivity Testing

| Command | Purpose |
|---------|---------|
| `ping <host>` | Test reachability & round-trip time (ICMP echo) |
| `tracert` (Win) / `traceroute` (Linux) | Show each router hop to a destination |
| `pathping` (Win) / `mtr` (Linux) | Combine ping + traceroute with loss stats |

---

## &#128204; Name Resolution

| Command | Purpose |
|---------|---------|
| `nslookup <name>` | Query DNS for a record |
| `dig <name>` | Detailed DNS lookup (Linux/macOS) |

---

## &#128204; Connections & Neighbors

| Command | Purpose |
|---------|---------|
| `arp -a` | Show IP → MAC cache |
| `netstat` | Active connections and listening ports |
| `ss` | Modern socket stats (Linux) |
| `nmap` | Scan hosts/ports (discovery) |

---

## &#128269; A Typical Troubleshooting Flow

1. `ipconfig /all` — do I have a valid IP/gateway/DNS? (169.254.x.x = DHCP fail)
2. `ping 127.0.0.1` — is my TCP/IP stack alive?
3. `ping <gateway>` — can I reach my router?
4. `ping 8.8.8.8` — is the Internet reachable by IP?
5. `nslookup google.com` — is DNS working?
6. `tracert` — where does the path break?

> If step 4 works but step 5 fails, it's a **DNS** problem, not connectivity.

---

> [!TIP]
> **Key idea —** Master **ipconfig/ip, ping, tracert, nslookup, arp, netstat**. Test bottom-up (local stack → gateway → Internet → DNS) to isolate exactly where a problem lies.

See also: [Troubleshooting Methodology & Safety](01-05-troubleshooting-and-safety.md), [DNS](03-05-dns.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Ports &amp; Protocols Reference](03-06-ports-and-protocols.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 03 Exercise](../02-exercises/03-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [The TCP/IP Suite &amp; Encapsulation](04-01-tcp-ip-suite.md)

</div>
<!-- /course-footer -->
