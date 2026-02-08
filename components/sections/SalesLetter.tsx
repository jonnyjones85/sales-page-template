"use client";

import type { ProductConfig, SalesLetterBlock } from "@/lib/product-config";
import VideoEmbed from "@/components/shared/VideoEmbed";
import SalesLetterCTA from "@/components/shared/SalesLetterCTA";
import HighlightText from "@/components/shared/HighlightText";

function RenderBlock({
  block,
  config,
}: {
  block: SalesLetterBlock;
  config: ProductConfig;
}) {
  switch (block.type) {
    case "heading": {
      const level = block.level || 2;
      const sizeClass =
        level === 1
          ? "text-[var(--fs-3xl)]"
          : level === 3
            ? "text-[var(--fs-xl)]"
            : "text-[var(--fs-2xl)]";
      const style = block.color ? { color: block.color } : undefined;

      if (level === 1)
        return (
          <h1
            className={`${sizeClass} font-bold mb-4 leading-tight`}
            style={style}
            dangerouslySetInnerHTML={{ __html: block.text }}
          />
        );
      if (level === 3)
        return (
          <h3
            className={`${sizeClass} font-bold mb-4 leading-tight`}
            style={style}
            dangerouslySetInnerHTML={{ __html: block.text }}
          />
        );
      return (
        <h2
          className={`${sizeClass} font-bold mb-4 leading-tight`}
          style={style}
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );
    }

    case "paragraph":
      return (
        <p
          className={`text-[var(--fs-base)] mb-4 leading-relaxed ${block.className || ""}`}
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );

    case "highlight":
      return (
        <p className="text-[var(--fs-base)] mb-4 leading-relaxed">
          <HighlightText variant={block.variant}>{block.text}</HighlightText>
        </p>
      );

    case "image":
      return (
        <div className={`my-6 ${block.className || ""}`}>
          <img
            src={block.src}
            alt={block.alt || ""}
            className="w-full rounded"
            loading="lazy"
          />
        </div>
      );

    case "video":
      return (
        <div className="my-6">
          <VideoEmbed
            vimeoId={block.video.vimeoId}
            thumbnailSrc={block.video.thumbnailSrc}
            title={block.video.title}
          />
        </div>
      );

    case "cta":
      return (
        <SalesLetterCTA
          price={config.price}
          checkoutUrl={config.checkoutUrl}
        />
      );

    case "case-study":
      return (
        <div className="my-8 p-6 bg-[var(--color-bg-light)] border border-[var(--color-border-light)] rounded">
          {block.caseStudy.imageSrc && (
            <img
              src={block.caseStudy.imageSrc}
              alt={block.caseStudy.name}
              className="w-20 h-20 rounded-full mb-4"
              loading="lazy"
            />
          )}
          <p className="font-bold text-[var(--fs-lg)] text-black mb-2">
            {block.caseStudy.name}
          </p>
          {block.caseStudy.tagline && (
            <p className="text-[var(--fs-sm)] italic text-[var(--color-text-light)] mb-3">
              {block.caseStudy.tagline}
            </p>
          )}
          {block.caseStudy.paragraphs?.map((p, i) => (
            <p
              key={i}
              className="text-[var(--fs-base)] mb-2"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
          {block.caseStudy.video && (
            <div className="mt-4">
              <VideoEmbed
                vimeoId={block.caseStudy.video.vimeoId}
                thumbnailSrc={block.caseStudy.video.thumbnailSrc}
                title={block.caseStudy.name}
              />
            </div>
          )}
        </div>
      );

    case "quote":
      return (
        <blockquote
          className={`my-6 pl-6 border-l-4 border-[var(--color-gold)] italic text-[var(--fs-lg)] ${block.className || ""}`}
        >
          <p dangerouslySetInnerHTML={{ __html: block.text }} />
          {block.author && (
            <footer className="mt-2 text-[var(--fs-sm)] text-[var(--color-text-light)] not-italic">
              — {block.author}
            </footer>
          )}
        </blockquote>
      );

    case "list":
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag
          className={`my-4 pl-6 space-y-2 ${block.ordered ? "list-decimal" : "list-disc"}`}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-[var(--fs-base)]"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ListTag>
      );

    case "divider":
      return <hr className="my-8 border-t border-[var(--color-border-light)]" />;

    case "html":
      return (
        <div
          className="my-4"
          dangerouslySetInnerHTML={{ __html: block.content }}
        />
      );

    default:
      return null;
  }
}

export default function SalesLetter({ config }: { config: ProductConfig }) {
  const { salesLetter } = config;

  return (
    <section id="section-sales-letter" className="bg-white py-8 md:py-12">
      <div className="max-w-[800px] mx-auto px-4">
        {salesLetter.blocks.map((block, i) => (
          <RenderBlock key={i} block={block} config={config} />
        ))}
      </div>
    </section>
  );
}
