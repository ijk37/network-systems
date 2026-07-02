# &#9997; 03: Addressing — Exercises

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_03-Addressing-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 03: Addressing"> <img src="https://img.shields.io/badge/12_questions-C8901A?style=for-the-badge&labelColor=7E0E23" alt="12 questions">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../01-notes/03-01-mac-addresses.md) [![All Exercises](https://img.shields.io/badge/All_Exercises-3B2530?style=flat-square)](README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

> [!TIP]
> **Practice —** try each question first, then expand the answer to check your reasoning.

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/03-01-mac-addresses.md) if you get stuck.

---

### &#128313; Q1. How many bits is a MAC address, how is it written, and what does its first half identify?

<details>
<summary><strong>Show answer</strong></summary>

**48 bits**, written as six pairs of hex digits (e.g., `00:1A:2B:3C:4D:5E`). The first 24 bits are the **OUI** identifying the NIC **manufacturer**; the last 24 bits are device-specific.
</details>

---

### &#128313; Q2. Classify each address as public, private, loopback, or APIPA: `10.24.5.9`, `8.8.8.8`, `169.254.13.7`, `127.0.0.1`, `172.20.0.1`, `192.168.100.5`.

<details>
<summary><strong>Show answer</strong></summary>

- `10.24.5.9` → **Private** (10.0.0.0/8)
- `8.8.8.8` → **Public**
- `169.254.13.7` → **APIPA** (169.254.0.0/16 — DHCP failed)
- `127.0.0.1` → **Loopback**
- `172.20.0.1` → **Private** (172.16.0.0/12)
- `192.168.100.5` → **Private** (192.168.0.0/16)
</details>

---

### &#128313; Q3. A workstation shows IP `169.254.44.10`. What happened, and what should you check?

<details>
<summary><strong>Show answer</strong></summary>

The host **failed to reach a DHCP server** and self-assigned an **APIPA** address. Check: is the DHCP server up? cable/link OK? correct VLAN? Does the subnet need a **DHCP relay** (`ip helper-address`)?
</details>

---

### &#128225; Q4. List the DHCP DORA process and the ports DHCP uses.

<details>
<summary><strong>Show answer</strong></summary>

**D**iscover → **O**ffer → **R**equest → **A**ck. Ports: server **UDP 67**, client **UDP 68**.
</details>

---

### &#127760; Q5. Give the port and transport (TCP/UDP) for: HTTPS, DNS, SSH, SMTP, RDP.

<details>
<summary><strong>Show answer</strong></summary>

- HTTPS → **443/TCP**
- DNS → **53/UDP** (TCP for zone transfers / large responses)
- SSH → **22/TCP**
- SMTP → **25/TCP**
- RDP → **3389/TCP**
</details>

---

### &#127760; Q6. Which DNS record type maps a name to an IPv4 address? To an IPv6 address? What does an MX record do?

<details>
<summary><strong>Show answer</strong></summary>

- **A** → name to IPv4
- **AAAA** → name to IPv6
- **MX** → identifies the domain's mail server(s) (with a priority value)
</details>

---

### &#127760; Q7. Compress the IPv6 address `2001:0db8:0000:0000:00a3:0000:0000:1f35`.

<details>
<summary><strong>Show answer</strong></summary>

`2001:db8::a3:0:0:1f35`

Drop leading zeros; replace the **longest** run of all-zero hextets (`0000:0000`, hextets 3–4) with `::`. The later `0:0` can't also use `::` (only one `::` allowed).
</details>

---

### &#128313; Q8. A host can `ping 8.8.8.8` but cannot open `https://example.com`. What's the likely cause, and which command confirms it?

<details>
<summary><strong>Show answer</strong></summary>

IP connectivity works but name resolution fails → a **DNS problem**. Confirm with **`nslookup example.com`** (or `dig`).
</details>

---

### &#10067; Q9. What is the default subnet mask for a /24, and how many usable hosts does it provide?

<details>
<summary><strong>Show answer</strong></summary>

**255.255.255.0**; 2^8 − 2 = **254** usable hosts.
</details>

---

### &#127760; Q10. What protocol resolves an IP to a MAC on the local segment, and what replaces it in IPv6?

<details>
<summary><strong>Show answer</strong></summary>

**ARP** (Address Resolution Protocol) in IPv4. In IPv6, **NDP** (Neighbor Discovery Protocol, built on ICMPv6) performs the equivalent function.
</details>

---

### &#10067; Q11. What is the difference between a DHCP reservation and an exclusion?

<details>
<summary><strong>Show answer</strong></summary>

- **Reservation** — binds a specific **MAC** to always receive the same IP from the pool.
- **Exclusion** — removes addresses from the pool so they are never handed out (e.g., reserved for static devices like the gateway).
</details>

---

### &#10067; Q12. Which minimum three settings does a host need to communicate with hosts on other networks, and what is each for?

<details>
<summary><strong>Show answer</strong></summary>

- **IP address** — the host's own address.
- **Subnet mask** — tells it which addresses are local.
- **Default gateway** — where to send traffic destined for other networks.

(DNS is additionally needed to resolve names.)
</details>

---

⬅️ **Prev:** [Module 02](02-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 04 — Network Protocols](04-exercise.md) ➡️

## &#129517; Bonus Scenario Practice

### &#129513; Case A: DHCP Scope Conflict

A small office uses `192.168.50.0/24`. The router is `192.168.50.1`, printers are statically assigned `.20` through `.30`, and the DHCP scope gives out `.10` through `.200`. Several users randomly lose printer access after rebooting laptops. What is the likely cause and fix?

<details>
<summary><strong>Show answer</strong></summary>

The DHCP scope overlaps with the statically assigned printer range. A client can receive an address already used by a printer, causing an IP conflict. Fix it by excluding `.20` through `.30` from the DHCP scope, or moving static infrastructure addresses outside the dynamic pool.
</details>

---

### &#129513; Case B: Wrong Gateway

A host has IP `10.20.30.45/24`, DNS `10.20.30.10`, and gateway `10.20.40.1`. It can ping another host on `10.20.30.0/24` but cannot reach the Internet. What is wrong?

<details>
<summary><strong>Show answer</strong></summary>

The default gateway is not in the host's local subnet. With `/24`, the local network is `10.20.30.0/24`, so the gateway should also be in that subnet, such as `10.20.30.1`.
</details>

---

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [02: Infrastructure &amp; Documentation — Exercises](02-exercise.md) &nbsp;|&nbsp; [All Exercises](README.md) &nbsp;|&nbsp; [Module 03 Notes](../01-notes/03-01-mac-addresses.md) &nbsp;|&nbsp; <strong>Next:</strong> [04: Network Protocols — Exercises](04-exercise.md)

</div>
<!-- /course-footer -->
