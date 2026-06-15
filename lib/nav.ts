// Per-page nav configuration. The shared <Nav> (mounted in the root layout)
// picks the right middle links + mobile "Services" target by pathname, so each
// page keeps its own section anchors while reusing one nav component.

export type NavLink = { label: string; href: string; sec?: string };
export type NavConfig = { links: NavLink[]; servicesHref: string };

const HOME: NavConfig = {
  links: [
    { label: "How It Works", href: "#advantage", sec: "advantage" },
    { label: "Who We Help", href: "#who", sec: "who" },
    { label: "Resources", href: "#faq", sec: "faq" },
  ],
  servicesHref: "#services",
};

// Subpages link the middle items back to the homepage sections.
const SUBPAGE: NavConfig = {
  links: [
    { label: "How It Works", href: "/#advantage" },
    { label: "Who We Help", href: "/#who" },
    { label: "Resources", href: "/#faq" },
  ],
  servicesHref: "/#services",
};

export const NAV_BY_PATH: Record<string, NavConfig> = {
  "/": HOME,
};

export function navFor(pathname: string): NavConfig {
  return NAV_BY_PATH[pathname] ?? SUBPAGE;
}
