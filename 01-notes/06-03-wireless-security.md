# 06-03: Wireless Security

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_06-Wireless_Networking-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 06: Wireless Networking">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/06-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## The Evolution of Wi-Fi Security

| Standard | Status | Cipher | Notes |
|----------|--------|--------|-------|
| **WEP** | ❌ Broken | RC4 | Cracks in minutes — never use |
| **WPA** | ⚠️ Legacy | TKIP/RC4 | Interim fix, deprecated |
| **WPA2** | ✅ Common | **AES-CCMP** | Strong; still widely used |
| **WPA3** | ✅ Best | AES + **SAE** | Resists offline password attacks |

- **WPA3-Personal** replaces the WPA2 4-way handshake with **SAE** (Simultaneous Authentication of Equals), providing forward secrecy and dictionary-attack resistance.

---

## Personal vs. Enterprise

| | **Personal (PSK)** | **Enterprise (802.1X)** |
|---|--------------------|--------------------------|
| Auth | One shared passphrase | Per-user via **RADIUS** |
| Best for | Home / small office | Organizations |
| Revoke a user | Change PSK for everyone | Disable that one account |

**802.1X** roles: client = **supplicant**, AP = **authenticator**, **RADIUS** = authentication server.

---

## Common Wireless Threats

| Threat | Description |
|--------|-------------|
| **Evil twin** | Rogue AP mimicking a real SSID to capture credentials |
| **Rogue AP** | Unauthorized AP plugged into the LAN |
| **Deauth attack** | Forcibly disconnect clients |
| **War driving** | Searching for open/weak Wi-Fi |

Mitigations: **WPA2/WPA3**, **802.1X**, WIPS, and disabling unused APs. **Hiding the SSID** offers negligible real security.

---

> [!TIP]
> **Key idea —** Use **WPA2 (AES)** at minimum, **WPA3 (SAE)** where possible. Choose **Enterprise/802.1X** for per-user auth in organizations. **WEP is broken**; SSID hiding is not real security.

See also: [Wireless Design & Roaming](06-04-wireless-design.md), [Network Access Control & AAA](10-03-nac-and-aaa.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="06-02-frequencies-and-channels.md">Frequencies, Channels &amp; Antennas</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/06-exercise.md">Module 06 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="06-04-wireless-design.md">Wireless Design &amp; Roaming</a>

</div>
<!-- /course-footer -->
