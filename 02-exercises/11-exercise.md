# 11: Network Performance & Recovery — Exercises

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_11-Network_Performance_and_Recovery-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 11: Network Performance and Recovery"> <img src="https://img.shields.io/badge/12_questions-C8901A?style=for-the-badge&labelColor=7E0E23" alt="12 questions">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="../01-notes/11-01-performance-concepts.md"><img src="https://img.shields.io/badge/Notes-3B2530?style=flat-square" alt="Notes"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Exercises-3B2530?style=flat-square" alt="All Exercises"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

> [!TIP]
> **Practice —** try each question first, then expand the answer to check your reasoning.

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/11-01-performance-concepts.md) if you get stuck.

---

### Q1. Distinguish bandwidth, throughput, latency, and jitter.

<details>
<summary><strong>Show answer</strong></summary>

- **Bandwidth** — max theoretical capacity.
- **Throughput** — actual achieved rate (≤ bandwidth).
- **Latency** — delay for data to travel.
- **Jitter** — variation in latency between packets.
</details>

---

### Q2. VoIP audio is choppy. Which three metrics are most likely to blame, and which QoS action helps?

<details>
<summary><strong>Show answer</strong></summary>

**Latency, jitter, and packet loss.** Apply **QoS** — mark voice (DSCP EF) and give it a **priority/low-latency queue**.
</details>

---

### Q3. Two routers should present a single, always-available gateway to hosts. Which protocol family?

<details>
<summary><strong>Show answer</strong></summary>

A **First-Hop Redundancy Protocol** — **HSRP / VRRP** (or GLBP). They share a virtual gateway IP/MAC; a standby takes over if the active router fails.
</details>

---

### Q4. What does STP prevent, and how?

<details>
<summary><strong>Show answer</strong></summary>

**Layer 2 switching loops** (and the broadcast storms they cause). STP blocks redundant paths, keeping one active while a backup stands ready if the active link fails.
</details>

---

### Q5. What does link aggregation (LACP/EtherChannel) achieve?

<details>
<summary><strong>Show answer</strong></summary>

Bundles multiple physical links into **one logical link** for **more bandwidth** and **redundancy** — if one member fails, traffic continues on the rest.
</details>

---

### Q6. Compare full, incremental, and differential backups by what they copy and what a restore needs.

<details>
<summary><strong>Show answer</strong></summary>

- **Full** — everything; restore needs just the full.
- **Incremental** — changes since the **last backup**; restore needs full + **all** incrementals.
- **Differential** — changes since the **last full**; restore needs full + the **latest** differential.
</details>

---

### Q7. Order hot, warm, and cold DR sites by recovery speed and cost.

<details>
<summary><strong>Show answer</strong></summary>

Fastest/most expensive → slowest/cheapest: **Hot → Warm → Cold.** (Hot = running with current data; cold = space/power only.)
</details>

---

### Q8. RAID protects against drive failure — but which RAID level mirrors data, and why isn't RAID a backup?

<details>
<summary><strong>Show answer</strong></summary>

**RAID 1** mirrors data across two drives (either can fail). RAID isn't a backup because it doesn't protect against deletion, corruption, or ransomware — those changes are written to all drives instantly.
</details>

---

### Q9. Which protocols/tools would you use to (a) poll device metrics, (b) analyze traffic flows, (c) centralize logs?

<details>
<summary><strong>Show answer</strong></summary>

- (a) **SNMP** (use v3 for security)
- (b) **NetFlow / IPFIX / sFlow**
- (c) **Syslog** (often feeding a **SIEM**)
</details>

---

### Q10. What is a network baseline, and why capture one?

<details>
<summary><strong>Show answer</strong></summary>

A record of **normal** performance (utilization, latency, errors). Comparing current metrics to it reveals anomalies, trends, and when to upgrade — you can't spot "abnormal" without knowing "normal."
</details>

---

### Q11. Express "five nines" availability and roughly how much downtime it allows per year.

<details>
<summary><strong>Show answer</strong></summary>

**99.999%** uptime → about **5 minutes** of downtime per year. Achieving it requires substantial redundancy and fast failover.
</details>

---

### Q12. What is failover, and how does it differ from load balancing?

<details>
<summary><strong>Show answer</strong></summary>

- **Failover** — automatic switch to a standby system when the primary fails (availability).
- **Load balancing** — distributes traffic across multiple active servers/paths (performance + availability). They're often combined.
</details>

---

⬅️ **Prev:** [Module 10](10-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 12 — Wide Area Networks](12-exercise.md) ➡️

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="10-exercise.md">10: Security in Network Design — Exercises</a> &nbsp;|&nbsp; <a href="README.md">All Exercises</a> &nbsp;|&nbsp; <a href="../01-notes/11-01-performance-concepts.md">Module 11 Notes</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="12-exercise.md">12: Wide Area Networks — Exercises</a>

</div>
<!-- /course-footer -->
