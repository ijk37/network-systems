# 07-03: Virtualization

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/07-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 07: Cloud Computing and Remote Access | 07-03 |
<!-- /course-header -->

## What Is Virtualization?

**Virtualization** abstracts physical hardware so multiple isolated systems run on one physical machine. It's the foundation of cloud computing.

---

## Hypervisors

A **hypervisor (VMM)** creates and runs virtual machines, allocating CPU/RAM/I/O and keeping VMs isolated.

| Type | Runs on | Examples | Use |
|------|---------|----------|-----|
| **Type 1 (bare-metal)** | Directly on hardware | ESXi, Hyper-V, KVM | Servers/data centers |
| **Type 2 (hosted)** | On top of a host OS | VirtualBox, VMware Workstation | Desktops/labs |

---

## VMs vs. Containers

| | **Virtual Machine** | **Container** |
|---|---------------------|---------------|
| Includes | Full guest OS | App + dependencies (shares host kernel) |
| Size / startup | Large / slow | Small / fast |
| Isolation | Strong (separate OS) | Lighter (process-level) |
| Example | VMware VM | Docker container |

Containers are lighter and faster because they **share the host OS kernel** instead of each running a full OS.

---

## Network Function Virtualization (NFV)

**NFV** runs network functions — firewalls, routers, load balancers — as **software/VMs** on standard servers instead of dedicated appliances, improving flexibility and cost.

---

## Virtual Networking

VMs connect via **virtual switches (vSwitches)** and virtual NICs inside the hypervisor, which then bridge to the physical network.

---

## Key Idea

> **Hypervisors** run VMs: **Type 1** on bare metal (servers), **Type 2** on a host OS (desktops). **Containers** are lighter, sharing the host kernel. **NFV** turns network appliances into software.

See also: [Cloud Service Models](07-01-cloud-service-models.md), [Remote Access Methods](07-04-remote-access-methods.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="07-02-cloud-deployment.md">Cloud Deployment Models &amp; Characteristics</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/07-exercise.md">Module 07 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="07-04-remote-access-methods.md">Remote Access Methods</a>

</div>
<!-- /course-footer -->
