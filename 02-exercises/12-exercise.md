# 12: Wide Area Networks — Exercises

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/12-01-wan-fundamentals.md) if you get stuck.

---

### Q1. At which OSI layers do LANs and WANs differ, and which do they share?

<details><summary>▶ Show answer</summary>

They **differ at Layers 1–2** (media, access methods, framing) and **share Layers 3+** (IP, TCP/UDP).
</details>

---

### Q2. Match the metric/behavior to the routing protocol: hop count (max 15), cost/bandwidth link-state, between autonomous systems.

<details><summary>▶ Show answer</summary>

- Hop count (max 15) → **RIP**
- Cost/bandwidth, link-state → **OSPF**
- Between autonomous systems → **BGP**
</details>

---

### Q3. A router learns a route to the same network via OSPF and via a static route. Which is installed, and why?

<details><summary>▶ Show answer</summary>

The **static route** — it has a lower **administrative distance** (static = 1 vs. OSPF = 110), so it's more trusted.
</details>

---

### Q4. Compare hub-and-spoke and full-mesh WAN topologies (redundancy vs. cost).

<details><summary>▶ Show answer</summary>

- **Hub-and-spoke** — cheap and simple, but the hub is a single point of failure and spoke-to-spoke traffic takes two hops.
- **Full mesh** — every site directly linked → maximum redundancy and optimal paths, but expensive/complex (many links).
</details>

---

### Q5. A branch office needs cheap, encrypted connectivity to HQ over the Internet. What fits?

<details><summary>▶ Show answer</summary>

A **site-to-site VPN** (typically IPsec) over the public Internet — far cheaper than a dedicated circuit, with an encrypted tunnel. **SD-WAN** can add multi-link steering/failover.
</details>

---

### Q6. Rank by typical bandwidth/latency for last-mile access: dial-up, DSL, fiber (FTTH), satellite (geostationary).

<details><summary>▶ Show answer</summary>

Best → worst: **Fiber (FTTH) > DSL > Satellite (geostationary — high latency) > Dial-up.**
</details>

---

### Q7. What is the "last mile," and what is a CSU/DSU used for?

<details><summary>▶ Show answer</summary>

- **Last mile** — the connection from the provider's network to the customer premises.
- **CSU/DSU** — terminates a digital leased line (T1/T3), converting between the router and the WAN circuit's signaling.
</details>

---

### Q8. How does MPLS forward traffic, and what advantage does that give?

<details><summary>▶ Show answer</summary>

MPLS forwards by **labels** (label swapping) rather than full IP lookups at each hop, enabling **fast forwarding, QoS, and traffic engineering** across the provider network.
</details>

---

### Q9. What is a default route, and when is it used?

<details><summary>▶ Show answer</summary>

`0.0.0.0/0` — the **gateway of last resort**. It matches any destination not otherwise in the routing table (commonly the route toward the ISP/Internet from a stub site).
</details>

---

### Q10. Contrast single-homed and multihomed Internet connectivity.

<details><summary>▶ Show answer</summary>

- **Single-homed** — one ISP, one link; no redundancy.
- **Multihomed** — multiple ISPs/links (often via BGP) for failover and load sharing.
</details>

---

### Q11. Which PPP authentication method is secure, and why?

<details><summary>▶ Show answer</summary>

**CHAP** — it uses a challenge-response **hash**, so the password is never sent in clear text (and it re-authenticates periodically). **PAP** sends credentials in plaintext and is insecure.
</details>

---

### Q12. What is convergence, and why does faster convergence matter?

<details><summary>▶ Show answer</summary>

Convergence is when **all routers agree** on the topology after a change. Faster convergence (OSPF/EIGRP over RIP) means **less disruption** and quicker rerouting during failures.
</details>

---

⬅️ **Prev:** [Module 11](11-exercise.md)  ·  [📚 All Exercises](README.md)
