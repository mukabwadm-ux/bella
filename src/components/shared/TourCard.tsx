import Link from "next/link";
import Image from "next/image";
import { Clock, Users, Star } from "lucide-react";
import { formatKES } from "@/lib/utils";
import type { Tour } from "@/types";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={tour.hero_image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {tour.best_seller && (
            <span className="bg-savanna-gold text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
              <Star size={10} fill="white" />
              Best Seller
            </span>
          )}
          <span className="bg-safari-green text-white text-xs font-medium px-2.5 py-1 rounded-full capitalize">
            {tour.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-safari-green text-base leading-snug mb-2 group-hover:text-savanna-gold transition-colors">
          {tour.title}
        </h3>
        <p className="text-sm text-muted-text line-clamp-2 mb-4 flex-1">
          {tour.summary}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-xs text-muted-text mb-4">
          <span className="flex items-center gap-1">
            <Clock size={13} className="text-savanna-gold" />
            {tour.duration} {tour.duration === 1 ? "day" : "days"}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} className="text-savanna-gold" />
            {tour.group_size}
          </span>
          <span className="capitalize">{tour.difficulty}</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-text">From</p>
            <p className="text-lg font-bold text-safari-green">
              {formatKES(tour.price_from_kes)}
            </p>
          </div>
          <span className="bg-savanna-gold hover:bg-sunlit-gold text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}
