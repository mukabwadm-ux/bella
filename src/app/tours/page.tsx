import type { Metadata } from "next";
import TourCard from "@/components/shared/TourCard";
import { getAllTours } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Safari Packages",
  description:
    "Browse all Bella Safaris tour packages — from 3-day Maasai Mara getaways to 8-day Serengeti circuits. Expert-guided, fully inclusive.",
};

export default async function ToursPage() {
  const tours = await getAllTours();

  return (
    <>
      {/* Hero */}
      <section className="bg-safari-green py-20 md:py-28">
        <div className="container-xl text-center">
          <span className="inline-block text-savanna-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Our Packages
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Safari Packages
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Hand-crafted itineraries for every kind of traveller — wildlife, beach, honeymoon, and adventure. All fully inclusive with expert guides.
          </p>
        </div>
      </section>

      {/* Tours grid */}
      <section className="section-pad bg-sand">
        <div className="container-xl">
          <p className="text-sm text-muted-text mb-8">
            Showing <span className="font-semibold text-safari-green">{tours.length}</span> packages
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
