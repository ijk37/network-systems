# 04-02: TCP vs. UDP

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/04-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 04: Network Protocols | 04-02 |
<!-- /course-header -->

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

See also: [The TCP/IP Suite & Encapsulation](04-01-tcp-ip-suite.md), [Performance Concepts & QoS](11-01-performance-concepts.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="04-01-tcp-ip-suite.md">The TCP/IP Suite &amp; Encapsulation</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/04-exercise.md">Module 04 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="04-03-core-protocols-and-ports.md">Core Protocols &amp; Their Ports</a>

</div>
<!-- /course-footer -->
