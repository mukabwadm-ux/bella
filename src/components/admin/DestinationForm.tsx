"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Save, ArrowLeft } from "lucide-react";
import ImageUpload from "./ImageUpload";
import RichTextEditor from "./RichTextEditor";

export interface DestinationFormData {
  id?: string;
  slug: string;
  name: string;
  country: string;
  region: string;
  short_description: string;
  long_description: string;
  hero_image: string;
  hero_image_alt: string;
  best_time: string;
  climate: string;
  highlights: string[];
  about: string;
  featured: boolean;
}

const INPUT = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]/20 focus:border-[#0B3D2E] transition-colors bg-white";
const TEXTAREA = INPUT + " resize-none";
const LABEL = "block text-xs font-semibold text-gray-600 mb-1.5";
const SECTION = "bg-white rounded-2xl border border-gray-100 p-6 space-y-5";
const SECTION_TITLE = "text-sm font-bold text-gray-900 uppercase tracking-wider pb-3 border-b border-gray-100";

export default function DestinationForm({ initial, isEdit }: { initial?: Partial<DestinationFormData>; isEdit?: boolean }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<DestinationFormData>({
    id: initial?.id,
    slug: initial?.slug ?? "",
    name: initial?.name ?? "",
    country: initial?.country ?? "Kenya",
    region: initial?.region ?? "",
    short_description: initial?.short_description ?? "",
    long_description: initial?.long_description ?? "",
    hero_image: initial?.hero_image ?? "",
    hero_image_alt: initial?.hero_image_alt ?? "",
    best_time: initial?.best_time ?? "",
    climate: initial?.climate ?? "",
    highlights: initial?.highlights?.length ? initial.highlights : [""],
    about: initial?.about ?? "",
    featured: initial?.featured ?? false,
  });

  function set<K extends keyof DestinationFormData>(key: K, value: DestinationFormData[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function autoSlug(name: string) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function setHighlight(i: number, val: string) {
    const arr = [...form.highlights];
    arr[i] = val;
    set("highlights", arr);
  }

  async function handleSave() {
    if (!form.name.trim()) { setError("Destination name is required."); return; }
    if (!form.slug.trim()) { setError("URL slug is required."); return; }
    if (!form.country.trim()) { setError("Country is required."); return; }

    setSaving(true);
    setError("");
    try {
      const payload = {
        ...form,
        highlights: form.highlights.filter(Boolean),
      };

      const url = isEdit ? `/api/admin/destinations/${form.id}` : "/api/admin/destinations";
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

      router.push("/admin/destinations");
      router.refresh();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} className="text-gray-400 hover:text-gray-700">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEdit ? "Edit Destination" : "Add New Destination"}
          </h1>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#002800] disabled:opacity-60 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          <Save size={15} />
          {saving ? "Saving..." : "Save Destination"}
        </button>
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
      )}

      {/* Basic info */}
      <div className={SECTION}>
        <p className={SECTION_TITLE}>Basic Information</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className={LABEL}>Destination Name *</label>
            <input
              className={INPUT}
              value={form.name}
              onChange={(e) => {
                set("name", e.target.value);
                if (!isEdit) set("slug", autoSlug(e.target.value));
              }}
              placeholder="e.g. Maasai Mara"
            />
          </div>
          <div>
            <label className={LABEL}>URL Slug *</label>
            <input
              className={INPUT}
              value={form.slug}
              onChange={(e) => set("slug", autoSlug(e.target.value))}
              placeholder="maasai-mara"
            />
            <p className="text-xs text-gray-400 mt-1">Used in the URL: /destinations/<strong>{form.slug || "maasai-mara"}</strong></p>
          </div>
          <div>
            <label className={LABEL}>Country *</label>
            <select className={INPUT} value={form.country} onChange={(e) => set("country", e.target.value)}>
              {["Kenya", "Tanzania", "Uganda", "Rwanda", "Ethiopia", "Zanzibar (Tanzania)"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={LABEL}>Region / Area</label>
            <input className={INPUT} value={form.region} onChange={(e) => set("region", e.target.value)} placeholder="e.g. Rift Valley, Narok County" />
          </div>
          <div>
            <label className={LABEL}>Best Time to Visit</label>
            <input className={INPUT} value={form.best_time} onChange={(e) => set("best_time", e.target.value)} placeholder="e.g. July – October (Migration Season)" />
          </div>
          <div>
            <label className={LABEL}>Climate</label>
            <input className={INPUT} value={form.climate} onChange={(e) => set("climate", e.target.value)} placeholder="e.g. Semi-arid savanna, 15–32°C" />
          </div>
        </div>

        <label className="flex items-center gap-2 cursor-pointer pt-1">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => set("featured", e.target.checked)}
            className="w-4 h-4 accent-[#0B3D2E]"
          />
          <span className="text-sm font-medium text-gray-700">Featured destination (shown on homepage)</span>
        </label>
      </div>

      {/* Hero image */}
      <div className={SECTION}>
        <p className={SECTION_TITLE}>Hero Image</p>
        <ImageUpload
          value={form.hero_image}
          onChange={(url) => set("hero_image", url)}
          folder="destinations"
          aspectRatio="aspect-[16/7]"
          label="Hero Image *"
        />
        <div>
          <label className={LABEL}>Image Alt Text (SEO) *</label>
          <input
            className={INPUT}
            value={form.hero_image_alt}
            onChange={(e) => set("hero_image_alt", e.target.value)}
            placeholder="e.g. Wildebeest grazing on the Maasai Mara plains at sunset"
          />
        </div>
      </div>

      {/* Descriptions */}
      <div className={SECTION}>
        <p className={SECTION_TITLE}>Descriptions</p>
        <div>
          <label className={LABEL}>Short Description * <span className="text-gray-400 font-normal">(shown on destination cards)</span></label>
          <textarea
            className={TEXTAREA}
            rows={2}
            value={form.short_description}
            onChange={(e) => set("short_description", e.target.value)}
            placeholder="One or two sentences that appear on the destination listing card..."
          />
        </div>
        <div>
          <label className={LABEL}>About This Destination <span className="text-gray-400 font-normal">(shown on destination page — supports rich text)</span></label>
          <RichTextEditor
            value={form.about}
            onChange={(html) => set("about", html)}
            placeholder="Write a detailed description of this destination — history, wildlife, landscape, what makes it special..."
            minHeight="min-h-[260px]"
          />
        </div>
      </div>

      {/* Highlights */}
      <div className={SECTION}>
        <p className={SECTION_TITLE}>Highlights</p>
        <p className="text-xs text-gray-500 -mt-2">Key bullet points shown on the destination page.</p>
        {form.highlights.map((h, i) => (
          <div key={i} className="flex gap-2">
            <input
              className={INPUT}
              value={h}
              onChange={(e) => setHighlight(i, e.target.value)}
              placeholder={`Highlight ${i + 1} — e.g. Home to the Great Migration`}
            />
            {form.highlights.length > 1 && (
              <button
                type="button"
                onClick={() => set("highlights", form.highlights.filter((_, idx) => idx !== i))}
                className="text-red-400 hover:text-red-600 flex-shrink-0"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => set("highlights", [...form.highlights, ""])}
          className="text-xs text-[#0B3D2E] font-semibold flex items-center gap-1 hover:underline"
        >
          <Plus size={13} /> Add Highlight
        </button>
      </div>

      {/* Save button (bottom) */}
      <div className="flex gap-3 pb-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#002800] disabled:opacity-60 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          <Save size={15} />
          {saving ? "Saving..." : "Save Destination"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="text-sm text-gray-500 hover:text-gray-900 px-4 py-3 rounded-xl border border-gray-200 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
