import type { ProductConfig } from "@/lib/product-config";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function AlsoGetting({ config }: { config: ProductConfig }) {
  const { alsoGetting } = config;
  if (!alsoGetting) return null;

  return (
    <SectionWrapper
      id="section-also-getting"
      className="bg-white py-8 md:py-12"
    >
      <h2 className="text-[var(--fs-2xl)] md:text-[var(--fs-3xl)] font-bold text-center text-black mb-8">
        {alsoGetting.heading}
      </h2>
      <div className="space-y-6 max-w-[900px] mx-auto">
        {alsoGetting.items.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            {item.imageSrc && (
              <img
                src={item.imageSrc}
                alt=""
                className="w-16 h-16 rounded flex-shrink-0"
                loading="lazy"
              />
            )}
            <p
              className="text-[var(--fs-base)] text-[var(--color-text)] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
