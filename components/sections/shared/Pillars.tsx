import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";

type Pillar = { icon: IconName; title: string };

const PILLAR_CARD =
  "flex min-h-46 flex-col items-start justify-between gap-8 rounded-lg border border-[#efe7d4] bg-cream p-7 hover:-translate-y-1 hover:border-gold hover:shadow-lg";

// Row of icon + label "pillars" under a centered heading (service-page "why").
// Pass `image` to switch to a left-content / right-photo split layout.
export function Pillars({
  eyebrow,
  heading,
  lead,
  pillars,
  image,
  id = "why",
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  pillars: Pillar[];
  image?: string;
  id?: string;
}) {
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
            className="object-cover object-center"
            sizes="52vw"
          />
          {/* Gradient fade blending photo into white content area */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white to-transparent" />
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
                  className={PILLAR_CARD}
                >
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-[13px] bg-white text-gold shadow-sm [&>svg]:h-6 [&>svg]:w-6">
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

  return (
    <Section id={id} bg="white">
      <Container>
        <Reveal>
          <SectionHead center eyebrow={eyebrow} heading={heading} lead={lead} />
        </Reveal>

        <div className="mt-[clamp(2.5rem,4vw,3.5rem)] grid grid-cols-2 gap-[clamp(1.25rem,2.5vw,1.75rem)] lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className={PILLAR_CARD}
            >
              <span className="grid h-12 w-12 flex-none place-items-center rounded-[13px] bg-white text-gold shadow-sm [&>svg]:h-6 [&>svg]:w-6">
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
