// ── Top-up pool · brings modules 02, 05, 06, 07 to ~100 ─────────────────────

QUESTIONS["02"].push(
  {
    q: "Which document lists step-by-step instructions for a repeatable task like adding a new switch?",
    options: ["SOP", "SLA", "MSDS", "MOU"],
    answer: 0,
    explain: "A Standard Operating Procedure (SOP) documents repeatable tasks so they're done consistently and correctly.",
  },
  {
    q: "Which best describes a 'baseline configuration'?",
    options: [
      "A random config",
      "A known-good, standardized configuration used as a reference for devices",
      "A firewall log",
      "A DNS record",
    ],
    answer: 1,
    explain: "A baseline configuration is a standardized, approved template that devices are built from and compared against for drift.",
  },
  {
    q: "A 'single pane of glass' management tool provides...",
    options: [
      "One physical window",
      "A unified dashboard to monitor/manage many devices from one interface",
      "A type of fiber",
      "A patch panel",
    ],
    answer: 1,
    explain: "A single-pane-of-glass tool centralizes monitoring and management of diverse devices into one console.",
  },
  {
    q: "Which is the BEST reason to keep firmware updated on network devices?",
    options: [
      "To change the color",
      "To fix bugs and patch security vulnerabilities",
      "To reduce rack units",
      "To increase cable length",
    ],
    answer: 1,
    explain: "Firmware updates remediate bugs and security flaws; timely patching is a core hardening and reliability practice.",
  },
  {
    q: "What does a 'wiring closet' typically house?",
    options: [
      "Only cleaning supplies",
      "Patch panels, switches, and cross-connects for an area/floor (an IDF)",
      "The generator",
      "Employee desks",
    ],
    answer: 1,
    explain: "A wiring closet (IDF) contains the patch panels, switches, and cross-connects serving a floor or area, linking back to the MDF.",
  },
  {
    q: "Which cable color convention is commonly used to flag a crossover or special-purpose cable?",
    options: [
      "There is no convention; color is organizational only",
      "Red always means fiber",
      "Blue always means PoE",
      "Green always means 10G",
    ],
    answer: 0,
    explain: "Cable colors are an organizational convention (e.g., distinguishing voice/data/crossover); they don't affect performance and vary by site.",
  },
  {
    q: "Why label both ends of every cable?",
    options: [
      "To add weight",
      "So a cable can be traced and identified quickly from either end",
      "To encrypt it",
      "To increase speed",
    ],
    answer: 1,
    explain: "Labeling both ends lets a technician match and trace a cable from either termination, speeding moves and troubleshooting.",
  },
  {
    q: "A change that must be made immediately to resolve a critical outage is typically classified as a(n)...",
    options: ["Standard change", "Emergency change", "Normal change", "Cosmetic change"],
    answer: 1,
    explain: "An emergency change follows an expedited approval path to fix a critical issue quickly, still documented and reviewed after the fact.",
  },
  {
    q: "Which is an example of a 'standard change' in change management?",
    options: [
      "Replacing the core router architecture",
      "A pre-approved, low-risk, routine task like adding a known device to a switch port",
      "Migrating the whole data center",
      "Rewriting all firewall rules",
    ],
    answer: 1,
    explain: "Standard changes are low-risk, routine, and pre-approved, requiring less overhead than normal or emergency changes.",
  },
  {
    q: "Which best describes the purpose of an equipment lifecycle policy?",
    options: [
      "To keep devices forever",
      "To plan procurement, maintenance, and retirement/refresh of hardware",
      "To change IP addresses",
      "To disable logging",
    ],
    answer: 1,
    explain: "A lifecycle policy governs how equipment is acquired, maintained, and retired/refreshed, avoiding unsupported, failure-prone gear.",
  },
  {
    q: "A patch panel port that is punched down but not connected to a switch is...",
    options: [
      "Active",
      "Terminated but unused until a patch cord connects it",
      "A crossover",
      "A fiber uplink",
    ],
    answer: 1,
    explain: "The horizontal run is terminated on the panel, but the port is inactive until a patch cord links it to a switch port.",
  },
  {
    q: "Which is TRUE about vertical (backbone) vs horizontal cabling costs?",
    options: [
      "Horizontal is always fiber",
      "Backbone often uses fiber for distance/bandwidth; horizontal is usually copper to the desk",
      "They are identical",
      "Backbone is always wireless",
    ],
    answer: 1,
    explain: "Backbone runs (longer, higher-bandwidth) frequently use fiber, while horizontal runs to work areas are typically copper within 100 m.",
  },
  {
    q: "Which record helps correlate a new outage with something that recently changed?",
    options: ["The change log", "The DNS cache", "The ARP table", "The MAC table"],
    answer: 0,
    explain: "A change log/history lets troubleshooters link a new problem to a recent change — often the fastest route to root cause.",
  },
  {
    q: "What is the main purpose of asset tagging?",
    options: [
      "To decorate devices",
      "To uniquely identify and track each asset through its lifecycle",
      "To increase speed",
      "To assign VLANs",
    ],
    answer: 1,
    explain: "Asset tags uniquely identify devices for inventory, warranty, maintenance, and audit tracking across their lifecycle.",
  },
  {
    q: "Which is a benefit of documenting the native VLAN and trunk allowed-VLAN list?",
    options: [
      "It increases bandwidth",
      "It prevents mismatches and speeds troubleshooting of inter-switch links",
      "It encrypts the trunk",
      "It removes the need for STP",
    ],
    answer: 1,
    explain: "Documenting native/allowed VLANs on trunks prevents native-VLAN mismatches and clarifies which VLANs should traverse each link.",
  },
  {
    q: "Which is the correct sequence for a well-managed change?",
    options: [
      "Implement, then request approval",
      "Request → review/approve → schedule → implement → verify → document",
      "Implement and never document",
      "Document only if it fails",
    ],
    answer: 1,
    explain: "Proper change management flows from request through approval, scheduling, implementation, verification, and documentation.",
  }
);

