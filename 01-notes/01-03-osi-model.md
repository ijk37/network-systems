# 01-03: The OSI Model

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/01-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 01: Introduction to Networking | 01-03 |
<!-- /course-header -->

## What Is the OSI Model?

The **OSI (Open Systems Interconnection)** model is a 7-layer conceptual framework that standardizes how data moves through a network. Each layer has a specific job and talks to the layers above and below it.

---

## The Seven Layers

| # | Layer | Job | PDU | Examples |
|---|-------|-----|-----|----------|
| 7 | **Application** | Interface to user apps | Data | HTTP, DNS, SMTP |
| 6 | **Presentation** | Format, encrypt, compress | Data | TLS, JPEG, ASCII |
| 5 | **Session** | Establish/manage sessions | Data | NetBIOS, RPC |
| 4 | **Transport** | Reliable/unreliable delivery, ports | Segment | TCP, UDP |
| 3 | **Network** | Logical addressing, routing | Packet | IP, ICMP, routers |
| 2 | **Data Link** | Physical addressing, framing | Frame | Ethernet, MAC, switches |
| 1 | **Physical** | Transmit raw bits on the medium | Bits | Cables, NICs, hubs |

**Mnemonics:** Layer 7→1 "All People Seem To Need Data Processing"; Layer 1→7 "Please Do Not Throw Sausage Pizza Away."

---

## Protocol Data Units (PDUs)

Data is named differently at each layer as headers are added (**encapsulation**):

```
Data  →  Segment  →  Packet  →  Frame  →  Bits
(L5-7)   (L4)        (L3)       (L2)      (L1)
```

- **Encapsulation:** each layer adds its own header as data moves *down* the sending host.
- **Decapsulation:** each layer strips its header as data moves *up* the receiving host.

---

## Which Devices Live Where

| Device | Layer |
|--------|-------|
| Hub, cable, NIC (physical) | 1 |
| Switch, bridge | 2 |
| Router, Layer 3 switch | 3 |
| Firewall (stateful) | 3–4 (NGFW up to 7) |

---

## Why It Matters

- **Troubleshooting:** work bottom-up (Physical first) or top-down. A dead cable is Layer 1; a routing issue is Layer 3.
- **Design:** knowing the layer of a device/protocol clarifies its role.

---

## Key Idea

> The OSI model splits communication into **7 independent layers**. Remember the order, the **PDU names** (segment → packet → frame → bits), and **which device operates at which layer**.

See also: [Network Hardware Devices](01-04-network-hardware.md), [The TCP/IP Suite & Encapsulation](04-01-tcp-ip-suite.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="01-02-network-models.md">Network Models &amp; Topologies</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/01-exercise.md">Module 01 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="01-04-network-hardware.md">Network Hardware Devices</a>

</div>
<!-- /course-footer -->
