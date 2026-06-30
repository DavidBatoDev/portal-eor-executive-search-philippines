"use client";

import { Field, FieldProps } from "@/components/forms/Field";
import { Dropdown } from "@/components/ui/Dropdown";

/** Accessible select built on the shared Dropdown, wired for inline validation. */
export function SelectField({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  required,
  optional,
  placeholder,
  options,
  className,
}: FieldProps & { options: string[] }) {
  return (
    <Field
      id={name}
      label={label}
      required={required}
      optional={optional}
      error={error}
      className={className}
    >
      <Dropdown
        id={name}
        name={name}
        options={options}
        value={value}
        placeholder={placeholder}
        invalid={!!error}
        required={required}
        describedById={error ? `${name}-error` : undefined}
        onChange={(v) => onChange(name, v)}
        onBlur={() => onBlur(name)}
      />
    </Field>
  );
}
