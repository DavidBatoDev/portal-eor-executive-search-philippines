// Homepage copy — verbatim source of truth (do not rewrite, paraphrase, or omit).
// Transcribed from drafts/Portal Homepage.html.

import type { IconName } from "@/components/ui/Icon";

export type ServiceLink = {
  title: string;
  blurb: string;
  href: string;
  icon: IconName;
};

export const meta = {
  title:
    "Portal Philippines | EOR, Manpower, Executive Search & Workforce Solutions",
  description:
    "Philippine-wide hiring, employment, and workforce support through Employer of Record, Manpower Solutions, Executive Search, Shared Services, HR Outsourcing, and BPO-Lite services.",
};

// Services as they appear in the nav mega-dropdown and the hero preview panel.
export const services: ServiceLink[] = [
  {
    title: "Employer of Record",
    blurb: "Compliance-first local employment",
    href: "/eor",
    icon: "eor",
  },
  {
    title: "Payroll Outsourcing",
    blurb: "Accurate, compliant payroll administration",
    href: "/payroll-outsourcing",
    icon: "payroll",
  },
  {
    title: "Manpower Solutions",
    blurb: "Workforce support across the Philippines",
    href: "/manpower-solutions",
    icon: "manpower",
  },
  {
    title: "Executive Search",
    blurb: "Leadership and specialist hiring",
    href: "/executive-search",
    icon: "search",
  },
  {
    title: "Shared Services",
    blurb: "Support teams for business functions",
    href: "/shared-services",
    icon: "shared",
  },
  {
    title: "HR Outsourcing",
    blurb: "HR administration and workforce support",
    href: "/hr-outsourcing",
    icon: "hr",
  },
  {
    title: "BPO-Lite Services",
    blurb: "Lean back-office operations support",
    href: "/bpo-lite",
    icon: "bpo",
  },
];

export const navLinks = [
  { label: "How It Works", href: "#advantage", sec: "advantage" },
  { label: "Who We Help", href: "#who", sec: "who" },
  { label: "Resources", href: "#faq", sec: "faq" },
];

export const hero = {
  eyebrow: "Workforce Solutions · Philippines",
  // Headline segments rendered in order; `em` fragments get the gold treatment.
  headline: [
    { text: "Philippine-wide hiring", em: true },
    { text: ", employment, and " },
    { text: "workforce support", em: true },
    { text: " for growing companies." },
  ],
  lead: "We help you find, verify, and employ trusted talent through Employer of Record, Executive Search, and Background Investigation services, supported by nationwide operations, compliance-first employment processes, and our own HRIS, payroll, and accounting systems.",
  primaryCta: { label: "Book Consultation", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "#services" },
  tags: [
    { label: "Compliance-First EOR", icon: "shield-check" as IconName },
    { label: "Nationwide Presence", icon: "map-pin" as IconName },
    {
      label: "Proprietary HRIS & Payroll Systems",
      icon: "monitor" as IconName,
    },
  ],
};

export const proof = {
  label: "Proven Philippine Workforce Support",
  stats: [
    { num: "15", lbl: "Years in Business" },
    { num: "52", lbl: "Companies Served" },
    { num: "6,000", lbl: "Workers Managed" },
    { num: "9", lbl: "Offices Nationwide" },
    { num: "₱80M", lbl: "Monthly Payroll Managed" },
    { num: "19", lbl: "Industries Supported" },
  ],
};

export const intro = {
  eyebrow: "One local partner",
  heading: "Trusted support for companies hiring in the Philippines",
  lead: "Hiring in the Philippines can open strong opportunities for growth, but it also comes with important decisions around compliance, candidate quality, employment setup, documentation, payroll, and risk management.",
  bodyPre: "Portal helps simplify that process by giving businesses ",
  bodyStrong: "one local partner",
  bodyPost: " for finding, verifying, and employing the right people.",
};

export type ServiceCard = {
  title: string;
  body: string;
  linkLabel: string;
  href: string;
  icon: IconName;
};

