# 09: Network Risk Management — Exercises

## Questions

1. Define vulnerability, threat, and risk, and give the relationship between them.
2. Map each to the CIA triad: (a) ransomware encrypting files, (b) an attacker altering a bank balance, (c) eavesdropping on unencrypted traffic.
3. Distinguish a vulnerability scan from a penetration test.
4. A user gets an email "from IT" urgently asking for their password. Name the attack category and the best organizational defense.
5. Distinguish a virus, a worm, and a Trojan.
6. A company sets RTO = 4 hours and RPO = 1 hour. Explain what each requires operationally.

---

## Solutions

### 1. Vulnerability / threat / risk
- **Vulnerability** — a weakness. **Threat** — something that could exploit it. **Risk** — the likelihood × impact of that exploitation. Controls reduce likelihood and/or impact.

### 2. CIA mapping
- (a) Ransomware → **Availability** (and often Confidentiality).
- (b) Altering a balance → **Integrity**.
- (c) Eavesdropping → **Confidentiality**.

### 3. Scan vs. pen test
A **vulnerability scan** automatically *finds and reports* known weaknesses. A **penetration test** *actively exploits* them (with authorization) to demonstrate real-world impact.

### 4. Phishing
Category: **social engineering (phishing)**. Best defense: **user security-awareness training** (plus email filtering and MFA so a stolen password isn't enough).

### 5. Malware types
- **Virus** — needs a host file + user action to spread.
- **Worm** — self-replicates across networks, no user action.
- **Trojan** — disguised as legitimate software; user runs it.

### 6. RTO/RPO
- **RTO = 4 h** — services must be restorable within 4 hours (drives redundancy/DR readiness).
- **RPO = 1 h** — no more than 1 hour of data loss allowed (backups/replication must run at least hourly).
