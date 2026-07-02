# 09-01: Security Concepts

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_09-Network_Risk_Management-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 09: Network Risk Management">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/09-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## The CIA Triad

The foundation of information security:

| Pillar | Means | Protected by |
|--------|-------|--------------|
| **Confidentiality** | Only authorized parties can read data | Encryption, access control |
| **Integrity** | Data isn't altered without detection | Hashing, digital signatures |
| **Availability** | Systems are accessible when needed | Redundancy, backups, DDoS protection |

---

## Risk Vocabulary

| Term | Definition |
|------|------------|
| **Asset** | Something of value (data, systems, reputation) |
| **Vulnerability** | A weakness that could be exploited |
| **Threat** | Something that could exploit a vulnerability |
| **Exploit** | The method/code that leverages a vulnerability |
| **Risk** | Likelihood × impact of a threat exploiting a vulnerability |

> **Risk = Threat × Vulnerability (likelihood) × Impact.** Controls reduce likelihood and/or impact.

---

## Risk Responses

| Response | Action | Example |
|----------|--------|---------|
| **Mitigate** | Reduce with controls | Add a firewall |
| **Transfer** | Shift the cost | Cyber-insurance |
| **Avoid** | Stop the risky activity | Discontinue a service |
| **Accept** | Tolerate it | Low-impact, low-likelihood risk |

---

## Core Principles

- **Least privilege** — minimum access needed to do the job.
- **Defense in depth** — layered, diverse controls so one failure isn't fatal.
- **Separation of duties** — split critical tasks to prevent fraud/error.

---

> [!TIP]
> **Key idea —** Security protects **Confidentiality, Integrity, Availability**. Understand **vulnerability vs. threat vs. risk**, the four **risk responses**, and apply **least privilege + defense in depth**.

See also: [Common Attacks](09-02-common-attacks.md), [Secure Network Design](10-04-secure-network-design.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="08-12-vlan.md">Virtual LAN (VLAN)</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/09-exercise.md">Module 09 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="09-02-common-attacks.md">Common Attacks</a>

</div>
<!-- /course-footer -->
