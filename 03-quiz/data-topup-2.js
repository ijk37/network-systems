// ── Top-up pool 2 · brings modules 01, 08, 09, 10, 11, 12 to ~100 ───────────

QUESTIONS["01"].push(
  {
    q: "Which OSI layer would a proxy that filters URLs operate at?",
    options: ["Layer 2", "Layer 3", "Layer 4", "Layer 7"],
    answer: 3,
    explain: "URL/content filtering inspects application data, a Layer 7 (Application) function.",
  },
  {
    q: "Which best describes 'north-south' vs 'east-west' traffic?",
    options: [
      "North-south = between data centers; east-west = to the moon",
      "North-south = in/out of the data center; east-west = server-to-server within it",
      "They are the same",
      "East-west = Internet only",
    ],
    answer: 1,
    explain: "North-south traffic enters/leaves the data center; east-west flows between internal systems — relevant to segmentation design.",
  },
  {
    q: "A converged network carries which traffic types together?",
    options: [
      "Only data",
      "Data, voice, and video over one infrastructure",
      "Only voice",
      "Only management",
    ],
    answer: 1,
    explain: "A converged network runs data, voice (VoIP), and video over shared infrastructure, requiring QoS to protect real-time flows.",
  },
  {
    q: "Which device is BEST for connecting a home network to the ISP, doing NAT and Wi-Fi?",
    options: ["A hub", "A SOHO router (integrated router/switch/AP)", "A repeater", "A patch panel"],
    answer: 1,
    explain: "A SOHO router combines routing/NAT, a small switch, and often Wi-Fi to connect a home/small office to the ISP.",
  },
  {
    q: "Which statement about the TCP/IP Internet layer is correct?",
    options: [
      "It maps to OSI Layer 2",
      "It maps to OSI Layer 3 and handles IP addressing/routing",
      "It handles ports",
      "It places bits on the wire",
    ],
    answer: 1,
    explain: "The TCP/IP Internet layer corresponds to OSI Layer 3 (Network), providing IP addressing and routing.",
  },
  {
    q: "Which is the correct troubleshooting action when many users across sites lose access simultaneously?",
    options: [
      "Replace one user's NIC",
      "Suspect a shared cause (WAN link, core device, DNS, ISP) and investigate infrastructure",
      "Reboot one PC",
      "Re-crimp one cable",
    ],
    answer: 1,
    explain: "Wide, simultaneous impact points to shared infrastructure (core, WAN, DNS, ISP), not a single endpoint.",
  }
);

QUESTIONS["08"].push(
  {
    q: "How many usable hosts are in a /22 subnet?",
    options: ["510", "1022", "2046", "254"],
    answer: 1,
    explain: "/22 has 10 host bits: 2^10 = 1024, minus 2 = 1022 usable hosts.",
  }
);

