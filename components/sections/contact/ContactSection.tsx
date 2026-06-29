"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Dropdown } from "@/components/ui/Dropdown";
import { RingWatermark } from "@/components/ui/RingWatermark";
import { contact, form, SERVICE_OPTIONS } from "@/lib/content/contact";

const fieldClass =
  "w-full rounded-md border border-[#e9dfc9] bg-cream px-4 py-3 font-body text-[.98rem] text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-body/55 focus:border-gold/60 focus:shadow-[0_0_0_3px_rgba(217,164,55,.14)]";
const labelClass = "block font-head text-[.9rem] font-semibold text-navy";

const SUCCESS = (
  <div className="flex items-start gap-3 rounded-md border border-gold/40 bg-gold-tint p-5">
    <Icon name="check-circle" className="h-6 w-6 flex-none text-gold-deep" />
    <div>
      <p className="font-head font-bold text-navy">
        Thank you — your inquiry has been received.
      </p>
      <p className="mt-1 text-[.95rem] text-body">
        Our team will reach out to you as soon as possible.
      </p>
    </div>
  </div>
);

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
    primary: (
      <p className="font-medium text-navy">{contact.address.primary}</p>
    ),
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
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

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

              {sent ? (
                <div className="mt-7">{SUCCESS}</div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  aria-label="Inquiry form"
                  className="mt-7 flex flex-col gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-company" className={labelClass}>
                        Company Name <span className="text-gold-deep">*</span>
                      </label>
                      <input
                        id="c-company"
                        name="company"
                        type="text"
                        placeholder="Your company"
                        autoComplete="organization"
                        required
                        className={fieldClass}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-person" className={labelClass}>
                        Contact Person <span className="text-gold-deep">*</span>
                      </label>
                      <input
                        id="c-person"
                        name="person"
                        type="text"
                        placeholder="Full name"
                        autoComplete="name"
                        required
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-email" className={labelClass}>
                        Email Address <span className="text-gold-deep">*</span>
                      </label>
                      <input
                        id="c-email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        autoComplete="email"
                        required
                        className={fieldClass}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-mobile" className={labelClass}>
                        Mobile Number <span className="text-gold-deep">*</span>
                      </label>
                      <input
                        id="c-mobile"
                        name="mobile"
                        type="tel"
                        placeholder="+63 9XX XXX XXXX"
                        autoComplete="tel"
                        required
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="c-service" className={labelClass}>
                      Service Needed <span className="text-gold-deep">*</span>
                    </label>
                    <Dropdown
                      id="c-service"
                      name="service"
                      options={SERVICE_OPTIONS}
                      placeholder="Select a service"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="c-message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your requirements…"
                      className={`${fieldClass} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 inline-flex w-full items-center justify-center gap-[.6rem] rounded-md bg-gold px-[1.6rem] py-[.95rem] font-head font-bold text-navy shadow-gold transition-[transform,translate,box-shadow,background-color] duration-200 ease-in-out hover:duration-150 hover:ease-out hover:-translate-y-0.5 hover:bg-gold-soft"
                  >
                    Send Inquiry
                    <Icon name="arrow-right" strokeWidth={2.2} className="h-4.5 w-4.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
