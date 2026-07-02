# 10-02: IDS & IPS

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_10-Security_in_Network_Design-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 10: Security in Network Design">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/10-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## Detecting and Preventing Intrusions

| | **IDS** | **IPS** |
|---|---------|---------|
| Action | Detects & **alerts** (passive) | Detects & **blocks** (active) |
| Placement | Out-of-band (SPAN/tap) | **Inline** (in the traffic path) |
| On attack | Logs/alerts | Drops/resets the traffic |

> An **IPS must be inline** to block; an **IDS** can watch a copy of traffic since it only alerts.

---

## Detection Methods

| Method | How it works | Strength / weakness |
|--------|--------------|---------------------|
| **Signature-based** | Match known attack patterns | Great for known threats; blind to zero-days |
| **Anomaly/behavior-based** | Compare to a baseline of "normal" | Catches novel attacks; more false positives |
| **Heuristic/policy-based** | Rules about suspicious behavior | Flexible |

---

## Host vs. Network

| | **HIDS/HIPS** | **NIDS/NIPS** |
|---|---------------|---------------|
| Scope | A single host | Network segment |
| Sees | That host's activity | Traffic on the wire |

---

## Related Monitoring

- **SIEM** aggregates and correlates logs/events for detection and investigation.
- **Port mirroring (SPAN)** feeds a copy of traffic to an IDS or analyzer.

---

> [!TIP]
> **Key idea —** **IDS = alert (out-of-band); IPS = block (inline).** Detection is **signature-based** (known) or **anomaly-based** (novel). Feed alerts to a **SIEM** for correlation.

See also: [Firewalls & ACLs](10-01-firewalls-and-acls.md), [Network Monitoring](11-02-monitoring.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="10-01-firewalls-and-acls.md">Firewalls &amp; ACLs</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/10-exercise.md">Module 10 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="10-03-nac-and-aaa.md">Network Access Control &amp; AAA</a>

</div>
<!-- /course-footer -->
