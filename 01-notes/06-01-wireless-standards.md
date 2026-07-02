# &#128216; 06-01: Wireless Fundamentals & 802.11 Standards

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_06-Wireless_Networking-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 06: Wireless Networking">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/06-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128204; IEEE 802.11

The **802.11** family defines Wi-Fi WLAN standards. Wireless uses **radio frequencies** and the **CSMA/CA** access method (Collision *Avoidance*, since collisions can't be reliably detected on air).

---

## &#128204; The 802.11 Standards

| Standard | Wi-Fi name | Band(s) | Max rate (approx) |
|----------|-----------|---------|-------------------|
| 802.11a | — | 5 GHz | 54 Mbps |
| 802.11b | — | 2.4 GHz | 11 Mbps |
| 802.11g | — | 2.4 GHz | 54 Mbps |
| **802.11n** | Wi-Fi 4 | 2.4 & 5 GHz | 600 Mbps (MIMO) |
| **802.11ac** | Wi-Fi 5 | 5 GHz | ~1.3+ Gbps (MU-MIMO) |
| **802.11ax** | Wi-Fi 6/6E | 2.4, 5, (6) GHz | Multi-Gbps (OFDMA) |

---

## &#128204; Key Technologies

| Feature | Introduced | Benefit |
|---------|-----------|---------|
| **MIMO** | 802.11n | Multiple antennas/spatial streams → more throughput |
| **MU-MIMO** | 802.11ac | Serve multiple clients simultaneously |
| **OFDMA** | 802.11ax | Subdivide a channel to serve many clients efficiently |
| **Band steering** | — | Push capable clients to 5 GHz |

---

## &#128204; Modes of Operation

- **Infrastructure mode** — clients connect through an **access point** (the norm).
- **Ad hoc mode** — devices connect directly, no AP.
- **Wireless bridge** — link two wired segments over RF (point-to-point).

---

> [!TIP]
> **Key idea —** Wi-Fi = **802.11**, using **CSMA/CA**. Know the generations: **n = Wi-Fi 4, ac = Wi-Fi 5, ax = Wi-Fi 6**. **MIMO/OFDMA** boost capacity in dense environments.

See also: [Frequencies, Channels & Antennas](06-02-frequencies-and-channels.md), [Wireless Security](06-03-wireless-security.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="05-04-cable-issues-and-tools.md">Cable Issues, Tools &amp; PoE</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/06-exercise.md">Module 06 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="06-02-frequencies-and-channels.md">Frequencies, Channels &amp; Antennas</a>

</div>
<!-- /course-footer -->
