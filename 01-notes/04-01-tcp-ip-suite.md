# &#128216; 04-01: The TCP/IP Suite & Encapsulation

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_04-Network_Protocols-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 04: Network Protocols">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/04-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#10067; What Is TCP/IP?

**TCP/IP** is a **suite** of cooperating protocols — not a single protocol. Core members:

| Protocol | Layer | Role |
|----------|-------|------|
| **HTTP, DNS, SMTP** | Application | Services |
| **TCP, UDP** | Transport | Delivery + ports |
| **IP (v4/v6), ICMP** | Network | Addressing + routing |
| **ARP, Ethernet** | Link | Local delivery + framing |

---

## &#128204; The TCP/IP Model vs. OSI

| TCP/IP (4-layer) | OSI layers |
|------------------|------------|
| Application | 5, 6, 7 |
| Transport | 4 |
| Internet | 3 |
| Link (Network Access) | 1, 2 |

---

## &#128204; Encapsulation (Data Moving Down the Stack)

Each layer adds a header (Data Link also adds a trailer):

```
[App data]                                   ← payload (L7-5)
[TCP/UDP hdr | data]              = Segment   ← ports (L4)
[IP hdr | segment]               = Packet    ← IP addresses (L3)
[Frame hdr | packet | trailer]   = Frame     ← MAC addresses (L2)
[bits on the wire]               = Bits       (L1)
```

The receiving host reverses this (**decapsulation**), stripping one header per layer going up.

---

## &#128204; What Each Header Adds

| Layer | Header adds |
|-------|-------------|
| Transport | Source/destination **ports** |
| Network | Source/destination **IP** + TTL + protocol # |
| Data Link | Source/destination **MAC** + FCS (in trailer) |

---

> [!TIP]
> **Key idea —** TCP/IP is a **suite**. As data goes down the stack it's **encapsulated** — ports at L4, IPs at L3, MACs at L2 — becoming **segment → packet → frame → bits**.

See also: [The OSI Model](01-03-osi-model.md), [TCP vs. UDP](04-02-tcp-vs-udp.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [CLI Troubleshooting Tools](03-07-cli-troubleshooting-tools.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 04 Exercise](../02-exercises/04-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [TCP vs. UDP](04-02-tcp-vs-udp.md)

</div>
<!-- /course-footer -->
