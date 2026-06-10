import { Fragment } from "react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { nationwide } from "@/lib/content/home";

export function NationwideMap() {
  return (
    <Section id="nationwide" bg="white" className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-[clamp(2rem,4.5vw,4.5rem)] lg:grid-cols-[1.04fr_.96fr]">
          <Reveal>
            <Eyebrow className="mb-[1.1rem]">{nationwide.eyebrow}</Eyebrow>
            <h2 className="mt-[1.1rem]">{nationwide.heading}</h2>

            <div className="mt-[1.8rem] space-y-[1.1rem]">
              {nationwide.body.map((p) => (
                <p key={p} className="max-w-[46ch] text-[1.04rem] leading-[1.7]">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-[2.2rem] border-t border-border pt-[1.6rem]">
              <span className="mb-[.85rem] block font-body text-[.74rem] font-semibold uppercase tracking-[.14em] text-body">
                {nationwide.presenceLabel}
              </span>
              <div className="flex flex-wrap items-center gap-x-[.15rem] gap-y-[.2rem]">
                {nationwide.cities.map((c, i) => (
                  <Fragment key={c.pin}>
                    <span className="cursor-default whitespace-nowrap rounded-[7px] px-[.5rem] py-[.25rem] font-head text-[.95rem] font-bold text-charcoal transition-colors hover:bg-gold-tint hover:text-gold-deep">
                      {c.name}
                    </span>
                    {i < nationwide.cities.length - 1 && (
                      <span className="relative top-[-1px] text-[.8em] text-gold">•</span>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={1}
            className="relative order-first overflow-hidden rounded-lg border border-[#ece2c8] bg-[radial-gradient(120%_100%_at_72%_16%,#fbf7ec_0%,#F9F4E8_55%,#f2ead6_100%)] p-[clamp(.6rem,1.4vw,1rem)] shadow lg:order-none"
          >
            <Image
              src="/assets/ph-presence-map.jpg"
              alt={nationwide.mapAlt}
              width={980}
              height={1225}
              className="block h-auto w-full rounded-[18px]"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
