import type { ProductConfig } from "@/lib/product-config";

export default function TopBar({ config }: { config: ProductConfig }) {
  const { topBar } = config;

  return (
    <section id="section-top-bar" className="bg-[var(--color-navy-dark)] py-2">
      <div className="max-w-[1170px] mx-auto px-4 flex items-center justify-between">
        {/* Help text */}
        <p className="text-white text-[var(--fs-sm)]">
          <a
            href={`mailto:${topBar.helpEmail}`}
            className="text-white hover:text-[var(--color-gold)] transition"
          >
            {topBar.helpText || `Need Help? Click HERE to Contact Us`}
          </a>
        </p>

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={topBar.logoSrc}
            alt={topBar.logoAlt || config.name}
            className="h-8 md:h-10"
          />
        </div>

        {/* Optional button */}
        {topBar.buttonText && topBar.buttonHref && (
          <a
            href={topBar.buttonHref}
            className="cta-btn cta-btn-sm"
          >
            <span className="main-heading-button text-[var(--fs-sm)]">
              {topBar.buttonText}
            </span>
          </a>
        )}
      </div>
    </section>
  );
}
