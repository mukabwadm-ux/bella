"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Utensils, BedDouble } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ItineraryDay } from "@/types";

export default function ItineraryAccordion({ days }: { days: ItineraryDay[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {days.map((day, i) => (
        <div
          key={i}
          className="border border-border rounded-xl overflow-hidden bg-surface"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left gap-3"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-safari-green text-white text-sm font-bold flex items-center justify-center">
                {day.day}
              </span>
              <span className="font-semibold text-safari-green text-sm md:text-base">
                {day.title}
              </span>
            </div>
            <ChevronDown
              size={18}
              className={cn(
                "text-muted-text flex-shrink-0 transition-transform duration-200",
                open === i && "rotate-180"
              )}
            />
          </button>

          {open === i && (
            <div className="px-5 pb-5 border-t border-border">
              <p className="text-sm text-body-text leading-relaxed mt-4 mb-4">
                {day.description}
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-muted-text">
                {day.meals && (
                  <span className="flex items-center gap-1.5 bg-gold-tint px-3 py-1.5 rounded-full">
                    <Utensils size={11} className="text-savanna-gold" />
                    {day.meals}
                  </span>
                )}
                {day.accommodation && (
                  <span className="flex items-center gap-1.5 bg-green-tint px-3 py-1.5 rounded-full">
                    <BedDouble size={11} className="text-safari-green" />
                    {day.accommodation}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
