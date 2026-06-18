import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LinkArrow } from "@/components/ui/LinkArrow";

type SoloCard = { icon: IconName; title: string };
type CtaCard = { title: string; body: string; link: { label: string; href: string } };

// Centered icon + title "use case" cards (no body) plus a trailing navy CTA card.
export function UseCaseCards({
  eyebrow,
  heading,
  lead,
  cards,
  ctaCard,
  id = "who",
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  cards: SoloCard[];
  ctaCard: CtaCard;
  id?: string;
}) {
  return (
    <Section id={id} bg="white">
      <Container>
        <Reveal>
          <SectionHead center eyebrow={eyebrow} heading={heading} lead={lead} />
        </Reveal>

        <div className="mt-[clamp(2.5rem,4vw,3.5rem)] grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal
              as="article"
              key={c.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="flex items-center gap-4 rounded-lg border border-border bg-white px-7 py-8 shadow-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.75 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-navy text-gold [&>svg]:h-5.5 [&>svg]:w-5.5">
                <Icon name={c.icon} />
              </span>
              <h4 className="text-[1.02rem] leading-snug">{c.title}</h4>
            </Reveal>
          ))}

          <Reveal
            as="article"
            delay={3}
            className="flex flex-col gap-[.8rem] rounded border border-navy bg-navy p-6 shadow-sm"
          >
            <h4 className="text-white">{ctaCard.title}</h4>
            <p className="text-white/70">{ctaCard.body}</p>
            <LinkArrow href={ctaCard.link.href} className="text-gold-soft">
              {ctaCard.link.label}
            </LinkArrow>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
