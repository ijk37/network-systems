# 02-02: Racks, Patch Panels & Terminations

## Equipment Racks

- Standard rack width is **19 inches**; height is measured in **rack units (U)**, where **1U = 1.75 inches**.
- A common full rack is **42U**.
- Devices are described by height: a "1U switch," "2U server," etc.
- A **rack diagram (rack elevation)** documents which device sits at which U position.

---

## Patch Panels

A **patch panel** terminates permanent horizontal cable runs. Short **patch cords** then connect panel ports to switch ports.

- Keeps cabling organized and easy to re-patch.
- Horizontal runs are **punched down** into the back of the panel with a **punch-down tool**.

---

## Termination Standards: T568A vs. T568B

Two pin/pair color schemes define how the 8 conductors map to the RJ-45 pins:

| Cable type | Ends | Use |
|------------|------|-----|
| **Straight-through** | Same standard both ends (B–B) | Unlike devices: PC ↔ switch |
| **Crossover** | T568A one end, T568B the other | Like devices: switch ↔ switch (legacy) |
| **Rollover** | Reversed | Console cable to router/switch |

- Be **consistent** — use the same standard on both ends unless intentionally making a crossover.
- **Auto-MDIX** on modern switches auto-detects cable type, making crossover cables mostly unnecessary.

---

## Tools

| Tool | Purpose |
|------|---------|
| **Punch-down tool** | Seat wires into 110/66 blocks and patch panels |
| **Crimper** | Attach RJ-45 plugs to patch cables |
| **Cable tester** | Verify wiremap (opens/shorts/miswires) |
| **Toner probe** | Trace/identify a specific cable in a bundle |

---

## Key Idea

> Horizontal runs are **punched down** into patch panels; **patch cords** connect them to switches. Use **T568B** consistently (or A/B for a crossover), and remember **1U = 1.75 in**.

See also: [[02-01-structured-cabling]], [[05-04-cable-issues-and-tools]]
