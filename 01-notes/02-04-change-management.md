# 02-04: Change Management & Agreements

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

## Key Idea

> Every change should be **documented, reviewed, approved, and reversible** (rollback plan). Know the common agreements (**SLA, AUP**) and reliability metrics (**MTBF, MTTR**).

See also: [[02-03-network-documentation]], [[11-04-fault-tolerance-and-recovery]]
