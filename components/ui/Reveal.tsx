"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cx } from "@/lib/cx";

/**
 * Scroll-reveal wrapper. Renders the given element (default <div>) with the
 * `.reveal` class and adds `.in` when it enters the viewport — same
 * IntersectionObserver settings as the original portal.js (§8). `delay` maps to
 * the staggered d1–d4 transition delays.
 */
export function Reveal({
  as,
  delay,
  className,
  children,
  ...rest
}: {
  as?: ElementType;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
  children: ReactNode;
} & Record<string, unknown>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={cx("reveal", delay && `d${delay}`, className)} {...rest}>
      {children}
    </Tag>
  );
}
