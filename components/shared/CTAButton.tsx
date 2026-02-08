"use client";

/**
 * CTAButton — Orange 75px tall button with download icon + rocking animation.
 * Matches GHL's .download_big_btn_ghl styling exactly.
 */
export default function CTAButton({
  mainText = "Install Now For Only $47.00",
  subText = "And get instant access",
  href = "#checkout",
  variant = "large",
}: {
  mainText?: string;
  subText?: string;
  href?: string;
  variant?: "large" | "small";
}) {
  const isSmall = variant === "small";

  return (
    <div className="text-center">
      <a
        href={href}
        className={`cta-btn ${isSmall ? "cta-btn-sm" : ""}`}
        aria-label={`${mainText} ${subText}`}
      >
        <span className="main-heading-button">{mainText}</span>
        <span className="sub-text">{subText}</span>
      </a>
    </div>
  );
}
