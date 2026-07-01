# 09-04: Policies, Physical Security & Continuity

## Security Policies

Policies establish rules, roles, and expected behavior — the governance that technical controls enforce.

| Policy | Purpose |
|--------|---------|
| **AUP** | Acceptable use of resources |
| **Password policy** | Complexity, rotation, reuse rules |
| **BYOD policy** | Rules for personal devices |
| **Incident response plan** | How to handle security incidents |
| **DR / BC plan** | How to recover operations after disaster |

---

## Access Control Best Practices

- **Least privilege** and **role-based access control (RBAC)**
- **MFA** — combine factors: something you **know / have / are**
- **Separation of duties**
- Disable default/unused accounts; change default credentials

---

## Physical Security

| Control | Example |
|---------|---------|
| Deterrent | Signs, lighting |
| Preventive | Locks, badge readers, **mantraps**, fences |
| Detective | CCTV, motion sensors, guards |

---

## Business Continuity & Disaster Recovery

| Metric | Meaning |
|--------|---------|
| **RTO** | Target time to restore a service after an outage |
| **RPO** | Maximum acceptable data loss (in time) |

**Backups — the 3-2-1 rule:** 3 copies, on 2 different media, with 1 copy offsite (or offline/immutable). Offline/immutable backups are the key defense against **ransomware**. **Test restores** regularly.

---

## Key Idea

> Policies + access control (**least privilege, MFA**) + physical security + tested **3-2-1 backups** and **RTO/RPO** targets form a complete risk-management program.

See also: [[09-01-security-concepts]], [[11-04-fault-tolerance-and-recovery]]
