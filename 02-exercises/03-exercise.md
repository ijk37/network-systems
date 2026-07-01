# 03: Addressing — Exercises

## Questions

1. Classify each address: `10.24.5.9`, `172.20.0.1`, `192.168.100.5`, `8.8.8.8`, `169.254.13.7`, `127.0.0.1`.
2. A workstation shows IP `169.254.44.10`. What happened, and what should you check?
3. Give the port and transport (TCP/UDP) for: HTTPS, DNS, SSH, SMTP, RDP, DHCP.
4. Compress the IPv6 address `2001:0db8:0000:0000:00a3:0000:0000:1f35`.
5. In the DORA process, which message is a broadcast from the client requesting configuration, and which confirms the lease?
6. A host can `ping 8.8.8.8` but cannot open `https://example.com`. What is the most likely cause and which command confirms it?

---

## Solutions

### 1. Address classification
- `10.24.5.9` → **Private** (10.0.0.0/8)
- `172.20.0.1` → **Private** (172.16.0.0/12)
- `192.168.100.5` → **Private** (192.168.0.0/16)
- `8.8.8.8` → **Public**
- `169.254.13.7` → **APIPA** (link-local, DHCP failed)
- `127.0.0.1` → **Loopback**

### 2. APIPA address
The host **failed to reach a DHCP server** and self-assigned a `169.254.x.x` address. Check: DHCP server up? Cable/link? VLAN correct? Is a **DHCP relay** needed on this subnet?

### 3. Ports
- HTTPS → **443/TCP**, DNS → **53/UDP** (TCP for zone transfers), SSH → **22/TCP**, SMTP → **25/TCP**, RDP → **3389/TCP**, DHCP → **67/68 UDP**.

### 4. IPv6 compression
`2001:db8::a3:0:0:1f35`
(Drop leading zeros; replace the longest zero run `0000:0000` with `::`. The single `::` covers hextets 3–4; the later `0:0` cannot also use `::`.)

### 5. DORA
- Client broadcast requesting config = **DISCOVER** (the later **REQUEST** confirms the chosen offer).
- Server confirms the lease = **ACK** (Acknowledge).

### 6. Connectivity but no web
Connectivity (IP) works but name resolution fails → **DNS problem**. Confirm with **`nslookup example.com`** (or `dig`). If it fails while `ping 8.8.8.8` works, DNS is the culprit.
