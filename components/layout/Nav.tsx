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
  const pathname = usePathname();
  const stickyScrolled = useStickyNav();
  // Contact page has a light background from the top — always show the scrolled nav style.
  const scrolled = stickyScrolled || pathname === "/contact" || pathname === "/book-a-meeting";
  const [mobileOpen, setMobileOpen] = useState(false);
  const {
    links,
    servicesHref,
    homeHref,
    ctaLabel = "Book a Meeting",
    ctaHref = "/book-a-meeting",
  } = navFor(pathname);

  const linkBase =
    "font-body text-[.96rem] font-medium tracking-[-0.005em] transition-colors";
  const linkColor = scrolled
    ? "text-charcoal hover:text-gold-deep"
    : "text-white/82 hover:text-white";

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-100 border-b transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border-border bg-white/86 shadow-[0_1px_0_rgba(16,24,40,.04)] backdrop-blur-[14px] backdrop-saturate-150"
            : "border-transparent"
        )}
      >
        <Container className="flex h-19.5 items-center justify-between">
          <Link href="/" aria-label="Portal home">
            <Logo onDark={!scrolled} />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {homeHref && (
                <li>
                  <Link href={homeHref} className={cx(linkBase, linkColor)}>
                    Home
                  </Link>
                </li>
              )}
              {/* Services mega-dropdown */}
              <li className="group relative">
                <Link
                  href={servicesHref}
                  className={cx(linkBase, linkColor, "inline-flex items-center gap-[.34rem]")}
                >
                  Services
                  <Icon
                    name="caret-down"
                    strokeWidth={2.4}
                    className="h-2.75 w-2.75 opacity-70"
                  />
                </Link>
                <div
                  className={cx(
                    "invisible absolute left-1/2 top-[calc(100%+14px)] grid w-160 -translate-x-1/2 translate-y-2 grid-cols-2 gap-[.2rem] rounded-[14px] border border-border bg-white p-[.6rem] opacity-0 shadow-lg transition-[opacity,transform] duration-200",
                    "before:absolute before:-top-3.5 before:left-0 before:right-0 before:h-3.5 before:content-['']",
                    "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
                    "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
                    "max-[1080px]:w-130"
                  )}
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-start gap-[.85rem] rounded-sm p-[.7rem_.8rem] transition-colors hover:bg-soft"
                    >
                      <span className="grid h-9.5 w-9.5 flex-none place-items-center rounded-[9px] border border-[#f0e3c4] bg-gold-tint text-gold-deep">
                        <Icon name={s.icon} className="h-4.75 w-4.75" />
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
              href={ctaHref}
              className="hidden rounded-sm bg-gold px-5 py-[.7rem] font-head text-[.95rem] font-bold text-navy shadow-gold transition-[transform,translate,box-shadow,background-color] duration-200 ease-in-out hover:duration-150 hover:ease-out hover:-translate-y-0.5 hover:bg-gold-soft lg:inline-flex"
            >
              {ctaLabel}
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
              <span className="relative block h-0.5 w-6 bg-current before:absolute before:left-0 before:-top-1.75 before:h-0.5 before:w-6 before:bg-current before:content-[''] after:absolute after:left-0 after:top-1.75 after:h-0.5 after:w-6 after:bg-current after:content-['']" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={links}
        servicesHref={servicesHref}
        homeHref={homeHref}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
      />
    </>
  );
}