export const servicesSection = {
  eyebrow: "Our Services",
  heading:
    "Workforce solutions for companies hiring and operating in the Philippines",
  lead: "Portal brings together EOR, manpower, executive search, shared services, HR outsourcing, and BPO-lite support for companies building teams across the Philippines.",
  cards: [
    {
      title: "Employer of Record Philippines",
      body: "Hire and employ talent in the Philippines through a compliance-first local employment structure. Portal supports companies that need employment administration without immediately setting up their own local entity.",
      linkLabel: "Learn more about EOR",
      href: "/eor",
      icon: "eor",
    },
    {
      title: "Manpower Solutions",
      body: "Access reliable workforce support for operational, project-based, and business expansion needs. Portal helps companies deploy people across the Philippines with structured local coordination.",
      linkLabel: "Learn more about Manpower Solutions",
      href: "/manpower-solutions",
      icon: "manpower",
    },
    {
      title: "Executive Search",
      body: "Find senior leaders, managers, and specialized professionals for critical roles. Portal supports targeted search, screening, and shortlisting so companies can hire with stronger confidence.",
      linkLabel: "Learn more about Executive Search",
      href: "/executive-search",
      icon: "search-clock",
    },
    {
      title: "Shared Services",
      body: "Build support teams for key business functions such as HR, admin, finance, and operations. Portal helps companies create flexible workforce support without building every function in-house.",
      linkLabel: "Learn more about Shared Services",
      href: "/shared-services",
      icon: "shared",
    },
    {
      title: "HR Outsourcing",
      body: "Delegate HR administration, employee coordination, and workforce support to a trusted local partner. Portal helps businesses reduce internal workload while keeping HR processes organized.",
      linkLabel: "Learn more about HR Outsourcing",
      href: "/hr-outsourcing",
      icon: "hr",
    },
    {
      title: "BPO-Lite Services",
      body: "Set up lean back-office and operational support without the complexity of a full BPO model. Portal helps companies start smaller, stay flexible, and scale support as business needs grow.",
      linkLabel: "Learn more about BPO-Lite Services",
      href: "/bpo-lite",
      icon: "bpo",
    },
  ] satisfies ServiceCard[],
  footCta: { label: "Explore All Services", href: "#services" },
};

export const advantage = {
  eyebrow: "The Portal Advantage",
  heading: "Find. Employ. Manage. Scale.",
  lead: "Portal brings together workforce solutions, compliance-first EOR support, nationwide operations, and proprietary HRIS, payroll, and accounting systems. From executive hiring and manpower deployment to HR outsourcing, shared services, and BPO-lite support, we help companies build and manage teams across the Philippines with more structure and confidence.",
  steps: [
    {
      n: 1,
      title: "Find",
      body: "We help companies source the right people through executive search, manpower solutions, and workforce support tailored to the role, location, and business need.",
    },
    {
      n: 2,
      title: "Employ",
      body: "We support local employment through a compliance-first EOR structure, helping companies onboard talent in the Philippines without immediately setting up their own local entity.",
    },
    {
      n: 3,
      title: "Manage",
      body: "We help manage HR administration, payroll coordination, employee support, and workforce processes through Portal's own HRIS, payroll, and accounting systems.",
    },
    {
      n: 4,
      title: "Scale",
      body: "We support business growth through nationwide operations, shared services, HR outsourcing, and BPO-lite solutions across Luzon, Visayas, and Mindanao.",
    },
  ],
};

