# &#128216; 11-01: Performance Concepts & QoS

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_11-Network_Performance_and_Recovery-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 11: Network Performance and Recovery">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/11-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128204; Key Metrics

| Metric | Definition |
|--------|------------|
| **Bandwidth** | Maximum theoretical capacity of a link |
| **Throughput** | Actual achieved data rate (always ≤ bandwidth) |
| **Latency** | Delay for data to travel (often round-trip time) |
| **Jitter** | Variation in latency between packets |
| **Packet loss** | Percentage of packets dropped |

> **Bandwidth = the pipe's size; throughput = what actually flows through it.**

---

## &#128204; What Hurts Real-Time Traffic

VoIP/video are most sensitive to **latency, jitter, and packet loss**. A late retransmitted voice packet is useless — so these apps use **UDP** and rely on **QoS**.

---

## &#128204; Quality of Service (QoS)

**QoS** prioritizes important traffic during congestion.

| Mechanism | Purpose |
|-----------|---------|
| **Classification/marking** | Tag traffic — **DSCP** (L3) or **CoS/802.1p** (L2) |
| **Queuing** | Priority/low-latency queue for voice |
| **Traffic shaping** | Buffer/smooth traffic to a rate |
| **Traffic policing** | Drop/remark traffic over the rate |

Shaping **buffers** excess; policing **drops** it.

---

## &#128204; Bottlenecks

A **bottleneck** is the point of least capacity that caps end-to-end performance (a slow link, overloaded router, or saturated server). Monitoring locates it for targeted upgrades.

---

> [!TIP]
> **Key idea —** Know **bandwidth vs. throughput** and **latency/jitter/loss**. Use **QoS** (mark with DSCP, prioritize voice, shape/police) to protect real-time traffic and find the **bottleneck**.

See also: [Network Monitoring](11-02-monitoring.md), [TCP vs. UDP](04-02-tcp-vs-udp.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="10-05-switch-hardening.md">Switch &amp; Port Hardening</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/11-exercise.md">Module 11 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="11-02-monitoring.md">Network Monitoring</a>

</div>
<!-- /course-footer -->
