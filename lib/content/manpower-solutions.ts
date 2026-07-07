// Manpower Solutions page copy — verbatim source of truth (do not rewrite, paraphrase, or omit).
// Transcribed from drafts/Portal Manpower Solutions Page.html.

import type { IconName } from "@/components/ui/Icon";

export const meta = {
  title: "Manpower Solutions & Workforce Deployment | Portal PH",
  description:
    "Deploy skilled manpower nationwide with flexible workforce solutions in the Philippines — rapid hiring, operational support, and compliance.",
};

export const hero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
  ],
  current: "Manpower Solutions",
  titlePre: "Manpower Solutions",
  lead: "Portal provides structured workforce support across the Philippines and internationally. Scale your operations, project teams, or temporary staffing needs with our compliance-first manpower services.",
  ctas: {
    primary: { label: "Submit an Inquiry", href: "#contact" },
    secondary: { label: "Book a Meeting", href: "/book-a-meeting" },
  },
};

export const whyPillars = {
  eyebrow: "Why Manpower Solutions matter",
  heading: "Flexible, Scalable, and Compliant Workforce Support",
  lead: "Portal provides compliant, structured, and flexible workforce solutions to help companies deploy teams rapidly, scale without administrative burden, ensure compliance, and access talent across multiple locations.",
  items: [
    { icon: "zap" as IconName, title: "Deploy teams rapidly" },
    { icon: "chart-up" as IconName, title: "Scale without administrative burden" },
    { icon: "shield-check" as IconName, title: "Ensure compliance" },
    { icon: "map-pin" as IconName, title: "Access talent across multiple locations" },
  ],
};

export const servicesOverview = {
  eyebrow: "What we deliver",
  heading: "Our Manpower Solutions Services",
  lead: "Five flexible building blocks that let you stand up the right team for any operation — from a single seasonal surge to a fully managed project workforce.",
  cards: [
    {
      icon: "clock" as IconName,
      title: "Temporary Staffing",
      body: "Rapid deployment for projects or seasonal needs.",
    },
    {
      icon: "manpower" as IconName,
      title: "Project-Based Teams",
      body: "Assemble specialized teams for critical initiatives.",
    },
    {
      icon: "bpo" as IconName,
      title: "Operational Support",
      body: "Skilled personnel to support business operations.",
    },
    {
      icon: "clipboard-check" as IconName,
      title: "HR & Compliance Oversight",
      body: "Payroll, benefits, and employment compliance.",
    },
    {
      icon: "sliders" as IconName,
      title: "Flexible Contracts",
      body: "Short-term, long-term, or hybrid staffing arrangements.",
    },
  ],
  ctaCard: {
    icon: "link" as IconName,
    title: "Need a custom workforce model?",
    body: "Not sure which mix fits your operation? Tell us what you need and our consultants will tailor the right blend of staffing, teams, and support.",
    link: { label: "Book a Meeting", href: "#contact" },
  },
};

export const process = {
  eyebrow: "The Process",
  heading: "From Request to Deployment: Our Manpower Process",
  steps: [
    {
      n: 1,
      title: "Consultation & Requirement Assessment",
      body: "Scope your roles, headcount, locations, and timelines with a workforce consultant.",
    },
    {
      n: 2,
      title: "Candidate Sourcing & Screening",
      body: "Identify, vet, and shortlist qualified personnel matched to your requirements.",
    },
    {
      n: 3,
      title: "Team Selection & Onboarding",
      body: "Confirm the team, complete documentation, and onboard them ready to work.",
    },
    {
      n: 4,
      title: "Deployment & Supervision",
      body: "Mobilize the team on-site or remotely with day-to-day supervision in place.",
    },
    {
      n: 5,
      title: "Ongoing Management & Reporting",
      body: "Manage performance, compliance, and reporting throughout the engagement.",
    },
  ],
};

export const whoFor = {
  eyebrow: "Who this is for",
  heading: "When Companies Use Manpower Solutions",
  lead: "Manpower Solutions fits companies that need to scale skilled, compliant teams quickly — without the overhead of permanent hiring.",
  cards: [
    {
      icon: "map-pin" as IconName,
      title: "Rapid project staffing across multiple locations",
    },
    {
      icon: "calendar" as IconName,
      title: "Seasonal or temporary workforce requirements",
    },
    {
      icon: "chart-up" as IconName,
      title: "Operational expansion or scaling teams quickly",
    },
    {
      icon: "target" as IconName,
      title: "Specialized teams for critical initiatives",
    },
    {
      icon: "shield-check" as IconName,
      title: "Companies seeking regulatory-compliant staffing solutions",
    },
  ],
  ctaCard: {
    title: "Not sure if manpower solutions fit?",
    body: "Talk to our team and we'll help you scope the right workforce model.",
    link: { label: "Book a meeting", href: "#contact" },
  },
};

