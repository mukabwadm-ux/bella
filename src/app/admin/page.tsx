import { supabaseAdmin } from "@/lib/supabase-server";
import Link from "next/link";
import { Package, BookOpen, Inbox, MapPin, ArrowRight, Clock, Mail, Phone } from "lucide-react";

export const dynamic = "force-dynamic";

async function getStats() {
  const [tours, blogs, enquiries, newEnquiries] = await Promise.all([
    supabaseAdmin.from("tours").select("id", { count: "exact", head: true }),
    supabaseAdmin.from("blog_posts").select("id", { count: "exact", head: true }),
    supabaseAdmin.from("enquiries").select("id", { count: "exact", head: true }),
    supabaseAdmin
      .from("enquiries")
      .select("id", { count: "exact", head: true })
      .eq("status", "new"),
  ]);
  return {
    tours: tours.count ?? 0,
    blogs: blogs.count ?? 0,
    enquiries: enquiries.count ?? 0,
    newEnquiries: newEnquiries.count ?? 0,
  };
}

async function getRecentEnquiries() {
  const { data } = await supabaseAdmin
    .from("enquiries")
    .select("id, name, email, phone, subject, tour_slug, source, status, created_at")
    .order("created_at", { ascending: false })
    .limit(5);
  return data ?? [];
}

const statusColors: Record<string, string> = {
  new: "bg-blue-50 text-blue-700",
  contacted: "bg-yellow-50 text-yellow-700",
  quoted: "bg-purple-50 text-purple-700",
  booked: "bg-green-50 text-green-700",
  closed: "bg-gray-100 text-gray-600",
};

export default async function AdminDashboard() {
  const [stats, recentEnquiries] = await Promise.all([getStats(), getRecentEnquiries()]);

  const statCards = [
    { label: "Tour Packages", value: stats.tours, icon: Package, color: "bg-green-50 text-green-700", href: "/admin/tours" },
    { label: "Blog Posts", value: stats.blogs, icon: BookOpen, color: "bg-blue-50 text-blue-700", href: "/admin/blog" },
    { label: "Total Enquiries", value: stats.enquiries, icon: Inbox, color: "bg-purple-50 text-purple-700", href: "/admin/enquiries" },
    { label: "New Enquiries", value: stats.newEnquiries, icon: Mail, color: "bg-orange-50 text-orange-700", href: "/admin/enquiries" },
  ];

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back. Here is what is happening on your site.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              href={card.href}
              className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 ${card.color}`}>
                <Icon size={20} />
              </div>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{card.label}</p>
            </Link>
          );
        })}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/admin/tours/new"
          className="flex items-center gap-3 bg-[#0B3D2E] hover:bg-[#002800] text-white rounded-xl p-4 transition-colors"
        >
          <Package size={20} />
          <div>
            <p className="font-semibold text-sm">Add Tour Package</p>
            <p className="text-white/60 text-xs">Create a new safari package</p>
          </div>
          <ArrowRight size={16} className="ml-auto" />
        </Link>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-3 bg-[#D98200] hover:bg-[#c07300] text-white rounded-xl p-4 transition-colors"
        >
          <BookOpen size={20} />
          <div>
            <p className="font-semibold text-sm">Write Blog Post</p>
            <p className="text-white/60 text-xs">Publish a new article</p>
          </div>
          <ArrowRight size={16} className="ml-auto" />
        </Link>
        <Link
          href="/admin/enquiries"
          className="flex items-center gap-3 bg-white border border-gray-200 hover:shadow-md text-gray-900 rounded-xl p-4 transition-all"
        >
          <Inbox size={20} className="text-gray-600" />
          <div>
            <p className="font-semibold text-sm">View Enquiries</p>
            <p className="text-gray-400 text-xs">{stats.newEnquiries} new awaiting response</p>
          </div>
          <ArrowRight size={16} className="ml-auto text-gray-400" />
        </Link>
      </div>

      {/* Recent enquiries */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">Recent Enquiries</h2>
          <Link href="/admin/enquiries" className="text-xs text-[#D98200] hover:text-[#c07300] font-medium flex items-center gap-1">
            View all <ArrowRight size={12} />
          </Link>
        </div>

        {recentEnquiries.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-10">No enquiries yet.</p>
        ) : (
          <div className="divide-y divide-gray-50">
            {recentEnquiries.map((enq) => (
              <div key={enq.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-sm text-gray-900">{enq.name}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[enq.status] ?? "bg-gray-100 text-gray-600"}`}>
                        {enq.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Mail size={11} />{enq.email}</span>
                      <span className="flex items-center gap-1"><Phone size={11} />{enq.phone}</span>
                      {enq.tour_slug && (
                        <span className="text-[#0B3D2E] font-medium capitalize">
                          {enq.tour_slug.replace(/-/g, " ")}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-gray-400 flex-shrink-0">
                    <Clock size={11} />
                    {new Date(enq.created_at).toLocaleDateString("en-KE", {
                      day: "numeric", month: "short",
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
