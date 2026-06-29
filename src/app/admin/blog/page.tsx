import { supabaseAdmin } from "@/lib/supabase-server";
import Link from "next/link";
import { Plus, Pencil, Star, Calendar } from "lucide-react";

export const dynamic = "force-dynamic";

const categoryColors: Record<string, string> = {
  "Travel Guide": "bg-green-50 text-green-700",
  "Travel Tips": "bg-yellow-50 text-yellow-700",
  Honeymoon: "bg-pink-50 text-pink-700",
  Wildlife: "bg-orange-50 text-orange-700",
};

export default async function AdminBlogPage() {
  const { data: posts } = await supabaseAdmin
    .from("blog_posts")
    .select("id, slug, title, category, featured, published_at, cover_image, author")
    .order("published_at", { ascending: false });

  const rows = posts ?? [];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-500 text-sm mt-1">{rows.length} articles</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-[#D98200] hover:bg-[#c07300] text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
        >
          <Plus size={16} /> New Post
        </Link>
      </div>

      {rows.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
          <p className="text-gray-400 mb-4">No blog posts yet.</p>
          <Link href="/admin/blog/new" className="text-sm text-[#D98200] font-semibold hover:underline">
            Write your first post →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-50">
            {rows.map((post) => (
              <div key={post.id} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
                {/* Thumbnail */}
                <div
                  className="w-14 h-14 rounded-xl bg-gray-100 flex-shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.cover_image})` }}
                />
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-sm text-gray-900 truncate">{post.title}</p>
                    {post.featured && (
                      <span className="flex items-center gap-0.5 text-xs bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                        <Star size={10} /> Featured
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className={`px-2 py-0.5 rounded-full font-medium ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <Calendar size={10} />
                      {new Date(post.published_at).toLocaleDateString("en-KE", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <span className="text-gray-400">{post.author}</span>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-gray-900 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    View ↗
                  </a>
                  <Link
                    href={`/admin/blog/${post.id}/edit`}
                    className="flex items-center gap-1.5 text-xs bg-[#D98200] hover:bg-[#c07300] text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
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
