"use client";

import type { ProductConfig } from "@/lib/product-config";
import StickyLayout from "@/components/layout/StickyLayout";
import CTABox from "@/components/shared/CTABox";
import VideoEmbed from "@/components/shared/VideoEmbed";

export default function ValueProp({ config }: { config: ProductConfig }) {
  const { valueProp } = config;
  if (!valueProp) return null;

  return (
    <section id="section-value-prop" className="bg-white py-8 md:py-12">
      <div className="max-w-[1170px] mx-auto px-4">
        <StickyLayout
          sidebar={
            <div className="space-y-6">
              {/* Sidebar product card */}
              {valueProp.sidebarProductCard && (
                <div className="border-2 border-black rounded overflow-hidden">
                  <img
                    src={valueProp.sidebarProductCard}
                    alt={config.name}
                    className="w-full"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Sticky CTA box */}
              <CTABox
                variant="sticky"
                price={config.price}
                originalPrice={config.originalPrice}
                savings={config.savings}
                checkoutUrl={config.checkoutUrl}
              />

              {/* Sidebar bonus images */}
              {valueProp.sidebarBonusImages &&
                valueProp.sidebarBonusImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Bonus ${i + 1}`}
                    className="w-full rounded"
                    loading="lazy"
                  />
                ))}
            </div>
          }
        >
          {/* Intro paragraphs */}
          {valueProp.introParagraphs &&
            valueProp.introParagraphs.map((text, i) => (
              <p
                key={i}
                className="text-[var(--fs-base)] text-[var(--color-text)] mb-4 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}

          {/* Feature diagram */}
          {valueProp.featureDiagram && (
            <div className="my-6">
              <img
                src={valueProp.featureDiagram}
                alt="Feature overview"
                className="w-full rounded"
                loading="lazy"
              />
            </div>
          )}

          {/* What this means section */}
          {valueProp.whatThisMeansHeading && (
            <div className="my-6">
              <h2 className="text-[var(--fs-2xl)] font-bold text-black mb-4">
                {valueProp.whatThisMeansHeading}
              </h2>
              {valueProp.whatThisMeansParagraphs?.map((text, i) => (
                <p
                  key={i}
                  className="text-[var(--fs-base)] text-[var(--color-text)] mb-4 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          )}

          {/* Case study videos */}
          {valueProp.caseStudyVideos &&
            valueProp.caseStudyVideos.map((cs, i) => (
              <div key={i} className="my-8">
                {cs.video && (
                  <VideoEmbed
                    vimeoId={cs.video.vimeoId}
                    thumbnailSrc={cs.video.thumbnailSrc}
                    title={cs.name}
                  />
                )}
                <p className="text-[var(--fs-base)] font-bold text-black mt-3">
                  {cs.name}
                </p>
                {cs.tagline && (
                  <p className="text-[var(--fs-sm)] text-[var(--color-text-light)] italic">
                    {cs.tagline}
                  </p>
                )}
              </div>
            ))}
        </StickyLayout>
      </div>
    </section>
  );
}
