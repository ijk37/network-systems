# &#128736; Project 12 — Network Troubleshooting & Incident Response


<!-- course-header -->
<div align="center" markdown>

![Network Systems](../../assets/banner.svg)

<img src="https://img.shields.io/badge/Project_12-Troubleshooting_and_Incident_Response-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Project 12: Network Troubleshooting and Incident Response">

[![Home](https://img.shields.io/badge/âŒ‚_Home-3B2530?style=flat-square)](../../index.md) [![All Projects](https://img.shields.io/badge/All_Projects-3B2530?style=flat-square)](../README.md) [![Notes](https://img.shields.io/badge/Notes-3B2530?style=flat-square)](../../01-notes/README.md) [![Quiz](https://img.shields.io/badge/â–¶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../../03-quiz/)

</div>
<!-- /course-header -->

**Type:** Troubleshooting lab + incident report  
**Modules:** 01 (Troubleshooting), 03 (Addressing), 04 (Protocols), 11 (Monitoring)  
**Difficulty:** â­â­â­â­

---

## &#127919; Objective

Diagnose a realistic multi-symptom network outage using a structured troubleshooting process, collect evidence, restore service, and write a short incident report.

---

## &#129517; Scenario

**Northwind Training Center** reports three problems after a "minor" network change:

1. Some users receive `169.254.x.x` addresses.
2. Users with valid IP addresses can ping `8.8.8.8` but cannot browse by name.
3. The help desk says the network becomes slow every afternoon.

You are the junior network technician assigned to investigate. Your job is to avoid guessing, isolate each fault, document the evidence, and recommend prevention steps.

---

## &#128204; Lab Topology

Build a small Packet Tracer or physical/virtual lab:

| Component | Purpose |
| --- | --- |
| Router or Layer 3 switch | Default gateway and inter-VLAN routing |
| Access switch | User access ports |
| DHCP server | Address assignment |
| DNS server | Name resolution |
| Web server | Test application |
| 3 client PCs | User symptoms |
| Optional monitoring host | Syslog, SNMP/NMS notes, or packet capture |

Suggested VLANs:

| VLAN | Name | Subnet |
| --- | --- | --- |
| 10 | Staff | `192.168.10.0/24` |
| 20 | Services | `192.168.20.0/24` |
| 99 | Management | `192.168.99.0/24` |

---

## &#128204; Faults to Introduce

Introduce at least three faults before troubleshooting:

1. Missing or wrong DHCP relay/helper address for VLAN 10.
2. Wrong DNS server option in the DHCP scope.
3. Incorrect default gateway on one static host.
4. Duplex/speed mismatch or simulated high utilization on a link.
5. ACL rule blocking DNS, DHCP, or web traffic.

Do not document the faults in the student-facing lab copy. Keep an instructor answer key or separate notes for verification.

---

## &#129513; Tasks

### &#128313; Part A — Triage

1. Interview the "user" and define the exact symptom.
2. Identify scope: one host, one VLAN, one service, or all users.
3. Record the time, affected systems, and recent changes.
4. Choose a troubleshooting approach: top-down, bottom-up, divide-and-conquer, or follow-the-path.

### &#128313; Part B — Evidence Collection

Collect and interpret:

- Client IP configuration.
- Gateway reachability.
- DNS lookup results.
- DHCP lease or scope information.
- Interface status and error counters.
- Relevant firewall/ACL or server logs.

### &#128313; Part C — Root Cause and Fix

For each issue:

1. State the root cause.
2. Show the evidence that proves it.
3. Apply the fix.
4. Verify the service works after the fix.
5. Recommend one preventive control.

---

## &#9989; Verification Checklist

- [ ] Clients receive valid DHCP addresses.
- [ ] Clients can resolve names with DNS.
- [ ] Clients can reach the web server by name and IP.
- [ ] The default gateway is correct for every subnet.
- [ ] The final report separates symptoms from root causes.
- [ ] Preventive actions are realistic and specific.

---

## &#128204; Incident Report Template

| Field | Response |
| --- | --- |
| Incident summary | |
| Start time / detection time | |
| Affected users or systems | |
| Symptoms observed | |
| Evidence collected | |
| Root cause | |
| Fix applied | |
| Verification results | |
| Prevention recommendation | |

---

## &#128230; Deliverables

- Completed incident report.
- Screenshot or command evidence for each fault.
- A final topology diagram.
- Short reflection: which troubleshooting step prevented the most wasted time?

---

## &#128640; Stretch Goals

- Add a fourth fault involving VLAN trunking.
- Use Wireshark to capture failed DNS or DHCP traffic.
- Create a "before and after" monitoring graph or table.
- Write a help-desk knowledge base article from the incident.

See also notes: [[01-05-troubleshooting-and-safety]], [[03-04-dhcp]], [[03-05-dns]], [[11-02-monitoring]]
