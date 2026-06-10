"use client";

import { useEffect } from "react";

/**
 * Ports the smooth-scroll-with-offset behavior from portal.js: clicking an
 * in-page anchor (href="#id") scrolls with a 70px offset for the sticky nav.
 * Mounted once in the root layout.
 */
export function SmoothAnchors() {
  useEffect(() => {
    function onClick(ev: MouseEvent) {
      const target = ev.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      ev.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
