"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { cx } from "@/lib/cx";

type FaqItem = { q: string; a: string };

export function Faq({
  eyebrow,
  heading,
  lead,
  items,
  bg = "cream",
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  items: FaqItem[];
  bg?: "cream" | "white";
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq" bg={bg}>
      <Container>
        <Reveal>
          <SectionHead center eyebrow={eyebrow} heading={heading} lead={lead} />
        </Reveal>

        <div className="mx-auto mt-10 max-w-205">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-head text-[1.12rem] font-bold tracking-[-0.01em] text-navy"
                >
                  <span>{item.q}</span>
                  <span
                    className={cx(
                      "relative grid h-6.5 w-6.5 flex-none place-items-center rounded-[7px] transition-colors duration-200",
                      isOpen ? "bg-navy" : "bg-gold-tint"
                    )}
                    aria-hidden="true"
                  >
                    <span className={cx("absolute h-0.5 w-2.75", isOpen ? "bg-gold" : "bg-gold-deep")} />
                    <span
                      className={cx(
                        "absolute h-2.75 w-0.5 transition-transform duration-200",
                        isOpen ? "scale-y-0 bg-gold" : "bg-gold-deep"
                      )}
                    />
                  </span>
                </button>
                <div
                  className={cx(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="max-w-[90%] pb-[1.6rem] text-base leading-[1.7] text-body">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
