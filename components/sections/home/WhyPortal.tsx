import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { whyPortal } from "@/lib/content/home";

export function WhyPortal() {
  return (
    <Section id="why" bg="cream">
      <Container>
        <div className="grid items-start gap-[clamp(2rem,5vw,5rem)] lg:grid-cols-2">
          <Reveal className="max-w-[760px] self-start lg:sticky lg:top-[100px]">
            <Eyebrow className="mb-[1.1rem]">{whyPortal.eyebrow}</Eyebrow>
            <h2>{whyPortal.heading}</h2>
            <p className="lead mt-[1.25rem]">{whyPortal.lead}</p>
            <p className="mt-[1.1rem]">{whyPortal.body}</p>
          </Reveal>

          <Reveal delay={1} className="grid gap-[clamp(1.2rem,2.2vw,1.5rem)] sm:grid-cols-2">
            {whyPortal.cards.map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded border border-border bg-white p-[1.7rem] shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-[#dfe2e7] hover:shadow-lg"
              >
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-[350ms] group-hover:scale-x-100" />
                <span className="mb-[1.2rem] grid h-[50px] w-[50px] place-items-center rounded-[13px] border border-[#f0e3c4] bg-gold-tint text-gold-deep">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h4 className="mb-[.5rem] text-[1.08rem]">{c.title}</h4>
                <p className="text-[.94rem] leading-[1.6]">{c.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
