import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Icon } from "@/components/ui/Icon";

type Variant = "primary" | "ghost-dark" | "ghost-light" | "outline-gold";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-gold text-navy shadow-gold hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(217,164,55,.36)]",
  "ghost-dark":
    "bg-transparent text-white border-white/28 hover:border-gold hover:text-gold hover:-translate-y-0.5",
  "ghost-light":
    "bg-transparent text-navy border-navy hover:bg-navy hover:text-white hover:-translate-y-0.5",
  "outline-gold":
    "bg-transparent text-gold-deep border-gold hover:bg-gold hover:text-navy hover:-translate-y-0.5",
};

const BASE =
  "inline-flex items-center justify-center gap-[.6rem] font-head font-bold tracking-[-0.01em] rounded-sm border-[1.5px] border-transparent whitespace-nowrap transition-[transform,box-shadow,background-color,color,border-color] duration-200";

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
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}
