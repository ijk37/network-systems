# 12-04: WAN Topologies & Modern WAN

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

## Key Idea

> WAN topologies trade **cost vs. redundancy**: hub-and-spoke (cheap, SPOF) → partial mesh → full mesh (redundant, costly). **Multihoming** adds ISP redundancy; **SD-WAN** and **VPNs** modernize and cut cost.

See also: [WAN Technologies](12-02-wan-technologies.md), [High Availability & Redundancy](11-03-high-availability.md)

<!-- nav -->

---

⬅️ **Prev:** [Routing](12-03-routing.md)  ·  [📚 All Notes](README.md)
