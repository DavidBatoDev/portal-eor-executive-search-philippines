import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
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

        <ServiceCardGrid cards={servicesSection.cards} />

        <Reveal className="mt-[clamp(2.5rem,4vw,3.5rem)] flex justify-center">
          <Button href={servicesSection.footCta.href} variant="ghost-light" arrow>
            {servicesSection.footCta.label}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
