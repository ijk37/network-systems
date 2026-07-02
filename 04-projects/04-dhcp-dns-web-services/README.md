# &#128736; Project 04 — DHCP, DNS & Web Services


<!-- course-header -->
<div align="center" markdown>

![Network Systems](../../assets/banner.svg)

[![View the live site — ijk37.com](https://img.shields.io/badge/%F0%9F%8C%90_View_the_Live_Site-IJK37.COM-E4A72A?style=for-the-badge&labelColor=7E0E23)](https://ijk37.com/network-systems/)

<img src="https://img.shields.io/badge/Project_04-DHCP,_DNS_%26_Web_Services-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Project 04: DHCP, DNS & Web Services">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../../index.md) [![All Projects](https://img.shields.io/badge/All_Projects-3B2530?style=flat-square)](../README.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../../01-notes/README.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../../03-quiz/)

</div>
<!-- /course-header -->

**Type:** Hands-on Packet Tracer lab
**Modules:** 03 (Addressing), 04 (Protocols)
**Difficulty:** ⭐⭐⭐

---

## &#127919; Objective

Stand up the core services that make a network usable: **DHCP** (automatic addressing), **DNS** (name resolution), and an **HTTP web server** — then verify a client can browse a site by name.

---

## &#129517; Scenario

A small office needs:
- Clients to receive addressing automatically.
- Users to reach `www.acme.local` by name instead of IP.
- An internal web page served over HTTP.

| Device | Address |
|--------|---------|
| Router / gateway | 192.168.1.1/24 |
| DNS + Web server | 192.168.1.10 |
| DHCP pool | 192.168.1.100 – 192.168.1.200 |

---

## &#128225; Part A — DHCP

Configure a DHCP pool (on the router or a server):

```
Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.99
Router(config)# ip dhcp pool OFFICE
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 192.168.1.10
```

Set PCs to **DHCP** and confirm they lease an address (watch the **DORA** exchange in Simulation mode).

## &#127760; Part B — DNS

1. On the server, enable the **DNS** service.
2. Add an **A record**: `www.acme.local` → `192.168.1.10`.

## &#128204; Part C — Web Server

1. Enable **HTTP** on the server and edit the default page.
2. From a PC, browse to `http://www.acme.local`.

---

## &#9989; Verification

- [ ] `ipconfig` on a PC shows a leased address, gateway, and DNS server.
- [ ] `nslookup www.acme.local` resolves to 192.168.1.10.
- [ ] The web page loads **by name** in the PC browser.
- [ ] In Simulation mode you can identify DHCP (DORA) and DNS query packets.

---

## &#128230; Deliverables

- Packet Tracer file (local).
- A captured description of the **DORA** exchange.
- Answer: *if the DNS server IP is wrong in DHCP, what symptom does the user see even though `ping 192.168.1.10` works?*

## &#128640; Stretch Goals

- Add a **DHCP relay** (`ip helper-address`) so a client on another VLAN/subnet gets addresses from this central server.
- Serve the page over **HTTPS** and discuss the certificate.

See also notes: [[03-04-dhcp]], [[03-05-dns]], [[04-03-core-protocols-and-ports]]
