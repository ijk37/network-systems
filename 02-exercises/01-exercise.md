# &#9997; 01: Introduction to Networking — Exercises

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_01-Introduction_to_Networking-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 01: Introduction to Networking"> <img src="https://img.shields.io/badge/12_questions-C8901A?style=for-the-badge&labelColor=7E0E23" alt="12 questions">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../01-notes/01-01-what-is-network.md) [![All Exercises](https://img.shields.io/badge/All_Exercises-3B2530?style=flat-square)](README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

> [!TIP]
> **Practice —** try each question first, then expand the answer to check your reasoning.

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/01-01-what-is-network.md) if you get stuck.

---

### &#128313; Q1. List the seven OSI layers in order (Layer 1 → Layer 7).

<details>
<summary><strong>Show answer</strong></summary>

1. Physical
2. Data Link
3. Network
4. Transport
5. Session
6. Presentation
7. Application

Mnemonic (1→7): *Please Do Not Throw Sausage Pizza Away.*
</details>

---

### &#10067; Q2. What is the Protocol Data Unit (PDU) name at the Data Link, Network, and Transport layers?

<details>
<summary><strong>Show answer</strong></summary>

- **Data Link (L2)** → **Frame**
- **Network (L3)** → **Packet**
- **Transport (L4)** → **Segment** (TCP) / datagram (UDP)

Full sequence down the stack: Data → Segment → Packet → Frame → Bits.
</details>

---

### &#128313; Q3. Classify each device by the OSI layer it primarily operates at: hub, switch, router, NIC.

<details>
<summary><strong>Show answer</strong></summary>

- **Hub → Layer 1** (repeats signals out all ports)
- **NIC → Layers 1–2** (physical connection + MAC address)
- **Switch → Layer 2** (forwards frames by MAC)
- **Router → Layer 3** (forwards packets by IP)
</details>

---

### &#10067; Q4. What is the difference between a collision domain and a broadcast domain? Which device breaks up each?

<details>
<summary><strong>Show answer</strong></summary>

- **Collision domain** — a segment where frames can collide. **Switches** break these up (one collision domain per port).
- **Broadcast domain** — the set of devices a broadcast reaches. **Routers** (and VLANs) break these up.
</details>

---

### &#128193; Q5. A 6-computer office shares files directly with no server; a 300-user firm uses central logins. Name each network model and one advantage of each.

<details>
<summary><strong>Show answer</strong></summary>

- Small office → **peer-to-peer** — cheap, simple, no server/NOS required.
- 300-user firm → **client-server** — centralized authentication, backups, and control; scales well.
</details>

---

### &#127757; Q6. Match each scope to its example: PAN, LAN, MAN, WAN — (a) the Internet, (b) a Bluetooth headset, (c) an office network, (d) a city-wide fiber ring.

<details>
<summary><strong>Show answer</strong></summary>

- (a) Internet → **WAN**
- (b) Bluetooth headset → **PAN**
- (c) office network → **LAN**
- (d) city-wide fiber ring → **MAN**
</details>

---

### &#128269; Q7. A user reports "the Internet is down." Apply the first three steps of the CompTIA 7-step troubleshooting model.

<details>
<summary><strong>Show answer</strong></summary>

1. **Identify the problem** — ask what "down" means (all sites or one app?), what changed, when it started, who's affected.
2. **Establish a theory of probable cause** — e.g., DNS failure, gateway down, or ISP outage; question the obvious (cable, Wi-Fi).
3. **Test the theory** — `ping 8.8.8.8` (tests connectivity) then `nslookup` (tests DNS) to confirm or refute.
</details>

---

### &#128269; Q8. What are the last two steps of the 7-step troubleshooting model?

<details>
<summary><strong>Show answer</strong></summary>

- Step 6: **Verify full system functionality** (and implement preventive measures).
- Step 7: **Document findings, actions, and outcomes.**
</details>

---

### &#128161; Q9. Which OSI layer would you check first if the link light is off and the cable seems dead? Why?

<details>
<summary><strong>Show answer</strong></summary>

**Layer 1 (Physical)** — cabling, connectors, and port/link status are physical issues. Higher layers can't function without a working physical link, so bottom-up troubleshooting starts here.
</details>

---

### &#128313; Q10. What safety device prevents static electricity from damaging components, and what document lists safe handling of hazardous materials?

<details>
<summary><strong>Show answer</strong></summary>

- **ESD (anti-static) strap** — bleeds static charge from your body to prevent electrostatic discharge damage.
- **MSDS / SDS** (Material/Safety Data Sheet) — handling, storage, and disposal info for hazardous materials.
</details>

---

### &#128313; Q11. In a physical **star** topology, what happens if one workstation's cable breaks vs. if the central switch fails?

<details>
<summary><strong>Show answer</strong></summary>

- One cable break → **only that one node** loses connectivity.
- Central switch failure → **the whole star** goes down (the switch is a single point of failure).

This is why star is easy to manage but the central device should be made redundant in critical designs.
</details>

---

### &#128313; Q12. Give one advantage and one disadvantage of a full-mesh topology.

<details>
<summary><strong>Show answer</strong></summary>

- **Advantage:** maximum redundancy — every node has a direct link to every other, so a single link failure doesn't isolate anyone.
- **Disadvantage:** cost/complexity — the number of links grows rapidly (n(n−1)/2), so it's expensive to build and maintain.
</details>

---

[📚 All Exercises](README.md)  ·  **Next:** [Module 02 — Infrastructure & Documentation](02-exercise.md) ➡️

<!-- course-footer -->
---

<div align="center" markdown>

[All Exercises](README.md) &nbsp;|&nbsp; [Module 01 Notes](../01-notes/01-01-what-is-network.md) &nbsp;|&nbsp; <strong>Next:</strong> [02: Infrastructure &amp; Documentation — Exercises](02-exercise.md)

</div>
<!-- /course-footer -->
