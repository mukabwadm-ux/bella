"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types";

export default function TourFAQ({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-border rounded-xl bg-surface overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-safari-green text-sm leading-snug">
              {faq.question}
            </span>
            <ChevronDown
              size={17}
              className={cn(
                "text-muted-text flex-shrink-0 transition-transform duration-200",
                open === i && "rotate-180"
              )}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-5 border-t border-border">
              <p className="text-sm text-body-text leading-relaxed mt-4">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
