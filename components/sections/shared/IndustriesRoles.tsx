import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LinkArrow } from "@/components/ui/LinkArrow";

type Industry = { icon: IconName; title: string; roles: string[] };
type CtaCard = {
  icon: IconName;
  title: string;
  body: string;
  link: { label: string; href: string };
};

// Coverage grid: each card pairs an industry with a checklist of supported roles.
// Optional `ctaCard` appends a dark navy call-to-action card at the end.
export function IndustriesRoles({
  eyebrow,
  heading,
  lead,
  industries,
  ctaCard,
  id = "industries",
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  industries: Industry[];
  ctaCard?: CtaCard;
  id?: string;
}) {
  return (
    <Section id={id} bg="cream">
      <Container>
        <Reveal>
          <SectionHead center eyebrow={eyebrow} heading={heading} lead={lead} />
        </Reveal>

        <div className="mt-[clamp(2.5rem,4vw,3.5rem)] grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal
              as="article"
              key={ind.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="flex flex-col rounded-lg border border-border bg-white p-[1.8rem] shadow-sm hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <div className="flex items-center gap-3 pb-5">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl border border-[#f0e3c4] bg-gold-tint text-gold-deep [&>svg]:h-5.5 [&>svg]:w-5.5">
                  <Icon name={ind.icon} />
                </span>
                <h3 className="text-[1.18rem]">{ind.title}</h3>
              </div>
              <ul className="flex flex-col gap-[.7rem] border-t border-border pt-5">
                {ind.roles.map((role) => (
                  <li key={role} className="flex items-center gap-[.6rem] text-[.96rem] text-body">
                    <Icon name="check" strokeWidth={2.4} className="h-4 w-4 flex-none text-gold-deep" />
                    {role}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          {ctaCard && (
            <Reveal
              as="article"
              delay={((industries.length % 3) + 1) as 1 | 2 | 3}
              className="flex flex-col rounded-lg border border-navy bg-[linear-gradient(155deg,#16223c,#101828)] p-[1.8rem] shadow-sm transition-colors duration-200 hover:border-gold"
            >
              <span className="mb-5 grid h-12 w-12 flex-none place-items-center rounded-xl bg-gold/14 text-gold-soft [&>svg]:h-5.5 [&>svg]:w-5.5">
                <Icon name={ctaCard.icon} />
              </span>
              <h3 className="mb-2 text-[1.18rem] text-white">{ctaCard.title}</h3>
              <p className="text-[.96rem] leading-[1.65] text-white/70">{ctaCard.body}</p>
              <LinkArrow href={ctaCard.link.href} className="mt-5 text-gold-soft">
                {ctaCard.link.label}
              </LinkArrow>
            </Reveal>
          )}
        </div>
      </Container>
    </Section>
  );
}
