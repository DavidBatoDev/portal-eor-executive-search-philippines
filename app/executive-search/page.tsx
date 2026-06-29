import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/shared/ServiceHero";
import { WhyMatters } from "@/components/sections/executive-search/WhyMatters";
import { Partners } from "@/components/sections/executive-search/Partners";
import { IndustriesRoles } from "@/components/sections/shared/IndustriesRoles";
import { Process } from "@/components/sections/executive-search/Process";
import { HiresMarquee } from "@/components/sections/shared/HiresMarquee";
import { FounderMessage } from "@/components/sections/executive-search/FounderMessage";
import { KeyConsiderations } from "@/components/sections/executive-search/KeyConsiderations";
import { Faq } from "@/components/sections/shared/Faq";
import { FinalCta } from "@/components/sections/shared/FinalCta";
import {
  meta,
  hero,
  whyMatters,
  partners,
  industries,
  process,
  placements,
  founder,
  considerations,
  faq,
  finalCta,
} from "@/lib/content/executive-search";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/executive-search",
});

export default function ExecutiveSearchPage() {
  return (
    <main>
      <ServiceHero
        breadcrumb={hero.breadcrumb}
        current={hero.current}
        titlePre={hero.titlePre}
        lead={hero.lead}
        ctas={hero.ctas}
      />
      <WhyMatters
        eyebrow={whyMatters.eyebrow}
        heading={whyMatters.heading}
        intro={whyMatters.intro}
        image={whyMatters.image}
        difference={whyMatters.difference}
      />
      <Partners
        eyebrow={partners.eyebrow}
        heading={partners.heading}
        lead={partners.lead}
        consultants={partners.consultants}
      />
      <IndustriesRoles
        eyebrow={industries.eyebrow}
        heading={industries.heading}
        lead={industries.lead}
        industries={industries.items}
        footCta={industries.footCta}
        bg="white"
      />
      <Process
        eyebrow={process.eyebrow}
        heading={process.heading}
        lead={process.lead}
        steps={process.steps}
      />
      <HiresMarquee
        id="placements"
        eyebrow={placements.eyebrow}
        heading={placements.heading}
        hint={placements.hint}
        cards={placements.cards}
      />
      <FounderMessage
        eyebrow={founder.eyebrow}
        heading={founder.heading}
        name={founder.name}
        role={founder.role}
        photo={founder.photo}
        quote={founder.quote}
      />
      <KeyConsiderations
        eyebrow={considerations.eyebrow}
        heading={considerations.heading}
        lead={considerations.lead}
        items={considerations.items}
        guide={considerations.guide}
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
