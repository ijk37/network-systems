# &#9997; 02: Infrastructure & Documentation — Exercises

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_02-Infrastructure_and_Documentation-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 02: Infrastructure and Documentation"> <img src="https://img.shields.io/badge/12_questions-C8901A?style=for-the-badge&labelColor=7E0E23" alt="12 questions">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="../01-notes/02-01-structured-cabling.md"><img src="https://img.shields.io/badge/Notes-3B2530?style=flat-square" alt="Notes"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Exercises-3B2530?style=flat-square" alt="All Exercises"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

> [!TIP]
> **Practice —** try each question first, then expand the answer to check your reasoning.

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/02-01-structured-cabling.md) if you get stuck.

---

### &#128268; Q1. Order these structured-cabling elements from the user's desk out to the ISP: MDF, work area, demarc, IDF, entrance facility, horizontal cabling, backbone cabling.

<details>
<summary><strong>Show answer</strong></summary>

**Work area → Horizontal cabling → IDF → Backbone cabling → MDF → Entrance facility → Demarc** (→ ISP).
</details>

---

### &#128268; Q2. What standard defines structured cabling for commercial buildings, and what topology does it assume?

<details>
<summary><strong>Show answer</strong></summary>

**ANSI/TIA-568**, which assumes a hierarchical **star** topology.
</details>

---

### &#128161; Q3. A horizontal copper run measures 92 m of solid-core plus 12 m of patch cords. Does it comply with TIA-568? Why?

<details>
<summary><strong>Show answer</strong></summary>

**No.** Total channel = 92 + 12 = **104 m**, exceeding the **100 m** limit (≈90 m permanent link + ≈10 m patch cords).
</details>

---

### &#128313; Q4. You must connect two switches on gear without Auto-MDIX. What cable type do you need, and which pin standards go on each end?

<details>
<summary><strong>Show answer</strong></summary>

A **crossover cable** — **T568A on one end, T568B on the other**. (With Auto-MDIX, a straight-through would also work.)
</details>

---

### &#10067; Q5. What is the difference between the MDF and an IDF?

<details>
<summary><strong>Show answer</strong></summary>

- **MDF (Main Distribution Frame)** — the central point of the building's cabling; houses core routers/switches and the main cross-connect.
- **IDF (Intermediate Distribution Frame)** — a smaller wiring closet (often per floor) that aggregates work-area cabling and links back to the MDF via backbone cabling.
</details>

---

### &#129521; Q6. A rack holds a 1U firewall, a 2U server, and a 4U UPS. How many rack units are used, and where is this recorded?

<details>
<summary><strong>Show answer</strong></summary>

1U + 2U + 4U = **7U** used (1U = 1.75 in). Recorded in a **rack elevation / rack diagram** showing each device's starting U position.
</details>

---

### &#10067; Q7. What is the demarcation point (demarc)?

<details>
<summary><strong>Show answer</strong></summary>

The boundary where the **service provider's** responsibility ends and the **customer's** begins — useful for pinpointing who owns a fault.
</details>

---

### &#128313; Q8. Distinguish a physical network diagram from a logical network diagram, with one item each would contain.

<details>
<summary><strong>Show answer</strong></summary>

- **Physical** — actual devices, ports, cable runs, locations (e.g., "Switch A port 12 → Room 204 jack").
- **Logical** — IP addressing, subnets/VLANs, routing, data flow (e.g., "VLAN 10 = 192.168.10.0/24").
</details>

---

### &#10067; Q9. What is a performance baseline, and why is it valuable?

<details>
<summary><strong>Show answer</strong></summary>

A record of **normal** traffic, utilization, latency, and error rates. It lets you recognize anomalies (spikes, slowdowns, breaches) by comparison and supports capacity planning.
</details>

---

### &#128313; Q10. List the minimum contents of a change request for replacing a core switch.

<details>
<summary><strong>Show answer</strong></summary>

Reason/scope, risk assessment, implementation plan + maintenance window, **rollback (back-out) plan**, and **approval/sign-off**. (Never personal credentials.)
</details>

---

### &#128313; Q11. What do the metrics MTBF and MTTR measure?

<details>
<summary><strong>Show answer</strong></summary>

- **MTBF (Mean Time Between Failures)** — average operating time before a device fails (reliability).
- **MTTR (Mean Time To Repair)** — average time to restore a failed device/service (recovery speed).
</details>

---

### &#128161; Q12. Where must plenum-rated (CMP) cable be used, and why?

<details>
<summary><strong>Show answer</strong></summary>

In **air-handling spaces (HVAC plenums)**. Plenum cable uses fire-resistant jacketing that emits **less toxic smoke** when burning, meeting fire code where building air circulates.
</details>

---

⬅️ **Prev:** [Module 01](01-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 03 — Addressing](03-exercise.md) ➡️

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="01-exercise.md">01: Introduction to Networking — Exercises</a> &nbsp;|&nbsp; <a href="README.md">All Exercises</a> &nbsp;|&nbsp; <a href="../01-notes/02-01-structured-cabling.md">Module 02 Notes</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="03-exercise.md">03: Addressing — Exercises</a>

</div>
<!-- /course-footer -->
