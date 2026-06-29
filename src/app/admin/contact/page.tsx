import { supabaseAdmin } from "@/lib/supabase-server";
import { Mail, Phone, Clock, MessageSquare } from "lucide-react";

export const dynamic = "force-dynamic";

const statusConfig: Record<string, { label: string; classes: string }> = {
  new:     { label: "New",     classes: "bg-blue-50 text-blue-700" },
  read:    { label: "Read",    classes: "bg-gray-100 text-gray-600" },
  replied: { label: "Replied", classes: "bg-green-50 text-green-700" },
};

export default async function AdminContactPage() {
  const { data: contacts } = await supabaseAdmin
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  const rows = contacts ?? [];
  const newCount = rows.filter((r) => r.status === "new").length;

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Form</h1>
          <p className="text-gray-500 text-sm mt-1">
            {rows.length} message{rows.length !== 1 ? "s" : ""} total
            {newCount > 0 && (
              <span className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {newCount} new
              </span>
            )}
          </p>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
          <MessageSquare size={32} className="text-gray-200 mx-auto mb-3" />
          <p className="text-gray-400 text-sm">No contact messages yet.</p>
          <p className="text-gray-300 text-xs mt-1">Messages submitted via the Contact Us page will appear here.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {rows.map((contact) => {
            const cfg = statusConfig[contact.status] ?? statusConfig.new;
            const date = new Date(contact.created_at).toLocaleDateString("en-KE", {
              day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
            });

            return (
              <div key={contact.id} className="bg-white rounded-2xl border border-gray-100 p-5 space-y-3">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0B3D2E]/10 flex items-center justify-center flex-shrink-0 font-bold text-[#0B3D2E] text-sm">
                      {contact.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{contact.name}</p>
                      {contact.subject && (
                        <p className="text-xs text-gray-500">{contact.subject}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cfg.classes}`}>
                      {cfg.label}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={11} />
                      {date}
                    </span>
                  </div>
                </div>

                {/* Message */}
                <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-xl px-4 py-3">
                  {contact.message}
                </p>

                {/* Footer: contact details + actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                    <a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                      <Mail size={12} /> {contact.email}
                    </a>
                    {contact.phone && (
                      <a href={`tel:${contact.phone}`} className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                        <Phone size={12} /> {contact.phone}
                      </a>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${contact.email}?subject=Re: ${encodeURIComponent(contact.subject ?? "Your enquiry — Bella Safaris")}`}
                      className="text-xs bg-[#0B3D2E] hover:bg-[#002800] text-white font-medium px-3 py-1.5 rounded-lg transition-colors"
                    >
                      Reply by Email
                    </a>
                    {contact.phone && (
                      <a
                        href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${contact.name}, thank you for contacting Bella Safaris. `)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-[#25D366] hover:bg-[#1ebe5a] text-white font-medium px-3 py-1.5 rounded-lg transition-colors"
                      >
                        WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
