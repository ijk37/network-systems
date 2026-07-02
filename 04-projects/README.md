# &#128736; 04 Projects

<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/04_·_Projects-13_labs-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Projects">

[Home](../index.md) &nbsp;|&nbsp; [Notes](../01-notes/README.md) &nbsp;|&nbsp; [Exercises](../02-exercises/README.md) &nbsp;|&nbsp; [Quiz Hub](../03-quiz/)

</div>

Hands-on projects that apply the notes to realistic scenarios — a mix of **Cisco Packet Tracer labs** and **design/analysis** work. Each project has its own folder with a full README (objective, scenario, step-by-step tasks, verification, deliverables, and stretch goals).

| # | Project | Type | Primary module(s) | Difficulty |
|---|---------|------|-------------------|------------|
| 01 | [VLSM Network Design](01-vlsm-network-design/README.md) | Design + PT | 03, 08 | ⭐⭐⭐ |
| 02 | [VLANs & Inter-VLAN Routing](02-vlans-inter-vlan-routing/README.md) | Packet Tracer | 08, 01 | ⭐⭐⭐ |
| 03 | [Static & Dynamic Routing (OSPF)](03-routing-static-and-ospf/README.md) | Packet Tracer | 12, 03 | ⭐⭐⭐⭐ |
| 04 | [DHCP, DNS & Web Services](04-dhcp-dns-web-services/README.md) | Packet Tracer | 03, 04 | ⭐⭐⭐ |
| 05 | [Secure Small-Business Network Design](05-secure-network-design/README.md) | Design + PT | 09, 10, 08 | ⭐⭐⭐⭐ |
| 06 | [Wireshark Traffic Analysis](06-wireshark-traffic-analysis/README.md) | Capture & analysis | 04, 03, 01 | ⭐⭐⭐ |
| 07 | [Network Documentation Package](07-network-documentation/README.md) | Documentation | 02 | ⭐⭐ |
| 08 | [Structured Cabling Plan](08-structured-cabling-plan/README.md) | Design + hands-on | 05, 02 | ⭐⭐⭐ |
| 09 | [Wireless Network Design](09-wireless-network-design/README.md) | Design + PT | 06, 08, 10 | ⭐⭐⭐ |
| 10 | [Cloud & VPN Connectivity](10-cloud-and-vpn-connectivity/README.md) | Design + PT | 07, 04, 12 | ⭐⭐⭐⭐ |
| 11 | [High Availability, Monitoring & Recovery](11-high-availability-and-monitoring/README.md) | PT + design | 11, 01 | ⭐⭐⭐⭐ |
| 12 | [Network Troubleshooting & Incident Response](12-troubleshooting-incident-response/README.md) | Troubleshooting + report | 01, 03, 04, 11 | 4/5 |
| 13 | [IPv6 Dual-Stack Migration](13-ipv6-dual-stack-migration/README.md) | Design + PT | 03, 08, 12 | 4/5 |

## &#129517; Module Coverage

Every module (01–12) is exercised by at least one project:

| Module | Projects |
|--------|----------|
| 01 Introduction | 02, 06, 11, 12 |
| 02 Infrastructure & Documentation | 07, 08 |
| 03 Addressing | 01, 03, 04, 06, 12, 13 |
| 04 Network Protocols | 04, 06, 10, 12 |
| 05 Cabling | 08 |
| 06 Wireless | 09 |
| 07 Cloud & Remote Access | 10 |
| 08 Subnets & VLANs | 01, 02, 05, 09, 13 |
| 09 Risk Management | 05 |
| 10 Security in Network Design | 05, 09 |
| 11 Performance & Recovery | 11, 12 |
| 12 Wide Area Networks | 03, 10, 13 |

---

## &#129520; Tools

- **Cisco Packet Tracer** (free from Cisco Networking Academy) - projects 01-05, 09-13.
- **Wireshark** (free, wireshark.org) — project 06.
- **draw.io / diagrams.net** (free) — diagramming for projects 07–08.
- Real Cisco/other gear works too if you have a lab.

> `.pkt`, `.pka`, and capture files are **git-ignored** — commit your READMEs, design docs, and reports; keep the binary lab files local.

## &#128506; Suggested Order

1. **07 -> 08** - documentation and cabling (the physical/planning foundation).
2. **01 -> 02 -> 04** - addressing, VLANs, and core services.
3. **03 -> 10 -> 11** - routing, cloud/VPN, and high availability.
4. **12** - troubleshoot realistic outages after you have built the basics.
5. **09 -> 05** - wireless, then bring security together.
6. **13** - add IPv6 after IPv4 subnetting, VLANs, and routing are comfortable.
7. **06** - anytime, to see protocols on the wire.

[← Back to Root](../index.md)
