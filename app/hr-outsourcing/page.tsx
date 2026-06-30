import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/shared/ServiceHero";
import { PainPoints } from "@/components/sections/shared/PainPoints";
import { BusinessImpact } from "@/components/sections/hr-outsourcing/BusinessImpact";
import { ServiceUseCards } from "@/components/sections/shared/ServiceUseCards";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { AudienceCards } from "@/components/sections/shared/AudienceCards";
import { IndustriesRoles } from "@/components/sections/shared/IndustriesRoles";
import { Faq } from "@/components/sections/shared/Faq";
import { FinalCta } from "@/components/sections/shared/FinalCta";
import {
  meta,
  hero,
  painPoints,
  impact,
  capabilities,
  process,
  whoFor,
  industries,
  faq,
  finalCta,
} from "@/lib/content/hr-outsourcing";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/hr-outsourcing",
});

export default function HrOutsourcingPage() {
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
        imageClassName="-scale-x-100 mask-[radial-gradient(circle_at_bottom_right,black_10%,transparent_60%)]"
        bg="white"
      />
      <BusinessImpact
        eyebrow={impact.eyebrow}
        heading={impact.heading}
        items={impact.items}
      />
      <ServiceUseCards
        id="capabilities"
        eyebrow={capabilities.eyebrow}
        heading={capabilities.heading}
        cards={capabilities.cards}
      />
      <ProcessSteps
        eyebrow={process.eyebrow}
        heading={process.heading}
        steps={process.steps}
        cols={5}
      />
      <AudienceCards
        eyebrow={whoFor.eyebrow}
        heading={whoFor.heading}
        lead={whoFor.lead}
        cards={whoFor.cards}
        ctaCard={whoFor.ctaCard}
        image={whoFor.image}
        imageClassName="opacity-25"
      />
      <IndustriesRoles
        eyebrow={industries.eyebrow}
        heading={industries.heading}
        lead={industries.lead}
        industries={industries.items}
        bg="white"
      />
      <Faq eyebrow={faq.eyebrow} heading={faq.heading} items={faq.items} />
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
