# &#128216; 07-03: Virtualization

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_07-Cloud_Computing_and_Remote_Access-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 07: Cloud Computing and Remote Access">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/07-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#10067; What Is Virtualization?

**Virtualization** abstracts physical hardware so multiple isolated systems run on one physical machine. It's the foundation of cloud computing.

---

## &#128204; Hypervisors

A **hypervisor (VMM)** creates and runs virtual machines, allocating CPU/RAM/I/O and keeping VMs isolated.

| Type | Runs on | Examples | Use |
|------|---------|----------|-----|
| **Type 1 (bare-metal)** | Directly on hardware | ESXi, Hyper-V, KVM | Servers/data centers |
| **Type 2 (hosted)** | On top of a host OS | VirtualBox, VMware Workstation | Desktops/labs |

---

## &#128204; VMs vs. Containers

| | **Virtual Machine** | **Container** |
|---|---------------------|---------------|
| Includes | Full guest OS | App + dependencies (shares host kernel) |
| Size / startup | Large / slow | Small / fast |
| Isolation | Strong (separate OS) | Lighter (process-level) |
| Example | VMware VM | Docker container |

Containers are lighter and faster because they **share the host OS kernel** instead of each running a full OS.

---

## &#128204; Network Function Virtualization (NFV)

**NFV** runs network functions — firewalls, routers, load balancers — as **software/VMs** on standard servers instead of dedicated appliances, improving flexibility and cost.

---

## &#128204; Virtual Networking

VMs connect via **virtual switches (vSwitches)** and virtual NICs inside the hypervisor, which then bridge to the physical network.

---

> [!TIP]
> **Key idea —** **Hypervisors** run VMs: **Type 1** on bare metal (servers), **Type 2** on a host OS (desktops). **Containers** are lighter, sharing the host kernel. **NFV** turns network appliances into software.

See also: [Cloud Service Models](07-01-cloud-service-models.md), [Remote Access Methods](07-04-remote-access-methods.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="07-02-cloud-deployment.md">Cloud Deployment Models &amp; Characteristics</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/07-exercise.md">Module 07 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="07-04-remote-access-methods.md">Remote Access Methods</a>

</div>
<!-- /course-footer -->
