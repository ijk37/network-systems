# &#9997; 12: Wide Area Networks — Exercises

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_12-Wide_Area_Networks-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 12: Wide Area Networks"> <img src="https://img.shields.io/badge/12_questions-C8901A?style=for-the-badge&labelColor=7E0E23" alt="12 questions">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../01-notes/12-01-wan-fundamentals.md) [![All Exercises](https://img.shields.io/badge/All_Exercises-3B2530?style=flat-square)](README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

> [!TIP]
> **Practice —** try each question first, then expand the answer to check your reasoning.

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/12-01-wan-fundamentals.md) if you get stuck.

---

### &#127757; Q1. At which OSI layers do LANs and WANs differ, and which do they share?

<details>
<summary><strong>Show answer</strong></summary>

They **differ at Layers 1–2** (media, access methods, framing) and **share Layers 3+** (IP, TCP/UDP).
</details>

---

### &#129517; Q2. Match the metric/behavior to the routing protocol: hop count (max 15), cost/bandwidth link-state, between autonomous systems.

<details>
<summary><strong>Show answer</strong></summary>

- Hop count (max 15) → **RIP**
- Cost/bandwidth, link-state → **OSPF**
- Between autonomous systems → **BGP**
</details>

---

### &#128161; Q3. A router learns a route to the same network via OSPF and via a static route. Which is installed, and why?

<details>
<summary><strong>Show answer</strong></summary>

The **static route** — it has a lower **administrative distance** (static = 1 vs. OSPF = 110), so it's more trusted.
</details>

---

### &#127757; Q4. Compare hub-and-spoke and full-mesh WAN topologies (redundancy vs. cost).

<details>
<summary><strong>Show answer</strong></summary>

- **Hub-and-spoke** — cheap and simple, but the hub is a single point of failure and spoke-to-spoke traffic takes two hops.
- **Full mesh** — every site directly linked → maximum redundancy and optimal paths, but expensive/complex (many links).
</details>

---

### &#128313; Q5. A branch office needs cheap, encrypted connectivity to HQ over the Internet. What fits?

<details>
<summary><strong>Show answer</strong></summary>

A **site-to-site VPN** (typically IPsec) over the public Internet — far cheaper than a dedicated circuit, with an encrypted tunnel. **SD-WAN** can add multi-link steering/failover.
</details>

---

### &#128313; Q6. Rank by typical bandwidth/latency for last-mile access: dial-up, DSL, fiber (FTTH), satellite (geostationary).

<details>
<summary><strong>Show answer</strong></summary>

Best → worst: **Fiber (FTTH) > DSL > Satellite (geostationary — high latency) > Dial-up.**
</details>

---

### &#10067; Q7. What is the "last mile," and what is a CSU/DSU used for?

<details>
<summary><strong>Show answer</strong></summary>

- **Last mile** — the connection from the provider's network to the customer premises.
- **CSU/DSU** — terminates a digital leased line (T1/T3), converting between the router and the WAN circuit's signaling.
</details>

---

### &#128313; Q8. How does MPLS forward traffic, and what advantage does that give?

<details>
<summary><strong>Show answer</strong></summary>

MPLS forwards by **labels** (label swapping) rather than full IP lookups at each hop, enabling **fast forwarding, QoS, and traffic engineering** across the provider network.
</details>

---

### &#10067; Q9. What is a default route, and when is it used?

<details>
<summary><strong>Show answer</strong></summary>

`0.0.0.0/0` — the **gateway of last resort**. It matches any destination not otherwise in the routing table (commonly the route toward the ISP/Internet from a stub site).
</details>

---

### &#128313; Q10. Contrast single-homed and multihomed Internet connectivity.

<details>
<summary><strong>Show answer</strong></summary>

- **Single-homed** — one ISP, one link; no redundancy.
- **Multihomed** — multiple ISPs/links (often via BGP) for failover and load sharing.
</details>

---

### &#128161; Q11. Which PPP authentication method is secure, and why?

<details>
<summary><strong>Show answer</strong></summary>

**CHAP** — it uses a challenge-response **hash**, so the password is never sent in clear text (and it re-authenticates periodically). **PAP** sends credentials in plaintext and is insecure.
</details>

---

### &#10067; Q12. What is convergence, and why does faster convergence matter?

<details>
<summary><strong>Show answer</strong></summary>

Convergence is when **all routers agree** on the topology after a change. Faster convergence (OSPF/EIGRP over RIP) means **less disruption** and quicker rerouting during failures.
</details>

---

⬅️ **Prev:** [Module 11](11-exercise.md)  ·  [📚 All Exercises](README.md)

## &#129517; Bonus Scenario Practice

### &#129513; Case A: Route Selection

A router knows these routes:

- `10.0.0.0/8` through OSPF
- `10.10.0.0/16` through RIP
- `10.10.5.0/24` as a static route

Which route is used for destination `10.10.5.44`, and why?

<details>
<summary><strong>Show answer</strong></summary>

The static `10.10.5.0/24` route is used because it is the longest prefix match. Route specificity is checked before administrative distance.
</details>

---

### &#129513; Case B: WAN Choice

A rural branch office needs connectivity for email and cloud apps, but fiber and cable are unavailable. Latency-sensitive voice calls perform poorly over the current satellite link. What should the design discussion focus on?

<details>
<summary><strong>Show answer</strong></summary>

The discussion should focus on latency, not just bandwidth. Geostationary satellite links can have high delay, which hurts voice and real-time applications. Options may include low-earth-orbit satellite, fixed wireless, cellular, or SD-WAN with multiple available links.
</details>

---

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [11: Network Performance &amp; Recovery — Exercises](11-exercise.md) &nbsp;|&nbsp; [All Exercises](README.md) &nbsp;|&nbsp; [Module 12 Notes](../01-notes/12-01-wan-fundamentals.md)

</div>
<!-- /course-footer -->
