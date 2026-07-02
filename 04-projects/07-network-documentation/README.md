# &#128736; Project 07 — Network Documentation Package


<!-- course-header -->
<div align="center" markdown>

![Network Systems](../../assets/banner.svg)

[![View the live site — ijk37.com](https://img.shields.io/badge/%F0%9F%87%A7%F0%9F%87%A9_View_the_Live_Site-IJK37.COM-F42A41?style=for-the-badge&labelColor=006A4E)](https://ijk37.com/network-systems/)

<img src="https://img.shields.io/badge/Project_07-Network_Documentation_Package-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Project 07: Network Documentation Package">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../../index.md) [![All Projects](https://img.shields.io/badge/All_Projects-3B2530?style=flat-square)](../README.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../../01-notes/README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../../03-quiz/)

</div>
<!-- /course-header -->

**Type:** Design / documentation
**Modules:** 02 (Infrastructure & Documentation)
**Difficulty:** ⭐⭐

---

## &#127919; Objective

Produce the **documentation package** a technician would need to operate and troubleshoot a network — physical and logical diagrams, a rack elevation, an IP/asset inventory, a labeling scheme, and a change record.

> Document a real network you have access to (home/lab), or the fictional **Bright Retail** office from [Project 05](../05-secure-network-design/README.md).

---

## &#128230; Deliverables

### &#128313; 1. Physical network diagram
Show actual devices, ports, cable runs, and locations. Include MDF/IDF, patch panels, switches, APs, and the demarc/entrance facility.

### &#128313; 2. Logical network diagram
Show IP addressing, subnets/VLANs, gateways, and how traffic flows (not physical cabling).

### &#128313; 3. Rack elevation (rack diagram)
Document each device's **U position** in the rack (e.g., firewall U42, switch U40, patch panel U38, server U34–35, UPS U1–4). Total the rack units used.

### &#128313; 4. IP / asset inventory (IPAM sheet)
A table of assigned addresses:

| Device | Role | IP | Subnet/VLAN | MAC | Location | Firmware |
|--------|------|----|-------------|-----|----------|----------|

### &#128313; 5. Labeling scheme
Define a consistent scheme for cables, jacks, patch-panel ports, and racks (e.g., `IDF2-PP1-P14` = IDF 2, patch panel 1, port 14). Explain how it speeds troubleshooting.

### &#128313; 6. Change record + rollback plan
Write one change request for a realistic change (e.g., replacing the core switch), including reason/scope, risk, implementation steps, **rollback plan**, and approval line.

---

## &#129520; Tools

- Diagrams: [draw.io / diagrams.net](https://app.diagrams.net) (free), Lucidchart, or Visio.
- Tables: Markdown or a spreadsheet.

---

## &#9989; Verification Checklist

- [ ] Physical and logical diagrams are **separate** and each shows the right kind of information.
- [ ] Rack elevation totals the U used and lists every mounted device.
- [ ] IPAM sheet has no duplicate IPs and covers gateways/servers/infrastructure.
- [ ] Labeling scheme is unambiguous and consistently applied on the diagrams.
- [ ] Change record includes a **rollback plan**.

---

## &#128640; Stretch Goals

- Capture a **performance baseline** (interface utilization at a normal time) to compare against later.
- Add an **SLA summary** for the Internet link and define your **MTTR** target for a switch failure.

See also notes: [[02-03-network-documentation]], [[02-01-structured-cabling]], [[02-04-change-management]]
