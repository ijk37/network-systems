# &#128216; 03-06: Ports & Protocols Reference

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_03-Addressing-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 03: Addressing">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/03-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128204; Port Number Ranges

| Range | Name | Use |
|-------|------|-----|
| 0–1023 | **Well-known** | Standard services (HTTP, DNS, SSH) |
| 1024–49151 | **Registered** | Vendor/app-specific |
| 49152–65535 | **Dynamic/ephemeral** | Temporary client-side ports |

A **socket** = IP address + port (e.g., `192.168.1.5:443`).

---

## &#128204; Must-Know Ports (N10-008)

| Port | Protocol | Purpose |
|------|----------|---------|
| 20/21 | FTP | File transfer (data/control) |
| 22 | SSH / SFTP / SCP | Secure shell & file transfer |
| 23 | Telnet | Remote CLI (insecure) |
| 25 | SMTP | Send email |
| 53 | DNS | Name resolution |
| 67/68 | DHCP | IP configuration |
| 69 | TFTP | Trivial file transfer |
| 80 | HTTP | Web (unencrypted) |
| 110 | POP3 | Retrieve email |
| 123 | NTP | Time synchronization |
| 143 | IMAP | Retrieve email (sync) |
| 161/162 | SNMP | Network monitoring/traps |
| 389 | LDAP | Directory services |
| 443 | HTTPS | Web (TLS) |
| 445 | SMB | File/printer sharing |
| 636 | LDAPS | Secure LDAP |
| 993 / 995 | IMAPS / POP3S | Secure email retrieval |
| 3389 | RDP | Remote desktop |

---

## &#128204; Secure vs. Insecure Pairs

| Insecure | Secure replacement |
|----------|--------------------|
| Telnet (23) | SSH (22) |
| HTTP (80) | HTTPS (443) |
| FTP (20/21) | SFTP (22) / FTPS |
| SNMPv1/2c (161) | SNMPv3 |

---

> [!TIP]
> **Key idea —** Memorize the **well-known ports** and their secure equivalents. Ports identify the **application**; a **socket** (IP:port) uniquely identifies an endpoint of a connection.

See also: [Core Protocols & Their Ports](04-03-core-protocols-and-ports.md), [Secure Protocols & Encryption](04-04-secure-protocols.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="03-05-dns.md">DNS</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/03-exercise.md">Module 03 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="03-07-cli-troubleshooting-tools.md">CLI Troubleshooting Tools</a>

</div>
<!-- /course-footer -->
