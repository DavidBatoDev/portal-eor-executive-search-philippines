import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Icon } from "@/components/ui/Icon";

type Variant = "primary" | "ghost-dark" | "ghost-light" | "outline-gold";

// Hover styles key off a stable wrapper (`group/btn`) rather than the element
// itself: the lift translates the inner element, but hover is detected on the
// non-moving wrapper, so the cursor never falls out of the hover region at the
// edge (which would otherwise cause a hover/un-hover jitter).
const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-gold text-navy shadow-gold group-hover/btn:bg-gold-soft group-hover/btn:-translate-y-0.5 group-hover/btn:shadow-[0_16px_34px_rgba(217,164,55,.36)]",
  "ghost-dark":
    "bg-transparent text-white border-white/28 group-hover/btn:border-gold group-hover/btn:text-gold group-hover/btn:-translate-y-0.5",
  "ghost-light":
    "bg-transparent text-navy border-navy group-hover/btn:bg-navy group-hover/btn:text-white group-hover/btn:-translate-y-0.5",
  "outline-gold":
    "bg-transparent text-gold-deep border-gold group-hover/btn:bg-gold group-hover/btn:text-navy group-hover/btn:-translate-y-0.5",
};

const BASE =
  "inline-flex items-center justify-center gap-[.6rem] font-head font-bold tracking-[-0.01em] rounded-sm border-[1.5px] border-transparent whitespace-nowrap transition-[transform,translate,box-shadow,background-color,color,border-color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:duration-150 hover:ease-out";

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: "md" | "sm";
  arrow?: boolean;
  className?: string;
}) {
  const classes = cx(
    BASE,
    VARIANTS[variant],
    size === "sm" ? "px-5 py-[.7rem] text-[.95rem]" : "px-[1.6rem] py-[.92rem] text-base",
    className
  );
  const content = (
    <>
      {children}
      {arrow && <Icon name="arrow-right" strokeWidth={2.2} className="h-4.5 w-4.5" />}
    </>
  );
  const inner = href.startsWith("/") ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <a href={href} className={classes}>
      {content}
    </a>
  );
  return <span className="group/btn inline-flex">{inner}</span>;
}
