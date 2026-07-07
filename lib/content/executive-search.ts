// Executive Search page copy — verbatim source of truth (do not rewrite, paraphrase, or omit).
// Transcribed from design screenshots; FAQ answers supplied by the client.

import type { IconName } from "@/components/ui/Icon";

export const meta = {
  title: "Executive Search & Leadership Hiring Philippines | Portal",
  description:
    "Find top executives and strategic leaders in the Philippines with Portal's executive search expertise and tailored recruiting process.",
};

export const hero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
  ],
  current: "Executive Search",
  titlePre: "Executive Search Philippines",
  lead: "Portal helps companies identify, recruit, and onboard senior leaders and specialized professionals across the Philippines.",
  ctas: {
    primary: { label: "Submit an Inquiry", href: "#contact" },
    secondary: { label: "Book a Meeting", href: "/book-a-meeting" },
  },
};

export const whyMatters = {
  eyebrow: "High-stakes hiring",
  heading: "Why Executive Search Matters for Your Business",
  intro:
    "Hiring executives is high-stakes. The right leader can transform operations, drive growth, and shape culture. The wrong hire can cause strategic misalignment, delays, and costly disruption.",
  image: "/assets/Portal Website Images/Executive search, section 2, background image.png",
  difference: {
    tag: "The Portal Difference",
    items: [
      { icon: "search-plus" as IconName, label: "Access top-tier talent across the Philippines" },
      { icon: "lock" as IconName, label: "Conduct discreet and confidential searches" },
      { icon: "target" as IconName, label: "Evaluate candidates for leadership, strategic, and cultural fit" },
      { icon: "check-circle" as IconName, label: "Guide you through high-impact hiring decisions with confidence" },
    ],
  },
};

export const partners = {
  eyebrow: "Your partners",
  heading: "Your Dedicated Executive Search Partners",
  lead: "Work directly with senior consultants who lead every search from brief to placement.",
  // NOTE: placeholder consultants from the design — replace with real people/links.
  consultants: [
    {
      initials: "JD",
      name: "Jane Doe",
      role: "Executive Search Consultant",
      bio: "Expert in executive leadership recruitment across finance and tech industries.",
      linkedin: "#",
      meeting: "#contact",
    },
    {
      initials: "JS",
      name: "John Smith",
      role: "Executive Search Consultant",
      bio: "Specialist in senior management and strategic operations roles across the Philippines.",
      linkedin: "#",
      meeting: "#contact",
    },
  ],
};

export const industries = {
  eyebrow: "Sectors",
  heading: "Industries & Roles We Recruit",
  lead: "Connecting companies with the right leadership and specialized talent across every sector.",
  items: [
    {
      icon: "monitor" as IconName,
      title: "Technology",
      roles: ["Chief Product Officer", "Head of Engineering", "VP of Digital Strategy"],
    },
    {
      icon: "office" as IconName,
      title: "Finance & Banking",
      roles: ["Head of Finance", "Risk & Compliance Director", "CFO"],
    },
    {
      icon: "chart-up" as IconName,
      title: "Healthcare & Life Sciences",
      roles: ["Director of Operations", "Head of Clinical Services", "VP of R&D"],
    },
    {
      icon: "truck" as IconName,
      title: "Manufacturing & Logistics",
      roles: ["Senior Supply Chain Manager", "Operations Director", "Plant Manager"],
    },
    {
      icon: "shopping-bag" as IconName,
      title: "Retail & Consumer",
      roles: ["VP of Sales", "Regional Director", "Head of Merchandising"],
    },
    {
      icon: "bpo" as IconName,
      title: "BPO / Operations",
      roles: ["Operations Director", "Site Manager", "Customer Experience Lead"],
    },
  ],
  footCta: { label: "View All Industries & Roles", href: "#contact" },
};

export const process = {
  eyebrow: "The Process",
  heading: "From Brief to Placement: Our Executive Search Journey",
  lead: "Portal's structured 8-step process ensures you hire the right leaders with confidence and discretion.",
  // NOTE: step 1 is from the design; steps 2-8 drafted to a standard executive
  // search process — review/replace the copy as needed.
  steps: [
    {
      n: 1,
      title: "Briefing",
      items: ["Understand role requirements", "Define skills, experience, and cultural fit"],
    },
    {
      n: 2,
      title: "Market Mapping",
      items: ["Map the talent landscape", "Identify target companies and profiles"],
    },
    {
      n: 3,
      title: "Search & Sourcing",
      items: ["Approach active and passive candidates", "Engage discreetly through trusted networks"],
    },
    {
      n: 4,
      title: "Screening & Assessment",
      items: ["Conduct in-depth interviews", "Evaluate leadership, strategic, and cultural fit"],
    },
    {
      n: 5,
      title: "Shortlist Presentation",
      items: ["Present a curated shortlist", "Share detailed candidate profiles and insights"],
    },
    {
      n: 6,
      title: "Client Interviews",
      items: ["Coordinate interviews and feedback", "Support evaluation and decision-making"],
    },
    {
      n: 7,
      title: "Offer & Negotiation",
      items: ["Guide offer structuring", "Facilitate negotiation and acceptance"],
    },
    {
      n: 8,
      title: "Onboarding & Follow-up",
      items: ["Support a smooth onboarding", "Check in to ensure long-term success"],
    },
  ],
};

