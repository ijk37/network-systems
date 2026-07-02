# &#128216; 06-04: Wireless Design & Roaming

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_06-Wireless_Networking-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 06: Wireless Networking">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/06-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128204; Service Sets

| Term | Meaning |
|------|---------|
| **BSS** (Basic Service Set) | One AP + its associated clients |
| **BSSID** | The AP's MAC address (identifies the BSS) |
| **SSID** | The network **name** clients connect to |
| **ESS** (Extended Service Set) | Multiple APs sharing one SSID over a common backbone |

An **ESS** lets clients **roam** seamlessly between APs without dropping the connection.

---

## &#128204; Site Survey

A **site survey** measures RF conditions to plan coverage:

- **Passive** — listen to existing signals
- **Active** — associate and measure throughput
- **Predictive** — model coverage from a floor plan

Output: a **heat map** of signal strength, revealing coverage gaps and interference.

---

## &#128204; Design Principles

- Use **channels 1/6/11** (2.4 GHz) to avoid overlap; spread channels in 5 GHz.
- In **high-density** areas, **lower AP power** and add **more APs** to shrink cells, reduce co-channel interference, and increase capacity.
- **Band steering** pushes dual-band clients to 5 GHz.

---

## &#128246; Wireless LAN Controller (WLC)

A **WLC** centrally manages many "thin" APs:
- Pushes configuration
- Coordinates channels/power (RRM)
- Enables fast roaming and unified monitoring

---

## &#128204; Guest Access

A **captive portal** intercepts new clients and redirects to a login/terms page before granting Internet access — common for guest Wi-Fi (often on a separate VLAN).

---

> [!TIP]
> **Key idea —** **BSS** = one AP; **ESS** = many APs, one SSID (enables roaming). Plan with a **site survey/heat map**, avoid channel overlap, and use a **WLC** to manage APs at scale.

See also: [Frequencies, Channels & Antennas](06-02-frequencies-and-channels.md), [Virtual LAN (VLAN)](08-12-vlan.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="06-03-wireless-security.md">Wireless Security</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/06-exercise.md">Module 06 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="07-01-cloud-service-models.md">Cloud Service Models</a>

</div>
<!-- /course-footer -->
