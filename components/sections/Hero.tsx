"use client";

import type { ProductConfig } from "@/lib/product-config";
import VideoEmbed from "@/components/shared/VideoEmbed";
import CTABox from "@/components/shared/CTABox";

export default function Hero({ config }: { config: ProductConfig }) {
  const { hero } = config;

  return (
    <section
      id="section-hero"
      className="relative bg-cover bg-center"
      style={
        hero.bannerSrc
          ? {
              backgroundImage: `url(${hero.bannerSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Dark overlay */}
      {hero.bannerSrc && (
        <div className="absolute inset-0 bg-[var(--color-navy-dark)] opacity-80" />
      )}

      <div className="relative max-w-[1170px] mx-auto px-4 py-8 md:py-12">
        {/* Main headline */}
        <div className="text-center mb-8">
          <h1 className="text-[var(--fs-3xl)] md:text-[var(--fs-4xl)] font-bold text-white leading-tight">
            {hero.headline}
          </h1>
          {hero.subheadline && (
            <p className="text-[var(--fs-lg)] text-white/90 mt-4 max-w-3xl mx-auto">
              {hero.subheadline}
            </p>
          )}
        </div>

        {/* 2-col: Video left (62%) + CTA box right (38%) */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Video column */}
          <div className="w-full lg:w-[62%]">
            {hero.video && (
              <VideoEmbed
                vimeoId={hero.video.vimeoId}
                thumbnailSrc={hero.video.thumbnailSrc}
                title={hero.video.title || config.name}
              />
            )}

            {/* Secondary headline below video */}
            {hero.description && hero.description.length > 0 && (
              <div className="mt-6 text-center">
                {hero.description.map((text, i) => (
                  <p
                    key={i}
                    className="text-[var(--fs-lg)] text-white/90 mb-2"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* CTA box column */}
          <div className="w-full lg:w-[38%]">
            <CTABox
              variant="hero"
              price={config.price}
              originalPrice={config.originalPrice}
              savings={config.savings}
              checkoutUrl={config.checkoutUrl}
              checkoutBadgeImg={config.checkoutBadgeSrc}
              guaranteeBadgeImg={hero.guaranteeBadgeImg}
            />
          </div>
        </div>
      </div>

      {/* Negative margin overlap into next section */}
      <div className="h-8 md:h-12 bg-gradient-to-b from-transparent to-white relative z-10" />
    </section>
  );
}
