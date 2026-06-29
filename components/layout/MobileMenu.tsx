"use client";

import { useEffect } from "react";
import { Logo } from "@/components/ui/LogoMark";
import type { NavLink } from "@/lib/nav";
import { cx } from "@/lib/cx";

export function MobileMenu({
  open,
  onClose,
  links,
  servicesHref,
  homeHref,
  ctaLabel = "Book a Consultation",
  ctaHref = "#contact",
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  servicesHref: string;
  homeHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  // Lock body scroll while the menu is open (portal.js setMenu behavior).
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = [
    ...(homeHref ? [{ label: "Home", href: homeHref }] : []),
    { label: "Services", href: servicesHref },
    ...links,
  ];

  return (
    <div
      className={cx(
        "fixed inset-0 z-200 flex flex-col overflow-y-auto bg-navy px-[clamp(20px,5vw,40px)] pb-10 pt-6 transition-transform duration-400 ease-[cubic-bezier(.4,0,.2,1)]",
        open ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex h-19.5 items-center justify-between">
        <Logo onDark />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="h-11 w-11 text-2xl leading-none text-white"
        >
          &times;
        </button>
      </div>
      <nav aria-label="Mobile" className="mt-6 flex flex-col gap-[.3rem]">
        {items.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={onClose}
            className="border-b border-white/8 py-[.7rem] font-head text-2xl font-bold tracking-[-0.01em] text-white"
          >
            {l.label}
          </a>
        ))}
        <a
          href={ctaHref}
          onClick={onClose}
          className="mt-[1.8rem] inline-flex w-full items-center justify-center rounded-sm bg-gold px-[1.6rem] py-[.92rem] font-head font-bold text-navy shadow-gold"
        >
          {ctaLabel}
        </a>
      </nav>
    </div>
  );
}
