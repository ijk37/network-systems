# 02: Infrastructure & Documentation — Exercises

## Questions

1. Put these structured-cabling elements in order from the user's desk out to the ISP: MDF, work area, demarc, IDF, entrance facility, horizontal cabling, backbone cabling.
2. A horizontal copper run measures 92 m of solid-core plus 12 m of patch cords. Does it comply with TIA-568? Why?
3. You must terminate a cable to connect two switches together on gear without Auto-MDIX. Which cable type and which pin standards on each end?
4. A rack holds a 1U firewall, a 2U server, and a 4U UPS. How many rack units are consumed, and how would you record their positions?
5. Distinguish a physical network diagram from a logical network diagram, and give one item each would contain.
6. Write the minimum contents of a change request for replacing a core switch.

---

## Solutions

### 1. Cabling path
**Work area → Horizontal cabling → IDF → Backbone cabling → MDF → Entrance facility → Demarc** (to the ISP).

### 2. TIA-568 compliance
Total channel = 92 + 12 = **104 m**, which **exceeds the 100 m** limit. It does **not** comply. (Limit is ~90 m permanent link + ~10 m patch cords = 100 m.)

### 3. Switch-to-switch cable
A **crossover cable** — **T568A on one end, T568B on the other**. (With Auto-MDIX, a straight-through would also work.)

### 4. Rack units
1U + 2U + 4U = **7U** consumed. Record each device's **starting U position** (e.g., firewall at U42, server U40–41, UPS U1–4) in a **rack elevation diagram**.

### 5. Physical vs. logical diagram
- **Physical** — actual devices, ports, cable runs, locations (e.g., "Switch A port 12 → Room 204 jack").
- **Logical** — IP addressing, subnets/VLANs, routing, data flow (e.g., "VLAN 10 = 192.168.10.0/24").

### 6. Change request contents
Reason/scope, risk assessment, implementation plan + maintenance window, **rollback (back-out) plan**, and **approval/sign-off**. (Never includes personal credentials.)
