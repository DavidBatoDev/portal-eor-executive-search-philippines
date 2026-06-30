// Per-page nav configuration. The shared <Nav> (mounted in the root layout)
// picks the right middle links + mobile "Services" target by pathname. The link
// labels and CTA are standardized across every page; only the anchor targets
// differ: the homepage and service pages scroll to their own in-page sections,
// while other pages link back to the homepage sections.

export type NavLink = { label: string; href: string; sec?: string };
// `ctaLabel` overrides the header CTA text (defaults to "Book a Consultation").
// `ctaHref` overrides the header CTA destination (defaults to "#contact").
export type NavConfig = {
  links: NavLink[];
  servicesHref: string;
  ctaLabel?: string;
  ctaHref?: string;
};

// Canonical CTA shown on every page.
const CTA = { ctaLabel: "Book a Meeting", ctaHref: "/book-a-meeting" } as const;

// Homepage: in-page anchors (with `sec` for scroll-spy) + Contact Us.
const HOME: NavConfig = {
  links: [
    { label: "How It Works", href: "#advantage", sec: "advantage" },
    { label: "Who We Help", href: "#who", sec: "who" },
    { label: "Resources", href: "#faq", sec: "faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  servicesHref: "#services",
  ...CTA,
};

// Service pages: same labels, anchors scroll to the page's own sections.
const SERVICE: NavConfig = {
  links: [
    { label: "How It Works", href: "#process", sec: "process" },
    { label: "Who We Help", href: "#who", sec: "who" },
    { label: "Resources", href: "#faq", sec: "faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  servicesHref: "/#services",
  ...CTA,
};

// Executive Search: has its own #process and #faq, but no #who section, so
// "Who We Help" falls back to the homepage.
const EXECUTIVE_SEARCH: NavConfig = {
  links: [
    { label: "How It Works", href: "#process", sec: "process" },
    { label: "Who We Help", href: "/#who" },
    { label: "Resources", href: "#faq", sec: "faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  servicesHref: "/#services",
  ...CTA,
};

// Other inner pages: anchors point back to the homepage sections.
const INNER: NavConfig = {
  links: [
    { label: "How It Works", href: "/#advantage" },
    { label: "Who We Help", href: "/#who" },
    { label: "Resources", href: "/#faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  servicesHref: "/#services",
  ...CTA,
};

// Service pages that expose their own #process / #who / #faq sections.
const SERVICE_PATHS = new Set([
  "/eor",
  "/payroll-outsourcing",
  "/manpower-solutions",
  "/shared-services",
  "/hr-outsourcing",
  "/bpo-lite",
]);

export function navFor(pathname: string): NavConfig {
  if (pathname === "/") return HOME;
  if (pathname === "/executive-search") return EXECUTIVE_SEARCH;
  if (SERVICE_PATHS.has(pathname)) return SERVICE;
  return INNER;
}
