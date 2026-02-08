/**
 * SectionWrapper — Consistent inner max-width wrapper for sections.
 * Matches GHL's .inner max-width pattern.
 */
export default function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="max-w-[1170px] mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}
