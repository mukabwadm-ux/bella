import { supabaseAdmin } from "@/lib/supabase-server";
import { Mail, Phone, Clock, Package, Tag } from "lucide-react";

export const dynamic = "force-dynamic";

const statusColors: Record<string, string> = {
  new: "bg-blue-50 text-blue-700 border-blue-200",
  contacted: "bg-yellow-50 text-yellow-700 border-yellow-200",
  quoted: "bg-purple-50 text-purple-700 border-purple-200",
  booked: "bg-green-50 text-green-700 border-green-200",
  closed: "bg-gray-100 text-gray-600 border-gray-200",
};

export default async function EnquiriesPage() {
  const { data: enquiries } = await supabaseAdmin
    .from("enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  const rows = enquiries ?? [];
  const newCount = rows.filter((e) => e.status === "new").length;

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Enquiries</h1>
          <p className="text-gray-500 text-sm mt-1">
            {rows.length} total · {newCount} new
          </p>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
          <p className="text-gray-400">No enquiries received yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {rows.map((enq) => (
            <div
              key={enq.id}
              className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition-shadow"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                {/* Left */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900">{enq.name}</h3>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${statusColors[enq.status] ?? "bg-gray-100 text-gray-600"}`}>
                      {enq.status}
                    </span>
                    {enq.source && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        via {enq.source.replace(/_/g, " ")}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <a href={`mailto:${enq.email}`} className="flex items-center gap-1.5 hover:text-[#0B3D2E]">
                      <Mail size={13} /> {enq.email}
                    </a>
                    <a href={`https://wa.me/${enq.phone?.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#25D366]">
                      <Phone size={13} /> {enq.phone}
                    </a>
                  </div>

                  {/* Trip info */}
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    {enq.tour_slug && (
                      <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-full">
                        <Package size={11} />
                        {enq.tour_slug.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())}
                      </span>
                    )}
                    {enq.travel_date && (
                      <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">
                        <Clock size={11} />
                        {new Date(enq.travel_date).toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" })}
                      </span>
                    )}
                    {enq.group_size && (
                      <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                        {enq.group_size} people
                      </span>
                    )}
                  </div>

                  {enq.message && (
                    <p className="mt-3 text-sm text-gray-600 bg-gray-50 rounded-xl px-4 py-3 leading-relaxed">
                      {enq.message}
                    </p>
                  )}
                </div>

                {/* Right */}
                <div className="flex flex-col items-end gap-3 text-right flex-shrink-0">
                  <span className="text-xs text-gray-400">
                    {new Date(enq.created_at).toLocaleDateString("en-KE", {
                      day: "numeric", month: "long", year: "numeric",
                    })}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${enq.email}?subject=Re: Your Bella Safaris Enquiry`}
                      className="text-xs bg-[#0B3D2E] hover:bg-[#002800] text-white px-3 py-1.5 rounded-full font-medium transition-colors"
                    >
                      Reply by Email
                    </a>
                    <a
                      href={`https://wa.me/${enq.phone?.replace(/\D/g, "")}?text=Hello ${enq.name}, thank you for your enquiry with Bella Safaris!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 py-1.5 rounded-full font-medium transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
