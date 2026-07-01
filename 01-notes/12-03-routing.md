# 12-03: Routing

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

See also: [[12-01-wan-fundamentals]], [[08-06-subnetting-basics]]
