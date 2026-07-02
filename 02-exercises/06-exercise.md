# &#9997; 06: Wireless Networking — Exercises

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_06-Wireless_Networking-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 06: Wireless Networking"> <img src="https://img.shields.io/badge/12_questions-C8901A?style=for-the-badge&labelColor=7E0E23" alt="12 questions">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../01-notes/06-01-wireless-standards.md) [![All Exercises](https://img.shields.io/badge/All_Exercises-3B2530?style=flat-square)](README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

> [!TIP]
> **Practice —** try each question first, then expand the answer to check your reasoning.

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/06-01-wireless-standards.md) if you get stuck.

---

### &#128161; Q1. In a crowded building on 2.4 GHz, which three channels should APs use, and why?

<details>
<summary><strong>Show answer</strong></summary>

**1, 6, and 11** — the only **non-overlapping** 20 MHz channels in 2.4 GHz, minimizing co-channel/adjacent-channel interference.
</details>

---

### &#128272; Q2. Rank WEP, WPA, WPA2, WPA3 by security, and name the cipher WPA2 uses.

<details>
<summary><strong>Show answer</strong></summary>

**WPA3 > WPA2 > WPA > WEP** (WEP is broken). **WPA2 uses AES-CCMP.**
</details>

---

### &#128313; Q3. Match the 802.11 amendment to its Wi-Fi name: 802.11n, 802.11ac, 802.11ax.

<details>
<summary><strong>Show answer</strong></summary>

- 802.11n → **Wi-Fi 4**
- 802.11ac → **Wi-Fi 5**
- 802.11ax → **Wi-Fi 6 / 6E**
</details>

---

### &#127757; Q4. A company wants each employee to log into Wi-Fi with their own credentials. Personal or Enterprise? What server is required?

<details>
<summary><strong>Show answer</strong></summary>

**WPA2/WPA3-Enterprise (802.1X)**, which requires a **RADIUS** authentication server so each user authenticates with unique credentials.
</details>

---

### &#128313; Q5. Distinguish BSS, ESS, and SSID.

<details>
<summary><strong>Show answer</strong></summary>

- **BSS** — one AP + its associated clients (identified by BSSID = the AP's MAC).
- **ESS** — multiple APs sharing one SSID over a common backbone (enables roaming).
- **SSID** — the network **name** clients connect to.
</details>

---

### &#128313; Q6. Laptops keep connecting to a fake "Corp-WiFi" and leaking credentials. Name the attack and one defense.

<details>
<summary><strong>Show answer</strong></summary>

An **evil twin** attack. Defenses: **WPA2/WPA3-Enterprise** (server certificate validation), **WIPS** to detect rogue APs, and user awareness.
</details>

---

### &#128161; Q7. Why does Wi-Fi use CSMA/CA instead of CSMA/CD?

<details>
<summary><strong>Show answer</strong></summary>

Stations can't reliably **detect** collisions on the shared radio medium (they can't transmit and listen simultaneously), so Wi-Fi **avoids** collisions (listen, wait, use ACKs) rather than detecting them like wired Ethernet.
</details>

---

### &#128313; Q8. Compare the 2.4 GHz and 5 GHz bands (range, speed, congestion).

<details>
<summary><strong>Show answer</strong></summary>

- **2.4 GHz** — longer range/better penetration, but slower, few channels, and crowded (microwaves, Bluetooth, cordless phones).
- **5 GHz** — shorter range, but faster with many clean channels.
</details>

---

### &#128313; Q9. A dense office has poor Wi-Fi capacity despite strong signal. Give two design changes.

<details>
<summary><strong>Show answer</strong></summary>

**Lower AP transmit power and add more APs** (smaller cells → less co-channel interference, more capacity), use **5 GHz / band steering**, and enable **Wi-Fi 6 (OFDMA)**. Signal strength isn't the problem — contention/capacity is.
</details>

---

### &#10067; Q10. What is a wireless site survey, and what deliverable does it produce?

<details>
<summary><strong>Show answer</strong></summary>

A measurement of RF conditions (passive/active/predictive) to plan AP placement, channels, and power. It produces a **heat map** of signal strength/coverage, revealing gaps and interference.
</details>

---

### &#128313; Q11. Does hiding the SSID make a network secure? Explain.

<details>
<summary><strong>Show answer</strong></summary>

**No.** The SSID still appears in client probe requests and can be captured. Real protection comes from **WPA2/WPA3 encryption** — SSID hiding is only minor obscurity.
</details>

---

### &#128246; Q12. What does a wireless LAN controller (WLC) provide when managing many APs?

<details>
<summary><strong>Show answer</strong></summary>

Centralized configuration, **channel/power coordination (RRM)**, fast roaming across an ESS, and unified monitoring for many "thin" APs — instead of configuring each AP by hand.
</details>

---

⬅️ **Prev:** [Module 05](05-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 07 — Cloud & Remote Access](07-exercise.md) ➡️

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [05: Cabling — Exercises](05-exercise.md) &nbsp;|&nbsp; [All Exercises](README.md) &nbsp;|&nbsp; [Module 06 Notes](../01-notes/06-01-wireless-standards.md) &nbsp;|&nbsp; <strong>Next:</strong> [07: Cloud Computing &amp; Remote Access — Exercises](07-exercise.md)

</div>
<!-- /course-footer -->
