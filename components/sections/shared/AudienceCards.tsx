import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LinkArrow } from "@/components/ui/LinkArrow";

type AudienceCard = { icon: IconName; title: string; body: string };
type CtaCard = { title: string; body: string; link: { label: string; href: string } };

export function AudienceCards({
  eyebrow,
  heading,
  lead,
  cards,
  ctaCard,
  id = "who",
}: {
  eyebrow: string;
  heading: string;
  lead: string;
  cards: AudienceCard[];
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
              className="flex items-start gap-4 rounded border border-border bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.75 hover:shadow"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-[11px] bg-navy text-gold">
                <Icon name={c.icon} className="h-5.25 w-5.25" />
              </span>
              <div>
                <h4 className="mb-[.3rem] text-[1.02rem]">{c.title}</h4>
                <p className="text-[.9rem] leading-normal">{c.body}</p>
              </div>
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
