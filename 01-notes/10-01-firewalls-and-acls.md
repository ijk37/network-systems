# &#128216; 10-01: Firewalls & ACLs

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_10-Security_in_Network_Design-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 10: Security in Network Design">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/10-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#129521; What a Firewall Does

A **firewall** filters traffic between network zones based on a **rule set (policy)** — permitting or denying by address, port, protocol, and more.

---

## &#129521; Firewall Types

| Type | Behavior |
|------|----------|
| **Stateless (packet filter)** | Checks each packet in isolation |
| **Stateful** | Tracks connections; auto-allows legitimate return traffic |
| **NGFW** | Adds deep packet inspection, app/user awareness, integrated IPS |
| **WAF** | Protects web apps (SQLi, XSS) at Layer 7 |
| **UTM** | Bundles firewall + IPS + AV + content filter + VPN |

> **Stateful** firewalls understand sessions; **stateless** ones don't.

---

## &#128204; Access Control Lists (ACLs)

An **ACL** is an ordered list of permit/deny rules matched top-down.

- Match criteria: source/dest **IP**, **port**, **protocol**.
- **First match wins**, then processing stops.
- Ends with an **implicit deny all** — anything not permitted is dropped.
- Applied **inbound** or **outbound** on an interface.

---

## &#128204; Directions of Filtering

| Direction | Purpose |
|-----------|---------|
| **Ingress** | Filter traffic coming in (block external threats) |
| **Egress** | Filter outbound (stop exfiltration, malware call-home, spoofed sources) |

---

## &#129517; Rule Order Scenario

ACL and firewall rules are evaluated in order. A broad rule placed too early can override a more specific rule below it.

Example policy goal:

- Allow users to browse the web.
- Allow IT administrators to SSH to network devices.
- Block all other inbound management traffic.

Better rule order:

1. Permit admin subnet to SSH to device-management subnet.
2. Permit user subnets to HTTP/HTTPS as required.
3. Deny other management traffic.
4. Deny everything else by default.

If the deny rule is placed before the admin SSH permit, legitimate admin traffic is blocked. If a broad permit is placed first, unwanted traffic may bypass the intended restrictions.

---

> [!TIP]
> **Key idea —** Firewalls enforce policy between zones. **Stateful** > stateless; **NGFW** adds app-awareness/IPS. **ACLs** are ordered, first-match, with an **implicit deny** at the end.

See also: [IDS & IPS](10-02-ids-ips.md), [Secure Network Design](10-04-secure-network-design.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Policies, Physical Security &amp; Continuity](09-04-policies-and-risk-management.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 10 Exercise](../02-exercises/10-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [IDS &amp; IPS](10-02-ids-ips.md)

</div>
<!-- /course-footer -->
