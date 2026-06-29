import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";

type Pillar = { icon: IconName; title: string };

const PILLAR_CARD_BASE =
  "flex min-h-46 flex-col items-start justify-between gap-8 rounded-lg border border-[#efe7d4] p-7 hover:-translate-y-1 hover:border-gold hover:shadow-lg";

const TILE_BASE =
  "grid h-12 w-12 flex-none place-items-center rounded-[13px] text-gold shadow-sm [&>svg]:h-6 [&>svg]:w-6";

// Row of icon + label "pillars" under a centered heading (service-page "why").
// Pass `image` to switch to a left-content / right-photo split layout.
// `surface="cream"` flips the palette (cream section + white cards + gold-tint
// icon tiles) for designs that sit the section on a cream background.
export function Pillars({
  eyebrow,
  heading,
  lead,
  pillars,
  image,
  cols = 4,
  surface = "white",
  id = "why",
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  pillars: Pillar[];
  image?: string;
  cols?: 4 | 5;
  surface?: "white" | "cream";
  id?: string;
}) {
  // Tailwind needs complete class strings — map the column count explicitly.
  const colsClass = cols === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  if (image) {
    return (
      <section
        id={id}
        className="relative overflow-hidden bg-white py-[clamp(4.5rem,3rem+7vw,8rem)]"
      >
        {/* Right photo — absolute, full section height, desktop only */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Image
            src={image}
            fill
            alt=""
            className="object-cover object-right"
            sizes="52vw"
            unoptimized
            priority
          />
          {/* Gradient fade blending photo into white content area */}
          <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-white to-transparent" />
        </div>

        <Container>
          <div className="relative z-10 lg:max-w-[50%]">
            <Reveal>
              <SectionHead eyebrow={eyebrow} heading={heading} lead={lead} />
            </Reveal>

            <div className="mt-[clamp(2.5rem,4vw,3.5rem)] grid grid-cols-2 gap-[clamp(1.25rem,2.5vw,1.75rem)]">
              {pillars.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                  className={`${PILLAR_CARD_BASE} bg-cream`}
                >
                  <span className={`${TILE_BASE} bg-white`}>
                    <Icon name={p.icon} />
                  </span>
                  <h4 className="text-[1.05rem]">{p.title}</h4>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  const cream = surface === "cream";
  const cardClass = `${PILLAR_CARD_BASE} ${cream ? "bg-white" : "bg-cream"}`;
  const tileClass = `${TILE_BASE} ${cream ? "bg-gold-tint" : "bg-white"}`;

  return (
    <Section id={id} bg={cream ? "cream" : "white"}>
      <Container>
        <Reveal>
          <SectionHead center eyebrow={eyebrow} heading={heading} lead={lead} />
        </Reveal>

        <div
          className={`mt-[clamp(2.5rem,4vw,3.5rem)] grid grid-cols-2 gap-[clamp(1.25rem,2.5vw,1.75rem)] ${colsClass}`}
        >
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className={cardClass}
            >
              <span className={tileClass}>
                <Icon name={p.icon} />
              </span>
              <h4 className="text-[1.05rem]">{p.title}</h4>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
