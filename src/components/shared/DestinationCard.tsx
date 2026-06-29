import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Destination } from "@/types";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative rounded-2xl overflow-hidden aspect-[4/5] block shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <Image
        src={destination.hero_image}
        alt={destination.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/80 via-forest-ink/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-semibold text-lg leading-tight mb-1">
          {destination.name}
        </h3>
        <p className="flex items-center gap-1 text-white/80 text-xs">
          <MapPin size={11} />
          {destination.country}
        </p>
      </div>
    </Link>
  );
}
