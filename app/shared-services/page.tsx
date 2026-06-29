import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/shared/ServiceHero";
import { Pillars } from "@/components/sections/shared/Pillars";
import { ServiceUseCards } from "@/components/sections/shared/ServiceUseCards";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { UseCaseCards } from "@/components/sections/shared/UseCaseCards";
import { HiresMarquee } from "@/components/sections/shared/HiresMarquee";
import { InquiryForm } from "@/components/sections/shared/InquiryForm";
import { IndustriesRoles } from "@/components/sections/shared/IndustriesRoles";
import { Faq } from "@/components/sections/shared/Faq";
import { FinalCta } from "@/components/sections/shared/FinalCta";
import {
  meta,
  hero,
  why,
  capabilities,
  process,
  whoFor,
  wins,
  inquiry,
  industries,
  faq,
  finalCta,
} from "@/lib/content/shared-services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/shared-services",
});

export default function SharedServicesPage() {
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
        id="why"
        eyebrow={why.eyebrow}
        heading={why.heading}
        lead={why.lead}
        pillars={why.pillars}
      />
      <ServiceUseCards
        id="services-overview"
        eyebrow={capabilities.eyebrow}
        heading={capabilities.heading}
        cards={capabilities.cards}
      />
      <ProcessSteps
        eyebrow={process.eyebrow}
        heading={process.heading}
        steps={process.steps}
      />
      <UseCaseCards
        id="who"
        eyebrow={whoFor.eyebrow}
        heading={whoFor.heading}
        cards={whoFor.cards}
        ctaCard={whoFor.ctaCard}
      />
      <HiresMarquee
        id="wins"
        eyebrow={wins.eyebrow}
        heading={wins.heading}
        hint={wins.hint}
        cards={wins.cards}
      />
      <InquiryForm
        eyebrow={inquiry.eyebrow}
        heading={inquiry.heading}
        formTitle={inquiry.formTitle}
      />
      <IndustriesRoles
        id="industries"
        eyebrow={industries.eyebrow}
        heading={industries.heading}
        lead={industries.lead}
        industries={industries.items}
      />
      <Faq eyebrow={faq.eyebrow} heading={faq.heading} items={faq.items} bg="white" />
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
