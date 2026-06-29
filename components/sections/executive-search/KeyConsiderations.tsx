import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type Consideration = { n: string; title: string; body: string };
type Guide = {
  badge: string;
  title: string;
  image: string;
  cta: { label: string; href: string };
  caption: string;
};

// "Key considerations" checklist paired with a downloadable lead-magnet card.
export function KeyConsiderations({
  eyebrow,
  heading,
  lead,
  items,
  guide,
  id = "considerations",
}: {
  eyebrow: string;
  heading: string;
  lead: string;
  items: Consideration[];
  guide: Guide;
  id?: string;
}) {
  return (
    <Section id={id} bg="cream">
      <Container>
        <div className="grid items-stretch gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-2">
          <Reveal className="flex flex-col">
            <Eyebrow className="mb-[1.1rem]">{eyebrow}</Eyebrow>
            <h2>{heading}</h2>
            <p className="lead mt-5 max-w-[46ch]">{lead}</p>

            <div className="mt-[2.2rem] flex flex-1 flex-col justify-between gap-[1.1rem]">
              {items.map((it) => (
                <div
                  key={it.n}
                  className="flex items-start gap-4 rounded-lg border border-border bg-white p-[1.3rem_1.4rem] shadow-sm"
                >
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-[11px] bg-gold-tint font-head text-[.95rem] font-extrabold text-gold-deep">
                    {it.n}
                  </span>
                  <div>
                    <h4 className="text-[1.04rem]">{it.title}</h4>
                    <p className="mt-1 text-[.95rem] leading-[1.55]">{it.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={1} className="flex flex-col gap-5 lg:sticky lg:top-24">
            {/* Lead-magnet cover with a "Free Guide" badge */}
            <div className="relative overflow-hidden rounded-lg border border-border shadow-lg">
              <span className="absolute left-4 top-4 z-1 inline-flex rounded-full bg-gold px-3 py-1 font-head text-[.72rem] font-bold uppercase tracking-[.08em] text-navy shadow-sm">
                {guide.badge}
              </span>
              <Image
                src={guide.image}
                alt={guide.title}
                width={1198}
                height={1313}
                className="block h-auto w-full"
              />
            </div>

            {/* Download card */}
            <div className="rounded-lg border border-border bg-white p-[clamp(1.4rem,2.5vw,1.8rem)] text-center shadow-sm">
              <Button href={guide.cta.href} variant="primary" className="w-full">
                {guide.cta.label}
              </Button>
              <p className="mt-3 text-[.9rem] leading-snug text-body">{guide.caption}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
