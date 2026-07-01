# 11: Network Performance & Recovery — Exercises

## Questions

1. Distinguish bandwidth, throughput, latency, and jitter.
2. A VoIP deployment has choppy audio. Which three metrics are most likely to blame, and which QoS action helps?
3. Two routers should present a single, always-available gateway to hosts. Which protocol family provides this?
4. Compare full, incremental, and differential backups by what they copy and what a restore needs.
5. Order hot, warm, and cold DR sites by recovery speed and cost.
6. Explain the 3-2-1 backup rule and why it defends against ransomware.

---

## Solutions

### 1. Performance metrics
- **Bandwidth** — max theoretical capacity.
- **Throughput** — actual achieved rate (≤ bandwidth).
- **Latency** — delay for data to travel.
- **Jitter** — variation in latency between packets.

### 2. VoIP quality
**Latency, jitter, and packet loss**. Apply **QoS** — mark voice (DSCP EF) and give it a **priority/low-latency queue**.

### 3. Redundant gateway
A **First-Hop Redundancy Protocol** — **HSRP/VRRP** (or GLBP) — shares a virtual gateway IP/MAC; a standby takes over if the active router fails.

### 4. Backup types
- **Full** — everything; restore needs just the full.
- **Incremental** — changes since the **last backup**; restore needs full + all incrementals.
- **Differential** — changes since the **last full**; restore needs full + latest differential.

### 5. DR sites
Fastest/most expensive → slowest/cheapest: **Hot → Warm → Cold**. (Hot = running with current data; cold = space/power only.)

### 6. 3-2-1 rule
**3 copies**, on **2 different media**, with **1 offsite** (ideally offline/immutable). The offline/immutable copy is unreachable by ransomware, guaranteeing you can still recover.
