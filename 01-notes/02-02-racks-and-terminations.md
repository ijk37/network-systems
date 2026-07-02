# &#128216; 02-02: Racks, Patch Panels & Terminations

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_02-Infrastructure_and_Documentation-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 02: Infrastructure and Documentation">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/02-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128204; Equipment Racks

- Standard rack width is **19 inches**; height is measured in **rack units (U)**, where **1U = 1.75 inches**.
- A common full rack is **42U**.
- Devices are described by height: a "1U switch," "2U server," etc.
- A **rack diagram (rack elevation)** documents which device sits at which U position.

---

## &#128204; Patch Panels

A **patch panel** terminates permanent horizontal cable runs. Short **patch cords** then connect panel ports to switch ports.

- Keeps cabling organized and easy to re-patch.
- Horizontal runs are **punched down** into the back of the panel with a **punch-down tool**.

---

## &#128204; Termination Standards: T568A vs. T568B

Two pin/pair color schemes define how the 8 conductors map to the RJ-45 pins:

| Cable type | Ends | Use |
|------------|------|-----|
| **Straight-through** | Same standard both ends (B–B) | Unlike devices: PC ↔ switch |
| **Crossover** | T568A one end, T568B the other | Like devices: switch ↔ switch (legacy) |
| **Rollover** | Reversed | Console cable to router/switch |

- Be **consistent** — use the same standard on both ends unless intentionally making a crossover.
- **Auto-MDIX** on modern switches auto-detects cable type, making crossover cables mostly unnecessary.

---

## &#129520; Tools

| Tool | Purpose |
|------|---------|
| **Punch-down tool** | Seat wires into 110/66 blocks and patch panels |
| **Crimper** | Attach RJ-45 plugs to patch cables |
| **Cable tester** | Verify wiremap (opens/shorts/miswires) |
| **Toner probe** | Trace/identify a specific cable in a bundle |

---

> [!TIP]
> **Key idea —** Horizontal runs are **punched down** into patch panels; **patch cords** connect them to switches. Use **T568B** consistently (or A/B for a crossover), and remember **1U = 1.75 in**.

See also: [Structured Cabling](02-01-structured-cabling.md), [Cable Issues, Tools & PoE](05-04-cable-issues-and-tools.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="02-01-structured-cabling.md">Structured Cabling</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/02-exercise.md">Module 02 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="02-03-network-documentation.md">Network Documentation</a>

</div>
<!-- /course-footer -->
