# 05-04: Cable Issues, Tools & PoE

## Common Cabling Problems

| Problem | Symptom | Fix |
|---------|---------|-----|
| **Attenuation** | Weak/failing signal on long runs | Stay within distance limits; use fiber |
| **Crosstalk (NEXT/FEXT)** | Errors, degraded throughput | Proper twists, quality terminations |
| **EMI/RFI** | Intermittent errors near noise | Use STP or fiber; reroute |
| **Open / short / miswire** | No link or wrong pairs | Re-terminate; verify with tester |
| **Dirty/damaged fiber end** | High insertion loss | Inspect and clean end-face |
| **Bend radius exceeded** | Fiber signal loss | Re-route respecting bend radius |

---

## Diagnostic Tools

| Tool | Purpose |
|------|---------|
| **Cable tester / wiremap** | Opens, shorts, miswires, pin mapping |
| **Cable certifier** | Certifies to category (crosstalk, attenuation) |
| **Toner probe** | Trace a specific cable in a bundle |
| **OTDR** | Locate fiber breaks/splices, measure loss |
| **Light meter / power meter** | Measure fiber insertion loss (dB) |

---

## Power over Ethernet (PoE)

PoE delivers **DC power + data** over the same twisted-pair cable — powering APs, IP phones, and cameras.

| Standard | Name | Power (source) |
|----------|------|----------------|
| **802.3af** | PoE | ~15.4 W |
| **802.3at** | PoE+ | ~30 W |
| **802.3bt** | PoE++ / 4PPoE | ~60–100 W |

---

## Cable Fire Ratings

| Rating | Where |
|--------|-------|
| **Plenum (CMP)** | HVAC air spaces — less toxic smoke |
| **Riser (CMR)** | Vertical shafts between floors |

---

## Key Idea

> Diagnose copper with a **wiremap/certifier** and fiber with an **OTDR/power meter**. **PoE** (802.3af/at/bt) powers devices over Ethernet. Use **plenum** cable in air spaces.

See also: [Copper Cabling](05-01-copper-cabling.md), [Racks, Patch Panels & Terminations](02-02-racks-and-terminations.md)

<!-- nav -->

---

⬅️ **Prev:** [Ethernet Standards & Transceivers](05-03-ethernet-standards.md)  ·  [📚 All Notes](README.md)  ·  **Next:** [Wireless Fundamentals & 802.11 Standards](06-01-wireless-standards.md) ➡️
