# 10-02: IDS & IPS

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/10-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 10: Security in Network Design | 10-02 |
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

## Key Idea

> **IDS = alert (out-of-band); IPS = block (inline).** Detection is **signature-based** (known) or **anomaly-based** (novel). Feed alerts to a **SIEM** for correlation.

See also: [Firewalls & ACLs](10-01-firewalls-and-acls.md), [Network Monitoring](11-02-monitoring.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="10-01-firewalls-and-acls.md">Firewalls &amp; ACLs</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/10-exercise.md">Module 10 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="10-03-nac-and-aaa.md">Network Access Control &amp; AAA</a>

</div>
<!-- /course-footer -->
