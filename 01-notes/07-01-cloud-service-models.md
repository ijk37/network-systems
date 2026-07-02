# &#128216; 07-01: Cloud Service Models

<!-- course-header -->
<div align="center">

<a href="../README.md"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<img src="https://img.shields.io/badge/Module_07-Cloud_Computing_and_Remote_Access-B4122E?style=for-the-badge&labelColor=7E0E23" alt="Module 07: Cloud Computing and Remote Access">

<a href="../README.md"><img src="https://img.shields.io/badge/⌂_Home-3B2530?style=flat-square" alt="Home"></a> <a href="README.md"><img src="https://img.shields.io/badge/All_Notes-3B2530?style=flat-square" alt="All Notes"></a> <a href="../02-exercises/07-exercise.md"><img src="https://img.shields.io/badge/✎_Practice-C8901A?style=flat-square&labelColor=7E0E23" alt="Practice"></a> <a href="../03-quiz/"><img src="https://img.shields.io/badge/▶_Quiz-C8901A?style=flat-square&labelColor=7E0E23" alt="Quiz"></a>

</div>
<!-- /course-header -->

## &#128204; The Three Core Models

Cloud services differ by **how much the provider manages vs. you**.

| Model | Provider manages | You manage | Example |
|-------|------------------|------------|---------|
| **IaaS** | Hardware, virtualization, network | OS, apps, data | AWS EC2, Azure VMs |
| **PaaS** | + OS, runtime, middleware | Just your code/data | Azure App Service, Heroku |
| **SaaS** | Everything | Just your usage/config | Microsoft 365, Salesforce |

> More letters "as-a-Service" you offload upward = **less you manage**. IaaS = most control; SaaS = least effort.

---

## &#128204; The "Pizza as a Service" Analogy

- **IaaS** — they give you the kitchen; you cook.
- **PaaS** — they give you the oven and dough; you add toppings.
- **SaaS** — pizza delivered, ready to eat.

---

## &#128204; Other "as-a-Service" Terms

| Term | Delivers |
|------|----------|
| **DaaS** | Virtual desktops (VDI in the cloud) |
| **DBaaS** | Managed databases |
| **XaaS** | "Anything" as a service |

---

## &#128204; Shared Responsibility

The provider secures the layers **they** manage; **you** secure your OS/apps/data/access according to the model. Responsibility shifts more to the provider as you move IaaS → PaaS → SaaS.

---

> [!TIP]
> **Key idea —** **IaaS = VMs/infra**, **PaaS = dev platform**, **SaaS = finished apps**. The higher the service, the less you manage — but you always secure your **data and access**.

See also: [Cloud Deployment Models & Characteristics](07-02-cloud-deployment.md), [Virtualization](07-03-virtualization.md)

<!-- course-footer -->
---

<div align="center">

<strong>Previous:</strong> <a href="06-04-wireless-design.md">Wireless Design &amp; Roaming</a> &nbsp;|&nbsp; <a href="README.md">All Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/07-exercise.md">Module 07 Exercise</a> &nbsp;|&nbsp; <strong>Next:</strong> <a href="07-02-cloud-deployment.md">Cloud Deployment Models &amp; Characteristics</a>

</div>
<!-- /course-footer -->
