interface StatItem {
  number: string;
  label: string;
}

const stats: StatItem[] = [
  { number: "6", label: "Destinations" },
  { number: "500+", label: "Happy Travellers" },
  { number: "10+", label: "Years Experience" },
  { number: "4.9★", label: "Google Rating" },
];

interface ParallaxBannerProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function ParallaxBanner({
  title = "One Destination, One Safari Adventure",
  subtitle = "From the Mara to Zanzibar — immerse yourself in the wild heart of East Africa.",
  backgroundImage = "/images/Enkorok-3.jpg",
}: ParallaxBannerProps) {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-forest-ink/65" />

      <div className="relative container-xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 max-w-2xl mx-auto">
          {title}
        </h2>
        <p className="text-white/75 text-base md:text-lg mb-12 max-w-xl mx-auto">
          {subtitle}
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map(({ number, label }) => (
            <div key={label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-savanna-gold mb-1">
                {number}
              </p>
              <p className="text-sm text-white/75 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
