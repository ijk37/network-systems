# 08-11: Subnets in IPv6

## What is IPv6 Subnetting?

IPv6 subnetting is the process of dividing an IPv6 network into smaller sub-networks.

Unlike IPv4, IPv6 provides a **vast address space (128 bits)**, making subnetting simpler and more flexible.

---

## IPv6 Address Structure

An IPv6 address consists of **128 bits**, divided into **8 blocks (hextets)**, each containing **16 bits** (16 × 8 = 128 bits).

An IPv6 address is logically divided into:

- **Network prefix / Site Prefix** (global routing prefix + subnet ID)  
- **Interface ID (host portion)**  

**Example:**

2001:0db8:abcd:1234:0000:0000:0000:0001/64  
(In short: 2001:db8:abcd:1234::1/64)

- First 64 bits → Network prefix (2001:db8:abcd:1234)  
- Last 64 bits → Interface ID (0000:0000:0000:0001)  

---

## Standard IPv6 Subnet Size

The most common subnet size in IPv6 is:

👉 **/64**

This means:
- 64 bits → network  
- 64 bits → host  

---

## Why /64 is Standard

- Required for many IPv6 features (e.g., SLAAC)  
- Provides a huge number of addresses  
- Simplifies network design  

Number of addresses in /64:
- 2⁶⁴ (extremely large)

---

## Subnetting in IPv6

Subnetting in IPv6 is done by extending the **network prefix**.

Example:

- Original network: 2001:db8::/32  

We can create subnets by increasing the prefix:

- 2001:db8:0001::/48  
- 2001:db8:0002::/48  
- 2001:db8:0003::/48  

👉 Each /48 is a separate subnet

---

## Example: /48 to /64 Subnetting

**Given:**
- Network: 2001:db8::/48  

We want to create /64 subnets.

---

### Step 1: Calculate Available Subnet Bits

- Original prefix = /48  
- New prefix = /64  

Borrowed bits = 64 − 48 = 16  

---

### Step 2: Number of Subnets

Number of subnets = 2¹⁶ = 65,536 subnets  

---

### Step 3: Subnet Structure

The 16 bits are used in the 4th hextet.

**Example subnets:**

- 2001:db8:0000:0000::/64  
- 2001:db8:0000:0001::/64  
- 2001:db8:0000:0002::/64  
- ...  
- 2001:db8:0000:ffff::/64  

---

## Key Differences: IPv4 vs IPv6 Subnetting

| Feature | IPv4 | IPv6 |
|--------|------|------|
| Address size | 32-bit | 128-bit |
| Subnetting | Complex | Simpler |
| Typical subnet | Variable | /64 |
| Address shortage | Yes | No |
| Need for optimization | High | Low |

---

## Important Concepts in IPv6

### No Broadcast Address

IPv6 does **not use broadcast addresses**.

Instead, it uses:
- multicast  
- anycast  

---

### Huge Address Space

Each subnet (/64) contains:
- 2⁶⁴ addresses  

👉 No need to worry about address wastage

---

### Hierarchical Addressing

IPv6 supports structured allocation:

- Global routing prefix  
- Subnet ID  
- Interface ID  

This improves:
- routing efficiency  
- scalability  

---

## Practical Example

**Question:**  
An organization is assigned: 2001:db8::/48  

It wants to assign a separate subnet to each department.  

- What is the maximum number of departments it can support?  
- How many hosts are possible per department?  

---

**Answer:**

- Subnetting to /64 → borrow 16 bits  
- Maximum number of departments = 2^16 = 65,536  

👉 Each department gets one /64 subnet  

- Number of hosts per department = 2^64  

👉 Each subnet supports 2^64 host addresses (practically unlimited)

---

## Key Idea

IPv6 subnetting focuses on simplicity and scalability,

👉 using large, fixed-size subnets (/64) instead of complex calculations like IPv4.