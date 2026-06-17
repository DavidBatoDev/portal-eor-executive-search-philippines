import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { useCases } from "@/lib/content/home";
import { cx } from "@/lib/cx";

function UseCaseItem({
  item,
  isLast,
}: {
  item: (typeof useCases.items)[number];
  isLast: boolean;
}) {
  return (
    <div
      className={cx(
        "flex items-start gap-4 py-[1.3rem]",
        !isLast && "border-b border-border"
      )}
    >
      <span className="w-[30px] flex-none pt-[.1rem] font-head text-[.92rem] font-extrabold text-gold-deep">
        {item.n}
      </span>
      <div>
        <h4>{item.title}</h4>
        <p className="mt-[.25rem] text-[.96rem]">{item.body}</p>
      </div>
    </div>
  );
}

export function UseCases() {
  const left = useCases.items.slice(0, 4);
  const right = useCases.items.slice(4);
  return (
    <Section id="usecases" bg="white">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow={useCases.eyebrow}
            heading={useCases.heading}
            lead={useCases.lead}
          />
        </Reveal>

        <div className="mt-12 grid gap-x-[clamp(2rem,5vw,5rem)] md:grid-cols-2">
          <Reveal delay={1}>
            {left.map((item, i) => (
              <UseCaseItem key={item.n} item={item} isLast={i === left.length - 1} />
            ))}
          </Reveal>
          <Reveal delay={2}>
            {right.map((item, i) => (
              <UseCaseItem key={item.n} item={item} isLast={i === right.length - 1} />
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
