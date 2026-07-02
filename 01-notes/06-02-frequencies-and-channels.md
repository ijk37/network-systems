# &#128216; 06-02: Frequencies, Channels & Antennas

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_06-Wireless_Networking-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 06: Wireless Networking">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/06-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128204; The Two Main Bands

| | **2.4 GHz** | **5 GHz** |
|---|-------------|-----------|
| Range | Longer, better penetration | Shorter |
| Speed | Lower | Higher |
| Channels | Few (crowded) | Many (cleaner) |
| Interference | High (microwaves, Bluetooth, cordless phones) | Lower |

**Wi-Fi 6E** adds the **6 GHz** band for even more clean spectrum.

---

## &#128204; Channels

- In **2.4 GHz**, the only **non-overlapping** 20 MHz channels are **1, 6, and 11**. Using others causes co-channel/adjacent-channel interference.
- **5 GHz** has many non-overlapping channels, allowing more APs and wider (channel-bonded) channels.

### &#128313; Channel bonding
Combining channels (40/80/160 MHz) increases speed but consumes more spectrum — practical mainly in 5/6 GHz; it worsens congestion in 2.4 GHz.

---

## &#128204; Antennas

| Type | Pattern | Use |
|------|---------|-----|
| **Omnidirectional** | All directions | General coverage |
| **Directional (Yagi, panel, parabolic)** | Focused beam | Point-to-point links, extended range |

Higher **gain** = more focused/farther signal.

---

## &#128204; Signal Quality

- **RSSI** — received signal strength.
- **SNR** (signal-to-noise ratio) — higher is better; low SNR forces lower data rates, retransmissions, and drops.
- Signal weakens with distance (**path loss**) and is absorbed/reflected by walls and objects.

---

> [!TIP]
> **Key idea —** **2.4 GHz** = range but crowded (use **channels 1/6/11**); **5/6 GHz** = speed and clean channels. Use **directional antennas** for point-to-point, and design for good **SNR**.

See also: [Wireless Fundamentals & 802.11 Standards](06-01-wireless-standards.md), [Wireless Design & Roaming](06-04-wireless-design.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Wireless Fundamentals &amp; 802.11 Standards](06-01-wireless-standards.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 06 Exercise](../02-exercises/06-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [Wireless Security](06-03-wireless-security.md)

</div>
<!-- /course-footer -->
