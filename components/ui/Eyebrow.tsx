import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

const Line = () => (
  <span className="inline-block h-0.5 w-6.5 flex-none bg-gold" />
);

/**
 * Section eyebrow: gold-deep label with a short gold rule before it
 * (and after, when centered). `tone="soft"` switches to gold-soft for dark
 * sections, matching the inline overrides in the drafts.
 */
export function Eyebrow({
  children,
  center = false,
  tone = "deep",
  className,
}: {
  children: ReactNode;
  center?: boolean;
  tone?: "deep" | "soft";
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-[.6rem] font-body text-[.78rem] font-semibold tracking-[.14em]",
        tone === "soft" ? "text-gold-soft" : "text-gold-deep",
        center && "justify-center",
        className
      )}
    >
      <Line />
      {children}
      {center && <Line />}
    </span>
  );
}
