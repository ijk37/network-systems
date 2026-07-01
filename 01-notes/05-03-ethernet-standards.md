# 05-03: Ethernet Standards & Transceivers

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

## Key Idea

> `speedBASE-media`: **T** = copper (100 m), **S/L** = MMF/SMF fiber. Use **SFP/SFP+/QSFP** transceivers to select the interface; **Auto-MDIX** handles cable type automatically.

See also: [Fiber-Optic Cabling](05-02-fiber-optic.md), [Network Hardware Devices](01-04-network-hardware.md)

<!-- nav -->

---

⬅️ **Prev:** [Fiber-Optic Cabling](05-02-fiber-optic.md)  ·  [📚 All Notes](README.md)  ·  **Next:** [Cable Issues, Tools & PoE](05-04-cable-issues-and-tools.md) ➡️
