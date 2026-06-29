import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { getAllDestinations, getAllTours } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore East Africa's most extraordinary destinations — Maasai Mara, Amboseli, Zanzibar, Serengeti, Mount Kenya, and beyond.",
};

export default async function DestinationsPage() {
  const [destinations, tours] = await Promise.all([
    getAllDestinations(),
    getAllTours(),
  ]);

  // Compute how many tours cover each destination
  const tourCountByDest: Record<string, number> = {};
  for (const tour of tours) {
    for (const destSlug of tour.destinations) {
      tourCountByDest[destSlug] = (tourCountByDest[destSlug] ?? 0) + 1;
    }
  }

  const featured = destinations.filter((d) => d.featured);
  const others = destinations.filter((d) => !d.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-safari-green py-20 md:py-28">
        <div className="container-xl text-center">
          <span className="inline-block text-savanna-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Where We Go
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            East Africa&apos;s Finest Destinations
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Click any destination to explore its landscapes, wildlife, and all the safari packages available for that area.
          </p>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="section-pad bg-sand">
        <div className="container-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-savanna-gold mb-8">
            Featured Destinations
          </p>

          {/* Large grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featured.map((dest, i) => {
              const count = tourCountByDest[dest.slug] ?? 0;
              return (
                <Link
                  key={dest.id}
                  href={`/destinations/${dest.slug}`}
                  className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow ${
                    i === 0 ? "md:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={dest.hero_image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "33vw"}
                    priority={i === 0}
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/80 via-forest-ink/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="flex items-center gap-1.5 text-white/70 text-xs mb-1">
                          <MapPin size={11} />
                          {dest.country}
                        </p>
                        <h2 className={`font-bold text-white leading-tight ${i === 0 ? "text-3xl" : "text-xl"}`}>
                          {dest.name}
                        </h2>
                        <p className="text-white/75 text-sm mt-1 line-clamp-1">
                          {dest.short_description}
                        </p>
                      </div>
                      {count > 0 && (
                        <div className="flex-shrink-0 ml-4">
                          <span className="flex items-center gap-1.5 bg-savanna-gold text-white text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            {count} Package{count !== 1 ? "s" : ""}
                            <ArrowRight size={12} />
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Other destinations */}
          {others.length > 0 && (
            <>
              <p className="text-xs font-semibold uppercase tracking-widest text-savanna-gold mb-6">
                More Destinations
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {others.map((dest) => (
                  <Link
                    key={dest.id}
                    href={`/destinations/${dest.slug}`}
                    className="group flex gap-4 bg-surface rounded-xl p-4 hover:shadow-md transition-shadow border border-border"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={dest.hero_image}
                        alt={dest.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="flex items-center gap-1 text-xs text-muted-text mb-0.5">
                        <MapPin size={10} /> {dest.country}
                      </p>
                      <h3 className="font-bold text-safari-green group-hover:text-savanna-gold transition-colors text-sm">
                        {dest.name}
                      </h3>
                      <p className="text-xs text-muted-text mt-0.5 line-clamp-2 leading-relaxed">
                        {dest.short_description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
