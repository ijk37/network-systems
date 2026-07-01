# 12-03: Routing

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/12-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 12: Wide Area Networks | 12-03 |
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

## Key Idea

> **Static** for small/stub; **dynamic** for scale. **OSPF/EIGRP** = interior; **BGP** = between autonomous systems (Internet). Ties are broken by **administrative distance** (lower = preferred).

See also: [WAN Fundamentals](12-01-wan-fundamentals.md), [Subnetting Basics](08-06-subnetting-basics.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="12-02-wan-technologies.md">WAN Technologies</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/12-exercise.md">Module 12 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="12-04-wan-topologies.md">WAN Topologies &amp; Modern WAN</a>

</div>
<!-- /course-footer -->
