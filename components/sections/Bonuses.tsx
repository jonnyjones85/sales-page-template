import type { ProductConfig } from "@/lib/product-config";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SalesLetterCTA from "@/components/shared/SalesLetterCTA";

export default function Bonuses({ config }: { config: ProductConfig }) {
  const { bonuses } = config;

  return (
    <SectionWrapper id="section-bonuses" className="bg-white py-8 md:py-12">
      {/* Heading */}
      <h2 className="text-[var(--fs-2xl)] md:text-[var(--fs-3xl)] font-bold text-center text-black mb-2">
        {bonuses.heading}
      </h2>
      {bonuses.value && (
        <p className="text-[var(--fs-lg)] text-center text-[var(--color-red)] font-bold mb-2">
          {bonuses.value}
        </p>
      )}
      {bonuses.subheading && (
        <p className="text-[var(--fs-base)] text-center text-[var(--color-text)] mb-8">
          {bonuses.subheading}
        </p>
      )}

      {/* Bonus grid — 2 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {bonuses.items.map((bonus) => (
          <div
            key={bonus.number}
            className="border-2 border-black rounded overflow-hidden"
          >
            {/* Bonus number header */}
            <div className="bg-[var(--color-navy-dark)] text-white py-2 px-4">
              <h3 className="text-[var(--fs-lg)] font-bold">
                Bonus #{bonus.number}
              </h3>
            </div>

            {/* Bonus content */}
            <div className="p-4">
              {bonus.imageSrc && (
                <img
                  src={bonus.imageSrc}
                  alt={bonus.title}
                  className="w-full rounded mb-4"
                  loading="lazy"
                />
              )}
              {bonus.title && (
                <h4 className="text-[var(--fs-base)] font-bold text-black mb-2">
                  {bonus.title}
                </h4>
              )}
              {bonus.description && (
                <p className="text-[var(--fs-sm)] text-[var(--color-text)]">
                  {bonus.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA after bonuses */}
      <SalesLetterCTA price={config.price} checkoutUrl={config.checkoutUrl} />
    </SectionWrapper>
  );
}
