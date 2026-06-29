import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

// Founder message: centered heading, then a portrait + pull-quote split.
export function FounderMessage({
  eyebrow,
  heading,
  name,
  role,
  photo,
  quote,
  id = "founder",
}: {
  eyebrow: string;
  heading: string;
  name: string;
  role: string;
  photo: string;
  quote: string;
  id?: string;
}) {
  return (
    <Section id={id} bg="white">
      <Container>
        <Reveal>
          <SectionHead center eyebrow={eyebrow} heading={heading} />
        </Reveal>

        <div className="mx-auto mt-[clamp(2.5rem,4vw,3.5rem)] grid max-w-4xl items-center gap-[clamp(2rem,5vw,4rem)] md:grid-cols-[auto_1fr]">
          <Reveal className="flex flex-col items-center text-center">
            <Image
              src={photo}
              alt={name}
              width={192}
              height={192}
              className="h-44 w-44 rounded-full object-cover object-top shadow-[0_0_0_5px_#F9F4E8,0_0_0_6px_#E4E7EC]"
            />
            <p className="mt-5 font-head text-[1.1rem] font-extrabold text-navy">{name}</p>
            <span className="mt-1 font-head text-[.8rem] font-bold uppercase tracking-[.08em] text-gold-deep">
              {role}
            </span>
          </Reveal>

          <Reveal delay={1}>
            <span aria-hidden="true" className="block font-head text-6xl leading-none text-gold/45">
              &ldquo;
            </span>
            <p className="mt-1 text-[1.1rem] leading-[1.8] text-charcoal">{quote}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
