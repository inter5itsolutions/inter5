
export const STATS = [
  { value: "$2.17B",  label: "Nigeria IT Market (2024)" },
  { value: "13.18%",  label: "Market CAGR to 2029" },
  { value: "3,759",   label: "Avg weekly cyber attacks per Nigerian org" },
  { value: "60%",     label: "Nigerian orgs hit by cyber incidents" },
];


export const SITE = {
  name: "Inter5 IT Solutions",
  shortName: "Inter5",
  logoText: "I5", // Fallback text if image not available
  logoImage: "/inter5_logo.png", // Add your logo path here
  description: "Enterprise-grade IT solutions for Nigerian SMEs",
  phone1: "+234 123 456 7890",
  // ... other site config
};

export const SERVICES = [
  {
    id:          "managed-it",
    icon:        "🖥️",
    title:       "Managed IT Services",
    slug:        "managedit",
    tagline:     "Your IT department without the overhead.",
    description: "We proactively monitor, maintain, and optimise your IT infrastructure, ensuring peak performance and reliable support for your business operations.",
    features:    ["Microsoft 365 Management", "ESET Endpoint Security", "Veeam-Powered Backup", "24/7 Helpdesk Support", "Monthly IT Health Report", "On-site & Remote Support"],
    tiers: [
      { name: "Starter",  target: "1 - 10 staff",   price: "₦120,000", period: "/mo" },
      { name: "Growth",   target: "11 - 50 staff",  price: "₦200,000", period: "/mo" },
      { name: "Scale",    target: "51 - 200 staff", price: "₦300,000", period: "/mo" },
    ],
    color: "from-navy-700 to-navy-900",
    accent: "#C8960C",
  },
  {
    id:          "cybershield",
    icon:        "🛡️",
    title:       "CyberShield",
    slug:        "cybershield",
    tagline:     "World-class security. SME-accessible pricing.",
    description: "A dedicated managed security service for Nigerian industrial SMEs built on Microsoft Azure, ESET, and deep cybersecurity expertise.",
    features:    ["Cybersecurity Risk Audit", "Azure Cloud Management", "Identity & Access Management", "ESET Managed Endpoint Security", "Security Awareness Training", "NDPA Compliance Advisory"],
    tiers: [
      { name: "Essentials", target: "Basic protection",  price: "₦200,000", period: "/mo" },
      { name: "Advanced",   target: "Full MSSP coverage", price: "₦450,000", period: "/mo" },
    ],
    color: "from-gold-600 to-amber-900",
    accent: "#C8960C",
  },
  {
    id:          "bizshield",
    icon:        "☁️",
    title:       "BizShield",
    slug:        "bizshield",
    tagline:     "Recover in hours, not weeks.",
    description: "Veeam-powered backup and disaster recovery packaged into an affordable monthly service so your business survives ransomware, power failures, and data loss.",
    features:    ["Automated Daily Backups", "Off-site Cloud Storage", "Monthly Recovery Testing", "Written Business Continuity Plan", "Ransomware Protection (Immutable)", "Guaranteed Recovery Time"],
    tiers: [
      { name: "Protect",   target: "1 - 20 staff",   price: "₦120,000", period: "/mo" },
      { name: "Recover",   target: "21 - 80 staff",  price: "₦250,000", period: "/mo" },
      { name: "Resilient", target: "81 - 200 staff", price: "₦600,000", period: "/mo" },
    ],
    color: "from-slate-700 to-slate-900",
    accent: "#C8960C",
  },
  {
    id:          "securelearn",
    icon:        "🎓",
    title:       "SecureLearn",
    slug:        "#securelearn",
    tagline:     "Train your team. Close the human gap.",
    description: "Structured security awareness training that turns your staff from your biggest vulnerability into your first line of defence.",
    features:    ["Phishing Recognition Workshops", "Password Hygiene Training", "Incident Reporting Drills", "NDPA Compliance Briefings", "Onsite & Virtual Delivery", "Certificates of Completion"],
    tiers: [
      { name: "Session",   target: "Up to 20 staff", price: "₦150,000", period: "/session" },
      { name: "Programme", target: "Annual plan",    price: "₦800,000", period: "/year" },
    ],
    color: "from-navy-600 to-slate-800",
    accent: "#C8960C",
  },
];

