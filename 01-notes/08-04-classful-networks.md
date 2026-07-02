# &#128216; 08-04: Classful Networks

<!-- course-header -->
<div align="center" markdown>

![Network Systems](../assets/banner.svg)

<img src="https://img.shields.io/badge/Module_08-Subnets_and_VLANs-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 08: Subnets and VLANs">

[![Home](https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square)](../index.md) [![All Notes](https://img.shields.io/badge/All_Notes-3B2530?style=flat-square)](README.md) [![Practice](https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23)](../02-exercises/08-exercise.md) [![Quiz](https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23)](../03-quiz/)

</div>
<!-- /course-header -->

## &#128204; What are Classful Networks?

Classful networking is an older method of IP address allocation where IP addresses are divided into fixed classes.

Each class defines:
- a default subnet mask
- a fixed division between network and host portions

---

## &#128161; Why Classful Networks Were Used

- Simple and easy to understand  
- Standardized network sizes  
- No need to specify subnet masks explicitly  

---

## &#128290; IPv4 Address Classes

IPv4 addresses are divided into five classes:

---

### &#128313; Class A

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

### &#128313; Class B

- Range: 128.0.0.0 → 191.255.255.255  
- Default Subnet Mask:  
  - 255.255.0.0  
  - 11111111.11111111.00000000.00000000  
  - /16  
- Network portion: first 16 bits  
- Host portion: last 16 bits  

---

### &#128313; Class C

- Range: 192.0.0.0 → 223.255.255.255  
- Default Subnet Mask:  
  - 255.255.255.0  
  - 11111111.11111111.11111111.00000000  
  - /24  
- Network portion: first 24 bits  
- Host portion: last 8 bits  

---

### &#128313; Class D

- Range: 224.0.0.0 → 239.255.255.255  
- Purpose: Multicast communication  
- No subnet mask, network portion, or host portion defined  

---

### &#128313; Class E

- Range: 240.0.0.0 → 255.255.255.255  
- Purpose: Experimental use  
- No subnet mask, network portion, or host portion defined  

---

## &#128204; Key Observation

The first three classes (A, B, C) have fixed subnet masks.

This means:
- network and host portions are predefined  
- there is no flexibility in dividing the network  

---

## &#128204; Limitations of Classful Networking

- Inefficient use of IP addresses  
- Fixed network sizes (too large or too small)  
- Lack of flexibility  

---

## &#128204; Transition to Modern Networking

Due to these limitations, classful networking was replaced by:

- Classless Inter-Domain Routing (CIDR)  
- Subnetting  

---

## &#128161; Key Idea

Classful networking uses fixed network boundaries,

while modern networking allows flexible boundaries using subnet masks.

<!-- course-footer -->
---

<div align="center" markdown>

<strong>Previous:</strong> [Subnet Mask](08-03-subnet-mask.md) &nbsp;|&nbsp; [All Notes](README.md) &nbsp;|&nbsp; [Module 08 Exercise](../02-exercises/08-exercise.md) &nbsp;|&nbsp; <strong>Next:</strong> [CIDR (Classless Inter-Domain Routing)](08-05-cidr.md)

</div>
<!-- /course-footer -->
