import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { EorContent } from "@/components/services/EorContent";
import { ServicePlaceholder } from "@/components/services/ServicePlaceholder";
import { ExploreOtherServices } from "@/components/services/ExploreOtherServices";
import { getService } from "@/lib/content/services";

// Shared shell for every individual service page: the service's own content
// (full build for EOR, a "coming soon" hero otherwise), then the
// "Explore Our Other Services" grid, then the footer.
export function ServicePageView({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <main>
        {service.hasContent ? (
          <EorContent />
        ) : (
          <ServicePlaceholder service={service} />
        )}
        <ExploreOtherServices currentSlug={slug} />
      </main>
      <Footer />
    </>
  );
}
