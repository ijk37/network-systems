# Project 10 — Cloud & VPN Connectivity

**Type:** Design + Packet Tracer
**Modules:** 07 (Cloud & Remote Access), 04 (Protocols), 12 (WAN)
**Difficulty:** ⭐⭐⭐⭐

---

## Objective

Design a **hybrid connectivity** solution that links an on-prem office to cloud resources and to remote workers — choosing cloud service models, building a **site-to-site VPN**, and hardening **remote access**.

---

## Scenario

**Delta Systems** runs some services on-prem and wants to:
- Move email and CRM to the cloud.
- Host a customer web app in the cloud.
- Connect HQ to the cloud provider securely.
- Let remote employees work from home safely.

---

## Part A — Cloud Design (document)

1. **Service model choices** — pick IaaS / PaaS / SaaS for each and justify:
   - Email & CRM → ?
   - Customer web app on managed platform → ?
   - A custom VM for a legacy app → ?
2. **Deployment model** — public, private, or **hybrid**? Explain.
3. **Shared responsibility** — for the IaaS VM, list what Delta must secure vs. the provider.
4. **Cloud connectivity** — public Internet vs. a **dedicated private link** (Direct Connect / ExpressRoute); when is each justified?

## Part B — Site-to-Site VPN (Packet Tracer)

1. Build HQ router ↔ "cloud" router across a simulated Internet.
2. Configure an **IPsec site-to-site VPN** (IKE + ESP) between them.
3. Verify traffic between HQ LAN and the cloud subnet is encrypted (check the tunnel; inspect in Simulation mode).

```
R-HQ(config)# crypto isakmp policy 10
R-HQ(config)# crypto ipsec transform-set TS esp-aes esp-sha-hmac
R-HQ(config)# crypto map CMAP 10 ipsec-isakmp
   ! ...match ACL for interesting traffic, set peer, apply to interface
```

## Part C — Remote Access (design)

1. Choose **client-to-site VPN** with **MFA** for employees; full vs. split tunnel — which and why?
2. Add a **jump box / bastion host** for administering internal servers.
3. State why **RDP (3389)** must never be exposed directly to the Internet, and how you'd provide remote desktop safely.

---

## Verification Checklist

- [ ] Each service is mapped to the correct cloud model with justification.
- [ ] Site-to-site IPsec tunnel comes up; HQ ↔ cloud traffic uses it.
- [ ] Remote-access design requires **MFA** and avoids exposing RDP.
- [ ] Shared-responsibility split is correct for IaaS.

---

## Deliverables

- Cloud + connectivity design document.
- Packet Tracer file with the working site-to-site VPN (local).

## Stretch Goals

- Add **SD-WAN** thinking: two Internet links with policy-based steering/failover.
- Diagram a **VPN concentrator** terminating many remote-user tunnels.

See also notes: [[07-01-cloud-service-models]], [[07-04-remote-access-methods]], [[04-04-secure-protocols]]
