"use client";

import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { RingWatermark } from "@/components/ui/RingWatermark";
import { TextField } from "@/components/forms/TextField";
import { PhoneField } from "@/components/forms/PhoneField";
import { SelectField } from "@/components/forms/SelectField";
import { TextAreaField } from "@/components/forms/TextAreaField";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { FormError } from "@/components/forms/FormError";
import { useFormState } from "@/hooks/useFormState";
import { required, email, phPhone, type Rules } from "@/lib/forms/validation";
import { contact, form, SERVICE_OPTIONS } from "@/lib/content/contact";

const INITIAL = {
  company: "",
  person: "",
  email: "",
  mobile: "",
  service: "",
  message: "",
};

const RULES: Rules = {
  company: [required("Please enter your company name.")],
  person: [required("Please enter your name.")],
  email: [required("Please enter your email."), email()],
  // Mobile is optional, but if provided it must be a valid PH number.
  mobile: [phPhone()],
  service: [required("Please select a service.")],
};

const CONTACT_ITEMS = [
  {
    icon: "phone" as const,
    label: contact.phone.label,
    primary: (
      <a
        href={contact.phone.href}
        className="font-medium text-navy transition-colors hover:text-gold-deep"
      >
        {contact.phone.display}
      </a>
    ),
  },
  {
    icon: "mail" as const,
    label: contact.email.label,
    primary: (
      <a
        href={contact.email.href}
        className="font-medium text-navy transition-colors hover:text-gold-deep"
      >
        {contact.email.display}
      </a>
    ),
  },
  {
    icon: "map-pin" as const,
    label: contact.address.label,
    primary: <p className="font-medium text-navy">{contact.address.primary}</p>,
    secondary: contact.address.secondary,
  },
  {
    icon: "clock" as const,
    label: contact.hours.label,
    primary: <p className="font-medium text-navy">{contact.hours.primary}</p>,
    secondary: contact.hours.secondary,
  },
];

export function ContactSection() {
  const {
    values,
    errors,
    submitting,
    submitted,
    submitError,
    setValue,
    handleBlur,
    handleSubmit,
    formRef,
  } = useFormState({
    initial: INITIAL,
    rules: RULES,
    onSubmit: async (values) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "We couldn't submit your inquiry. Please try again.");
      }
    },
  });

  return (
    <section
      id="inquiry"
      className="relative overflow-hidden bg-cream py-[clamp(5rem,4rem+6vw,9rem)]"
    >
      <RingWatermark
        circles={[30, 55, 80, 99]}
        dot={12}
        colorClass="text-navy"
        className="right-[-8%] top-1/2 h-160 w-160 -translate-y-1/2 opacity-[0.04]"
      />

      <Container className="relative z-1">
        <div className="grid gap-[clamp(3rem,5vw,5.5rem)] lg:grid-cols-[1fr_1.25fr] lg:items-start">
          {/* ── Left: intro + contact details ── */}
          <div>
            <Reveal>
              <Eyebrow className="mb-[1.1rem]">{contact.eyebrow}</Eyebrow>
              <h1 className="text-[clamp(2.2rem,1.5rem+2.5vw,3rem)] tracking-[-0.02em]">
                {contact.heading}
              </h1>
              <p className="lead mt-5">{contact.leadPrimary}</p>
              <p className="lead mt-[.9rem]">{contact.leadSecondary}</p>
            </Reveal>

            <Reveal className="mt-[clamp(2rem,3.5vw,3rem)] flex flex-col gap-[1.4rem]">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="mt-[.1rem] grid h-11 w-11 flex-none place-items-center rounded-xl border border-[#f0e3c4] bg-white text-gold-deep shadow-sm">
                    <Icon name={item.icon} strokeWidth={1.7} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="mb-[.15rem] font-head text-[.75rem] font-bold uppercase tracking-[.1em] text-gold-deep">
                      {item.label}
                    </p>
                    {item.primary}
                    {item.secondary && (
                      <p className="mt-[.1rem] text-[.9rem] text-body/75">
                        {item.secondary}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal className="mt-8">
              <a
                href={contact.callCta.href}
                className="inline-flex items-center gap-[.6rem] rounded-sm bg-gold px-[1.6rem] py-[.92rem] font-head font-bold text-navy shadow-gold transition-[transform,translate,box-shadow,background-color] duration-200 ease-in-out hover:duration-150 hover:ease-out hover:-translate-y-0.5 hover:bg-gold-soft"
              >
                {contact.callCta.label}
                <Icon name="phone" strokeWidth={2.2} className="h-4.5 w-4.5" />
              </a>
            </Reveal>
          </div>

          {/* ── Right: form card ── */}
          <Reveal>
            <div className="rounded-2xl border border-border bg-white p-[clamp(2rem,3vw,3rem)] shadow-lg">
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
                  aria-label="Inquiry form"
                  className="mt-7 flex flex-col gap-5"
                >
                  {submitError && <FormError message={submitError} />}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <TextField
                      name="company"
                      label="Company Name"
                      required
                      placeholder="Your company"
                      autoComplete="organization"
                      value={values.company}
                      error={errors.company}
                      onChange={setValue}
                      onBlur={handleBlur}
                    />
                    <TextField
                      name="person"
                      label="Contact Person"
                      required
                      placeholder="Full name"
                      autoComplete="name"
                      value={values.person}
                      error={errors.person}
                      onChange={setValue}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
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
                    <PhoneField
                      name="mobile"
                      label="Mobile Number"
                      optional
                      value={values.mobile}
                      error={errors.mobile}
                      onChange={setValue}
                      onBlur={handleBlur}
                    />
                  </div>

                  <SelectField
                    name="service"
                    label="Service Needed"
                    required
                    placeholder="Select a service"
                    options={SERVICE_OPTIONS}
                    value={values.service}
                    error={errors.service}
                    onChange={setValue}
                    onBlur={handleBlur}
                  />

                  <TextAreaField
                    name="message"
                    label="Message"
                    optional
                    placeholder="Tell us about your requirements…"
                    value={values.message}
                    onChange={setValue}
                    onBlur={handleBlur}
                  />

                  <SubmitButton
                    label={form.submitLabel}
                    submittingLabel={form.submittingLabel}
                    submitting={submitting}
                  />
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
