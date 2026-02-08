"use client";

import { useState, useEffect } from "react";
import type { ProductConfig } from "@/lib/product-config";
import CTAButton from "@/components/shared/CTAButton";

/**
 * StickySidebar — Fixed CTA bar that follows scroll (z-index 997).
 * Shows after scrolling past the hero section.
 * Matches GHL's floating purchase bar.
 */
export default function StickySidebar({ config }: { config: ProductConfig }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 800px (past hero)
      setVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="section-sticky-sidebar"
      className="fixed bottom-0 left-0 right-0 z-[997] bg-[var(--color-navy-dark)] border-t-2 border-[var(--color-gold)] shadow-[0_-4px_12px_rgba(0,0,0,0.3)] transition-transform duration-300"
      style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
    >
      <div className="max-w-[1170px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="hidden md:block">
          <p className="text-white text-[var(--fs-sm)] font-bold">
            {config.name}
          </p>
          <p className="text-[var(--color-gold)] text-[var(--fs-xs)]">
            <span className="line-through text-white/60">
              {config.originalPrice}
            </span>{" "}
            Only {config.price} — Save {config.savings}
          </p>
        </div>
        <CTAButton
          mainText={config.ctaMainText || `Install Now For Only ${config.price}`}
          subText={config.ctaSubText || "And get instant access"}
          href={config.checkoutUrl}
          variant="small"
          buttonBgImage={config.buttonBgImage}
          buttonIconSrc={config.buttonIconSrc}
        />
      </div>
    </div>
  );
}
