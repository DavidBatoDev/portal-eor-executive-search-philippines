import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { team } from "@/lib/content/home";

const BG_SRC = "/assets/Portal Website Images/Shared services page, form section.png";

export function Team() {
  return (
    <Section id="team" bg="white" className="overflow-hidden">
      {/* Full-bleed decorative backdrop: abstract shapes frame the centered heading and cards. */}
      <Image
        src={BG_SRC}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover"
      />
      <Container className="relative z-1">
        <Reveal>
          <SectionHead center eyebrow={team.eyebrow} heading={team.heading} lead={team.lead} />
        </Reveal>

        <div className="mt-[clamp(2.5rem,4vw,3.5rem)] grid gap-[clamp(1.4rem,2.5vw,2rem)] grid-cols-2 lg:grid-cols-4">
          {team.members.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i === 0 ? undefined : ((i % 4) as 1 | 2 | 3)}
              className="rounded-lg border border-border bg-white p-[1.6rem_1.4rem_1.7rem] text-center shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.75 hover:border-gold hover:shadow"
            >
              <Image
                src={m.photo}
                alt={m.alt}
                width={128}
                height={128}
                className="mx-auto mb-[1.2rem] block h-32 w-32 rounded-full object-cover object-top shadow-[0_0_0_4px_#F9F4E8,0_0_0_5px_#E4E7EC]"
              />
              <p className="font-head text-[1.08rem] font-extrabold tracking-[-0.01em] text-navy">
                {m.name}
              </p>
              <span className="mx-auto my-[.7rem] block h-0.5 w-7.5 rounded-xs bg-gold" />
              <p className="font-body text-[.86rem] font-medium uppercase tracking-[.04em] text-body">
                {m.role}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
