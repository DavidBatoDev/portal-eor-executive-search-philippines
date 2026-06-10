import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type Bg = "white" | "cream" | "soft" | "navy" | "navy-deep";

const BG: Record<Bg, string> = {
  white: "bg-white",
  cream: "bg-cream",
  soft: "bg-soft",
  navy: "bg-navy",
  "navy-deep": "bg-navy-900",
};

/** Standard page section: brand vertical rhythm + background. `dark` applies
 *  the `.on-dark` text treatment used on navy sections. */
export function Section({
  id,
  bg = "white",
  dark = false,
  className,
  children,
}: {
  id?: string;
  bg?: Bg;
  dark?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cx(
        "relative py-[clamp(4.5rem,3rem+7vw,8rem)]",
        BG[bg],
        dark && "on-dark",
        className
      )}
    >
      {children}
    </section>
  );
}
