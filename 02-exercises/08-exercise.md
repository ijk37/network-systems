# 08: Subnets & VLANs — Exercises

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_08-Subnets_and_VLANs-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 08: Subnets and VLANs"> <img src="https://img.shields.io/badge/6_questions-C8901A?style=for-the-badge&labelColor=7E0E23" alt="6 questions">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="../01-notes/08-01-network-segmentation.md"><img src="https://img.shields.io/badge/Notes-3B2530?style=flat-square" alt="Notes"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Exercises-3B2530?style=flat-square" alt="All Exercises"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

> [!TIP]
> **Practice —** try each question first, then expand the answer to check your reasoning.

Hands-on **subnetting drills** — the highest-value practice for the exam. Read each question, work it out on paper, then click **▶ Show worked solution** to check (binary method, block-size/magic-number method, VLSM, and IPv6). Quick-recall questions follow at the end.

> Related note: [Subnetting Basics](../01-notes/08-06-subnetting-basics.md)

---

## Exercise 1 — Find Range, Network ID & Broadcast (/22, two methods)

### Question

Find the **address range**, **usable host range**, **network ID**, and **broadcast ID** of the following subnet:

172.21.40.0/22  

---

<details><summary>▶ Show worked solution</summary>

### Solution

### Method 1: Binary Method

#### Step 1: Write the Given IP Address in Binary

Subnet IP:  
172.21.40.0 → 10101100.00010101.00101000.00000000

Subnet Mask:  
/22 → first 22 bits are network bits, last 10 bits are host bits

---

#### Step 2: Determine the First and Last Address

- First address: keep all host bits as `0`
- Last address: keep all host bits as `1`

So,

- First address:  
  10101100.00010101.00101000.00000000 → 172.21.40.0

- Last address:  
  10101100.00010101.00101011.11111111 → 172.21.43.255

---

#### Step 3: Identify Network ID and Broadcast ID

- Network ID = first address = 172.21.40.0
- Broadcast ID = last address = 172.21.43.255

---

#### Step 4: Determine the Address Range

Address range:  
172.21.40.0 to 172.21.43.255

---

#### Step 5: Determine the Usable Host Range

- First usable host: 172.21.40.1
- Last usable host: 172.21.43.254

Usable host range:  
172.21.40.1 to 172.21.43.254

---

### Method 2: Block Size Method

#### Step 1: Find the Subnet Mask and Block Size

Subnet Mask:  
/22 → 11111111.11111111.11111100.00000000 → 255.255.252.0

Block size = 256 − 252 = 4  
The block size applies in the **3rd octet**.

---

#### Step 2: Find the Subnet Range

Subnets increase by 4 in the 3rd octet:

..., 36, 40, 44, ...

Given subnet:  
172.21.40.0

So:
- This subnet starts at 172.21.40.0
- The next subnet starts at 172.21.44.0

Therefore, the current subnet ends at:  
172.21.43.255

---

#### Step 3: Identify Network ID and Broadcast ID

- Network ID = 172.21.40.0
- Broadcast ID = 172.21.43.255

---

#### Step 4: Determine the Address Range

Address range:  
172.21.40.0 to 172.21.43.255

---

#### Step 5: Determine the Usable Host Range

- First usable host: 172.21.40.1
- Last usable host: 172.21.43.254

Usable host range:  
172.21.40.1 to 172.21.43.254

---

### Final Answer

- Network ID: 172.21.40.0
- Broadcast ID: 172.21.43.255
- Address range: 172.21.40.0 to 172.21.43.255
- Usable host range: 172.21.40.1 to 172.21.43.254

</details>

---

## Exercise 2 — Subnet a Class B into 15 Subnets

### Question

A Class B network with network ID **172.20.0.0** is given.  
The network needs to be divided into **at least 15 subnets**.

Based on this requirement, answer the following:

1. How many bits have to be borrowed from the host portion?  
2. How many total bits will be used to identify the subnet?  
3. What is the new subnet mask in dotted decimal notation?  
4. What is the magic number (block size)?  
5. What are the network IDs of:
   - the first subnet  
   - the second subnet  
   - the last required (15th) subnet  
   - the last created (16th) subnet  
6. How many usable host addresses are available per subnet?  
7. What are the usable host ranges of:
   - the first subnet  
   - the second subnet  
   - the last required (15th) subnet  

---

<details><summary>▶ Show worked solution</summary>

