/**
 * PageWrapper — Fixed navy background + white bordered content container.
 * Matches GHL's .bg-fixed + .hl_main_popup structure.
 */
export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-navy-page">
      <div className="page-container">{children}</div>
    </div>
  );
}
