# 08-04: Classful Networks

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