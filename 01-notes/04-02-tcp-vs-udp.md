# 04-02: TCP vs. UDP

## The Two Transport Protocols

| Feature | **TCP** | **UDP** |
|---------|---------|---------|
| Connection | Connection-oriented | Connectionless |
| Reliability | Guaranteed, ordered | Best-effort |
| Handshake | Yes (3-way) | No |
| Acknowledgments | Yes | No |
| Sequencing | Yes | No |
| Overhead / speed | Higher / slower | Lower / faster |
| Use cases | Web, email, file transfer | VoIP, video, DNS, gaming |

---

## TCP Three-Way Handshake

```
Client → SYN     →  Server     (synchronize)
Client ← SYN-ACK ←  Server     (acknowledge + synchronize)
Client → ACK     →  Server     (acknowledge)
   ↳ connection established, data flows
```

Teardown uses **FIN** (graceful) or **RST** (abrupt reset).

---

## Key TCP Flags

| Flag | Meaning |
|------|---------|
| **SYN** | Start/synchronize a connection |
| **ACK** | Acknowledge received data |
| **FIN** | Gracefully close |
| **RST** | Abruptly reset |
| **PSH** | Push data to the app immediately |
| **URG** | Urgent data |

---

## How TCP Ensures Reliability

- **Sequence numbers** order bytes.
- **Acknowledgments** confirm receipt; unACKed data is retransmitted.
- **Window size** (flow control) limits unacknowledged data so the receiver isn't overwhelmed.

---

## Why UDP for Real-Time?

For VoIP/video, a **late retransmitted packet is useless** — low latency beats guaranteed delivery. UDP simply sends, letting the app handle any loss.

---

## Key Idea

> **TCP = reliable, ordered, connection-oriented** (3-way handshake, ACKs, windowing). **UDP = fast, connectionless, best-effort.** Match the protocol to the app's needs.

See also: [[04-01-tcp-ip-suite]], [[11-01-performance-concepts]]
