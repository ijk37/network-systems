# 06-02: Frequencies, Channels & Antennas

## The Two Main Bands

| | **2.4 GHz** | **5 GHz** |
|---|-------------|-----------|
| Range | Longer, better penetration | Shorter |
| Speed | Lower | Higher |
| Channels | Few (crowded) | Many (cleaner) |
| Interference | High (microwaves, Bluetooth, cordless phones) | Lower |

**Wi-Fi 6E** adds the **6 GHz** band for even more clean spectrum.

---

## Channels

- In **2.4 GHz**, the only **non-overlapping** 20 MHz channels are **1, 6, and 11**. Using others causes co-channel/adjacent-channel interference.
- **5 GHz** has many non-overlapping channels, allowing more APs and wider (channel-bonded) channels.

### Channel bonding
Combining channels (40/80/160 MHz) increases speed but consumes more spectrum — practical mainly in 5/6 GHz; it worsens congestion in 2.4 GHz.

---

## Antennas

| Type | Pattern | Use |
|------|---------|-----|
| **Omnidirectional** | All directions | General coverage |
| **Directional (Yagi, panel, parabolic)** | Focused beam | Point-to-point links, extended range |

Higher **gain** = more focused/farther signal.

---

## Signal Quality

- **RSSI** — received signal strength.
- **SNR** (signal-to-noise ratio) — higher is better; low SNR forces lower data rates, retransmissions, and drops.
- Signal weakens with distance (**path loss**) and is absorbed/reflected by walls and objects.

---

## Key Idea

> **2.4 GHz** = range but crowded (use **channels 1/6/11**); **5/6 GHz** = speed and clean channels. Use **directional antennas** for point-to-point, and design for good **SNR**.

See also: [[06-01-wireless-standards]], [[06-04-wireless-design]]
