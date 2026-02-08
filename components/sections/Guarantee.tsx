import type { ProductConfig } from "@/lib/product-config";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SalesLetterCTA from "@/components/shared/SalesLetterCTA";

export default function Guarantee({ config }: { config: ProductConfig }) {
  const { guarantee } = config;

  return (
    <SectionWrapper id="section-guarantee" className="bg-white py-8 md:py-12">
      <div className="max-w-[800px] mx-auto text-center">
        {/* Guarantee badge */}
        {guarantee.badgeSrc && (
          <div className="mb-6">
            <img
              src={guarantee.badgeSrc}
              alt={`${config.guaranteeDays}-Day Money Back Guarantee`}
              className="w-32 h-32 mx-auto"
              loading="lazy"
            />
          </div>
        )}

        {/* Heading */}
        <h2 className="text-[var(--fs-xl)] md:text-[var(--fs-2xl)] font-bold text-black mb-6 uppercase">
          {guarantee.heading}
        </h2>

        {/* Guarantee paragraphs */}
        <div className="text-left space-y-4">
          {guarantee.paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-[var(--fs-base)] text-[var(--color-text)] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>

        {/* CTA */}
        <SalesLetterCTA
          price={config.price}
          checkoutUrl={config.checkoutUrl}
          ctaMainText={config.ctaMainText}
          ctaSubText={config.ctaSubText}
          ctaLinkText={config.ctaLinkText}
          buttonBgImage={config.buttonBgImage}
          buttonIconSrc={config.buttonIconSrc}
        />

        {/* Checkout badge */}
        {config.checkoutBadgeSrc && (
          <div className="mt-6 flex justify-center">
            <img
              src={config.checkoutBadgeSrc}
              alt="Guaranteed Safe Checkout"
              className="max-w-[250px]"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
