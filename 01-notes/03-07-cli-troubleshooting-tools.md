# 03-07: CLI Troubleshooting Tools

## IP Configuration

| Command | OS | Shows |
|---------|-----|-------|
| `ipconfig` / `ipconfig /all` | Windows | IP, mask, gateway, DNS, MAC, DHCP |
| `ifconfig` | Linux/macOS (legacy) | Interface config |
| `ip addr` / `ip route` | Linux (modern) | Addresses and routes |

---

## Connectivity Testing

| Command | Purpose |
|---------|---------|
| `ping <host>` | Test reachability & round-trip time (ICMP echo) |
| `tracert` (Win) / `traceroute` (Linux) | Show each router hop to a destination |
| `pathping` (Win) / `mtr` (Linux) | Combine ping + traceroute with loss stats |

---

## Name Resolution

| Command | Purpose |
|---------|---------|
| `nslookup <name>` | Query DNS for a record |
| `dig <name>` | Detailed DNS lookup (Linux/macOS) |

---

## Connections & Neighbors

| Command | Purpose |
|---------|---------|
| `arp -a` | Show IP → MAC cache |
| `netstat` | Active connections and listening ports |
| `ss` | Modern socket stats (Linux) |
| `nmap` | Scan hosts/ports (discovery) |

---

## A Typical Troubleshooting Flow

1. `ipconfig /all` — do I have a valid IP/gateway/DNS? (169.254.x.x = DHCP fail)
2. `ping 127.0.0.1` — is my TCP/IP stack alive?
3. `ping <gateway>` — can I reach my router?
4. `ping 8.8.8.8` — is the Internet reachable by IP?
5. `nslookup google.com` — is DNS working?
6. `tracert` — where does the path break?

> If step 4 works but step 5 fails, it's a **DNS** problem, not connectivity.

---

## Key Idea

> Master **ipconfig/ip, ping, tracert, nslookup, arp, netstat**. Test bottom-up (local stack → gateway → Internet → DNS) to isolate exactly where a problem lies.

See also: [Troubleshooting Methodology & Safety](01-05-troubleshooting-and-safety.md), [DNS](03-05-dns.md)

<!-- nav -->

---

⬅️ **Prev:** [Ports & Protocols Reference](03-06-ports-and-protocols.md)  ·  [📚 All Notes](README.md)  ·  **Next:** [The TCP/IP Suite & Encapsulation](04-01-tcp-ip-suite.md) ➡️