### Solution

#### Step 1: Number of bits to be borrowed

Given:
- Class B network → default prefix = /16  
- Required subnets = 15  

Checking powers of 2:

- 2¹ = 2  
- 2² = 4  
- 2³ = 8  
- 2⁴ = 16  

Thus, 4 bits have to be borrowed (since 2⁴ = 16 ≥ 15).

👉 **(1) Bits borrowed = 4**

---

#### Step 2: Total subnet bits

👉 **(2) Total subnet bits = 16 + 4 = 20 bits (/20)**  

---

#### Step 3: New subnet mask

Default mask (binary):  
11111111.11111111.00000000.00000000  

After borrowing 4 bits:  
11111111.11111111.11110000.00000000  

Convert to decimal:

👉 **(3) Subnet mask = 255.255.240.0 (/20)**  

---

#### Step 4: Magic number (Block Size)

The change occurs in the **3rd octet**.

Magic number = 256 − 240 = **16**

👉 **(4) Magic number = 16**

(Subnet IDs increase by 16 in the 3rd octet)

---

#### Step 5: Subnet network IDs

Using block size 16:

- 1st → 172.20.0.0/20  
- 2nd → 172.20.16.0/20  
- 3rd → 172.20.32.0/20  
- ...  
- 15th → 172.20.224.0/20  
- 16th → 172.20.240.0/20  

👉 **(5) Network IDs:**
- First subnet → 172.20.0.0  
- Second subnet → 172.20.16.0  
- Last required (15th) → 172.20.224.0  
- Last created (16th) → 172.20.240.0  

---

#### Step 6: Number of hosts per subnet

Remaining host bits: 32 − 20 = 12  

Number of usable hosts: 2¹² − 2 = 4096 − 2 = **4094**

👉 **(6) Usable hosts per subnet = 4094**

---

#### Step 7: Host ranges

##### First subnet (172.20.0.0/20)

- Network ID = 172.20.0.0  
- Broadcast ID = 172.20.15.255  
- Usable host range = 172.20.0.1 to 172.20.15.254  

---

##### Second subnet (172.20.16.0/20)

- Network ID = 172.20.16.0  
- Broadcast ID = 172.20.31.255  
- Usable host range = 172.20.16.1 to 172.20.31.254  

---

##### Last required (15th) subnet (172.20.224.0/20)

- Network ID = 172.20.224.0  
- Broadcast ID = 172.20.239.255  
- Usable host range = 172.20.224.1 to 172.20.239.254  

---

👉 **(7) Host ranges:**
- First subnet → 172.20.0.1 to 172.20.15.254  
- Second subnet → 172.20.16.1 to 172.20.31.254  
- Last required subnet → 172.20.224.1 to 172.20.239.254  

---

### Final Summary

1. Bits borrowed from host portion = 4  

2. Total subnet bits = 20 bits (/20)  

3. Subnet mask = 255.255.240.0  

4. Magic number (block size) = 16  

5. Subnet network IDs:
   - First subnet → 172.20.0.0  
   - Second subnet → 172.20.16.0  
   - Last required (15th) → 172.20.224.0  
   - Last created (16th) → 172.20.240.0  

6. Usable hosts per subnet = 4094  

7. Host ranges:
   - First subnet → 172.20.0.1 to 172.20.15.254  
   - Second subnet → 172.20.16.1 to 172.20.31.254  
   - Last required subnet → 172.20.224.1 to 172.20.239.254

</details>

---

## Exercise 3 — Locate a Host's Subnet (/27)

### Question

An IPv4 host has the following configuration:

- IP address: **192.168.89.130**  
- Subnet mask: **255.255.255.224 (/27)**  

Based on this information, answer the following:

1. What is the magic number (block size)?  
2. What is the network ID of the first subnet?  
3. What are the network IDs of:
   - the second subnet  
   - the last subnet  
4. What is the network ID of the subnet to which the given host belongs?  
5. What is the broadcast address of that subnet?  
6. What is the usable host range of that subnet?  

---

<details><summary>▶ Show worked solution</summary>

### Solution

#### Step 1: Magic number (Block Size)

Subnet mask = 255.255.255.224  

Magic number = 256 − 224 = **32**

👉 **(1) Magic number = 32**

---

#### Step 2: Network ID of the first subnet

This is a Class C network:

- Default network portion = first 3 octets → 192.168.89  

