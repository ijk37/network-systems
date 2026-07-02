# &#128736; Project 05 — Secure Small-Business Network Design


<!-- course-header -->
<div align="center" markdown>

![Network Systems](../../assets/banner.svg)

<img src="https://img.shields.io/badge/Project_05-Secure_Small--Business_Network_Design-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Project 05: Secure Small-Business Network Design">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../../index.md) [![All Projects](https://img.shields.io/badge/All_Projects-3B2530?style=flat-square)](../README.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../../01-notes/README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../../03-quiz/)

</div>
<!-- /course-header -->

**Type:** Design document + partial Packet Tracer build
**Modules:** 09 (Risk), 10 (Security in Network Design), 08 (VLANs)
**Difficulty:** ⭐⭐⭐⭐

---

## &#127919; Objective

Design a **defense-in-depth** network for a small business: segment with VLANs, isolate public servers in a **DMZ**, filter traffic with **ACLs/firewall rules**, and produce a **hardening checklist**.

---

## &#129517; Scenario

**Bright Retail** (30 staff) needs a network that supports staff, guests, point-of-sale (POS), and a public web/email server — without letting a breach in one area reach the others.

### &#128313; Zones

| Zone | VLAN/Segment | Notes |
|------|--------------|-------|
| Staff | VLAN 10 | Internal users |
| POS | VLAN 20 | PCI-sensitive, tightly restricted |
| Guest Wi-Fi | VLAN 30 | Internet only, isolated |
| Servers (DMZ) | Screened subnet | Public web/email |
| Management | VLAN 99 | Device admin only |

---

## &#128204; Part A — Design Document

Produce a design covering:

1. **Logical diagram** — zones, firewall, DMZ, Internet edge.
2. **Addressing plan** — a subnet per zone (reuse Project 01 method).
3. **Traffic policy matrix** — what each zone may reach:

| From \ To | Staff | POS | Guest | DMZ | Internet |
|-----------|-------|-----|-------|-----|----------|
| Staff | — | ❌ | ❌ | web only | ✅ |
| POS | ❌ | — | ❌ | ❌ | payment host only |
| Guest | ❌ | ❌ | — | ❌ | ✅ |
| DMZ | ❌ | ❌ | ❌ | — | ✅ (replies) |

4. **Hardening checklist** (see below).

## &#128204; Part B — Partial Build (Packet Tracer)

1. Create the VLANs and inter-VLAN routing.
2. Place a "web server" in the DMZ segment.
3. Apply **ACLs** implementing the policy matrix (e.g., permit Staff→DMZ:80/443, deny Staff→POS).
4. Verify allowed flows succeed and denied flows fail.

---

## &#128204; Hardening Checklist

- [ ] Change all **default credentials**; disable unused accounts.
- [ ] **SSH** (not Telnet) for management; management on VLAN 99 only.
- [ ] **Port security** on access ports; **shut unused ports**.
- [ ] **DHCP snooping + Dynamic ARP Inspection** enabled.
- [ ] Non-default **native VLAN**; **DTP** disabled on trunks.
- [ ] **WPA3/WPA2-Enterprise** on staff Wi-Fi; guest on isolated VLAN with a captive portal.
- [ ] **Implicit deny** verified at the end of each ACL.
- [ ] Logging to a central **syslog/SIEM**; **MFA** on remote access.
- [ ] Tested **3-2-1 backups**.

---

## &#9989; Verification

- [ ] Staff can reach the DMZ web server on 80/443 but **cannot** reach POS.
- [ ] Guest reaches the Internet but **nothing internal**.
- [ ] Management interfaces are unreachable from user VLANs.

---

## &#128230; Deliverables

- Design document (diagram + addressing + policy matrix).
- Packet Tracer file (local) with ACLs.
- Completed hardening checklist with notes on residual risk.

See also notes: [[10-04-secure-network-design]], [[10-01-firewalls-and-acls]], [[09-01-security-concepts]]
