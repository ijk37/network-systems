# 09-02: Common Attacks

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

<!-- nav -->

---

⬅️ **Prev:** [Security Concepts](09-01-security-concepts.md)  ·  [📚 All Notes](README.md)  ·  **Next:** [Security Assessments](09-03-security-assessments.md) ➡️
