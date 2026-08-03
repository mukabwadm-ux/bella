import { ArrowRight } from "lucide-react";

const SB_URL = "https://www.safaribookings.com/reviews/p4193";

export default function SafariBookingsSection() {
  return (
    <section className="bg-forest-ink py-14 md:py-16">
      <div className="container-xl">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left md:justify-between md:gap-12">

          {/* Branding */}
          <div className="flex flex-col items-center md:items-start gap-3 flex-shrink-0">
            <a href={SB_URL} target="_blank" rel="nofollow noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://s3.amazonaws.com/z_437er23a/images/p4193-2.png"
                alt="Safari Bookings reviews badge for Bella Safaris"
                className="h-20 w-auto"
              />
            </a>
            <span className="inline-block bg-[#F5A623]/15 text-[#F5A623] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-[#F5A623]/30">
              Verified Operator
            </span>
          </div>

          {/* Copy */}
          <div className="flex-1">
            <p className="text-savanna-gold text-xs font-semibold uppercase tracking-widest mb-2">
              Verified by Travellers
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug mb-3">
              Rated Highly on Safari Bookings
            </h2>
            <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-lg">
              Safari Bookings independently verifies every review. Travellers from around the world
              have shared their Bella Safaris experiences — read their honest, unfiltered feedback.
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <a
              href={SB_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm whitespace-nowrap"
            >
              Read Our Reviews <ArrowRight size={15} />
            </a>
            <p className="text-white/40 text-xs mt-3 text-center">
              Opens Safari Bookings
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
