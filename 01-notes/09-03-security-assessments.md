# &#128216; 09-03: Security Assessments

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_09-Network_Risk_Management-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 09: Network Risk Management">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/09-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128204; Finding Weaknesses Before Attackers Do

| Assessment | What it does |
|------------|--------------|
| **Vulnerability scan** | Automatically checks systems for known weaknesses/misconfigurations |
| **Penetration test** | Actively **exploits** weaknesses (with authorization) to show real impact |
| **Posture assessment** | Evaluates overall security controls and readiness |
| **Audit** | Verifies compliance with policy/standards |

> A vulnerability scan **finds** problems; a pen test **exploits** them to prove impact.

---

## &#128204; Vulnerability Tracking

| Term | Meaning |
|------|---------|
| **CVE** | Uniquely numbered public vulnerability (e.g., CVE-2021-44228) |
| **CVSS** | Severity score (0–10) based on exploitability + impact |

Common scanners: **Nessus, OpenVAS, Qualys**.

---

## &#128204; Pen Test Knowledge Levels

| Type | Tester knowledge |
|------|------------------|
| **Black box** | No prior knowledge (external attacker view) |
| **White box** | Full knowledge (source, configs) |
| **Gray box** | Partial knowledge |

---

## &#128204; Remediation

Findings are **prioritized** (often by CVSS) and remediated via **patching**, configuration changes, or compensating controls. Re-scan to confirm fixes.

---

> [!TIP]
> **Key idea —** Use **vulnerability scans** to find issues and **pen tests** to prove exploitability. Track flaws with **CVE** IDs and prioritize by **CVSS** score, then patch and re-scan.

See also: [Policies, Physical Security & Continuity](09-04-policies-and-risk-management.md), [IDS & IPS](10-02-ids-ips.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Common Attacks](09-02-common-attacks.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 09 Exercise](../02-exercises/09-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [Policies, Physical Security &amp; Continuity](09-04-policies-and-risk-management.md)

</div>
<!-- /course-footer -->
