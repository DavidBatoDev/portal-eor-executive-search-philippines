import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";

type Pillar = { icon: IconName; title: string };

// Simple icon + title "pillar" strip (#why). Centered head, four equal columns.
export function Pillars({
  eyebrow,
  heading,
  lead,
  items,
  id = "why",
}: {
  eyebrow: string;
  heading: string;
  lead: string;
  items: Pillar[];
  id?: string;
}) {
  return (
    <Section id={id} bg="white">
      <Container>
        <Reveal>
          <SectionHead center eyebrow={eyebrow} heading={heading} lead={lead} />
        </Reveal>

        <div className="mt-[clamp(2.5rem,4vw,3.5rem)] grid gap-[clamp(1.25rem,2.5vw,1.75rem)] sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => (
            <Reveal
              key={p.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="flex flex-col items-center gap-[1.1rem] rounded-lg border border-border bg-white p-[2rem_1.5rem] text-center shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-[#dfe2e7] hover:shadow-lg"
            >
              <span className="grid h-[58px] w-[58px] flex-none place-items-center rounded-[14px] border border-[#f0e3c4] bg-gold-tint text-gold-deep [&>svg]:h-[27px] [&>svg]:w-[27px]">
                <Icon name={p.icon} />
              </span>
              <h4 className="text-[1.08rem] leading-[1.3]">{p.title}</h4>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
