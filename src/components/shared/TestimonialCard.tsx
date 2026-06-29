import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-surface rounded-2xl p-6 shadow-sm flex flex-col h-full">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < testimonial.rating ? "text-savanna-gold fill-savanna-gold" : "text-border"}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-muted-text leading-relaxed flex-1 mb-5 italic">
        &ldquo;{testimonial.body}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-green-tint flex items-center justify-center text-safari-green font-semibold text-sm flex-shrink-0">
          {testimonial.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-sm font-semibold text-safari-green">{testimonial.name}</p>
          <p className="text-xs text-muted-text">{testimonial.trip_type}</p>
        </div>
      </div>
    </div>
  );
}
