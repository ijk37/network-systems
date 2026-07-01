# 10-05: Switch & Port Hardening

## Layer 2 Attacks and Their Defenses

| Attack | Defense |
|--------|---------|
| **MAC flooding** | **Port security** (limit MACs per port) |
| **Rogue DHCP server** | **DHCP snooping** (trust only uplink ports) |
| **ARP spoofing (MITM)** | **Dynamic ARP Inspection (DAI)** |
| **IP spoofing** | **IP Source Guard** |
| **VLAN hopping** | Disable DTP, set unused native VLAN, disable unused ports |
| **STP manipulation** | **BPDU Guard**, Root Guard |
| **Unauthorized devices** | **802.1X**, disable/shut unused ports |

---

## Port Security

Restricts a port to specific or a maximum number of MAC addresses; on violation it can **shut down**, **restrict**, or **protect**. Defends against MAC flooding and rogue devices.

---

## DHCP Snooping + DAI + IP Source Guard

These work together using a **binding table**:

1. **DHCP snooping** — permits DHCP server replies only from trusted (uplink) ports and builds an IP/MAC/port binding table.
2. **DAI** — validates ARP against that table, blocking forged ARP replies.
3. **IP Source Guard** — permits only traffic whose source IP/MAC matches a binding.

---

## VLAN Hardening

- Move user/management traffic **off VLAN 1**.
- Set a dedicated, unused **native VLAN** on trunks.
- Disable **DTP** auto-trunking; hardcode access vs. trunk.
- **Shut down unused ports** (place in an unused VLAN).

---

## Key Idea

> Harden Layer 2: **port security** (MAC flooding), **DHCP snooping + DAI + IP Source Guard** (rogue DHCP / ARP / IP spoofing), **BPDU Guard** (STP), and disable unused ports + DTP (VLAN hopping).

See also: [[10-04-secure-network-design]], [[08-12-vlan]]
