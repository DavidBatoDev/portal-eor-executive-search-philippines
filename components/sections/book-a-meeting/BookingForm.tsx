"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { TextField } from "@/components/forms/TextField";
import { PhoneField } from "@/components/forms/PhoneField";
import { DateField } from "@/components/forms/DateField";
import { SelectField } from "@/components/forms/SelectField";
import { TextAreaField } from "@/components/forms/TextAreaField";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { useFormState } from "@/hooks/useFormState";
import {
  required,
  email,
  phPhone,
  weekdayDate,
  todayISO,
  type Rules,
} from "@/lib/forms/validation";
import { form } from "@/lib/content/book-a-meeting";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  message: "",
};

const RULES: Rules = {
  name: [required("Please enter your name.")],
  email: [required("Please enter your email."), email()],
  phone: [required("Please enter your phone number."), phPhone()],
  date: [required("Please choose a date."), weekdayDate()],
  time: [required("Please choose a time.")],
};

export function BookingForm() {
  const { values, errors, submitting, submitted, setValue, handleBlur, handleSubmit, formRef } =
    useFormState({
      initial: INITIAL,
      rules: RULES,
      // UX-only: simulate a network round-trip so the busy state is visible.
      onSubmit: () => new Promise((resolve) => setTimeout(resolve, 700)),
    });

  // Floor the date picker at today, set after mount to avoid hydration mismatch.
  const [minDate, setMinDate] = useState<string | undefined>(undefined);
  useEffect(() => setMinDate(todayISO()), []);

  return (
    <section id="schedule" className="bg-white py-[clamp(4rem,3rem+4vw,7rem)]">
      <Container className="max-w-195">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
            <div className="absolute inset-x-0 top-0 h-1 bg-gold" aria-hidden="true" />
            <div className="p-[clamp(2rem,3vw,3rem)]">
              <h2 className="font-head text-[1.55rem] font-bold tracking-[-0.015em] text-navy">
                {form.heading}
              </h2>
              <p className="mt-[.4rem] text-[.96rem] text-body">{form.subtitle}</p>

              {submitted ? (
                <div className="mt-7">
                  <FormSuccess
                    title={form.success.title}
                    message={form.success.message}
                    action={form.success.action}
                  />
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Book a meeting form"
                  className="mt-7 flex flex-col gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <TextField
                      name="name"
                      label="Full Name"
                      required
                      placeholder="Your full name"
                      autoComplete="name"
                      value={values.name}
                      error={errors.name}
                      onChange={setValue}
                      onBlur={handleBlur}
                    />
                    <TextField
                      name="email"
                      label="Email Address"
                      type="email"
                      inputMode="email"
                      required
                      placeholder="you@company.com"
                      autoComplete="email"
                      value={values.email}
                      error={errors.email}
                      onChange={setValue}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <DateField
                      name="date"
                      label="Preferred Date"
                      required
                      min={minDate}
                      value={values.date}
                      error={errors.date}
                      onChange={setValue}
                      onBlur={handleBlur}
                    />
                    <SelectField
                      name="time"
                      label="Preferred Time"
                      required
                      placeholder="Select a time"
                      options={form.timeSlots}
                      value={values.time}
                      error={errors.time}
                      onChange={setValue}
                      onBlur={handleBlur}
                    />
                  </div>

                  <PhoneField
                    name="phone"
                    label="Phone Number"
                    required
                    value={values.phone}
                    error={errors.phone}
                    onChange={setValue}
                    onBlur={handleBlur}
                  />

                  <TextAreaField
                    name="message"
                    label="Message"
                    optional
                    placeholder="Tell us briefly what you'd like to discuss…"
                    value={values.message}
                    onChange={setValue}
                    onBlur={handleBlur}
                  />

                  <SubmitButton
                    label={form.submitLabel}
                    submittingLabel={form.submittingLabel}
                    submitting={submitting}
                  />

                  <p className="flex items-center justify-center gap-2 text-[.88rem] text-body">
                    <Icon
                      name="check"
                      strokeWidth={2.4}
                      className="h-4 w-4 flex-none text-gold-deep"
                    />
                    {form.confirmNote}
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
