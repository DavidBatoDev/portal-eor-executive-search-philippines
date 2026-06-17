import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { RingWatermark } from "@/components/ui/RingWatermark";

type Hire = {
  month: string;
  role: string;
  region: string;
  desc: string;
  tag: string;
};

export function HiresMarquee({
  eyebrow,
  heading,
  hint,
  cards,
  id = "hires",
}: {
  eyebrow: string;
  heading: string;
  hint: string;
  cards: Hire[];
  id?: string;
}) {
  const loop = [...cards, ...cards];
  return (
    <Section id={id} bg="cream" className="overflow-hidden">
      <RingWatermark
        circles={[30, 55, 80, 99]}
        dot={12}
        colorClass="text-navy"
        className="right-[-8%] top-[-30%] h-140 w-140 opacity-[0.035]"
      />
      <Container className="relative z-1">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow className="mb-[1.1rem]">{eyebrow}</Eyebrow>
            <h2>{heading}</h2>
          </div>
          <span className="inline-flex items-center gap-2 font-body text-[.8rem] font-semibold tracking-[.04em] text-body">
            <Icon name="arrow-long-right" strokeWidth={1.8} className="h-4 w-4 text-gold-deep" />
            {hint}
          </span>
        </Reveal>
      </Container>

      <div className="hire-pause hire-mask relative z-1 mt-[clamp(2rem,3.5vw,3rem)] flex overflow-hidden">
        <div className="hire-track flex flex-none items-stretch gap-[clamp(1.1rem,2vw,1.6rem)] py-[.6rem]">
          {loop.map((c, i) => (
            <HireCard key={i} card={c} duplicate={i >= cards.length} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function HireCard({ card, duplicate }: { card: Hire; duplicate: boolean }) {
  return (
    <article
      aria-hidden={duplicate || undefined}
      className="flex w-[clamp(300px,32vw,360px)] flex-none flex-col rounded-lg border border-border bg-white p-[1.7rem] shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1.25 hover:border-gold hover:shadow-lg"
    >
      <div className="mb-[1.2rem] flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-[.45rem] rounded-full border border-[#f0e3c4] bg-gold-tint px-[.7rem] py-[.35rem] font-body text-[.74rem] font-semibold uppercase tracking-[.08em] text-gold-deep">
          <Icon name="calendar" strokeWidth={2} className="h-3.25 w-3.25" />
          {card.month}
        </span>
        <span className="h-8.5 w-8.5 flex-none text-gold opacity-50" aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
            <g stroke="currentColor" strokeWidth="3">
              <circle cx="50" cy="50" r="22" />
              <circle cx="50" cy="50" r="38" />
            </g>
            <circle cx="50" cy="50" r="8" fill="currentColor" />
          </svg>
        </span>
      </div>
      <h3 className="mb-[.55rem] text-[1.18rem] leading-tight text-navy">{card.role}</h3>
      <div className="mb-4 flex items-center gap-2 font-head text-[.88rem] font-semibold text-body">
        <Icon name="map-pin" strokeWidth={1.8} className="h-4 w-4 flex-none text-gold-deep" />
        {card.region}
      </div>
      <p className="flex-1 text-[.96rem] leading-[1.6] text-charcoal">{card.desc}</p>
      <div className="mt-[1.4rem] border-t border-border pt-[1.2rem]">
        <span className="mb-2 block font-body text-[.7rem] font-semibold uppercase tracking-[.12em] text-body">
          Service Used
        </span>
        <span className="inline-flex items-center gap-[.45rem] rounded-full border border-border bg-white px-[.85rem] py-[.4rem] font-head text-[.85rem] font-bold text-navy shadow-sm">
          <span className="h-1.75 w-1.75 flex-none rounded-full bg-gold" />
          {card.tag}
        </span>
      </div>
    </article>
  );
}