QUESTIONS["05"].push(
  {
    q: "Which describes 'dispersion' in fiber optics?",
    options: [
      "Signal reflection back to the source",
      "Spreading of the light pulse over distance, limiting bandwidth/reach",
      "Copper crosstalk",
      "PoE loss",
    ],
    answer: 1,
    explain: "Dispersion spreads a light pulse as it travels, eventually causing pulses to overlap; single-mode fiber minimizes it for long distances.",
  },
  {
    q: "Which connector is associated with cable TV/coax (not Ethernet)?",
    options: ["RJ-45", "F-type", "LC", "SC"],
    answer: 1,
    explain: "F-type connectors terminate coax for cable TV/broadband; RJ-45 is twisted-pair Ethernet, and LC/SC are fiber.",
  },
  {
    q: "Which twisted-pair category is required for reliable 10GBASE-T at the full 100 m?",
    options: ["Cat 5e", "Cat 6", "Cat 6a", "Cat 3"],
    answer: 2,
    explain: "Cat 6a supports 10 Gbps to 100 m; Cat 6 only reaches 10 Gbps to about 55 m, and Cat 5e tops out at 1 Gbps.",
  },
  {
    q: "A fusion splice joins two fibers by...",
    options: [
      "Taping them together",
      "Fusing the glass cores with heat for a low-loss permanent joint",
      "Crimping an RJ-45",
      "Soldering copper",
    ],
    answer: 1,
    explain: "Fusion splicing melts and fuses fiber cores, producing a very low-loss, permanent joint (mechanical splices have higher loss).",
  },
  {
    q: "Which best describes 'MDI/MDI-X'?",
    options: [
      "Fiber connector types",
      "The pinout roles that determine whether a straight-through or crossover cable is needed",
      "PoE standards",
      "VLAN tags",
    ],
    answer: 1,
    explain: "MDI (end devices) and MDI-X (switches/hubs) define TX/RX pin roles; Auto-MDIX detects and adapts automatically.",
  },
  {
    q: "What is 'delay skew' in a copper cable?",
    options: [
      "The color order",
      "The difference in propagation time between pairs, which can impair high-speed links",
      "The PoE wattage",
      "The jacket rating",
    ],
    answer: 1,
    explain: "Delay skew is the timing difference between pairs; excessive skew (from uneven twist rates) degrades protocols that use all pairs (e.g., 1000BASE-T).",
  },
  {
    q: "Which tool measures the length of a cable and locates a break's distance?",
    options: [
      "TDR (time-domain reflectometer) for copper; OTDR for fiber",
      "A crimper",
      "A punch-down tool",
      "A label maker",
    ],
    answer: 0,
    explain: "A TDR (copper) or OTDR (fiber) sends a pulse and times reflections to measure length and pinpoint faults/breaks.",
  },
  {
    q: "Which best explains why 1000BASE-T uses all four pairs?",
    options: [
      "For PoE only",
      "To achieve 1 Gbps by transmitting simultaneously on all four pairs (bidirectional)",
      "To reduce cost",
      "For color coding",
    ],
    answer: 1,
    explain: "Gigabit Ethernet uses all four pairs bidirectionally with advanced encoding to reach 1 Gbps over Cat 5e/6.",
  },
  {
    q: "Which is a symptom of exceeding the 100 m copper limit?",
    options: [
      "Faster speeds",
      "Signal too weak/errored to establish a reliable link",
      "More VLANs",
      "Better PoE",
    ],
    answer: 1,
    explain: "Beyond 100 m, attenuation and timing issues make the link unreliable or fail; fiber or an intermediate switch is required.",
  },
  {
    q: "Which fiber polish type reduces back-reflection the most (angled end-face)?",
    options: ["PC", "UPC", "APC", "MDI"],
    answer: 2,
    explain: "APC (Angled Physical Contact) polishes the ferrule at an angle to minimize back-reflection; don't mix APC with UPC connectors.",
  },
  {
    q: "Which is TRUE about combining APC and UPC connectors?",
    options: [
      "They mate perfectly",
      "They should not be mixed — the mismatch causes high loss/reflection and can damage ferrules",
      "It improves performance",
      "It is required for 10G",
    ],
    answer: 1,
    explain: "APC (angled) and UPC (flat) end-faces don't mate properly, causing excessive loss/reflection and potential physical damage.",
  },
  {
    q: "Which is a reason to choose STP over UTP?",
    options: [
      "Lower cost",
      "A high-EMI environment where extra shielding reduces interference",
      "Longer distance than fiber",
      "It needs no grounding",
    ],
    answer: 1,
    explain: "STP's shielding helps in electrically noisy environments; it costs more, is stiffer, and requires proper grounding to be effective.",
  },
  {
    q: "Which describes a 'patch panel to patch panel' cross-connect cable?",
    options: [
      "A device-to-jack patch cord",
      "A cable joining two termination fields, used to interconnect distribution areas",
      "A fiber transceiver",
      "A console cable",
    ],
    answer: 1,
    explain: "Cross-connect cables join termination fields (e.g., between panels/blocks), letting technicians interconnect areas flexibly.",
  },
  {
    q: "What does 'PoE passthrough' mean on some switches/devices?",
    options: [
      "Blocking PoE",
      "A powered device that also forwards PoE power to a downstream device",
      "Converting fiber to copper",
      "Encrypting power",
    ],
    answer: 1,
    explain: "PoE passthrough lets a PoE-powered device (e.g., a small switch or AP) supply power onward to a downstream device.",
  },
  {
    q: "Which best describes 'bend-insensitive' fiber?",
    options: [
      "Fiber that can't carry data",
      "Fiber designed to tolerate tighter bends with less signal loss",
      "Copper cable",
      "A connector type",
    ],
    answer: 1,
    explain: "Bend-insensitive fiber is engineered to reduce macrobend loss when routed around tight corners, easing installation.",
  },
  {
    q: "Which measurement confirms a copper link meets its category performance (crosstalk, loss, etc.)?",
    options: [
      "A simple continuity test",
      "A certification test with a cable certifier",
      "A ping test",
      "A DNS lookup",
    ],
    answer: 1,
    explain: "A cable certifier runs standardized tests (NEXT, insertion loss, return loss, delay skew) to certify a link to its rated category.",
  }
);

