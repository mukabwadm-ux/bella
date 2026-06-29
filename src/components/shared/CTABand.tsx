import Link from "next/link";

interface CTABandProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  backgroundImage?: string;
}

export default function CTABand({
  title = "Creating Your Dream Safari, The Way You Want It",
  subtitle = "Tell us your dream itinerary and our experts will craft a personalised safari experience.",
  primaryLabel = "Plan Your Safari",
  primaryHref = "/plan-your-trip",
  secondaryLabel = "Browse Tours",
  secondaryHref = "/tours",
  backgroundImage = "/images/GRVL-9.jpg",
}: CTABandProps) {
  return (
    <section
      className="relative py-24 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-forest-ink/70" />

      <div className="relative container-xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={primaryHref}
            className="bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="border-2 border-white text-white hover:bg-white hover:text-safari-green font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
