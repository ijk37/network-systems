# 06: Wireless Networking — Exercises

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/06-01-wireless-standards.md) if you get stuck.

---

### Q1. In a crowded building on 2.4 GHz, which three channels should APs use, and why?

<details><summary>▶ Show answer</summary>

**1, 6, and 11** — the only **non-overlapping** 20 MHz channels in 2.4 GHz, minimizing co-channel/adjacent-channel interference.
</details>

---

### Q2. Rank WEP, WPA, WPA2, WPA3 by security, and name the cipher WPA2 uses.

<details><summary>▶ Show answer</summary>

**WPA3 > WPA2 > WPA > WEP** (WEP is broken). **WPA2 uses AES-CCMP.**
</details>

---

### Q3. Match the 802.11 amendment to its Wi-Fi name: 802.11n, 802.11ac, 802.11ax.

<details><summary>▶ Show answer</summary>

- 802.11n → **Wi-Fi 4**
- 802.11ac → **Wi-Fi 5**
- 802.11ax → **Wi-Fi 6 / 6E**
</details>

---

### Q4. A company wants each employee to log into Wi-Fi with their own credentials. Personal or Enterprise? What server is required?

<details><summary>▶ Show answer</summary>

**WPA2/WPA3-Enterprise (802.1X)**, which requires a **RADIUS** authentication server so each user authenticates with unique credentials.
</details>

---

### Q5. Distinguish BSS, ESS, and SSID.

<details><summary>▶ Show answer</summary>

- **BSS** — one AP + its associated clients (identified by BSSID = the AP's MAC).
- **ESS** — multiple APs sharing one SSID over a common backbone (enables roaming).
- **SSID** — the network **name** clients connect to.
</details>

---

### Q6. Laptops keep connecting to a fake "Corp-WiFi" and leaking credentials. Name the attack and one defense.

<details><summary>▶ Show answer</summary>

An **evil twin** attack. Defenses: **WPA2/WPA3-Enterprise** (server certificate validation), **WIPS** to detect rogue APs, and user awareness.
</details>

---

### Q7. Why does Wi-Fi use CSMA/CA instead of CSMA/CD?

<details><summary>▶ Show answer</summary>

Stations can't reliably **detect** collisions on the shared radio medium (they can't transmit and listen simultaneously), so Wi-Fi **avoids** collisions (listen, wait, use ACKs) rather than detecting them like wired Ethernet.
</details>

---

### Q8. Compare the 2.4 GHz and 5 GHz bands (range, speed, congestion).

<details><summary>▶ Show answer</summary>

- **2.4 GHz** — longer range/better penetration, but slower, few channels, and crowded (microwaves, Bluetooth, cordless phones).
- **5 GHz** — shorter range, but faster with many clean channels.
</details>

---

### Q9. A dense office has poor Wi-Fi capacity despite strong signal. Give two design changes.

<details><summary>▶ Show answer</summary>

**Lower AP transmit power and add more APs** (smaller cells → less co-channel interference, more capacity), use **5 GHz / band steering**, and enable **Wi-Fi 6 (OFDMA)**. Signal strength isn't the problem — contention/capacity is.
</details>

---

### Q10. What is a wireless site survey, and what deliverable does it produce?

<details><summary>▶ Show answer</summary>

A measurement of RF conditions (passive/active/predictive) to plan AP placement, channels, and power. It produces a **heat map** of signal strength/coverage, revealing gaps and interference.
</details>

---

### Q11. Does hiding the SSID make a network secure? Explain.

<details><summary>▶ Show answer</summary>

**No.** The SSID still appears in client probe requests and can be captured. Real protection comes from **WPA2/WPA3 encryption** — SSID hiding is only minor obscurity.
</details>

---

### Q12. What does a wireless LAN controller (WLC) provide when managing many APs?

<details><summary>▶ Show answer</summary>

Centralized configuration, **channel/power coordination (RRM)**, fast roaming across an ESS, and unified monitoring for many "thin" APs — instead of configuring each AP by hand.
</details>

---

⬅️ **Prev:** [Module 05](05-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 07 — Cloud & Remote Access](07-exercise.md) ➡️
