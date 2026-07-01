# 01: Introduction to Networking — Exercises

## Questions

1. List the seven OSI layers in order (1→7) and give the PDU name at Layers 2, 3, and 4.
2. A user reports "the Internet is down." Apply the first three steps of the CompTIA troubleshooting model to this scenario.
3. Classify each device by OSI layer: hub, switch, router, NIC.
4. Explain the difference between a collision domain and a broadcast domain, and state which device breaks up each.
5. A small office of 6 computers shares files directly with no server. A 300-user company uses central logins. Name the network model each uses and one advantage of each.
6. Match the scope to the example: PAN, LAN, MAN, WAN — (a) the Internet, (b) a Bluetooth headset, (c) an office network, (d) a city-wide fiber ring.

---

## Solutions

### 1. OSI layers & PDUs
1. Physical, 2. Data Link, 3. Network, 4. Transport, 5. Session, 6. Presentation, 7. Application.
- **Layer 2 = Frame**, **Layer 3 = Packet**, **Layer 4 = Segment** (TCP) / datagram (UDP).

### 2. Troubleshooting steps
1. **Identify the problem** — ask what "down" means (all sites? one app?), what changed, when it started, whether others are affected.
2. **Establish a theory** — e.g., DNS failure, gateway down, or ISP outage; question the obvious (cable, Wi-Fi).
3. **Test the theory** — `ping 8.8.8.8` (works ⇒ connectivity OK) then `nslookup` (fails ⇒ DNS is the cause).

### 3. Device layers
- **Hub → Layer 1**, **NIC → Layers 1–2**, **Switch → Layer 2**, **Router → Layer 3**.

### 4. Collision vs. broadcast domains
- **Collision domain** — a segment where frames can collide. **Switches** break these up (one per port).
- **Broadcast domain** — the set of devices reached by a broadcast. **Routers** (and VLANs) break these up.

### 5. Network models
- Office of 6 → **peer-to-peer** (advantage: cheap, no server/NOS needed).
- 300-user company → **client-server** (advantage: centralized authentication, backups, and control).

### 6. Scope matching
- (a) Internet → **WAN**, (b) Bluetooth headset → **PAN**, (c) office network → **LAN**, (d) city fiber ring → **MAN**.
