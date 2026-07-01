# 07-01: Cloud Service Models

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

See also: [[07-02-cloud-deployment]], [[07-03-virtualization]]
