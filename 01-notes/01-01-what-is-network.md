# &#128216; 01-01: What Is a Network?

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_01-Introduction_to_Networking-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 01: Introduction to Networking">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/01-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128204; Definition

A **computer network** is a collection of two or more interconnected devices that communicate and share resources over a shared medium.

- **Devices (nodes/hosts):** computers, phones, printers, servers, routers
- **Medium:** wired (copper, fiber) or wireless (Wi-Fi, cellular)
- **Resources shared:** files, printers, Internet access, applications

---

## &#128161; Why Networks Exist

- Share hardware (printers, storage)
- Share data and applications
- Enable communication (email, voice, video)
- Centralize management and security

---

## &#128204; Peer-to-Peer vs. Client-Server

Networks are organized in one of two logical models.

| Feature | Peer-to-Peer (P2P) | Client-Server |
|---------|--------------------|---------------|
| Control | Decentralized — each host manages itself | Centralized on servers |
| Security | Per-device, hard to manage | Centralized (accounts, policies) |
| Cost | Low, minimal setup | Higher (server + NOS) |
| Scalability | Poor (a few devices) | Excellent (hundreds+) |
| Example | Two PCs sharing a folder | Corporate domain with a file server |

- A **Network Operating System (NOS)** (e.g., Windows Server, Linux server) controls access in the client-server model.
- **Client-server** centralizes authentication, backups, and resource control — the norm for organizations.

---

## &#128204; Network Sizes (Scope)

| Type | Scope | Example |
|------|-------|---------|
| **PAN** | Around one person | Bluetooth headset |
| **LAN** | Building / campus | Office network |
| **MAN** | City / metro area | City-wide fiber ring |
| **WAN** | Large geographic area | The Internet, multi-site company |

---

> [!TIP]
> **Key idea —** A network is about **sharing resources reliably**. The organizational model (peer-to-peer vs. client-server) determines *how control and security are managed*, while the scope (PAN/LAN/MAN/WAN) describes *how far it reaches*.

See also: [Network Models & Topologies](01-02-network-models.md), [The OSI Model](01-03-osi-model.md)

<!-- course-footer -->
---

<div align="center">

<a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/01-exercise.md">Module 01 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="01-02-network-models.md">Network Models &amp; Topologies</a>

</div>
<!-- /course-footer -->
