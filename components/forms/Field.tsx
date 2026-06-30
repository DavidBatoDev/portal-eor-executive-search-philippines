import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/cx";

export const labelClass = "block font-head text-[.9rem] font-semibold text-navy";

// Shared input/textarea styling. Swaps to the danger palette when invalid so the
// border + focus ring read as an error. Mirrors the original `fieldClass` look.
export function controlClass(invalid?: boolean) {
  return cx(
    "w-full rounded-md border bg-cream px-4 py-3 font-body text-[.98rem] text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-body/55",
    invalid
      ? "border-danger focus:border-danger focus:shadow-[0_0_0_3px_rgba(180,35,24,.15)]"
      : "border-[#e9dfc9] focus:border-gold/60 focus:shadow-[0_0_0_3px_rgba(217,164,55,.14)]"
  );
}

// Props every concrete field component accepts. `onChange`/`onBlur` are keyed by
// field name so a single form handler can drive them all.
export type FieldProps = {
  name: string;
  label: string;
  value: string;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string) => void;
  error?: string;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
};

// Label + control slot + accessible inline error. The concrete field components
// render their control as `children` and pass the matching `describedById`.
export function Field({
  id,
  label,
  required,
  optional,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("flex flex-col gap-2", className)}>
      <label htmlFor={id} className={labelClass}>
        {label}{" "}
        {required && (
          <span className="text-gold-deep" aria-hidden="true">
            *
          </span>
        )}
        {optional && (
          <span className="font-normal text-body">(optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="flex items-center gap-1.5 text-[.82rem] font-medium text-danger"
        >
          <Icon
            name="alert-triangle"
            strokeWidth={2.2}
            className="h-3.5 w-3.5 flex-none"
          />
          {error}
        </p>
      )}
    </div>
  );
}
