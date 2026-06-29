import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { useCases } from "@/lib/content/home";
import { cx } from "@/lib/cx";

const BG_SRC = "/assets/Portal Website Images/Portal Homepage, when companies work with us , .png";

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
      <span className="w-7.5 flex-none pt-[.1rem] font-head text-[.92rem] font-extrabold text-gold-deep">
        {item.n}
      </span>
      <div>
        <h4>{item.title}</h4>
        <p className="mt-1 text-[.96rem]">{item.body}</p>
      </div>
    </div>
  );
}

export function UseCases() {
  const left = useCases.items.slice(0, 4);
  const right = useCases.items.slice(4);
  return (
    <Section id="usecases" bg="white" className="overflow-hidden">
      {/* Full-bleed atmospheric backdrop: globe + silhouettes anchor right, behind the use-case list.
          Radial mask centered on the upper-right corner — fully opaque there, fading outward
          so the lower-right and the rest of the section get progressively fainter. */}
      <Image
        src={BG_SRC}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover object-right mask-[radial-gradient(circle_at_top_right,black_10%,transparent_60%)]"
      />
      <Container className="relative z-1">
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
