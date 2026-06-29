"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft } from "lucide-react";
import SeoAnalyzer from "./SeoAnalyzer";
import RichTextEditor from "./RichTextEditor";

export interface BlogFormData {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  cover_image_alt: string;
  category: string;
  tags: string;
  author: string;
  featured: boolean;
  published_at: string;
  seo_title: string;
  meta_description: string;
  focus_keyword: string;
}

const INPUT = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]/20 focus:border-[#0B3D2E] transition-colors bg-white";
const TEXTAREA = INPUT + " resize-none";
const LABEL = "block text-xs font-semibold text-gray-600 mb-1.5";
const SECTION = "bg-white rounded-2xl border border-gray-100 p-6 space-y-4";
const SECTION_TITLE = "text-sm font-bold text-gray-900 uppercase tracking-wider pb-3 border-b border-gray-100";

const CATEGORIES = ["Travel Guide", "Travel Tips", "Honeymoon", "Wildlife", "Destinations", "Planning", "News"];

export default function BlogForm({ initial, isEdit }: { initial?: Partial<BlogFormData>; isEdit?: boolean }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState<BlogFormData>({
    id: initial?.id,
    slug: initial?.slug ?? "",
    title: initial?.title ?? "",
    excerpt: initial?.excerpt ?? "",
    content: initial?.content ?? "",
    cover_image: initial?.cover_image ?? "",
    cover_image_alt: initial?.cover_image_alt ?? "",
    category: initial?.category ?? "Travel Guide",
    tags: Array.isArray(initial?.tags) ? initial.tags.join(", ") : (initial?.tags ?? ""),
    author: initial?.author ?? "Bella Safaris Team",
    featured: initial?.featured ?? false,
    published_at: initial?.published_at ? initial.published_at.split("T")[0] : today,
    seo_title: initial?.seo_title ?? "",
    meta_description: initial?.meta_description ?? "",
    focus_keyword: initial?.focus_keyword ?? "",
  });

  function set(key: keyof BlogFormData, value: string | boolean) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function autoSlug(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  async function handleSave() {
    setSaving(true);
    setError("");
    try {
      const payload = {
        ...form,
        tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
        seo_title: form.seo_title || form.title,
        meta_description: form.meta_description || form.excerpt,
      };

      const url = isEdit ? `/api/admin/blog/${form.id}` : "/api/admin/blog";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error ?? "Save failed");
      }

      router.push("/admin/blog");
      router.refresh();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} className="text-gray-400 hover:text-gray-700">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{isEdit ? "Edit Blog Post" : "New Blog Post"}</h1>
        </div>
        <div className="flex items-center gap-3">
          {form.slug && (
            <a
              href={`/blog/${form.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-900 border border-gray-200 px-3 py-2 rounded-xl transition-colors"
            >
              Preview ↗
            </a>
          )}
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#002800] disabled:opacity-60 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
          >
            <Save size={15} />
            {saving ? "Saving..." : "Publish Post"}
          </button>
        </div>
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT: Main content */}
        <div className="xl:col-span-2 space-y-6">

          {/* Core fields */}
          <div className={SECTION}>
            <p className={SECTION_TITLE}>Post Details</p>
            <div>
              <label className={LABEL}>Post Title *</label>
              <input
                className={INPUT}
                value={form.title}
                onChange={(e) => {
                  set("title", e.target.value);
                  if (!isEdit) set("slug", autoSlug(e.target.value));
                  if (!form.seo_title) set("seo_title", e.target.value);
                }}
                placeholder="e.g. Best Time to Visit the Maasai Mara"
              />
              <p className="text-xs text-gray-400 mt-1">{form.title.length} characters</p>
            </div>
            <div>
              <label className={LABEL}>URL Slug</label>
              <input className={INPUT} value={form.slug} onChange={(e) => set("slug", e.target.value)} placeholder="best-time-to-visit-maasai-mara" />
            </div>
            <div>
              <label className={LABEL}>Excerpt (shown on blog listing) *</label>
              <textarea className={TEXTAREA} rows={2} value={form.excerpt} onChange={(e) => set("excerpt", e.target.value)} placeholder="A compelling one or two sentence summary..." />
            </div>
          </div>

          {/* Content editor */}
          <div className={SECTION}>
            <div className="border-b border-gray-100 pb-3">
              <p className="text-sm font-bold text-gray-900 uppercase tracking-wider">Content</p>
              <p className="text-xs text-gray-400 mt-0.5">Use the toolbar to format headings, bold, lists, images, links, and more.</p>
            </div>
            <RichTextEditor
              value={form.content}
              onChange={(html) => set("content", html)}
              placeholder="Start writing your article here..."
              minHeight="min-h-[400px]"
            />
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <div className="space-y-6">

          {/* Featured image */}
          <div className={SECTION}>
            <p className={SECTION_TITLE}>Featured Image</p>
            <div>
              <label className={LABEL}>Image URL *</label>
              <input className={INPUT} value={form.cover_image} onChange={(e) => set("cover_image", e.target.value)} placeholder="/images/your-photo.jpg" />
            </div>
            {form.cover_image && (
              <div className="rounded-xl overflow-hidden aspect-[16/9] bg-gray-100">
                <img src={form.cover_image} alt="cover" className="w-full h-full object-cover" />
              </div>
            )}
            <div>
              <label className={LABEL}>Alt Text (accessibility + SEO)</label>
              <input className={INPUT} value={form.cover_image_alt} onChange={(e) => set("cover_image_alt", e.target.value)} placeholder="Describe the image for screen readers" />
            </div>
          </div>

          {/* Meta */}
          <div className={SECTION}>
            <p className={SECTION_TITLE}>Post Settings</p>
            <div>
              <label className={LABEL}>Category</label>
              <select className={INPUT} value={form.category} onChange={(e) => set("category", e.target.value)}>
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className={LABEL}>Tags (comma-separated)</label>
              <input className={INPUT} value={form.tags} onChange={(e) => set("tags", e.target.value)} placeholder="kenya, safari, migration" />
            </div>
            <div>
              <label className={LABEL}>Author</label>
              <input className={INPUT} value={form.author} onChange={(e) => set("author", e.target.value)} />
            </div>
            <div>
              <label className={LABEL}>Publish Date</label>
              <input type="date" className={INPUT} value={form.published_at} onChange={(e) => set("published_at", e.target.value)} />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.featured} onChange={(e) => set("featured", e.target.checked)} className="w-4 h-4 accent-[#0B3D2E]" />
              <span className="text-sm font-medium text-gray-700">Featured Post</span>
            </label>
          </div>

          {/* SEO */}
          <div className={SECTION}>
            <p className={SECTION_TITLE}>SEO Settings</p>
            <div>
              <label className={LABEL}>Focus Keyword</label>
              <input className={INPUT} value={form.focus_keyword} onChange={(e) => set("focus_keyword", e.target.value)} placeholder="e.g. maasai mara safari" />
            </div>
            <div>
              <label className={LABEL}>SEO Title <span className="text-gray-400 font-normal">({form.seo_title.length}/60)</span></label>
              <input
                className={`${INPUT} ${form.seo_title.length > 60 ? "border-red-300 focus:border-red-500" : ""}`}
                value={form.seo_title}
                onChange={(e) => set("seo_title", e.target.value)}
                placeholder="Defaults to post title"
              />
            </div>
            <div>
              <label className={LABEL}>Meta Description <span className="text-gray-400 font-normal">({form.meta_description.length}/160)</span></label>
              <textarea
                className={`${TEXTAREA} ${form.meta_description.length > 160 ? "border-red-300 focus:border-red-500" : ""}`}
                rows={3}
                value={form.meta_description}
                onChange={(e) => set("meta_description", e.target.value)}
                placeholder="Defaults to excerpt"
              />
            </div>
          </div>

          {/* SEO Analyzer */}
          <div className={SECTION}>
            <p className={SECTION_TITLE}>SEO Analysis</p>
            <SeoAnalyzer
              title={form.seo_title || form.title}
              metaDescription={form.meta_description || form.excerpt}
              focusKeyword={form.focus_keyword}
              content={form.content}
              excerpt={form.excerpt}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
