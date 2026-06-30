// Tiny dependency-free form validation. Each validator takes the field value
// (and the full value bag for cross-field rules) and returns an error message
// or `undefined` when valid. `validate()` runs a field's validators in order
// and stops at the first failure.

export type Values = Record<string, string>;
export type Validator = (value: string, values: Values) => string | undefined;
export type Rules = Record<string, Validator[]>;

export const required =
  (message = "This field is required."): Validator =>
  (v) =>
    v && v.trim() ? undefined : message;

export const email =
  (message = "Enter a valid email address."): Validator =>
  (v) => {
    if (!v.trim()) return undefined; // emptiness is `required`'s job
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? undefined : message;
  };

// Philippine mobile: 10 local digits starting with 9 (e.g. 912 345 6789).
// Strips formatting/spaces before checking.
export const phPhone =
  (message = "Enter a valid PH mobile number, e.g. 912 345 6789."): Validator =>
  (v) => {
    if (!v.trim()) return undefined;
    return /^9\d{9}$/.test(v.replace(/\D/g, "")) ? undefined : message;
  };

// Date string "YYYY-MM-DD": must be today-or-later and a weekday (Mon–Fri).
export const weekdayDate =
  (
    pastMessage = "Choose a date that hasn't passed.",
    weekendMessage = "We meet on weekdays — please pick Mon–Fri."
  ): Validator =>
  (v) => {
    if (!v.trim()) return undefined;
    const d = new Date(`${v}T00:00:00`);
    if (Number.isNaN(d.getTime())) return "Enter a valid date.";
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (d < today) return pastMessage;
    const day = d.getDay(); // 0 Sun … 6 Sat
    if (day === 0 || day === 6) return weekendMessage;
    return undefined;
  };

// Runs the rules for each provided field and returns only the fields that fail.
export function validate(values: Values, rules: Rules): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const field of Object.keys(rules)) {
    for (const rule of rules[field]) {
      const message = rule(values[field] ?? "", values);
      if (message) {
        errors[field] = message;
        break;
      }
    }
  }
  return errors;
}

// Today's date as "YYYY-MM-DD" in local time — for native date input `min`.
export function todayISO(): string {
  const d = new Date();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}
