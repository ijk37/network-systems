# &#128736; Project 03 — Static & Dynamic Routing (OSPF)


<!-- course-header -->
<div align="center" markdown>

![Network Systems](../../assets/banner.svg)

[![View the live site — ijk37.com](https://img.shields.io/badge/%F0%9F%8C%90_View_the_Live_Site-IJK37.COM-E4A72A?style=for-the-badge&labelColor=7E0E23)](https://ijk37.com/network-systems/)

<img src="https://img.shields.io/badge/Project_03-Static_%26_Dynamic_Routing_(OSPF)-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Project 03: Static & Dynamic Routing (OSPF)">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../../index.md) [![All Projects](https://img.shields.io/badge/All_Projects-3B2530?style=flat-square)](../README.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../../01-notes/README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../../03-quiz/)

</div>
<!-- /course-header -->

**Type:** Hands-on Packet Tracer lab
**Modules:** 12 (WAN), 03/08 (Addressing/Subnets)
**Difficulty:** ⭐⭐⭐⭐

---

## &#127919; Objective

Build a three-router WAN and make every LAN reachable — first with **static routes**, then with **OSPF** dynamic routing — and understand why one route is chosen over another (**administrative distance**).

---

## &#128204; Topology

```
   [PC-A]         [PC-B]          [PC-C]
     |              |               |
  (LAN A)        (LAN B)         (LAN C)
     |              |               |
    R1 ==== WAN1 ==== R2 ==== WAN2 ==== R3
```

| Link | Subnet |
|------|--------|
| LAN A (R1) | 10.0.1.0/24 |
| LAN B (R2) | 10.0.2.0/24 |
| LAN C (R3) | 10.0.3.0/24 |
| WAN1 (R1–R2) | 10.0.12.0/30 |
| WAN2 (R2–R3) | 10.0.23.0/30 |

---

## &#129517; Part A — Static Routing

1. Configure all interface IPs and PC gateways.
2. On each router, add static routes to the networks it doesn't directly connect to.

```
R1(config)# ip route 10.0.2.0 255.255.255.0 10.0.12.2
R1(config)# ip route 10.0.3.0 255.255.255.0 10.0.12.2
R1(config)# ip route 10.0.23.0 255.255.255.252 10.0.12.2
```

3. Verify PC-A can ping PC-C end to end.

## &#128204; Part B — Convert to OSPF

1. Remove the static routes.
2. Enable OSPF and advertise the connected networks.

```
R2(config)# router ospf 1
R2(config-router)# network 10.0.2.0 0.0.0.255 area 0
R2(config-router)# network 10.0.12.0 0.0.0.3 area 0
R2(config-router)# network 10.0.23.0 0.0.0.3 area 0
```

3. Confirm routes are learned dynamically and full connectivity is restored.

## &#128204; Part C — Administrative Distance

1. Re-add one static route to a network also learned via OSPF.
2. Check `show ip route` — which is installed? Explain using AD (static = 1, OSPF = 110).

---

## &#9989; Verification

- [ ] `show ip route` shows remote networks (marked `S` for static, `O` for OSPF).
- [ ] End-to-end ping PC-A ↔ PC-C succeeds under both methods.
- [ ] `show ip ospf neighbor` lists adjacencies in Part B.
- [ ] You can explain which route wins in Part C and why.

---

## &#128230; Deliverables

- Packet Tracer file (local).
- A comparison table: static vs. dynamic (effort, scalability, convergence).
- Answer: *what happens to OSPF if the R1–R2 link fails?* (Test it.)

## &#128640; Stretch Goals

- Add a **default route** on R1 toward a simulated ISP and redistribute it.
- Configure a **floating static route** as a backup path.

See also notes: [[12-03-routing]], [[12-01-wan-fundamentals]]
