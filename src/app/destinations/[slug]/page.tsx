import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Sun, Calendar, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { getAllDestinations, getDestinationBySlug, getToursByDestination } from "@/lib/supabase";
import TourCard from "@/components/shared/TourCard";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const dest = await getDestinationBySlug(params.slug);
  if (!dest) return { title: "Destination Not Found" };
  return {
    title: `${dest.name}, ${dest.country}`,
    description: dest.short_description,
  };
}

export async function generateStaticParams() {
  const destinations = await getAllDestinations();
  return destinations.map((d) => ({ slug: d.slug }));
}

export default async function DestinationPage({ params }: { params: { slug: string } }) {
  const [dest, matchingTours, allDests] = await Promise.all([
    getDestinationBySlug(params.slug),
    getToursByDestination(params.slug),
    getAllDestinations(),
  ]);
  if (!dest) notFound();

  const otherDests = allDests
    .filter((d) => d.slug !== dest.slug && d.featured)
    .slice(0, 4);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <Image
          src={dest.hero_image}
          alt={dest.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/90 via-forest-ink/40 to-transparent" />

        <div className="relative container-xl pb-10 text-white w-full">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-medium mb-4 transition-colors"
          >
            <ArrowLeft size={13} />
            All Destinations
          </Link>
          <p className="flex items-center gap-1.5 text-white/70 text-sm mb-2">
            <MapPin size={14} className="text-savanna-gold" />
            {dest.region}, {dest.country}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
            {dest.name}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">{dest.short_description}</p>
        </div>
      </section>

      {/* ── QUICK INFO STRIP ──────────────────────────── */}
      <div className="bg-safari-green">
        <div className="container-xl py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white text-sm">
          <div className="flex items-center gap-3">
            <Calendar size={16} className="text-savanna-gold flex-shrink-0" />
            <div>
              <p className="text-white/60 text-xs">Best Time to Visit</p>
              <p className="font-semibold">{dest.best_time || "Year-round"}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Sun size={16} className="text-savanna-gold flex-shrink-0" />
            <div>
              <p className="text-white/60 text-xs">Climate</p>
              <p className="font-semibold">{dest.climate || "Tropical"}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-savanna-gold flex-shrink-0" />
            <div>
              <p className="text-white/60 text-xs">Available Packages</p>
              <p className="font-semibold">
                {matchingTours.length > 0
                  ? `${matchingTours.length} Safari Package${matchingTours.length !== 1 ? "s" : ""}`
                  : "Coming Soon"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── BODY ──────────────────────────────────────── */}
      <section className="section-pad bg-sand">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* MAIN COLUMN */}
            <div className="lg:col-span-2 space-y-12">

              {/* About */}
              {dest.about && (
                <div>
                  <h2 className="text-2xl font-bold text-safari-green mb-4">
                    About {dest.name}
                  </h2>
                  <p className="text-body-text leading-relaxed text-base">{dest.about}</p>
                </div>
              )}

              {/* Highlights */}
              {dest.highlights?.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-safari-green mb-5">
                    What Makes {dest.name} Special
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {dest.highlights.map((h: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 bg-surface rounded-xl p-4">
                        <CheckCircle size={16} className="text-safari-green flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-body-text leading-relaxed">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching tours */}
              <div>
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-safari-green">
                      {matchingTours.length > 0
                        ? `Safari Packages for ${dest.name}`
                        : `Packages Coming Soon`}
                    </h2>
                    {matchingTours.length > 0 && (
                      <p className="text-sm text-muted-text mt-1">
                        {matchingTours.length} package{matchingTours.length !== 1 ? "s" : ""} include{matchingTours.length === 1 ? "s" : ""} {dest.name}
                      </p>
                    )}
                  </div>
                  <Link
                    href="/tours"
                    className="text-sm font-semibold text-savanna-gold hover:text-sunlit-gold flex items-center gap-1 transition-colors flex-shrink-0"
                  >
                    All Tours <ArrowRight size={14} />
                  </Link>
                </div>

                {matchingTours.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {matchingTours.map((tour) => (
                      <TourCard key={tour.id} tour={tour} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-surface rounded-2xl p-8 text-center border border-border">
                    <p className="text-muted-text text-sm mb-4">
                      We are currently building packages for {dest.name}. In the meantime, get in touch — we can arrange a custom itinerary for you.
                    </p>
                    <Link
                      href="/plan-your-trip"
                      className="inline-flex items-center gap-2 bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
                    >
                      Plan a Custom Trip
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">

              {/* CTA card */}
              <div className="bg-safari-green rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Plan a Trip to {dest.name}</h3>
                <p className="text-white/75 text-sm mb-5 leading-relaxed">
                  Talk to one of our specialists and get a personalised itinerary built around your dates and style.
                </p>
                <Link
                  href="/plan-your-trip"
                  className="block bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold text-sm py-2.5 px-5 rounded-full text-center transition-colors mb-3"
                >
                  Plan Your Safari
                </Link>
                <a
                  href="https://wa.me/254719888008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-white/30 hover:bg-white/10 text-white font-medium text-sm py-2.5 px-5 rounded-full text-center transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Other destinations */}
              {otherDests.length > 0 && (
                <div className="bg-surface rounded-2xl p-5 border border-border">
                  <h3 className="text-sm font-bold text-safari-green uppercase tracking-wider mb-4">
                    Other Destinations
                  </h3>
                  <div className="space-y-3">
                    {otherDests.map((d) => (
                      <Link
                        key={d.slug}
                        href={`/destinations/${d.slug}`}
                        className="group flex items-center gap-3 p-2 rounded-lg hover:bg-sand transition-colors"
                      >
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={d.hero_image}
                            alt={d.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-safari-green group-hover:text-savanna-gold transition-colors">
                            {d.name}
                          </p>
                          <p className="text-xs text-muted-text">{d.country}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/destinations"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-savanna-gold hover:text-sunlit-gold mt-4 transition-colors"
                  >
                    View All Destinations <ArrowRight size={11} />
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
