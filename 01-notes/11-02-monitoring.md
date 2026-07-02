# &#128216; 11-02: Network Monitoring

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_11-Network_Performance_and_Recovery-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 11: Network Performance and Recovery">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/11-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128161; Why Monitor?

Monitoring provides **visibility** to detect problems, plan capacity, and hold systems accountable. You can't manage what you can't see.

---

## &#129520; Monitoring Tools & Protocols

| Tool/Protocol | Purpose |
|---------------|---------|
| **SNMP** (161/162) | Poll device metrics (CPU, interface stats); receive **traps** |
| **NetFlow / IPFIX / sFlow** | Analyze traffic **flows** — who talks to whom, how much |
| **Syslog** (514) | Centralize device log messages |
| **SIEM** | Aggregate + correlate logs/events for security |
| **Port mirroring (SPAN)** | Copy traffic to a sniffer/IDS |
| **NMS** (PRTG, Zabbix, LibreNMS) | Graph utilization/availability over time |

> Use **SNMPv3** for authentication and encryption (v1/v2c use plaintext community strings).

---

## &#128204; Baselines

A **baseline** records normal performance so deviations (spikes, slowdowns, breaches) stand out by comparison. Establish one before you need it.

---

## &#128204; What to Watch

| Signal | Meaning |
|--------|---------|
| Sustained ~90–100% link utilization | Congestion / bottleneck |
| Rising interface errors/drops | Cabling or congestion problem |
| CPU/memory spikes on devices | Overload or attack |
| Log anomalies | Possible security incident |

---

## &#129517; Scenario: Choosing the Right Evidence

Different monitoring tools answer different questions during an incident.

| Question | Best evidence |
| --- | --- |
| Is the device alive? | ICMP, SNMP availability, NMS status |
| Is a link saturated? | Interface utilization graphs, SNMP counters |
| Who is consuming the bandwidth? | NetFlow, IPFIX, or sFlow |
| Did the firewall deny the session? | Firewall logs or SIEM search |
| Are packets malformed or retransmitting? | Packet capture from SPAN/TAP |
| Did this start after a change? | Change log plus time-correlated alerts |

Good troubleshooting uses at least two sources of evidence. For example, high utilization plus NetFlow top talkers is stronger than a single "network is slow" report.

---

> [!TIP]
> **Key idea —** Monitor with **SNMP** (metrics), **NetFlow** (traffic patterns), and **syslog/SIEM** (events). Keep a **baseline** to spot anomalies, and use **SPAN** to feed analyzers.

See also: [Performance Concepts & QoS](11-01-performance-concepts.md), [IDS & IPS](10-02-ids-ips.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Performance Concepts &amp; QoS](11-01-performance-concepts.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 11 Exercise](../02-exercises/11-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [High Availability &amp; Redundancy](11-03-high-availability.md)

</div>
<!-- /course-footer -->
