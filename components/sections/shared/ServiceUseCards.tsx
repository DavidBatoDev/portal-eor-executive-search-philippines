import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LinkArrow } from "@/components/ui/LinkArrow";

type UseCard = {
  icon: IconName;
  title: string;
  body: string;
  strong?: string;
  bodyAfter?: string;
};
type CtaCard = {
  icon: IconName;
  title: string;
  body: string;
  link: { label: string; href: string };
};

export function ServiceUseCards({
  eyebrow,
  heading,
  lead,
  cards,
  ctaCard,
  footCta,
  id = "overview",
}: {
  eyebrow: string;
  heading: string;
  lead: string;
  cards: UseCard[];
  ctaCard: CtaCard;
  footCta: { label: string; href: string };
  id?: string;
}) {
  return (
    <Section id={id} bg="cream">
      <Container>
        <Reveal>
          <SectionHead center eyebrow={eyebrow} heading={heading} lead={lead} />
        </Reveal>

        <div className="mt-[clamp(2.5rem,4vw,3.5rem)] grid gap-[clamp(1.1rem,2vw,1.5rem)] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal
              as="article"
              key={c.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-white p-[2rem_1.8rem] shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[5px] hover:border-[#dfe2e7] hover:shadow-lg"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-[350ms] group-hover:scale-x-100" />
              <span className="mb-[1.3rem] grid h-14 w-14 flex-none place-items-center rounded-[14px] bg-navy text-gold [&>svg]:h-[26px] [&>svg]:w-[26px]">
                <Icon name={c.icon} />
              </span>
              <h3 className="mb-[.6rem] text-[1.18rem]">{c.title}</h3>
              <p className="text-[.96rem] leading-[1.6] text-body">
                {c.body}
                {c.strong && <strong>{c.strong}</strong>}
                {c.bodyAfter}
              </p>
            </Reveal>
          ))}

          <Reveal
            as="article"
            delay={3}
            className="edge-gold relative flex flex-col overflow-hidden rounded-lg border border-navy bg-[linear-gradient(155deg,#16223c,#101828)] p-[2rem_1.8rem] shadow-sm transition-colors duration-200 hover:border-gold"
          >
            <span className="mb-[1.3rem] grid h-14 w-14 flex-none place-items-center rounded-[14px] bg-gold/[.14] text-gold-soft [&>svg]:h-[26px] [&>svg]:w-[26px]">
              <Icon name={ctaCard.icon} />
            </span>
            <h3 className="mb-[.6rem] text-[1.18rem] text-white">{ctaCard.title}</h3>
            <p className="text-[.96rem] leading-[1.6] text-white/[.72]">{ctaCard.body}</p>
            <LinkArrow href={ctaCard.link.href} className="mt-[1.3rem] text-gold-soft">
              {ctaCard.link.label}
            </LinkArrow>
          </Reveal>
        </div>

        <Reveal className="mt-[clamp(2.4rem,4vw,3.2rem)] flex justify-center">
          <Button href={footCta.href} variant="primary" arrow>
            {footCta.label}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
