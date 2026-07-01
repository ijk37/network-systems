# 11-04: Fault Tolerance & Recovery

## RAID (Storage Redundancy)

| Level | Method | Fault tolerance | Notes |
|-------|--------|-----------------|-------|
| **RAID 0** | Striping | None | Speed only |
| **RAID 1** | Mirroring | 1 drive | 50% usable capacity |
| **RAID 5** | Striping + parity | 1 drive | Needs 3+ drives |
| **RAID 6** | Double parity | 2 drives | Needs 4+ drives |
| **RAID 10** | Mirror + stripe | Multiple | Speed + redundancy |

> RAID protects against **drive failure** — it is **not a backup**.

---

## Power Protection

| Device | Role |
|--------|------|
| **UPS** | Battery backup for short outages + power conditioning |
| **Generator** | Long-term power during extended outages |
| **PDU** | Distributes power in a rack |

---

## Backups

| Type | Backs up | Restore |
|------|----------|---------|
| **Full** | Everything | Just the full |
| **Incremental** | Changes since last backup | Full + all incrementals |
| **Differential** | Changes since last **full** | Full + latest differential |

**3-2-1 rule:** 3 copies, 2 media types, 1 offsite (offline/immutable). **Test restores** — an untested backup may be unrecoverable.

---

## Disaster Recovery Sites

| Site | Readiness | Cost | Recovery time |
|------|-----------|------|---------------|
| **Hot** | Fully running, current data | Highest | Near-instant |
| **Warm** | Equipped, needs data/activation | Medium | Hours |
| **Cold** | Space/power only | Lowest | Days |

**RTO** = target restore time; **RPO** = acceptable data loss.

---

## Key Idea

> **RAID** survives drive loss (not a backup). Protect power with **UPS/generator**. Follow **3-2-1** backups and pick a DR site (**hot/warm/cold**) to meet your **RTO/RPO**.

See also: [[09-04-policies-and-risk-management]], [[11-03-high-availability]]