QUESTIONS["09"].push(
  {
    q: "Which describes 'defense in depth' in one phrase?",
    options: [
      "One perfect control",
      "Multiple layered, diverse controls so one failure isn't catastrophic",
      "No controls",
      "Only encryption",
    ],
    answer: 1,
    explain: "Defense in depth layers controls (physical, network, host, app, data, policy) so a single failure doesn't expose the asset.",
  },
  {
    q: "A smurf attack is a form of...",
    options: [
      "Phishing",
      "DDoS using spoofed ICMP broadcasts to flood a victim",
      "Malware install",
      "Physical intrusion",
    ],
    answer: 1,
    explain: "A smurf attack spoofs the victim's address in ICMP echo requests sent to broadcast, amplifying replies to flood the victim.",
  },
  {
    q: "Which is an example of 'security through obscurity' (a weak sole control)?",
    options: [
      "Strong encryption",
      "Hiding an SSID or changing a default port and relying on that alone",
      "MFA",
      "Least privilege",
    ],
    answer: 1,
    explain: "Obscurity (hiding SSIDs, nonstandard ports) offers minor delay but is not real security; it must not replace strong controls.",
  },
  {
    q: "Which control category does encryption of data at rest represent?",
    options: [
      "Detective",
      "Preventive (protects confidentiality proactively)",
      "Corrective",
      "Physical",
    ],
    answer: 1,
    explain: "Encryption is a preventive control that proactively protects confidentiality if storage/media is accessed by unauthorized parties.",
  },
  {
    q: "A 'corrective' control...",
    options: [
      "Detects an event",
      "Restores systems/limits damage after an incident (e.g., restoring from backup)",
      "Prevents the event",
      "Is only physical",
    ],
    answer: 1,
    explain: "Corrective controls act after an incident to restore normal operation and limit damage (backups, patching, incident response).",
  },
  {
    q: "Which best describes a 'threat vector'?",
    options: [
      "A backup type",
      "The path or means by which an attacker gains access (e.g., phishing email, exposed RDP)",
      "A subnet",
      "A DNS record",
    ],
    answer: 1,
    explain: "A threat/attack vector is the route or method used to breach a system — email, web, removable media, exposed services, etc.",
  },
  {
    q: "Which reduces the attack surface of a server?",
    options: [
      "Enabling every service",
      "Disabling unused services/ports and removing unnecessary software (hardening)",
      "Sharing admin passwords",
      "Turning off patching",
    ],
    answer: 1,
    explain: "Hardening removes unneeded services, ports, accounts, and software, shrinking what an attacker can target.",
  },
  {
    q: "Which is a sign of a possible data-exfiltration attempt?",
    options: [
      "Normal baseline traffic",
      "Large or unusual outbound transfers to unknown destinations",
      "A successful backup",
      "A DNS cache hit",
    ],
    answer: 1,
    explain: "Unusual outbound volume/destinations can indicate exfiltration; egress filtering and monitoring/DLP help detect and stop it.",
  },
  {
    q: "Which practice most reduces the risk of stolen-laptop data exposure?",
    options: [
      "Longer passwords only",
      "Full-disk encryption",
      "Brighter screens",
      "Faster CPUs",
    ],
    answer: 1,
    explain: "Full-disk encryption renders data unreadable without the key, protecting confidentiality if the device is lost or stolen.",
  },
  {
    q: "Which is TRUE about the relationship between MFA and phishing-resistant authentication?",
    options: [
      "All MFA is equally phishing-resistant",
      "Hardware security keys (FIDO2) resist phishing better than SMS/OTP codes",
      "SMS is the strongest factor",
      "MFA increases phishing risk",
    ],
    answer: 1,
    explain: "FIDO2/hardware keys are phishing-resistant because they bind to the site; SMS/OTP can be phished or relayed, though still better than none.",
  },
  {
    q: "A 'security incident' is BEST defined as...",
    options: [
      "Any network change",
      "An event that actually or potentially compromises confidentiality, integrity, or availability",
      "A routine backup",
      "A DNS lookup",
    ],
    answer: 1,
    explain: "An incident is an event that harms or threatens the CIA of information/systems, triggering the incident response process.",
  },
  {
    q: "Which is the correct first phase of incident response?",
    options: [
      "Eradication",
      "Preparation",
      "Recovery",
      "Lessons learned",
    ],
    answer: 1,
    explain: "IR phases: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned. Preparation comes first.",
  },
  {
    q: "During incident response, 'containment' aims to...",
    options: [
      "Delete all logs",
      "Limit the spread/impact of the incident (e.g., isolate affected hosts)",
      "Ignore the incident",
      "Buy new hardware",
    ],
    answer: 1,
    explain: "Containment limits damage — isolating compromised systems/segments — before eradication and recovery.",
  },
  {
    q: "Which is a benefit of a security awareness phishing simulation program?",
    options: [
      "It removes all technical controls",
      "It measures and improves users' ability to recognize and report phishing",
      "It guarantees zero incidents",
      "It replaces backups",
    ],
    answer: 1,
    explain: "Simulated phishing trains and measures user behavior, reducing click rates and increasing reporting over time.",
  },
  {
    q: "Which describes 'least functionality'?",
    options: [
      "Enable everything by default",
      "Configure systems to provide only essential capabilities/services",
      "Remove all software",
      "Disable networking",
    ],
    answer: 1,
    explain: "Least functionality limits a system to only the services/features it needs, reducing the attack surface — a hardening principle.",
  },
  {
    q: "A backup that cannot be modified or deleted for a set period is called...",
    options: [
      "A differential backup",
      "An immutable backup",
      "A snapshot",
      "A mirror",
    ],
    answer: 1,
    explain: "Immutable backups can't be altered/deleted during a retention window, providing strong protection against ransomware tampering.",
  },
  {
    q: "Which is the strongest reason to segment critical systems (e.g., OT/ICS) from IT networks?",
    options: [
      "To increase broadcasts",
      "To contain threats and prevent IT compromises from reaching critical control systems",
      "To slow the network",
      "To share printers",
    ],
    answer: 1,
    explain: "Segmenting OT/ICS from IT limits lateral movement so an IT breach can't easily reach and disrupt critical control systems.",
  },
  {
    q: "Which best describes 'need to know'?",
    options: [
      "Everyone sees all data",
      "Access to specific information is granted only to those who require it for their role",
      "No one has access",
      "Access is permanent",
    ],
    answer: 1,
    explain: "Need-to-know restricts information access to those whose duties require it, complementing least privilege for confidentiality.",
  }
);

