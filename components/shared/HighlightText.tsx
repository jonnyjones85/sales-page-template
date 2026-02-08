/**
 * HighlightText — Yellow background emphasis spans.
 * Matches GHL's highlighted text styling.
 */
export default function HighlightText({
  children,
  variant = "yellow",
}: {
  children: React.ReactNode;
  variant?: "yellow" | "warm";
}) {
  const bg =
    variant === "warm"
      ? "bg-[var(--color-yellow-warm)]"
      : "bg-[var(--color-yellow-highlight)]";

  return <span className={`${bg} px-1`}>{children}</span>;
}
