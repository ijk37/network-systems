# 11-02: Network Monitoring

## Why Monitor?

Monitoring provides **visibility** to detect problems, plan capacity, and hold systems accountable. You can't manage what you can't see.

---

## Monitoring Tools & Protocols

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

## Baselines

A **baseline** records normal performance so deviations (spikes, slowdowns, breaches) stand out by comparison. Establish one before you need it.

---

## What to Watch

| Signal | Meaning |
|--------|---------|
| Sustained ~90–100% link utilization | Congestion / bottleneck |
| Rising interface errors/drops | Cabling or congestion problem |
| CPU/memory spikes on devices | Overload or attack |
| Log anomalies | Possible security incident |

---

## Key Idea

> Monitor with **SNMP** (metrics), **NetFlow** (traffic patterns), and **syslog/SIEM** (events). Keep a **baseline** to spot anomalies, and use **SPAN** to feed analyzers.

See also: [Performance Concepts & QoS](11-01-performance-concepts.md), [IDS & IPS](10-02-ids-ips.md)

<!-- nav -->

---

⬅️ **Prev:** [Performance Concepts & QoS](11-01-performance-concepts.md)  ·  [📚 All Notes](README.md)  ·  **Next:** [High Availability & Redundancy](11-03-high-availability.md) ➡️
