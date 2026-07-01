# 10-04: Secure Network Design

## Segmentation for Security

Splitting the network into zones **contains breaches** and limits **lateral movement**.

| Zone | Purpose |
|------|---------|
| **DMZ (screened subnet)** | Public-facing servers, isolated from the LAN |
| **Internal LAN** | Trusted user/server systems |
| **Guest / IoT VLAN** | Untrusted devices, tightly restricted |
| **Management network** | Isolated device admin interfaces |

> Put risky devices (IoT/OT, guests) on their own segments with strict ACLs — **microsegmentation**.

---

## The DMZ

A **DMZ** sits behind firewall interfaces so the Internet can reach public servers (web, mail, DNS) but **not** the internal LAN. A compromise in the DMZ doesn't directly expose internal systems.

---

## Zero Trust

**"Never trust, always verify."** No implicit trust based on network location — every request is authenticated, authorized, and continuously validated (identity, device posture, least privilege). Shrinks lateral-movement risk.

---

## Defense in Depth at the Edge

Layer multiple controls so no single failure exposes everything:

```
Internet → Firewall → IPS → DMZ segmentation → NAC/802.1X → Monitoring/SIEM
```

---

## Supporting Components

| Component | Role |
|-----------|------|
| **Proxy (forward)** | Content filtering, caching, client anonymity |
| **Reverse proxy** | Front servers; load balance, TLS termination |
| **Jump box** | Hardened single entry point for admin |
| **Honeypot / honeynet** | Decoy to lure/study attackers |

---

## Key Idea

> Design in **zones** (DMZ, internal, guest/IoT, management), apply **defense in depth**, and adopt **zero trust** — every access verified, nothing trusted by location alone.

See also: [Switch & Port Hardening](10-05-switch-hardening.md), [Virtual LAN (VLAN)](08-12-vlan.md)

<!-- nav -->

---

⬅️ **Prev:** [Network Access Control & AAA](10-03-nac-and-aaa.md)  ·  [📚 All Notes](README.md)  ·  **Next:** [Switch & Port Hardening](10-05-switch-hardening.md) ➡️
