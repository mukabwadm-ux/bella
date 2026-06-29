import { supabaseAdmin } from "@/lib/supabase-server";
import Link from "next/link";
import { MapPin, Plus, Pencil } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDestinationsPage() {
  const { data: destinations } = await supabaseAdmin
    .from("destinations")
    .select("id, slug, name, country, region, featured, best_time, hero_image")
    .order("name");

  const { data: tours } = await supabaseAdmin
    .from("tours")
    .select("destinations");

  const tourCountByDest: Record<string, number> = {};
  (tours ?? []).forEach((t: { destinations: string[] }) => {
    (t.destinations ?? []).forEach((d: string) => {
      tourCountByDest[d] = (tourCountByDest[d] ?? 0) + 1;
    });
  });

  const rows = destinations ?? [];

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Destinations</h1>
          <p className="text-gray-500 text-sm mt-1">{rows.length} destinations</p>
        </div>
        <Link
          href="/admin/destinations/new"
          className="flex items-center gap-2 bg-[#D98200] hover:bg-[#c07300] text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
        >
          <Plus size={16} /> New Destination
        </Link>
      </div>

      {rows.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
          <p className="text-gray-400 mb-4">No destinations yet.</p>
          <Link href="/admin/destinations/new" className="text-sm text-[#D98200] font-semibold hover:underline">
            Add your first destination →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-50">
            {rows.map((dest) => (
              <div key={dest.id} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
                {/* Thumbnail */}
                <div
                  className="w-14 h-14 rounded-xl bg-gray-100 flex-shrink-0 bg-cover bg-center"
                  style={dest.hero_image ? { backgroundImage: `url(${dest.hero_image})` } : {}}
                >
                  {!dest.hero_image && (
                    <div className="w-full h-full flex items-center justify-center">
                      <MapPin size={20} className="text-gray-300" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-semibold text-sm text-gray-900">{dest.name}</p>
                    {dest.featured && (
                      <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 flex-wrap">
                    <span>{dest.country}</span>
                    {dest.region && <span>· {dest.region}</span>}
                    {dest.best_time && <span>· Best time: {dest.best_time}</span>}
                  </div>
                </div>

                {/* Tour count + actions */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                    {tourCountByDest[dest.slug] ?? 0} tour{(tourCountByDest[dest.slug] ?? 0) !== 1 ? "s" : ""}
                  </span>
                  <a
                    href={`/destinations/${dest.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-gray-900 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    View ↗
                  </a>
                  <Link
                    href={`/admin/destinations/${dest.id}/edit`}
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