Thus, first subnet starts from: 192.168.89.0

👉 **(2) First subnet network ID = 192.168.89.0**

---

#### Step 3: Network IDs of subnets

Using block size 32, subnet IDs increase by 32:

- 1st → 192.168.89.0  
- 2nd → 192.168.89.32  
- 3rd → 192.168.89.64  
- 4th → 192.168.89.96  
- 5th → 192.168.89.128  
- 6th → 192.168.89.160  
- 7th → 192.168.89.192  
- 8th → 192.168.89.224  

👉 **(3) Network IDs:**
- Second subnet → 192.168.89.32  
- Last subnet → 192.168.89.224  

---

#### Step 4: Network ID of the host’s subnet

Host IP = 192.168.89.130  

Since block size = 32,
subnet boundaries occur at: 0, 32, 64, 96, 128, 160, ...

The largest value ≤ 130 is **128**.

Thus:

👉 **(4) Network ID = 192.168.89.128**

---

#### Step 5: Broadcast address of the host’s subnet

The host belongs to the subnet that starts at **192.168.89.128**.

Since block size = 32,

- Next subnet starts from = 192.168.89.128 + 32 = **192.168.89.160**  

So, the last address of the current subnet = 192.168.89.160 − 1 = **192.168.89.159**

The last address of this subnet is the broadcast address.

👉 **(5) Broadcast address = 192.168.89.159**

---

#### Step 6: Host range of the subnet

- Network ID = 192.168.89.128  
- Broadcast ID = 192.168.89.159  

Usable host range: 192.168.89.129 to 192.168.89.158

👉 **(6) Host range = 192.168.89.129 to 192.168.89.158**

---

### Final Summary

1. Magic number = 32  

2. First subnet network ID = 192.168.89.0  

3. Network IDs:
   - Second subnet → 192.168.89.32  
   - Last subnet → 192.168.89.224  

4. Host’s subnet network ID = 192.168.89.128  

5. Host’s Broadcast address = 192.168.89.159  

6. Host range = 192.168.89.129 to 192.168.89.158

</details>

---

## Exercise 4 — VLSM for Four Departments

### Question

A network **192.168.10.0/24** is given.  
This network has to be divided using **VLSM** for the following departments:

- Department D → 10 hosts  
- Department C → 25 hosts  
- Department B → 50 hosts  
- Department A → 100 hosts  

Based on this requirement, answer the following:

1. What is the required subnet size for each department?  
2. What prefix length will be used for each department?  
3. What subnet will be assigned to each department?  
4. What is the usable host range of each subnet?  
5. What unused address range remains after allocation?  
6. What are the Network ID and Broadcast ID of each department?  

---

<details><summary>▶ Show worked solution</summary>

### Solution

#### Step 1: Arrange host requirements in descending order

In VLSM, the largest requirement has to be allocated first.

- Department A → 100 hosts  
- Department B → 50 hosts  
- Department C → 25 hosts  
- Department D → 10 hosts  

---

#### Step 2: Find required subnet size for each department

Need to use:

Required addresses = hosts + 2

##### Department A
- Hosts needed = 100  
- Required = 100 + 2 = 102  
- Closest power of 2 = 2^7 = 128  
- Number of host bits = 7  
- Number of network bits = 32 − 7 = 25  
- Prefix = /25  

##### Department B
- Hosts needed = 50  
- Required = 50 + 2 = 52  
- Closest power of 2 = 2^6 = 64  
- Number of host bits = 6  
- Number of network bits = 32 − 6 = 26  
- Prefix = /26  

##### Department C
- Hosts needed = 25  
- Required = 25 + 2 = 27  
- Closest power of 2 = 2^5 = 32  
- Number of host bits = 5  
- Number of network bits = 32 − 5 = 27  
- Prefix = /27  

##### Department D
- Hosts needed = 10  
- Required = 10 + 2 = 12  
- Closest power of 2 = 2^4 = 16  
- Number of host bits = 4  
- Number of network bits = 32 − 4 = 28  
- Prefix = /28  

👉 **(1) Required subnet sizes:**
- A → 128 addresses  
- B → 64 addresses  
- C → 32 addresses  
- D → 16 addresses  

👉 **(2) Prefix lengths:**
- A → /25  
- B → /26  
- C → /27  
- D → /28  

---

#### Step 3: Assign subnets

Start from the beginning of **192.168.10.0/24** and assign sequentially.

