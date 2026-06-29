import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import DestinationCard from "@/components/shared/DestinationCard";
import type { Destination } from "@/types";

interface DestinationsSectionProps {
  destinations: Destination[];
}

export default function DestinationsSection({ destinations }: DestinationsSectionProps) {
  return (
    <section className="section-pad bg-green-tint">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Where We Go"
            title="Explore East Africa's Timeless Destinations"
            subtitle="From the thundering wildebeest migration to turquoise island shores — every destination tells a story."
            className="mb-0"
          />
          <Link
            href="/destinations"
            className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-savanna-gold hover:text-sunlit-gold transition-colors"
          >
            Browse All Destinations
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {destinations.slice(0, 4).map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>
    </section>
  );
}