export const challenge = {
  eyebrow: "The Challenge",
  heading:
    "Hiring and managing teams in the Philippines should not feel complicated",
  bodyParts: [
    "Many companies want to build teams in the Philippines but are unsure how to start, where to hire, or how to manage employment properly. Some need people quickly but do not have a local entity. Others need manpower, executive talent, HR support, or back-office teams across different locations.",
    // second paragraph has an emphasized fragment
  ],
  bodyTwoPre: "Without the right local partner, hiring can become ",
  bodyTwoEm: "slow, fragmented, and difficult to manage",
  bodyTwoPost:
    ". Companies may end up working with multiple providers for recruitment, payroll, HR administration, compliance, and workforce support.",
  calloutTag: "The Portal difference",
  callout:
    "Portal reduces that complexity through compliance-first EOR, nationwide operations, and owned HRIS, payroll, and accounting systems that support workforce management across the Philippines.",
  chips: [
    { label: "Compliance-first EOR", icon: "shield-check" as IconName },
    { label: "Nationwide operations", icon: "map-pin" as IconName },
    { label: "Owned HRIS & payroll", icon: "hris-rows" as IconName },
  ],
};

export const nationwide = {
  eyebrow: "The Portal Approach",
  heading:
    "A nationwide workforce partner for Philippine hiring and operations",
  body: [
    "Portal supports companies that need more than a basic hiring service. We help businesses understand their options, reduce unnecessary delays, and make better workforce decisions through compliance-first EOR, manpower, executive search, HR outsourcing, shared services, and BPO-lite support.",
    "Whether you are hiring your first employee, deploying manpower, building a support team, or expanding operations across the country, Portal provides structured workforce support from planning to onboarding.",
  ],
  presenceLabel: "Our nationwide presence",
  cities: [
    { name: "Quezon City", pin: "quezon-city" },
    { name: "Bulacan", pin: "bulacan" },
    { name: "Cebu City", pin: "cebu-city" },
    { name: "Laguna", pin: "laguna" },
    { name: "Davao City", pin: "davao-city" },
    { name: "Bacolod", pin: "bacolod" },
    { name: "Surigao", pin: "surigao" },
  ],
  mapAlt:
    "Map of the Philippines showing Portal offices across Luzon, Visayas, and Mindanao: Bulacan, Quezon City, Laguna, Bacolod, Cebu City, Surigao, and Davao City",
};

export const whoWeHelp = {
  eyebrow: "Who We Help",
  heading: "Built for companies that need trusted hiring support",
  lead: "Portal works with businesses and decision-makers who need reliable workforce solutions in the Philippines.",
  cards: [
    {
      title: "Foreign companies",
      body: "Businesses hiring in the Philippines from abroad.",
      icon: "globe" as IconName,
    },
    {
      title: "Local companies",
      body: "Organizations searching for executives and senior talent.",
      icon: "building-home" as IconName,
    },
    {
      title: "Startups",
      body: "Growing teams expanding their workforce.",
      icon: "startup" as IconName,
    },
    {
      title: "HR departments",
      body: "Teams needing additional recruitment support.",
      icon: "users-add" as IconName,
    },
    {
      title: "Without a local entity",
      body: "Businesses with no registered Philippine company yet.",
      icon: "building-flag" as IconName,
    },
    {
      title: "High-trust roles",
      body: "Hiring for sensitive or confidential positions.",
      icon: "lock" as IconName,
    },
  ],
};

export const useCases = {
  eyebrow: "Use Cases",
  heading: "When companies work with Portal",
  lead: "Companies usually come to Portal when they need to:",
  items: [
    {
      n: "01",
      title: "Hire without a local entity",
      body: "Use compliance-first EOR support to employ talent in the Philippines.",
    },
    {
      n: "02",
      title: "Deploy manpower nationwide",
      body: "Access workforce support for operations, projects, and expansion.",
    },
    {
      n: "03",
      title: "Recruit executive talent",
      body: "Find leaders, managers, and specialized professionals for critical roles.",
    },
    {
      n: "04",
      title: "Build shared service teams",
      body: "Create support teams for HR, admin, finance, and operations.",
    },
    {
      n: "05",
      title: "Outsource HR administration",
      body: "Get support for employee coordination, HR processes, and workforce management.",
    },
    {
      n: "06",
      title: "Set up BPO-lite support",
      body: "Build lean back-office and operational support without a full BPO model.",
    },
    {
      n: "07",
      title: "Expand across the Philippines",
      body: "Support hiring and workforce needs across Luzon, Visayas, and Mindanao.",
    },
    {
      n: "08",
      title: "Manage through owned systems",
      body: "Use structured HRIS, payroll, and accounting support developed by Portal.",
    },
  ],
};

