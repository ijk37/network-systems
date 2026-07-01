# 02: Infrastructure & Documentation — Exercises

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="../01-notes/README.md">All Notes</a> &nbsp;|&nbsp; <a href="README.md">All Exercises</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Practice |
| --- | --- | ---: |
| Network Systems | 02: Infrastructure and Documentation | 12 questions |

> Try each question first. Open the answer only after you have written or spoken your attempt.
<!-- /course-header -->

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/02-01-structured-cabling.md) if you get stuck.

---

### Q1. Order these structured-cabling elements from the user's desk out to the ISP: MDF, work area, demarc, IDF, entrance facility, horizontal cabling, backbone cabling.

<details>
<summary><strong>Show answer</strong></summary>

**Work area → Horizontal cabling → IDF → Backbone cabling → MDF → Entrance facility → Demarc** (→ ISP).
</details>

---

### Q2. What standard defines structured cabling for commercial buildings, and what topology does it assume?

<details>
<summary><strong>Show answer</strong></summary>

**ANSI/TIA-568**, which assumes a hierarchical **star** topology.
</details>

---

### Q3. A horizontal copper run measures 92 m of solid-core plus 12 m of patch cords. Does it comply with TIA-568? Why?

<details>
<summary><strong>Show answer</strong></summary>

**No.** Total channel = 92 + 12 = **104 m**, exceeding the **100 m** limit (≈90 m permanent link + ≈10 m patch cords).
</details>

---

### Q4. You must connect two switches on gear without Auto-MDIX. What cable type do you need, and which pin standards go on each end?

<details>
<summary><strong>Show answer</strong></summary>

A **crossover cable** — **T568A on one end, T568B on the other**. (With Auto-MDIX, a straight-through would also work.)
</details>

---

### Q5. What is the difference between the MDF and an IDF?

<details>
<summary><strong>Show answer</strong></summary>

- **MDF (Main Distribution Frame)** — the central point of the building's cabling; houses core routers/switches and the main cross-connect.
- **IDF (Intermediate Distribution Frame)** — a smaller wiring closet (often per floor) that aggregates work-area cabling and links back to the MDF via backbone cabling.
</details>

---

### Q6. A rack holds a 1U firewall, a 2U server, and a 4U UPS. How many rack units are used, and where is this recorded?

<details>
<summary><strong>Show answer</strong></summary>

1U + 2U + 4U = **7U** used (1U = 1.75 in). Recorded in a **rack elevation / rack diagram** showing each device's starting U position.
</details>

---

### Q7. What is the demarcation point (demarc)?

<details>
<summary><strong>Show answer</strong></summary>

The boundary where the **service provider's** responsibility ends and the **customer's** begins — useful for pinpointing who owns a fault.
</details>

---

### Q8. Distinguish a physical network diagram from a logical network diagram, with one item each would contain.

<details>
<summary><strong>Show answer</strong></summary>

- **Physical** — actual devices, ports, cable runs, locations (e.g., "Switch A port 12 → Room 204 jack").
- **Logical** — IP addressing, subnets/VLANs, routing, data flow (e.g., "VLAN 10 = 192.168.10.0/24").
</details>

---

### Q9. What is a performance baseline, and why is it valuable?

<details>
<summary><strong>Show answer</strong></summary>

A record of **normal** traffic, utilization, latency, and error rates. It lets you recognize anomalies (spikes, slowdowns, breaches) by comparison and supports capacity planning.
</details>

---

### Q10. List the minimum contents of a change request for replacing a core switch.

<details>
<summary><strong>Show answer</strong></summary>

Reason/scope, risk assessment, implementation plan + maintenance window, **rollback (back-out) plan**, and **approval/sign-off**. (Never personal credentials.)
</details>

---

### Q11. What do the metrics MTBF and MTTR measure?

<details>
<summary><strong>Show answer</strong></summary>

- **MTBF (Mean Time Between Failures)** — average operating time before a device fails (reliability).
- **MTTR (Mean Time To Repair)** — average time to restore a failed device/service (recovery speed).
</details>

---

### Q12. Where must plenum-rated (CMP) cable be used, and why?

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
