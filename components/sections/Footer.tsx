import type { ProductConfig } from "@/lib/product-config";
import SalesLetterCTA from "@/components/shared/SalesLetterCTA";

export default function Footer({ config }: { config: ProductConfig }) {
  const { footer } = config;

  return (
    <section id="section-footer" className="bg-white py-8 border-t border-[var(--color-border-light)]">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Top: copyright + CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <p className="text-[var(--fs-sm)] text-[var(--color-text)]">
            {footer.copyrightText}
          </p>
          <SalesLetterCTA
            price={config.price}
            checkoutUrl={config.checkoutUrl}
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {footer.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-[var(--fs-sm)] text-[var(--color-text)] hover:text-[var(--color-blue-link)] transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-[900px] mx-auto">
          <p className="text-[var(--fs-xs)] text-[var(--color-text-light)] leading-relaxed text-center">
            {footer.disclaimer}
          </p>
        </div>

        {/* Badge */}
        {footer.badgeSrc && (
          <div className="mt-6 flex justify-center">
            <img
              src={footer.badgeSrc}
              alt="7-Figure Systems"
              className="max-w-[200px]"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
}
