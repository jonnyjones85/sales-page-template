import type { ProductConfig } from "@/lib/product-config";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SalesLetterCTA from "@/components/shared/SalesLetterCTA";

export default function WhatYouGet({ config }: { config: ProductConfig }) {
  const { whatYouGet } = config;

  return (
    <SectionWrapper id="section-what-you-get" className="bg-white py-8 md:py-12">
      {/* Heading */}
      <h2 className="text-[var(--fs-2xl)] md:text-[var(--fs-3xl)] font-bold text-center text-black mb-8">
        {whatYouGet.heading}
      </h2>
      {whatYouGet.subheading && (
        <p className="text-[var(--fs-base)] text-center text-[var(--color-text)] mb-8 max-w-2xl mx-auto">
          {whatYouGet.subheading}
        </p>
      )}

      {/* Feature rows — alternating image/text layout */}
      <div className="space-y-8">
        {whatYouGet.features.map((feature, i) => {
          const isReversed =
            feature.imagePosition === "right" ||
            (!feature.imagePosition && i % 2 === 1);

          return (
            <div
              key={i}
              className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-6 items-center`}
            >
              {/* Image */}
              {feature.imageSrc && (
                <div className="w-full md:w-1/2">
                  <img
                    src={feature.imageSrc}
                    alt={feature.title}
                    className="w-full rounded shadow-sm"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Text */}
              <div className={`w-full ${feature.imageSrc ? "md:w-1/2" : ""}`}>
                <h3 className="text-[var(--fs-xl)] font-bold text-black mb-2">
                  {feature.title}
                </h3>
                <p
                  className="text-[var(--fs-base)] text-[var(--color-text)] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA after features */}
      <SalesLetterCTA price={config.price} checkoutUrl={config.checkoutUrl} ctaMainText={config.ctaMainText} ctaSubText={config.ctaSubText} ctaLinkText={config.ctaLinkText} buttonBgImage={config.buttonBgImage} buttonIconSrc={config.buttonIconSrc} />
    </SectionWrapper>
  );
}
