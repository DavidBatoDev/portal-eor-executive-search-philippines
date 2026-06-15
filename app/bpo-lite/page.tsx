import type { Metadata } from "next";
import { ServicePageView } from "@/components/services/ServicePageView";
import { serviceMetadata } from "@/lib/content/services";

export const metadata: Metadata = serviceMetadata("bpo-lite");

export default function Page() {
  return <ServicePageView slug="bpo-lite" />;
}
