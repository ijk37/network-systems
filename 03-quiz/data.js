// ============================================================================
//  Network+ Quiz Data — CompTIA Network+ Guide to Networks, 9th Edition
//  data.js  →  TOPICS list + chapter modules 01–06
//  data-extra.js →  chapter modules 07–12
//  data-mixed.js →  5 final mixed quizzes
// ============================================================================

const TOPICS = [
  { id: "01", title: "Introduction to Networking" },
  { id: "02", title: "Infrastructure & Documentation" },
  { id: "03", title: "Addressing" },
  { id: "04", title: "Network Protocols" },
  { id: "05", title: "Cabling" },
  { id: "06", title: "Wireless Networking" },
  { id: "07", title: "Cloud Computing & Remote Access" },
  { id: "08", title: "Subnets & VLANs" },
  { id: "09", title: "Network Risk Management" },
  { id: "10", title: "Security in Network Design" },
  { id: "11", title: "Network Performance & Recovery" },
  { id: "12", title: "Wide Area Networks" },
  { id: "mixed-1", title: "Final Mixed Quiz 1" },
  { id: "mixed-2", title: "Final Mixed Quiz 2" },
  { id: "mixed-3", title: "Final Mixed Quiz 3" },
  { id: "mixed-4", title: "Final Mixed Quiz 4" },
  { id: "mixed-5", title: "Final Mixed Quiz 5" },
];

const QUESTIONS = {};

