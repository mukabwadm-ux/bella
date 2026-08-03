import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/Ashnil-Mara-6.jpg"
        alt="Maasai Mara Safari"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-ink/50 via-forest-ink/30 to-forest-ink/70" />

      {/* Content */}
      <div className="relative container-xl text-center text-white z-10 py-24">
        <span className="inline-block bg-savanna-gold/20 border border-savanna-gold/40 text-savanna-gold text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Kenya&apos;s Trusted Safari Specialists Since 2015
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
          Discover the Magic of{" "}
          <span className="text-savanna-gold">East Africa</span>
        </h1>

        <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Unforgettable safaris to Maasai Mara, Amboseli, Serengeti, Zanzibar and beyond.
          Expert guides. Handpicked lodges. Memories that last a lifetime.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Link
            href="/plan-your-trip"
            className="bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-xl flex items-center justify-center gap-2"
          >
            Plan Your Safari
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/tours"
            className="border-2 border-white/80 text-white hover:bg-white hover:text-safari-green font-semibold px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2"
          >
            Explore Packages
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Star size={14} className="text-savanna-gold fill-savanna-gold" />
            <span>4.9/5 on Google Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-savanna-gold font-bold">500+</span>
            <span>Safaris Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-savanna-gold font-bold">#26</span>
            <span>Top 100 Mid-Sized Companies (KPMG)</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-6 bg-white/40 rounded-full" />
      </div>
    </section>
  );
}
