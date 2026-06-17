import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/shared/ServiceHero";
import { PainPoints } from "@/components/sections/eor/PainPoints";
import { ServiceUseCards } from "@/components/sections/shared/ServiceUseCards";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { AudienceCards } from "@/components/sections/shared/AudienceCards";
import { HiresMarquee } from "@/components/sections/shared/HiresMarquee";
import { Faq } from "@/components/sections/shared/Faq";
import { FinalCta } from "@/components/sections/shared/FinalCta";
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
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/eor",
});

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
