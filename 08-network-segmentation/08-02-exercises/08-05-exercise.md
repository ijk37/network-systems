# 08-05: Exercises

## Question

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

## Solution

### Step 1: Number of bits available for subnetting

Given IPv6 block = **2001:0abc:23a4::/48**

The standard subnet size to be used = **/64**

Thus, bits available for subnetting:

64 − 48 = **16 bits**

👉 **(1) Bits available for subnetting = 16**

---

### Step 2: Maximum number of /64 subnets

Number of subnets = 2^n

Here, n = 16

So,

2^16 = **65,536**

👉 **(2) Maximum number of /64 subnets = 65,536**

---

### Step 3: Standard subnet size

In IPv6, the standard subnet size is **/64**.

That means:

- first 64 bits → network prefix  
- last 64 bits → interface ID  

👉 **(3) Standard subnet size = /64**

---

### Step 4: First three possible /64 subnet IDs

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

### Step 5: Network prefix of the given department subnet

Given department subnet:

**2001:0abc:23a4:2::/64**

Thus, the network prefix of that department is:

👉 **(5) Network prefix = 2001:0abc:23a4:2::/64**

---

### Step 6: Number of host addresses in each /64 subnet

In a /64 subnet:

- total IPv6 bits = 128  
- network bits = 64  
- remaining host bits = 64  

So,

Number of host addresses = 2^64

👉 **(6) Host addresses per /64 subnet = 2^64**

---

## Final Summary

1. Bits available for subnetting = 16  

2. Maximum number of /64 subnets = 65,536  

3. Standard subnet size = /64  

4. First three /64 subnet IDs:
   - 2001:0abc:23a4:0::/64  
   - 2001:0abc:23a4:1::/64  
   - 2001:0abc:23a4:2::/64  

5. Network prefix of the given department subnet = 2001:0abc:23a4:2::/64  

6. Host addresses per /64 subnet = 2^64  