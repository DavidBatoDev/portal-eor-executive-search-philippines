"use client";

import { useState, type FormEvent } from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Dropdown } from "@/components/ui/Dropdown";
import { RingWatermark } from "@/components/ui/RingWatermark";

const fieldClass =
  "w-full rounded-md border border-[#e9dfc9] bg-cream px-4 py-3 font-body text-[.98rem] text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-body/55 focus:border-gold/60 focus:shadow-[0_0_0_3px_rgba(217,164,55,.14)]";
const splitFieldClass =
  "w-full rounded-[11px] border border-border bg-soft px-[1rem] py-[.85rem] font-body text-[.96rem] text-charcoal outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-body/70 focus:border-gold/60 focus:shadow-[0_0_0_4px_rgba(217,164,55,.14)]";
const labelClass = "block font-head text-[.9rem] font-semibold text-navy";
const splitLabelClass = "block font-body text-[.88rem] font-semibold text-charcoal";

const DURATION_OPTIONS = [
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "12+ months / Ongoing",
  "Project-based",
];

const SUCCESS = (
  <div className="flex items-start gap-3 rounded-md border border-gold/40 bg-gold-tint p-5">
    <Icon name="check-circle" className="h-6 w-6 flex-none text-gold-deep" />
    <div>
      <p className="font-head font-bold text-navy">Thank you — your inquiry has been received.</p>
      <p className="mt-1 text-[.95rem] text-body">Our team will reach out to you as soon as possible.</p>
    </div>
  </div>
);

export function InquiryForm({
  eyebrow,
  heading,
  formTitle,
  lead,
  bullets,
  footNote,
  layout = "centered",
  id = "inquiry",
}: {
  eyebrow: string;
  heading: string;
  formTitle: string;
  lead?: string;
  bullets?: string[];
  footNote?: string;
  layout?: "centered" | "split";
  id?: string;
}) {
  const [sent, setSent] = useState(false);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (layout === "split") {
    return (
      <Section id={id} bg="white">
        <Container>
          <div className="grid gap-[clamp(2rem,5vw,5rem)] lg:grid-cols-[5fr_6fr] lg:items-start">
            {/* Left: description */}
            <div className="pt-[clamp(0rem,1vw,1.5rem)]">
              <Reveal>
                <SectionHead eyebrow={eyebrow} heading={heading} />
              </Reveal>
              {lead && (
                <Reveal>
                  <p className="mt-5 text-[.96rem] leading-[1.7] text-body">{lead}</p>
                </Reveal>
              )}
              {bullets && bullets.length > 0 && (
                <Reveal>
                  <ul className="mt-7 flex flex-col gap-4">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[.95rem] text-charcoal">
                        <Icon name="check-circle" className="mt-0.5 h-5 w-5 flex-none text-gold" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
              {footNote && (
                <Reveal>
                  <p className="mt-6 flex items-start gap-3 text-[.9rem] leading-[1.6] text-body/75">
                    <Icon name="send" className="mt-0.5 h-4.5 w-4.5 flex-none text-gold" />
                    {footNote}
                  </p>
                </Reveal>
              )}
            </div>

            {/* Right: form card */}
            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-2xl border border-border bg-white p-[clamp(1.8rem,3vw,2.8rem)] shadow-lg"
              >
                <div className="mb-7 flex items-center gap-[.55rem] font-body text-[.8rem] font-semibold uppercase tracking-[.14em] text-gold-deep">
                  <Icon name="clipboard-check" strokeWidth={1.9} className="h-4.5 w-4.5" />
                  {formTitle}
                </div>

                {sent ? SUCCESS : (
                  <div className="flex flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label className={splitLabelClass}>Number of personnel needed</label>
                        <input
                          name="personnel"
                          type="text"
                          placeholder="e.g. 8"
                          className={splitFieldClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className={splitLabelClass}>Duration / contract type</label>
                        <Dropdown
                          name="duration"
                          options={DURATION_OPTIONS}
                          placeholder="Select an option"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className={splitLabelClass}>Role / function / department</label>
                      <input
                        name="role"
                        type="text"
                        placeholder="e.g. Finance & accounting, customer service"
                        className={splitFieldClass}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className={splitLabelClass}>Required skills and experience</label>
                      <textarea
                        name="skills"
                        rows={4}
                        placeholder="List the core skills, certifications, and experience level you need"
                        className={`${splitFieldClass} resize-y`}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className={splitLabelClass}>Geographic coverage</label>
                      <input
                        name="geography"
                        type="text"
                        placeholder="e.g. Metro Manila, Cebu, nationwide"
                        className={splitFieldClass}
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-1 inline-flex w-full items-center justify-center gap-[.6rem] rounded-[11px] bg-gold px-[1.6rem] py-[.95rem] font-head font-bold text-navy shadow-gold transition-[transform,translate,box-shadow,background-color] duration-200 ease-in-out hover:duration-150 hover:ease-out hover:-translate-y-0.5 hover:bg-gold-soft"
                    >
                      Submit Inquiry
                      <Icon name="arrow-right" strokeWidth={2.2} className="h-4.5 w-4.5" />
                    </button>
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </Container>
      </Section>
    );
  }

  // ─── Centered (default) layout ───────────────────────────────────────────────
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
              <div className="relative z-1">{SUCCESS}</div>
            ) : (
              <div className="relative z-1 flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="ss-company" className={labelClass}>Company Name</label>
                    <input id="ss-company" name="company" type="text" placeholder="Your company" autoComplete="organization" className={fieldClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="ss-contact" className={labelClass}>Contact Name</label>
                    <input id="ss-contact" name="contact" type="text" placeholder="Full name" autoComplete="name" className={fieldClass} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="ss-email" className={labelClass}>Email</label>
                    <input id="ss-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" className={fieldClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="ss-phone" className={labelClass}>Phone</label>
                    <input id="ss-phone" name="phone" type="tel" placeholder="+63 ..." autoComplete="tel" className={fieldClass} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="ss-notes" className={labelClass}>Services Needed / Notes</label>
                  <textarea id="ss-notes" name="notes" rows={4} placeholder="Tell us which functions you'd like to centralize, team size, and timeline" className={`${fieldClass} resize-y`} />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex w-full items-center justify-center gap-[.6rem] rounded-md bg-gold px-[1.6rem] py-[.95rem] font-head font-bold text-navy shadow-gold transition-[transform,translate,box-shadow,background-color] duration-200 ease-in-out hover:duration-150 hover:ease-out hover:-translate-y-0.5 hover:bg-gold-soft"
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
