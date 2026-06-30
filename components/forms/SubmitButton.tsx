"use client";

import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/cx";

/** Full-width gold submit button with an inline spinner + busy state. */
export function SubmitButton({
  label,
  submittingLabel,
  submitting,
}: {
  label: string;
  submittingLabel: string;
  submitting: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={submitting}
      aria-busy={submitting || undefined}
      className={cx(
        "mt-1 inline-flex w-full items-center justify-center gap-[.6rem] rounded-md bg-gold px-[1.6rem] py-[.95rem] font-head font-bold text-navy shadow-gold transition-[transform,translate,box-shadow,background-color] duration-200 ease-in-out",
        submitting
          ? "cursor-not-allowed opacity-80"
          : "hover:-translate-y-0.5 hover:bg-gold-soft hover:duration-150 hover:ease-out"
      )}
    >
      {submitting ? (
        <>
          <span
            className="h-4.5 w-4.5 animate-spin rounded-full border-2 border-navy/30 border-t-navy"
            aria-hidden="true"
          />
          {submittingLabel}
        </>
      ) : (
        <>
          {label}
          <Icon name="arrow-right" strokeWidth={2.2} className="h-4.5 w-4.5" />
        </>
      )}
    </button>
  );
}