QUESTIONS["06"].push(
  {
    q: "Which describes the 'hidden node' problem in Wi-Fi?",
    options: [
      "An SSID that is not broadcast",
      "Two clients that can reach the AP but not each other, causing collisions",
      "A rogue AP",
      "A disabled radio",
    ],
    answer: 1,
    explain: "Hidden nodes can't sense each other's transmissions (only the AP), leading to collisions; RTS/CTS helps mitigate it.",
  },
  {
    q: "RTS/CTS helps by...",
    options: [
      "Encrypting frames",
      "Reserving the medium before transmission to reduce collisions (helps with hidden nodes)",
      "Assigning IPs",
      "Boosting power",
    ],
    answer: 1,
    explain: "Request-to-Send/Clear-to-Send reserves airtime before a frame, reducing collisions from hidden nodes at the cost of overhead.",
  },
  {
    q: "Which band generally suffers less interference from legacy consumer devices?",
    options: ["2.4 GHz", "5 GHz", "900 MHz", "AM radio"],
    answer: 1,
    explain: "5 GHz has more channels and fewer common interferers than the crowded 2.4 GHz band (microwaves, Bluetooth, cordless phones).",
  },
  {
    q: "A 'thin' access point relies on a WLC for...",
    options: [
      "Nothing; it is standalone",
      "Configuration, RF management, and control-plane decisions",
      "Physical power only",
      "DNS resolution",
    ],
    answer: 1,
    explain: "Thin APs offload configuration and control (channel/power, roaming) to a wireless LAN controller, simplifying large deployments.",
  },
  {
    q: "Which is TRUE about a 'fat' (autonomous) access point?",
    options: [
      "It requires a WLC",
      "It operates independently with its own full configuration",
      "It has no radio",
      "It only does PoE",
    ],
    answer: 1,
    explain: "A fat/autonomous AP contains its full configuration and runs independently — fine for small sites but harder to manage at scale.",
  },
  {
    q: "Which describes 'roaming' in an ESS?",
    options: [
      "Changing the SSID",
      "A client moving between APs on the same SSID without losing the connection",
      "Switching to wired",
      "Disabling encryption",
    ],
    answer: 1,
    explain: "Roaming lets a client transition between APs sharing an SSID (an ESS) with minimal disruption; 802.11r speeds the handoff.",
  },
  {
    q: "Which regulatory concept limits how much power an AP may radiate?",
    options: ["EIRP limits", "MTU", "TTL", "MAC size"],
    answer: 0,
    explain: "Regulators cap EIRP (effective radiated power) per band/channel to limit interference and exposure.",
  },
  {
    q: "Which is a benefit of 6 GHz (Wi-Fi 6E)?",
    options: [
      "Longer range than 2.4 GHz",
      "Abundant clean spectrum and wide channels with less legacy interference",
      "It works through more walls",
      "It needs no encryption",
    ],
    answer: 1,
    explain: "The 6 GHz band adds lots of fresh spectrum and wide channels with minimal legacy device interference — great for high-density/high-throughput.",
  },
  {
    q: "Which attack floods the RF spectrum to deny wireless service?",
    options: ["Jamming", "Phishing", "SQL injection", "ARP spoofing"],
    answer: 0,
    explain: "RF jamming transmits noise to overwhelm the channel, denying wireless service; it's a physical-layer denial-of-service attack.",
  },
  {
    q: "Which is the best practice for the guest network's DNS/DHCP?",
    options: [
      "Share the corporate DHCP/DNS directly",
      "Use isolated/guest-scoped DHCP and DNS separate from internal systems",
      "Disable DHCP entirely",
      "Use static public IPs for guests",
    ],
    answer: 1,
    explain: "Guest networks should use isolated addressing/name services so guest devices can't reach or enumerate internal systems.",
  },
  {
    q: "Which describes 'MU-MIMO' vs 'SU-MIMO'?",
    options: [
      "MU serves multiple clients at once; SU serves one client at a time",
      "They are identical",
      "SU is newer",
      "MU disables antennas",
    ],
    answer: 0,
    explain: "Multi-User MIMO transmits to several clients simultaneously; Single-User MIMO uses multiple streams to one client at a time.",
  },
  {
    q: "Which is the safest authentication for a corporate WLAN with many users?",
    options: [
      "Open network",
      "WPA2/WPA3-Enterprise with 802.1X and per-user credentials",
      "WEP",
      "A single shared PSK posted on the wall",
    ],
    answer: 1,
    explain: "Enterprise (802.1X) gives each user unique credentials and easy revocation, far safer than a shared PSK or open/WEP.",
  },
  {
    q: "Which tool visually confirms coverage gaps after deployment?",
    options: [
      "A post-deployment survey heat map",
      "A crimper",
      "An OTDR",
      "A punch-down tool",
    ],
    answer: 0,
    explain: "A validation (post-deployment) survey produces a heat map confirming real-world coverage and revealing gaps to fix.",
  },
  {
    q: "Which describes 'airtime fairness'?",
    options: [
      "Giving slow clients unlimited airtime",
      "Preventing slow legacy clients from monopolizing airtime and dragging down faster clients",
      "Encrypting airtime",
      "Assigning channels",
    ],
    answer: 1,
    explain: "Airtime fairness allocates channel time so slow clients don't consume disproportionate airtime and starve faster ones.",
  },
  {
    q: "A directional antenna's coverage pattern is best described as...",
    options: [
      "A sphere in all directions",
      "A focused beam/lobe toward a target direction",
      "Random",
      "Only downward",
    ],
    answer: 1,
    explain: "Directional antennas concentrate energy into a beam toward a target, increasing gain/range for point-to-point or targeted coverage.",
  },
  {
    q: "Which is TRUE about 2.4 GHz channel width in crowded areas?",
    options: [
      "Use 40 MHz for best results",
      "Use 20 MHz channels (1/6/11) to avoid overlap and interference",
      "Bond all channels",
      "Width does not matter",
    ],
    answer: 1,
    explain: "In crowded 2.4 GHz, stick to 20 MHz on channels 1/6/11; wider (40 MHz) channels worsen overlap and interference.",
  },
  {
    q: "Which describes a 'lightweight' AP deployment advantage?",
    options: [
      "Each AP is configured by hand",
      "Central control (WLC) enables consistent config, coordinated RF, and easy scaling",
      "No monitoring",
      "No security",
    ],
    answer: 1,
    explain: "Controller-managed (lightweight) APs get consistent configuration, coordinated channel/power, and centralized monitoring — ideal at scale.",
  },
  {
    q: "Which authentication server protocol underpins WPA2/WPA3-Enterprise?",
    options: ["RADIUS", "SMTP", "SNMP", "TFTP"],
    answer: 0,
    explain: "802.1X (Enterprise) uses a RADIUS authentication server to validate each user's credentials.",
  }
);