export const placements = {
  eyebrow: "Proof in leadership",
  heading: "Recent Executive Placements",
  hint: "Sample placements · hover to pause",
  cards: [
    {
      month: "Placed: April 2026",
      role: "VP of Finance",
      region: "Cebu City",
      desc: "Secured a finance leader to strengthen controls and guide a multi-region expansion",
      tag: "Executive Search",
    },
    {
      month: "Placed: March 2026",
      role: "Head of Technology",
      region: "Metro Manila",
      desc: "Recruited a senior technology leader through a discreet, confidential search",
      tag: "Executive Search",
    },
    {
      month: "Placed: June 2026",
      role: "HR Director",
      region: "Davao / Mindanao",
      desc: "Appointed an HR director to shape culture and scale the workforce nationwide",
      tag: "Executive Search",
    },
    {
      month: "Placed: May 2026",
      role: "Chief Operating Officer",
      region: "Metro Manila / Nationwide",
      desc: "Placed a transformational COO who realigned operations and accelerated regional growth",
      tag: "Executive Search",
    },
  ],
};

export const founder = {
  eyebrow: "From our founder",
  heading: "A Message from Noel De Leon",
  name: "Noel De Leon",
  role: "Founder & CEO",
  photo: "/assets/team/noel.jpg",
  quote:
    "At Portal, we understand that hiring executives is one of the most important decisions a company can make. Our mission is to provide a strategic, high-touch search process that connects companies with leaders who drive growth, innovation, and operational excellence across the Philippines.",
};

export const considerations = {
  eyebrow: "What matters most",
  heading: "Executive Search: Key Considerations",
  lead: "Ensure every executive hire drives growth, culture, and strategic impact.",
  items: [
    {
      n: "01",
      title: "Define the Role Clearly",
      body: "Clarify responsibilities, KPIs, and strategic impact before starting the search.",
    },
    {
      n: "02",
      title: "Align with Organizational Culture",
      body: "Evaluate how a candidate's leadership style and values complement your team.",
    },
    {
      n: "03",
      title: "Plan Your Candidate Pipeline",
      body: "Map potential candidates across industries and roles to ensure sufficient reach.",
    },
    {
      n: "04",
      title: "Structured Evaluation",
      body: "Use scorecards, interviews, and assessments consistently for all candidates.",
    },
  ],
  guide: {
    badge: "Free Guide",
    title: "The Strategic Hiring Playbook",
    image: "/assets/exec-ebook-cover.png",
    cta: { label: "Download the Guide", href: "#contact" },
    caption: "Get the complete Executive Search playbook with worksheets and templates.",
  },
};

export const faq = {
  eyebrow: "FAQ",
  heading: "Frequently Asked Questions",
  lead: "Common questions about Executive Search in the Philippines.",
  items: [
    {
      q: "What is Executive Search?",
      a: "Executive Search is a consultative, high-touch approach to recruiting senior leaders and specialized professionals. Portal manages the entire process — from defining the brief through to placement and onboarding — with a focus on strategic and cultural fit.",
    },
    {
      q: "How is it different from regular recruitment?",
      a: "Regular recruitment is typically reactive and volume-driven. Executive Search is proactive and confidential — we map the market, approach both active and passive candidates, and run an in-depth assessment to secure leaders for high-stakes roles.",
    },
    {
      q: "Which roles can Portal help recruit?",
      a: "Portal recruits for C-suite, senior management, and specialized strategic positions across industries including technology, finance and banking, healthcare, manufacturing and logistics, professional services, retail, and BPO/operations.",
    },
    {
      q: "Can Executive Search be conducted confidentially?",
      a: "Yes. Portal conducts discreet and confidential searches to protect sensitive positions, current incumbents, and your organization's reputation throughout the process.",
    },
    {
      q: "How long does a typical search take?",
      a: "Timelines vary with the seniority of the role, market availability, and assessment requirements. After the briefing stage, your consultant will share an expected timeline mapped to the structured search process.",
    },
    {
      q: "Can Portal help foreign companies recruit Philippine executives?",
      a: "Yes. Portal supports foreign companies with nationwide market expertise and can pair Executive Search with Employer of Record services to employ and onboard leaders compliantly. Book a meeting with us today!",
    },
  ],
};

export const finalCta = {
  eyebrow: "Let's talk",
  heading: "Find the Leaders Who Will Drive Your Growth",
  lead: "Book a consultation to start your Executive Search with Portal's market expertise, structured process, and nationwide reach.",
  primaryCta: { label: "Book a Meeting", href: "/book-a-meeting" },
  secondaryCta: { label: "Submit an Inquiry", href: "/contact" },
};
