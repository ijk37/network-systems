# 05-03: Ethernet Standards & Transceivers

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_05-Cabling-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 05: Cabling">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/05-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## Reading Ethernet Names

Format: **`<speed>BASE-<media>`**

- **Speed** — 10 = 10 Mbps, 100 = 100 Mbps, 1000 = 1 Gbps, 10G = 10 Gbps
- **BASE** — **baseband** (whole medium carries one digital signal)
- **Media suffix** — `T` = twisted pair, `S` = short-reach MMF, `L` = long-reach SMF

---

## Common Standards

| Standard | Speed | Media | Distance |
|----------|-------|-------|----------|
| 10BASE-T | 10 Mbps | Cat 3+ UTP | 100 m |
| 100BASE-TX | 100 Mbps | Cat 5 UTP | 100 m |
| **1000BASE-T** | 1 Gbps | Cat 5e/6 UTP | 100 m |
| **10GBASE-T** | 10 Gbps | Cat 6a UTP | 100 m |
| 10GBASE-SR | 10 Gbps | MMF | ~300 m |
| 10GBASE-LR | 10 Gbps | SMF | ~10 km |

---

## Transceivers (Modular Ports)

Hot-swappable modules that give a switch/router a specific media/speed interface:

| Module | Speed |
|--------|-------|
| **SFP** | 1 Gbps |
| **SFP+** | 10 Gbps |
| **QSFP / QSFP+** | 40 Gbps+ |

A **media converter** bridges two media types (e.g., copper ↔ fiber) to extend distance.

---

## Auto-MDIX

Modern switch ports auto-detect straight-through vs. crossover cabling and adjust, so either cable works — making crossover cables largely obsolete.

---

> [!TIP]
> **Key idea —** `speedBASE-media`: **T** = copper (100 m), **S/L** = MMF/SMF fiber. Use **SFP/SFP+/QSFP** transceivers to select the interface; **Auto-MDIX** handles cable type automatically.

See also: [Fiber-Optic Cabling](05-02-fiber-optic.md), [Network Hardware Devices](01-04-network-hardware.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="05-02-fiber-optic.md">Fiber-Optic Cabling</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/05-exercise.md">Module 05 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="05-04-cable-issues-and-tools.md">Cable Issues, Tools &amp; PoE</a>

</div>
<!-- /course-footer -->
