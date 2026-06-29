"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import type { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [active, setActive] = useState(0);

  if (!testimonials.length) return null;

  const current = testimonials[active];
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="section-pad bg-green-tint">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Travellers Say"
          subtitle="Real stories from real adventurers who explored East Africa with us."
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          {/* Quote card */}
          <div className="bg-surface rounded-2xl p-8 md:p-12 shadow-sm text-center mb-8">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < current.rating ? "text-savanna-gold fill-savanna-gold" : "text-border"}
                />
              ))}
            </div>

            <blockquote className="text-body-text text-lg md:text-xl italic leading-relaxed mb-8">
              &ldquo;{current.body}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-tint flex items-center justify-center text-safari-green font-bold text-lg">
                {current.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-semibold text-safari-green">{current.name}</p>
                <p className="text-sm text-muted-text">{current.trip_type}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border-2 border-safari-green text-safari-green hover:bg-safari-green hover:text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === active ? "bg-savanna-gold w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border-2 border-safari-green text-safari-green hover:bg-safari-green hover:text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
