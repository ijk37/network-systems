# 12-02: WAN Technologies

## Dedicated & Provider Technologies

| Technology | Notes |
|------------|-------|
| **Leased line (T1/T3)** | Dedicated digital circuit. T1 = 1.544 Mbps; T3 ≈ 44.7 Mbps |
| **MPLS** | Forwards by **labels** (not full IP lookups); supports QoS/traffic engineering |
| **Metro Ethernet** | Ethernet across a provider metro (E-Line, E-LAN) |
| **SONET/SDH** | High-speed synchronous optical transport (carrier backbones) |
| **Frame Relay / ATM** | Legacy packet/cell switching — largely replaced |

---

## Broadband Access

| Technology | Medium | Notes |
|------------|--------|-------|
| **DSL** | Copper phone line | Speed drops with distance from DSLAM |
| **Cable** | Coax/HFC | Uses **DOCSIS**; shared with neighbors |
| **Fiber (FTTH/PON)** | Fiber | Highest bandwidth, lowest latency |

---

## Wireless WAN

| Technology | Notes |
|------------|-------|
| **Cellular (4G/LTE, 5G)** | 5G adds high speed/low latency; used for fixed-wireless and failover |
| **Satellite** | Coverage anywhere; **high latency** (esp. geostationary). LEO reduces it |

---

## Encapsulation on WAN Links

- **PPP** — framing + authentication (**PAP/CHAP**) on point-to-point links. **CHAP** hashes the password (secure); **PAP** sends it in clear text.
- **PPPoE** — PPP over Ethernet, common on DSL.

---

## Key Idea

> Know **leased lines (T1/T3)**, **MPLS** (label switching), **Metro Ethernet**, broadband (**DSL/cable/fiber**), and wireless (**cellular/satellite**). **Fiber** wins on bandwidth/latency; **satellite** trades latency for reach.

See also: [[12-01-wan-fundamentals]], [[12-04-wan-topologies]]
