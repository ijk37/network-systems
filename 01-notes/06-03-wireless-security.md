# 06-03: Wireless Security

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/06-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 06: Wireless Networking | 06-03 |
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

## Key Idea

> Use **WPA2 (AES)** at minimum, **WPA3 (SAE)** where possible. Choose **Enterprise/802.1X** for per-user auth in organizations. **WEP is broken**; SSID hiding is not real security.

See also: [Wireless Design & Roaming](06-04-wireless-design.md), [Network Access Control & AAA](10-03-nac-and-aaa.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="06-02-frequencies-and-channels.md">Frequencies, Channels &amp; Antennas</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/06-exercise.md">Module 06 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="06-04-wireless-design.md">Wireless Design &amp; Roaming</a>

</div>
<!-- /course-footer -->
