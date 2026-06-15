import type { Metadata } from "next";
import { ServicePageView } from "@/components/services/ServicePageView";
import { serviceMetadata } from "@/lib/content/services";

export const metadata: Metadata = serviceMetadata("hr-outsourcing");

export default function Page() {
  return <ServicePageView slug="hr-outsourcing" />;
}
