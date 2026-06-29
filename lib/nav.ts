// Per-page nav configuration. The shared <Nav> (mounted in the root layout)
// picks the right middle links + mobile "Services" target by pathname, so each
// page keeps its own section anchors while reusing one nav component.

export type NavLink = { label: string; href: string; sec?: string };
// `homeHref` adds a leading "Home" link on inner pages (the homepage omits it).
// `ctaLabel` overrides the header CTA text (defaults to "Book a Consultation").
// `ctaHref` overrides the header CTA destination (defaults to "#contact").
export type NavConfig = {
  links: NavLink[];
  servicesHref: string;
  homeHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const HOME: NavConfig = {
  links: [
    { label: "How It Works", href: "#advantage", sec: "advantage" },
    { label: "Who We Help", href: "#who", sec: "who" },
    { label: "Resources", href: "#faq", sec: "faq" },
  ],
  servicesHref: "#services",
};

export const NAV_BY_PATH: Record<string, NavConfig> = {
  "/": HOME,
  "/eor": {
    links: [
      { label: "How EOR Works", href: "#process", sec: "process" },
      { label: "Who It's For", href: "#who", sec: "who" },
      { label: "FAQ", href: "#faq", sec: "faq" },
    ],
    servicesHref: "/#services",
    homeHref: "/",
  },
  "/manpower-solutions": {
    links: [
      { label: "How It Works", href: "#process", sec: "process" },
      { label: "Who It's For", href: "#who", sec: "who" },
      { label: "FAQ", href: "#faq", sec: "faq" },
    ],
    servicesHref: "/#services",
  },
  "/shared-services": {
    links: [
      { label: "How It Works", href: "#process", sec: "process" },
      { label: "Who It's For", href: "#who", sec: "who" },
      { label: "FAQ", href: "#faq", sec: "faq" },
    ],
    servicesHref: "/#services",
    homeHref: "/",
    ctaLabel: "Book a Meeting",
  },
  "/bpo-lite": {
    links: [
      { label: "How It Works", href: "#process", sec: "process" },
      { label: "Who It's For", href: "#who", sec: "who" },
      { label: "FAQ", href: "#faq", sec: "faq" },
    ],
    servicesHref: "/#services",
    homeHref: "/",
    ctaLabel: "Book a Meeting",
  },
  "/contact": {
    links: [
      { label: "How It Works", href: "/#advantage" },
      { label: "Who We Help", href: "/#who" },
      { label: "Contact", href: "/contact" },
    ],
    servicesHref: "/#services",
    homeHref: "/",
    ctaLabel: "Send an Inquiry",
    ctaHref: "#inquiry",
  },
};

export function navFor(pathname: string): NavConfig {
  // Service pages link back to the homepage services section, with a Home link.
  return NAV_BY_PATH[pathname] ?? { ...HOME, servicesHref: "/#services", homeHref: "/" };
}
