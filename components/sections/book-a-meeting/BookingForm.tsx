"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { form } from "@/lib/content/book-a-meeting";

const fieldClass =
  "w-full rounded-md border border-[#e9dfc9] bg-cream px-4 py-3 font-body text-[.98rem] text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-body/55 focus:border-gold/60 focus:shadow-[0_0_0_3px_rgba(217,164,55,.14)]";
const labelClass = "block font-head text-[.9rem] font-semibold text-navy";

const SUCCESS = (
  <div className="flex items-start gap-3 rounded-md border border-gold/40 bg-gold-tint p-5">
    <Icon name="check-circle" className="h-6 w-6 flex-none text-gold-deep" />
    <div>
      <p className="font-head font-bold text-navy">
        Thank you — your meeting request has been received.
      </p>
      <p className="mt-1 text-[.95rem] text-body">
        Our team will contact you to confirm your preferred time.
      </p>
    </div>
  </div>
);

export function BookingForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="schedule" className="bg-white py-[clamp(4rem,3rem+4vw,7rem)]">
      <Container className="max-w-[780px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
            <div className="absolute inset-x-0 top-0 h-1 bg-gold" aria-hidden="true" />
            <div className="p-[clamp(2rem,3vw,3rem)]">
              <h2 className="font-head text-[1.55rem] font-bold tracking-[-0.015em] text-navy">
                {form.heading}
              </h2>
              <p className="mt-[.4rem] text-[.96rem] text-body">{form.subtitle}</p>

              {sent ? (
                <div className="mt-7">{SUCCESS}</div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  aria-label="Book a meeting form"
                  className="mt-7 flex flex-col gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="bm-name" className={labelClass}>
                        Full Name <span className="text-gold-deep">*</span>
                      </label>
                      <input
                        id="bm-name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                        className={fieldClass}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="bm-email" className={labelClass}>
                        Email Address <span className="text-gold-deep">*</span>
                      </label>
                      <input
                        id="bm-email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        autoComplete="email"
                        required
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="bm-phone" className={labelClass}>
                        Phone Number <span className="text-gold-deep">*</span>
                      </label>
                      <input
                        id="bm-phone"
                        name="phone"
                        type="tel"
                        placeholder="+63 9XX XXX XXXX"
                        autoComplete="tel"
                        required
                        className={fieldClass}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="bm-datetime" className={labelClass}>
                        Preferred Day &amp; Time{" "}
                        <span className="text-gold-deep">*</span>
                      </label>
                      <input
                        id="bm-datetime"
                        name="datetime"
                        type="text"
                        placeholder="e.g. Tuesday, 10:00 AM"
                        required
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="bm-message" className={labelClass}>
                      Message{" "}
                      <span className="font-normal text-body/60">(optional)</span>
                    </label>
                    <textarea
                      id="bm-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us briefly what you'd like to discuss..."
                      className={`${fieldClass} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 inline-flex w-full items-center justify-center gap-[.6rem] rounded-md bg-gold px-[1.6rem] py-[.95rem] font-head font-bold text-navy shadow-gold transition-[transform,translate,box-shadow,background-color] duration-200 ease-in-out hover:duration-150 hover:ease-out hover:-translate-y-0.5 hover:bg-gold-soft"
                  >
                    {form.submitLabel}
                    <Icon name="arrow-right" strokeWidth={2.2} className="h-4.5 w-4.5" />
                  </button>

                  <p className="flex items-center justify-center gap-2 text-[.88rem] text-body/75">
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
