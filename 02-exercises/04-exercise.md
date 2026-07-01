# 04: Network Protocols — Exercises

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/04-01-tcp-ip-suite.md) if you get stuck.

---

### Q1. Describe the TCP three-way handshake, naming each message.

<details><summary>▶ Show answer</summary>

**SYN** (client synchronizes) → **SYN-ACK** (server acknowledges + synchronizes) → **ACK** (client acknowledges). The connection is then established and data flows.
</details>

---

### Q2. For each app, choose TCP or UDP and justify: (a) VoIP call, (b) large file download, (c) DNS query, (d) live video stream.

<details><summary>▶ Show answer</summary>

- (a) VoIP → **UDP** — low latency; a late retransmission is useless.
- (b) File download → **TCP** — needs guaranteed, ordered delivery.
- (c) DNS query → **UDP** — small/fast (TCP for large or zone transfers).
- (d) Live video → **UDP** — real-time, tolerates minor loss.
</details>

---

### Q3. Trace the encapsulation of a web request, naming the PDU and the key header field added at Layers 4, 3, and 2.

<details><summary>▶ Show answer</summary>

- **L4 → Segment**, adds source/destination **ports**.
- **L3 → Packet**, adds source/destination **IP** (+ TTL).
- **L2 → Frame**, adds source/destination **MAC** (+ FCS trailer). Then L1 sends **bits**.
</details>

---

### Q4. Match each insecure protocol to its secure replacement: Telnet, HTTP, FTP, SNMPv1.

<details><summary>▶ Show answer</summary>

- Telnet → **SSH**
- HTTP → **HTTPS**
- FTP → **SFTP / FTPS**
- SNMPv1 → **SNMPv3**
</details>

---

### Q5. IPsec secures VPNs. Name its two core protocols and what each provides.

<details><summary>▶ Show answer</summary>

- **AH (Authentication Header)** — integrity/authentication.
- **ESP (Encapsulating Security Payload)** — encryption (+ optional integrity).

**IKE** negotiates the keys. IPsec operates at **Layer 3**.
</details>

---

### Q6. A capture shows a connection ending with an `RST` flag instead of `FIN`. What does that indicate?

<details><summary>▶ Show answer</summary>

**RST = abrupt reset** — the connection was aborted (e.g., the port was closed or an unexpected packet arrived). **FIN** would be a **graceful** close.
</details>

---

### Q7. What is a socket, and how does it uniquely identify one end of a connection?

<details><summary>▶ Show answer</summary>

A **socket** = **IP address + port** (e.g., `192.168.1.5:443`). A pair of sockets (source + destination) uniquely identifies a TCP/UDP connection.
</details>

---

### Q8. How does TCP achieve reliable, ordered delivery?

<details><summary>▶ Show answer</summary>

**Sequence numbers** order the bytes, **acknowledgments (ACKs)** confirm receipt, unacknowledged data is **retransmitted**, and the receiver reorders segments. The **window size** provides flow control.
</details>

---

### Q9. Which protocol powers `ping` and `traceroute`, and what field does traceroute manipulate?

<details><summary>▶ Show answer</summary>

**ICMP**. Traceroute manipulates the **TTL** field — each router decrements TTL; when it hits 0 the router returns an ICMP "time exceeded," revealing each hop.
</details>

---

### Q10. SMTP does one job; POP3/IMAP do another. What is each for, and how do POP3 and IMAP differ?

<details><summary>▶ Show answer</summary>

- **SMTP** — **sends/relays** outgoing mail.
- **POP3 / IMAP** — **retrieve** mail. POP3 typically downloads and removes mail (single device); IMAP keeps it on the server and **syncs** across devices.
</details>

---

### Q11. Which secure protocols provide (a) encrypted remote CLI, (b) remote graphical desktop, (c) encrypted file transfer over SSH?

<details><summary>▶ Show answer</summary>

- (a) **SSH** (22)
- (b) **RDP** (3389)
- (c) **SFTP** (over SSH, 22)
</details>

---

### Q12. What is the key difference between a connection-oriented and a connectionless protocol?

<details><summary>▶ Show answer</summary>

**Connection-oriented (TCP)** establishes and verifies a session (handshake + ACKs) before/while sending. **Connectionless (UDP)** just sends datagrams with no setup or delivery guarantees.
</details>

---

⬅️ **Prev:** [Module 03](03-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 05 — Cabling](05-exercise.md) ➡️
