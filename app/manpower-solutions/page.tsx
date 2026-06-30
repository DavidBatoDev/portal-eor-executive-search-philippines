import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/shared/ServiceHero";
import { Pillars } from "@/components/sections/manpower-solutions/Pillars";
import { ServiceUseCards } from "@/components/sections/shared/ServiceUseCards";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { AudienceCards } from "@/components/sections/shared/AudienceCards";
import { HiresMarquee } from "@/components/sections/shared/HiresMarquee";
import { IndustriesRoles } from "@/components/sections/manpower-solutions/IndustriesRoles";
import { Faq } from "@/components/sections/shared/Faq";
import { FinalCta } from "@/components/sections/shared/FinalCta";
import {
  meta,
  hero,
  whyPillars,
  servicesOverview,
  process,
  whoFor,
  hires,
  industries,
  faq,
  finalCta,
} from "@/lib/content/manpower-solutions";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/manpower-solutions",
});

export default function ManpowerSolutionsPage() {
  return (
    <main>
      <ServiceHero
        breadcrumb={hero.breadcrumb}
        current={hero.current}
        titlePre={hero.titlePre}
        lead={hero.lead}
        ctas={hero.ctas}
      />
      <Pillars
        eyebrow={whyPillars.eyebrow}
        heading={whyPillars.heading}
        lead={whyPillars.lead}
        items={whyPillars.items}
      />
      <ServiceUseCards
        id="services-overview"
        eyebrow={servicesOverview.eyebrow}
        heading={servicesOverview.heading}
        lead={servicesOverview.lead}
        cards={servicesOverview.cards}
        ctaCard={servicesOverview.ctaCard}
      />
      <ProcessSteps
        eyebrow={process.eyebrow}
        heading={process.heading}
        steps={process.steps}
        cols={5}
      />
      <AudienceCards
        variant="solo"
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
      <IndustriesRoles
        eyebrow={industries.eyebrow}
        heading={industries.heading}
        lead={industries.lead}
        cards={industries.cards}
        ctaCard={industries.ctaCard}
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
