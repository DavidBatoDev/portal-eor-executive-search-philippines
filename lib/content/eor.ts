// EOR page copy — verbatim source of truth (do not rewrite, paraphrase, or omit).
// Transcribed from drafts/Portal EOR Page.html.

import type { IconName } from "@/components/ui/Icon";

export const meta = {
  title:
    "Employer of Record (EOR) Philippines | Portal — Hire with Compliance and Confidence",
  description:
    "Portal helps companies employ talent in the Philippines through compliance-first EOR services, without immediately setting up a local entity. Payroll, HRIS, onboarding, and nationwide workforce support.",
};

export const hero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
  ],
  current: "Employer of Record",
  titlePre: "Employer of Record Philippines — Hire with ",
  titleEm: "Compliance and Confidence",
  lead: "Portal helps companies employ talent in the Philippines through compliance-first EOR services, without immediately setting up a local entity. Enter the role you want to hire for below to start your personalized workforce assessment.",
  roleSearch: {
    service: "eor",
    placeholder: "Enter the role you want to hire for…",
    submitLabel: "Start Assessment",
    hint: "EOR service preselected · Takes about 2 minutes",
  },
};

export const painPoints = {
  eyebrow: "Why companies come to Portal",
  heading: "The Challenges of Hiring in the Philippines",
  intro: "Companies looking to hire in the Philippines face several common hurdles:",
  items: [
    {
      icon: "building-x" as IconName,
      title: "No local entity",
      body: "Foreign companies often need to hire immediately but lack a registered Philippine entity, delaying operations.",
    },
    {
      icon: "file-text" as IconName,
      title: "Complex compliance requirements",
      body: "Employment contracts, government contributions, payroll, and documentation can be confusing and risky.",
    },
    {
      icon: "inbox" as IconName,
      title: "Administrative burden",
      body: "Managing onboarding, payroll, and HR processes locally can overwhelm internal teams.",
    },
    {
      icon: "trending-up" as IconName,
      title: "Scaling challenges",
      body: "Expanding a workforce across multiple regions requires coordination, systems, and local expertise.",
    },
    {
      icon: "alert-triangle" as IconName,
      title: "Hiring risk",
      body: "Without proper local support, companies risk misclassification, non-compliance, and operational delays.",
    },
  ],
  solution: {
    tag: "The Portal Solution",
    body: "Portal simplifies these challenges with compliance-first EOR support, structured employment administration, and nationwide operations backed by proprietary HRIS and payroll systems.",
    chips: [
      "Compliance-first support",
      "Proprietary HRIS & payroll",
      "Nationwide operations",
    ],
    cta: { label: "Book a Consultation", href: "#contact" },
  },
};

export const useCards = {
  eyebrow: "Use Cases",
  heading: "How Companies Use Portal EOR Services",
  lead: "Portal EOR is designed for companies with varying workforce needs — from new hires to existing teams, large or small.",
  cards: [
    {
      icon: "user-plus" as IconName,
      title: "First Employee in the Philippines",
      body: "Quickly and compliantly onboard your first local hire without creating a legal entity.",
    },
    {
      icon: "user-check" as IconName,
      title: "Scaling New Teams",
      body: "Expand your workforce efficiently with full compliance and payroll management.",
    },
    {
      icon: "shield-check" as IconName,
      title: "Compliance Support",
      body: "Ensure your workforce is fully compliant with Philippine labor regulations.",
    },
    {
      icon: "repeat" as IconName,
      title: "Transfer Existing Staff",
      body: "Move already-deployed Philippine employees to EOR for simpler administration. Handles ",
      strong: "any volume, from 1 to hundreds or thousands",
      bodyAfter: ".",
    },
    {
      icon: "globe-2" as IconName,
      title: "Global HR Governance",
      body: "Multinational teams needing local accountability, payroll integration, and workforce oversight.",
    },
  ],
  ctaCard: {
    icon: "search-plus" as IconName,
    title: "Custom Solution",
    body: "Cannot find your specific workforce need? Submit an inquiry today — we'll tailor a solution for you.",
    link: { label: "Submit an inquiry", href: "#contact" },
  },
  footCta: { label: "Submit an Inquiry", href: "#contact" },
};

export const process = {
  eyebrow: "The Process",
  heading: "How Portal's EOR Process Works",
  steps: [
    {
      n: 1,
      title: "Consultation & Needs Assessment",
      body: "Evaluate hiring goals, timeline, and requirements to determine the most practical employment pathway.",
    },
    {
      n: 2,
      title: "Employment Setup",
      body: "Onboard employees through a compliance-first EOR structure without needing a local entity.",
    },
    {
      n: 3,
      title: "Administration & Payroll",
      body: "Manage HR, payroll, and employment processes through Portal's proprietary systems.",
    },
    {
      n: 4,
      title: "Ongoing Workforce Support",
      body: "Scale your team with nationwide operational support, shared services, and BPO-lite solutions.",
    },
  ],
};