QUESTIONS["10"].push(
  {
    q: "Which describes an 'east-west' firewall/segmentation strategy?",
    options: [
      "Only filtering Internet traffic",
      "Controlling traffic between internal systems to limit lateral movement",
      "Blocking all outbound",
      "Encrypting Wi-Fi",
    ],
    answer: 1,
    explain: "East-west controls (internal segmentation/microsegmentation) restrict server-to-server traffic, containing lateral movement after a breach.",
  },
  {
    q: "A next-generation firewall's 'application awareness' allows it to...",
    options: [
      "Only match IP/port",
      "Identify and control specific applications regardless of port",
      "Assign IP addresses",
      "Replace DNS",
    ],
    answer: 1,
    explain: "App awareness lets an NGFW recognize applications (even on nonstandard ports) and apply policy per application/user.",
  },
  {
    q: "Which is TRUE about a host-based firewall?",
    options: [
      "It protects the whole network",
      "It runs on an individual host, filtering that host's traffic",
      "It replaces network firewalls",
      "It only does Wi-Fi",
    ],
    answer: 1,
    explain: "A host-based firewall filters traffic to/from a single host, complementing (not replacing) network firewalls in defense in depth.",
  },
  {
    q: "Which technology can automatically quarantine a noncompliant device onto a remediation VLAN?",
    options: ["NAC", "DNS", "NTP", "STP"],
    answer: 0,
    explain: "NAC can check device posture and place noncompliant devices into a restricted/remediation VLAN until they meet policy.",
  },
  {
    q: "Which describes 'privileged access management' (PAM)?",
    options: [
      "Giving everyone admin rights",
      "Controlling, monitoring, and time-limiting administrative/privileged accounts",
      "Disabling MFA",
      "A cabling standard",
    ],
    answer: 1,
    explain: "PAM secures privileged accounts with controls like vaulting, just-in-time access, session recording, and approval workflows.",
  },
  {
    q: "Which is the safest response to a switch port receiving unexpected BPDUs on an access port?",
    options: [
      "Ignore it",
      "BPDU Guard err-disables the port to block a rogue switch",
      "Open more ports",
      "Disable STP globally",
    ],
    answer: 1,
    explain: "BPDU Guard shuts (err-disables) a PortFast access port that receives BPDUs, preventing an unauthorized switch from affecting the topology.",
  },
  {
    q: "Which is a benefit of logging administrative actions (accounting)?",
    options: [
      "It slows the network",
      "It provides accountability and an audit trail for who did what and when",
      "It encrypts data",
      "It assigns IPs",
    ],
    answer: 1,
    explain: "Accounting/audit logs record administrative actions, supporting accountability, forensics, and compliance.",
  }
);

