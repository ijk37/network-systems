# 06-04: Wireless Design & Roaming

## Service Sets

| Term | Meaning |
|------|---------|
| **BSS** (Basic Service Set) | One AP + its associated clients |
| **BSSID** | The AP's MAC address (identifies the BSS) |
| **SSID** | The network **name** clients connect to |
| **ESS** (Extended Service Set) | Multiple APs sharing one SSID over a common backbone |

An **ESS** lets clients **roam** seamlessly between APs without dropping the connection.

---

## Site Survey

A **site survey** measures RF conditions to plan coverage:

- **Passive** — listen to existing signals
- **Active** — associate and measure throughput
- **Predictive** — model coverage from a floor plan

Output: a **heat map** of signal strength, revealing coverage gaps and interference.

---

## Design Principles

- Use **channels 1/6/11** (2.4 GHz) to avoid overlap; spread channels in 5 GHz.
- In **high-density** areas, **lower AP power** and add **more APs** to shrink cells, reduce co-channel interference, and increase capacity.
- **Band steering** pushes dual-band clients to 5 GHz.

---

## Wireless LAN Controller (WLC)

A **WLC** centrally manages many "thin" APs:
- Pushes configuration
- Coordinates channels/power (RRM)
- Enables fast roaming and unified monitoring

---

## Guest Access

A **captive portal** intercepts new clients and redirects to a login/terms page before granting Internet access — common for guest Wi-Fi (often on a separate VLAN).

---

## Key Idea

> **BSS** = one AP; **ESS** = many APs, one SSID (enables roaming). Plan with a **site survey/heat map**, avoid channel overlap, and use a **WLC** to manage APs at scale.

See also: [[06-02-frequencies-and-channels]], [[08-12-vlan]]