##### Department A
- Subnet = 192.168.10.0/25  
- Total addresses = 128  
- Network ID = 192.168.10.0  
- Broadcast ID = 192.168.10.127  
- Address range = 192.168.10.0 to 192.168.10.127  
- Usable host range = 192.168.10.1 to 192.168.10.126  

##### Department B
- Subnet = 192.168.10.128/26  
- Total addresses = 64  
- Network ID = 192.168.10.128  
- Broadcast ID = 192.168.10.191  
- Address range = 192.168.10.128 to 192.168.10.191  
- Usable host range = 192.168.10.129 to 192.168.10.190  

##### Department C
- Subnet = 192.168.10.192/27  
- Total addresses = 32  
- Network ID = 192.168.10.192  
- Broadcast ID = 192.168.10.223  
- Address range = 192.168.10.192 to 192.168.10.223  
- Usable host range = 192.168.10.193 to 192.168.10.222  

##### Department D
- Subnet = 192.168.10.224/28  
- Total addresses = 16  
- Network ID = 192.168.10.224  
- Broadcast ID = 192.168.10.239  
- Address range = 192.168.10.224 to 192.168.10.239  
- Usable host range = 192.168.10.225 to 192.168.10.238  

👉 **(3) Assigned subnets:**
- A → 192.168.10.0/25  
- B → 192.168.10.128/26  
- C → 192.168.10.192/27  
- D → 192.168.10.224/28  

👉 **(4) Usable host ranges:**
- A → 192.168.10.1 to 192.168.10.126  
- B → 192.168.10.129 to 192.168.10.190  
- C → 192.168.10.193 to 192.168.10.222  
- D → 192.168.10.225 to 192.168.10.238  

👉 **(6) Network ID and Broadcast ID:**
- A → Network ID: 192.168.10.0, Broadcast ID: 192.168.10.127  
- B → Network ID: 192.168.10.128, Broadcast ID: 192.168.10.191  
- C → Network ID: 192.168.10.192, Broadcast ID: 192.168.10.223  
- D → Network ID: 192.168.10.224, Broadcast ID: 192.168.10.239  

---

#### Step 4: Find unused address range

After allocating Department D, the remaining range is:

- 192.168.10.240 to 192.168.10.255  

👉 **(5) Unused address range = 192.168.10.240 to 192.168.10.255**

---

### Final Summary

1. Required subnet sizes:
   - A → 128  
   - B → 64  
   - C → 32  
   - D → 16  

2. Prefix lengths:
   - A → /25  
   - B → /26  
   - C → /27  
   - D → /28  

3. Assigned subnets:
   - A → 192.168.10.0/25  
   - B → 192.168.10.128/26  
   - C → 192.168.10.192/27  
   - D → 192.168.10.224/28  

4. Usable host ranges:
   - A → 192.168.10.1 to 192.168.10.126  
   - B → 192.168.10.129 to 192.168.10.190  
   - C → 192.168.10.193 to 192.168.10.222  
   - D → 192.168.10.225 to 192.168.10.238  

5. Unused address range:
   - 192.168.10.240 to 192.168.10.255  

6. Network ID and Broadcast ID:
   - A → Network ID: 192.168.10.0, Broadcast ID: 192.168.10.127  
   - B → Network ID: 192.168.10.128, Broadcast ID: 192.168.10.191  
   - C → Network ID: 192.168.10.192, Broadcast ID: 192.168.10.223  
   - D → Network ID: 192.168.10.224, Broadcast ID: 192.168.10.239

</details>

---

## Exercise 5 — IPv6 Subnetting (/48 to /64)

### Question

An organization is assigned the IPv6 block **2001:0abc:23a4::/48**.

The network needs to assign a separate subnet to each department using the standard IPv6 subnet size **/64**.

Based on this information, answer the following:

1. How many bits are available for subnetting?  
2. What is the maximum number of /64 subnets that can be created?  
3. What is the standard subnet size used here?  
4. What are the first three possible /64 subnet IDs?  
5. If one department is assigned the subnet **2001:0abc:23a4:2::/64**, what is the network prefix of that department?  
6. How many host addresses are possible in each /64 subnet?  

---

<details><summary>▶ Show worked solution</summary>

### Solution

#### Step 1: Number of bits available for subnetting

Given IPv6 block = **2001:0abc:23a4::/48**

The standard subnet size to be used = **/64**

Thus, bits available for subnetting:

