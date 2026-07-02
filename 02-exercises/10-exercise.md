# &#9997; 10: Security in Network Design — Exercises

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_10-Security_in_Network_Design-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 10: Security in Network Design"> <img src="https://img.shields.io/badge/12_questions-C8901A?style=for-the-badge&labelColor=7E0E23" alt="12 questions">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../01-notes/10-01-firewalls-and-acls.md) [![All Exercises](https://img.shields.io/badge/All_Exercises-3B2530?style=flat-square)](README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

> [!TIP]
> **Practice —** try each question first, then expand the answer to check your reasoning.

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/10-01-firewalls-and-acls.md) if you get stuck.

---

### &#129521; Q1. Explain the difference between a stateful and a stateless firewall.

<details>
<summary><strong>Show answer</strong></summary>

A **stateful** firewall tracks connection state and automatically permits legitimate **return traffic**. A **stateless** (packet-filter) firewall inspects each packet in isolation with no session awareness.
</details>

---

### &#128161; Q2. An ACL has three permit rules and no deny rules. Is traffic matching none of them allowed? Why?

<details>
<summary><strong>Show answer</strong></summary>

**No.** Traffic matching no rule hits the **implicit deny all** at the end of the ACL and is dropped.
</details>

---

### &#128313; Q3. Where is an IPS placed relative to traffic, and how does that differ from an IDS?

<details>
<summary><strong>Show answer</strong></summary>

An **IPS is inline** so it can actively **block** traffic. An **IDS** is typically **out-of-band** (SPAN/tap) and only **alerts**.
</details>

---

### &#128313; Q4. A public web server must be reachable from the Internet without exposing the internal LAN. What design element solves this?

<details>
<summary><strong>Show answer</strong></summary>

A **DMZ (screened subnet)** — the server sits in an isolated segment reachable from the Internet but not connected to the internal LAN, so a compromise there doesn't expose internal systems.
</details>

---

### &#128272; Q5. Match each Layer 2 defense to the attack it stops: port security, DHCP snooping, Dynamic ARP Inspection, BPDU Guard.

<details>
<summary><strong>Show answer</strong></summary>

- **Port security** → MAC flooding / rogue devices
- **DHCP snooping** → rogue DHCP server
- **Dynamic ARP Inspection** → ARP spoofing (MITM)
- **BPDU Guard** → rogue switch manipulating STP
</details>

---

### &#128313; Q6. Contrast RADIUS and TACACS+, and give a good use case for each.

<details>
<summary><strong>Show answer</strong></summary>

- **RADIUS** (UDP, encrypts password only, combines authn/authz) → **network access / 802.1X**.
- **TACACS+** (TCP 49, encrypts whole payload, separates AAA) → granular **device administration**.
</details>

---

### &#128313; Q7. What does AAA stand for, and what does each part do?

<details>
<summary><strong>Show answer</strong></summary>

**Authentication** (who are you?), **Authorization** (what may you do?), **Accounting** (what did you do?).
</details>

---

### &#128313; Q8. What does 802.1X provide, and what are the three roles involved?

<details>
<summary><strong>Show answer</strong></summary>

Port-based network access control — authentication **before** the port opens. Roles: **supplicant** (client), **authenticator** (switch/AP), **authentication server** (RADIUS).
</details>

---

### &#128313; Q9. Summarize the zero-trust model in one line.

<details>
<summary><strong>Show answer</strong></summary>

**"Never trust, always verify"** — no implicit trust based on network location; every access request is authenticated, authorized, and continuously validated.
</details>

---

### &#128225; Q10. How do DHCP snooping, Dynamic ARP Inspection, and IP Source Guard work together?

<details>
<summary><strong>Show answer</strong></summary>

**DHCP snooping** trusts only uplink ports and builds an IP/MAC/port **binding table**. **DAI** validates ARP against that table (stops ARP spoofing). **IP Source Guard** permits only traffic whose source IP/MAC matches a binding (stops IP spoofing).
</details>

---

### &#128161; Q11. Why should unused switch ports be shut down?

<details>
<summary><strong>Show answer</strong></summary>

To stop an intruder from plugging into a live port (e.g., in a lobby) and gaining network access. Best practice: disable them and place them in an unused VLAN.
</details>

---

### &#128313; Q12. Give a "defense in depth" chain of controls from the Internet edge inward.

<details>
<summary><strong>Show answer</strong></summary>

**Firewall → IPS → DMZ segmentation → NAC/802.1X → monitoring/SIEM.** Layering diverse controls means no single failure exposes the whole network.
</details>

---

⬅️ **Prev:** [Module 09](09-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 11 — Performance & Recovery](11-exercise.md) ➡️

## &#129517; Bonus Scenario Practice

### &#129513; Case A: Firewall Rule Order

A firewall rule set contains these rules in order:

1. Deny all traffic to the management subnet.
2. Permit IT-admin subnet to SSH to the management subnet.
3. Permit users to HTTP/HTTPS.

IT administrators cannot SSH to switches. Why?

<details>
<summary><strong>Show answer</strong></summary>

The deny rule appears before the more specific SSH permit. Because firewalls and ACLs usually process rules top-down and stop at the first match, the admin SSH traffic is denied before it reaches the permit rule. Move the specific permit above the broad deny.
</details>

---

### &#129513; Case B: IDS or IPS?

A company wants visibility into suspicious traffic but cannot risk the monitoring device interrupting production traffic if it fails. Should it place an IDS or IPS at that point, and why?

<details>
<summary><strong>Show answer</strong></summary>

Use an IDS connected through a SPAN/mirror port or network tap. An IDS observes a copy of traffic and alerts without sitting inline. An IPS can block traffic, but because it is inline, a failure or misconfiguration can interrupt production traffic.
</details>

---

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [09: Network Risk Management — Exercises](09-exercise.md) &nbsp;|&nbsp; [All Exercises](README.md) &nbsp;|&nbsp; [Module 10 Notes](../01-notes/10-01-firewalls-and-acls.md) &nbsp;|&nbsp; <strong>Next:</strong> [11: Network Performance &amp; Recovery — Exercises](11-exercise.md)

</div>
<!-- /course-footer -->
