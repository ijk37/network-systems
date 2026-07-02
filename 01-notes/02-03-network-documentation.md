# &#128216; 02-03: Network Documentation

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_02-Infrastructure_and_Documentation-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 02: Infrastructure and Documentation">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/02-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128161; Why Document?

Documentation makes troubleshooting faster, onboarding easier, audits possible, and changes safer. **Stale documentation is worse than none** — update it after every change.

---

## &#128204; Types of Documentation

| Document | Shows |
|----------|-------|
| **Physical network diagram** | Actual devices, ports, cable runs, locations |
| **Logical network diagram** | IP addressing, subnets/VLANs, routing, data flow |
| **Rack diagram (elevation)** | Device positions (U by U) in each rack |
| **Wiring/labeling scheme** | How cables, jacks, ports, and racks are labeled |
| **IPAM records** | Assigned IPs, subnets, hostnames, DHCP/DNS data |
| **Baseline** | Normal performance metrics for comparison |
| **Inventory / asset list** | Devices, models, serials, firmware, warranties |

---

## &#128204; Labeling

Consistent labels on cables, patch panels, jacks, and racks let a technician trace connections quickly and reduce errors during changes. A good scheme is unambiguous and standardized.

---

## &#128204; Baselines

A **performance baseline** records normal traffic, utilization, latency, and error rates so that anomalies (spikes, slowdowns, breaches) are recognizable by comparison later.

---

## &#128204; IP Address Management (IPAM)

IPAM tracks which addresses/subnets are **assigned, reserved, or free**, along with DNS/DHCP data — preventing IP conflicts and simplifying audits.

---

> [!TIP]
> **Key idea —** Keep **physical + logical diagrams, labels, IPAM, and a baseline** current. Documentation is only valuable if it is **accurate** — update it as part of every change.

See also: [Change Management & Agreements](02-04-change-management.md), [DHCP](03-04-dhcp.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="02-02-racks-and-terminations.md">Racks, Patch Panels &amp; Terminations</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/02-exercise.md">Module 02 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="02-04-change-management.md">Change Management &amp; Agreements</a>

</div>
<!-- /course-footer -->
