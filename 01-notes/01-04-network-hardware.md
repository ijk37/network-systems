# 01-04: Network Hardware Devices

## Common Devices and Their Roles

| Device | OSI Layer | Function |
|--------|-----------|----------|
| **NIC** | 1–2 | Connects a host to the medium; has a burned-in MAC address |
| **Hub** | 1 | Repeats signals out all ports (single collision domain) — legacy |
| **Switch** | 2 | Forwards frames by MAC address; each port = own collision domain |
| **Router** | 3 | Forwards packets between networks using IP; separates broadcast domains |
| **Layer 3 switch** | 2–3 | Switches *and* routes between VLANs at wire speed |
| **Access Point (AP)** | 1–2 | Bridges wireless clients to the wired LAN |
| **Firewall** | 3–7 | Filters traffic by policy between network zones |

---

## Hub vs. Switch vs. Router

- **Hub** — "dumb" repeater; everyone hears everything. Causes collisions. Obsolete.
- **Switch** — learns MAC addresses, builds a MAC table, and forwards frames only to the correct port. Each port is its own collision domain.
- **Router** — connects *different* networks (LAN ↔ Internet), makes path decisions using IP, and does **not** forward broadcasts.

---

## Collision vs. Broadcast Domains

| | Collision domain | Broadcast domain |
|---|------------------|------------------|
| **Hub** | One (all ports) | One |
| **Switch** | One per port | One (per VLAN) |
| **Router** | One per interface | One per interface |

- **Switches** break up collision domains.
- **Routers** (and VLANs) break up broadcast domains.

---

## The NIC

- Provides the host's **physical connection** (Layer 1) and its **MAC address** (Layer 2).
- Can be wired (Ethernet) or wireless (Wi-Fi).

---

## Key Idea

> **Switches move frames within a network (Layer 2); routers move packets between networks (Layer 3).** Switches break up collision domains; routers break up broadcast domains.

See also: [The OSI Model](01-03-osi-model.md), [Network Segmentation](08-01-network-segmentation.md)

<!-- nav -->

---

⬅️ **Prev:** [The OSI Model](01-03-osi-model.md)  ·  [📚 All Notes](README.md)  ·  **Next:** [Troubleshooting Methodology & Safety](01-05-troubleshooting-and-safety.md) ➡️
