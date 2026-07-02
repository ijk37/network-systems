# 08-04: Classful Networks

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_08-Subnets_and_VLANs-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 08: Subnets and VLANs">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/08-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## What are Classful Networks?

Classful networking is an older method of IP address allocation where IP addresses are divided into fixed classes.

Each class defines:
- a default subnet mask
- a fixed division between network and host portions

---

## Why Classful Networks Were Used

- Simple and easy to understand  
- Standardized network sizes  
- No need to specify subnet masks explicitly  

---

## IPv4 Address Classes

IPv4 addresses are divided into five classes:

---

### Class A

- Range: 0.0.0.0 → 127.255.255.255  
- Default Subnet Mask:  
  - 255.0.0.0  
  - 11111111.00000000.00000000.00000000  
  - /8  
- Network portion: first 8 bits  
- Host portion: last 24 bits  

**Note:**
- 0.0.0.0 → reserved (unspecified address, default route: 0.0.0.0/0)  
- 127.0.0.0 → 127.255.255.255 → loopback range  
- Usable range: 1.0.0.0 → 126.255.255.255  

---

### Class B

- Range: 128.0.0.0 → 191.255.255.255  
- Default Subnet Mask:  
  - 255.255.0.0  
  - 11111111.11111111.00000000.00000000  
  - /16  
- Network portion: first 16 bits  
- Host portion: last 16 bits  

---

### Class C

- Range: 192.0.0.0 → 223.255.255.255  
- Default Subnet Mask:  
  - 255.255.255.0  
  - 11111111.11111111.11111111.00000000  
  - /24  
- Network portion: first 24 bits  
- Host portion: last 8 bits  

---

### Class D

- Range: 224.0.0.0 → 239.255.255.255  
- Purpose: Multicast communication  
- No subnet mask, network portion, or host portion defined  

---

### Class E

- Range: 240.0.0.0 → 255.255.255.255  
- Purpose: Experimental use  
- No subnet mask, network portion, or host portion defined  

---

## Key Observation

The first three classes (A, B, C) have fixed subnet masks.

This means:
- network and host portions are predefined  
- there is no flexibility in dividing the network  

---

## Limitations of Classful Networking

- Inefficient use of IP addresses  
- Fixed network sizes (too large or too small)  
- Lack of flexibility  

---

## Transition to Modern Networking

Due to these limitations, classful networking was replaced by:

- Classless Inter-Domain Routing (CIDR)  
- Subnetting  

---

## Key Idea

Classful networking uses fixed network boundaries,

while modern networking allows flexible boundaries using subnet masks.

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="08-03-subnet-mask.md">Subnet Mask</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/08-exercise.md">Module 08 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="08-05-cidr.md">CIDR (Classless Inter-Domain Routing)</a>

</div>
<!-- /course-footer -->