export const whyPortal = {
  eyebrow: "Why Portal",
  heading: "Why companies choose Portal",
  lead: "Hiring and workforce growth in the Philippines require more than filling roles. Companies need the right employment structure, reliable manpower support, compliant processes, HR administration, payroll coordination, and local coverage they can trust.",
  body: "Portal combines nationwide operations, compliance-first EOR, professional recruitment support, HR outsourcing, shared services, and BPO-lite solutions into one connected workforce partner. With our own HRIS, payroll, and accounting systems, we help companies hire, employ, manage, and scale teams with more confidence.",
  cards: [
    {
      title: "Local hiring knowledge",
      body: "A locally informed partner who understands how to hire well in the Philippines.",
      icon: "globe" as IconName,
    },
    {
      title: "Professional recruitment support",
      body: "Structured search and screening for leaders and specialized roles.",
      icon: "search" as IconName,
    },
    {
      title: "Proprietary Workforce Systems",
      body: "Owned HRIS, payroll, and accounting systems for more organized workforce administration.",
      icon: "monitor" as IconName,
    },
    {
      title: "Complete Workforce Support",
      body: "EOR, manpower, executive search, shared services, HR outsourcing, and BPO-lite services in one partner.",
      icon: "shared" as IconName,
    },
  ],
};

export const team = {
  eyebrow: "Our Team",
  heading: "The people behind Portal",
  lead: "A team of workforce, recruitment, and HR specialists committed to helping companies hire, employ, and grow with confidence across the Philippines.",
  members: [
    {
      name: "Noel De Loen",
      role: "Founder & CEO",
      photo: "/assets/team/noel.jpg",
      alt: "Noel De Loen, Founder and CEO of Portal",
    },
    {
      name: "Elisha Nakazato",
      role: "Marketing",
      photo: "/assets/team/elisha.jpg",
      alt: "Elisha Nakazato, Marketing",
    },
    {
      name: "Marco Villanueva",
      role: "Head of Operations",
      photo: "/assets/team/marco.jpg",
      alt: "Marco Villanueva, Head of Operations",
    },
    {
      name: "Patricia Reyes",
      role: "Executive Search Lead",
      photo: "/assets/team/patricia.jpg",
      alt: "Patricia Reyes, Executive Search Lead",
    },
  ],
};

