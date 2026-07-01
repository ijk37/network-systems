# 05: Cabling — Exercises

## Questions

1. You need 10 Gbps over 100 m of copper. Which cable category is the minimum required, and why not Cat 6?
2. Two buildings are 800 m apart and need a 10 Gbps link. Copper or fiber? Which fiber type, and name a suitable Ethernet standard.
3. Define attenuation and crosstalk, and give one way to reduce each.
4. A run near large industrial motors keeps getting errors. Give two mitigations.
5. Match the connector to its media: RJ-45, LC, BNC.
6. A department needs to power 8 wireless APs at ~25 W each from the switch. Which PoE standard is required, and why not 802.3af?

---

## Solutions

### 1. 10 Gbps over 100 m copper
**Cat 6a** — it supports 10GBASE-T over the full 100 m. **Cat 6** only reaches 10 Gbps to ~55 m, so it fails at 100 m.

### 2. Building-to-building 10 Gbps
Copper can't span 800 m (100 m limit) → **fiber**. Use **single-mode fiber** (long distance); standard **10GBASE-LR** (~10 km). (10GBASE-SR over MMF reaches only a few hundred meters.)

### 3. Attenuation & crosstalk
- **Attenuation** = signal loss over distance → stay within length limits or use fiber.
- **Crosstalk** = one pair interfering with another → maintain proper twists and quality terminations (or use shielded cable).

### 4. EMI mitigation
Use **shielded cable (STP)** or **fiber**, and **reroute** the cable away from the motors/power lines.

### 5. Connector → media
- **RJ-45 → twisted-pair copper (Ethernet)**
- **LC → fiber**
- **BNC → coaxial**

### 6. PoE choice
8 × 25 W needs ~30 W per port → **802.3at (PoE+)**. **802.3af** supplies only ~15.4 W, insufficient for a 25 W AP.
