# 07-03: Virtualization

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

See also: [[07-01-cloud-service-models]], [[07-04-remote-access-methods]]
