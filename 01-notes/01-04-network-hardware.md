# &#128216; 01-04: Network Hardware Devices

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_01-Introduction_to_Networking-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 01: Introduction to Networking">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/01-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128204; Common Devices and Their Roles

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

## &#128204; Hub vs. Switch vs. Router

- **Hub** — "dumb" repeater; everyone hears everything. Causes collisions. Obsolete.
- **Switch** — learns MAC addresses, builds a MAC table, and forwards frames only to the correct port. Each port is its own collision domain.
- **Router** — connects *different* networks (LAN ↔ Internet), makes path decisions using IP, and does **not** forward broadcasts.

---

## &#128204; Collision vs. Broadcast Domains

| | Collision domain | Broadcast domain |
|---|------------------|------------------|
| **Hub** | One (all ports) | One |
| **Switch** | One per port | One (per VLAN) |
| **Router** | One per interface | One per interface |

- **Switches** break up collision domains.
- **Routers** (and VLANs) break up broadcast domains.

---

## &#128204; The NIC

- Provides the host's **physical connection** (Layer 1) and its **MAC address** (Layer 2).
- Can be wired (Ethernet) or wireless (Wi-Fi).

---

> [!TIP]
> **Key idea —** **Switches move frames within a network (Layer 2); routers move packets between networks (Layer 3).** Switches break up collision domains; routers break up broadcast domains.

See also: [The OSI Model](01-03-osi-model.md), [Network Segmentation](08-01-network-segmentation.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [The OSI Model](01-03-osi-model.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 01 Exercise](../02-exercises/01-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [Troubleshooting Methodology &amp; Safety](01-05-troubleshooting-and-safety.md)

</div>
<!-- /course-footer -->
