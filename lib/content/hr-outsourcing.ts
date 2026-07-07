// HR Outsourcing page copy — verbatim source of truth (do not rewrite, paraphrase, or omit).
// Transcribed from design screenshots; FAQ answers supplied by the client.

import type { IconName } from "@/components/ui/Icon";

export const meta = {
  title: "HR Outsourcing Philippines | HR Support & Admin",
  description:
    "Comprehensive HR process outsourcing — onboarding, employee administration, benefits, and compliance across Philippine operations.",
};

export const hero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
  ],
  current: "HR Outsourcing",
  titlePre: "HR Outsourcing",
  lead: "Portal helps companies manage HR processes efficiently and compliantly using our proprietary HRIS and Payroll System, allowing internal teams to focus on strategic priorities while we handle day-to-day HR administration.",
  ctas: {
    primary: { label: "Submit an Inquiry", href: "#contact" },
    secondary: { label: "Book a Meeting", href: "/book-a-meeting" },
  },
};

export const painPoints = {
  eyebrow: "The Challenge",
  heading: "Why HR Operations Can Slow You Down",
  image: "/assets/Portal Website Images/HR About.png",
  intro:
    "Managing HR internally can overwhelm teams and create operational risks. Challenges include:",
  items: [
    { icon: "alert-triangle" as IconName, title: "Payroll errors and missed contributions" },
    { icon: "clock" as IconName, title: "Lengthy onboarding and offboarding processes" },
    { icon: "file-text" as IconName, title: "Employee record inaccuracies" },
    { icon: "pencil" as IconName, title: "Manual HR administration consuming valuable time" },
    { icon: "map-pin" as IconName, title: "Difficulty scaling HR operations across multiple locations" },
  ],
  solution: {
    tag: "The Portal Solution",
    body: "Portal removes these operational burdens with structured, compliant, and scalable HR outsourcing.",
    chips: [],
    cta: { label: "Book a Meeting", href: "#contact" },
  },
};

export const impact = {
  eyebrow: "Business Impact",
  heading: "What You Gain with Portal HR Outsourcing",
  items: [
    { stat: "60%", body: "reduction in internal HR administrative workload" },
    { stat: "100%", body: "accurate compliance with labor regulations" },
    {
      icon: "clock" as IconName,
      lead: "Time saved:",
      body: "HR teams regain hours weekly for strategic work",
    },
    {
      icon: "monitor" as IconName,
      lead: "Centralized employee data",
      body: "through Portal's HRIS dashboards",
    },
  ],
};

export const capabilities = {
  eyebrow: "What We Deliver",
  heading: "Core HR Outsourcing Capabilities",
  cards: [
    {
      icon: "payroll" as IconName,
      title: "Payroll & Benefits Administration",
      body: "Accurate payroll and timely benefits management.",
    },
    {
      icon: "user-check" as IconName,
      title: "Onboarding & Offboarding",
      body: "Structured employee lifecycle management.",
    },
    {
      icon: "file-text" as IconName,
      title: "Employee Record Management",
      body: "Organized, compliant HR documentation.",
    },
    {
      icon: "shield-check" as IconName,
      title: "HR Policy Implementation",
      body: "Updated and enforceable labor policies.",
    },
    {
      icon: "bpo" as IconName,
      title: "Employee Support",
      body: "HR query handling and performance tracking.",
    },
    {
      icon: "sliders" as IconName,
      title: "Flexible HR Teams",
      body: "Project-based, temporary, or long-term HR deployment.",
    },
  ],
};

export const process = {
  eyebrow: "The Process",
  heading: "How Portal Makes HR Easier for You",
  steps: [
    {
      n: 1,
      title: "Consultation & Needs Assessment",
      body: "Identify HR bottlenecks and prioritize solutions.",
    },
    {
      n: 2,
      title: "HR Policy & Workflow Setup",
      body: "Configure compliant payroll, benefits, and administrative processes.",
    },
    {
      n: 3,
      title: "Team Assignment & Onboarding",
      body: "Deploy HR personnel and ensure smooth process implementation.",
    },
    {
      n: 4,
      title: "Day-to-Day HR Operations",
      body: "Handle payroll, employee queries, documentation, and reporting.",
    },
    {
      n: 5,
      title: "Ongoing Support & Reporting",
      body: "Monitor performance and continuously optimize processes.",
    },
  ],
};

