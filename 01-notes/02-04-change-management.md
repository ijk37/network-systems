# 02-04: Change Management & Agreements

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_02-Infrastructure_and_Documentation-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 02: Infrastructure and Documentation">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/02-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## Change Management

**Change management** is the process of proposing, reviewing, approving, implementing, and documenting changes to minimize risk of outages.

### A change request typically includes
- **Reason and scope** of the change
- **Risk assessment** and potential effects
- **Implementation plan** (steps, timing, maintenance window)
- **Rollback (back-out) plan** — how to revert to the last known-good state
- **Approval/sign-off** from a change advisory board or manager

> A change without a **rollback plan** is a gamble. Always know how to undo it.

---

## Common Agreements & Policies

| Term | Meaning |
|------|---------|
| **SLA** (Service Level Agreement) | Agreed service levels — uptime %, response/repair times, penalties |
| **AUP** (Acceptable Use Policy) | Rules for how users may use network resources |
| **MOU** (Memorandum of Understanding) | Informal agreement of intent between parties |
| **SOW** (Statement of Work) | Detailed deliverables/scope for a project or vendor |
| **NDA** (Non-Disclosure Agreement) | Protects confidential information |

---

## Reliability Metrics

| Metric | Meaning |
|--------|---------|
| **MTBF** (Mean Time Between Failures) | Average operating time before a device fails |
| **MTTR** (Mean Time To Repair) | Average time to restore a failed device/service |

---

## Fire & Cable Safety Ratings

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

<div align="center">

<strong>Previous:</strong> <a href="02-03-network-documentation.md">Network Documentation</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/02-exercise.md">Module 02 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="03-01-mac-addresses.md">MAC Addresses</a>

</div>
<!-- /course-footer -->
