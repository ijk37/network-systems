# 01-02: Network Models & Topologies

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_01-Introduction_to_Networking-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 01: Introduction to Networking">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/01-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## Topology

**Topology** describes how the parts of a network fit and work together.

- **Physical topology** — the actual hardware layout: devices, cables, and how they physically connect.
- **Logical topology** — how software controls access and how data logically flows across the network.

> Two networks can share the same *physical* topology but behave differently at the *logical* level.

---

## Physical Topologies

| Topology | Description | Pros | Cons |
|----------|-------------|------|------|
| **Star** | All nodes connect to a central device (switch) | One cable fault affects one node; easy to manage | Central device is a single point of failure |
| **Bus** | All nodes share one backbone cable | Cheap, simple (legacy) | One break kills the whole segment |
| **Ring** | Each node connects to two neighbors in a loop | Predictable performance (legacy) | A break can disrupt the ring |
| **Mesh** | Nodes interconnect directly (full or partial) | High redundancy/fault tolerance | Expensive, many links |

The **star** topology dominates modern LANs (every device to a switch). **Mesh** is common in WAN cores for redundancy.

---

## Hybrid Topologies

Real networks combine topologies — e.g., a **star-of-stars** (hierarchical star) where multiple switches connect up to a core switch. Structured cabling assumes a hierarchical star.

---

## Logical Models Recap

- **Peer-to-peer** — no central control; each host shares its own resources.
- **Client-server** — a NOS on servers centrally controls access.

(See [What Is a Network?](01-01-what-is-network.md) for the full comparison.)

---

> [!TIP]
> **Key idea —** **Physical topology = the wiring diagram; logical topology = the traffic flow.** Modern LANs are physically star (to a switch) and can be logically segmented (e.g., with VLANs — see [Virtual LAN (VLAN)](08-12-vlan.md)).

See also: [The OSI Model](01-03-osi-model.md), [Network Hardware Devices](01-04-network-hardware.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="01-01-what-is-network.md">What Is a Network?</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/01-exercise.md">Module 01 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="01-03-osi-model.md">The OSI Model</a>

</div>
<!-- /course-footer -->
