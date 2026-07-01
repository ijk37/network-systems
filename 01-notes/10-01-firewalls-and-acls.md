# 10-01: Firewalls & ACLs

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

## Key Idea

> Firewalls enforce policy between zones. **Stateful** > stateless; **NGFW** adds app-awareness/IPS. **ACLs** are ordered, first-match, with an **implicit deny** at the end.

See also: [[10-02-ids-ips]], [[10-04-secure-network-design]]
