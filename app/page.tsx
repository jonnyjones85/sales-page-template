import type { Metadata } from "next";
import LongFormPage from "@/components/LongFormPage";
import config from "@/product-configs/1cco";

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
};

export default function Home() {
  return <LongFormPage config={config} />;
}
