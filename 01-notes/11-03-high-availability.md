# &#128216; 11-03: High Availability & Redundancy

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_11-Network_Performance_and_Recovery-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 11: Network Performance and Recovery">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/11-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128204; Availability ("Nines")

Availability is expressed as an uptime percentage:

| Availability | Downtime/year |
|--------------|---------------|
| 99% | ~3.65 days |
| 99.9% ("three nines") | ~8.76 hours |
| 99.999% ("five nines") | ~5.26 minutes |

Higher availability requires more **redundancy** — eliminating **single points of failure (SPOFs)**.

---

## &#128204; Redundancy Techniques

| Technique | Protects against |
|-----------|------------------|
| **Redundant power supplies / UPS / generator** | Power loss |
| **Dual uplinks / redundant switches** | Link/device failure |
| **First-hop redundancy (HSRP/VRRP/GLBP)** | Gateway failure |
| **Link aggregation (LACP/EtherChannel)** | Single-link failure + more bandwidth |
| **STP/RSTP** | Layer 2 loops while keeping backup paths |
| **Clustering (active-passive / active-active)** | Server failure |

---

## &#128204; First-Hop Redundancy Protocols

**HSRP/VRRP** share a **virtual gateway IP/MAC** across two routers; if the active one fails, the standby takes over — hosts keep their gateway.

---

## &#128204; Load Balancing

Distributes traffic across multiple servers/paths — improving throughput **and** availability (one server can fail without outage).

---

## &#128204; Failover

Automatic switching to a redundant/standby system when the primary fails, minimizing downtime.

---

> [!TIP]
> **Key idea —** High availability = **remove SPOFs** with redundancy: dual power/links, **FHRP** gateways, **LACP**, **STP**, **clustering**, and **load balancing**, with automatic **failover**.

See also: [Fault Tolerance & Recovery](11-04-fault-tolerance-and-recovery.md), [WAN Topologies & Modern WAN](12-04-wan-topologies.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="11-02-monitoring.md">Network Monitoring</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/11-exercise.md">Module 11 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="11-04-fault-tolerance-and-recovery.md">Fault Tolerance &amp; Recovery</a>

</div>
<!-- /course-footer -->
