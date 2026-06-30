"use client";

import { Field, FieldProps, controlClass } from "@/components/forms/Field";
import { cx } from "@/lib/cx";

/** Multi-line message field. Optional by default in our forms. */
export function TextAreaField({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  required,
  optional,
  placeholder,
  rows = 4,
  className,
}: FieldProps & { rows?: number }) {
  return (
    <Field
      id={name}
      label={label}
      required={required}
      optional={optional}
      error={error}
      className={className}
    >
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        placeholder={placeholder}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
        className={cx(controlClass(!!error), "resize-y")}
      />
    </Field>
  );
}
