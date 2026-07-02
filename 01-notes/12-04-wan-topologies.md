# 12-04: WAN Topologies & Modern WAN

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_12-Wide_Area_Networks-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 12: Wide Area Networks">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/12-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## WAN Topologies

| Topology | Description | Trade-off |
|----------|-------------|-----------|
| **Point-to-point** | One dedicated link between two sites | Simple; no redundancy |
| **Hub-and-spoke** | Remote sites (spokes) connect via a central hub | Cost-effective; hub is a SPOF, spoke-to-spoke is 2 hops |
| **Full mesh** | Every site links to every other site | Max redundancy/optimal paths; expensive |
| **Partial mesh** | Some direct links between key sites | Balance of cost and redundancy |

---

## Redundancy at the Edge

| Term | Meaning |
|------|---------|
| **Single-homed** | One ISP, one link — no redundancy |
| **Multihomed** | Multiple ISPs/links (often via BGP) — failover + load sharing |

---

## SD-WAN

**SD-WAN** uses software-defined control to combine and **intelligently steer** traffic across multiple transports (MPLS, broadband, LTE) by application policy and link quality.

- Reduces reliance on costly **MPLS**
- Improves application performance and resilience
- Central management across many sites

---

## VPN as WAN

A **site-to-site VPN** over the public Internet provides WAN connectivity between offices at far lower cost than dedicated circuits — with an encrypted tunnel (usually IPsec), though performance depends on the Internet.

---

> [!TIP]
> **Key idea —** WAN topologies trade **cost vs. redundancy**: hub-and-spoke (cheap, SPOF) → partial mesh → full mesh (redundant, costly). **Multihoming** adds ISP redundancy; **SD-WAN** and **VPNs** modernize and cut cost.

See also: [WAN Technologies](12-02-wan-technologies.md), [High Availability & Redundancy](11-03-high-availability.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="12-03-routing.md">Routing</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/12-exercise.md">Module 12 Exercise</a>

</div>
<!-- /course-footer -->
