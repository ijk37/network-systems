# Acme Corp — VLSM Addressing Plan

**Assigned block:** 172.16.0.0/22 (172.16.0.0 – 172.16.3.255, 1024 addresses)

## Step 1 — Determine prefix per department

| Department | Hosts | Host bits (2^h − 2 ≥ need) | Prefix | Block size |
|------------|-------|----------------------------|--------|------------|
| Sales | 250 | 8 (254) | /24 | 256 |
| Engineering | 120 | 7 (126) | /25 | 128 |
| Support | 60 | 6 (62) | /26 | 64 |
| Management | 25 | 5 (30) | /27 | 32 |
| Servers | 12 | 4 (14) | /28 | 16 |
| WAN R1–R2 | 2 | 2 (2) | /30 | 4 |
| WAN R2–R3 | 2 | 2 (2) | /30 | 4 |

## Step 2 — Allocate (largest first), starting at 172.16.0.0

| Department | Network ID | Mask | CIDR | Usable range | Broadcast |
|------------|-----------|------|------|--------------|-----------|
| Sales | 172.16.0.0 | 255.255.255.0 | /24 | 172.16.0.1 – 172.16.0.254 | 172.16.0.255 |
| Engineering | 172.16.1.0 | 255.255.255.128 | /25 | 172.16.1.1 – 172.16.1.126 | 172.16.1.127 |
| Support | 172.16.1.128 | 255.255.255.192 | /26 | 172.16.1.129 – 172.16.1.190 | 172.16.1.191 |
| Management | 172.16.1.192 | 255.255.255.224 | /27 | 172.16.1.193 – 172.16.1.222 | 172.16.1.223 |
| Servers | 172.16.1.224 | 255.255.255.240 | /28 | 172.16.1.225 – 172.16.1.238 | 172.16.1.239 |
| WAN R1–R2 | 172.16.1.240 | 255.255.255.252 | /30 | 172.16.1.241 – 172.16.1.242 | 172.16.1.243 |
| WAN R2–R3 | 172.16.1.244 | 255.255.255.252 | /30 | 172.16.1.245 – 172.16.1.246 | 172.16.1.247 |

> **Address space used:** through 172.16.1.247 — leaving 172.16.1.248 – 172.16.3.255 free for growth. Giving each of the 7 subnets a `/24` would have needed 7 × 256 = 1792 addresses and **would not fit** in the /22 — VLSM makes it fit with room to spare.

## Step 3 — Gateway assignments (first usable per LAN)

| Department | Gateway |
|------------|---------|
| Sales | 172.16.0.1 |
| Engineering | 172.16.1.1 |
| Support | 172.16.1.129 |
| Management | 172.16.1.193 |
| Servers | 172.16.1.225 |

*Verify your own build against this reference plan.*
