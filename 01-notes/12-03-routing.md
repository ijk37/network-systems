# &#128216; 12-03: Routing

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_12-Wide_Area_Networks-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 12: Wide Area Networks">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/12-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#129517; Static vs. Dynamic Routing

| | **Static** | **Dynamic** |
|---|-----------|-------------|
| Configured | Manually | Protocols share routes |
| Adapts to change | No | Yes (auto-reroutes) |
| Overhead | None | CPU/bandwidth |
| Best for | Small/stub networks, default route | Large/changing networks |

A **default route** (`0.0.0.0/0`) is the "gateway of last resort" for destinations not in the table.

---

## &#129517; Dynamic Routing Protocols

| Protocol | Type | Metric | Scope |
|----------|------|--------|-------|
| **RIP** | Distance-vector | Hop count (max 15) | Small |
| **OSPF** | Link-state | Cost (bandwidth) | Enterprise IGP |
| **EIGRP** | Advanced DV (Cisco) | Bandwidth + delay | Enterprise IGP |
| **BGP** | Path-vector | Path attributes | **Between autonomous systems (Internet)** |

- **IGP** (RIP/OSPF/EIGRP) = within one organization.
- **EGP** (**BGP**) = between organizations — the routing protocol of the Internet.

---

## &#128204; Administrative Distance (AD)

When multiple sources offer a route, the router prefers the **lowest AD** (most trusted):

| Source | AD |
|--------|-----|
| Connected | 0 |
| Static | 1 |
| EIGRP | 90 |
| OSPF | 110 |
| RIP | 120 |

---

## &#128204; Convergence

**Convergence** is when all routers agree on the topology after a change. Faster convergence (OSPF/EIGRP > RIP) means less disruption during failures.

---

## &#129517; Scenario: Which Route Wins?

Routers choose routes by using a consistent order:

1. **Longest prefix match** wins first. A `/24` route beats a `/16` route for a matching destination.
2. If prefix length ties, the route with the **lowest administrative distance** is preferred.
3. If AD ties, the protocol metric decides, such as OSPF cost or RIP hop count.

Example: a router has `10.10.0.0/16` via OSPF and `10.10.5.0/24` as a static route. Traffic to `10.10.5.25` uses the `/24` static route because it is more specific, even before comparing AD.

This is why default routes (`0.0.0.0/0`) are used only when no more-specific route exists.

---

> [!TIP]
> **Key idea —** **Static** for small/stub; **dynamic** for scale. **OSPF/EIGRP** = interior; **BGP** = between autonomous systems (Internet). Ties are broken by **administrative distance** (lower = preferred).

See also: [WAN Fundamentals](12-01-wan-fundamentals.md), [Subnetting Basics](08-06-subnetting-basics.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [WAN Technologies](12-02-wan-technologies.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 12 Exercise](../02-exercises/12-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [WAN Topologies &amp; Modern WAN](12-04-wan-topologies.md)

</div>
<!-- /course-footer -->
