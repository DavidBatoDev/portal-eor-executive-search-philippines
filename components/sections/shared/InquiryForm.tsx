"use client";

import { useState, type FormEvent } from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { RingWatermark } from "@/components/ui/RingWatermark";

const fieldClass =
  "rounded-md border border-[#e9dfc9] bg-cream px-4 py-3 font-body text-[.98rem] text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-body/55 focus:border-gold/60 focus:shadow-[0_0_0_3px_rgba(217,164,55,.14)]";
const labelClass = "font-head text-[.9rem] font-semibold text-navy";

// Service-page inquiry form. No backend yet — submission shows an inline
// confirmation client-side (§forms placeholder).
export function InquiryForm({
  eyebrow,
  heading,
  formTitle,
  id = "inquiry",
}: {
  eyebrow: string;
  heading: string;
  formTitle: string;
  id?: string;
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Section id={id} bg="white">
      <Container>
        <Reveal>
          <SectionHead center eyebrow={eyebrow} heading={heading} />
        </Reveal>

        <Reveal className="mx-auto mt-[clamp(2.5rem,4vw,3.5rem)] max-w-205">
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-lg border border-border bg-white p-[clamp(1.6rem,3vw,2.6rem)] shadow-lg"
          >
            <RingWatermark
              circles={[30, 60, 90]}
              dot={12}
              colorClass="text-navy"
              className="right-[-12%] top-[-30%] h-80 w-80 opacity-[0.04]"
            />
            <div className="relative z-1 mb-7 flex items-center gap-[.55rem] font-body text-[.8rem] font-semibold uppercase tracking-[.14em] text-gold-deep">
              <Icon name="message-lines" strokeWidth={1.9} className="h-4.5 w-4.5" />
              {formTitle}
            </div>

            {sent ? (
              <div className="relative z-1 flex items-start gap-3 rounded-md border border-gold/40 bg-gold-tint p-5">
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
            ) : (
              <div className="relative z-1 flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="ss-company" className={labelClass}>
                      Company Name
                    </label>
                    <input
                      id="ss-company"
                      name="company"
                      type="text"
                      placeholder="Your company"
                      autoComplete="organization"
                      className={fieldClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="ss-contact" className={labelClass}>
                      Contact Name
                    </label>
                    <input
                      id="ss-contact"
                      name="contact"
                      type="text"
                      placeholder="Full name"
                      autoComplete="name"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="ss-email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="ss-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      className={fieldClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="ss-phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="ss-phone"
                      name="phone"
                      type="tel"
                      placeholder="+63 ..."
                      autoComplete="tel"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="ss-notes" className={labelClass}>
                    Services Needed / Notes
                  </label>
                  <textarea
                    id="ss-notes"
                    name="notes"
                    rows={4}
                    placeholder="Tell us which functions you'd like to centralize, team size, and timeline"
                    className={`${fieldClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex w-full items-center justify-center gap-[.6rem] rounded-md bg-gold px-[1.6rem] py-[.95rem] font-head font-bold text-navy shadow-gold transition-[transform,translate,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:duration-150 hover:ease-out hover:-translate-y-0.5 hover:bg-gold-soft"
                >
                  Submit Inquiry
                  <Icon name="arrow-right" strokeWidth={2.2} className="h-4.5 w-4.5" />
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </Container>
    </Section>
  );
}
