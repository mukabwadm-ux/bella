import { supabaseAdmin } from "@/lib/supabase-server";
import Link from "next/link";
import { Plus, Pencil, Clock, Users, Star } from "lucide-react";

export const dynamic = "force-dynamic";

function formatKES(n: number) {
  return "KES " + n.toLocaleString("en-KE");
}

export default async function AdminToursPage() {
  const { data: tours } = await supabaseAdmin
    .from("tours")
    .select("id, slug, title, category, duration, group_size, price_from_kes, featured, best_seller, hero_image")
    .order("price_from_kes");

  const rows = tours ?? [];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tour Packages</h1>
          <p className="text-gray-500 text-sm mt-1">{rows.length} packages</p>
        </div>
        <Link
          href="/admin/tours/new"
          className="flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#002800] text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
        >
          <Plus size={16} /> New Package
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
              <div key={tour.id} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
                {/* Thumbnail */}
                <div
                  className="w-14 h-14 rounded-xl bg-gray-100 flex-shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${tour.hero_image})` }}
                />
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-sm text-gray-900 truncate">{tour.title}</p>
                    {tour.best_seller && (
                      <span className="flex items-center gap-0.5 text-xs bg-[#FBEFD9] text-[#D98200] px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                        <Star size={10} /> Best Seller
                      </span>
                    )}
                    {tour.featured && !tour.best_seller && (
                      <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-0.5 rounded-full">{tour.category}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {tour.duration} days</span>
                    <span className="flex items-center gap-1"><Users size={10} /> {tour.group_size}</span>
                    <span className="font-semibold text-[#0B3D2E]">{formatKES(tour.price_from_kes)}</span>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={`/tours/${tour.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-gray-900 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Preview ↗
                  </a>
                  <Link
                    href={`/admin/tours/${tour.id}/edit`}
                    className="flex items-center gap-1.5 text-xs bg-[#0B3D2E] hover:bg-[#002800] text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
                  >
                    <Pencil size={12} /> Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
