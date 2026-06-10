import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { RingWatermark } from "@/components/ui/RingWatermark";
import { advantage } from "@/lib/content/home";
import { cx } from "@/lib/cx";

// "The Portal Advantage" — Find. Employ. Manage. Scale.
export function Journey() {
  return (
    <Section id="advantage" bg="navy" dark className="overflow-hidden">
      <RingWatermark
        circles={[22, 40, 58, 76, 94]}
        className="bottom-[-30%] left-[-10%] h-[680px] w-[680px] opacity-[0.07]"
      />
      <Container className="relative z-[2]">
        <Reveal>
          <SectionHead
            eyebrow={advantage.eyebrow}
            eyebrowTone="soft"
            heading={advantage.heading}
            lead={advantage.lead}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {advantage.steps.map((step, i) => {
            const isLast = i === advantage.steps.length - 1;
            return (
              <Reveal
                key={step.n}
                delay={(i + 1) as 1 | 2 | 3 | 4}
                className="px-[1.6rem]"
              >
                <div className="mb-[1.1rem] flex items-center gap-[.9rem]">
                  <span className="relative grid h-[54px] w-[54px] flex-none place-items-center">
                    <svg viewBox="0 0 54 54" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
                      <circle cx="27" cy="27" r="25" stroke="rgba(217,164,55,.3)" strokeWidth="1.5" />
                      <circle cx="27" cy="27" r="17" stroke="rgba(217,164,55,.5)" strokeWidth="1.5" />
                    </svg>
                    <span className="font-head text-[1.05rem] font-extrabold text-gold">
                      {step.n}
                    </span>
                  </span>
                  <span className="relative h-px flex-1 bg-white/[.16]">
                    <span
                      className={cx(
                        "absolute right-0 top-[-3px] h-[7px] w-[7px] rounded-full",
                        isLast
                          ? "bg-gold-soft shadow-[0_0_0_4px_rgba(217,164,55,.18)]"
                          : "bg-gold"
                      )}
                    />
                  </span>
                </div>
                <h3 className="mb-[.55rem] text-[1.32rem] text-white">{step.title}</h3>
                <p className="text-[.92rem] leading-[1.55] text-white/[.66]">{step.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
