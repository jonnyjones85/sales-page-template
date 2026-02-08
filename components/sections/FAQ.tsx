"use client";

import { useState, useRef, useEffect } from "react";
import type { ProductConfig } from "@/lib/product-config";
import SectionWrapper from "@/components/layout/SectionWrapper";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open, a]);

  return (
    <div className="border-b border-[var(--color-border-light)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 cursor-pointer"
        aria-expanded={open}
      >
        <h3 className="text-[var(--fs-lg)] font-bold text-black">{q}</h3>
        <span
          className="text-[var(--fs-sm)] text-[var(--color-text-light)] flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M7 10L1.5 4h11L7 10z" />
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-200 ease-in-out"
        style={{
          maxHeight: open ? `${height}px` : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="pb-4">
          <p
            className="text-[var(--fs-base)] text-[var(--color-text)] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: a }}
          />
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ config }: { config: ProductConfig }) {
  const { faqs } = config;
  const heading = config.faqHeading || "Frequently Asked Questions";

  return (
    <SectionWrapper id="section-faq" className="bg-white py-8 md:py-12">
      <h2 className="text-[var(--fs-2xl)] md:text-[var(--fs-3xl)] font-bold text-center text-black mb-8">
        {heading}
      </h2>
      <div className="max-w-[900px] mx-auto">
        {/* 2-column layout for FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
