import type { ProductConfig } from "@/lib/product-config";

export default function HormoziQuote({ config }: { config: ProductConfig }) {
  const { hormoziQuote } = config;
  if (!hormoziQuote) return null;

  return (
    <section
      id="section-hormozi-quote"
      className="bg-[var(--color-navy-dark)] py-12 md:py-16"
    >
      <div className="max-w-[900px] mx-auto px-4 text-center">
        {hormoziQuote.imageSrc && (
          <div className="mb-6">
            <img
              src={hormoziQuote.imageSrc}
              alt={hormoziQuote.author}
              className="w-24 h-24 rounded-full mx-auto border-3 border-[var(--color-gold)]"
              loading="lazy"
            />
          </div>
        )}
        <blockquote className="text-[var(--fs-2xl)] md:text-[var(--fs-3xl)] text-white font-light italic leading-relaxed mb-6">
          &ldquo;{hormoziQuote.text}&rdquo;
        </blockquote>
        <p className="text-[var(--fs-lg)] text-[var(--color-gold)] font-bold">
          — {hormoziQuote.author}
        </p>
      </div>
    </section>
  );
}