export const PRODUCTS = [
  {
    category: "Cloud & Productivity",
    icon: "☁️",
    items: [
      { name: "Microsoft 365 Business", desc: "Email, Teams, SharePoint, OneDrive — fully managed for your team." },
      { name: "Microsoft Azure",        desc: "Cloud infrastructure, identity management, and security operations." },
      { name: "Microsoft Dynamics 365", desc: "Business automation and ERP tailored for Nigerian operations." },
      { name: "Microsoft Copilot",      desc: "AI-powered productivity — deployed securely within NDPA compliance." },
    ],
  },
  {
    category: "Security",
    icon: "🔐",
    items: [
      { name: "ESET Endpoint Security", desc: "Enterprise-grade antivirus, threat detection, and device management." },
      { name: "Microsoft Defender",     desc: "Cloud-native threat protection across all endpoints and identities." },
      { name: "Azure Active Directory", desc: "Identity and access management — who can access what, and when." },
    ],
  },
  {
    category: "Backup & Recovery",
    icon: "💾",
    items: [
      { name: "Veeam Backup & Replication", desc: "Immutable backups that ransomware cannot encrypt or delete." },
      { name: "Veeam Data Cloud",           desc: "Secure off-site cloud storage with verified monthly recovery tests." },
      { name: "Azure Backup",               desc: "Native cloud backup for Azure-hosted workloads and databases." },
    ],
  },
  {
    category: "Hardware",
    icon: "🖥️",
    items: [
      { name: "Lenovo Business Devices",  desc: "ThinkPad, ThinkStation, and server hardware — sourced and configured." },
      { name: "Network Infrastructure",   desc: "Switches, routers, firewalls, and structured cabling solutions." },
    ],
  },
];

export const PARTNERS = [
  { name: "Microsoft", abbr: "MS" },
  { name: "Veeam",     abbr: "VM" },
  { name: "ESET",      abbr: "ES" },
  { name: "Lenovo",    abbr: "LV" },
];

export const TEAM = [
  {
    name:  "Yusuf — CTO",
    title: "Chief Technology Officer",
    bio:   "MSc Cybersecurity (University of Salford, Distinction). Azure Administrator (AZ-104), Identity & Access (SC-300), CompTIA Security+. 10+ years in IT infrastructure and cloud security.",
    creds: ["AZ-104", "SC-300", "Security+"],
  },
];

export const SECTORS = [
  { icon: "⚙️",  name: "Manufacturing",       desc: "Protecting production systems, ERP data, and supply-chain infrastructure." },
  { icon: "🛢️", name: "Oil & Gas",            desc: "Securing field operations, pipeline systems, and indigenous operator IT." },
  { icon: "🏗️", name: "Construction",         desc: "BIM file backup, project document protection, and site connectivity." },
  { icon: "⚖️",  name: "Professional Services",desc: "Data confidentiality, client records, and NDPA compliance for law and accounting firms." },
  { icon: "🏥",  name: "Healthcare",           desc: "Patient record protection and disaster recovery for clinics and diagnostic centres." },
  { icon: "💳",  name: "Fintech & Startups",   desc: "CBN-compliant cybersecurity frameworks and cloud security for licensed fintechs." },
];

export const TESTIMONIALS = [
  {
    quote:  "Inter5 gave us something no other IT company had offered a tested disaster recovery plan and a team that picked up the phone when we needed them.",
    author: "Head of IT, Manufacturing Company, Lagos",
    sector: "Manufacturing",
  },
  {
    quote:  "Their NDPA compliance advisory saved us months of uncertainty. They understand both the technology and the Nigerian regulatory environment.",
    author: "Managing Partner, Professional Services Firm",
    sector: "Professional Services",
  },
  {
    quote:  "Inter5 gave us something no other IT company had offered a tested disaster recovery plan and a team that picked up the phone when we needed them.",
    author: "Head of IT, Manufacturing Company, Lagos",
    sector: "Manufacturing",
  },
  {
    quote:  "Their NDPA compliance advisory saved us months of uncertainty. They understand both the technology and the Nigerian regulatory environment.",
    author: "Managing Partner, Professional Services Firm",
    sector: "Professional Services",
  },
];

export const FAQS = [
  {
    q: "Do you only serve large businesses?",
    a: "No; we built Inter5 specifically for SMEs. Our packages start at ₦120,000/month and are designed for businesses with 1 - 200 staff. Enterprise pricing is available for larger clients.",
  },
  {
    q: "Are your prices in naira or USD?",
    a: "All our monthly retainer prices are billed in naira. We review pricing monthly against the USD/NGN rate and include annual adjustment clauses in all contracts.",
  },
  {
    q: "What is BizShield and do I really need it?",
    a: "BizShield is our disaster recovery service — it backs up your data daily, tests your backups monthly, and guarantees recovery within hours if something goes wrong. 60% of Nigerian organisations have experienced a cyber incident. If you don't have a tested backup, you need BizShield.",
  },
  {
    q: "How quickly can you respond if we have an incident?",
    a: "Our Growth and Scale Managed IT clients receive business-hours support; Scale clients receive 24/7 response. BizShield Recover and Resilient clients have guaranteed 4-hour and 1-hour recovery commitments respectively.",
  },
  {
    q: "Do you help with NDPA 2023 compliance?",
    a: "Yes. NDPA compliance advisory is included in CyberShield and is also available as a standalone engagement. We help you document your data protection practices and build processes that meet your obligations under the Act.",
  },
];