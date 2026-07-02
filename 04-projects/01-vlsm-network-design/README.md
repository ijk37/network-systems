# &#128736; Project 01 — VLSM Network Design


<!-- course-header -->
<div align="center" markdown>

![Network Systems](../../assets/banner.svg)

<img src="https://img.shields.io/badge/Project_01-VLSM_Network_Design-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Project 01: VLSM Network Design">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../../index.md) [![All Projects](https://img.shields.io/badge/All_Projects-3B2530?style=flat-square)](../README.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../../01-notes/README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../../03-quiz/)

</div>
<!-- /course-header -->

**Type:** Design document + Packet Tracer verification
**Modules:** 03 (Addressing), 08 (Subnets & VLANs)
**Difficulty:** ⭐⭐⭐

---

## &#127919; Objective

Design a complete, efficient IPv4 addressing plan for a multi-department company using **Variable Length Subnet Masking (VLSM)**, then verify it in Packet Tracer.

---

## &#129517; Scenario

**Acme Corp** has been assigned the block **172.16.0.0/22**. You must subnet it for the following requirements (largest first):

| Department | Hosts needed |
|------------|--------------|
| Sales | 250 |
| Engineering | 120 |
| Support | 60 |
| Management | 25 |
| Servers (DMZ) | 12 |
| WAN link R1–R2 | 2 |
| WAN link R2–R3 | 2 |

---

## &#128204; Requirements

1. Use **VLSM** — size each subnet to its need, no wasted space.
2. Allocate **largest requirement first**.
3. No overlapping subnets.
4. Document, for each subnet: network ID, mask (CIDR + dotted decimal), usable host range, and broadcast address.
5. Reserve the **first usable address** of each LAN subnet for the gateway.

---

## &#129513; Tasks

### &#128313; Part A — Design (on paper / in the design doc)
1. For each requirement, find the smallest prefix that fits (`2^h − 2 ≥ hosts`).
2. Starting at `172.16.0.0`, allocate subnets in descending size order, incrementing by each block size.
3. Fill in the **addressing table** (template in [`design.md`](design.md)).

### &#128313; Part B — Build & Verify (Packet Tracer)
1. Create 3 routers, switches per department, and 1–2 PCs per subnet.
2. Configure interface IPs from your plan; set PC gateways.
3. Configure the WAN links (`/30`) between routers and a routing method (static or OSPF).
4. Verify with `ping` across departments and `show ip interface brief`.

---

## &#9989; Verification Checklist

- [ ] Every department has enough usable hosts (and minimal waste).
- [ ] No two subnets overlap.
- [ ] A PC in Sales can ping a PC in Engineering (routing works).
- [ ] WAN links use `/30` (2 usable hosts each).

---

## &#128230; Deliverables

- Completed [`design.md`](design.md) addressing table.
- A Packet Tracer `.pkt` file (kept locally — the repo ignores `.pkt`).
- A short reflection: how much address space did VLSM save vs. giving every subnet a `/24`?

---

## &#128640; Stretch Goals

- Add a **summary route** advertised toward an ISP router.
- Re-do the plan with an **IPv6 /48**, giving each subnet a `/64`.

See also notes: [[08-10-vlsm]], [[08-07-subnetting-examples]]
