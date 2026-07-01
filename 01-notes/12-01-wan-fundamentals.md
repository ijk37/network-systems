# 12-01: WAN Fundamentals

## LAN vs. WAN

| | **LAN** | **WAN** |
|---|---------|---------|
| Scope | Building/campus | Large geographic area |
| Ownership | Private | Provider/telco (NSP) |
| Differ at | — | Layers 1 & 2 (access, media, topology) |
| Share | — | Layer 3+ protocols (IP, TCP/UDP) |
| Examples | Office switch network | The Internet, multi-site company |

> LANs and WANs differ at **Layers 1–2** but use the **same Layer 3+ protocols**. WANs are typically owned by providers like AT&T, Verizon, Comcast.

---

## WAN Selection Factors

Choosing a WAN technology depends on:

- **Traffic load** / required bandwidth
- **Budget**
- **Geographic breadth**
- Commercially **available** technology at the site
- **Latency** and reliability needs (**SLA**)

---

## Key Boundary Terms

| Term | Meaning |
|------|---------|
| **Demarc** | Boundary between provider and customer responsibility |
| **Last mile** | Link from provider to the customer premises |
| **CSU/DSU** | Terminates a digital leased line (T1/T3) to the router |
| **CPE** | Customer Premises Equipment |

---

## The Router's Role

Routers manage **internetwork communication** — forwarding packets between separate networks using IP, choosing paths, and tying LANs into the WAN/Internet.

---

## Key Idea

> A **WAN** spans wide distances, is provider-owned, and differs from a LAN at **Layers 1–2**. Selection balances **bandwidth, budget, geography, availability, latency, and SLA**.

See also: [WAN Technologies](12-02-wan-technologies.md), [Routing](12-03-routing.md)

<!-- nav -->

---

⬅️ **Prev:** [Fault Tolerance & Recovery](11-04-fault-tolerance-and-recovery.md)  ·  [📚 All Notes](README.md)  ·  **Next:** [WAN Technologies](12-02-wan-technologies.md) ➡️
