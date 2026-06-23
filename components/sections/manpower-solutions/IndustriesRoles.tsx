import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LinkArrow } from "@/components/ui/LinkArrow";

type IndustryCard = { icon: IconName; title: string; roles: string[] };
type CtaCard = {
  icon: IconName;
  title: string;
  body: string;
  link: { label: string; href: string };
};

// Industries & roles grid (#industries): each card pairs an industry header
// with a checked role list; a final navy CTA card invites an inquiry.
export function IndustriesRoles({
  eyebrow,
  heading,
  lead,
  cards,
  ctaCard,
  id = "industries",
}: {
  eyebrow: string;
  heading: string;
  lead: string;
  cards: IndustryCard[];
  ctaCard: CtaCard;
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
              className="flex flex-col rounded-lg border border-border bg-white p-[2rem_1.8rem] shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[5px] hover:border-[#dfe2e7] hover:shadow-lg"
            >
              <div className="mb-[1.3rem] flex items-center gap-[.9rem]">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-[13px] bg-navy text-gold [&>svg]:h-[23px] [&>svg]:w-[23px]">
                  <Icon name={c.icon} />
                </span>
                <h3 className="text-[1.18rem]">{c.title}</h3>
              </div>
              <ul className="flex flex-col gap-[.7rem]">
                {c.roles.map((role) => (
                  <li
                    key={role}
                    className="flex items-center gap-[.6rem] text-[.96rem] leading-[1.4] text-body"
                  >
                    <Icon
                      name="check"
                      strokeWidth={2.4}
                      className="h-[15px] w-[15px] flex-none text-gold-deep"
                    />
                    {role}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal
            as="article"
            delay={3}
            className="edge-gold relative flex flex-col overflow-hidden rounded-lg border border-navy bg-[linear-gradient(155deg,#16223c,#101828)] p-[2rem_1.8rem] shadow-sm transition-colors duration-200 hover:border-gold"
          >
            <span className="mb-[1.3rem] grid h-14 w-14 flex-none place-items-center rounded-[14px] bg-gold/[.14] text-gold-soft [&>svg]:h-6.5 [&>svg]:w-6.5">
              <Icon name={ctaCard.icon} />
            </span>
            <h3 className="mb-[.6rem] text-[1.18rem] text-white">{ctaCard.title}</h3>
            <p className="text-[.96rem] leading-[1.6] text-white/72">{ctaCard.body}</p>
            <LinkArrow href={ctaCard.link.href} className="mt-[1.3rem] text-gold-soft">
              {ctaCard.link.label}
            </LinkArrow>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
