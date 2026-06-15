"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/LogoMark";
import { Icon } from "@/components/ui/Icon";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useStickyNav } from "@/hooks/useStickyNav";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { navFor } from "@/lib/nav";
import { getServiceByPath, SERVICES } from "@/lib/content/services";
import { cx } from "@/lib/cx";

// Homepage section ids the middle nav links point at (in document order), plus
// the hero ("top") and services grid so Home/Services highlight too.
const HOME_SPY_IDS = ["top", "services", "advantage", "who", "faq"];
const NO_SPY: string[] = [];

export function Nav() {
  const scrolled = useStickyNav();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { links, servicesHref } = navFor(pathname);

  const isHome = pathname === "/";
  const currentService = getServiceByPath(pathname);
  const spyIds = useMemo(() => HOME_SPY_IDS, []);
  const activeId = useScrollSpy(isHome ? spyIds : NO_SPY);

  const homeActive = isHome && (activeId === "top" || activeId === null);
  const servicesActive =
    !!currentService || (isHome && activeId === "services");

  // The homepage has a dark (night) hero; service pages have a light (day) hero.
  // So the nav is transparent/white only over the homepage hero, and uses its
  // solid/dark-text style everywhere else (and once scrolled) to stay readable.
  const solid = scrolled || !isHome;

  const linkBase =
    "font-body text-[.96rem] font-medium tracking-[-0.005em] transition-colors";
  const linkColor = solid
    ? "text-charcoal hover:text-gold-deep"
    : "text-white/[.82] hover:text-white";
  const activeColor = cx(
    "font-semibold",
    solid ? "text-gold-deep" : "text-gold"
  );
  const itemClass = (active: boolean) =>
    cx(linkBase, active ? activeColor : linkColor);

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-[100] border-b transition-[background-color,box-shadow,border-color] duration-300",
          solid
            ? "border-border bg-white/[.86] shadow-[0_1px_0_rgba(16,24,40,.04)] backdrop-blur-[14px] backdrop-saturate-150"
            : "border-transparent"
        )}
      >
        <Container className="flex h-[78px] items-center justify-between">
          <Link href="/" aria-label="Portal home">
            <Logo onDark={!solid} />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/"
                  aria-current={homeActive ? "page" : undefined}
                  className={itemClass(homeActive)}
                >
                  Home
                </Link>
              </li>

              <li className="group relative inline-flex items-center">
                <Link
                  href={servicesHref}
                  aria-current={servicesActive ? "page" : undefined}
                  className={itemClass(servicesActive)}
                >
                  Services
                </Link>

                {currentService && (
                  <>
                    {/* Service switcher: jump between service pages without
                        returning to the homepage. */}
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-label={`Current service: ${currentService.name}. Switch service`}
                      className={cx(
                        "ml-[.4rem] inline-flex items-center gap-[.35rem] font-body text-[.96rem] font-normal tracking-[-0.005em] transition-colors",
                        solid
                          ? "text-charcoal/55 hover:text-charcoal"
                          : "text-white/55 hover:text-white"
                      )}
                    >
                      <span aria-hidden="true" className="opacity-50">
                        ·
                      </span>
                      {currentService.name}
                      <Icon
                        name="caret-down"
                        strokeWidth={2.4}
                        className="h-[10px] w-[10px] opacity-70 transition-transform duration-200 group-hover:rotate-180"
                      />
                    </button>

                    <div
                      role="menu"
                      className={cx(
                        "invisible absolute left-0 top-[calc(100%+14px)] w-[280px] origin-top -translate-y-1 scale-[.97] rounded-[14px] border border-border bg-white p-[.45rem] opacity-0 shadow-lg transition-[opacity,transform] duration-200 ease-out",
                        "before:absolute before:-top-[14px] before:left-0 before:right-0 before:h-[14px] before:content-['']",
                        "group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100",
                        "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100"
                      )}
                    >
                      {SERVICES.map((s) => {
                        const isCurrent = s.slug === currentService.slug;
                        return (
                          <Link
                            key={s.href}
                            href={s.href}
                            role="menuitem"
                            aria-current={isCurrent ? "page" : undefined}
                            className={cx(
                              "flex items-center gap-[.7rem] rounded-[10px] p-[.55rem_.65rem] transition-colors",
                              isCurrent ? "bg-gold-tint" : "hover:bg-soft"
                            )}
                          >
                            <span
                              className={cx(
                                "grid h-[34px] w-[34px] flex-none place-items-center rounded-[9px] border",
                                isCurrent
                                  ? "border-[#f0e3c4] bg-white text-gold-deep"
                                  : "border-[#f0e3c4] bg-gold-tint text-gold-deep"
                              )}
                            >
                              <Icon name={s.icon} className="h-[17px] w-[17px]" />
                            </span>
                            <span className="min-w-0 flex-1 font-head text-[.92rem] font-semibold tracking-[-0.01em] text-navy">
                              {s.name}
                            </span>
                            {isCurrent && (
                              <Icon
                                name="check-circle"
                                strokeWidth={1.9}
                                className="h-[16px] w-[16px] flex-none text-gold-deep"
                              />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </>
                )}
              </li>

              {links.map((l) => {
                const active = isHome && !!l.sec && activeId === l.sec;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      data-sec={l.sec}
                      aria-current={active ? "true" : undefined}
                      className={itemClass(active)}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
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
                solid ? "text-navy" : "text-white"
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
