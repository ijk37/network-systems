# 09-01: Security Concepts

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

See also: [[09-02-common-attacks]], [[10-04-secure-network-design]]
