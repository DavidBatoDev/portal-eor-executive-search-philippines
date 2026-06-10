import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProofMarquee } from "@/components/sections/ProofMarquee";
import { Intro } from "@/components/sections/Intro";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Journey } from "@/components/sections/Journey";
import { Challenge } from "@/components/sections/Challenge";
import { NationwideMap } from "@/components/sections/NationwideMap";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { UseCases } from "@/components/sections/UseCases";
import { WhyPortal } from "@/components/sections/WhyPortal";
import { Team } from "@/components/sections/Team";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/layout/Footer";
import { meta, faq, finalCta } from "@/lib/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProofMarquee />
        <Intro />
        <ServiceGrid />
        <Journey />
        <Challenge />
        <NationwideMap />
        <WhoWeHelp />
        <UseCases />
        <WhyPortal />
        <Team />
        <Faq eyebrow={faq.eyebrow} heading={faq.heading} lead={faq.lead} items={faq.items} />
        <FinalCta
          eyebrow={finalCta.eyebrow}
          heading={finalCta.heading}
          lead={finalCta.lead}
          primary={finalCta.primaryCta}
          secondary={finalCta.secondaryCta}
        />
      </main>
      <Footer />
    </>
  );
}
