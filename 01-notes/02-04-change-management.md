# &#128216; 02-04: Change Management & Agreements

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_02-Infrastructure_and_Documentation-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 02: Infrastructure and Documentation">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/02-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128204; Change Management

**Change management** is the process of proposing, reviewing, approving, implementing, and documenting changes to minimize risk of outages.

### &#128313; A change request typically includes
- **Reason and scope** of the change
- **Risk assessment** and potential effects
- **Implementation plan** (steps, timing, maintenance window)
- **Rollback (back-out) plan** — how to revert to the last known-good state
- **Approval/sign-off** from a change advisory board or manager

> A change without a **rollback plan** is a gamble. Always know how to undo it.

---

## &#128204; Common Agreements & Policies

| Term | Meaning |
|------|---------|
| **SLA** (Service Level Agreement) | Agreed service levels — uptime %, response/repair times, penalties |
| **AUP** (Acceptable Use Policy) | Rules for how users may use network resources |
| **MOU** (Memorandum of Understanding) | Informal agreement of intent between parties |
| **SOW** (Statement of Work) | Detailed deliverables/scope for a project or vendor |
| **NDA** (Non-Disclosure Agreement) | Protects confidential information |

---

## &#128204; Reliability Metrics

| Metric | Meaning |
|--------|---------|
| **MTBF** (Mean Time Between Failures) | Average operating time before a device fails |
| **MTTR** (Mean Time To Repair) | Average time to restore a failed device/service |

---

## &#128204; Fire & Cable Safety Ratings

| Rating | Where used |
|--------|-----------|
| **Plenum (CMP)** | Air-handling spaces (HVAC plenums) — fire-resistant, less toxic smoke |
| **Riser (CMR)** | Vertical shafts between floors |

---

> [!TIP]
> **Key idea —** Every change should be **documented, reviewed, approved, and reversible** (rollback plan). Know the common agreements (**SLA, AUP**) and reliability metrics (**MTBF, MTTR**).

See also: [Network Documentation](02-03-network-documentation.md), [Fault Tolerance & Recovery](11-04-fault-tolerance-and-recovery.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Network Documentation](02-03-network-documentation.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 02 Exercise](../02-exercises/02-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [MAC Addresses](03-01-mac-addresses.md)

</div>
<!-- /course-footer -->
