import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { RingWatermark } from "@/components/ui/RingWatermark";
import { cx } from "@/lib/cx";

type Step = { n: number; title: string; body: string };

// Navy "process" timeline used by service pages (#process). Mirrors the
// homepage Journey layout with neutral (currentColor) step rings.
export function ProcessSteps({
  eyebrow,
  heading,
  lead,
  steps,
  cols = 4,
  ringCircles = [30, 52, 74, 96],
  ringDot = 12,
  id = "process",
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  steps: Step[];
  cols?: 4 | 5;
  ringCircles?: number[];
  ringDot?: number;
  id?: string;
}) {
  // Tailwind needs complete class strings — map the column count explicitly.
  const colsClass = cols === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <Section id={id} bg="navy" dark className="overflow-hidden">
      <RingWatermark
        circles={ringCircles}
        dot={ringDot}
        className="left-1/2 top-1/2 h-160 w-160 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
      />
      <Container className="relative z-2">
        <Reveal>
          <div>
            <Eyebrow center tone="soft" className="mb-[1.1rem]">{eyebrow}</Eyebrow>
            <h2 className="max-w-190">{heading}</h2>
            {lead && <p className="lead mt-5 max-w-190">{lead}</p>}
          </div>
        </Reveal>

        <div className={cx("mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:gap-y-0", colsClass)}>
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <Reveal key={step.n} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} className="px-[1.6rem]">
                <div className="mb-[1.1rem] flex items-center gap-[.9rem]">
                  <span className="relative grid h-13.5 w-13.5 flex-none place-items-center">
                    <svg viewBox="0 0 54 54" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
                      <circle cx="27" cy="27" r="25" stroke="currentColor" strokeWidth="1.5" opacity=".3" />
                      <circle cx="27" cy="27" r="17" stroke="currentColor" strokeWidth="1.5" opacity=".55" />
                    </svg>
                    <span className="font-head text-[1.05rem] font-extrabold text-gold">{step.n}</span>
                  </span>
                  <span className="relative h-px flex-1 bg-white/16">
                    <span
                      className={cx(
                        "absolute right-0 -top-0.75 h-1.75 w-1.75 rounded-full",
                        isLast
                          ? "bg-gold-soft shadow-[0_0_0_4px_rgba(217,164,55,.18)]"
                          : "bg-gold"
                      )}
                    />
                  </span>
                </div>
                <h3 className="mb-[.55rem] text-[1.32rem] text-white">{step.title}</h3>
                <p className="text-[.92rem] leading-[1.55] text-white/66">{step.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
