# &#128216; 05-04: Cable Issues, Tools & PoE

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_05-Cabling-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 05: Cabling">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/05-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128268; Common Cabling Problems

| Problem | Symptom | Fix |
|---------|---------|-----|
| **Attenuation** | Weak/failing signal on long runs | Stay within distance limits; use fiber |
| **Crosstalk (NEXT/FEXT)** | Errors, degraded throughput | Proper twists, quality terminations |
| **EMI/RFI** | Intermittent errors near noise | Use STP or fiber; reroute |
| **Open / short / miswire** | No link or wrong pairs | Re-terminate; verify with tester |
| **Dirty/damaged fiber end** | High insertion loss | Inspect and clean end-face |
| **Bend radius exceeded** | Fiber signal loss | Re-route respecting bend radius |

---

## &#129520; Diagnostic Tools

| Tool | Purpose |
|------|---------|
| **Cable tester / wiremap** | Opens, shorts, miswires, pin mapping |
| **Cable certifier** | Certifies to category (crosstalk, attenuation) |
| **Toner probe** | Trace a specific cable in a bundle |
| **OTDR** | Locate fiber breaks/splices, measure loss |
| **Light meter / power meter** | Measure fiber insertion loss (dB) |

---

## &#128204; Power over Ethernet (PoE)

PoE delivers **DC power + data** over the same twisted-pair cable — powering APs, IP phones, and cameras.

| Standard | Name | Power (source) |
|----------|------|----------------|
| **802.3af** | PoE | ~15.4 W |
| **802.3at** | PoE+ | ~30 W |
| **802.3bt** | PoE++ / 4PPoE | ~60–100 W |

---

## &#128204; Cable Fire Ratings

| Rating | Where |
|--------|-------|
| **Plenum (CMP)** | HVAC air spaces — less toxic smoke |
| **Riser (CMR)** | Vertical shafts between floors |

---

> [!TIP]
> **Key idea —** Diagnose copper with a **wiremap/certifier** and fiber with an **OTDR/power meter**. **PoE** (802.3af/at/bt) powers devices over Ethernet. Use **plenum** cable in air spaces.

See also: [Copper Cabling](05-01-copper-cabling.md), [Racks, Patch Panels & Terminations](02-02-racks-and-terminations.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Ethernet Standards &amp; Transceivers](05-03-ethernet-standards.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 05 Exercise](../02-exercises/05-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [Wireless Fundamentals &amp; 802.11 Standards](06-01-wireless-standards.md)

</div>
<!-- /course-footer -->
