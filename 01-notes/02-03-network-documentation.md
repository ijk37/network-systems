# 02-03: Network Documentation

## Why Document?

Documentation makes troubleshooting faster, onboarding easier, audits possible, and changes safer. **Stale documentation is worse than none** — update it after every change.

---

## Types of Documentation

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

## Labeling

Consistent labels on cables, patch panels, jacks, and racks let a technician trace connections quickly and reduce errors during changes. A good scheme is unambiguous and standardized.

---

## Baselines

A **performance baseline** records normal traffic, utilization, latency, and error rates so that anomalies (spikes, slowdowns, breaches) are recognizable by comparison later.

---

## IP Address Management (IPAM)

IPAM tracks which addresses/subnets are **assigned, reserved, or free**, along with DNS/DHCP data — preventing IP conflicts and simplifying audits.

---

## Key Idea

> Keep **physical + logical diagrams, labels, IPAM, and a baseline** current. Documentation is only valuable if it is **accurate** — update it as part of every change.

See also: [Change Management & Agreements](02-04-change-management.md), [DHCP](03-04-dhcp.md)

<!-- nav -->

---

⬅️ **Prev:** [Racks, Patch Panels & Terminations](02-02-racks-and-terminations.md)  ·  [📚 All Notes](README.md)  ·  **Next:** [Change Management & Agreements](02-04-change-management.md) ➡️
