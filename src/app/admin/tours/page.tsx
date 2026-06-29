import { supabaseAdmin } from "@/lib/supabase-server";
import Link from "next/link";
import { Plus, Pencil, Clock, Users, Star, ExternalLink, CalendarDays } from "lucide-react";

function formatDate(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export const dynamic = "force-dynamic";

function formatKES(n: number) {
  return "$" + n.toLocaleString("en-US");
}

export default async function AdminToursPage() {
  const { data: tours } = await supabaseAdmin
    .from("tours")
    .select("id, slug, title, category, duration, group_size, price_from_kes, featured, best_seller, hero_image, created_at")
    .order("created_at", { ascending: false });

  const rows = tours ?? [];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Tour Packages</h1>
          <p className="text-gray-500 text-sm mt-0.5">{rows.length} packages</p>
        </div>
        <Link
          href="/admin/tours/new"
          className="flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#002800] text-white font-semibold text-sm px-3 sm:px-4 py-2.5 rounded-xl transition-colors flex-shrink-0"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">New Package</span>
          <span className="sm:hidden">New</span>
        </Link>
      </div>

      {rows.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
          <p className="text-gray-400 mb-4">No tour packages yet.</p>
          <Link href="/admin/tours/new" className="text-sm text-[#0B3D2E] font-semibold hover:underline">
            Create your first package →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-50">
            {rows.map((tour) => (
              <div key={tour.id} className="flex items-start gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors">
                {/* Thumbnail */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-100 flex-shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${tour.hero_image})` }}
                />
                {/* Info + actions */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    {/* Title + badges */}
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm text-gray-900 leading-snug mb-1 pr-1">{tour.title}</p>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {tour.best_seller && (
                          <span className="flex items-center gap-0.5 text-xs bg-[#FBEFD9] text-[#D98200] px-2 py-0.5 rounded-full font-medium">
                            <Star size={9} /> Best Seller
                          </span>
                        )}
                        {tour.featured && !tour.best_seller && (
                          <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Actions */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <a
                        href={`/tours/${tour.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Preview"
                        className="hidden sm:flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 border border-gray-200 px-2.5 py-1.5 rounded-lg transition-colors"
                      >
                        <ExternalLink size={11} />
                        Preview
                      </a>
                      <a
                        href={`/tours/${tour.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Preview"
                        className="sm:hidden flex items-center justify-center w-7 h-7 text-gray-500 hover:text-gray-900 border border-gray-200 rounded-lg transition-colors"
                      >
                        <ExternalLink size={13} />
                      </a>
                      <Link
                        href={`/admin/tours/${tour.id}/edit`}
                        className="flex items-center gap-1.5 text-xs bg-[#0B3D2E] hover:bg-[#002800] text-white px-2.5 sm:px-3 py-1.5 rounded-lg font-medium transition-colors"
                      >
                        <Pencil size={12} />
                        <span className="hidden sm:inline">Edit</span>
                      </Link>
                    </div>
                  </div>
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-0.5 rounded-full">{tour.category}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {tour.duration}d</span>
                    <span className="flex items-center gap-1"><Users size={10} /> {tour.group_size}</span>
                    <span className="font-semibold text-[#0B3D2E]">
                      {tour.price_from_kes > 0 ? formatKES(tour.price_from_kes) : "Get Quote"}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <CalendarDays size={10} />
                      {formatDate(tour.created_at)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
