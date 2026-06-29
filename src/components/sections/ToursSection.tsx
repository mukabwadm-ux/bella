import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import TourCard from "@/components/shared/TourCard";
import type { Tour } from "@/types";

interface ToursSectionProps {
  tours: Tour[];
}

export default function ToursSection({ tours }: ToursSectionProps) {
  return (
    <section className="section-pad bg-sand">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Safari Packages"
            title="Discover Our Best Safari Packages"
            subtitle="Hand-crafted itineraries for every kind of traveller — from honeymoon couples to family adventurers."
            className="mb-0"
          />
          <Link
            href="/tours"
            className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-savanna-gold hover:text-sunlit-gold transition-colors"
          >
            View All Tours
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
