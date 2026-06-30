"use client";

import { useRef, useState, type FormEvent } from "react";
import { validate, type Rules, type Values } from "@/lib/forms/validation";

/**
 * Dependency-free form state + validation. Best-practice UX:
 * - validate a field on blur,
 * - re-validate on change only AFTER it has already errored (no nagging while typing),
 * - validate everything on submit and focus the first invalid control,
 * - block double submits while submitting.
 *
 * A values ref mirrors state so blur/submit always read the latest values
 * synchronously (without nesting state updates). The form should set `noValidate`
 * and spread `formRef` so submit-time focus can target controls by id
 * (each field's focusable element uses id === field name).
 */
export function useFormState({
  initial,
  rules,
  onSubmit,
}: {
  initial: Values;
  rules: Rules;
  onSubmit: (values: Values) => Promise<void> | void;
}) {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const valuesRef = useRef<Values>(initial);
  const formRef = useRef<HTMLFormElement>(null);

  const runField = (name: string, vals: Values) =>
    validate(vals, { [name]: rules[name] ?? [] })[name];

  const setFieldError = (name: string, message: string | undefined) =>
    setErrors((errs) => {
      if (!message) {
        if (!errs[name]) return errs;
        const copy = { ...errs };
        delete copy[name];
        return copy;
      }
      if (errs[name] === message) return errs;
      return { ...errs, [name]: message };
    });

  const setValue = (name: string, value: string) => {
    const next = { ...valuesRef.current, [name]: value };
    valuesRef.current = next;
    setValues(next);
    // Only refresh an error that's already showing — no nagging mid-type.
    if (errors[name]) setFieldError(name, runField(name, next));
  };

  const handleBlur = (name: string) => {
    setFieldError(name, runField(name, valuesRef.current));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    const all = validate(valuesRef.current, rules);
    setErrors(all);
    const firstInvalid = Object.keys(all)[0];
    if (firstInvalid) {
      const el = formRef.current?.querySelector<HTMLElement>(
        `#${CSS.escape(firstInvalid)}`
      );
      el?.focus();
      return;
    }
    setSubmitting(true);
    try {
      await onSubmit(valuesRef.current);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return {
    values,
    errors,
    submitting,
    submitted,
    setValue,
    handleBlur,
    handleSubmit,
    formRef,
  };
}
