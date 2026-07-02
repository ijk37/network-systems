# 09-03: Security Assessments

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_09-Network_Risk_Management-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 09: Network Risk Management">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/09-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## Finding Weaknesses Before Attackers Do

| Assessment | What it does |
|------------|--------------|
| **Vulnerability scan** | Automatically checks systems for known weaknesses/misconfigurations |
| **Penetration test** | Actively **exploits** weaknesses (with authorization) to show real impact |
| **Posture assessment** | Evaluates overall security controls and readiness |
| **Audit** | Verifies compliance with policy/standards |

> A vulnerability scan **finds** problems; a pen test **exploits** them to prove impact.

---

## Vulnerability Tracking

| Term | Meaning |
|------|---------|
| **CVE** | Uniquely numbered public vulnerability (e.g., CVE-2021-44228) |
| **CVSS** | Severity score (0–10) based on exploitability + impact |

Common scanners: **Nessus, OpenVAS, Qualys**.

---

## Pen Test Knowledge Levels

| Type | Tester knowledge |
|------|------------------|
| **Black box** | No prior knowledge (external attacker view) |
| **White box** | Full knowledge (source, configs) |
| **Gray box** | Partial knowledge |

---

## Remediation

Findings are **prioritized** (often by CVSS) and remediated via **patching**, configuration changes, or compensating controls. Re-scan to confirm fixes.

---

> [!TIP]
> **Key idea —** Use **vulnerability scans** to find issues and **pen tests** to prove exploitability. Track flaws with **CVE** IDs and prioritize by **CVSS** score, then patch and re-scan.

See also: [Policies, Physical Security & Continuity](09-04-policies-and-risk-management.md), [IDS & IPS](10-02-ids-ips.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="09-02-common-attacks.md">Common Attacks</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/09-exercise.md">Module 09 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="09-04-policies-and-risk-management.md">Policies, Physical Security &amp; Continuity</a>

</div>
<!-- /course-footer -->
