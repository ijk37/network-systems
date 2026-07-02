# Project 11 — High Availability, Monitoring & Recovery


<!-- course-header -->
<div align="center">

<a href="../../README.md"><img src="../../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Project_11-High_Availability,_Monitoring_%26_Recovery-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Project 11: High Availability, Monitoring & Recovery">

<a href="../../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="../README.md"><img src="https://img.shields.io/badge/All_Projects-3B2530?style=flat-square" alt="All Projects"></a> <a href="../../01-notes/README.md"><img src="https://img.shields.io/badge/Notes-3B2530?style=flat-square" alt="Notes"></a> <a href="../../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

**Type:** Packet Tracer + design
**Modules:** 11 (Performance & Recovery), 01 (Hardware)
**Difficulty:** ⭐⭐⭐⭐

---

## Objective

Build **redundancy** into a network so no single failure causes an outage, add **monitoring**, apply **QoS** for voice, and write a **backup/DR plan** that meets defined RTO/RPO targets.

---

## Scenario

**Harbor Logistics** cannot tolerate downtime on its core. You will add redundant paths, a redundant gateway, monitoring, and a recovery plan.

---

## Part A — Redundancy (Packet Tracer)

1. **Redundant links + STP** — connect two switches with two links; confirm **spanning tree** blocks one and fails over when the active link drops.
2. **Link aggregation** — bundle two links into an **EtherChannel (LACP)** for more bandwidth and resilience.
3. **First-hop redundancy** — configure **HSRP** (or VRRP) so two routers present one **virtual gateway**; test failover by shutting the active router.

```
R1(config-if)# standby 1 ip 192.168.1.1
R1(config-if)# standby 1 priority 110
R1(config-if)# standby 1 preempt
```

## Part B — Monitoring & QoS

1. Enable **SNMP** (v3) so a monitoring station can poll device stats; identify what a **baseline** would capture.
2. Configure **QoS** to prioritize voice (mark with **DSCP EF**, give it a priority queue) and explain the effect on **latency/jitter**.
3. Describe using **port mirroring (SPAN)** to feed an analyzer/IDS.

## Part C — Backup & Disaster Recovery (design)

1. Define **RTO** and **RPO** targets for the core service.
2. Apply the **3-2-1** backup rule; explain how it defends against ransomware.
3. Choose a DR site — **hot / warm / cold** — to meet the RTO, with the cost trade-off.
4. Note relevant **RAID** level for the file server and the role of **UPS/generator**.

---

## Verification Checklist

- [ ] STP blocks a redundant link and reconverges after a failure.
- [ ] EtherChannel bundles links (`show etherchannel summary`).
- [ ] HSRP virtual gateway survives the active router going down (hosts keep pinging out).
- [ ] SNMP polling works; QoS marks/prioritizes voice.
- [ ] DR plan states RTO/RPO and a matching site type.

---

## Deliverables

- Packet Tracer file with STP/EtherChannel/HSRP (local).
- A one-page backup + DR plan (RTO/RPO, 3-2-1, site choice).

## Stretch Goals

- Add a **load balancer** in front of two web servers.
- Calculate the downtime allowed by a **99.99%** availability target.

See also notes: [[11-03-high-availability]], [[11-02-monitoring]], [[11-04-fault-tolerance-and-recovery]]
