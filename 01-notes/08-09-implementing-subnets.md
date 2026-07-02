# &#128216; 08-09: Implementing Subnets on a Network

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_08-Subnets_and_VLANs-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 08: Subnets and VLANs">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/08-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128161; Why Implement Subnets?

Subnetting is not only a mathematical process, but also a practical network design technique.

It is used to:
- divide a large network into smaller subnetworks  
- reduce broadcast traffic  
- improve network performance  
- enhance security  

Each subnet forms a **separate broadcast domain**.

---

## &#128204; Basic Network Structure

![Subnets 1, 2, and 3 and their respective default gateways](../assets/images/subnets-default-gateways.png)

A subnetted network typically consists of:

### &#128313; Router
- connects multiple subnets  
- each interface represents a different subnet  

### &#128313; Switch
- connects devices within a subnet  

### &#128313; Hosts (PCs, printers)
- assigned IP addresses within a subnet  

---

## &#129518; Subnet Assignment Example

Example:

- Subnet 1: 192.168.89.0/27  
- Subnet 2: 192.168.89.32/27  
- Subnet 3: 192.168.89.64/27  

👉 Each subnet must have a **unique network ID**.

---

## &#128204; Default Gateway

Each subnet requires a **default gateway** to communicate with other networks.

- The default gateway is usually the **router interface IP**

**Example:**
- Subnet 1 → Gateway: 192.168.89.1  
- Subnet 2 → Gateway: 192.168.89.33  
- Subnet 3 → Gateway: 192.168.89.65  

---

## &#129518; Communication Between Subnets

- Devices within the same subnet communicate **directly**  
- Devices in different subnets communicate through a **router**  

---

## &#128204; One Router Connecting Multiple LANs

![One router connecting multiple LANs](../assets/images/router-multiple-lans.png)

A single router can connect multiple LANs:
- Each LAN is assigned a different subnet  
- Each subnet is isolated from others  
- The router enables communication between subnets  

**Common use cases:**
- office networks  
- campus networks  
- multi-floor buildings  

---

## &#129518; DHCP Across Subnets

### &#128313; Problem

DHCP uses **broadcast messages**, which do not cross routers.

![DHCP Relay Agent](../assets/images/dhcp-relay-agent.png)

---

### &#128225; Solution: DHCP Relay Agent

A **DHCP relay agent** allows DHCP communication across subnets.

---

## &#128225; How DHCP Relay Works

1. A client sends a DHCP request (broadcast)  
2. The router receives the request  
3. The router forwards it to the DHCP server (unicast)  
4. The DHCP server assigns an IP address  

---

## &#128204; Summary

- Subnet → logical division of a network  
- Router → connects subnets  
- Switch → connects devices within a subnet  
- Default gateway → exit point of a subnet  
- DHCP relay → enables DHCP across subnets  

---

## &#128204; Key Insight

Subnetting transforms a large network into smaller, manageable networks, enabling efficient communication and better network design in real-world environments.

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Subnet Calculation Using Binary](08-08-subnet-calculation-using-binary.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 08 Exercise](../02-exercises/08-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [Variable Length Subnet Mask (VLSM)](08-10-vlsm.md)

</div>
<!-- /course-footer -->
