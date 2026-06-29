import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { RingWatermark } from "@/components/ui/RingWatermark";

type Difference = {
  tag: string;
  items: { icon: IconName; label: string }[];
};

// "Why <service> matters" — heading + intro + a navy "Portal difference" card
// over a full-bleed photo backdrop anchored to the right.
export function WhyMatters({
  eyebrow,
  heading,
  intro,
  image,
  difference,
  id = "why",
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  image: string;
  difference: Difference;
  id?: string;
}) {
  return (
    <Section id={id} bg="cream" className="overflow-hidden">
      <Image
        src={image}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover object-right"
      />
      <Container className="relative z-1">
        <div className="max-w-160 lg:max-w-[56%]">
          <Reveal>
            <Eyebrow className="mb-[1.1rem]">{eyebrow}</Eyebrow>
            <h2>{heading}</h2>
            <p className="mt-[1.4rem] max-w-[52ch] text-[1.04rem] leading-[1.7]">{intro}</p>
          </Reveal>

          <Reveal
            delay={1}
            className="relative mt-[2.2rem] overflow-hidden rounded-lg border border-gold/28 bg-[linear-gradient(155deg,#16223c,#101828)] p-[clamp(1.6rem,3vw,2.4rem)] shadow-lg"
          >
            <RingWatermark
              circles={[30, 55, 80, 99]}
              strokeWidth={1.6}
              dot={12}
              className="right-[-22%] top-[-30%] h-80 w-80 opacity-10"
            />
            <span className="relative z-1 mb-[1.2rem] inline-flex items-center gap-2 font-head text-[.72rem] font-bold uppercase tracking-[.12em] text-gold-soft">
              <Icon name="check-circle" strokeWidth={1.8} className="h-4 w-4 text-gold" />
              {difference.tag}
            </span>
            <div className="relative z-1 flex flex-col gap-[.7rem]">
              {difference.items.map((it) => (
                <span
                  key={it.label}
                  className="flex items-center gap-[.8rem] rounded-[11px] border border-gold/24 bg-gold/10 p-[.7rem_1rem] font-head text-[.92rem] font-semibold text-gold-soft"
                >
                  <Icon name={it.icon} strokeWidth={1.8} className="h-4.5 w-4.5 flex-none text-gold" />
                  {it.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
