import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { IconFrame } from "@/components/ui/IconFrame";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { whyBook } from "@/lib/content/book-a-meeting";

export function WhyBook() {
  return (
    <section className="bg-soft py-[clamp(4rem,3rem+4vw,7rem)]">
      <Container>
        <Reveal>
          <SectionHead eyebrow={whyBook.eyebrow} heading={whyBook.heading} center />
        </Reveal>

        <div className="mt-[clamp(2.5rem,4vw,4rem)] grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyBook.cards.map((card) => (
            <Reveal key={card.title}>
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <IconFrame className="mb-5">
                  <Icon name={card.icon} />
                </IconFrame>
                <h3 className="font-head text-[1.05rem] font-bold tracking-[-0.01em] text-navy">
                  {card.title}
                </h3>
                <p className="mt-[.45rem] text-[.95rem] leading-[1.55] text-body">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