// ── Module 01 — Introduction to Networking (40) ─────────────────────────────
QUESTIONS["01"] = [
  {
    q: "In a peer-to-peer network, how are resources managed?",
    options: [
      "A central server controls all resources and authentication",
      "Each computer manages its own resources and can share them directly with others",
      "A domain controller assigns permissions to every device",
      "Resources are managed only by the ISP",
    ],
    answer: 1,
    explain: "In peer-to-peer (P2P) networks there is no central authority — each host manages its own shared resources and security. This is simple and cheap but does not scale or centralize control like client-server does.",
  },
  {
    q: "What is the defining characteristic of a client-server network?",
    options: [
      "Every computer has equal status",
      "Resources are managed centrally by a network operating system (NOS) on a server",
      "It cannot use the Internet",
      "It requires no configuration",
    ],
    answer: 1,
    explain: "A client-server network centralizes management of resources and users on servers running a NOS (e.g., Windows Server). It scales better and centralizes security/backup compared to peer-to-peer.",
  },
  {
    q: "Which term describes how the parts of a network physically or logically fit together?",
    options: ["Protocol", "Topology", "Bandwidth", "Encapsulation"],
    answer: 1,
    explain: "Topology describes how parts of a whole work together. Physical topology refers to hardware/cabling layout; logical topology refers to how software controls access to network resources.",
  },
  {
    q: "How many layers does the OSI model have?",
    options: ["4", "5", "7", "8"],
    answer: 2,
    explain: "The OSI (Open Systems Interconnection) model has seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.",
  },
  {
    q: "Which OSI layer is responsible for logical addressing and routing between networks?",
    options: ["Layer 2 – Data Link", "Layer 3 – Network", "Layer 4 – Transport", "Layer 7 – Application"],
    answer: 1,
    explain: "Layer 3 (Network) handles logical (IP) addressing and routing of packets between different networks. Routers operate primarily at Layer 3.",
  },
  {
    q: "At which OSI layer do MAC addresses and switches operate?",
    options: ["Layer 1 – Physical", "Layer 2 – Data Link", "Layer 3 – Network", "Layer 5 – Session"],
    answer: 1,
    explain: "The Data Link layer (Layer 2) uses physical MAC addresses and frames. Switches forward frames based on MAC addresses at Layer 2.",
  },
  {
    q: "Which OSI layer is responsible for reliable delivery, segmentation, and port numbers?",
    options: ["Network", "Transport", "Session", "Presentation"],
    answer: 1,
    explain: "The Transport layer (Layer 4) segments data, uses port numbers to identify applications, and provides reliability (TCP) or speed (UDP).",
  },
  {
    q: "What is the correct order of the OSI layers from Layer 1 to Layer 7?",
    options: [
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Application, Presentation, Session, Transport, Network, Data Link, Physical",
      "Physical, Network, Data Link, Transport, Application, Session, Presentation",
      "Data Link, Physical, Network, Session, Transport, Application, Presentation",
    ],
    answer: 0,
    explain: "Bottom (1) to top (7): Physical, Data Link, Network, Transport, Session, Presentation, Application. A common mnemonic is 'Please Do Not Throw Sausage Pizza Away.'",
  },
  {
    q: "Data at the Transport layer is referred to as a...",
    options: ["Frame", "Packet", "Segment (or datagram)", "Bit"],
    answer: 2,
    explain: "PDUs by layer: Transport = segment (TCP) / datagram (UDP), Network = packet, Data Link = frame, Physical = bits.",
  },
  {
    q: "Data at the Network layer is referred to as a...",
    options: ["Segment", "Packet", "Frame", "Bit"],
    answer: 1,
    explain: "At the Network layer (Layer 3), the protocol data unit is called a packet. The Network layer adds the source and destination IP addresses.",
  },
  {
    q: "Which device operates at Layer 1 and simply repeats incoming signals out all ports?",
    options: ["Switch", "Router", "Hub", "Firewall"],
    answer: 2,
    explain: "A hub is a Layer 1 device that regenerates and repeats a signal out all ports, creating a single collision domain. Switches (Layer 2) largely replaced hubs.",
  },
  {
    q: "Which of the following is a client-server application protocol used for web browsing?",
    options: ["SMTP", "HTTP", "FTP", "SNMP"],
    answer: 1,
    explain: "HTTP (Hypertext Transfer Protocol) is the client-server protocol used by browsers to request web pages from web servers.",
  },
  {
    q: "In the seven-step CompTIA troubleshooting model, what is the FIRST step?",
    options: [
      "Establish a theory of probable cause",
      "Identify the problem",
      "Implement the solution",
      "Document findings",
    ],
    answer: 1,
    explain: "The model is: 1) Identify the problem, 2) Establish a theory of probable cause, 3) Test the theory, 4) Establish a plan of action, 5) Implement the solution, 6) Verify full functionality, 7) Document findings.",
  },
  {
    q: "In the troubleshooting model, what is the LAST step?",
    options: [
      "Verify full system functionality",
      "Document findings, actions, and outcomes",
      "Establish a plan of action",
      "Escalate to a vendor",
    ],
    answer: 1,
    explain: "The final step is to document findings, actions, and outcomes — creating a record that helps with future troubleshooting and knowledge sharing.",
  },
  {
    q: "What does a NIC (Network Interface Card) provide to a host?",
    options: [
      "A physical and data-link connection to the network with a MAC address",
      "Only IP routing capabilities",
      "DNS name resolution",
      "Power over Ethernet to other devices",
    ],
    answer: 0,
    explain: "A NIC gives a host its physical (Layer 1) connection and its burned-in MAC address (Layer 2). It's the endpoint's interface to the network medium.",
  },
  {
    q: "In a physical star topology, all devices connect to a...",
    options: ["Single shared bus cable", "Central connectivity device such as a switch", "Ring of neighboring nodes", "Wireless mesh"],
    answer: 1,
    explain: "In a star topology every node connects to a central device (typically a switch). It's the most common LAN topology because a single cable failure affects only one node.",
  },
  {
    q: "Which topology connects each node to the next, forming a closed loop?",
    options: ["Star", "Bus", "Ring", "Mesh"],
    answer: 2,
    explain: "In a ring topology, each device connects to two others forming a circle; data travels around the ring. Legacy Token Ring and FDDI used ring topologies.",
  },
  {
    q: "In a full mesh topology with 5 nodes, roughly what is the advantage?",
    options: [
      "Lowest possible cost",
      "Every node has a direct link to every other node, giving high redundancy",
      "It uses a single cable",
      "It requires no switches at all",
    ],
    answer: 1,
    explain: "A full mesh directly connects every node to every other node, maximizing redundancy and fault tolerance — at the cost of many links and higher expense. It's common in WAN cores.",
  },
  {
    q: "What is the primary role of a router in a network?",
    options: [
      "To forward frames within the same LAN based on MAC address",
      "To connect different networks and forward packets between them using IP addresses",
      "To amplify wireless signals",
      "To assign MAC addresses to hosts",
    ],
    answer: 1,
    explain: "A router operates at Layer 3, connecting separate networks (e.g., a LAN to the Internet) and forwarding packets between them based on destination IP addresses.",
  },
  {
    q: "Which OSI layer handles translation, encryption, and compression of data formats?",
    options: ["Session", "Presentation", "Application", "Transport"],
    answer: 1,
    explain: "The Presentation layer (Layer 6) translates data formats, and handles encryption/decryption and compression so the Application layer can use the data.",
  },
  {
    q: "Which OSI layer establishes, maintains, and tears down sessions between applications?",
    options: ["Transport", "Session", "Presentation", "Network"],
    answer: 1,
    explain: "The Session layer (Layer 5) sets up, manages, and terminates communication sessions (dialogs) between applications.",
  },
  {
    q: "A collection of two or more computers that can communicate and share resources is best described as a...",
    options: ["Protocol", "Network", "Topology", "Domain"],
    answer: 1,
    explain: "A network is a group of two or more interconnected devices that communicate and share resources over a medium.",
  },
  {
    q: "Which of these is an example of a network operating system (NOS)?",
    options: ["Microsoft Word", "Windows Server / Linux server distributions", "Notepad", "A web browser"],
    answer: 1,
    explain: "A NOS controls access to the entire network and its resources. Examples include Windows Server and Linux server distributions. A NOS is required for client-server models.",
  },
  {
    q: "The process of adding headers (and a trailer) as data moves down the OSI stack is called...",
    options: ["Decapsulation", "Encapsulation", "Fragmentation", "Modulation"],
    answer: 1,
    explain: "Encapsulation is wrapping payload with each layer's header (and the Data Link trailer) as it moves down the stack. The receiving host reverses this via decapsulation.",
  },
  {
    q: "Which pair of OSI layers is most associated with the physical transmission of bits and the NIC hardware?",
    options: ["Layers 1 and 2", "Layers 3 and 4", "Layers 5 and 6", "Layers 6 and 7"],
    answer: 0,
    explain: "The Physical layer (1) transmits raw bits on the medium and the Data Link layer (2) frames them; both are implemented largely in the NIC hardware and drivers.",
  },
  {
    q: "What is the main safety reason to use an ESD (electrostatic discharge) strap when working inside a computer?",
    options: [
      "To increase network speed",
      "To prevent static electricity from damaging sensitive components",
      "To ground the network cable",
      "To boost Wi-Fi signal",
    ],
    answer: 1,
    explain: "An ESD strap safely bleeds off static charge from your body to prevent electrostatic discharge that can destroy sensitive electronic components.",
  },
  {
    q: "Which document lists the maximum safe exposure and handling information for a chemical or hardware substance?",
    options: ["SLA", "MSDS/SDS", "MOU", "SOW"],
    answer: 1,
    explain: "An MSDS/SDS (Material/Safety Data Sheet) provides safety, handling, and disposal information for hazardous materials such as toner or batteries.",
  },
  {
    q: "A switch forwards traffic based on what type of address?",
    options: ["IP address", "MAC address", "Port number", "Domain name"],
    answer: 1,
    explain: "A Layer 2 switch builds a MAC address table and forwards frames only out the port associated with the destination MAC address, reducing collisions.",
  },
  {
    q: "Which statement about broadcast domains and switches vs routers is correct?",
    options: [
      "Switches break up broadcast domains by default",
      "Routers break up broadcast domains; switches do not (each switch is one broadcast domain by default)",
      "Hubs break up broadcast domains",
      "Neither switches nor routers affect broadcast domains",
    ],
    answer: 1,
    explain: "By default a switch is a single broadcast domain (though VLANs can segment it). Routers do not forward broadcasts, so they separate broadcast domains.",
  },
  {
    q: "Which of the following best describes a protocol?",
    options: [
      "A physical cable type",
      "A set of rules governing how devices communicate",
      "A brand of router",
      "A type of MAC address",
    ],
    answer: 1,
    explain: "A protocol is an agreed-upon set of rules for formatting, transmitting, and processing data so that different devices can communicate reliably.",
  },
  {
    q: "In the OSI model, which layer is closest to the end user?",
    options: ["Physical", "Transport", "Application", "Data Link"],
    answer: 2,
    explain: "Layer 7 (Application) is closest to the user — it provides the interface and services (like HTTP, SMTP, DNS) that applications use to access the network.",
  },
  {
    q: "What is a MAN (Metropolitan Area Network)?",
    options: [
      "A network within a single room",
      "A network that spans a city or large campus, larger than a LAN but smaller than a WAN",
      "A global network of networks",
      "A wireless personal network",
    ],
    answer: 1,
    explain: "A MAN spans a metropolitan area such as a city — larger than a LAN (single building/campus) but smaller than a WAN (which spans large geographic distances).",
  },
  {
    q: "A PAN (Personal Area Network) most commonly uses which technology?",
    options: ["Fiber optics", "Bluetooth", "Satellite", "Frame Relay"],
    answer: 1,
    explain: "A PAN interconnects devices around one person over a very short range — Bluetooth is the classic example (headsets, keyboards, phones).",
  },
  {
    q: "Which troubleshooting step comes immediately after 'Test the theory to determine cause'?",
    options: [
      "Identify the problem",
      "Establish a plan of action to resolve the problem",
      "Document findings",
      "Verify full system functionality",
    ],
    answer: 1,
    explain: "After testing (and confirming) the theory, you establish a plan of action to resolve the problem and identify potential effects before implementing.",
  },
  {
    q: "When establishing a theory of probable cause, a good practice is to...",
    options: [
      "Immediately replace all hardware",
      "Question the obvious and consider multiple approaches (top-to-bottom or bottom-to-top of the OSI model)",
      "Skip straight to documentation",
      "Reboot every device on the network",
    ],
    answer: 1,
    explain: "Questioning the obvious and using the OSI model (top-down or bottom-up) helps form efficient theories. You may also research symptoms internally and externally.",
  },
  {
    q: "Which layer's PDU is a 'frame' and includes both a header and a trailer?",
    options: ["Network", "Transport", "Data Link", "Session"],
    answer: 2,
    explain: "The Data Link layer (Layer 2) encapsulates packets into frames, adding a header and a trailer (the trailer typically holds an FCS for error checking).",
  },
  {
    q: "Which of the following is NOT a benefit of the client-server model over peer-to-peer?",
    options: [
      "Centralized user authentication",
      "Easier centralized backups",
      "Lower cost and zero configuration for tiny networks",
      "Better scalability for large organizations",
    ],
    answer: 2,
    explain: "Low cost and minimal configuration are advantages of PEER-TO-PEER, not client-server. Client-server wins on centralized security, backups, and scalability but costs more.",
  },
  {
    q: "Which OSI layer would you troubleshoot first if a cable is unplugged or a port is physically dead?",
    options: ["Layer 7 – Application", "Layer 1 – Physical", "Layer 4 – Transport", "Layer 3 – Network"],
    answer: 1,
    explain: "Cabling, connectors, and link/port status are Layer 1 (Physical) issues. Bottom-up troubleshooting starts here, since higher layers can't work without a physical link.",
  },
  {
    q: "The TCP/IP model condenses the OSI's Application, Presentation, and Session layers into a single layer called the...",
    options: ["Internet layer", "Application layer", "Link layer", "Transport layer"],
    answer: 1,
    explain: "The four-layer TCP/IP model merges OSI Layers 5–7 into one Application layer, and OSI Layers 1–2 into a Link (Network Access) layer, keeping Transport and Internet (Network) distinct.",
  },
  {
    q: "Which best describes a LAN (Local Area Network)?",
    options: [
      "A network spanning multiple cities",
      "A network confined to a small area such as a building or campus, usually privately owned",
      "A global network of networks",
      "A single point-to-point WAN link",
    ],
    answer: 1,
    explain: "A LAN covers a limited area (room, building, or campus) and is typically privately owned and administered — contrasted with a WAN, which spans large distances via service providers.",
  },
];
