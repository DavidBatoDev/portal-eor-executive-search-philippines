import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { IconFrame } from "@/components/ui/IconFrame";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { servicesSection } from "@/lib/content/home";

export function ServiceGrid() {
  return (
    <Section bg="white" id="services">
      <Container>
        <Reveal>
          <SectionHead
            center
            eyebrow={servicesSection.eyebrow}
            heading={servicesSection.heading}
            lead={servicesSection.lead}
          />
        </Reveal>

        <div className="mt-14 grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-2 lg:grid-cols-3">
          {servicesSection.cards.map((c, i) => (
            <Reveal
              as="article"
              key={c.href}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group relative flex h-full flex-col overflow-hidden rounded border border-border bg-white p-8 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-[#dfe2e7] hover:shadow-lg"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-[350ms] group-hover:scale-x-100" />
              <IconFrame tone="navy" className="mb-6">
                <Icon name={c.icon} />
              </IconFrame>
              <h3 className="mb-[.7rem]">{c.title}</h3>
              <p className="mb-6 flex-1 text-[.98rem]">{c.body}</p>
              <LinkArrow href={c.href}>{c.linkLabel}</LinkArrow>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-[clamp(2.5rem,4vw,3.5rem)] flex justify-center">
          <Button href={servicesSection.footCta.href} variant="ghost-light" arrow>
            {servicesSection.footCta.label}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
