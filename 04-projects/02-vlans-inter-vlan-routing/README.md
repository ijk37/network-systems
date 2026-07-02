# Project 02 — VLANs & Inter-VLAN Routing


<!-- course-header -->
<div align="center">

<a href="../../README.md"><img src="../../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Project_02-VLANs_%26_Inter--VLAN_Routing-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Project 02: VLANs & Inter-VLAN Routing">

<a href="../../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="../README.md"><img src="https://img.shields.io/badge/All_Projects-3B2530?style=flat-square" alt="All Projects"></a> <a href="../../01-notes/README.md"><img src="https://img.shields.io/badge/Notes-3B2530?style=flat-square" alt="Notes"></a> <a href="../../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

**Type:** Hands-on Packet Tracer lab
**Modules:** 08 (Subnets & VLANs), 01 (Hardware)
**Difficulty:** ⭐⭐⭐

---

## Objective

Segment a flat network into **VLANs**, carry them over an **802.1Q trunk**, and enable communication between them using **inter-VLAN routing** (router-on-a-stick, then a Layer 3 switch).

---

## Scenario

A small office currently has everyone on one flat LAN. You will separate traffic into three VLANs for security and performance.

| VLAN | Name | Subnet | Gateway |
|------|------|--------|---------|
| 10 | Staff | 192.168.10.0/24 | 192.168.10.1 |
| 20 | Voice | 192.168.20.0/24 | 192.168.20.1 |
| 30 | Guest | 192.168.30.0/24 | 192.168.30.1 |

---

## Part A — VLANs & Trunk

1. Create VLANs 10, 20, 30 on the switch.
2. Assign access ports to the correct VLAN and connect a PC to each.
3. Configure the switch-to-router link as an **802.1Q trunk**.
4. Change the **native VLAN** off the default (VLAN 1) and set it consistently on both ends.

```
Switch(config)# vlan 10
Switch(config-vlan)# name Staff
Switch(config)# interface fa0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
Switch(config)# interface fa0/24
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk native vlan 99
```

## Part B — Router-on-a-Stick

1. Create subinterfaces on the router's trunk interface, one per VLAN.
2. Tag each with `encapsulation dot1Q <vlan>` and assign the gateway IP.

```
Router(config)# interface g0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
```

## Part C — Layer 3 Switch (alternative)

1. Enable `ip routing` on a multilayer switch.
2. Create an **SVI** per VLAN (`interface vlan 10` → assign gateway IP).
3. Compare performance/simplicity vs. router-on-a-stick.

---

## Verification

- [ ] `show vlan brief` shows ports in the right VLANs.
- [ ] `show interfaces trunk` shows VLANs 10/20/30 allowed and correct native VLAN.
- [ ] A Staff PC can ping a Guest PC **only after** inter-VLAN routing is configured.
- [ ] Before routing, cross-VLAN ping **fails** (proving isolation).

---

## Deliverables

- Packet Tracer file (local).
- Answer: *Why is VLAN 1 a poor choice for the native/management VLAN?*
- A note on when you'd choose an L3 switch over router-on-a-stick.

## Stretch Goals

- Add **DHCP** per VLAN with `ip helper-address` to a central server.
- Apply an **ACL** so Guest cannot reach Staff, but both reach the Internet.

See also notes: [[08-12-vlan]], [[10-05-switch-hardening]]
