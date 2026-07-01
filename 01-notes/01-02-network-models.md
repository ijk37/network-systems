# 01-02: Network Models & Topologies

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/01-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 01: Introduction to Networking | 01-02 |
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

## Key Idea

> **Physical topology = the wiring diagram; logical topology = the traffic flow.** Modern LANs are physically star (to a switch) and can be logically segmented (e.g., with VLANs — see [Virtual LAN (VLAN)](08-12-vlan.md)).

See also: [The OSI Model](01-03-osi-model.md), [Network Hardware Devices](01-04-network-hardware.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="01-01-what-is-network.md">What Is a Network?</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/01-exercise.md">Module 01 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="01-03-osi-model.md">The OSI Model</a>

</div>
<!-- /course-footer -->
