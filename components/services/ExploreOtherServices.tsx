import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { otherServices } from "@/lib/content/services";

// Bottom-of-page discovery grid: the homepage card layout showing every service
// except the one being viewed, so visitors who land directly on a service page
// can still find Portal's other offerings.
export function ExploreOtherServices({ currentSlug }: { currentSlug: string }) {
  const cards = otherServices(currentSlug).map((s) => ({
    href: s.href,
    title: s.title,
    body: s.body,
    linkLabel: s.linkLabel,
    icon: s.icon,
  }));

  return (
    <Section bg="soft">
      <Container>
        <Reveal>
          <SectionHead
            center
            eyebrow="Keep Exploring"
            heading="Explore Our Other Services"
            lead="Portal brings together workforce solutions for companies hiring and operating across the Philippines."
          />
        </Reveal>

        <ServiceCardGrid cards={cards} />
      </Container>
    </Section>
  );
}
