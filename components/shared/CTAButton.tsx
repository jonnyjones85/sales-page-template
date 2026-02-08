"use client";

/**
 * CTAButton — Orange 75px tall button with optional icon + rocking animation.
 * Background image and icon are config-driven via props.
 * Falls back to orange gradient if no background image provided.
 */
export default function CTAButton({
  mainText = "Install Now For Only $47.00",
  subText = "And get instant access",
  href = "#checkout",
  variant = "large",
  buttonBgImage,
  buttonIconSrc,
}: {
  mainText?: string;
  subText?: string;
  href?: string;
  variant?: "large" | "small";
  buttonBgImage?: string;
  buttonIconSrc?: string;
}) {
  const isSmall = variant === "small";

  const bgStyle = buttonBgImage
    ? { background: `url("${buttonBgImage}") center center no-repeat`, backgroundSize: "cover" }
    : {};

  return (
    <div className="text-center">
      <a
        href={href}
        className={`cta-btn ${isSmall ? "cta-btn-sm" : ""}`}
        style={bgStyle}
        aria-label={`${mainText} ${subText}`}
      >
        {buttonIconSrc && (
          <img
            src={buttonIconSrc}
            alt=""
            className={`cta-btn-icon absolute ${isSmall ? "left-[20px]" : "left-[95px]"} top-[15px]`}
            aria-hidden="true"
          />
        )}
        <span className="main-heading-button">{mainText}</span>
        <span className="sub-text">{subText}</span>
      </a>
    </div>
  );
}
