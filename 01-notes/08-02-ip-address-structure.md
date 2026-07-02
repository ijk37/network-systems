# 08-02: IP Address Structure

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_08-Subnets_and_VLANs-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 08: Subnets and VLANs">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/08-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## What is an IP Address?

An IP address is a unique identifier assigned to each device in a network. It is used to identify and locate devices on the Internet for communication.

---

## IPv4 Address Format

An IPv4 address consists of 32 bits divided into 4 octets (8 bits each).

**Example:**
192.168.1.10

Each octet ranges from 0 to 255.

So, an IPv4 address ranges from:
0.0.0.0 → 255.255.255.255

---

## Binary Representation

Each octet of an IPv4 address is represented in binary.

**Example:**
192.168.1.10 → 11000000.10101000.00000001.00001010

---

## Structure of an IPv4 Address

An IPv4 address consists of two logical parts:

- **Network Portion** → Identifies the network  
- **Host Portion** → Identifies the specific device within that network  

These portions are:
- continuous (no gaps)
- determined by the subnet mask

---

## Example Breakdown

**IPv4 Address:** 192.168.1.10  
**Subnet Mask:** 255.255.255.0 (/24)

- First 24 bits → Network part → 192.168.1  
- Last 8 bits → Host part → 10  

---

## Binary Example Breakdown

**IP Address:**
172.16.5.10 → 10101100.00010000.00000101.00001010

**Subnet Mask:**
255.255.0.0 (/16) → 11111111.11111111.00000000.00000000

**Explanation:**
- First 16 bits (1s) → Network portion → 172.16  
- Last 16 bits (0s) → Host portion → 5.10  

---

## Key Idea

An IP address alone does not define the network boundary.

A subnet mask is required to determine:
- which part is the network
- which part is the host

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="08-01-network-segmentation.md">Network Segmentation</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/08-exercise.md">Module 08 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="08-03-subnet-mask.md">Subnet Mask</a>

</div>
<!-- /course-footer -->
