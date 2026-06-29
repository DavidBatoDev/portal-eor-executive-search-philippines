import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { RingWatermark } from "@/components/ui/RingWatermark";
import { challenge } from "@/lib/content/home";

const BG_SRC = "/assets/Portal Website Images/portal homepage background image.png";

export function Challenge() {
  return (
    <Section bg="cream" className="overflow-hidden">
      {/* Full-bleed atmospheric backdrop: skyline + silhouettes anchor left, behind the heading. */}
      <Image
        src={BG_SRC}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover object-left opacity-25"
      />
      <Container className="relative z-1">
        <div className="grid items-center gap-[clamp(2rem,4vw,4rem)] lg:grid-cols-[1.15fr_.85fr]">
          <Reveal className="space-y-6">
            <Eyebrow>{challenge.eyebrow}</Eyebrow>
            <h2>{challenge.heading}</h2>
            <p>{challenge.bodyParts[0]}</p>
            <p>
              {challenge.bodyTwoPre}
              <strong>{challenge.bodyTwoEm}</strong>
              {challenge.bodyTwoPost}
            </p>
          </Reveal>

          <Reveal
            delay={1}
            className="relative overflow-hidden rounded-lg border border-gold/28 bg-[linear-gradient(155deg,#16223c,#101828)] p-[clamp(1.8rem,3vw,2.6rem)] shadow-lg"
          >
            <RingWatermark
              circles={[30, 55, 80]}
              strokeWidth={2}
              dot={12}
              className="right-[-22%] top-[-30%] h-80 w-80 opacity-10"
            />
            <span className="relative z-1 mb-[1.1rem] inline-flex items-center gap-2 font-head text-[.72rem] font-bold uppercase tracking-[.12em] text-gold-soft">
              <Icon name="check-circle" strokeWidth={1.8} className="h-4 w-4 text-gold" />
              {challenge.calloutTag}
            </span>
            <p className="relative z-1 font-head text-[clamp(1.15rem,1rem+.7vw,1.45rem)] font-bold leading-[1.4] tracking-[-0.015em] text-white">
              {challenge.callout}
            </p>
            <div className="relative z-1 mt-[1.6rem] flex flex-col gap-[.6rem]">
              {challenge.chips.map((chip) => (
                <span
                  key={chip.label}
                  className="flex items-center gap-[.7rem] rounded-[11px] border border-gold/24 bg-gold/10 p-[.6rem_.9rem] font-head text-[.86rem] font-semibold text-gold-soft"
                >
                  <Icon name={chip.icon} strokeWidth={1.7} className="h-4.5 w-4.5 flex-none text-gold" />
                  {chip.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
