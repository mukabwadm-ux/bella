import { ArrowRight } from "lucide-react";

const TA_URL =
  "https://www.tripadvisor.co.uk/Attraction_Review-g294207-d18190394-Reviews-Bella_Safaris_Limited-Nairobi.html";

function Bubble({ filled = true }: { filled?: boolean }) {
  return (
    <span
      className={`inline-block w-5 h-5 rounded-full border-2 ${
        filled
          ? "bg-[#34E0A1] border-[#34E0A1]"
          : "bg-transparent border-[#34E0A1]"
      }`}
    />
  );
}

function TripAdvisorOwlIcon() {
  return (
    <svg
      viewBox="0 0 50 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-8"
      aria-hidden="true"
    >
      {/* Left eye */}
      <circle cx="13" cy="16" r="12" fill="#34E0A1" />
      <circle cx="13" cy="16" r="6" fill="white" />
      <circle cx="13" cy="16" r="3.5" fill="#1A1A1A" />
      <circle cx="11.5" cy="14.5" r="1" fill="white" />
      {/* Right eye */}
      <circle cx="37" cy="16" r="12" fill="#FF0000" />
      <circle cx="37" cy="16" r="6" fill="white" />
      <circle cx="37" cy="16" r="3.5" fill="#1A1A1A" />
      <circle cx="35.5" cy="14.5" r="1" fill="white" />
      {/* Beak */}
      <polygon points="25,18 22,23 28,23" fill="#FF6600" />
    </svg>
  );
}

export default function TripAdvisorSection() {
  return (
    <section className="bg-forest-ink py-14 md:py-16">
      <div className="container-xl">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left md:justify-between md:gap-12">

          {/* Branding */}
          <div className="flex flex-col items-center md:items-start gap-3 flex-shrink-0">
            <div className="flex items-center gap-3">
              <TripAdvisorOwlIcon />
              <span className="text-white font-bold text-2xl tracking-tight leading-none">
                tripadvisor
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Bubble key={i} filled />
              ))}
              <span className="text-white/60 text-xs ml-1.5">5 of 5 bubbles</span>
            </div>
            <span className="inline-block bg-[#34E0A1]/15 text-[#34E0A1] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-[#34E0A1]/30">
              Travellers&apos; Choice
            </span>
          </div>

          {/* Copy */}
          <div className="flex-1">
            <p className="text-savanna-gold text-xs font-semibold uppercase tracking-widest mb-2">
              Verified by Travellers
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug mb-3">
              Rated Excellent on TripAdvisor
            </h2>
            <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-lg">
              Our guests speak for us. Hundreds of travellers have shared their Bella Safaris
              experience on TripAdvisor — read their genuine, unfiltered reviews.
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <a
              href={TA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm whitespace-nowrap"
            >
              Read Our Reviews <ArrowRight size={15} />
            </a>
            <p className="text-white/40 text-xs mt-3 text-center">
              Opens TripAdvisor
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
