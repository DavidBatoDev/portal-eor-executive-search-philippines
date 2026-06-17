import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RingWatermark } from "@/components/ui/RingWatermark";

type Cta = { label: string; href: string };

export function FinalCta({
  eyebrow,
  heading,
  lead,
  primary,
  secondary,
}: {
  eyebrow: string;
  heading: string;
  lead: string;
  primary: Cta;
  secondary: Cta;
}) {
  return (
    <Section id="contact" bg="navy" dark className="overflow-hidden">
      <RingWatermark
        circles={[24, 44, 64, 84, 99]}
        dot={10}
        className="right-[-8%] top-1/2 h-140 w-140 -translate-y-1/2 opacity-[0.07]"
      />
      <Container className="relative z-2">
        <Reveal className="mx-auto max-w-180 text-center">
          <Eyebrow center tone="soft">
            {eyebrow}
          </Eyebrow>
          <h2 className="mt-[1.1rem]">{heading}</h2>
          <p className="lead mt-[1.3rem]">{lead}</p>
          <div className="mt-[2.2rem] flex flex-wrap justify-center gap-4">
            <Button href={primary.href} variant="primary" arrow>
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="ghost-dark">
              {secondary.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
