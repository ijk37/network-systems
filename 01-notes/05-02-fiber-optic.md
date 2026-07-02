# 05-02: Fiber-Optic Cabling

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_05-Cabling-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 05: Cabling">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/05-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## How Fiber Works

Fiber carries data as **pulses of light** through a glass/plastic core. Because it carries no electrical signal, it is **immune to EMI/RFI** and supports **long distances** and **high bandwidth**.

---

## Single-Mode vs. Multimode

| | **Single-mode (SMF)** | **Multimode (MMF)** |
|---|----------------------|---------------------|
| Core | ~9 µm (tiny) | 50 / 62.5 µm (larger) |
| Light source | Laser | LED / VCSEL |
| Distance | Very long (km) | Shorter (up to ~550 m) |
| Cost | Higher | Lower |
| Use | Long-haul, backbone, inter-building | Within a building / data center |

Mnemonic: **S**ingle-mode = **S**maller core, **S**tretches further.

---

## Fiber Connectors

| Connector | Notes |
|-----------|-------|
| **LC** | Small form factor, often duplex — most common today |
| **SC** | "Square" push-pull |
| **ST** | "Stick/twist" bayonet (older) |
| **MTP/MPO** | Multi-fiber, high density |

---

## Ethernet over Fiber

| Standard | Media | Distance |
|----------|-------|----------|
| **10GBASE-SR** | MMF (short reach) | ~300 m |
| **10GBASE-LR** | SMF (long reach) | ~10 km |

---

## Handling Care

- Respect the **minimum bend radius** — over-bending causes macrobend light loss.
- Keep end-faces **clean**; contamination raises **insertion loss** and causes errors.
- Validate with a **light source/power meter** (dB loss) and characterize with an **OTDR**.

---

> [!TIP]
> **Key idea —** Fiber = **light, no EMI, long distance**. **Single-mode** (small core, laser) for long haul; **multimode** (large core, LED) for shorter runs. **LC** is the dominant connector.

See also: [Copper Cabling](05-01-copper-cabling.md), [Ethernet Standards & Transceivers](05-03-ethernet-standards.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="05-01-copper-cabling.md">Copper Cabling</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/05-exercise.md">Module 05 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="05-03-ethernet-standards.md">Ethernet Standards &amp; Transceivers</a>

</div>
<!-- /course-footer -->
