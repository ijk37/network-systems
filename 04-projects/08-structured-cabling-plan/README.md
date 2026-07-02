# &#128736; Project 08 — Structured Cabling Plan


<!-- course-header -->
<div align="center" markdown>

![Network Systems](../../assets/banner.svg)

<img src="https://img.shields.io/badge/Project_08-Structured_Cabling_Plan-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Project 08: Structured Cabling Plan">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../../index.md) [![All Projects](https://img.shields.io/badge/All_Projects-3B2530?style=flat-square)](../README.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../../01-notes/README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../../03-quiz/)

</div>
<!-- /course-header -->

**Type:** Design + optional hands-on
**Modules:** 05 (Cabling), 02 (Infrastructure)
**Difficulty:** ⭐⭐⭐

---

## &#127919; Objective

Design a **structured cabling plan** for a small two-floor building that respects TIA-568 distance limits, selects appropriate media, budgets PoE, and produces a bill of materials (BOM).

---

## &#129517; Scenario

**Northside Clinic** occupies two floors:

- **Floor 1:** 24 workstations, 4 wireless APs, reception, 1 IDF.
- **Floor 2:** 18 workstations, 3 wireless APs, 1 IDF.
- **MDF** is in the Floor-1 server room; the ISP demarc is beside it.
- Longest horizontal run: ~85 m. Distance MDF ↔ Floor-2 IDF: ~120 m.

---

## &#129513; Tasks

### &#128313; 1. Media selection
Choose cable types and justify:
- Horizontal runs to workstations/APs → which copper category, and why?
- MDF ↔ IDF backbone (120 m) → copper or fiber? Which fiber type/standard?

### &#128313; 2. Distance validation
Confirm every horizontal run stays within the **100 m** channel limit (90 m permanent + 10 m patch). Flag any run that needs a different approach.

### &#128313; 3. PoE budget
Each AP draws ~25 W. Calculate total PoE load per floor switch and choose a PoE standard (**802.3af / at / bt**). Confirm the switch's PoE power budget covers it.

### &#128313; 4. Termination & fire rating
- Specify **T568B** terminations and where **crossover** vs **straight-through** applies.
- Where is **plenum (CMP)** cable required vs **riser (CMR)**?

### &#128313; 5. Bill of Materials
Produce a BOM: cable (by type/length), patch panels, keystone jacks, racks, PoE switches, transceivers/media converters, and fiber connectors.

---

## &#128204; Optional Hands-On

- **Crimp a patch cable** to **T568B** on both ends, then verify the wiremap with a **cable tester** (opens/shorts/miswires).
- Identify which tool you'd use to **trace** a specific cable in a bundle (toner probe) and to certify a **fiber** run (OTDR / power meter).

---

## &#9989; Verification Checklist

- [ ] No horizontal run exceeds 100 m.
- [ ] Backbone media handles 120 m (copper can't — fiber chosen).
- [ ] PoE standard covers the per-switch AP load.
- [ ] Plenum vs riser correctly specified.
- [ ] BOM is complete enough to order from.

---

## &#128640; Stretch Goals

- Add **redundant** backbone fiber between MDF and each IDF.
- Recommend a cable-management and labeling approach (ties/trays + scheme).

See also notes: [[05-01-copper-cabling]], [[05-02-fiber-optic]], [[05-04-cable-issues-and-tools]]
