# &#128216; 05-01: Copper Cabling

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_05-Cabling-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 05: Cabling">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/05-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128204; Twisted-Pair Basics

Most LAN copper cabling is **twisted pair** — pairs of wires twisted together to cancel EMI and crosstalk (common-mode rejection).

| Type | Shielding |
|------|-----------|
| **UTP** (Unshielded Twisted Pair) | None — most common |
| **STP** (Shielded Twisted Pair) | Foil/braid — for noisy environments (needs grounding) |

Connector: **RJ-45** (8P8C).

---

## &#128204; Category Ratings

| Category | Max speed | Max distance | Notes |
|----------|-----------|--------------|-------|
| Cat 3 | 10 Mbps | 100 m | Legacy/phone |
| Cat 5 | 100 Mbps | 100 m | Obsolete |
| **Cat 5e** | 1 Gbps | 100 m | Common baseline |
| **Cat 6** | 10 Gbps (to ~55 m) / 1 Gbps to 100 m | 100 m | |
| **Cat 6a** | 10 Gbps | 100 m | Modern 10G choice |
| Cat 7 / 8 | 10–40 Gbps | 100 m / 30 m | Shielded, data-center |

> **Horizontal copper is limited to 100 m** regardless of category.

---

## &#128204; Common Problems

| Problem | Cause |
|---------|-------|
| **Attenuation** | Signal weakens over distance |
| **Crosstalk (NEXT/FEXT)** | One pair's signal bleeds into another |
| **EMI/RFI** | Interference from motors, lights, power lines |

Mitigate EMI with **STP** or **fiber**, and route away from noise sources.

---

## &#128204; Coaxial

**Coax** (RG-6, RG-59) is used for cable TV/broadband (DOCSIS) and legacy Ethernet. Connectors: **F-type**, **BNC**.

---

> [!TIP]
> **Key idea —** Twisting cancels interference. Use **Cat 5e** for 1G and **Cat 6a** for 10G, all capped at **100 m**. Fight EMI with shielding or fiber.

See also: [Fiber-Optic Cabling](05-02-fiber-optic.md), [Cable Issues, Tools & PoE](05-04-cable-issues-and-tools.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="04-05-remote-access.md">Remote Access</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/05-exercise.md">Module 05 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="05-02-fiber-optic.md">Fiber-Optic Cabling</a>

</div>
<!-- /course-footer -->
