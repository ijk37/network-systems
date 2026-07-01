# 11-03: High Availability & Redundancy

## Availability ("Nines")

Availability is expressed as an uptime percentage:

| Availability | Downtime/year |
|--------------|---------------|
| 99% | ~3.65 days |
| 99.9% ("three nines") | ~8.76 hours |
| 99.999% ("five nines") | ~5.26 minutes |

Higher availability requires more **redundancy** — eliminating **single points of failure (SPOFs)**.

---

## Redundancy Techniques

| Technique | Protects against |
|-----------|------------------|
| **Redundant power supplies / UPS / generator** | Power loss |
| **Dual uplinks / redundant switches** | Link/device failure |
| **First-hop redundancy (HSRP/VRRP/GLBP)** | Gateway failure |
| **Link aggregation (LACP/EtherChannel)** | Single-link failure + more bandwidth |
| **STP/RSTP** | Layer 2 loops while keeping backup paths |
| **Clustering (active-passive / active-active)** | Server failure |

---

## First-Hop Redundancy Protocols

**HSRP/VRRP** share a **virtual gateway IP/MAC** across two routers; if the active one fails, the standby takes over — hosts keep their gateway.

---

## Load Balancing

Distributes traffic across multiple servers/paths — improving throughput **and** availability (one server can fail without outage).

---

## Failover

Automatic switching to a redundant/standby system when the primary fails, minimizing downtime.

---

## Key Idea

> High availability = **remove SPOFs** with redundancy: dual power/links, **FHRP** gateways, **LACP**, **STP**, **clustering**, and **load balancing**, with automatic **failover**.

See also: [[11-04-fault-tolerance-and-recovery]], [[12-04-wan-topologies]]
