# 06: Wireless Networking — Exercises

## Questions

1. In a crowded apartment building on 2.4 GHz, which three channels should APs use, and why?
2. Rank WEP, WPA2, WPA3, WPA by security, and state which cipher WPA2 uses.
3. A company wants each employee to log into Wi-Fi with their own credentials. Personal or Enterprise? What server is required?
4. Distinguish BSS, ESS, and SSID.
5. Users' laptops keep connecting to a fake "Corp-WiFi" network and leaking credentials. Name the attack and one defense.
6. A dense office has poor Wi-Fi capacity despite strong signal. Give two design changes to improve capacity.

---

## Solutions

### 1. 2.4 GHz channels
**1, 6, and 11** — they are the only **non-overlapping** 20 MHz channels, minimizing co-channel/adjacent-channel interference.

### 2. Security ranking
**WPA3 > WPA2 > WPA > WEP** (WEP is broken). **WPA2 uses AES-CCMP**.

### 3. Per-user Wi-Fi login
**WPA2/WPA3-Enterprise (802.1X)**, which requires a **RADIUS** authentication server so each user authenticates with unique credentials.

### 4. BSS / ESS / SSID
- **BSS** = one AP + its clients (identified by the AP's MAC = BSSID).
- **ESS** = multiple APs sharing one SSID for seamless roaming.
- **SSID** = the network **name**.

### 5. Evil twin
This is an **evil twin** attack. Defenses: **WPA2/WPA3-Enterprise** (server certificate validation), **WIPS** to detect rogue APs, and user awareness.

### 6. Improve capacity
**Lower AP transmit power and add more APs** (smaller cells, less co-channel interference), use **5 GHz / band steering**, and enable **Wi-Fi 6 (OFDMA)** features. Signal isn't the issue — capacity/contention is.
