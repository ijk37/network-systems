# &#128216; 12-02: WAN Technologies

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_12-Wide_Area_Networks-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 12: Wide Area Networks">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/12-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128204; Dedicated & Provider Technologies

| Technology | Notes |
|------------|-------|
| **Leased line (T1/T3)** | Dedicated digital circuit. T1 = 1.544 Mbps; T3 ≈ 44.7 Mbps |
| **MPLS** | Forwards by **labels** (not full IP lookups); supports QoS/traffic engineering |
| **Metro Ethernet** | Ethernet across a provider metro (E-Line, E-LAN) |
| **SONET/SDH** | High-speed synchronous optical transport (carrier backbones) |
| **Frame Relay / ATM** | Legacy packet/cell switching — largely replaced |

---

## &#128204; Broadband Access

| Technology | Medium | Notes |
|------------|--------|-------|
| **DSL** | Copper phone line | Speed drops with distance from DSLAM |
| **Cable** | Coax/HFC | Uses **DOCSIS**; shared with neighbors |
| **Fiber (FTTH/PON)** | Fiber | Highest bandwidth, lowest latency |

---

## &#128246; Wireless WAN

| Technology | Notes |
|------------|-------|
| **Cellular (4G/LTE, 5G)** | 5G adds high speed/low latency; used for fixed-wireless and failover |
| **Satellite** | Coverage anywhere; **high latency** (esp. geostationary). LEO reduces it |

---

## &#127757; Encapsulation on WAN Links

- **PPP** — framing + authentication (**PAP/CHAP**) on point-to-point links. **CHAP** hashes the password (secure); **PAP** sends it in clear text.
- **PPPoE** — PPP over Ethernet, common on DSL.

---

> [!TIP]
> **Key idea —** Know **leased lines (T1/T3)**, **MPLS** (label switching), **Metro Ethernet**, broadband (**DSL/cable/fiber**), and wireless (**cellular/satellite**). **Fiber** wins on bandwidth/latency; **satellite** trades latency for reach.

See also: [WAN Fundamentals](12-01-wan-fundamentals.md), [WAN Topologies & Modern WAN](12-04-wan-topologies.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [WAN Fundamentals](12-01-wan-fundamentals.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 12 Exercise](../02-exercises/12-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [Routing](12-03-routing.md)

</div>
<!-- /course-footer -->
