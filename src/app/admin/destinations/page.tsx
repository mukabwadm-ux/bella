import { supabaseAdmin } from "@/lib/supabase-server";
import Link from "next/link";
import { MapPin, Plus, Pencil, ExternalLink, CalendarDays } from "lucide-react";
import DeleteDestinationButton from "./DeleteDestinationButton";

function formatDate(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export const dynamic = "force-dynamic";

export default async function AdminDestinationsPage() {
  const { data: destinations } = await supabaseAdmin
    .from("destinations")
    .select("id, slug, name, country, region, featured, best_time, hero_image, created_at")
    .order("created_at", { ascending: false });

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
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Destinations</h1>
          <p className="text-gray-500 text-sm mt-0.5">{rows.length} destinations</p>
        </div>
        <Link
          href="/admin/destinations/new"
          className="flex items-center gap-2 bg-[#D98200] hover:bg-[#c07300] text-white font-semibold text-sm px-3 sm:px-4 py-2.5 rounded-xl transition-colors flex-shrink-0"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">New Destination</span>
          <span className="sm:hidden">New</span>
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
            {rows.map((dest) => {
              const tourCount = tourCountByDest[dest.slug] ?? 0;
              return (
                <div key={dest.id} className="flex items-start gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors">
                  {/* Thumbnail */}
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-100 flex-shrink-0 bg-cover bg-center"
                    style={dest.hero_image ? { backgroundImage: `url(${dest.hero_image})` } : {}}
                  >
                    {!dest.hero_image && (
                      <div className="w-full h-full flex items-center justify-center">
                        <MapPin size={18} className="text-gray-300" />
                      </div>
                    )}
                  </div>

                  {/* Info + actions */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      {/* Title + badges */}
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-sm text-gray-900 leading-snug mb-1 pr-1">{dest.name}</p>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {dest.featured && (
                            <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Actions */}
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <a
                          href={`/destinations/${dest.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden sm:flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 border border-gray-200 px-2.5 py-1.5 rounded-lg transition-colors"
                        >
                          <ExternalLink size={11} />
                          View
                        </a>
                        <a
                          href={`/destinations/${dest.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View destination"
                          className="sm:hidden flex items-center justify-center w-7 h-7 text-gray-500 hover:text-gray-900 border border-gray-200 rounded-lg transition-colors"
                        >
                          <ExternalLink size={13} />
                        </a>
                        <Link
                          href={`/admin/destinations/${dest.id}/edit`}
                          className="flex items-center gap-1.5 text-xs bg-[#0B3D2E] hover:bg-[#002800] text-white px-2.5 sm:px-3 py-1.5 rounded-lg font-medium transition-colors"
                        >
                          <Pencil size={12} />
                          <span className="hidden sm:inline">Edit</span>
                        </Link>
                        <DeleteDestinationButton id={dest.id} name={dest.name} />
                      </div>
                    </div>
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-gray-500">
                      <span>{dest.country}</span>
                      {dest.region && <span className="hidden sm:inline">· {dest.region}</span>}
                      {dest.best_time && <span className="hidden sm:inline">· Best: {dest.best_time}</span>}
                      <span className="bg-gray-100 px-2 py-0.5 rounded-full border border-gray-100">
                        {tourCount} tour{tourCount !== 1 ? "s" : ""}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <CalendarDays size={10} />
                        {formatDate(dest.created_at)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
