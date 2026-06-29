import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { RingWatermark } from "@/components/ui/RingWatermark";

type PainItem = { icon: IconName; title: string; body: string };
type Solution = {
  tag: string;
  body: string;
  chips: string[];
  cta: { label: string; href: string };
};

export function PainPoints({
  eyebrow,
  heading,
  intro,
  items,
  solution,
  image,
  id = "challenges",
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  items: PainItem[];
  solution: Solution;
  image?: string;
  id?: string;
}) {
  return (
    <Section id={id} bg={image ? "cream" : "white"} className={image ? "overflow-hidden" : undefined}>
      {image && (
        <Image
          src={image}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="pointer-events-none select-none object-cover object-right opacity-50"
        />
      )}
      <Container className={image ? "relative z-1" : undefined}>
        <Reveal className="max-w-190">
          <Eyebrow className="mb-[1.1rem]">{eyebrow}</Eyebrow>
          <h2>{heading}</h2>
          <p className="mt-[1.2rem] max-w-[60ch] text-[1.08rem]">{intro}</p>
        </Reveal>

        <div className="mt-[2.6rem] grid items-stretch gap-[clamp(2rem,4vw,3.5rem)] lg:grid-cols-[1.18fr_.82fr]">
          <div className="flex flex-col justify-between gap-[.9rem]">
            {items.map((item) => (
              <Reveal
                key={item.title}
                className="flex items-start gap-[1.1rem] rounded border border-border bg-white p-[1.3rem_1.4rem] shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:translate-x-0.75 hover:border-[#dfe2e7] hover:shadow"
              >
                <span className="grid h-11.5 w-11.5 flex-none place-items-center rounded-xl border border-[#ecd9c7] bg-copper-tint text-copper">
                  <Icon name={item.icon} strokeWidth={1.7} className="h-5.5 w-5.5" />
                </span>
                <div>
                  <h4 className="mb-1 text-[1.04rem]">{item.title}</h4>
                  <p className="text-[.95rem] leading-[1.55]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={1}
            className="relative flex flex-col justify-between overflow-hidden rounded-lg border border-gold/28 bg-[linear-gradient(155deg,#16223c,#101828)] p-[clamp(1.8rem,3vw,2.6rem)] shadow-lg lg:sticky lg:top-24"
          >
            <RingWatermark
              circles={[30, 55, 80, 99]}
              strokeWidth={1.6}
              dot={12}
              className="right-[-22%] top-[-30%] h-80 w-80 opacity-10"
            />
            <div className="relative z-1">
              <span className="mb-[1.1rem] inline-flex items-center gap-2 font-head text-[.72rem] font-bold uppercase tracking-[.12em] text-gold-soft">
                <Icon name="shield-check" strokeWidth={1.8} className="h-4 w-4 text-gold" />
                {solution.tag}
              </span>
              <p className="font-head text-[clamp(1.15rem,1rem+.7vw,1.45rem)] font-bold leading-[1.4] tracking-[-0.015em] text-white">
                {solution.body}
              </p>
              <div className="mt-[1.6rem] flex flex-col gap-[.6rem]">
                {solution.chips.map((chip) => (
                  <span
                    key={chip}
                    className="flex items-center gap-[.7rem] rounded-[11px] border border-gold/24 bg-gold/10 p-[.6rem_.9rem] font-head text-[.86rem] font-semibold text-gold-soft"
                  >
                    <Icon name="check-circle" strokeWidth={1.8} className="h-4.5 w-4.5 flex-none text-gold" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative z-1 mt-[1.6rem] border-t border-gold/22 pt-[1.4rem]">
              <Button href={solution.cta.href} variant="primary" arrow className="w-full">
                {solution.cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
