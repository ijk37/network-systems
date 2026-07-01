# 09-03: Security Assessments

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

## Key Idea

> Use **vulnerability scans** to find issues and **pen tests** to prove exploitability. Track flaws with **CVE** IDs and prioritize by **CVSS** score, then patch and re-scan.

See also: [[09-04-policies-and-risk-management]], [[10-02-ids-ips]]
