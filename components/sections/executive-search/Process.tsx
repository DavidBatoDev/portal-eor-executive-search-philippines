"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { RingWatermark } from "@/components/ui/RingWatermark";
import { cx } from "@/lib/cx";

type Step = { n: number; title: string; items: string[] };

const pad = (n: number) => String(n).padStart(2, "0");

// Auto-advancing executive-search journey. The active step card sits on stacked
// "deck" cards; dots and the progress bar let the visitor jump between steps.
export function Process({
  eyebrow,
  heading,
  lead,
  steps,
  id = "process",
}: {
  eyebrow: string;
  heading: string;
  lead: string;
  steps: Step[];
  id?: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % steps.length),
      3800
    );
    return () => clearInterval(t);
  }, [paused, steps.length]);

  const step = steps[active];
  const pct = ((active + 1) / steps.length) * 100;

  return (
    <Section id={id} bg="navy" dark className="overflow-hidden">
      <RingWatermark
        circles={[28, 50, 72, 94]}
        dot={11}
        className="left-[-12%] top-1/2 h-160 w-160 -translate-y-1/2 opacity-[0.06]"
      />
      <Container className="relative z-2">
        <div className="grid items-center gap-[clamp(2.5rem,5vw,5rem)] lg:grid-cols-2">
          <Reveal>
            <Eyebrow tone="soft" className="mb-[1.1rem]">
              {eyebrow}
            </Eyebrow>
            <h2>{heading}</h2>
            <p className="lead mt-5 max-w-[44ch]">{lead}</p>

            <div className="mt-[2.5rem] flex items-center gap-4">
              <span className="font-head text-[1.5rem] font-extrabold text-gold">
                {pad(active + 1)}
                <span className="text-[.9rem] font-bold text-white/45">
                  {" "}
                  / {pad(steps.length)}
                </span>
              </span>
              <span className="relative h-1 max-w-80 flex-1 overflow-hidden rounded-full bg-white/12">
                <span
                  className="absolute inset-y-0 left-0 rounded-full bg-gold transition-[width] duration-500 ease-out"
                  style={{ width: `${pct}%` }}
                />
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {steps.map((s, i) => (
                <button
                  key={s.n}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Step ${s.n}: ${s.title}`}
                  aria-current={i === active}
                  className={cx(
                    "h-2.5 w-2.5 rounded-full transition-colors duration-200",
                    i === active ? "bg-gold" : "bg-white/20 hover:bg-white/45"
                  )}
                />
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={1}
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Stacked "deck" cards behind the active step */}
            <div
              aria-hidden="true"
              className="absolute inset-x-6 -bottom-3 top-7 rounded-[18px] border border-white/8 bg-white/[0.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-3 -bottom-1.5 top-3.5 rounded-[18px] border border-white/10 bg-white/[0.04]"
            />
            <div className="relative min-h-58 rounded-[18px] border border-gold/25 bg-[linear-gradient(160deg,#16223c,#101828)] p-[clamp(1.6rem,3vw,2.2rem)] shadow-xl">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-gold font-head text-[1.1rem] font-extrabold text-navy">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-[1.32rem] text-white">{step.title}</h3>
                  <ul className="mt-3 flex flex-col gap-[.7rem]">
                    {step.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-[.6rem] text-[.95rem] leading-[1.5] text-white/75"
                      >
                        <Icon
                          name="check"
                          strokeWidth={2.4}
                          className="mt-[.15rem] h-4 w-4 flex-none text-gold"
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
