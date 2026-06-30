import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceHero } from "@/components/sections/shared/ServiceHero";
import { PainPoints } from "@/components/sections/shared/PainPoints";
import { Pillars } from "@/components/sections/shared/Pillars";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { AudienceCards } from "@/components/sections/shared/AudienceCards";
import { HiresMarquee } from "@/components/sections/shared/HiresMarquee";
import { Faq } from "@/components/sections/shared/Faq";
import { FinalCta } from "@/components/sections/shared/FinalCta";
import {
  meta,
  hero,
  painPoints,
  whyChoose,
  process,
  whoFor,
  wins,
  faq,
  finalCta,
} from "@/lib/content/payroll-outsourcing";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/payroll-outsourcing",
});

export default function PayrollOutsourcingPage() {
  // Temporarily hidden from the client — remove this line to re-enable the page.
  notFound();

  return (
    <main>
      <ServiceHero
        breadcrumb={hero.breadcrumb}
        current={hero.current}
        titlePre={hero.titlePre}
        lead={hero.lead}
        ctas={hero.ctas}
      />
      <PainPoints
        eyebrow={painPoints.eyebrow}
        heading={painPoints.heading}
        intro={painPoints.intro}
        items={painPoints.items}
        solution={painPoints.solution}
        image={painPoints.image}
      />
      <Pillars
        eyebrow={whyChoose.eyebrow}
        heading={whyChoose.heading}
        lead={whyChoose.lead}
        pillars={whyChoose.pillars}
        cols={5}
        surface="cream"
      />
      <ProcessSteps
        eyebrow={process.eyebrow}
        heading={process.heading}
        steps={process.steps}
      />
      <AudienceCards
        eyebrow={whoFor.eyebrow}
        heading={whoFor.heading}
        lead={whoFor.lead}
        cards={whoFor.cards}
        ctaCard={whoFor.ctaCard}
        image={whoFor.image}
      />
      <HiresMarquee
        eyebrow={wins.eyebrow}
        heading={wins.heading}
        hint={wins.hint}
        cards={wins.cards}
      />
      <Faq eyebrow={faq.eyebrow} heading={faq.heading} lead={faq.lead} items={faq.items} bg="white" />
      <FinalCta
        eyebrow={finalCta.eyebrow}
        heading={finalCta.heading}
        lead={finalCta.lead}
        primary={finalCta.primaryCta}
        secondary={finalCta.secondaryCta}
      />
    </main>
  );
}
