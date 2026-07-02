# &#128216; 10-02: IDS & IPS

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_10-Security_in_Network_Design-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 10: Security in Network Design">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/10-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128204; Detecting and Preventing Intrusions

| | **IDS** | **IPS** |
|---|---------|---------|
| Action | Detects & **alerts** (passive) | Detects & **blocks** (active) |
| Placement | Out-of-band (SPAN/tap) | **Inline** (in the traffic path) |
| On attack | Logs/alerts | Drops/resets the traffic |

> An **IPS must be inline** to block; an **IDS** can watch a copy of traffic since it only alerts.

---

## &#128204; Detection Methods

| Method | How it works | Strength / weakness |
|--------|--------------|---------------------|
| **Signature-based** | Match known attack patterns | Great for known threats; blind to zero-days |
| **Anomaly/behavior-based** | Compare to a baseline of "normal" | Catches novel attacks; more false positives |
| **Heuristic/policy-based** | Rules about suspicious behavior | Flexible |

---

## &#128204; Host vs. Network

| | **HIDS/HIPS** | **NIDS/NIPS** |
|---|---------------|---------------|
| Scope | A single host | Network segment |
| Sees | That host's activity | Traffic on the wire |

---

## &#128200; Related Monitoring

- **SIEM** aggregates and correlates logs/events for detection and investigation.
- **Port mirroring (SPAN)** feeds a copy of traffic to an IDS or analyzer.

---

> [!TIP]
> **Key idea —** **IDS = alert (out-of-band); IPS = block (inline).** Detection is **signature-based** (known) or **anomaly-based** (novel). Feed alerts to a **SIEM** for correlation.

See also: [Firewalls & ACLs](10-01-firewalls-and-acls.md), [Network Monitoring](11-02-monitoring.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Firewalls &amp; ACLs](10-01-firewalls-and-acls.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 10 Exercise](../02-exercises/10-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [Network Access Control &amp; AAA](10-03-nac-and-aaa.md)

</div>
<!-- /course-footer -->
