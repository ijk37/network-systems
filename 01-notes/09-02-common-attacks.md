# &#128216; 09-02: Common Attacks

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_09-Network_Risk_Management-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 09: Network Risk Management">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/09-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128204; Denial of Service

| Attack | Description |
|--------|-------------|
| **DoS** | Overwhelm a system so it's unavailable |
| **DDoS** | DoS from many distributed sources (a **botnet**) — harder to block |

---

## &#128204; On-Path & Spoofing

| Attack | Description |
|--------|-------------|
| **MITM / on-path** | Secretly intercept/relay traffic between two parties |
| **ARP spoofing/poisoning** | Map victim/gateway IP to attacker's MAC to intercept LAN traffic |
| **Spoofing** | Forge source identity (IP, MAC, email sender) |
| **DNS poisoning** | Corrupt DNS answers to redirect users |

---

## &#128204; Social Engineering

Attacks that target **people**, not machines:

| Attack | Description |
|--------|-------------|
| **Phishing** | Deceptive email/message to steal credentials or deliver malware |
| **Spear phishing** | Targeted phishing at a specific person |
| **Pretexting** | Invented scenario to extract info |
| **Tailgating** | Follow someone through a secure door |

Best defense: **user awareness training**.

---

## &#128204; Malware Types

| Type | Behavior |
|------|----------|
| **Virus** | Needs a host file + user action to spread |
| **Worm** | Self-replicates across networks, no user action |
| **Trojan** | Disguised as legitimate software |
| **Ransomware** | Encrypts data for extortion (harms availability) |
| **Rootkit** | Hides deep in the OS |
| **Logic bomb** | Triggers on a condition/date |

A **zero-day** exploits a flaw before a patch exists.

---

> [!TIP]
> **Key idea —** Know **DoS/DDoS**, **MITM/ARP spoofing**, **phishing/social engineering**, and **malware types** (virus vs. worm vs. trojan vs. ransomware). A **zero-day** has no patch yet.

See also: [Security Concepts](09-01-security-concepts.md), [Switch & Port Hardening](10-05-switch-hardening.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="09-01-security-concepts.md">Security Concepts</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/09-exercise.md">Module 09 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="09-03-security-assessments.md">Security Assessments</a>

</div>
<!-- /course-footer -->
