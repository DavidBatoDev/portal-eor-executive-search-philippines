import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cx } from "@/lib/cx";

/** Eyebrow + heading + optional lead. Mirrors `.section-head` / `.center`. */
export function SectionHead({
  eyebrow,
  eyebrowTone = "deep",
  heading,
  lead,
  center = false,
  className,
  children,
}: {
  eyebrow: string;
  eyebrowTone?: "deep" | "soft";
  heading: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cx(
        center ? "mx-auto max-w-[min(940px,92%)] text-center" : "max-w-[760px]",
        className
      )}
    >
      <Eyebrow center={center} tone={eyebrowTone} className="mb-[1.1rem]">
        {eyebrow}
      </Eyebrow>
      <h2>{heading}</h2>
      {lead && (
        <p className={cx("lead mt-[1.25rem]", center && "mx-auto max-w-[62ch]")}>
          {lead}
        </p>
      )}
      {children}
    </div>
  );
}
