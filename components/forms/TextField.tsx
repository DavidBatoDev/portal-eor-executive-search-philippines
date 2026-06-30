"use client";

import { Field, FieldProps, controlClass } from "@/components/forms/Field";

/** Single-line text/email input wired for accessible inline validation. */
export function TextField({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  required,
  optional,
  placeholder,
  autoComplete,
  type = "text",
  inputMode,
  className,
}: FieldProps & {
  type?: "text" | "email";
  inputMode?: "text" | "email";
}) {
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
        type={type}
        inputMode={inputMode}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
        className={controlClass(!!error)}
      />
    </Field>
  );
}
