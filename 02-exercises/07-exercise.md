# 07: Cloud Computing & Remote Access — Exercises

## Questions

1. Classify each as IaaS, PaaS, or SaaS: (a) Microsoft 365, (b) AWS EC2 virtual machines, (c) Azure App Service for deploying code.
2. A hospital and several clinics share a compliance-focused cloud dedicated to healthcare orgs. Which deployment model?
3. Compare a Type 1 and a Type 2 hypervisor, with an example of each.
4. Why are containers lighter than virtual machines?
5. A remote admin needs a secure single entry point to manage internal servers. Name the design element and one hardening measure.
6. RDP is currently exposed to the Internet on port 3389. State the risk and the recommended fix.

---

## Solutions

### 1. Service models
- (a) Microsoft 365 → **SaaS**
- (b) EC2 VMs → **IaaS**
- (c) Azure App Service → **PaaS**

### 2. Deployment model
**Community cloud** — shared by organizations with common needs/compliance (e.g., healthcare).

### 3. Hypervisor types
- **Type 1 (bare-metal)** — runs directly on hardware (ESXi, Hyper-V, KVM); used for servers.
- **Type 2 (hosted)** — runs on a host OS (VirtualBox, VMware Workstation); used on desktops/labs.

### 4. Containers vs. VMs
Containers **share the host OS kernel** and package only the app + dependencies, so they're smaller and start faster. Each VM runs a **full guest OS**.

### 5. Secure admin entry point
A **jump box / bastion host**. Harden it with **MFA**, least privilege, patching, and logging/auditing of all access.

### 6. Exposed RDP
**Risk:** brute-force and ransomware entry via port 3389. **Fix:** place RDP behind a **VPN or RD Gateway**, require **MFA**, and restrict source IPs — never expose it directly.
