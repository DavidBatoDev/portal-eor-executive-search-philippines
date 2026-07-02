"use client";

import { Field, FieldProps } from "@/components/forms/Field";
import { Calendar } from "@/components/ui/Calendar";

/**
 * Themed calendar picker built on the shared Calendar popover, floored at
 * `min` (today) so past dates can't be chosen. When `disableWeekends` is set,
 * weekend cells are dimmed and unclickable up front — mirroring the
 * `weekdayDate` validator instead of only catching it after submit.
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
  disableWeekends,
  className,
}: FieldProps & { min?: string; disableWeekends?: boolean }) {
  return (
    <Field
      id={name}
      label={label}
      required={required}
      optional={optional}
      error={error}
      className={className}
    >
      <Calendar
        id={name}
        name={name}
        value={value}
        min={min}
        disableWeekends={disableWeekends}
        invalid={!!error}
        required={required}
        describedById={error ? `${name}-error` : undefined}
        onChange={(v) => onChange(name, v)}
        onBlur={() => onBlur(name)}
      />
    </Field>
  );
}
