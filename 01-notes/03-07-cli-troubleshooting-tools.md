# 03-07: CLI Troubleshooting Tools

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_03-Addressing-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 03: Addressing">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/03-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## IP Configuration

| Command | OS | Shows |
|---------|-----|-------|
| `ipconfig` / `ipconfig /all` | Windows | IP, mask, gateway, DNS, MAC, DHCP |
| `ifconfig` | Linux/macOS (legacy) | Interface config |
| `ip addr` / `ip route` | Linux (modern) | Addresses and routes |

---

## Connectivity Testing

| Command | Purpose |
|---------|---------|
| `ping <host>` | Test reachability & round-trip time (ICMP echo) |
| `tracert` (Win) / `traceroute` (Linux) | Show each router hop to a destination |
| `pathping` (Win) / `mtr` (Linux) | Combine ping + traceroute with loss stats |

---

## Name Resolution

| Command | Purpose |
|---------|---------|
| `nslookup <name>` | Query DNS for a record |
| `dig <name>` | Detailed DNS lookup (Linux/macOS) |

---

## Connections & Neighbors

| Command | Purpose |
|---------|---------|
| `arp -a` | Show IP → MAC cache |
| `netstat` | Active connections and listening ports |
| `ss` | Modern socket stats (Linux) |
| `nmap` | Scan hosts/ports (discovery) |

---

## A Typical Troubleshooting Flow

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

<div align="center">

<strong>Previous:</strong> <a href="03-06-ports-and-protocols.md">Ports &amp; Protocols Reference</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/03-exercise.md">Module 03 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="04-01-tcp-ip-suite.md">The TCP/IP Suite &amp; Encapsulation</a>

</div>
<!-- /course-footer -->
