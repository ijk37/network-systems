# &#128216; 11-04: Fault Tolerance & Recovery

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_11-Network_Performance_and_Recovery-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 11: Network Performance and Recovery">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/11-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128204; RAID (Storage Redundancy)

| Level | Method | Fault tolerance | Notes |
|-------|--------|-----------------|-------|
| **RAID 0** | Striping | None | Speed only |
| **RAID 1** | Mirroring | 1 drive | 50% usable capacity |
| **RAID 5** | Striping + parity | 1 drive | Needs 3+ drives |
| **RAID 6** | Double parity | 2 drives | Needs 4+ drives |
| **RAID 10** | Mirror + stripe | Multiple | Speed + redundancy |

> RAID protects against **drive failure** — it is **not a backup**.

---

## &#128204; Power Protection

| Device | Role |
|--------|------|
| **UPS** | Battery backup for short outages + power conditioning |
| **Generator** | Long-term power during extended outages |
| **PDU** | Distributes power in a rack |

---

## &#128204; Backups

| Type | Backs up | Restore |
|------|----------|---------|
| **Full** | Everything | Just the full |
| **Incremental** | Changes since last backup | Full + all incrementals |
| **Differential** | Changes since last **full** | Full + latest differential |

**3-2-1 rule:** 3 copies, 2 media types, 1 offsite (offline/immutable). **Test restores** — an untested backup may be unrecoverable.

---

## &#128204; Disaster Recovery Sites

| Site | Readiness | Cost | Recovery time |
|------|-----------|------|---------------|
| **Hot** | Fully running, current data | Highest | Near-instant |
| **Warm** | Equipped, needs data/activation | Medium | Hours |
| **Cold** | Space/power only | Lowest | Days |

**RTO** = target restore time; **RPO** = acceptable data loss.

---

> [!TIP]
> **Key idea —** **RAID** survives drive loss (not a backup). Protect power with **UPS/generator**. Follow **3-2-1** backups and pick a DR site (**hot/warm/cold**) to meet your **RTO/RPO**.

See also: [Policies, Physical Security & Continuity](09-04-policies-and-risk-management.md), [High Availability & Redundancy](11-03-high-availability.md)

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [High Availability &amp; Redundancy](11-03-high-availability.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 11 Exercise](../02-exercises/11-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [WAN Fundamentals](12-01-wan-fundamentals.md)

</div>
<!-- /course-footer -->
