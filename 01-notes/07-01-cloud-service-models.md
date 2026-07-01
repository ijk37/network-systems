# 07-01: Cloud Service Models

<!-- course-header -->
<div align="center">

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/07-exercise.md">Practice Set</a> &nbsp;|&nbsp; <a href="../03-quiz/">Quiz Hub</a>

</div>

| Course | Module | Lesson |
| --- | --- | --- |
| Network Systems | 07: Cloud Computing and Remote Access | 07-01 |
<!-- /course-header -->

## The Three Core Models

Cloud services differ by **how much the provider manages vs. you**.

| Model | Provider manages | You manage | Example |
|-------|------------------|------------|---------|
| **IaaS** | Hardware, virtualization, network | OS, apps, data | AWS EC2, Azure VMs |
| **PaaS** | + OS, runtime, middleware | Just your code/data | Azure App Service, Heroku |
| **SaaS** | Everything | Just your usage/config | Microsoft 365, Salesforce |

> More letters "as-a-Service" you offload upward = **less you manage**. IaaS = most control; SaaS = least effort.

---

## The "Pizza as a Service" Analogy

- **IaaS** — they give you the kitchen; you cook.
- **PaaS** — they give you the oven and dough; you add toppings.
- **SaaS** — pizza delivered, ready to eat.

---

## Other "as-a-Service" Terms

| Term | Delivers |
|------|----------|
| **DaaS** | Virtual desktops (VDI in the cloud) |
| **DBaaS** | Managed databases |
| **XaaS** | "Anything" as a service |

---

## Shared Responsibility

The provider secures the layers **they** manage; **you** secure your OS/apps/data/access according to the model. Responsibility shifts more to the provider as you move IaaS → PaaS → SaaS.

---

## Key Idea

> **IaaS = VMs/infra**, **PaaS = dev platform**, **SaaS = finished apps**. The higher the service, the less you manage — but you always secure your **data and access**.

See also: [Cloud Deployment Models & Characteristics](07-02-cloud-deployment.md), [Virtualization](07-03-virtualization.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="06-04-wireless-design.md">Wireless Design &amp; Roaming</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/07-exercise.md">Module 07 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="07-02-cloud-deployment.md">Cloud Deployment Models &amp; Characteristics</a>

</div>
<!-- /course-footer -->
