"use client";

import type { ProductConfig } from "@/lib/product-config";
import PageWrapper from "@/components/layout/PageWrapper";
import TopBar from "@/components/sections/TopBar";
import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import SalesLetter from "@/components/sections/SalesLetter";
import WhatYouGet from "@/components/sections/WhatYouGet";
import HormoziQuote from "@/components/sections/HormoziQuote";
import StickySidebar from "@/components/sections/StickySidebar";
import SneakPeek from "@/components/sections/SneakPeek";
import AlsoGetting from "@/components/sections/AlsoGetting";
import Bonuses from "@/components/sections/Bonuses";
import FAQ from "@/components/sections/FAQ";
import Guarantee from "@/components/sections/Guarantee";
import Divider from "@/components/sections/Divider";
import Footer from "@/components/sections/Footer";

const SECTION_MAP: Record<
  string,
  React.ComponentType<{ config: ProductConfig }>
> = {
  topBar: TopBar,
  hero: Hero,
  valueProp: ValueProp,
  salesLetter: SalesLetter,
  whatYouGet: WhatYouGet,
  hormoziQuote: HormoziQuote,
  sneakPeek: SneakPeek,
  alsoGetting: AlsoGetting,
  bonuses: Bonuses,
  faq: FAQ,
  guarantee: Guarantee,
  divider: Divider as unknown as React.ComponentType<{ config: ProductConfig }>,
  footer: Footer,
};

const DEFAULT_ORDER = [
  "topBar",
  "hero",
  "valueProp",
  "salesLetter",
  "whatYouGet",
  "hormoziQuote",
  "sneakPeek",
  "alsoGetting",
  "bonuses",
  "faq",
  "guarantee",
  "divider",
  "footer",
];

export default function LongFormPage({ config }: { config: ProductConfig }) {
  const order = config.sectionOrder || DEFAULT_ORDER;
  const toggles = config.sections || {};

  return (
    <PageWrapper>
      {order.map((sectionKey) => {
        // Check if section is toggled off
        const isEnabled =
          toggles[sectionKey as keyof typeof toggles] !== false;
        if (!isEnabled) return null;

        const Component = SECTION_MAP[sectionKey];
        if (!Component) return null;

        return <Component key={sectionKey} config={config} />;
      })}

      {/* Sticky sidebar is always outside the flow (fixed position) */}
      {toggles.stickySidebar !== false && <StickySidebar config={config} />}
    </PageWrapper>
  );
}
