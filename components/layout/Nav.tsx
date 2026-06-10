"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/LogoMark";
import { Icon } from "@/components/ui/Icon";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useStickyNav } from "@/hooks/useStickyNav";
import { services } from "@/lib/content/home";
import { navFor } from "@/lib/nav";
import { cx } from "@/lib/cx";

export function Nav() {
  const scrolled = useStickyNav();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { links, servicesHref } = navFor(usePathname());

  const linkBase =
    "font-body text-[.96rem] font-medium tracking-[-0.005em] transition-colors";
  const linkColor = scrolled
    ? "text-charcoal hover:text-gold-deep"
    : "text-white/[.82] hover:text-white";

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-[100] border-b transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border-border bg-white/[.86] shadow-[0_1px_0_rgba(16,24,40,.04)] backdrop-blur-[14px] backdrop-saturate-150"
            : "border-transparent"
        )}
      >
        <Container className="flex h-[78px] items-center justify-between">
          <Link href="/" aria-label="Portal home">
            <Logo onDark={!scrolled} />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {/* Services mega-dropdown */}
              <li className="group relative">
                <button
                  type="button"
                  className={cx(linkBase, linkColor, "inline-flex items-center gap-[.34rem]")}
                >
                  Services
                  <Icon
                    name="caret-down"
                    strokeWidth={2.4}
                    className="h-[11px] w-[11px] opacity-70"
                  />
                </button>
                <div
                  className={cx(
                    "invisible absolute left-1/2 top-[calc(100%+14px)] grid w-[640px] -translate-x-1/2 translate-y-2 grid-cols-2 gap-[.2rem] rounded-[14px] border border-border bg-white p-[.6rem] opacity-0 shadow-lg transition-[opacity,transform] duration-200",
                    "before:absolute before:-top-[14px] before:left-0 before:right-0 before:h-[14px] before:content-['']",
                    "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
                    "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
                    "max-[1080px]:w-[520px]"
                  )}
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-start gap-[.85rem] rounded-[10px] p-[.7rem_.8rem] transition-colors hover:bg-soft"
                    >
                      <span className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[9px] border border-[#f0e3c4] bg-gold-tint text-gold-deep">
                        <Icon name={s.icon} className="h-[19px] w-[19px]" />
                      </span>
                      <span>
                        <span className="block font-head text-[.96rem] font-bold tracking-[-0.01em] text-navy">
                          {s.title}
                        </span>
                        <span className="mt-[.15rem] block text-[.82rem] leading-[1.4] text-body">
                          {s.blurb}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </li>

              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} data-sec={l.sec} className={cx(linkBase, linkColor)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-[1.1rem]">
            <a
              href="#contact"
              className="hidden rounded-sm bg-gold px-5 py-[.7rem] font-head text-[.95rem] font-bold text-navy shadow-gold transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-gold-soft lg:inline-flex"
            >
              Book a Consultation
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={cx(
                "flex h-11 w-11 items-center justify-center lg:hidden",
                scrolled ? "text-navy" : "text-white"
              )}
            >
              <span className="relative block h-[2px] w-6 bg-current before:absolute before:left-0 before:top-[-7px] before:h-[2px] before:w-6 before:bg-current before:content-[''] after:absolute after:left-0 after:top-[7px] after:h-[2px] after:w-6 after:bg-current after:content-['']" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={links}
        servicesHref={servicesHref}
      />
    </>
  );
}
