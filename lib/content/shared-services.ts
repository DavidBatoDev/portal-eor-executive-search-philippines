// Shared Services page copy — verbatim source of truth (do not rewrite,
// paraphrase, or omit). Transcribed from Portal Shared Services Page.html.

import type { IconName } from "@/components/ui/Icon";

export const meta = {
  title: "Shared Services Solutions | Centralized HR & Finance",
  description:
    "Centralize HR, finance, and operations with Portal Shared Services — reduce overhead, improve compliance, and scale efficiently.",
};

export const hero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
  ],
  current: "Shared Services",
  titlePre: "Shared Services",
  lead: "Portal provides centralized support for HR, finance, and operational functions, helping companies optimize processes, reduce costs, and focus on strategic priorities.",
  ctas: {
    primary: { label: "Submit an Inquiry", href: "#contact" },
    secondary: { label: "Book a Consultation", href: "#contact" },
  },
};

export const why = {
  eyebrow: "Why it matters",
  heading: "Why Shared Services Matters",
  lead: "Managing multiple administrative functions across HR, finance, and operations can be complex and costly. Portal helps companies centralize operations, reduce overhead, improve compliance, and scale support efficiently.",
  pillars: [
    { icon: "shared" as IconName, title: "Centralize operations" },
    { icon: "trending-down" as IconName, title: "Reduce overhead" },
    { icon: "shield-check" as IconName, title: "Improve compliance" },
    { icon: "trending-up" as IconName, title: "Scale support efficiently" },
  ],
};

export const capabilities = {
  eyebrow: "What we deliver",
  heading: "Core Shared Services Capabilities",
  cards: [
    {
      icon: "dollar-sign" as IconName,
      title: "Finance Support",
      body: "Payroll, invoicing, reporting.",
    },
    {
      icon: "clipboard-check" as IconName,
      title: "HR Administration",
      body: "Employee data, onboarding/offboarding, policy implementation.",
    },
    {
      icon: "calendar-check" as IconName,
      title: "Operations Coordination",
      body: "Project tracking, scheduling, workflow management.",
    },
    {
      icon: "server" as IconName,
      title: "IT & Systems Support",
      body: "HRIS, payroll, operational systems.",
    },
    {
      icon: "shield-check" as IconName,
      title: "Compliance Monitoring",
      body: "Regulatory compliance for HR and finance.",
    },
    {
      icon: "sliders" as IconName,
      title: "Flexible Support Teams",
      body: "Short-term, long-term, project-based.",
    },
  ],
};

export const process = {
  eyebrow: "The Process",
  heading: "From Assessment to Delivery: Our Shared Services Process",
  steps: [
    {
      n: 1,
      title: "Consultation & Needs Assessment",
      body: "Identify bottlenecks and prioritize solutions.",
    },
    {
      n: 2,
      title: "Team Design & Workflow Setup",
      body: "Configure processes and assign teams.",
    },
    {
      n: 3,
      title: "Service Deployment",
      body: "Assign personnel and initiate operations.",
    },
    {
      n: 4,
      title: "Monitoring & Reporting",
      body: "Track performance and optimize.",
    },
    {
      n: 5,
      title: "Ongoing Support",
      body: "Adjust resources as business needs evolve.",
    },
  ],
};

export const whoFor = {
  eyebrow: "Who this is for",
  heading: "When Companies Use Shared Services",
  cards: [
    {
      icon: "shared" as IconName,
      title: "Multi-department operations needing centralized support",
    },
    { icon: "trending-down" as IconName, title: "Reduce administrative overhead" },
    { icon: "calendar" as IconName, title: "Temporary / project-based teams" },
    {
      icon: "shield-check" as IconName,
      title: "Compliance and accuracy across HR and finance",
    },
    {
      icon: "map-pin" as IconName,
      title: "Growing companies scaling across multiple locations",
    },
  ],
  ctaCard: {
    title: "Cannot find your desired function?",
    body: "Submit an inquiry today. We'll reach out to you ASAP.",
    link: { label: "Submit an inquiry", href: "#contact" },
  },
};

export const wins = {
  eyebrow: "Proof in delivery",
  heading: "Recent Deployments & Wins",
  hint: "Sample engagements · hover to pause",
  cards: [
    {
      month: "March 2026",
      role: "Finance & Payroll Support",
      region: "Metro Manila",
      desc: "Managed payroll and financial reporting for 100 employees",
      tag: "Shared Services",
    },
    {
      month: "April 2026",
      role: "HR Administration Team",
      region: "Cebu City",
      desc: "Implemented onboarding for 50 new hires",
      tag: "Shared Services",
    },
    {
      month: "May 2026",
      role: "Operations Coordination",
      region: "Laguna",
      desc: "Streamlined project workflow for 3 regional offices",
      tag: "Shared Services",
    },
    {
      month: "June 2026",
      role: "Compliance & Systems",
      region: "Nationwide",
      desc: "Ensured regulatory compliance across multiple departments",
      tag: "Shared Services",
    },
  ],
};

export const inquiry = {
  eyebrow: "Get in touch",
  heading: "Submit Your Shared Services Inquiry",
  formTitle: "Shared Services Inquiry",
};

export const industries = {
  eyebrow: "Coverage",
  heading: "Industries & Roles We Support",
  lead: "Providing shared service support across HR, finance, and operations for organizations of all sizes.",
  items: [
    {
      icon: "dollar-sign" as IconName,
      title: "Finance & Accounting",
      roles: ["Payroll", "Reporting", "Invoicing"],
    },
    {
      icon: "hr" as IconName,
      title: "HR Administration",
      roles: ["Employee Data", "Onboarding", "Policies"],
    },
    {
      icon: "calendar" as IconName,
      title: "Operations",
      roles: ["Project Tracking", "Scheduling", "Coordination"],
    },
    {
      icon: "server" as IconName,
      title: "IT & Systems",
      roles: ["HRIS", "Payroll Systems", "Workflow Tools"],
    },
    {
      icon: "shield-check" as IconName,
      title: "Compliance & Legal",
      roles: ["Regulatory Tracking", "Documentation"],
    },
    {
      icon: "briefcase" as IconName,
      title: "Back-Office Support",
      roles: ["Administrative & Operational Assistance"],
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  heading: "Frequently Asked Questions",
  items: [
    {
      q: "What functions can Portal's Shared Services support?",
      a: "Finance, HR, operations, IT systems, compliance monitoring, and back-office administration.",
    },
    {
      q: "Can Shared Services teams work internationally?",
      a: "Yes, we can manage support across local and regional offices.",
    },
    {
      q: "How quickly can teams be deployed?",
      a: "Typically within 1–2 weeks depending on scope and required personnel.",
    },
    {
      q: "Can services be customized for projects?",
      a: "Yes, teams can be assigned on a temporary, project-based, or long-term basis.",
    },
    {
      q: "How does Portal ensure compliance?",
      a: "Teams follow all labor and regulatory requirements and utilize our proprietary HRIS and Payroll System to track and manage workflows accurately.",
    },
  ],
};

export const finalCta = {
  eyebrow: "Let's talk",
  heading: "Optimize Your Operations Today",
  lead: "Book a consultation to deploy skilled, compliant, and ready-to-work teams through Portal's Shared Services.",
  primaryCta: { label: "Book a Meeting", href: "/book-a-meeting" },
  secondaryCta: { label: "Submit an Inquiry", href: "/contact" },
};
