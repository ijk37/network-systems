# 10-01: Firewalls & ACLs

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_10-Security_in_Network_Design-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 10: Security in Network Design">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/10-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## What a Firewall Does

A **firewall** filters traffic between network zones based on a **rule set (policy)** — permitting or denying by address, port, protocol, and more.

---

## Firewall Types

| Type | Behavior |
|------|----------|
| **Stateless (packet filter)** | Checks each packet in isolation |
| **Stateful** | Tracks connections; auto-allows legitimate return traffic |
| **NGFW** | Adds deep packet inspection, app/user awareness, integrated IPS |
| **WAF** | Protects web apps (SQLi, XSS) at Layer 7 |
| **UTM** | Bundles firewall + IPS + AV + content filter + VPN |

> **Stateful** firewalls understand sessions; **stateless** ones don't.

---

## Access Control Lists (ACLs)

An **ACL** is an ordered list of permit/deny rules matched top-down.

- Match criteria: source/dest **IP**, **port**, **protocol**.
- **First match wins**, then processing stops.
- Ends with an **implicit deny all** — anything not permitted is dropped.
- Applied **inbound** or **outbound** on an interface.

---

## Directions of Filtering

| Direction | Purpose |
|-----------|---------|
| **Ingress** | Filter traffic coming in (block external threats) |
| **Egress** | Filter outbound (stop exfiltration, malware call-home, spoofed sources) |

---

> [!TIP]
> **Key idea —** Firewalls enforce policy between zones. **Stateful** > stateless; **NGFW** adds app-awareness/IPS. **ACLs** are ordered, first-match, with an **implicit deny** at the end.

See also: [IDS & IPS](10-02-ids-ips.md), [Secure Network Design](10-04-secure-network-design.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="09-04-policies-and-risk-management.md">Policies, Physical Security &amp; Continuity</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/10-exercise.md">Module 10 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="10-02-ids-ips.md">IDS &amp; IPS</a>

</div>
<!-- /course-footer -->
