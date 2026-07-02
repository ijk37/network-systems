# 10-03: Network Access Control & AAA

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_10-Security_in_Network_Design-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 10: Security in Network Design">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/10-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## AAA Framework

| A | Question | Meaning |
|---|----------|---------|
| **Authentication** | Who are you? | Verify identity |
| **Authorization** | What may you do? | Grant permissions |
| **Accounting** | What did you do? | Log activity |

---

## RADIUS vs. TACACS+

| | **RADIUS** | **TACACS+** |
|---|-----------|-------------|
| Transport | UDP (1812/1813) | TCP (49) |
| Encryption | Password only | **Entire payload** |
| AAA | Combines auth+authz | **Separates** all three |
| Vendor | Open standard | Cisco |
| Best for | Network access / 802.1X | Device administration |

---

## 802.1X Port-Based Access Control

Requires authentication **before** a port is opened:

| Role | Device |
|------|--------|
| **Supplicant** | The client |
| **Authenticator** | The switch/AP |
| **Authentication server** | RADIUS |

---

## NAC (Network Access Control)

**NAC** checks **identity + device posture/health** (patches, AV) before granting access, quarantining noncompliant devices. Often built on 802.1X.

---

## Multi-Factor Authentication

Combine independent factors:
- **Something you know** (password)
- **Something you have** (token, phone)
- **Something you are** (biometric)

A stolen password alone is then insufficient.

---

> [!TIP]
> **Key idea —** **AAA = Authenticate, Authorize, Account.** Use **802.1X + RADIUS** for network access, **TACACS+** for device admin, and **NAC** to enforce device posture. Add **MFA** everywhere.

See also: [Wireless Security](06-03-wireless-security.md), [Secure Network Design](10-04-secure-network-design.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="10-02-ids-ips.md">IDS &amp; IPS</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/10-exercise.md">Module 10 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="10-04-secure-network-design.md">Secure Network Design</a>

</div>
<!-- /course-footer -->