export const whoFor = {
  eyebrow: "Who this is for",
  heading: "When Companies Use HR Outsourcing",
  lead: "",
  image: "/assets/Portal Website Images/HR Outsourcing.png",
  cards: [
    { icon: "office" as IconName, title: "Companies without a dedicated HR department" },
    {
      icon: "shield-check" as IconName,
      title: "Growing organizations needing compliant payroll and benefits management",
    },
    { icon: "sliders" as IconName, title: "Businesses seeking to reduce internal HR workload" },
    { icon: "calendar" as IconName, title: "Firms needing temporary or project-based HR teams" },
    { icon: "map-pin" as IconName, title: "Companies scaling across multiple locations" },
  ],
  ctaCard: {
    title: "Cannot find your desired HR solution?",
    body: "Submit an inquiry today. We'll reach out to you ASAP.",
    link: { label: "Submit an inquiry", href: "#contact" },
  },
};

export const inquiry = {
  eyebrow: "Get in touch",
  heading: "Submit Your HR Inquiry",
  formTitle: "HR Inquiry",
  notesLabel: "HR Requirement / Notes",
  notesPlaceholder:
    "Tell us which HR functions you'd like to outsource, team size, and timeline",
};

export const industries = {
  eyebrow: "Coverage",
  heading: "Industries & Roles We Support",
  lead: "Providing HR operations support across industries for organizations of all sizes.",
  items: [
    {
      icon: "dollar-sign" as IconName,
      title: "Finance & Accounting",
      roles: ["Payroll", "Benefits", "HR Admin"],
    },
    {
      icon: "truck" as IconName,
      title: "Logistics & Supply Chain",
      roles: ["HR Admin", "Employee Scheduling"],
    },
    {
      icon: "factory" as IconName,
      title: "Manufacturing & Production",
      roles: ["Payroll", "Compliance", "HR Operations"],
    },
    {
      icon: "monitor" as IconName,
      title: "Technology",
      roles: ["HR Support", "Recruitment Coordination"],
    },
    {
      icon: "shopping-bag" as IconName,
      title: "Retail & Consumer",
      roles: ["Onboarding", "HR Policies", "Employee Records"],
    },
    {
      icon: "bpo" as IconName,
      title: "BPO / Operations",
      roles: ["Workforce Administration", "Payroll", "Benefits"],
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  heading: "Frequently Asked Questions",
  items: [
    {
      q: "What HR functions can Portal outsource?",
      a: "Payroll, benefits administration, employee onboarding/offboarding, HR documentation, policy implementation, and employee support.",
    },
    {
      q: "Can HR Outsourcing support international operations?",
      a: "Yes, Portal can manage HR functions across local and regional offices.",
    },
    {
      q: "How quickly can HR teams be deployed?",
      a: "Typically within 1–2 weeks depending on the scope and number of employees.",
    },
    {
      q: "How does Portal ensure compliance?",
      a: "Our teams follow labor laws and regulations and use our proprietary HRIS and Payroll System to track processes accurately.",
    },
    {
      q: "Can HR Outsourcing be customized for specific projects?",
      a: "Yes, teams can be deployed for temporary, project-based, or ongoing operational support.",
    },
  ],
};

export const finalCta = {
  eyebrow: "Let's talk",
  heading: "Streamline Your HR Operations Today",
  lead: "Book a consultation to delegate HR operations to Portal's experienced, compliant, and flexible HR teams.",
  primaryCta: { label: "Book a Meeting", href: "/book-a-meeting" },
  secondaryCta: { label: "Submit an Inquiry", href: "/contact" },
};
