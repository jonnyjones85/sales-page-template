/**
 * StickyLayout — 2/3 content + 1/3 sticky sidebar column.
 * Matches GHL's value-prop section with sticky CTA sidebar.
 */
export default function StickyLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-0 w-full">
      <div className="w-full lg:w-2/3 px-2.5">{children}</div>
      <div className="w-full lg:w-1/3 px-2.5">
        <div className="lg:sticky lg:top-4 lg:max-h-screen lg:overflow-y-auto">
          {sidebar}
        </div>
      </div>
    </div>
  );
}
