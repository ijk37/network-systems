# &#9997; 04: Network Protocols — Exercises

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_04-Network_Protocols-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 04: Network Protocols"> <img src="https://img.shields.io/badge/12_questions-C8901A?style=for-the-badge&labelColor=7E0E23" alt="12 questions">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../01-notes/04-01-tcp-ip-suite.md) [![All Exercises](https://img.shields.io/badge/All_Exercises-3B2530?style=flat-square)](README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

> [!TIP]
> **Practice —** try each question first, then expand the answer to check your reasoning.

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/04-01-tcp-ip-suite.md) if you get stuck.

---

### &#128313; Q1. Describe the TCP three-way handshake, naming each message.

<details>
<summary><strong>Show answer</strong></summary>

**SYN** (client synchronizes) → **SYN-ACK** (server acknowledges + synchronizes) → **ACK** (client acknowledges). The connection is then established and data flows.
</details>

---

### &#127760; Q2. For each app, choose TCP or UDP and justify: (a) VoIP call, (b) large file download, (c) DNS query, (d) live video stream.

<details>
<summary><strong>Show answer</strong></summary>

- (a) VoIP → **UDP** — low latency; a late retransmission is useless.
- (b) File download → **TCP** — needs guaranteed, ordered delivery.
- (c) DNS query → **UDP** — small/fast (TCP for large or zone transfers).
- (d) Live video → **UDP** — real-time, tolerates minor loss.
</details>

---

### &#128313; Q3. Trace the encapsulation of a web request, naming the PDU and the key header field added at Layers 4, 3, and 2.

<details>
<summary><strong>Show answer</strong></summary>

- **L4 → Segment**, adds source/destination **ports**.
- **L3 → Packet**, adds source/destination **IP** (+ TTL).
- **L2 → Frame**, adds source/destination **MAC** (+ FCS trailer). Then L1 sends **bits**.
</details>

---

### &#128313; Q4. Match each insecure protocol to its secure replacement: Telnet, HTTP, FTP, SNMPv1.

<details>
<summary><strong>Show answer</strong></summary>

- Telnet → **SSH**
- HTTP → **HTTPS**
- FTP → **SFTP / FTPS**
- SNMPv1 → **SNMPv3**
</details>

---

### &#128313; Q5. IPsec secures VPNs. Name its two core protocols and what each provides.

<details>
<summary><strong>Show answer</strong></summary>

- **AH (Authentication Header)** — integrity/authentication.
- **ESP (Encapsulating Security Payload)** — encryption (+ optional integrity).

**IKE** negotiates the keys. IPsec operates at **Layer 3**.
</details>

---

### &#128313; Q6. A capture shows a connection ending with an `RST` flag instead of `FIN`. What does that indicate?

<details>
<summary><strong>Show answer</strong></summary>

**RST = abrupt reset** — the connection was aborted (e.g., the port was closed or an unexpected packet arrived). **FIN** would be a **graceful** close.
</details>

---

### &#10067; Q7. What is a socket, and how does it uniquely identify one end of a connection?

<details>
<summary><strong>Show answer</strong></summary>

A **socket** = **IP address + port** (e.g., `192.168.1.5:443`). A pair of sockets (source + destination) uniquely identifies a TCP/UDP connection.
</details>

---

### &#128313; Q8. How does TCP achieve reliable, ordered delivery?

<details>
<summary><strong>Show answer</strong></summary>

**Sequence numbers** order the bytes, **acknowledgments (ACKs)** confirm receipt, unacknowledged data is **retransmitted**, and the receiver reorders segments. The **window size** provides flow control.
</details>

---

### &#128313; Q9. Which protocol powers `ping` and `traceroute`, and what field does traceroute manipulate?

<details>
<summary><strong>Show answer</strong></summary>

**ICMP**. Traceroute manipulates the **TTL** field — each router decrements TTL; when it hits 0 the router returns an ICMP "time exceeded," revealing each hop.
</details>

---

### &#10067; Q10. SMTP does one job; POP3/IMAP do another. What is each for, and how do POP3 and IMAP differ?

<details>
<summary><strong>Show answer</strong></summary>

- **SMTP** — **sends/relays** outgoing mail.
- **POP3 / IMAP** — **retrieve** mail. POP3 typically downloads and removes mail (single device); IMAP keeps it on the server and **syncs** across devices.
</details>

---

### &#128313; Q11. Which secure protocols provide (a) encrypted remote CLI, (b) remote graphical desktop, (c) encrypted file transfer over SSH?

<details>
<summary><strong>Show answer</strong></summary>

- (a) **SSH** (22)
- (b) **RDP** (3389)
- (c) **SFTP** (over SSH, 22)
</details>

---

### &#10067; Q12. What is the key difference between a connection-oriented and a connectionless protocol?

<details>
<summary><strong>Show answer</strong></summary>

**Connection-oriented (TCP)** establishes and verifies a session (handshake + ACKs) before/while sending. **Connectionless (UDP)** just sends datagrams with no setup or delivery guarantees.
</details>

---

⬅️ **Prev:** [Module 03](03-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 05 — Cabling](05-exercise.md) ➡️

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [03: Addressing — Exercises](03-exercise.md) &nbsp;|&nbsp; [All Exercises](README.md) &nbsp;|&nbsp; [Module 04 Notes](../01-notes/04-01-tcp-ip-suite.md) &nbsp;|&nbsp; <strong>Next:</strong> [05: Cabling — Exercises](05-exercise.md)

</div>
<!-- /course-footer -->
