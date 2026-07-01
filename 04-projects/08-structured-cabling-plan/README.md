# Project 08 — Structured Cabling Plan

**Type:** Design + optional hands-on
**Modules:** 05 (Cabling), 02 (Infrastructure)
**Difficulty:** ⭐⭐⭐

---

## Objective

Design a **structured cabling plan** for a small two-floor building that respects TIA-568 distance limits, selects appropriate media, budgets PoE, and produces a bill of materials (BOM).

---

## Scenario

**Northside Clinic** occupies two floors:

- **Floor 1:** 24 workstations, 4 wireless APs, reception, 1 IDF.
- **Floor 2:** 18 workstations, 3 wireless APs, 1 IDF.
- **MDF** is in the Floor-1 server room; the ISP demarc is beside it.
- Longest horizontal run: ~85 m. Distance MDF ↔ Floor-2 IDF: ~120 m.

---

## Tasks

### 1. Media selection
Choose cable types and justify:
- Horizontal runs to workstations/APs → which copper category, and why?
- MDF ↔ IDF backbone (120 m) → copper or fiber? Which fiber type/standard?

### 2. Distance validation
Confirm every horizontal run stays within the **100 m** channel limit (90 m permanent + 10 m patch). Flag any run that needs a different approach.

### 3. PoE budget
Each AP draws ~25 W. Calculate total PoE load per floor switch and choose a PoE standard (**802.3af / at / bt**). Confirm the switch's PoE power budget covers it.

### 4. Termination & fire rating
- Specify **T568B** terminations and where **crossover** vs **straight-through** applies.
- Where is **plenum (CMP)** cable required vs **riser (CMR)**?

### 5. Bill of Materials
Produce a BOM: cable (by type/length), patch panels, keystone jacks, racks, PoE switches, transceivers/media converters, and fiber connectors.

---

## Optional Hands-On

- **Crimp a patch cable** to **T568B** on both ends, then verify the wiremap with a **cable tester** (opens/shorts/miswires).
- Identify which tool you'd use to **trace** a specific cable in a bundle (toner probe) and to certify a **fiber** run (OTDR / power meter).

---

## Verification Checklist

- [ ] No horizontal run exceeds 100 m.
- [ ] Backbone media handles 120 m (copper can't — fiber chosen).
- [ ] PoE standard covers the per-switch AP load.
- [ ] Plenum vs riser correctly specified.
- [ ] BOM is complete enough to order from.

---

## Stretch Goals

- Add **redundant** backbone fiber between MDF and each IDF.
- Recommend a cable-management and labeling approach (ties/trays + scheme).

See also notes: [[05-01-copper-cabling]], [[05-02-fiber-optic]], [[05-04-cable-issues-and-tools]]