export const faq = {
  eyebrow: "FAQs",
  heading: "Frequently asked questions",
  lead: "Portal brings together three essential services for companies that want to hire better and reduce employment risk in the Philippines.",
  items: [
    {
      q: "What is an Employer of Record in the Philippines?",
      a: "An Employer of Record helps companies employ workers in the Philippines without requiring the client company to immediately set up its own local legal entity. EOR support can include employment administration, onboarding, payroll coordination, documentation, and compliance-related employment processes.",
    },
    {
      q: "Can a foreign company hire employees in the Philippines without setting up a local entity?",
      a: "Yes — many foreign companies use an Employer of Record to hire employees in the Philippines without immediately establishing a local entity. Portal helps companies understand this option and determine whether it fits their hiring goals.",
    },
    {
      q: "Is EOR the same as outsourcing?",
      a: "No. EOR is not the same as outsourcing. With outsourcing, a provider usually delivers a business function or service. With EOR, the client company still manages the employee's day-to-day work, while the EOR supports the local employment structure and employment administration.",
    },
    {
      q: "Is EOR the same as hiring independent contractors?",
      a: "No. EOR is different from contractor hiring. Independent contractors are not employees, while EOR is used when a company needs to employ workers through a local employment structure. This can help reduce misclassification concerns when the role functions like regular employment.",
    },
    {
      q: "Who should use EOR services in the Philippines?",
      a: "EOR services are useful for foreign companies, startups, remote-first businesses, companies testing the Philippine market, and organizations that need to hire local employees but are not ready to establish a Philippine entity.",
    },
    {
      q: "What employment tasks can an EOR support?",
      a: "An EOR can support employment-related tasks such as onboarding, employment documentation, payroll coordination, government-related employment requirements, benefits administration support, and ongoing employment administration.",
    },
    {
      q: "How fast can a company hire through Portal EOR?",
      a: "The timeline depends on the role, documentation, candidate readiness, and employment requirements. EOR can often help companies move faster than setting up a local entity first, but the exact timeline should be assessed based on the hiring situation. Book a consultation with us today!",
    },
    {
      q: "What is Executive Search?",
      a: "Executive Search is a specialized recruitment service used to find senior leaders, executives, managers, and hard-to-find professionals. It usually involves targeted sourcing, careful screening, candidate evaluation, and confidential outreach.",
    },
    {
      q: "What roles can Portal help recruit?",
      a: "Portal can help with executive, leadership, management, specialist, and high-trust roles. This may include senior operations roles, department heads, finance leaders, HR leaders, technical specialists, business development leaders, and other critical positions.",
    },
    {
      q: "Can Portal conduct confidential executive searches?",
      a: "Yes. Executive Search often requires confidentiality, especially when replacing a current role, hiring for a sensitive position, or approaching candidates who are currently employed. Portal can support a discreet and professional search process.",
    },
    {
      q: "How long does executive search usually take?",
      a: "The timeline depends on the role level, salary range, industry, candidate availability, and selection process. Senior and specialized roles usually require more time because the search involves careful sourcing, screening, and alignment with business needs. Book a consultation with us today!",
    },
    {
      q: "Can Portal help foreign companies find Philippine executives or senior managers?",
      a: "Yes. Portal can support foreign companies looking for Philippine-based executives, managers, and specialized professionals. This is useful for companies entering the Philippine market or building local leadership capacity.",
    },
  ],
};

export const finalCta = {
  eyebrow: "Let's talk",
  heading: "Build your Philippine team with confidence",
  lead: "Whether you need to hire your first employee, find a senior leader, verify a candidate, or build a more reliable workforce process, Portal is ready to help. Talk to us today and discover the right hiring path for your business.",
  primaryCta: { label: "Book Consultation", href: "/contact" },
  secondaryCta: { label: "Inquire Today", href: "/contact" },
};

export const footer = {
  about:
    "Your trusted workforce partner in the Philippines — helping companies hire, employ, and scale with confidence.",
  email: "Portal@helprofgrp.com",
  phoneDisplay: "+63 976 653 7269",
  phoneHref: "tel:+639766537269",
  location: "Offices across Luzon, Visayas, and Mindanao",
  columns: [
    {
      heading: "Services",
      links: [
        { label: "Employer of Record", href: "/eor" },
        { label: "Payroll Outsourcing", href: "/payroll-outsourcing" },
        { label: "Manpower Solutions", href: "/manpower-solutions" },
        { label: "Executive Search", href: "/executive-search" },
        { label: "Shared Services", href: "/shared-services" },
        { label: "HR Outsourcing", href: "/hr-outsourcing" },
        { label: "BPO-Lite Services", href: "/bpo-lite" },
      ],
    },
    {
      heading: "About",
      links: [
        { label: "How It Works", href: "#advantage" },
        { label: "Who We Help", href: "#who" },
        { label: "Why Portal", href: "#why" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      heading: "Get Started",
      links: [
        { label: "Book a Consultation", href: "/contact" },
        { label: "Request an Assessment", href: "/contact" },
        { label: "Contact Us", href: "/contact" },
        { label: "Locations", href: "#nationwide" },
      ],
    },
  ],
  copyright: "© 2026 Portal. All rights reserved.",
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
