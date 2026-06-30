"use client";

import { Field, FieldProps, controlClass } from "@/components/forms/Field";
import { cx } from "@/lib/cx";

/**
 * Native date picker, styled to match the form fields and floored at `min`
 * (today) so past dates can't be chosen. Weekend rejection is handled by the
 * `weekdayDate` validator since native inputs can't disable individual days.
 */
export function DateField({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  required,
  optional,
  min,
  className,
}: FieldProps & { min?: string }) {
  return (
    <Field
      id={name}
      label={label}
      required={required}
      optional={optional}
      error={error}
      className={className}
    >
      <input
        id={name}
        name={name}
        type="date"
        value={value}
        min={min}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
        className={cx(
          controlClass(!!error),
          // Keep height aligned with text inputs and tint the native picker icon.
          "scheme-light [&::-webkit-calendar-picker-indicator]:cursor-pointer",
          !value && "text-body"
        )}
      />
    </Field>
  );
}
