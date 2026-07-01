# 04-04: Secure Protocols & Encryption

## Why Encryption?

Plaintext protocols (Telnet, HTTP, FTP) expose credentials and data to sniffers. Secure protocols add **confidentiality, integrity, and authentication**.

---

## TLS / SSL

- **TLS (Transport Layer Security)** — successor to SSL — encrypts sessions and authenticates servers via **certificates**.
- Secures **HTTPS (443)**, secure email (993/995/587), and more.
- Operates around the Session/Presentation layers.

---

## SSH

- **SSH (Secure Shell, port 22)** provides encrypted remote CLI access, key-based auth, and secure tunneling.
- Basis for **SFTP** and **SCP** (secure file transfer).
- Replaces insecure **Telnet (23)**.

---

## IPsec

- **IPsec** secures traffic at **Layer 3** (Network), encrypting/authenticating IP packets.
- Two core protocols:
  - **AH (Authentication Header)** — integrity/authentication
  - **ESP (Encapsulating Security Payload)** — encryption (+ optional integrity)
- **IKE** negotiates keys. Widely used to build **VPNs**.

---

## Secure vs. Insecure Reference

| Insecure | Secure |
|----------|--------|
| Telnet (23) | SSH (22) |
| HTTP (80) | HTTPS (443) |
| FTP (20/21) | SFTP (22) / FTPS |
| SNMPv1/2c | SNMPv3 |
| POP3/IMAP (110/143) | POP3S/IMAPS (995/993) |

---

## Key Idea

> Prefer secure protocols: **TLS** for web/app data, **SSH** for remote CLI, **IPsec** for VPN tunnels at Layer 3. Always replace **Telnet/HTTP/FTP** with encrypted equivalents.

See also: [[04-05-remote-access]], [[10-01-firewalls-and-acls]]
