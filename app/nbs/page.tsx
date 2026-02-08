import type { Metadata } from "next";
import LongFormPage from "@/components/LongFormPage";
import config from "@/product-configs/nbs";

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
};

export default function NBSPage() {
  return <LongFormPage config={config} />;
}
