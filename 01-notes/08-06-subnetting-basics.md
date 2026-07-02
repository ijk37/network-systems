# &#128216; 08-06: Subnetting Basics

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_08-Subnets_and_VLANs-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 08: Subnets and VLANs">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/08-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#10067; What is Subnetting?

Subnetting is the process of dividing a network into smaller sub-networks (subnets).

It allows a large network to be split into multiple smaller and manageable networks.

---

## &#128161; Why Subnetting is Needed

- Improves network performance  
- Enhances security by isolating segments  
- Efficient use of IP addresses  
- Better network management  

---

## &#128204; Relationship with Classful Networks

In classful networking:
- network and host portions are fixed  
- network portion always ends at the end of an octet  

Subnetting allows:
- modification of the default boundary  
- creation of multiple smaller networks from a single network  
- network portion can extend into the next octet (bit-level division)  

---

## &#129518; How Subnetting Works

Subnetting works by borrowing bits from the host portion.

- Some host bits are converted into network bits  
- This creates multiple smaller subnets  

---

## &#128204; Example

**Original Network:**
- IP Address: 192.168.1.0  
- Default Subnet Mask: 255.255.255.0 (/24)  

**After Subnetting (/26):**
- New Subnet Mask: 255.255.255.192 (/26)  

**Explanation:**
- Original network bits: 24  
- New network bits: 26  
- Borrowed bits: 2  

---

## &#129518; Number of Subnets

**Formula:**
Number of subnets = 2ⁿ  

Where:
- n = number of borrowed bits  

**Example:**
2² = 4 subnets  

---

## &#129518; Number of Addresses and Hosts per Subnet

**Formula:**
- Total addresses per subnet = 2ʰ  
- Usable hosts per subnet = 2ʰ − 2  

Where:
- h = number of remaining host bits  

**Important:**
- First address → **Network ID** (reserved)  
- Last address → **Broadcast ID** (reserved)  

---

### &#128313; Example

6 host bits → 2⁶ = 64 total addresses  

- Network Address → first address  
- Broadcast Address → last address  

Usable hosts = 64 − 2 = 62  

---

## &#128204; Block Size

Block size determines the increment between subnet ranges.

**Formula:**
Block Size = 256 − (subnet mask value in the changing octet)

**Example:**
Subnet Mask: 255.255.255.192  

Block Size = 256 − 192 = 64  

Subnet ranges increase as:
0, 64, 128, 192  

---

## &#128161; Why Block Size Matters

- Helps identify subnet ranges  
- Determines network and broadcast addresses  
- Simplifies subnet calculations  

---

## &#127919; Choosing the Right Subnet Size

For design questions, start with the host requirement, not with the mask.

| Need | Smallest common prefix | Usable hosts |
| ---: | --- | ---: |
| 2 hosts | /30 | 2 |
| 14 hosts | /28 | 14 |
| 30 hosts | /27 | 30 |
| 62 hosts | /26 | 62 |
| 126 hosts | /25 | 126 |
| 254 hosts | /24 | 254 |
| 510 hosts | /23 | 510 |

Process:

1. Find the smallest host-bit value where `2^h - 2` meets the requirement.
2. Convert host bits to prefix length: `32 - h`.
3. Check the block size to identify the network and broadcast range.

Example: a department needs 58 hosts. `2^5 - 2 = 30` is too small, but `2^6 - 2 = 62`, so the smallest subnet is **/26**.

---

## &#128161; Key Idea

Classful networking uses fixed boundaries.

👉 Subnetting introduces flexibility by allowing custom network boundaries.

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="08-05-cidr.md">CIDR (Classless Inter-Domain Routing)</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/08-exercise.md">Module 08 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="08-07-subnetting-examples.md">Subnetting Examples</a>

</div>
<!-- /course-footer -->
