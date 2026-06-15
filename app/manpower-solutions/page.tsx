import type { Metadata } from "next";
import { ServicePageView } from "@/components/services/ServicePageView";
import { serviceMetadata } from "@/lib/content/services";

export const metadata: Metadata = serviceMetadata("manpower-solutions");

export default function Page() {
  return <ServicePageView slug="manpower-solutions" />;
}
