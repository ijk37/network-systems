# 04-01: The TCP/IP Suite & Encapsulation

## What Is TCP/IP?

**TCP/IP** is a **suite** of cooperating protocols — not a single protocol. Core members:

| Protocol | Layer | Role |
|----------|-------|------|
| **HTTP, DNS, SMTP** | Application | Services |
| **TCP, UDP** | Transport | Delivery + ports |
| **IP (v4/v6), ICMP** | Network | Addressing + routing |
| **ARP, Ethernet** | Link | Local delivery + framing |

---

## The TCP/IP Model vs. OSI

| TCP/IP (4-layer) | OSI layers |
|------------------|------------|
| Application | 5, 6, 7 |
| Transport | 4 |
| Internet | 3 |
| Link (Network Access) | 1, 2 |

---

## Encapsulation (Data Moving Down the Stack)

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

## What Each Header Adds

| Layer | Header adds |
|-------|-------------|
| Transport | Source/destination **ports** |
| Network | Source/destination **IP** + TTL + protocol # |
| Data Link | Source/destination **MAC** + FCS (in trailer) |

---

## Key Idea

> TCP/IP is a **suite**. As data goes down the stack it's **encapsulated** — ports at L4, IPs at L3, MACs at L2 — becoming **segment → packet → frame → bits**.

See also: [[01-03-osi-model]], [[04-02-tcp-vs-udp]]
