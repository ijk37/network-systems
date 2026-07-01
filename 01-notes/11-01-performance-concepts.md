# 11-01: Performance Concepts & QoS

## Key Metrics

| Metric | Definition |
|--------|------------|
| **Bandwidth** | Maximum theoretical capacity of a link |
| **Throughput** | Actual achieved data rate (always ≤ bandwidth) |
| **Latency** | Delay for data to travel (often round-trip time) |
| **Jitter** | Variation in latency between packets |
| **Packet loss** | Percentage of packets dropped |

> **Bandwidth = the pipe's size; throughput = what actually flows through it.**

---

## What Hurts Real-Time Traffic

VoIP/video are most sensitive to **latency, jitter, and packet loss**. A late retransmitted voice packet is useless — so these apps use **UDP** and rely on **QoS**.

---

## Quality of Service (QoS)

**QoS** prioritizes important traffic during congestion.

| Mechanism | Purpose |
|-----------|---------|
| **Classification/marking** | Tag traffic — **DSCP** (L3) or **CoS/802.1p** (L2) |
| **Queuing** | Priority/low-latency queue for voice |
| **Traffic shaping** | Buffer/smooth traffic to a rate |
| **Traffic policing** | Drop/remark traffic over the rate |

Shaping **buffers** excess; policing **drops** it.

---

## Bottlenecks

A **bottleneck** is the point of least capacity that caps end-to-end performance (a slow link, overloaded router, or saturated server). Monitoring locates it for targeted upgrades.

---

## Key Idea

> Know **bandwidth vs. throughput** and **latency/jitter/loss**. Use **QoS** (mark with DSCP, prioritize voice, shape/police) to protect real-time traffic and find the **bottleneck**.

See also: [Network Monitoring](11-02-monitoring.md), [TCP vs. UDP](04-02-tcp-vs-udp.md)

<!-- nav -->

---

⬅️ **Prev:** [Switch & Port Hardening](10-05-switch-hardening.md)  ·  [📚 All Notes](README.md)  ·  **Next:** [Network Monitoring](11-02-monitoring.md) ➡️
