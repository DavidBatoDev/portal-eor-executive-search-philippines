import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { intro } from "@/lib/content/home";

export function Intro() {
  return (
    <Section bg="cream">
      <Container>
        <div className="grid items-start gap-[clamp(2rem,4vw,4rem)] lg:grid-cols-[1.7fr_.82fr]">
          <div>
            <Eyebrow className="mb-[1.1rem]">{intro.eyebrow}</Eyebrow>
            <h2>{intro.heading}</h2>
          </div>
          <div className="space-y-6">
            <p className="lead">{intro.lead}</p>
            <p>
              {intro.bodyPre}
              <strong>{intro.bodyStrong}</strong>
              {intro.bodyPost}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
