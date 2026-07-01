# 03: Addressing — Exercises

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="../01-notes/README.md">All Notes</a> &nbsp;|&nbsp; <a href="README.md">All Exercises</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Practice |
| --- | --- | ---: |
| Network Systems | 03: Addressing | 12 questions |

> Try each question first. Open the answer only after you have written or spoken your attempt.
<!-- /course-header -->

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/03-01-mac-addresses.md) if you get stuck.

---

### Q1. How many bits is a MAC address, how is it written, and what does its first half identify?

<details>
<summary><strong>Show answer</strong></summary>

**48 bits**, written as six pairs of hex digits (e.g., `00:1A:2B:3C:4D:5E`). The first 24 bits are the **OUI** identifying the NIC **manufacturer**; the last 24 bits are device-specific.
</details>

---

### Q2. Classify each address as public, private, loopback, or APIPA: `10.24.5.9`, `8.8.8.8`, `169.254.13.7`, `127.0.0.1`, `172.20.0.1`, `192.168.100.5`.

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

### Q3. A workstation shows IP `169.254.44.10`. What happened, and what should you check?

<details>
<summary><strong>Show answer</strong></summary>

The host **failed to reach a DHCP server** and self-assigned an **APIPA** address. Check: is the DHCP server up? cable/link OK? correct VLAN? Does the subnet need a **DHCP relay** (`ip helper-address`)?
</details>

---

### Q4. List the DHCP DORA process and the ports DHCP uses.

<details>
<summary><strong>Show answer</strong></summary>

**D**iscover → **O**ffer → **R**equest → **A**ck. Ports: server **UDP 67**, client **UDP 68**.
</details>

---

### Q5. Give the port and transport (TCP/UDP) for: HTTPS, DNS, SSH, SMTP, RDP.

<details>
<summary><strong>Show answer</strong></summary>

- HTTPS → **443/TCP**
- DNS → **53/UDP** (TCP for zone transfers / large responses)
- SSH → **22/TCP**
- SMTP → **25/TCP**
- RDP → **3389/TCP**
</details>

---

### Q6. Which DNS record type maps a name to an IPv4 address? To an IPv6 address? What does an MX record do?

<details>
<summary><strong>Show answer</strong></summary>

- **A** → name to IPv4
- **AAAA** → name to IPv6
- **MX** → identifies the domain's mail server(s) (with a priority value)
</details>

---

### Q7. Compress the IPv6 address `2001:0db8:0000:0000:00a3:0000:0000:1f35`.

<details>
<summary><strong>Show answer</strong></summary>

`2001:db8::a3:0:0:1f35`

Drop leading zeros; replace the **longest** run of all-zero hextets (`0000:0000`, hextets 3–4) with `::`. The later `0:0` can't also use `::` (only one `::` allowed).
</details>

---

### Q8. A host can `ping 8.8.8.8` but cannot open `https://example.com`. What's the likely cause, and which command confirms it?

<details>
<summary><strong>Show answer</strong></summary>

IP connectivity works but name resolution fails → a **DNS problem**. Confirm with **`nslookup example.com`** (or `dig`).
</details>

---

### Q9. What is the default subnet mask for a /24, and how many usable hosts does it provide?

<details>
<summary><strong>Show answer</strong></summary>

**255.255.255.0**; 2^8 − 2 = **254** usable hosts.
</details>

---

### Q10. What protocol resolves an IP to a MAC on the local segment, and what replaces it in IPv6?

<details>
<summary><strong>Show answer</strong></summary>

**ARP** (Address Resolution Protocol) in IPv4. In IPv6, **NDP** (Neighbor Discovery Protocol, built on ICMPv6) performs the equivalent function.
</details>

---

### Q11. What is the difference between a DHCP reservation and an exclusion?

<details>
<summary><strong>Show answer</strong></summary>

- **Reservation** — binds a specific **MAC** to always receive the same IP from the pool.
- **Exclusion** — removes addresses from the pool so they are never handed out (e.g., reserved for static devices like the gateway).
</details>

---

### Q12. Which minimum three settings does a host need to communicate with hosts on other networks, and what is each for?

<details>
<summary><strong>Show answer</strong></summary>

- **IP address** — the host's own address.
- **Subnet mask** — tells it which addresses are local.
- **Default gateway** — where to send traffic destined for other networks.

(DNS is additionally needed to resolve names.)
</details>

---

⬅️ **Prev:** [Module 02](02-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 04 — Network Protocols](04-exercise.md) ➡️

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="02-exercise.md">02: Infrastructure &amp; Documentation — Exercises</a> &nbsp;|&nbsp; <a href="README.md">All Exercises</a> &nbsp;|&nbsp; <a href="../01-notes/03-01-mac-addresses.md">Module 03 Notes</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="04-exercise.md">04: Network Protocols — Exercises</a>

</div>
<!-- /course-footer -->
