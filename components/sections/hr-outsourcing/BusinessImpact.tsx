import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";

// Each card is either a stat (big gold figure) or an icon highlight.
type Impact = { stat?: string; icon?: IconName; lead?: string; body: string };

// Navy "business impact" band: a row of outcome cards under a centered heading.
export function BusinessImpact({
  eyebrow,
  heading,
  items,
  id = "impact",
}: {
  eyebrow: string;
  heading: string;
  items: Impact[];
  id?: string;
}) {
  return (
    <Section id={id} bg="navy" dark className="overflow-hidden">
      <Container>
        <Reveal>
          <SectionHead center eyebrow={eyebrow} eyebrowTone="soft" heading={heading} />
        </Reveal>

        <div className="mt-[clamp(2.5rem,4vw,3.5rem)] grid gap-[clamp(1.1rem,2vw,1.5rem)] sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal
              as="article"
              key={it.body}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-7 transition-colors duration-200 hover:border-gold/40"
            >
              {it.stat ? (
                <span className="block font-head text-[2.7rem] font-extrabold leading-none text-gold">
                  {it.stat}
                </span>
              ) : it.icon ? (
                <span className="grid h-12 w-12 place-items-center rounded-[13px] bg-gold/14 text-gold [&>svg]:h-6 [&>svg]:w-6">
                  <Icon name={it.icon} />
                </span>
              ) : null}
              <p className="mt-4 text-[.96rem] leading-[1.6] text-white/72">
                {it.lead && <strong className="font-bold text-white">{it.lead} </strong>}
                {it.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
