# 05-01: Copper Cabling

## Twisted-Pair Basics

Most LAN copper cabling is **twisted pair** — pairs of wires twisted together to cancel EMI and crosstalk (common-mode rejection).

| Type | Shielding |
|------|-----------|
| **UTP** (Unshielded Twisted Pair) | None — most common |
| **STP** (Shielded Twisted Pair) | Foil/braid — for noisy environments (needs grounding) |

Connector: **RJ-45** (8P8C).

---

## Category Ratings

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

## Common Problems

| Problem | Cause |
|---------|-------|
| **Attenuation** | Signal weakens over distance |
| **Crosstalk (NEXT/FEXT)** | One pair's signal bleeds into another |
| **EMI/RFI** | Interference from motors, lights, power lines |

Mitigate EMI with **STP** or **fiber**, and route away from noise sources.

---

## Coaxial

**Coax** (RG-6, RG-59) is used for cable TV/broadband (DOCSIS) and legacy Ethernet. Connectors: **F-type**, **BNC**.

---

## Key Idea

> Twisting cancels interference. Use **Cat 5e** for 1G and **Cat 6a** for 10G, all capped at **100 m**. Fight EMI with shielding or fiber.

See also: [[05-02-fiber-optic]], [[05-04-cable-issues-and-tools]]
