# 07-02: Cloud Deployment Models & Characteristics

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/07-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 07: Cloud Computing and Remote Access | 07-02 |
<!-- /course-header -->

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

See also: [Cloud Service Models](07-01-cloud-service-models.md), [Fault Tolerance & Recovery](11-04-fault-tolerance-and-recovery.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="07-01-cloud-service-models.md">Cloud Service Models</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/07-exercise.md">Module 07 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="07-03-virtualization.md">Virtualization</a>

</div>
<!-- /course-footer -->