export const whoFor = {
  eyebrow: "Use Cases",
  heading: "Who Should Use EOR Services",
  lead: "EOR fits a range of companies that need to employ in the Philippines with structure, speed, and compliance.",
  cards: [
    {
      icon: "globe-2" as IconName,
      title: "Foreign Companies",
      body: "Hiring employees without a local entity.",
    },
    {
      icon: "rocket" as IconName,
      title: "Startups",
      body: "Quickly scale local operations with structured employment support.",
    },
    {
      icon: "office" as IconName,
      title: "Local Companies",
      body: "Need HR and payroll administration for new teams.",
    },
    {
      icon: "shield-alert" as IconName,
      title: "High-Trust Roles",
      body: "Critical positions requiring compliant and managed employment.",
    },
    {
      icon: "users-add" as IconName,
      title: "HR Departments",
      body: "Teams needing additional workforce administration capacity.",
    },
  ],
  ctaCard: {
    title: "Not sure if EOR fits?",
    body: "Talk to our team and we'll help you find the right employment pathway.",
    link: { label: "Request an assessment", href: "#contact" },
  },
};

export const hires = {
  eyebrow: "Proof in placements",
  heading: "Recent Successful Hires",
  hint: "Sample placements · hover to pause",
  cards: [
    {
      month: "Hired: May 2026",
      role: "Senior Operations Leader",
      region: "Metro Manila / Nationwide",
      desc: "Helped a startup expand to the Philippines on schedule with compliant payroll",
      tag: "EOR + Executive Search",
    },
    {
      month: "Hired: April 2026",
      role: "Remote Project Manager",
      region: "Visayas & Mindanao",
      desc: "Coordinated multi-region teams to accelerate a project rollout",
      tag: "EOR + Manpower Solutions",
    },
    {
      month: "Hired: March 2026",
      role: "Finance Manager",
      region: "Cebu City",
      desc: "Established compliant payroll and HRIS processes from day one",
      tag: "EOR + HR Outsourcing",
    },
    {
      month: "Hired: June 2026",
      role: "Shared Services Team Lead",
      region: "Luzon & Visayas",
      desc: "Set up a lean back-office team and scaled operations efficiently",
      tag: "Shared Services + BPO-Lite",
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  heading: "Frequently Asked Questions about EOR",
  lead: "Common questions about Employer of Record services in the Philippines.",
  items: [
    {
      q: "What is an Employer of Record in the Philippines?",
      a: "An Employer of Record helps companies employ workers in the Philippines without requiring the client company to immediately set up its own local legal entity. EOR support can include employment administration, onboarding, payroll coordination, documentation, and compliance-related employment processes.",
    },
    {
      q: "Can foreign companies hire without a local entity?",
      a: "Yes — many foreign companies use an Employer of Record to hire employees in the Philippines without immediately establishing a local entity. Portal helps companies understand this option and determine whether it fits their hiring goals.",
    },
    {
      q: "How does EOR differ from outsourcing or contractors?",
      a: "EOR is not the same as outsourcing. With outsourcing, a provider usually delivers a business function or service. With EOR, the client company still manages the employee's day-to-day work, while the EOR supports the local employment structure and employment administration. EOR is also different from contractor hiring — independent contractors are not employees, while EOR is used when a company needs to employ workers through a local employment structure. This can help reduce misclassification concerns when the role functions like regular employment.",
    },
    {
      q: "Who should use EOR services?",
      a: "EOR services are useful for foreign companies, startups, remote-first businesses, companies testing the Philippine market, and organizations that need to hire local employees but are not ready to establish a Philippine entity.",
    },
    {
      q: "What tasks can an EOR support?",
      a: "An EOR can support employment-related tasks such as onboarding, employment documentation, payroll coordination, government-related employment requirements, benefits administration support, and ongoing employment administration.",
    },
    {
      q: "How fast can a company hire through EOR?",
      a: "The timeline depends on the role, documentation, candidate readiness, and employment requirements. EOR can often help companies move faster than setting up a local entity first, but the exact timeline should be assessed based on the hiring situation. Book a consultation with us today!",
    },
  ],
};

export const finalCta = {
  eyebrow: "Let's talk",
  heading: "Start Employing Talent in the Philippines with Confidence",
  lead: "Book a consultation to get started with Portal's compliance-first EOR services.",
  primaryCta: { label: "Book Consultation", href: "#contact" },
  secondaryCta: { label: "Request Assessment", href: "#contact" },
};
