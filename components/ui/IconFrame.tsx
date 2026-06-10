import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type Tone = "gold" | "navy" | "teal" | "copper";

const TONES: Record<Tone, string> = {
  gold: "bg-gold-tint text-gold-deep border-[#f0e3c4]",
  navy: "bg-navy text-gold border-navy",
  teal: "bg-teal-tint text-teal border-[#cfe6e3]",
  copper: "bg-copper-tint text-copper border-[#ecd9c7]",
};

// 58×58 rounded icon tile — the "ring motif echo" frame used on service cards.
export function IconFrame({
  children,
  tone = "gold",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "grid h-[58px] w-[58px] flex-none place-items-center rounded-[14px] border [&>svg]:h-[27px] [&>svg]:w-[27px]",
        TONES[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
