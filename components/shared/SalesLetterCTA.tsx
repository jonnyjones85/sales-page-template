import CTAButton from "./CTAButton";

/**
 * SalesLetterCTA — Inline CTA that appears multiple times in the sales letter.
 * Lighter than full CTABox, just button + link.
 */
export default function SalesLetterCTA({
  price = "$47.00",
  checkoutUrl = "#checkout",
}: {
  price?: string;
  checkoutUrl?: string;
}) {
  return (
    <div className="my-8 text-center">
      <CTAButton
        mainText={`Install Now For Only ${price}`}
        subText="And get instant access"
        href={checkoutUrl}
      />
      <p className="mt-3">
        <a
          href={checkoutUrl}
          className="text-[var(--color-blue-link)] underline font-bold text-[var(--fs-sm)]"
        >
          Click Here To Get Your Install Pack
        </a>
      </p>
    </div>
  );
}