64 − 48 = **16 bits**

👉 **(1) Bits available for subnetting = 16**

---

#### Step 2: Maximum number of /64 subnets

Number of subnets = 2^n

Here, n = 16

So,

2^16 = **65,536**

👉 **(2) Maximum number of /64 subnets = 65,536**

---

#### Step 3: Standard subnet size

In IPv6, the standard subnet size is **/64**.

That means:

- first 64 bits → network prefix  
- last 64 bits → interface ID  

👉 **(3) Standard subnet size = /64**

---

#### Step 4: First three possible /64 subnet IDs

For a /48 block, the first 48 bits remain fixed.  
The next 16 bits are used as the subnet ID.

Thus, the first few /64 subnet IDs are:

- 2001:0abc:23a4:0::/64  
- 2001:0abc:23a4:1::/64  
- 2001:0abc:23a4:2::/64  

👉 **(4) First three /64 subnet IDs:**
- 2001:0abc:23a4:0::/64  
- 2001:0abc:23a4:1::/64  
- 2001:0abc:23a4:2::/64  

---

#### Step 5: Network prefix of the given department subnet

Given department subnet:

**2001:0abc:23a4:2::/64**

Thus, the network prefix of that department is:

👉 **(5) Network prefix = 2001:0abc:23a4:2::/64**

---

#### Step 6: Number of host addresses in each /64 subnet

In a /64 subnet:

- total IPv6 bits = 128  
- network bits = 64  
- remaining host bits = 64  

So,

Number of host addresses = 2^64

👉 **(6) Host addresses per /64 subnet = 2^64**

---

### Final Summary

1. Bits available for subnetting = 16  

2. Maximum number of /64 subnets = 65,536  

3. Standard subnet size = /64  

4. First three /64 subnet IDs:
   - 2001:0abc:23a4:0::/64  
   - 2001:0abc:23a4:1::/64  
   - 2001:0abc:23a4:2::/64  

5. Network prefix of the given department subnet = 2001:0abc:23a4:2::/64  

6. Host addresses per /64 subnet = 2^64

</details>

---

## Quick-Recall Drills

### Q1. How many usable hosts are in a /26, /28, and /30?

<details>
<summary><strong>Show answer</strong></summary>

- /26 → 2^6 − 2 = **62**
- /28 → 2^4 − 2 = **14**
- /30 → 2^2 − 2 = **2** (point-to-point links)
</details>

---

### Q2. What is the subnet mask for /27, and its block size?

<details>
<summary><strong>Show answer</strong></summary>

/27 = **255.255.255.224**. Block size = 256 − 224 = **32**.
</details>

---

### Q3. Which subnet does host 192.168.10.100/27 belong to (network ID and broadcast)?

<details>
<summary><strong>Show answer</strong></summary>

Block size 32 → subnets .0, .32, .64, **.96**, .128. 100 falls in the **192.168.10.96/27** subnet: network **.96**, broadcast **.127**, usable **.97–.126**.
</details>

---

### Q4. You need at least 500 hosts in one subnet. What is the smallest prefix that works?

<details>
<summary><strong>Show answer</strong></summary>

2^9 − 2 = 510 ≥ 500, so **9 host bits → a /23**. (A /24 gives only 254.)
</details>

---

### Q5. What standard subnet size is used for an IPv6 LAN, and how many /64s come from a /48?

<details>
<summary><strong>Show answer</strong></summary>

IPv6 LANs use **/64**. From /48 to /64 = 16 subnet bits → 2^16 = **65,536** subnets.
</details>

---

### Q6. Summarize the four networks 192.168.4.0/24 … 192.168.7.0/24 into one route.

<details>
<summary><strong>Show answer</strong></summary>

**192.168.4.0/22** — a /22 covers a block of 4 contiguous /24s aligned on a multiple of 4 (192.168.4.0 – 192.168.7.255).
</details>

---

⬅️ **Prev:** [Module 07](07-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 09 — Network Risk Management](09-exercise.md) ➡️

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="07-exercise.md">07: Cloud Computing &amp; Remote Access — Exercises</a> &nbsp;|&nbsp; <a href="README.md">All Exercises</a> &nbsp;|&nbsp; <a href="../01-notes/08-01-network-segmentation.md">Module 08 Notes</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="09-exercise.md">09: Network Risk Management — Exercises</a>

</div>
<!-- /course-footer -->
