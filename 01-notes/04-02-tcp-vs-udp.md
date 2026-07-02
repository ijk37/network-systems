# &#128216; 04-02: TCP vs. UDP

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_04-Network_Protocols-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 04: Network Protocols">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/04-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128204; The Two Transport Protocols

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

## &#128204; TCP Three-Way Handshake

```
Client → SYN     →  Server     (synchronize)
Client ← SYN-ACK ←  Server     (acknowledge + synchronize)
Client → ACK     →  Server     (acknowledge)
   ↳ connection established, data flows
```

Teardown uses **FIN** (graceful) or **RST** (abrupt reset).

---

## &#128204; Key TCP Flags

| Flag | Meaning |
|------|---------|
| **SYN** | Start/synchronize a connection |
| **ACK** | Acknowledge received data |
| **FIN** | Gracefully close |
| **RST** | Abruptly reset |
| **PSH** | Push data to the app immediately |
| **URG** | Urgent data |

---

## &#128204; How TCP Ensures Reliability

- **Sequence numbers** order bytes.
- **Acknowledgments** confirm receipt; unACKed data is retransmitted.
- **Window size** (flow control) limits unacknowledged data so the receiver isn't overwhelmed.

---

## &#128161; Why UDP for Real-Time?

For VoIP/video, a **late retransmitted packet is useless** — low latency beats guaranteed delivery. UDP simply sends, letting the app handle any loss.

---

> [!TIP]
> **Key idea —** **TCP = reliable, ordered, connection-oriented** (3-way handshake, ACKs, windowing). **UDP = fast, connectionless, best-effort.** Match the protocol to the app's needs.

See also: [The TCP/IP Suite & Encapsulation](04-01-tcp-ip-suite.md), [Performance Concepts & QoS](11-01-performance-concepts.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [The TCP/IP Suite &amp; Encapsulation](04-01-tcp-ip-suite.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 04 Exercise](../02-exercises/04-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [Core Protocols &amp; Their Ports](04-03-core-protocols-and-ports.md)

</div>
<!-- /course-footer -->
