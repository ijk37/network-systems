# 06-03: Wireless Security

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

See also: [[06-04-wireless-design]], [[10-03-nac-and-aaa]]
