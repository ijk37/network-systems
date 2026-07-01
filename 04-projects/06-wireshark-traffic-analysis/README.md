# Project 06 — Wireshark Traffic Analysis

**Type:** Hands-on capture & analysis
**Modules:** 04 (Protocols), 03 (Addressing), 01 (OSI)
**Difficulty:** ⭐⭐⭐

---

## Objective

Use **Wireshark** to capture real traffic and identify how the protocols you studied actually look on the wire — encapsulation, the TCP handshake, DNS resolution, and ARP.

> No lab gear needed — just Wireshark on your own machine. (Only capture on networks you are authorized to.)

---

## Setup

1. Install **Wireshark** (free, wireshark.org).
2. Start a capture on your active interface.
3. Generate traffic (below), then **stop** and analyze.

---

## Part A — DNS Resolution

1. Filter: `dns`
2. Visit a new website; find the **A** (or **AAAA**) query and response.
3. Record: query name, response IP(s), and which **port/transport** DNS used.

## Part B — TCP Three-Way Handshake

1. Filter: `tcp.flags.syn == 1`
2. Find a **SYN → SYN/ACK → ACK** sequence to a web server.
3. Note the client **ephemeral port** and server **port (443/80)**, and the sequence numbers.

## Part C — Encapsulation

1. Click any HTTP/TLS packet and expand the layers in the detail pane.
2. Map each layer to the **OSI model**: Ethernet (L2, MACs) → IP (L3, addresses) → TCP (L4, ports) → application data.

## Part D — ARP

1. Filter: `arp`
2. Identify a **request** ("who has 192.168.1.1?") and its **reply** (the MAC).
3. Explain why ARP stays on the local segment.

---

## Analysis Questions

1. What source and destination **ports** did your browser use? Which is well-known?
2. Show where a packet's **MAC** addresses (L2) and **IP** addresses (L3) live, and why both are needed.
3. In the handshake, what do the **SYN** and **ACK** flags accomplish?
4. Was any traffic **unencrypted**? If so, what could an attacker see? (Compare an HTTP site vs. an HTTPS site.)

---

## Deliverables

- A short report (with annotated screenshots) answering the analysis questions.
- One saved capture (`.pcapng`) illustrating the handshake (keep local; the repo ignores captures).

## Stretch Goals

- Capture and identify a **DHCP DORA** exchange (filter `bootp`/`dhcp`).
- Compare **HTTP** vs **HTTPS** — show that payload is readable in one and encrypted in the other.

See also notes: [[04-01-tcp-ip-suite]], [[04-02-tcp-vs-udp]], [[01-03-osi-model]]
