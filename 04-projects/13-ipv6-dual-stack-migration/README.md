# &#128736; Project 13 — IPv6 Dual-Stack Migration


<!-- course-header -->
<div align="center" markdown>

![Network Systems](../../assets/banner.svg)

[![View the live site — ijk37.com](https://img.shields.io/badge/%F0%9F%87%A7%F0%9F%87%A9_View_the_Live_Site-IJK37.COM-F42A41?style=for-the-badge&labelColor=006A4E)](https://ijk37.com/network-systems/)

<img src="https://img.shields.io/badge/Project_13-IPv6_Dual--Stack_Migration-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Project 13: IPv6 Dual-Stack Migration">

[![Home](https://img.shields.io/badge/âŒ‚_Home-3B2530?style=flat-square)](../../index.md) [![All Projects](https://img.shields.io/badge/All_Projects-3B2530?style=flat-square)](../README.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../../01-notes/README.md) [![Quiz](https://img.shields.io/badge/â–¶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../../03-quiz/)

</div>
<!-- /course-header -->

**Type:** Design + Packet Tracer or lab verification  
**Modules:** 03 (IPv6 Addressing), 08 (Subnetting), 12 (Routing)  
**Difficulty:** â­â­â­â­

---

## &#127919; Objective

Plan and test a small dual-stack network where IPv4 continues to work while IPv6 is introduced with clean addressing, router advertisements, DNS records, and routing.

---

## &#129517; Scenario

**Summit Health Clinic** runs an IPv4 network today but wants to prepare for IPv6. The clinic will not remove IPv4 yet. Instead, it will deploy **dual stack** on the staff, voice, server, and guest networks.

You are given the IPv6 prefix:

```text
2001:db8:5040::/48
```

Use one `/64` per VLAN.

---

## &#129521; Existing IPv4 VLANs

| VLAN | Name | IPv4 subnet | IPv6 subnet to assign |
| --- | --- | --- | --- |
| 10 | Staff | `192.168.10.0/24` | |
| 20 | Voice | `192.168.20.0/24` | |
| 30 | Guest | `192.168.30.0/24` | |
| 40 | Servers | `192.168.40.0/24` | |
| 99 | Management | `192.168.99.0/24` | |

Suggested IPv6 pattern:

```text
2001:db8:5040:10::/64
2001:db8:5040:20::/64
2001:db8:5040:30::/64
2001:db8:5040:40::/64
2001:db8:5040:99::/64
```

---

## &#129513; Tasks

### &#128313; Part A — Addressing Plan

1. Assign one `/64` to each VLAN.
2. Reserve `::1` in each subnet for the default gateway.
3. Assign static IPv6 addresses to server and management devices.
4. Decide whether clients use SLAAC, DHCPv6, or static addressing.
5. Document the plan in a table.

### &#128313; Part B — Router and Client Behavior

Configure or describe:

- Router IPv6 unicast routing.
- IPv6 gateway addresses on VLAN interfaces.
- Router advertisements for client networks.
- DHCPv6 if you choose managed addressing.
- IPv6 DNS resolver settings.

### &#127760; Part C — DNS and Application Testing

Create or document:

| Record | Purpose |
| --- | --- |
| `A` | Existing IPv4 host record |
| `AAAA` | IPv6 host record |
| `PTR` | Reverse lookup if supported |

Test that a client can reach the server by:

1. IPv4 address.
2. IPv6 address.
3. DNS name.

### &#128272; Part D — Routing and Security

1. Add a default IPv6 route toward the ISP edge or upstream router.
2. Verify inter-VLAN IPv6 connectivity.
3. Apply firewall/ACL rules so guest IPv6 traffic cannot reach internal VLANs.
4. Confirm IPv4 security rules were not accidentally bypassed by IPv6.

---

## &#9989; Verification Checklist

- [ ] Each VLAN has a unique `/64`.
- [ ] Clients receive or configure an IPv6 address.
- [ ] Clients have a valid IPv6 default gateway.
- [ ] `ping` works between approved IPv6 endpoints.
- [ ] DNS has both `A` and `AAAA` records where appropriate.
- [ ] Guest IPv6 traffic is blocked from internal networks.
- [ ] IPv4 still works after IPv6 is enabled.

---

## &#128230; Deliverables

- IPv6 addressing table.
- Dual-stack topology diagram.
- Screenshots or command output proving IPv4 and IPv6 connectivity.
- Short migration memo explaining risks, rollback plan, and security controls.

---

## &#128640; Stretch Goals

- Add OSPFv3 between routers.
- Compare SLAAC vs DHCPv6 behavior.
- Add an IPv6-only test host and document what still breaks.
- Write a short "IPv6 readiness checklist" for the clinic.

See also notes: [[03-03-ipv6-addressing]], [[08-11-ipv6-subnetting]], [[12-03-routing]]
