# 07-02: Cloud Deployment Models & Characteristics

## Deployment Models

| Model | Description | Trade-off |
|-------|-------------|-----------|
| **Public** | Shared infrastructure, many tenants (AWS, Azure, GCP) | Cheap, elastic; less control |
| **Private** | Dedicated to one organization (on-prem or hosted) | More control/isolation; costs more |
| **Hybrid** | Combines private + public | Flexibility, cloud bursting |
| **Community** | Shared by orgs with common needs (e.g., healthcare) | Shared cost, common compliance |

---

## Essential Cloud Characteristics

| Characteristic | Meaning |
|----------------|---------|
| **On-demand self-service** | Provision resources without human help |
| **Broad network access** | Reach services over the network from anywhere |
| **Resource pooling** | Shared pool serves many tenants (**multitenancy**) |
| **Rapid elasticity** | Scale up/down automatically with demand |
| **Measured service** | Pay-as-you-go, usage-based billing |

---

## Key Concepts

- **Elasticity** — capacity grows/shrinks automatically with load.
- **Multitenancy** — many customers securely share pooled physical resources.
- **Cloud bursting** — overflow peak workload from private to public cloud.
- **CapEx → OpEx** — replace big upfront purchases with usage-based operating cost.

---

## Connectivity

- **Public Internet** — simplest, variable performance.
- **Dedicated private link** — AWS Direct Connect / Azure ExpressRoute for consistent latency/bandwidth and better security.

Distributing across **regions/availability zones** isolates failures for resilience.

---

## Key Idea

> Deployment = **public/private/hybrid/community**. The cloud's power comes from **elasticity, multitenancy, and pay-as-you-go** — shifting **CapEx to OpEx**.

See also: [[07-01-cloud-service-models]], [[11-04-fault-tolerance-and-recovery]]
