# 08-08: Subnet Calculation Using Binary

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_08-Subnets_and_VLANs-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 08: Subnets and VLANs">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/08-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## Why Use Binary in Subnetting?

Subnetting is fundamentally a binary operation.

- IP addresses are stored in binary  
- Subnet masks operate at the bit level  

Understanding binary makes subnetting:
- more intuitive  
- less error-prone  

---

## Example 1: Basic Subnetting (/24 → /26)

### Given:
- IP Address: 192.168.1.0  
- Default Subnet Mask: 255.255.255.0 (/24)  
- New Subnet Mask: 255.255.255.192 (/26)  

---

### Step 1: Identify Network and Host Bits

- 1s → Network portion  
- 0s → Host portion  

**Before subnetting:**
- 255.255.255.0  
- 11111111.11111111.11111111.00000000  

**After subnetting:**
- 255.255.255.192  
- 11111111.11111111.11111111.11000000  

**Result:**
- First 26 bits → Network  
- Last 6 bits → Host  

---

### Step 2: Number of Subnets

Borrowed bits = 2  

Number of subnets = 2² = 4  

---

### Step 3: Number of Hosts per Subnet

Remaining host bits = 6  

- Total addresses = 2⁶ = 64  
- Usable hosts = 64 − 2 = 62  

---

### Step 4: Address/Subnet Ranges (Binary Understanding)

**IP Address (binary):**  
11000000.10101000.00000001.00000000  

Keep first 26 bits fixed (network part).

- Lowest address:  
  11000000.10101000.00000001.00000000 → 192.168.1.0  

- Highest address:  
  11000000.10101000.00000001.00111111 → 192.168.1.63  

**Subnet ranges (increment = 64):**

| Subnet | Network Address | Broadcast Address |
|--------|----------------|-------------------|
| 1 | 192.168.1.0   | 192.168.1.63  |
| 2 | 192.168.1.64  | 192.168.1.127 |
| 3 | 192.168.1.128 | 192.168.1.191 |
| 4 | 192.168.1.192 | 192.168.1.255 |

---

### Step 5: Host Range (Example: Subnet 1)

- Network ID: 192.168.1.0  
- Broadcast ID: 192.168.1.63  
- Usable Hosts: 192.168.1.1 → 192.168.1.62  

---

## Example 2: Subnetting a Class B Network (/16 → /18)

### Given:
- IP Address: 172.16.0.0  
- Default Subnet Mask: /16  
- New Subnet Mask: /18  

---

### Step 1: Identify Network and Host Bits

**Before subnetting:**
- 255.255.0.0  
- 11111111.11111111.00000000.00000000  

**After subnetting:**
- 255.255.192.0  
- 11111111.11111111.11000000.00000000  

**Result:**
- First 18 bits → Network  
- Last 14 bits → Host  

---

### Step 2: Number of Subnets

Borrowed bits = 2  

Number of subnets = 2² = 4  

---

### Step 3: Number of Hosts per Subnet

Remaining host bits = 14  

- Total addresses = 2¹⁴ = 16384  
- Usable hosts = 16384 − 2 = 16382  

---

### Step 4: Address/Subnet Ranges (Binary Understanding)

**IP Address (binary):**  
10101100.00010000.00000000.00000000  

Keep first 18 bits fixed.

- Lowest address:  
  10101100.00010000.00000000.00000000 → 172.16.0.0  

- Highest address:  
  10101100.00010000.00111111.11111111 → 172.16.63.255  

---

### Understanding Multi-Octet Range

Total addresses per subnet = 16384  

- Each 4th octet cycle = 256 addresses  
- 16384 / 256 = 64 values in the 3rd octet  

So:
- 3rd octet ranges from 0 → 63  

---

### Subnet Ranges

| Subnet | Network Address | Broadcast Address |
|--------|----------------|-------------------|
| 1 | 172.16.0.0   | 172.16.63.255  |
| 2 | 172.16.64.0  | 172.16.127.255 |
| 3 | 172.16.128.0 | 172.16.191.255 |
| 4 | 172.16.192.0 | 172.16.255.255 |

---

### Step 5: Host Range (Example: Subnet 1)

- Network ID: 172.16.0.0  
- Broadcast ID: 172.16.63.255  
- Usable Hosts: 172.16.0.1 → 172.16.63.254  

---

## Note

The block size method (a faster approach for determining subnet ranges) is covered in:

➡️ 08-06: Subnetting Examples  

---

## Key Idea

Subnetting using binary helps you:

- clearly visualize network vs host bits  
- understand how address ranges are formed  
- avoid calculation mistakes

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="08-07-subnetting-examples.md">Subnetting Examples</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/08-exercise.md">Module 08 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="08-09-implementing-subnets.md">Implementing Subnets on a Network</a>

</div>
<!-- /course-footer -->
