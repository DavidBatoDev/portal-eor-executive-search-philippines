import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { PainPoints } from "@/components/sections/PainPoints";
import { ServiceUseCards } from "@/components/sections/ServiceUseCards";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { AudienceCards } from "@/components/sections/AudienceCards";
import { HiresMarquee } from "@/components/sections/HiresMarquee";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import {
  meta,
  hero,
  painPoints,
  useCards,
  process,
  whoFor,
  hires,
  faq,
  finalCta,
} from "@/lib/content/eor";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function EorPage() {
  return (
    <main>
      <ServiceHero
        breadcrumb={hero.breadcrumb}
        current={hero.current}
        titlePre={hero.titlePre}
        titleEm={hero.titleEm}
        lead={hero.lead}
        roleSearch={hero.roleSearch}
      />
      <PainPoints
        eyebrow={painPoints.eyebrow}
        heading={painPoints.heading}
        intro={painPoints.intro}
        items={painPoints.items}
        solution={painPoints.solution}
      />
      <ServiceUseCards
        eyebrow={useCards.eyebrow}
        heading={useCards.heading}
        lead={useCards.lead}
        cards={useCards.cards}
        ctaCard={useCards.ctaCard}
        footCta={useCards.footCta}
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
      />
      <HiresMarquee
        eyebrow={hires.eyebrow}
        heading={hires.heading}
        hint={hires.hint}
        cards={hires.cards}
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