QUESTIONS["07"].push(
  {
    q: "Which cloud model gives the customer the LEAST management responsibility?",
    options: ["IaaS", "PaaS", "SaaS", "On-prem"],
    answer: 2,
    explain: "SaaS delivers a finished application; the provider manages everything beneath it, leaving the customer only usage/config and access.",
  },
  {
    q: "Which is a characteristic of serverless (FaaS) computing?",
    options: [
      "You manage the OS and servers",
      "Code runs in response to events without managing servers, billed per execution",
      "It requires a physical server per function",
      "It cannot scale",
    ],
    answer: 1,
    explain: "Function as a Service runs event-triggered code without server management, scaling automatically and billing per invocation.",
  },
  {
    q: "Which best describes 'vertical scaling' (scaling up)?",
    options: [
      "Adding more instances",
      "Adding more resources (CPU/RAM) to an existing instance",
      "Deleting instances",
      "Encrypting data",
    ],
    answer: 1,
    explain: "Vertical scaling increases the size of a single instance (more CPU/RAM); horizontal scaling adds more instances.",
  },
  {
    q: "Which best describes 'horizontal scaling' (scaling out)?",
    options: [
      "Making one server bigger",
      "Adding more instances to share the load",
      "Reducing redundancy",
      "Disabling auto-scaling",
    ],
    answer: 1,
    explain: "Horizontal scaling adds more instances behind a load balancer, improving capacity and resilience — the cloud-native pattern.",
  },
  {
    q: "A cloud 'region' is...",
    options: [
      "A single server",
      "A geographic area containing one or more isolated availability zones",
      "A VLAN",
      "A DNS record",
    ],
    answer: 1,
    explain: "A region is a geographic location with multiple availability zones (isolated data centers) for resilience and low-latency locality.",
  },
  {
    q: "Which is a benefit of deploying across multiple availability zones?",
    options: [
      "Higher single-zone risk",
      "Resilience — an outage in one zone doesn't take down the application",
      "Lower security",
      "No need for backups",
    ],
    answer: 1,
    explain: "Spreading resources across AZs isolates failures so a single zone outage (power, hardware) doesn't cause total downtime.",
  },
  {
    q: "Which describes a 'lift and shift' cloud migration?",
    options: [
      "Rewriting apps as serverless",
      "Moving existing workloads to the cloud with minimal changes (often to IaaS VMs)",
      "Deleting the app",
      "Only using SaaS",
    ],
    answer: 1,
    explain: "Lift and shift (rehosting) moves apps to cloud IaaS largely as-is — fast, but may not fully exploit cloud-native features.",
  },
  {
    q: "Which secures traffic between an on-prem site and a cloud VPC over the Internet?",
    options: [
      "A site-to-site IPsec VPN",
      "Telnet",
      "An open port",
      "A hub",
    ],
    answer: 0,
    explain: "A site-to-site IPsec VPN builds an encrypted tunnel between the on-prem gateway and the cloud VPC gateway.",
  },
  {
    q: "Which cloud construct provides an isolated private network for your resources?",
    options: ["VPC/VNet", "SSID", "MAC", "TTL"],
    answer: 0,
    explain: "A Virtual Private Cloud (AWS) / Virtual Network (Azure) is a logically isolated network you define with subnets, routing, and security.",
  },
  {
    q: "A cloud security group / network security group primarily acts as...",
    options: [
      "A DNS server",
      "A virtual firewall controlling traffic to/from cloud instances",
      "A load balancer",
      "A backup tool",
    ],
    answer: 1,
    explain: "Security groups/NSGs are stateful virtual firewalls that filter inbound/outbound traffic for cloud instances/subnets.",
  },
  {
    q: "Which is TRUE about SaaS data responsibility?",
    options: [
      "The provider owns your data and access decisions",
      "You still own your data and must manage access/identity even though the app is managed",
      "Data needs no protection",
      "Access is automatic for everyone",
    ],
    answer: 1,
    explain: "Even in SaaS, the customer remains responsible for their data classification and for managing user access/identity.",
  },
  {
    q: "Which remote-access approach avoids installing client software for occasional web-app access?",
    options: [
      "Full client VPN",
      "Clientless SSL/TLS VPN (browser portal)",
      "Telnet",
      "A serial cable",
    ],
    answer: 1,
    explain: "A clientless SSL VPN lets users reach internal web apps through an HTTPS portal without installing a full VPN client.",
  },
  {
    q: "Which is a downside of multitenancy that customers should consider?",
    options: [
      "Dedicated hardware per tenant",
      "The 'noisy neighbor' effect and shared-infrastructure risk require isolation controls",
      "No cost savings",
      "It prevents scaling",
    ],
    answer: 1,
    explain: "Shared infrastructure can create noisy-neighbor performance impact and requires strong logical isolation between tenants.",
  },
  {
    q: "Which is the safest way to grant a cloud application access to resources?",
    options: [
      "Hard-code an admin password",
      "Use a scoped role/managed identity with least privilege",
      "Share the root account",
      "Disable authentication",
    ],
    answer: 1,
    explain: "Assigning a least-privilege role/managed identity avoids embedded credentials and limits what the app can do if compromised.",
  },
  {
    q: "Which describes 'auto-scaling group' behavior?",
    options: [
      "Fixed instance count always",
      "Automatically adds/removes instances based on demand metrics",
      "Deletes all instances nightly",
      "Encrypts the network",
    ],
    answer: 1,
    explain: "An auto-scaling group adjusts instance count using metrics (CPU, requests) to match demand and control cost.",
  },
  {
    q: "Which is a key benefit of containers for cloud deployment?",
    options: [
      "Each carries a full OS",
      "Lightweight, portable, and fast to start, packaging app + dependencies",
      "They cannot be orchestrated",
      "They require Type 1 hypervisors",
    ],
    answer: 1,
    explain: "Containers are lightweight and portable (share the host kernel), enabling fast, consistent deployment across environments.",
  },
  {
    q: "Which orchestrates containers at scale (deployment, scaling, healing)?",
    options: ["Kubernetes", "DNS", "STP", "OSPF"],
    answer: 0,
    explain: "Kubernetes automates deploying, scaling, self-healing, and networking of containerized workloads.",
  },
  {
    q: "Which describes 'egress cost' in public cloud?",
    options: [
      "Free unlimited transfers",
      "Charges for data transferred OUT of the cloud/region",
      "The cost of storage only",
      "The price of a VM",
    ],
    answer: 1,
    explain: "Cloud providers commonly charge for outbound (egress) data transfer, a factor in architecture and cost planning.",
  },
  {
    q: "Which is the BEST practice for cloud administrative accounts?",
    options: [
      "Use the root account daily",
      "Protect root, use least-privilege IAM roles, and enforce MFA",
      "Share one password",
      "Disable logging",
    ],
    answer: 1,
    explain: "Lock away the root/owner account, use scoped IAM roles with least privilege, and require MFA on all admin access.",
  },
  {
    q: "Which is a reason to use a dedicated interconnect (Direct Connect/ExpressRoute) over VPN?",
    options: [
      "Lower reliability",
      "More consistent bandwidth/latency and a private path off the public Internet",
      "No security needed",
      "It is always free",
    ],
    answer: 1,
    explain: "Dedicated interconnects offer predictable performance and a private path, at higher cost than an Internet VPN.",
  },
  {
    q: "Which cloud characteristic lets customers provision resources without human interaction?",
    options: [
      "On-demand self-service",
      "Measured service",
      "Resource pooling",
      "Multitenancy",
    ],
    answer: 0,
    explain: "On-demand self-service lets customers provision compute/storage automatically through a portal/API without provider staff.",
  },
  {
    q: "Which describes 'infrastructure drift'?",
    options: [
      "Cables moving",
      "Deployed infrastructure diverging from its defined (IaC) baseline over time",
      "A routing loop",
      "A DNS change",
    ],
    answer: 1,
    explain: "Drift is when live infrastructure no longer matches its declared configuration; IaC tooling detects and remediates it.",
  },
  {
    q: "Which is TRUE about VDI security?",
    options: [
      "Data lives on each endpoint",
      "Data stays centralized in the data center/cloud, reducing endpoint exposure",
      "It removes the need for access control",
      "It cannot be accessed remotely",
    ],
    answer: 1,
    explain: "VDI keeps data and processing centralized; lost/compromised endpoints hold little data, though access control still matters.",
  },
  {
    q: "Which is the primary purpose of a cloud load balancer's health checks?",
    options: [
      "To encrypt traffic",
      "To route requests only to healthy backend instances",
      "To assign DNS names",
      "To store logs",
    ],
    answer: 1,
    explain: "Health checks let the load balancer detect unhealthy instances and stop sending them traffic, improving availability.",
  },
  {
    q: "Which best describes 'zero trust network access' (ZTNA) for remote users?",
    options: [
      "Full network access after one login",
      "Per-application, continuously verified access based on identity and device posture",
      "No authentication",
      "Open VPN to everything",
    ],
    answer: 1,
    explain: "ZTNA grants least-privilege, per-app access with continuous verification, replacing broad VPN network access.",
  }
);
