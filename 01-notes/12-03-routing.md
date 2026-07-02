# 12-03: Routing

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_12-Wide_Area_Networks-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 12: Wide Area Networks">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/12-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## Static vs. Dynamic Routing

| | **Static** | **Dynamic** |
|---|-----------|-------------|
| Configured | Manually | Protocols share routes |
| Adapts to change | No | Yes (auto-reroutes) |
| Overhead | None | CPU/bandwidth |
| Best for | Small/stub networks, default route | Large/changing networks |

A **default route** (`0.0.0.0/0`) is the "gateway of last resort" for destinations not in the table.

---

## Dynamic Routing Protocols

| Protocol | Type | Metric | Scope |
|----------|------|--------|-------|
| **RIP** | Distance-vector | Hop count (max 15) | Small |
| **OSPF** | Link-state | Cost (bandwidth) | Enterprise IGP |
| **EIGRP** | Advanced DV (Cisco) | Bandwidth + delay | Enterprise IGP |
| **BGP** | Path-vector | Path attributes | **Between autonomous systems (Internet)** |

- **IGP** (RIP/OSPF/EIGRP) = within one organization.
- **EGP** (**BGP**) = between organizations — the routing protocol of the Internet.

---

## Administrative Distance (AD)

When multiple sources offer a route, the router prefers the **lowest AD** (most trusted):

| Source | AD |
|--------|-----|
| Connected | 0 |
| Static | 1 |
| EIGRP | 90 |
| OSPF | 110 |
| RIP | 120 |

---

## Convergence

**Convergence** is when all routers agree on the topology after a change. Faster convergence (OSPF/EIGRP > RIP) means less disruption during failures.

---

> [!TIP]
> **Key idea —** **Static** for small/stub; **dynamic** for scale. **OSPF/EIGRP** = interior; **BGP** = between autonomous systems (Internet). Ties are broken by **administrative distance** (lower = preferred).

See also: [WAN Fundamentals](12-01-wan-fundamentals.md), [Subnetting Basics](08-06-subnetting-basics.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="12-02-wan-technologies.md">WAN Technologies</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/12-exercise.md">Module 12 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="12-04-wan-topologies.md">WAN Topologies &amp; Modern WAN</a>

</div>
<!-- /course-footer -->
