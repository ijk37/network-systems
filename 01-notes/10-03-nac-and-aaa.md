# 10-03: Network Access Control & AAA

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

## Key Idea

> **AAA = Authenticate, Authorize, Account.** Use **802.1X + RADIUS** for network access, **TACACS+** for device admin, and **NAC** to enforce device posture. Add **MFA** everywhere.

See also: [Wireless Security](06-03-wireless-security.md), [Secure Network Design](10-04-secure-network-design.md)

<!-- nav -->

---

⬅️ **Prev:** [IDS & IPS](10-02-ids-ips.md)  ·  [📚 All Notes](README.md)  ·  **Next:** [Secure Network Design](10-04-secure-network-design.md) ➡️
