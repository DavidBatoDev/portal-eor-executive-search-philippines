"use client";

import { Field, FieldProps, controlClass } from "@/components/forms/Field";
import { cx } from "@/lib/cx";

// Format up to 10 local digits as "912 345 6789". Drops a leading 0 (users often
// type 0917…) and the +63 country code if pasted, so the stored value is the bare
// local number our `phPhone` validator expects.
function formatPhLocal(raw: string): string {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("63")) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = digits.slice(1);
  digits = digits.slice(0, 10);
  const parts = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6, 10)];
  return parts.filter(Boolean).join(" ");
}

/**
 * Phone input with a fixed inline "+63" prefix so users type only the local
 * number, auto-formatted as they go. Reduces keystrokes and format ambiguity.
 */
export function PhoneField({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  required,
  optional,
  placeholder = "912 345 6789",
  className,
}: FieldProps) {
  return (
    <Field
      id={name}
      label={label}
      required={required}
      optional={optional}
      error={error}
      className={className}
    >
      <div className="relative">
        <span
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 select-none font-body text-[.98rem] text-body"
          aria-hidden="true"
        >
          +63
        </span>
        <input
          id={name}
          name={name}
          type="tel"
          inputMode="numeric"
          value={value}
          placeholder={placeholder}
          autoComplete="tel-national"
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${name}-error` : undefined}
          onChange={(e) => onChange(name, formatPhLocal(e.target.value))}
          onBlur={() => onBlur(name)}
          className={cx(controlClass(!!error), "pl-12")}
        />
      </div>
    </Field>
  );
}
