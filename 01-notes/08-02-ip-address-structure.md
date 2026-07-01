# 08-02: IP Address Structure

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