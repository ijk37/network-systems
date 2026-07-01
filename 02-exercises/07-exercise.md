# 07: Cloud Computing & Remote Access — Exercises

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="../01-notes/README.md">All Notes</a> &nbsp;|&nbsp; <a href="README.md">All Exercises</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Practice |
| --- | --- | ---: |
| Network Systems | 07: Cloud Computing and Remote Access | 12 questions |

> Try each question first. Open the answer only after you have written or spoken your attempt.
<!-- /course-header -->

Work through each question, then click **▶ Show answer** to check yourself. Review the [notes](../01-notes/07-01-cloud-service-models.md) if you get stuck.

---

### Q1. Classify each as IaaS, PaaS, or SaaS: (a) Microsoft 365, (b) AWS EC2 VMs, (c) Azure App Service for deploying code.

<details>
<summary><strong>Show answer</strong></summary>

- (a) Microsoft 365 → **SaaS**
- (b) EC2 VMs → **IaaS**
- (c) Azure App Service → **PaaS**
</details>

---

### Q2. In IaaS, what does the customer secure vs. the provider?

<details>
<summary><strong>Show answer</strong></summary>

- **Provider** — physical data center, hardware, virtualization/host.
- **Customer** — the **guest OS, applications, data, and access** (patching and configuration).

Responsibility shifts more to the provider as you move IaaS → PaaS → SaaS.
</details>

---

### Q3. A hospital and clinics share a compliance-focused cloud dedicated to healthcare orgs. Which deployment model?

<details>
<summary><strong>Show answer</strong></summary>

**Community cloud** — shared by organizations with common needs/compliance.
</details>

---

### Q4. Compare a Type 1 and a Type 2 hypervisor, with an example of each.

<details>
<summary><strong>Show answer</strong></summary>

- **Type 1 (bare-metal)** — runs directly on hardware (ESXi, Hyper-V, KVM); used for servers.
- **Type 2 (hosted)** — runs on a host OS (VirtualBox, VMware Workstation); used on desktops/labs.
</details>

---

### Q5. Why are containers lighter than virtual machines?

<details>
<summary><strong>Show answer</strong></summary>

Containers **share the host OS kernel** and package only the app + dependencies, so they're smaller and faster to start. Each VM runs a **full guest OS**.
</details>

---

### Q6. Define elasticity and multitenancy.

<details>
<summary><strong>Show answer</strong></summary>

- **Elasticity** — resources scale up/down automatically with demand.
- **Multitenancy** — many customers securely share the same pooled physical infrastructure, logically isolated.
</details>

---

### Q7. A remote admin needs one secure entry point to manage internal servers. Name the design element and one hardening measure.

<details>
<summary><strong>Show answer</strong></summary>

A **jump box / bastion host**. Harden with **MFA**, least privilege, patching, and full logging/auditing of access.
</details>

---

### Q8. RDP is exposed to the Internet on port 3389. State the risk and the recommended fix.

<details>
<summary><strong>Show answer</strong></summary>

**Risk:** brute-force and ransomware entry via 3389. **Fix:** place RDP behind a **VPN or RD Gateway**, require **MFA**, and restrict source IPs — never expose it directly.
</details>

---

### Q9. Compare a site-to-site VPN with a client-to-site VPN.

<details>
<summary><strong>Show answer</strong></summary>

- **Site-to-site** — connects entire **networks** (e.g., branch ↔ HQ), usually IPsec on routers/firewalls.
- **Client-to-site (remote-access)** — connects an **individual user's device** into the corporate network.
</details>

---

### Q10. What is the difference between a full-tunnel and a split-tunnel VPN?

<details>
<summary><strong>Show answer</strong></summary>

- **Full tunnel** — **all** client traffic goes through the VPN (more secure, more load).
- **Split tunnel** — only corporate-bound traffic uses the VPN; the rest goes direct.
</details>

---

### Q11. What is out-of-band management, and why is it valuable?

<details>
<summary><strong>Show answer</strong></summary>

A **separate management path** (console/serial port, dedicated interface, or cellular) to reach devices **even when the production network is down** — essential for recovery.
</details>

---

### Q12. What problem does SD-WAN solve, and how?

<details>
<summary><strong>Show answer</strong></summary>

It improves WAN performance/cost by **centrally managing and intelligently steering** traffic across multiple transports (MPLS, broadband, LTE) based on application policy and link quality — reducing reliance on costly MPLS.
</details>

---

⬅️ **Prev:** [Module 06](06-exercise.md)  ·  [📚 All Exercises](README.md)  ·  **Next:** [Module 08 — Subnets & VLANs](08-exercise.md) ➡️

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="06-exercise.md">06: Wireless Networking — Exercises</a> &nbsp;|&nbsp; <a href="README.md">All Exercises</a> &nbsp;|&nbsp; <a href="../01-notes/07-01-cloud-service-models.md">Module 07 Notes</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="08-exercise.md">08: Subnets &amp; VLANs — Exercises</a>

</div>
<!-- /course-footer -->
