# &#128216; 02-01: Structured Cabling

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_02-Infrastructure_and_Documentation-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 02: Infrastructure and Documentation">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/02-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128204; The Standard: ANSI/TIA-568

**ANSI/TIA-568** is the Commercial Building Wiring Standard ("structured cabling"). It defines how to install network media to maximize performance and minimize maintenance, assuming a **hierarchical star** topology.

---

## &#128268; Structured Cabling Hierarchy

```
Entrance Facility  →  MDF  →  Backbone cabling  →  IDF  →  Horizontal cabling  →  Work Area
   (ISP/demarc)      (core)     (fiber, riser)    (floor)    (≤100 m UTP)         (wall jack/PC)
```

| Component | Role |
|-----------|------|
| **Entrance Facility** | Where external (ISP/WAN) cabling enters the building |
| **Demarcation point (demarc)** | Boundary between provider and customer responsibility |
| **MDF (Main Distribution Frame)** | Central point — core routers/switches, main cross-connect |
| **IDF (Intermediate Distribution Frame)** | Wiring closet (often per floor) linking work areas back to MDF |
| **Backbone (vertical) cabling** | MDF ↔ IDF, floor-to-floor, building-to-building (often fiber) |
| **Horizontal cabling** | IDF → work-area wall jacks |
| **Work area** | The end user's jack, patch cord, and device |

---

## &#128204; Distance Limits

- **Horizontal copper run:** 100 m total = 90 m solid-core permanent link + ~10 m patch cords.
- Runs exceeding this (or needing high bandwidth) use **fiber** for the backbone.

---

## &#128204; Media Choices

- **Copper (UTP/STP)** — inexpensive, easy; limited to 100 m. Used for horizontal runs.
- **Fiber** — long distance, high bandwidth, EMI-immune. Used for backbone/inter-building.

---

> [!TIP]
> **Key idea —** Structured cabling is a **hierarchical star**: work areas → IDFs → MDF → entrance facility/demarc. Copper serves the 100 m horizontal runs; fiber serves the long backbone.

See also: [Racks, Patch Panels & Terminations](02-02-racks-and-terminations.md), [Copper Cabling](05-01-copper-cabling.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="01-05-troubleshooting-and-safety.md">Troubleshooting Methodology &amp; Safety</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/02-exercise.md">Module 02 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="02-02-racks-and-terminations.md">Racks, Patch Panels &amp; Terminations</a>

</div>
<!-- /course-footer -->
