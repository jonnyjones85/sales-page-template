"use client";

import type { ProductConfig } from "@/lib/product-config";
import SectionWrapper from "@/components/layout/SectionWrapper";
import VideoEmbed from "@/components/shared/VideoEmbed";

export default function SneakPeek({ config }: { config: ProductConfig }) {
  const { sneakPeek } = config;
  if (!sneakPeek) return null;

  return (
    <SectionWrapper id="section-sneak-peek" className="bg-white py-8 md:py-12">
      <h2 className="text-[var(--fs-2xl)] md:text-[var(--fs-3xl)] font-bold text-center text-black mb-4">
        {sneakPeek.heading}
      </h2>
      {sneakPeek.subheading && (
        <p className="text-[var(--fs-base)] text-center text-[var(--color-text)] mb-8 max-w-2xl mx-auto">
          {sneakPeek.subheading}
        </p>
      )}
      <div className="max-w-[800px] mx-auto">
        <VideoEmbed
          vimeoId={sneakPeek.video.vimeoId}
          thumbnailSrc={sneakPeek.video.thumbnailSrc}
          title={sneakPeek.heading}
        />
      </div>
    </SectionWrapper>
  );
}
