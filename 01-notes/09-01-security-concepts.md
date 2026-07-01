# 09-01: Security Concepts

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/09-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 09: Network Risk Management | 09-01 |
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

## Key Idea

> Security protects **Confidentiality, Integrity, Availability**. Understand **vulnerability vs. threat vs. risk**, the four **risk responses**, and apply **least privilege + defense in depth**.

See also: [Common Attacks](09-02-common-attacks.md), [Secure Network Design](10-04-secure-network-design.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="08-12-vlan.md">Virtual LAN (VLAN)</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/09-exercise.md">Module 09 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="09-02-common-attacks.md">Common Attacks</a>

</div>
<!-- /course-footer -->