QUESTIONS["11"].push(
  {
    q: "Which QoS marking operates at Layer 2 within an 802.1Q tag?",
    options: ["DSCP", "CoS (802.1p)", "TTL", "MTU"],
    answer: 1,
    explain: "CoS (Class of Service, 802.1p) is a 3-bit priority in the 802.1Q tag (Layer 2); DSCP marks at Layer 3.",
  },
  {
    q: "Which describes 'jitter buffer'?",
    options: [
      "A firewall queue",
      "A buffer that smooths variable packet arrival for real-time audio/video",
      "A backup type",
      "A routing table",
    ],
    answer: 1,
    explain: "A jitter buffer temporarily holds arriving packets to play them out evenly, compensating for variable delay (jitter) in VoIP/video.",
  },
  {
    q: "Which is the correct definition of 'goodput'?",
    options: [
      "Total raw bits including overhead",
      "The useful application-layer throughput excluding overhead/retransmissions",
      "The theoretical bandwidth",
      "The latency",
    ],
    answer: 1,
    explain: "Goodput measures useful data delivered to the application, excluding protocol overhead and retransmissions — always ≤ throughput.",
  },
  {
    q: "Which redundancy protocol is an open-standard alternative to Cisco's HSRP?",
    options: ["VRRP", "OSPF", "RIP", "STP"],
    answer: 0,
    explain: "VRRP (Virtual Router Redundancy Protocol) is the open-standard FHRP comparable to Cisco's proprietary HSRP.",
  },
  {
    q: "Which is TRUE about RSTP vs classic STP?",
    options: [
      "RSTP is slower",
      "RSTP (802.1w) converges much faster than classic STP (802.1D)",
      "They are identical",
      "RSTP removes redundancy",
    ],
    answer: 1,
    explain: "Rapid Spanning Tree (802.1w) converges in seconds versus classic STP's ~30–50 s, reducing disruption after topology changes.",
  },
  {
    q: "Which describes 'active-active' load sharing across two firewalls?",
    options: [
      "One firewall idle",
      "Both firewalls process traffic simultaneously, improving throughput and providing failover",
      "No redundancy",
      "Encryption only",
    ],
    answer: 1,
    explain: "Active-active uses both units for traffic (better utilization/scale) while still failing over if one fails.",
  },
  {
    q: "Which metric would indicate microbursts causing intermittent drops despite low average utilization?",
    options: [
      "Average utilization only",
      "Output drops/queue depth spikes during brief high-rate bursts",
      "DNS TTL",
      "MAC table size",
    ],
    answer: 1,
    explain: "Microbursts are short traffic spikes that overflow buffers and cause drops even when average utilization looks low; watch queue/drop counters.",
  },
  {
    q: "Which best describes a 'warm site'?",
    options: [
      "Fully running with current data",
      "Equipped with hardware/connectivity but needing data restore/activation before use",
      "Just space and power",
      "A backup tape",
    ],
    answer: 1,
    explain: "A warm site has hardware and connectivity ready but requires loading recent data and activation — between hot and cold in cost/speed.",
  },
  {
    q: "Which is the primary purpose of a redundant array of independent disks in RAID 6?",
    options: [
      "Speed only",
      "Tolerating up to two simultaneous drive failures via double parity",
      "Encryption",
      "No redundancy",
    ],
    answer: 1,
    explain: "RAID 6 uses double distributed parity, tolerating two concurrent drive failures (needs 4+ drives) — more resilient than RAID 5.",
  },
  {
    q: "Which describes 'graceful degradation' in a resilient design?",
    options: [
      "Total failure on any fault",
      "Continuing to operate at reduced capacity when a component fails",
      "Ignoring failures",
      "Faster performance on failure",
    ],
    answer: 1,
    explain: "Graceful degradation means the system keeps functioning (perhaps slower/limited) when part of it fails, rather than a total outage.",
  },
  {
    q: "Which is the BEST way to validate a disaster recovery plan?",
    options: [
      "Assume it works",
      "Conduct periodic DR tests/tabletop exercises and real restore drills",
      "Read it once",
      "Delete old backups",
    ],
    answer: 1,
    explain: "Regular DR tests (tabletop and actual failover/restore) validate the plan, expose gaps, and confirm RTO/RPO are achievable.",
  },
  {
    q: "Which best explains why NTP accuracy matters for performance/security operations?",
    options: [
      "It speeds routing",
      "Synchronized clocks make logs correlatable and time-based auth/certs valid",
      "It assigns IPs",
      "It encrypts traffic",
    ],
    answer: 1,
    explain: "Accurate time (NTP) is essential for correlating logs across devices and for time-sensitive functions like Kerberos and certificates.",
  }
);

