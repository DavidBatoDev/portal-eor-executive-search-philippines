import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { intro } from "@/lib/content/home";

const BG_SRC = "/assets/Portal Website Images/Homepage, section 2 image background.png";

export function Intro() {
  return (
    <Section bg="cream" className="overflow-hidden">
      {/* Full-bleed backdrop (lg+): copy overlays the cream left area, the team photo sits to the right. */}
      <Image
        src={BG_SRC}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="pointer-events-none hidden select-none object-cover object-right lg:block"
      />

      <Container className="relative z-1">
        <div className="grid items-start gap-[clamp(2rem,4vw,4rem)] lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <Eyebrow className="mb-[1.1rem]">{intro.eyebrow}</Eyebrow>
              <h2>{intro.heading}</h2>
            </div>
            <p className="lead">{intro.lead}</p>
            <p>
              {intro.bodyPre}
              <strong>{intro.bodyStrong}</strong>
              {intro.bodyPost}
            </p>
          </div>

          {/* Below lg the overlay would crowd the copy, so the photo renders inline instead. */}
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg lg:hidden">
            <Image
              src={BG_SRC}
              alt="Business team collaborating around a laptop in a modern office"
              fill
              sizes="100vw"
              className="object-cover object-right"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
