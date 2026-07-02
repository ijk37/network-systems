# &#128216; 09-04: Policies, Physical Security & Continuity

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_09-Network_Risk_Management-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 09: Network Risk Management">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/09-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128272; Security Policies

Policies establish rules, roles, and expected behavior — the governance that technical controls enforce.

| Policy | Purpose |
|--------|---------|
| **AUP** | Acceptable use of resources |
| **Password policy** | Complexity, rotation, reuse rules |
| **BYOD policy** | Rules for personal devices |
| **Incident response plan** | How to handle security incidents |
| **DR / BC plan** | How to recover operations after disaster |

---

## &#128204; Access Control Best Practices

- **Least privilege** and **role-based access control (RBAC)**
- **MFA** — combine factors: something you **know / have / are**
- **Separation of duties**
- Disable default/unused accounts; change default credentials

---

## &#128272; Physical Security

| Control | Example |
|---------|---------|
| Deterrent | Signs, lighting |
| Preventive | Locks, badge readers, **mantraps**, fences |
| Detective | CCTV, motion sensors, guards |

---

## &#128204; Business Continuity & Disaster Recovery

| Metric | Meaning |
|--------|---------|
| **RTO** | Target time to restore a service after an outage |
| **RPO** | Maximum acceptable data loss (in time) |

**Backups — the 3-2-1 rule:** 3 copies, on 2 different media, with 1 copy offsite (or offline/immutable). Offline/immutable backups are the key defense against **ransomware**. **Test restores** regularly.

---

> [!TIP]
> **Key idea —** Policies + access control (**least privilege, MFA**) + physical security + tested **3-2-1 backups** and **RTO/RPO** targets form a complete risk-management program.

See also: [Security Concepts](09-01-security-concepts.md), [Fault Tolerance & Recovery](11-04-fault-tolerance-and-recovery.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="09-03-security-assessments.md">Security Assessments</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/09-exercise.md">Module 09 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="10-01-firewalls-and-acls.md">Firewalls &amp; ACLs</a>

</div>
<!-- /course-footer -->
