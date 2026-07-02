# &#128216; 12-01: WAN Fundamentals

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_12-Wide_Area_Networks-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 12: Wide Area Networks">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/12-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#127757; LAN vs. WAN

| | **LAN** | **WAN** |
|---|---------|---------|
| Scope | Building/campus | Large geographic area |
| Ownership | Private | Provider/telco (NSP) |
| Differ at | — | Layers 1 & 2 (access, media, topology) |
| Share | — | Layer 3+ protocols (IP, TCP/UDP) |
| Examples | Office switch network | The Internet, multi-site company |

> LANs and WANs differ at **Layers 1–2** but use the **same Layer 3+ protocols**. WANs are typically owned by providers like AT&T, Verizon, Comcast.

---

## &#127757; WAN Selection Factors

Choosing a WAN technology depends on:

- **Traffic load** / required bandwidth
- **Budget**
- **Geographic breadth**
- Commercially **available** technology at the site
- **Latency** and reliability needs (**SLA**)

---

## &#128204; Key Boundary Terms

| Term | Meaning |
|------|---------|
| **Demarc** | Boundary between provider and customer responsibility |
| **Last mile** | Link from provider to the customer premises |
| **CSU/DSU** | Terminates a digital leased line (T1/T3) to the router |
| **CPE** | Customer Premises Equipment |

---

## &#128204; The Router's Role

Routers manage **internetwork communication** — forwarding packets between separate networks using IP, choosing paths, and tying LANs into the WAN/Internet.

---

> [!TIP]
> **Key idea —** A **WAN** spans wide distances, is provider-owned, and differs from a LAN at **Layers 1–2**. Selection balances **bandwidth, budget, geography, availability, latency, and SLA**.

See also: [WAN Technologies](12-02-wan-technologies.md), [Routing](12-03-routing.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Fault Tolerance &amp; Recovery](11-04-fault-tolerance-and-recovery.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 12 Exercise](../02-exercises/12-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [WAN Technologies](12-02-wan-technologies.md)

</div>
<!-- /course-footer -->
