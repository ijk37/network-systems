# 04: Network Protocols — Exercises

## Questions

1. Describe the TCP three-way handshake, naming each message.
2. For each application, choose TCP or UDP and justify: (a) VoIP call, (b) downloading a large file, (c) DNS query, (d) live video stream.
3. Trace the encapsulation of a web request down the stack, naming the PDU and the key header field added at Layers 4, 3, and 2.
4. Match each insecure protocol to its secure replacement: Telnet, HTTP, FTP, SNMPv1.
5. IPsec provides VPN security. Name its two core protocols and what each does.
6. A packet capture shows a connection ending with an `RST` flag instead of `FIN`. What does that indicate?

---

## Solutions

### 1. Three-way handshake
**SYN** (client synchronizes) → **SYN-ACK** (server acknowledges + synchronizes) → **ACK** (client acknowledges). The connection is then established and data flows.

### 2. TCP vs. UDP
- (a) VoIP → **UDP** — low latency; a late retransmission is useless.
- (b) Large file → **TCP** — needs guaranteed, ordered delivery.
- (c) DNS query → **UDP** (small, fast; TCP for large/zone transfers).
- (d) Live video → **UDP** — real-time, tolerates minor loss.

### 3. Encapsulation
- **Layer 4 → Segment**, adds **source/destination ports** (TCP 443).
- **Layer 3 → Packet**, adds **source/destination IP** (+ TTL).
- **Layer 2 → Frame**, adds **source/destination MAC** (+ FCS trailer). Then Layer 1 sends **bits**.

### 4. Secure replacements
- Telnet → **SSH**, HTTP → **HTTPS**, FTP → **SFTP/FTPS**, SNMPv1 → **SNMPv3**.

### 5. IPsec core protocols
- **AH (Authentication Header)** — integrity/authentication.
- **ESP (Encapsulating Security Payload)** — encryption (+ optional integrity). **IKE** negotiates keys.

### 6. RST vs. FIN
**RST** = an **abrupt reset** (connection aborted) — e.g., the port was closed or an unexpected packet arrived. **FIN** would be a **graceful** close.
