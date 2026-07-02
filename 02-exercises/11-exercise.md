# &#9997; 11: Network Performance & Recovery — Exercises

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_11-Network_Performance_and_Recovery-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 11: Network Performance and Recovery"> <img src="https://img.shields.io/badge/12_questions-C8901A?style=for-the-badge&labelColor=7E0E23" alt="12 questions">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../01-notes/11-01-performance-concepts.md) [![All Exercises](https://img.shields.io/badge/All_Exercises-3B2530?style=flat-square)](README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

> [!TIP]
> **Practice —** try each question first, then expand the answer to check your reasoning.

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/11-01-performance-concepts.md) if you get stuck.

---

### &#128313; Q1. Distinguish bandwidth, throughput, latency, and jitter.

<details>
<summary><strong>Show answer</strong></summary>

- **Bandwidth** — max theoretical capacity.
- **Throughput** — actual achieved rate (≤ bandwidth).
- **Latency** — delay for data to travel.
- **Jitter** — variation in latency between packets.
</details>

---

### &#128313; Q2. VoIP audio is choppy. Which three metrics are most likely to blame, and which QoS action helps?

<details>
<summary><strong>Show answer</strong></summary>

**Latency, jitter, and packet loss.** Apply **QoS** — mark voice (DSCP EF) and give it a **priority/low-latency queue**.
</details>

---

### &#128313; Q3. Two routers should present a single, always-available gateway to hosts. Which protocol family?

<details>
<summary><strong>Show answer</strong></summary>

A **First-Hop Redundancy Protocol** — **HSRP / VRRP** (or GLBP). They share a virtual gateway IP/MAC; a standby takes over if the active router fails.
</details>

---

### &#128313; Q4. What does STP prevent, and how?

<details>
<summary><strong>Show answer</strong></summary>

**Layer 2 switching loops** (and the broadcast storms they cause). STP blocks redundant paths, keeping one active while a backup stands ready if the active link fails.
</details>

---

### &#128313; Q5. What does link aggregation (LACP/EtherChannel) achieve?

<details>
<summary><strong>Show answer</strong></summary>

Bundles multiple physical links into **one logical link** for **more bandwidth** and **redundancy** — if one member fails, traffic continues on the rest.
</details>

---

### &#128313; Q6. Compare full, incremental, and differential backups by what they copy and what a restore needs.

<details>
<summary><strong>Show answer</strong></summary>

- **Full** — everything; restore needs just the full.
- **Incremental** — changes since the **last backup**; restore needs full + **all** incrementals.
- **Differential** — changes since the **last full**; restore needs full + the **latest** differential.
</details>

---

### &#128313; Q7. Order hot, warm, and cold DR sites by recovery speed and cost.

<details>
<summary><strong>Show answer</strong></summary>

Fastest/most expensive → slowest/cheapest: **Hot → Warm → Cold.** (Hot = running with current data; cold = space/power only.)
</details>

---

### &#128161; Q8. RAID protects against drive failure — but which RAID level mirrors data, and why isn't RAID a backup?

<details>
<summary><strong>Show answer</strong></summary>

**RAID 1** mirrors data across two drives (either can fail). RAID isn't a backup because it doesn't protect against deletion, corruption, or ransomware — those changes are written to all drives instantly.
</details>

---

### &#129520; Q9. Which protocols/tools would you use to (a) poll device metrics, (b) analyze traffic flows, (c) centralize logs?

<details>
<summary><strong>Show answer</strong></summary>

- (a) **SNMP** (use v3 for security)
- (b) **NetFlow / IPFIX / sFlow**
- (c) **Syslog** (often feeding a **SIEM**)
</details>

---

### &#10067; Q10. What is a network baseline, and why capture one?

<details>
<summary><strong>Show answer</strong></summary>

A record of **normal** performance (utilization, latency, errors). Comparing current metrics to it reveals anomalies, trends, and when to upgrade — you can't spot "abnormal" without knowing "normal."
</details>

---

### &#128313; Q11. Express "five nines" availability and roughly how much downtime it allows per year.

<details>
<summary><strong>Show answer</strong></summary>

**99.999%** uptime → about **5 minutes** of downtime per year. Achieving it requires substantial redundancy and fast failover.
</details>

---

### &#10067; Q12. What is failover, and how does it differ from load balancing?

<details>
<summary><strong>Show answer</strong></summary>

- **Failover** — automatic switch to a standby system when the primary fails (availability).
- **Load balancing** — distributes traffic across multiple active servers/paths (performance + availability). They're often combined.
</details>

---

⬅️ **Prev:** [Module 10](10-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 12 — Wide Area Networks](12-exercise.md) ➡️

## &#129517; Bonus Scenario Practice

### &#129513; Case A: Slow Network Complaint

Users say "the network is slow" every afternoon. SNMP graphs show WAN utilization near 95%, but you do not know which application is responsible. What tool or data source should you check next?

<details>
<summary><strong>Show answer</strong></summary>

Check NetFlow, IPFIX, or sFlow data. SNMP confirms the link is saturated, but flow data identifies top talkers, applications, protocols, and destinations so you can decide whether to tune QoS, block misuse, or upgrade capacity.
</details>

---

### &#129513; Case B: Availability Design

A business requires access to its web application during maintenance on one server. Which design is better: a single powerful server with backups, or two servers behind a load balancer? Explain.

<details>
<summary><strong>Show answer</strong></summary>

Two servers behind a load balancer provide better availability. Backups help recovery after data loss or failure, but they do not keep the service online during planned maintenance. Load balancing can drain traffic from one server while the other continues serving users.
</details>

---

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [10: Security in Network Design — Exercises](10-exercise.md) &nbsp;|&nbsp; [All Exercises](README.md) &nbsp;|&nbsp; [Module 11 Notes](../01-notes/11-01-performance-concepts.md) &nbsp;|&nbsp; <strong>Next:</strong> [12: Wide Area Networks — Exercises](12-exercise.md)

</div>
<!-- /course-footer -->
