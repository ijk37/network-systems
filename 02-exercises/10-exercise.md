# 10: Security in Network Design — Exercises

## Questions

1. Explain the difference between a stateful and a stateless firewall.
2. An ACL has three permit rules and no deny rules. Will traffic matching none of them be allowed? Why?
3. Where should an IPS be placed relative to traffic, and how does that differ from an IDS?
4. A public web server must be reachable from the Internet without exposing the internal LAN. What design element solves this?
5. Match each Layer 2 defense to the attack it stops: port security, DHCP snooping, Dynamic ARP Inspection, BPDU Guard.
6. Contrast RADIUS and TACACS+ and state a good use case for each.

---

## Solutions

### 1. Stateful vs. stateless firewall
A **stateful** firewall tracks connection state and automatically permits legitimate **return traffic**. A **stateless** firewall inspects each packet in isolation with no session awareness.

### 2. Implicit deny
**No** — traffic matching no rule hits the **implicit deny all** at the end of the ACL and is dropped.

### 3. IPS vs. IDS placement
An **IPS sits inline** so it can actively **block** traffic. An **IDS** is typically **out-of-band** (SPAN/tap) and only **alerts**, since it doesn't need to drop packets.

### 4. Public server design
Place it in a **DMZ (screened subnet)** — reachable from the Internet but isolated from the internal LAN, so a compromise there doesn't expose internal systems.

### 5. Layer 2 defenses
- **Port security** → MAC flooding / rogue devices
- **DHCP snooping** → rogue DHCP server
- **Dynamic ARP Inspection** → ARP spoofing (MITM)
- **BPDU Guard** → rogue switch manipulating STP

### 6. RADIUS vs. TACACS+
- **RADIUS** (UDP, encrypts password only, combines authz) — good for **network access / 802.1X**.
- **TACACS+** (TCP 49, encrypts whole payload, separates AAA) — good for granular **device administration**.
