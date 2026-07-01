# 04-03: Core Protocols & Their Ports

## Application-Layer Services

| Protocol | Port(s) | Transport | Purpose |
|----------|---------|-----------|---------|
| **HTTP / HTTPS** | 80 / 443 | TCP | Web |
| **FTP** | 20/21 | TCP | File transfer |
| **SFTP** | 22 | TCP | Secure file transfer (over SSH) |
| **TFTP** | 69 | UDP | Simple file transfer (configs/images) |
| **SMTP** | 25 (587) | TCP | Send email |
| **POP3 / IMAP** | 110 / 143 | TCP | Retrieve email |
| **DNS** | 53 | UDP/TCP | Name resolution |
| **DHCP** | 67/68 | UDP | IP configuration |
| **SNMP** | 161/162 | UDP | Monitoring / traps |
| **NTP** | 123 | UDP | Time sync |
| **LDAP / LDAPS** | 389 / 636 | TCP | Directory services |
| **Kerberos** | 88 | UDP/TCP | Authentication (AD) |
| **RDP** | 3389 | TCP | Remote desktop |
| **SSH / Telnet** | 22 / 23 | TCP | Remote CLI (secure/insecure) |

---

## Diagnostic & Infrastructure Protocols

| Protocol | Role |
|----------|------|
| **ICMP** | Errors & diagnostics (ping, traceroute, "destination unreachable") |
| **ARP** | IP → MAC on the local segment |
| **QUIC** | Modern low-latency transport over UDP (HTTP/3) |

---

## Email Flow

- **SMTP** sends/relays mail between servers.
- **POP3** downloads mail (usually removes from server) — single device.
- **IMAP** keeps mail on the server and syncs across devices.

---

## Key Idea

> Know each protocol's **port, transport (TCP/UDP), and job**. SMTP **sends**; POP3/IMAP **retrieve**. ICMP powers ping/traceroute; ARP maps IP↔MAC.

See also: [Ports & Protocols Reference](03-06-ports-and-protocols.md), [Secure Protocols & Encryption](04-04-secure-protocols.md)

<!-- nav -->

---

⬅️ **Prev:** [TCP vs. UDP](04-02-tcp-vs-udp.md)  ·  [📚 All Notes](README.md)  ·  **Next:** [Secure Protocols & Encryption](04-04-secure-protocols.md) ➡️
