# 10: Security in Network Design — Exercises

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/10-01-firewalls-and-acls.md) if you get stuck.

---

### Q1. Explain the difference between a stateful and a stateless firewall.

<details><summary>▶ Show answer</summary>

A **stateful** firewall tracks connection state and automatically permits legitimate **return traffic**. A **stateless** (packet-filter) firewall inspects each packet in isolation with no session awareness.
</details>

---

### Q2. An ACL has three permit rules and no deny rules. Is traffic matching none of them allowed? Why?

<details><summary>▶ Show answer</summary>

**No.** Traffic matching no rule hits the **implicit deny all** at the end of the ACL and is dropped.
</details>

---

### Q3. Where is an IPS placed relative to traffic, and how does that differ from an IDS?

<details><summary>▶ Show answer</summary>

An **IPS is inline** so it can actively **block** traffic. An **IDS** is typically **out-of-band** (SPAN/tap) and only **alerts**.
</details>

---

### Q4. A public web server must be reachable from the Internet without exposing the internal LAN. What design element solves this?

<details><summary>▶ Show answer</summary>

A **DMZ (screened subnet)** — the server sits in an isolated segment reachable from the Internet but not connected to the internal LAN, so a compromise there doesn't expose internal systems.
</details>

---

### Q5. Match each Layer 2 defense to the attack it stops: port security, DHCP snooping, Dynamic ARP Inspection, BPDU Guard.

<details><summary>▶ Show answer</summary>

- **Port security** → MAC flooding / rogue devices
- **DHCP snooping** → rogue DHCP server
- **Dynamic ARP Inspection** → ARP spoofing (MITM)
- **BPDU Guard** → rogue switch manipulating STP
</details>

---

### Q6. Contrast RADIUS and TACACS+, and give a good use case for each.

<details><summary>▶ Show answer</summary>

- **RADIUS** (UDP, encrypts password only, combines authn/authz) → **network access / 802.1X**.
- **TACACS+** (TCP 49, encrypts whole payload, separates AAA) → granular **device administration**.
</details>

---

### Q7. What does AAA stand for, and what does each part do?

<details><summary>▶ Show answer</summary>

**Authentication** (who are you?), **Authorization** (what may you do?), **Accounting** (what did you do?).
</details>

---

### Q8. What does 802.1X provide, and what are the three roles involved?

<details><summary>▶ Show answer</summary>

Port-based network access control — authentication **before** the port opens. Roles: **supplicant** (client), **authenticator** (switch/AP), **authentication server** (RADIUS).
</details>

---

### Q9. Summarize the zero-trust model in one line.

<details><summary>▶ Show answer</summary>

**"Never trust, always verify"** — no implicit trust based on network location; every access request is authenticated, authorized, and continuously validated.
</details>

---

### Q10. How do DHCP snooping, Dynamic ARP Inspection, and IP Source Guard work together?

<details><summary>▶ Show answer</summary>

**DHCP snooping** trusts only uplink ports and builds an IP/MAC/port **binding table**. **DAI** validates ARP against that table (stops ARP spoofing). **IP Source Guard** permits only traffic whose source IP/MAC matches a binding (stops IP spoofing).
</details>

---

### Q11. Why should unused switch ports be shut down?

<details><summary>▶ Show answer</summary>

To stop an intruder from plugging into a live port (e.g., in a lobby) and gaining network access. Best practice: disable them and place them in an unused VLAN.
</details>

---

### Q12. Give a "defense in depth" chain of controls from the Internet edge inward.

<details><summary>▶ Show answer</summary>

**Firewall → IPS → DMZ segmentation → NAC/802.1X → monitoring/SIEM.** Layering diverse controls means no single failure exposes the whole network.
</details>

---

⬅️ **Prev:** [Module 09](09-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 11 — Performance & Recovery](11-exercise.md) ➡️
