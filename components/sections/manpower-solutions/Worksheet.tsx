"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Dropdown } from "@/components/ui/Dropdown";
import { RingWatermark } from "@/components/ui/RingWatermark";

type Field = { label: string; placeholder: string };
type SelectField = Field & { options: string[] };

type WorksheetContent = {
  eyebrow: string;
  heading: string;
  lead: string;
  uses: string[];
  note: string;
  formHead: string;
  fields: {
    count: Field;
    duration: SelectField;
    role: Field;
    skills: Field;
    coverage: Field;
  };
  submitLabel: string;
  success: string;
};

const labelClass =
  "mb-2 block font-head text-[.72rem] font-bold uppercase tracking-[.1em] text-navy";
const fieldClass =
  "w-full rounded-[11px] border border-border bg-soft px-[1rem] py-[.85rem] font-body text-[.96rem] text-charcoal outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-body/70 focus:border-gold/60 focus:shadow-[0_0_0_4px_rgba(217,164,55,.14)]";

export function Worksheet({
  content,
  id = "worksheet",
}: {
  content: WorksheetContent;
  id?: string;
}) {
  const { fields } = content;
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section id={id} bg="white">
      <Container>
        <div className="grid items-start gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-2">
          <Reveal className="max-w-130">
            <Eyebrow className="mb-[1.1rem]">{content.eyebrow}</Eyebrow>
            <h2>{content.heading}</h2>
            <p className="lead mt-5">{content.lead}</p>
            <ul className="mt-[1.8rem] flex flex-col gap-4">
              {content.uses.map((use) => (
                <li key={use} className="flex items-start gap-[.7rem] text-[.98rem] text-charcoal">
                  <Icon
                    name="check-circle"
                    strokeWidth={2}
                    className="mt-[.1rem] h-5 w-5 flex-none text-gold-deep"
                  />
                  {use}
                </li>
              ))}
            </ul>
            <p className="mt-[1.8rem] flex items-start gap-[.6rem] rounded-xl border border-[#f0e3c4] bg-gold-tint p-[1rem_1.2rem] text-[.92rem] leading-[1.55] text-charcoal">
              <Icon
                name="send"
                strokeWidth={1.8}
                className="mt-[.15rem] h-4.5 w-4.5 flex-none text-gold-deep"
              />
              {content.note}
            </p>
          </Reveal>

          <Reveal
            as="form"
            delay={1}
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="edge-gold relative overflow-hidden rounded-lg border border-border bg-white p-[clamp(1.6rem,3vw,2.4rem)] shadow-lg"
          >
            <RingWatermark
              circles={[30, 60, 90]}
              dot={12}
              colorClass="text-navy"
              className="right-[-12%] top-[-18%] h-75 w-75 opacity-[0.04]"
            />
            <div className="relative z-1">
              <div className="mb-[1.6rem] flex items-center gap-[.6rem] font-head text-[1.05rem] font-bold text-navy">
                <Icon name="pencil" strokeWidth={1.9} className="h-4.75 w-4.75 text-gold-deep" />
                {content.formHead}
              </div>

              {submitted ? (
                <div className="flex flex-col items-start gap-[.9rem] py-6">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-tint text-gold-deep">
                    <Icon name="check-circle" strokeWidth={2} className="h-7 w-7" />
                  </span>
                  <p className="text-[1rem] leading-[1.6] text-charcoal">{content.success}</p>
                </div>
              ) : (
                <>
                  <div className="grid gap-[1.1rem] sm:grid-cols-2">
                    <div>
                      <label htmlFor="ws-count" className={labelClass}>
                        {fields.count.label}
                      </label>
                      <input
                        id="ws-count"
                        name="count"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        autoComplete="off"
                        placeholder={fields.count.placeholder}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="ws-duration" className={labelClass}>
                        {fields.duration.label}
                      </label>
                      <Dropdown
                        id="ws-duration"
                        name="duration"
                        placeholder={fields.duration.placeholder}
                        options={fields.duration.options}
                      />
                    </div>
                  </div>

                  <div className="mt-[1.1rem]">
                    <label htmlFor="ws-role" className={labelClass}>
                      {fields.role.label}
                    </label>
                    <input
                      id="ws-role"
                      name="role"
                      type="text"
                      autoComplete="off"
                      placeholder={fields.role.placeholder}
                      className={fieldClass}
                    />
                  </div>

                  <div className="mt-[1.1rem]">
                    <label htmlFor="ws-skills" className={labelClass}>
                      {fields.skills.label}
                    </label>
                    <textarea
                      id="ws-skills"
                      name="skills"
                      rows={3}
                      placeholder={fields.skills.placeholder}
                      className={`${fieldClass} resize-y`}
                    />
                  </div>

                  <div className="mt-[1.1rem]">
                    <label htmlFor="ws-coverage" className={labelClass}>
                      {fields.coverage.label}
                    </label>
                    <input
                      id="ws-coverage"
                      name="coverage"
                      type="text"
                      autoComplete="off"
                      placeholder={fields.coverage.placeholder}
                      className={fieldClass}
                    />
                  </div>

                  <span className="group/btn mt-[1.8rem] inline-flex">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-[.6rem] rounded-sm bg-gold px-[1.6rem] py-[.92rem] font-head font-bold text-navy shadow-gold transition-[transform,box-shadow,background-color] duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-gold-soft"
                    >
                      {content.submitLabel}
                      <Icon name="arrow-right" strokeWidth={2.2} className="h-4.5 w-4.5" />
                    </button>
                  </span>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
