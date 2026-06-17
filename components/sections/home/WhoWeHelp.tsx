import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { whoWeHelp } from "@/lib/content/home";

export function WhoWeHelp() {
  return (
    <Section id="who" bg="cream">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow={whoWeHelp.eyebrow}
            heading={whoWeHelp.heading}
            lead={whoWeHelp.lead}
          />
        </Reveal>

        <div className="mt-12 grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-2 lg:grid-cols-3">
          {whoWeHelp.cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="flex items-start gap-4 rounded border border-border bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.75 hover:shadow"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-[11px] bg-navy text-gold">
                <Icon name={c.icon} className="h-5.25 w-5.25" />
              </span>
              <div>
                <h4 className="mb-[.3rem] text-[1.02rem]">{c.title}</h4>
                <p className="text-[.9rem] leading-normal">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
