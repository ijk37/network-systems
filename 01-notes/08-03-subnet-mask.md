# 08-03: Subnet Mask

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