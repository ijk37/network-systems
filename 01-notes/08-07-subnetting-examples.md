# 08-07: Subnetting Examples

## Example 1: Basic Subnetting (/24 → /26)

### Given:
- IP Address: 192.168.1.0  
- Default Subnet Mask: /24  
- New Subnet Mask: /26  

---

### Step 1: Identify Borrowed Bits

- Original network bits = 24  
- New network bits = 26  
- Borrowed bits (n) = 26 − 24 = 2  

- Total bits = 32  
- Host bits (h) = 32 − 26 = 6  

---

### Step 2: Number of Subnets

**Formula:**  
Number of subnets = 2ⁿ  

→ 2² = 4 subnets  

---

### Step 3: Number of Addresses and Hosts per Subnet

**Total addresses per subnet:**  
2ʰ = 2⁶ = 64  

**Usable hosts per subnet:**  
2ʰ − 2 = 64 − 2 = 62  

---

### Step 4: Subnet Ranges

- Subnet mask (binary):  
  11111111.11111111.11111111.11000000  

- Subnet mask (decimal):  
  255.255.255.192  

- Block size = 256 − 192 = 64  

**Subnets:**

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

### Step 1: Identify Borrowed Bits

- Original network bits = 16  
- New network bits = 18  
- Borrowed bits (n) = 18 − 16 = 2  

- Total bits = 32  
- Host bits (h) = 32 − 18 = 14  

---

### Step 2: Number of Subnets

**Formula:**  
Number of subnets = 2ⁿ  

→ 2² = 4 subnets  

---

### Step 3: Number of Addresses and Hosts per Subnet

**Total addresses per subnet:**  
2ʰ = 2¹⁴ = 16384  

**Usable hosts per subnet:**  
2ʰ − 2 = 16384 − 2 = 16382  

---

### Step 4: Subnet Ranges

- Subnet mask (binary):  
  11111111.11111111.11000000.00000000  

- Subnet mask (decimal):  
  255.255.192.0  

- Block size = 256 − 192 = 64  

**Subnets:**

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

## Key Idea

Subnetting involves:
- borrowing bits  
- calculating subnets  
- determining host ranges  
- identifying network and broadcast addresses  