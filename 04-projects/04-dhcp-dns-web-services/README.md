# Project 04 — DHCP, DNS & Web Services

**Type:** Hands-on Packet Tracer lab
**Modules:** 03 (Addressing), 04 (Protocols)
**Difficulty:** ⭐⭐⭐

---

## Objective

Stand up the core services that make a network usable: **DHCP** (automatic addressing), **DNS** (name resolution), and an **HTTP web server** — then verify a client can browse a site by name.

---

## Scenario

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

## Part A — DHCP

Configure a DHCP pool (on the router or a server):

```
Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.99
Router(config)# ip dhcp pool OFFICE
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 192.168.1.10
```

Set PCs to **DHCP** and confirm they lease an address (watch the **DORA** exchange in Simulation mode).

## Part B — DNS

1. On the server, enable the **DNS** service.
2. Add an **A record**: `www.acme.local` → `192.168.1.10`.

## Part C — Web Server

1. Enable **HTTP** on the server and edit the default page.
2. From a PC, browse to `http://www.acme.local`.

---

## Verification

- [ ] `ipconfig` on a PC shows a leased address, gateway, and DNS server.
- [ ] `nslookup www.acme.local` resolves to 192.168.1.10.
- [ ] The web page loads **by name** in the PC browser.
- [ ] In Simulation mode you can identify DHCP (DORA) and DNS query packets.

---

## Deliverables

- Packet Tracer file (local).
- A captured description of the **DORA** exchange.
- Answer: *if the DNS server IP is wrong in DHCP, what symptom does the user see even though `ping 192.168.1.10` works?*

## Stretch Goals

- Add a **DHCP relay** (`ip helper-address`) so a client on another VLAN/subnet gets addresses from this central server.
- Serve the page over **HTTPS** and discuss the certificate.

See also notes: [[03-04-dhcp]], [[03-05-dns]], [[04-03-core-protocols-and-ports]]
