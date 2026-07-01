# 09-02: Common Attacks

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/09-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 09: Network Risk Management | 09-02 |
<!-- /course-header -->

## Denial of Service

| Attack | Description |
|--------|-------------|
| **DoS** | Overwhelm a system so it's unavailable |
| **DDoS** | DoS from many distributed sources (a **botnet**) — harder to block |

---

## On-Path & Spoofing

| Attack | Description |
|--------|-------------|
| **MITM / on-path** | Secretly intercept/relay traffic between two parties |
| **ARP spoofing/poisoning** | Map victim/gateway IP to attacker's MAC to intercept LAN traffic |
| **Spoofing** | Forge source identity (IP, MAC, email sender) |
| **DNS poisoning** | Corrupt DNS answers to redirect users |

---

## Social Engineering

Attacks that target **people**, not machines:

| Attack | Description |
|--------|-------------|
| **Phishing** | Deceptive email/message to steal credentials or deliver malware |
| **Spear phishing** | Targeted phishing at a specific person |
| **Pretexting** | Invented scenario to extract info |
| **Tailgating** | Follow someone through a secure door |

Best defense: **user awareness training**.

---

## Malware Types

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

## Key Idea

> Know **DoS/DDoS**, **MITM/ARP spoofing**, **phishing/social engineering**, and **malware types** (virus vs. worm vs. trojan vs. ransomware). A **zero-day** has no patch yet.

See also: [Security Concepts](09-01-security-concepts.md), [Switch & Port Hardening](10-05-switch-hardening.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="09-01-security-concepts.md">Security Concepts</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/09-exercise.md">Module 09 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="09-03-security-assessments.md">Security Assessments</a>

</div>
<!-- /course-footer -->