export const hires = {
  eyebrow: "Proof in deployment",
  heading: "Recent Deployments & Workforce Wins",
  hint: "Sample engagements · hover to pause",
  cards: [
    {
      month: "March 2026",
      role: "Project Team — IT Deployment",
      region: "Metro Manila",
      desc: "12 skilled IT staff deployed for a 3-month project",
      tag: "Manpower Solutions",
    },
    {
      month: "April 2026",
      role: "Seasonal Operations Team",
      region: "Cebu City",
      desc: "20 staff for seasonal retail operations",
      tag: "Manpower Solutions",
    },
    {
      month: "May 2026",
      role: "Regional Logistics Team",
      region: "Davao City",
      desc: "15 personnel for logistics support across multiple sites",
      tag: "Manpower Solutions",
    },
    {
      month: "June 2026",
      role: "Back-Office Support",
      region: "Nationwide",
      desc: "10 administrative staff deployed for finance and HR functions",
      tag: "Manpower Solutions",
    },
  ],
};

export const worksheet = {
  eyebrow: "Submit Your Inquiry",
  heading: "Candidate / Team Profile Worksheet",
  lead: "Outline exactly what your operation needs and our workforce consultants will scope a deployment-ready team for you.",
  uses: [
    "Capture roles, skills, duration, and coverage in one place",
    "Share your requirements directly with our workforce consultants",
    "Get a tailored deployment plan back, fast",
  ],
  note: "Submit your inquiry and a Portal workforce consultant will respond shortly.",
  formHead: "Team Requirements",
  fields: {
    count: {
      label: "Number of personnel needed",
      placeholder: "e.g. 15",
    },
    duration: {
      label: "Duration / contract type",
      placeholder: "Select an option",
      options: [
        "Temporary / seasonal",
        "Project-based",
        "Long-term",
        "Hybrid arrangement",
      ],
    },
    role: {
      label: "Role / function / department",
      placeholder: "e.g. Warehouse operations, IT project team",
    },
    skills: {
      label: "Required skills and experience",
      placeholder:
        "List the core skills, certifications, and experience level you need",
    },
    coverage: {
      label: "Geographic coverage",
      placeholder: "e.g. Metro Manila, Cebu, nationwide",
    },
  },
  submitLabel: "Submit Inquiry",
  success:
    "Thank you — your inquiry has been received. A Portal workforce consultant will respond shortly.",
};

export const industries = {
  eyebrow: "Coverage",
  heading: "Industries & Roles We Deploy",
  lead: "Deploy skilled teams across the industries and roles that drive your operations.",
  cards: [
    {
      icon: "truck" as IconName,
      title: "Logistics & Supply Chain",
      roles: [
        "Warehouse Staff",
        "Forklift Operators",
        "Delivery & Dispatch Personnel",
        "Inventory Controllers",
      ],
    },
    {
      icon: "shopping-bag" as IconName,
      title: "Sales & Retail Teams",
      roles: [
        "Sales Representatives",
        "Merchandisers",
        "Retail Associates",
        "Field Promoters",
      ],
    },
    {
      icon: "factory" as IconName,
      title: "Manufacturing & Production",
      roles: [
        "Machine Operators",
        "Assembly Line Workers",
        "Quality Inspectors",
        "Production Supervisors",
      ],
    },
    {
      icon: "briefcase" as IconName,
      title: "Back-Office & Operations",
      roles: [
        "Administrative Assistants",
        "Customer Service Representatives",
        "Data Entry Clerks",
        "Operations Coordinators",
      ],
    },
    {
      icon: "building-home" as IconName,
      title: "Hospitality & Service Industry",
      roles: [
        "Front Desk Staff",
        "Housekeeping Teams",
        "Waitstaff & Servers",
        "Event Staff",
      ],
    },
  ],
  ctaCard: {
    icon: "search-plus" as IconName,
    title: "Can't find your industry?",
    body: "We deploy skilled teams across far more sectors than we can list here. Tell us what your operation needs and our workforce consultants will let you know how Portal can help.",
    link: { label: "Submit an inquiry", href: "#contact" },
  },
};

export const faq = {
  eyebrow: "FAQ",
  heading: "Frequently Asked Questions",
  lead: "Common questions about deploying teams with Portal's Manpower Solutions.",
  items: [
    {
      q: "What types of staffing does Portal provide?",
      a: "Portal provides temporary staffing, project-based teams, and operational support, along with HR & compliance oversight and flexible short-term, long-term, or hybrid contracts — so you can deploy the right team for any operation.",
    },
    {
      q: "Can Portal deploy teams internationally?",
      a: "Yes. Portal provides structured workforce support across the Philippines and internationally, so you can scale operations, project teams, or temporary staffing wherever your business needs them.",
    },
    {
      q: "How quickly can personnel be assigned?",
      a: "Manpower Solutions is built for rapid deployment. After a consultation and requirement assessment, we source, screen, and onboard qualified personnel so teams can be mobilized quickly for projects or seasonal needs.",
    },
    {
      q: "How does compliance and payroll work for deployed teams?",
      a: "Portal provides HR & compliance oversight for deployed teams, managing payroll, benefits, and employment compliance through our compliance-first manpower services.",
    },
    {
      q: "Can teams be customized for specialized projects?",
      a: "Yes. We assemble project-based, specialized teams for critical initiatives — matched to the roles, skills, and locations your operation requires.",
    },
  ],
};

export const finalCta = {
  eyebrow: "Let's talk",
  heading: "Start Scaling Your Teams with Confidence",
  lead: "Book a consultation to deploy skilled, compliant, and ready-to-work teams with Portal's manpower solutions.",
  primaryCta: { label: "Book a Meeting", href: "/book-a-meeting" },
  secondaryCta: { label: "Submit an Inquiry", href: "/contact" },
};
