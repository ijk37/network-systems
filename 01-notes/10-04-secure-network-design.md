# &#128216; 10-04: Secure Network Design

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_10-Security_in_Network_Design-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 10: Security in Network Design">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/10-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128272; Segmentation for Security

Splitting the network into zones **contains breaches** and limits **lateral movement**.

| Zone | Purpose |
|------|---------|
| **DMZ (screened subnet)** | Public-facing servers, isolated from the LAN |
| **Internal LAN** | Trusted user/server systems |
| **Guest / IoT VLAN** | Untrusted devices, tightly restricted |
| **Management network** | Isolated device admin interfaces |

> Put risky devices (IoT/OT, guests) on their own segments with strict ACLs — **microsegmentation**.

---

## &#128204; The DMZ

A **DMZ** sits behind firewall interfaces so the Internet can reach public servers (web, mail, DNS) but **not** the internal LAN. A compromise in the DMZ doesn't directly expose internal systems.

---

## &#128204; Zero Trust

**"Never trust, always verify."** No implicit trust based on network location — every request is authenticated, authorized, and continuously validated (identity, device posture, least privilege). Shrinks lateral-movement risk.

---

## &#128204; Defense in Depth at the Edge

Layer multiple controls so no single failure exposes everything:

```
Internet → Firewall → IPS → DMZ segmentation → NAC/802.1X → Monitoring/SIEM
```

---

## &#128204; Supporting Components

| Component | Role |
|-----------|------|
| **Proxy (forward)** | Content filtering, caching, client anonymity |
| **Reverse proxy** | Front servers; load balance, TLS termination |
| **Jump box** | Hardened single entry point for admin |
| **Honeypot / honeynet** | Decoy to lure/study attackers |

---

> [!TIP]
> **Key idea —** Design in **zones** (DMZ, internal, guest/IoT, management), apply **defense in depth**, and adopt **zero trust** — every access verified, nothing trusted by location alone.

See also: [Switch & Port Hardening](10-05-switch-hardening.md), [Virtual LAN (VLAN)](08-12-vlan.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Network Access Control &amp; AAA](10-03-nac-and-aaa.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 10 Exercise](../02-exercises/10-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [Switch &amp; Port Hardening](10-05-switch-hardening.md)

</div>
<!-- /course-footer -->