QUESTIONS["12"].push(
  {
    q: "Which WAN term describes committing to a minimum guaranteed rate while allowing bursts?",
    options: ["CIR (Committed Information Rate)", "TTL", "MTU", "SSID"],
    answer: 0,
    explain: "CIR is the guaranteed minimum throughput on some WAN services; traffic may burst above it when capacity allows, subject to policing.",
  },
  {
    q: "Which describes a 'stub network'?",
    options: [
      "A transit network for many routes",
      "A network with a single connection to the rest of the internetwork",
      "A full-mesh core",
      "A wireless LAN",
    ],
    answer: 1,
    explain: "A stub network has one exit path, so a single default/static route usually suffices instead of running a dynamic protocol.",
  },
  {
    q: "Which routing protocol converges fastest in a large enterprise using bandwidth as a metric?",
    options: ["RIP", "OSPF", "Static", "Default only"],
    answer: 1,
    explain: "OSPF (link-state) converges quickly and scales in large enterprises, using cost (based on bandwidth) rather than hop count.",
  },
  {
    q: "Which is TRUE about BGP path selection?",
    options: [
      "It always uses hop count",
      "It uses path attributes (AS-path length, local preference, etc.) to choose routes",
      "It uses only bandwidth",
      "It picks randomly",
    ],
    answer: 1,
    explain: "BGP is a path-vector protocol selecting routes by attributes like local preference, AS-path length, and MED — not simple hop count.",
  },
  {
    q: "Which technology allows a private site to reach the Internet using one public IP for many hosts?",
    options: ["PAT (NAT overload)", "STP", "VLAN", "OSPF"],
    answer: 0,
    explain: "PAT (Port Address Translation / NAT overload) maps many private hosts to one public IP using unique source ports.",
  },
  {
    q: "Which describes 'asymmetric routing'?",
    options: [
      "Traffic takes the same path both ways",
      "Traffic takes different paths for outbound vs return, which can break stateful devices",
      "A single link",
      "Encryption",
    ],
    answer: 1,
    explain: "Asymmetric routing sends outbound and return traffic over different paths, which can confuse stateful firewalls/NAT and cause drops.",
  },
  {
    q: "Which WAN option best suits a temporary site needing quick, flexible connectivity?",
    options: [
      "A buried fiber leased line (weeks to install)",
      "Cellular (4G/5G) wireless WAN",
      "A new SONET ring",
      "Frame Relay",
    ],
    answer: 1,
    explain: "Cellular wireless WAN deploys quickly without cabling, ideal for temporary sites, pop-ups, or failover.",
  },
  {
    q: "Which best describes 'MPLS L3VPN'?",
    options: [
      "A consumer Wi-Fi feature",
      "A provider service delivering Layer 3 VPN connectivity between customer sites over MPLS",
      "A cabling standard",
      "A DNS record",
    ],
    answer: 1,
    explain: "MPLS L3VPN lets a provider offer routed (Layer 3) VPN connectivity among a customer's sites with traffic separation and QoS.",
  },
  {
    q: "Which is the main advantage of dynamic routing over a large multihomed WAN?",
    options: [
      "No CPU usage",
      "Automatic failover and path selection as links/topology change",
      "It removes routers",
      "It disables redundancy",
    ],
    answer: 1,
    explain: "Dynamic protocols (e.g., BGP for multihoming) automatically reroute and select paths as links change, unlike brittle static routing.",
  },
  {
    q: "Which describes 'route poisoning' in distance-vector protocols?",
    options: [
      "Encrypting routes",
      "Advertising a failed route with an infinite metric to speed removal and prevent loops",
      "Adding VLANs",
      "Blocking DNS",
    ],
    answer: 1,
    explain: "Route poisoning marks a downed route as unreachable (infinite metric) so neighbors remove it quickly, helping prevent loops.",
  },
  {
    q: "Which is TRUE about split horizon?",
    options: [
      "It advertises a route back out the interface it was learned on",
      "It prevents advertising a route back out the interface it was learned on, reducing loops",
      "It encrypts updates",
      "It assigns IPs",
    ],
    answer: 1,
    explain: "Split horizon suppresses re-advertising a route out the interface it came from, a loop-prevention mechanism in distance-vector protocols.",
  },
  {
    q: "Which WAN connection provides symmetric, dedicated bandwidth with a strong SLA, suited to a data center?",
    options: [
      "Residential cable",
      "A dedicated fiber leased line / dedicated Internet access",
      "Dial-up",
      "Geostationary satellite",
    ],
    answer: 1,
    explain: "Dedicated fiber (leased line / DIA) gives symmetric, guaranteed bandwidth backed by an SLA — appropriate for data centers.",
  },
  {
    q: "Which best describes 'BGP peering'?",
    options: [
      "Two switches sharing a VLAN",
      "Two BGP routers (often in different ASes) forming a session to exchange routes",
      "A Wi-Fi handshake",
      "A DNS query",
    ],
    answer: 1,
    explain: "BGP peers establish a TCP session (port 179) to exchange routing/reachability information, typically between autonomous systems.",
  },
  {
    q: "Which is a reason enterprises still use MPLS despite SD-WAN growth?",
    options: [
      "It is the cheapest option",
      "Predictable performance and strong QoS/SLA for critical traffic",
      "It requires no provider",
      "It has no cost",
    ],
    answer: 1,
    explain: "MPLS offers consistent latency and enforceable QoS/SLA; many enterprises keep it for critical traffic while adding SD-WAN/broadband.",
  },
  {
    q: "Which describes the role of a 'CE' router in a provider WAN service?",
    options: [
      "Customer Edge router at the customer site connecting to the provider",
      "The core Internet router",
      "A DNS server",
      "A wireless AP",
    ],
    answer: 0,
    explain: "The CE (Customer Edge) router sits at the customer premises and connects to the provider's PE (Provider Edge) router.",
  },
  {
    q: "Which is TRUE about latency vs bandwidth for a WAN application like a database replication link?",
    options: [
      "Only bandwidth matters",
      "Both matter — high latency can throttle throughput even on a high-bandwidth link",
      "Latency never matters",
      "Bandwidth never matters",
    ],
    answer: 1,
    explain: "High latency limits effective throughput (especially for chatty/synchronous protocols) even when raw bandwidth is ample; both must be considered.",
  },
  {
    q: "Which best describes 'out-of-band' WAN management for remote routers?",
    options: [
      "Managing over the same WAN link",
      "A separate path (e.g., cellular modem) to reach the device if the primary WAN is down",
      "Wireless client access",
      "A DNS record",
    ],
    answer: 1,
    explain: "Out-of-band management (often via a cellular/console path) lets admins reach a remote router even when its primary WAN link fails.",
  }
);
