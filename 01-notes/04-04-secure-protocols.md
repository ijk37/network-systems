# &#128216; 04-04: Secure Protocols & Encryption

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_04-Network_Protocols-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 04: Network Protocols">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/04-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128161; Why Encryption?

Plaintext protocols (Telnet, HTTP, FTP) expose credentials and data to sniffers. Secure protocols add **confidentiality, integrity, and authentication**.

---

## &#128204; TLS / SSL

- **TLS (Transport Layer Security)** — successor to SSL — encrypts sessions and authenticates servers via **certificates**.
- Secures **HTTPS (443)**, secure email (993/995/587), and more.
- Operates around the Session/Presentation layers.

---

## &#128204; SSH

- **SSH (Secure Shell, port 22)** provides encrypted remote CLI access, key-based auth, and secure tunneling.
- Basis for **SFTP** and **SCP** (secure file transfer).
- Replaces insecure **Telnet (23)**.

---

## &#128204; IPsec

- **IPsec** secures traffic at **Layer 3** (Network), encrypting/authenticating IP packets.
- Two core protocols:
  - **AH (Authentication Header)** — integrity/authentication
  - **ESP (Encapsulating Security Payload)** — encryption (+ optional integrity)
- **IKE** negotiates keys. Widely used to build **VPNs**.

---

## &#128204; Secure vs. Insecure Reference

| Insecure | Secure |
|----------|--------|
| Telnet (23) | SSH (22) |
| HTTP (80) | HTTPS (443) |
| FTP (20/21) | SFTP (22) / FTPS |
| SNMPv1/2c | SNMPv3 |
| POP3/IMAP (110/143) | POP3S/IMAPS (995/993) |

---

> [!TIP]
> **Key idea —** Prefer secure protocols: **TLS** for web/app data, **SSH** for remote CLI, **IPsec** for VPN tunnels at Layer 3. Always replace **Telnet/HTTP/FTP** with encrypted equivalents.

See also: [Remote Access](04-05-remote-access.md), [Firewalls & ACLs](10-01-firewalls-and-acls.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Core Protocols &amp; Their Ports](04-03-core-protocols-and-ports.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 04 Exercise](../02-exercises/04-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [Remote Access](04-05-remote-access.md)

</div>
<!-- /course-footer -->
