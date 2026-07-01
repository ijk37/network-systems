# 08-03: Subnet Mask

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/08-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 08: Subnets and VLANs | 08-03 |
<!-- /course-header -->

## What is a Subnet Mask?

A subnet mask is used to divide an IP address into two parts:

- **Network portion**  
- **Host portion**  

It defines where the network ends and the host begins.

> **Note:** A common mistake for beginners is to confuse the binary form of a subnet mask with an IP address.  
> A subnet mask is **NOT** an IP address.  
> Its only function is to determine which portion of an IP address represents the network and which portion represents the host.

---

## How Subnet Mask is Represented

There are three ways to represent a subnet mask:

---

### 1. Binary Representation

**Example:**
Subnet Mask: 11111111.11111111.00000000.00000000

A subnet mask uses binary values:

- **1s → Network portion**  
- **0s → Host portion**  

In this example:
- First 16 bits → Network  
- Last 16 bits → Host  

---

### 2. Decimal Representation

**Example:**
Subnet Mask: 255.255.0.0

The decimal form is a human-readable version of the binary mask.

To understand network and host portions, it must be interpreted in binary.

---

### 3. CIDR Notation

Subnet masks are often written using CIDR notation.

**Examples:**
- /24 → First 24 bits are the network portion  
- /16 → First 16 bits are the network portion  
- /8 → First 8 bits are the network portion  

---

## Why Subnet Mask is Important

- Defines network boundaries  
- Enables communication within networks  
- Supports network segmentation  
- Helps in routing decisions  

---

## Key Idea

An IP address alone is not enough.

👉 A subnet mask tells:
- which part is the network  
- which part is the host

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="08-02-ip-address-structure.md">IP Address Structure</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/08-exercise.md">Module 08 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="08-04-classful-networks.md">Classful Networks</a>

</div>
<!-- /course-footer -->
