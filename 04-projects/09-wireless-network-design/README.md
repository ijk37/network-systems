# &#128736; Project 09 — Wireless Network Design


<!-- course-header -->
<div align="center" markdown>

![Network Systems](../../assets/banner.svg)

[![View the live site — ijk37.com](https://img.shields.io/badge/%F0%9F%87%A7%F0%9F%87%A9_View_the_Live_Site-IJK37.COM-F42A41?style=for-the-badge&labelColor=006A4E)](https://ijk37.com/network-systems/)

<img src="https://img.shields.io/badge/Project_09-Wireless_Network_Design-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Project 09: Wireless Network Design">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../../index.md) [![All Projects](https://img.shields.io/badge/All_Projects-3B2530?style=flat-square)](../README.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../../01-notes/README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../../03-quiz/)

</div>
<!-- /course-header -->

**Type:** Design + Packet Tracer
**Modules:** 06 (Wireless), 08 (VLANs), 10 (Security)
**Difficulty:** ⭐⭐⭐

---

## &#127919; Objective

Design a secure, high-capacity **WLAN** for an office: plan AP placement and a channel scheme, choose the right security, and separate staff from guests — then build a basic version in Packet Tracer.

---

## &#129517; Scenario

**Vertex Co.** needs Wi-Fi across an open-plan floor (~40 × 20 m, ~60 users) plus a guest area near reception.

Requirements:
- Reliable 5 GHz coverage for staff laptops and phones.
- Isolated guest access with a captive portal.
- Per-user authentication for staff.

---

## &#128204; Part A — RF Design

1. **AP count & placement** — estimate how many APs are needed and sketch placement for even coverage without excessive overlap.
2. **Channel plan** — assign non-overlapping channels. In 2.4 GHz use **1 / 6 / 11**; in 5 GHz spread channels. Explain co-channel interference.
3. **Band & power** — enable **band steering** to 5 GHz; discuss lowering AP power in the dense area and adding APs to raise capacity.
4. **Site survey** — describe how you'd validate coverage with a **heat map** (passive/active/predictive).

## &#128272; Part B — Security & Segmentation

1. **Staff SSID** → **WPA2/WPA3-Enterprise (802.1X)** with a **RADIUS** server (per-user logins).
2. **Guest SSID** → separate **VLAN**, **captive portal**, Internet-only (no internal access).
3. Explain why **WEP** and **SSID hiding** are not real security, and how to detect an **evil twin/rogue AP** (WIPS).

## &#128204; Part C — Build (Packet Tracer)

1. Add a wireless AP/WLC and a controller-managed or standalone AP.
2. Connect wireless PCs/laptops; put guest traffic on its own VLAN.
3. Verify staff can reach internal resources and guests can only reach the Internet.

---

## &#9989; Verification Checklist

- [ ] Channel plan uses non-overlapping channels (1/6/11 in 2.4 GHz).
- [ ] Staff authenticate individually (802.1X/RADIUS), not a shared PSK.
- [ ] Guest SSID is isolated on its own VLAN with a captive portal.
- [ ] Wireless clients associate and pass traffic in Packet Tracer.

---

## &#128230; Deliverables

- Floor sketch with AP placement + channel/power plan.
- Security design (SSIDs, auth, VLANs).
- Packet Tracer file (local).

## &#128640; Stretch Goals

- Add a **WLC** and describe centralized RRM (channel/power) and fast roaming (ESS).
- Design for **Wi-Fi 6 (OFDMA)** in the high-density area and justify the benefit.

See also notes: [[06-04-wireless-design]], [[06-03-wireless-security]], [[06-02-frequencies-and-channels]]
