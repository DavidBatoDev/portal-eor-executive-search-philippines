// Registry for the individual service pages. Card copy reuses the homepage
// Services section where it exists; the one service missing from that grid
// (Payroll Outsourcing) falls back to its nav blurb — no invented copy.

import type { Metadata } from "next";
import type { IconName } from "@/components/ui/Icon";
import { services as navServices, servicesSection } from "@/lib/content/home";
import { meta as eorMeta } from "@/lib/content/eor";
import { pageMetadata } from "@/lib/seo";

export type ServiceInfo = {
  slug: string;
  href: string;
  /** Short name for the nav suffix, e.g. "Employer of Record". */
  name: string;
  /** Card/hero title (may be longer, e.g. "Employer of Record Philippines"). */
  title: string;
  body: string;
  linkLabel: string;
  icon: IconName;
  hasContent: boolean;
};

// Only EOR has a full page build today; the rest render a "coming soon" page.
const HAS_CONTENT = new Set(["eor"]);

export const SERVICES: ServiceInfo[] = navServices.map((s) => {
  const slug = s.href.replace(/^\/+/, "");
  const card = servicesSection.cards.find((c) => c.href === s.href);
  return {
    slug,
    href: s.href,
    name: s.title,
    title: card?.title ?? s.title,
    body: card?.body ?? s.blurb,
    linkLabel: card?.linkLabel ?? `Learn more about ${s.title}`,
    icon: card?.icon ?? s.icon,
    hasContent: HAS_CONTENT.has(slug),
  };
});

export function getService(slug: string): ServiceInfo | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** Look up a service by its route path, e.g. "/eor". */
export function getServiceByPath(pathname: string): ServiceInfo | undefined {
  return SERVICES.find((s) => s.href === pathname);
}

/** All services except the given one — for "Explore Our Other Services". */
export function otherServices(slug: string): ServiceInfo[] {
  return SERVICES.filter((s) => s.slug !== slug);
}

export function serviceMetadata(slug: string): Metadata {
  const s = getService(slug);
  if (!s) return pageMetadata({ title: "Service | Portal Philippines", description: "" });
  if (slug === "eor") {
    return pageMetadata({
      title: eorMeta.title,
      description: eorMeta.description,
      path: s.href,
    });
  }
  return pageMetadata({
    title: `${s.name} Philippines | Portal`,
    description: s.body,
    path: s.href,
  });
}
