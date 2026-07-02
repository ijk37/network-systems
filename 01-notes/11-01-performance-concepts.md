# &#128216; 11-01: Performance Concepts & QoS

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_11-Network_Performance_and_Recovery-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 11: Network Performance and Recovery">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/11-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

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

<div align="center" markdown>

<strong>Previous:</strong> [Switch &amp; Port Hardening](10-05-switch-hardening.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 11 Exercise](../02-exercises/11-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [Network Monitoring](11-02-monitoring.md)

</div>
<!-- /course-footer -->
