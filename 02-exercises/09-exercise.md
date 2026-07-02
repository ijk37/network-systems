# 09: Network Risk Management — Exercises

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_09-Network_Risk_Management-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 09: Network Risk Management"> <img src="https://img.shields.io/badge/12_questions-C8901A?style=for-the-badge&labelColor=7E0E23" alt="12 questions">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="../01-notes/09-01-security-concepts.md"><img src="https://img.shields.io/badge/Notes-3B2530?style=flat-square" alt="Notes"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Exercises-3B2530?style=flat-square" alt="All Exercises"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

> [!TIP]
> **Practice —** try each question first, then expand the answer to check your reasoning.

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/09-01-security-concepts.md) if you get stuck.

---

### Q1. Define vulnerability, threat, and risk, and state the relationship.

<details>
<summary><strong>Show answer</strong></summary>

- **Vulnerability** — a weakness.
- **Threat** — something that could exploit it.
- **Risk** — the **likelihood × impact** of that exploitation.

Controls reduce likelihood and/or impact.
</details>

---

### Q2. Map each to the CIA triad: (a) ransomware encrypting files, (b) altering a bank balance, (c) eavesdropping on unencrypted traffic.

<details>
<summary><strong>Show answer</strong></summary>

- (a) Ransomware → **Availability** (and often Confidentiality).
- (b) Altering a balance → **Integrity**.
- (c) Eavesdropping → **Confidentiality**.
</details>

---

### Q3. Distinguish a vulnerability scan from a penetration test.

<details>
<summary><strong>Show answer</strong></summary>

A **vulnerability scan** automatically *finds and reports* known weaknesses. A **penetration test** *actively exploits* them (with authorization) to demonstrate real-world impact.
</details>

---

### Q4. A user gets an urgent email "from IT" asking for their password. Name the attack category and the best organizational defense.

<details>
<summary><strong>Show answer</strong></summary>

**Social engineering (phishing)**. Best defense: **user security-awareness training** (plus email filtering and **MFA** so a stolen password isn't enough).
</details>

---

### Q5. Distinguish a virus, a worm, and a Trojan.

<details>
<summary><strong>Show answer</strong></summary>

- **Virus** — needs a host file + user action to spread.
- **Worm** — self-replicates across networks, no user action.
- **Trojan** — disguised as legitimate software; the user runs it.
</details>

---

### Q6. What is a zero-day vulnerability?

<details>
<summary><strong>Show answer</strong></summary>

A flaw that is **exploited before the vendor has a patch** (defenders have had "zero days" to fix it) — especially dangerous because signature defenses may not detect it.
</details>

---

### Q7. What do CVE and CVSS refer to?

<details>
<summary><strong>Show answer</strong></summary>

- **CVE** — a uniquely numbered, publicly cataloged known vulnerability (e.g., CVE-2021-44228).
- **CVSS** — a **severity score** (0–10) based on exploitability and impact, used to prioritize remediation.
</details>

---

### Q8. What are the four risk responses? Give an example of each.

<details>
<summary><strong>Show answer</strong></summary>

- **Mitigate** — reduce with controls (add a firewall).
- **Transfer** — shift the cost (cyber-insurance).
- **Avoid** — stop the risky activity (discontinue a service).
- **Accept** — tolerate a low/low risk.
</details>

---

### Q9. Explain least privilege and separation of duties.

<details>
<summary><strong>Show answer</strong></summary>

- **Least privilege** — give each user/process only the minimum access needed, shrinking the attack surface and containing damage.
- **Separation of duties** — split critical tasks among people (e.g., request vs. approve) so no one can complete a sensitive process alone.
</details>

---

### Q10. A company sets RTO = 4 hours and RPO = 1 hour. What does each require operationally?

<details>
<summary><strong>Show answer</strong></summary>

- **RTO = 4 h** — the service must be restorable within 4 hours (drives redundancy/DR readiness).
- **RPO = 1 h** — no more than 1 hour of data loss (backups/replication must run at least hourly).
</details>

---

### Q11. What is the 3-2-1 backup rule, and why does it defend against ransomware?

<details>
<summary><strong>Show answer</strong></summary>

**3 copies**, on **2 different media**, with **1 offsite** (ideally offline/immutable). The offline/immutable copy is unreachable by ransomware, so recovery is still possible.
</details>

---

### Q12. Name one physical and one detective security control.

<details>
<summary><strong>Show answer</strong></summary>

- **Physical:** badge reader, lock, mantrap, or fence.
- **Detective:** CCTV footage, IDS alerts, log review, or audits (they reveal that an event happened).
</details>

---

⬅️ **Prev:** [Module 08](08-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 10 — Security in Network Design](10-exercise.md) ➡️

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="08-exercise.md">08: Subnets &amp; VLANs — Exercises</a> &nbsp;|&nbsp; <a href="README.md">All Exercises</a> &nbsp;|&nbsp; <a href="../01-notes/09-01-security-concepts.md">Module 09 Notes</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="10-exercise.md">10: Security in Network Design — Exercises</a>

</div>
<!-- /course-footer -->
