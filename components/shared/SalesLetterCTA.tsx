import CTAButton from "./CTAButton";

/**
 * SalesLetterCTA — Inline CTA that appears multiple times in the sales letter.
 * Lighter than full CTABox, just button + link.
 */
export default function SalesLetterCTA({
  price = "$47.00",
  checkoutUrl = "#checkout",
  ctaMainText,
  ctaSubText,
  ctaLinkText = "Click Here To Get Your Install Pack",
  buttonBgImage,
  buttonIconSrc,
}: {
  price?: string;
  checkoutUrl?: string;
  ctaMainText?: string;
  ctaSubText?: string;
  ctaLinkText?: string;
  buttonBgImage?: string;
  buttonIconSrc?: string;
}) {
  const mainText = ctaMainText || `Install Now For Only ${price}`;
  const subText = ctaSubText || "And get instant access";

  return (
    <div className="my-8 text-center">
      <CTAButton
        mainText={mainText}
        subText={subText}
        href={checkoutUrl}
        buttonBgImage={buttonBgImage}
        buttonIconSrc={buttonIconSrc}
      />
      <p className="mt-3">
        <a
          href={checkoutUrl}
          className="text-[var(--color-blue-link)] underline font-bold text-[var(--fs-sm)]"
        >
          {ctaLinkText}
        </a>
      </p>
    </div>
  );
}
