"use client";

import CTAButton from "./CTAButton";

/**
 * CTABox — The pricing/purchase box.
 * 3 variants: hero (with email form), inline (with button), sticky (compact).
 * Matches GHL's CTA box: white bg, black border, shadow, green badge, navy guarantee strip.
 */
export default function CTABox({
  variant = "inline",
  price = "$47.00",
  originalPrice = "$297.00",
  savings = "$250.00",
  checkoutUrl = "#checkout",
  guaranteeBadgeImg,
  checkoutBadgeImg,
}: {
  variant?: "hero" | "inline" | "sticky";
  price?: string;
  originalPrice?: string;
  savings?: string;
  checkoutUrl?: string;
  guaranteeBadgeImg?: string;
  checkoutBadgeImg?: string;
}) {
  if (variant === "sticky") {
    return (
      <div className="bg-white border-2 border-black rounded shadow-[4px_4px_0_rgba(0,0,0,0.15)] p-4">
        <div className="text-center mb-3">
          <p className="text-[var(--fs-sm)] font-bold text-black">
            Get The Install Pack
          </p>
          <p className="text-[var(--fs-xs)] text-[var(--color-text-light)]">
            <span className="line-through">{originalPrice}</span>{" "}
            <span className="text-[var(--color-red)] font-bold">{price}</span>
          </p>
        </div>
        <CTAButton
          mainText={`Install Now For Only ${price}`}
          subText="And get instant access"
          href={checkoutUrl}
          variant="small"
        />
      </div>
    );
  }

  return (
    <div className="bg-white border-2 border-black rounded shadow-[4px_4px_0_rgba(0,0,0,0.15)]">
      {/* Green savings badge */}
      <div className="bg-[var(--color-green)] text-white text-center py-2.5 px-4 rounded-t font-bold text-[var(--fs-base)]">
        Save {savings} Today — Was{" "}
        <span className="line-through">{originalPrice}</span>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        {/* Pricing */}
        <h3 className="text-[var(--fs-3xl)] font-bold text-black mb-1">
          Only {price}
        </h3>
        <p className="text-[var(--fs-sm)] text-[var(--color-text-light)] mb-4">
          One-time payment. Instant access.
        </p>

        {/* Button */}
        <CTAButton
          mainText={`Install Now For Only ${price}`}
          subText="And get instant access"
          href={checkoutUrl}
        />

        {/* Link below button */}
        <p className="mt-3 mb-4">
          <a
            href={checkoutUrl}
            className="text-[var(--color-blue-link)] underline font-bold text-[var(--fs-sm)]"
          >
            Click Here To Get Your Install Pack
          </a>
        </p>

        {/* Checkout badge */}
        {checkoutBadgeImg && (
          <div className="flex justify-center mb-4">
            <img
              src={checkoutBadgeImg}
              alt="Guaranteed Safe Checkout"
              className="max-w-[250px]"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Navy guarantee strip */}
      <div className="bg-[var(--color-navy-dark)] text-white text-center py-3 px-4 rounded-b">
        <p className="text-[var(--fs-sm)] flex items-center justify-center gap-2">
          {guaranteeBadgeImg && (
            <img
              src={guaranteeBadgeImg}
              alt="30-Day Guarantee"
              className="w-8 h-8"
              loading="lazy"
            />
          )}
          <span>
            30-Day{" "}
            <span className="text-[var(--color-gold)] font-bold">
              Unconditional
            </span>{" "}
            Money Back Guarantee
          </span>
        </p>
      </div>
    </div>
  );
}
