# 12: Wide Area Networks — Exercises

## Questions

1. At which OSI layers do LANs and WANs differ, and which layers do they share?
2. Match the metric/behavior to the routing protocol: hop count (max 15), cost/bandwidth link-state, between autonomous systems.
3. A router learns a route to the same network via OSPF and via a static route. Which is installed, and why?
4. Compare hub-and-spoke and full-mesh WAN topologies (redundancy vs. cost).
5. A branch office needs cheap, encrypted connectivity to HQ over the Internet. What solution fits?
6. Rank by typical bandwidth/latency for last-mile access: dial-up, DSL, fiber (FTTH), satellite (geostationary).

---

## Solutions

### 1. LAN vs. WAN layers
They **differ at Layers 1–2** (media, access methods, framing) and **share Layers 3+** (IP, TCP/UDP).

### 2. Routing protocols
- Hop count (max 15) → **RIP**
- Cost/bandwidth, link-state → **OSPF**
- Between autonomous systems → **BGP**

### 3. OSPF vs. static
The **static route** is installed — it has a lower **administrative distance** (static = 1 vs. OSPF = 110), so it's more trusted.

### 4. Hub-and-spoke vs. full mesh
- **Hub-and-spoke** — cheap and simple, but the hub is a single point of failure and spoke-to-spoke traffic takes two hops.
- **Full mesh** — every site directly linked → maximum redundancy and optimal paths, but expensive and complex (many links).

### 5. Cheap encrypted branch link
A **site-to-site VPN** (typically IPsec) over the public Internet — far cheaper than a dedicated circuit, with an encrypted tunnel. (**SD-WAN** can add multi-link steering.)

### 6. Last-mile ranking
Best → worst (bandwidth/latency): **Fiber (FTTH) > DSL > Satellite (geostationary, high latency) > Dial-up**.
