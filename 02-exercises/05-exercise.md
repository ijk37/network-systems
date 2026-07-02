# 05: Cabling — Exercises

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_05-Cabling-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 05: Cabling"> <img src="https://img.shields.io/badge/12_questions-C8901A?style=for-the-badge&labelColor=7E0E23" alt="12 questions">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="../01-notes/05-01-copper-cabling.md"><img src="https://img.shields.io/badge/Notes-3B2530?style=flat-square" alt="Notes"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Exercises-3B2530?style=flat-square" alt="All Exercises"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

> [!TIP]
> **Practice —** try each question first, then expand the answer to check your reasoning.

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/05-01-copper-cabling.md) if you get stuck.

---

### Q1. You need 10 Gbps over 100 m of copper. Which category is the minimum, and why not Cat 6?

<details>
<summary><strong>Show answer</strong></summary>

**Cat 6a** — it supports 10GBASE-T over the full 100 m. **Cat 6** only reaches 10 Gbps to ~55 m, so it fails at 100 m.
</details>

---

### Q2. Two buildings are 800 m apart and need a 10 Gbps link. Copper or fiber? Which fiber type and a suitable standard?

<details>
<summary><strong>Show answer</strong></summary>

Copper can't span 800 m (100 m limit) → **fiber**. Use **single-mode fiber (SMF)**; standard **10GBASE-LR** (~10 km). Multimode 10GBASE-SR only reaches a few hundred meters.
</details>

---

### Q3. Why are the pairs in twisted-pair cable twisted?

<details>
<summary><strong>Show answer</strong></summary>

Twisting causes interference to affect both wires of a pair equally so it **cancels out** (common-mode rejection), reducing **crosstalk** and susceptibility to **EMI**.
</details>

---

### Q4. Define attenuation and crosstalk, and give one mitigation for each.

<details>
<summary><strong>Show answer</strong></summary>

- **Attenuation** — signal loss over distance → stay within length limits or use fiber.
- **Crosstalk** — one pair interfering with an adjacent pair → maintain proper twists / quality terminations (or use shielded cable).
</details>

---

### Q5. A run near large industrial motors keeps getting errors. Give two mitigations.

<details>
<summary><strong>Show answer</strong></summary>

Use **shielded cable (STP)** or **fiber**, and **reroute** the cable away from the motors/power lines.
</details>

---

### Q6. Match the connector to its media: RJ-45, LC, BNC.

<details>
<summary><strong>Show answer</strong></summary>

- **RJ-45 → twisted-pair copper (Ethernet)**
- **LC → fiber** (small form factor, often duplex)
- **BNC → coaxial**
</details>

---

### Q7. Compare single-mode and multimode fiber (core size, light source, distance).

<details>
<summary><strong>Show answer</strong></summary>

- **Single-mode (SMF):** ~9 µm core, **laser**, very long distance (km).
- **Multimode (MMF):** 50/62.5 µm core, **LED/VCSEL**, shorter distance.

Mnemonic: **S**ingle-mode = **S**maller core, **S**tretches further.
</details>

---

### Q8. A department needs to power 8 APs at ~25 W each from the switch. Which PoE standard, and why not 802.3af?

<details>
<summary><strong>Show answer</strong></summary>

Each AP needs ~30 W → **802.3at (PoE+)**. **802.3af** supplies only ~15.4 W, insufficient for a 25 W AP.
</details>

---

### Q9. Which tool verifies a cable's wiremap (opens/shorts/miswires), and which traces a specific cable in a bundle?

<details>
<summary><strong>Show answer</strong></summary>

- **Cable tester / wiremap tester** — verifies pin-to-pin correctness (opens, shorts, miswires).
- **Toner probe** (tone generator + probe) — traces/identifies a specific cable.
</details>

---

### Q10. In `1000BASE-T`, what do "1000," "BASE," and "T" mean, and what's the max distance?

<details>
<summary><strong>Show answer</strong></summary>

- **1000** = 1 Gbps
- **BASE** = baseband (whole medium carries one digital signal)
- **T** = twisted-pair copper

Max distance = **100 m**.
</details>

---

### Q11. What does Auto-MDIX do, and why does it make crossover cables largely unnecessary?

<details>
<summary><strong>Show answer</strong></summary>

Auto-MDIX auto-detects the cable type and swaps transmit/receive pairs as needed, so either a straight-through or crossover cable works — you no longer need to hand-pick a crossover for like-device connections.
</details>

---

### Q12. What is a fiber's minimum bend radius, and what happens if you exceed it?

<details>
<summary><strong>Show answer</strong></summary>

The tightest radius a cable can be bent safely. Bending tighter causes **macrobend loss** (light escaping the core) or physical damage, raising insertion loss or breaking the link.
</details>

---

⬅️ **Prev:** [Module 04](04-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 06 — Wireless Networking](06-exercise.md) ➡️

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="04-exercise.md">04: Network Protocols — Exercises</a> &nbsp;|&nbsp; <a href="README.md">All Exercises</a> &nbsp;|&nbsp; <a href="../01-notes/05-01-copper-cabling.md">Module 05 Notes</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="06-exercise.md">06: Wireless Networking — Exercises</a>

</div>
<!-- /course-footer -->
