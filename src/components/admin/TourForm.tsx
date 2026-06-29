"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Save, ArrowLeft, Images, Loader2 } from "lucide-react";
import ImageUpload from "./ImageUpload";
import RichTextEditor from "./RichTextEditor";

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals: string;
  accommodation: string;
}
interface FAQ { question: string; answer: string }

export interface TourFormData {
  id?: string;
  slug: string;
  title: string;
  summary: string;
  details: string;
  hero_image: string;
  hero_image_alt: string;
  duration: number;
  group_size: string;
  price_from_kes: number;
  difficulty: "easy" | "moderate" | "challenging";
  category: string;
  destinations: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  gallery: string[];
  itinerary: ItineraryDay[];
  faqs: FAQ[];
  featured: boolean;
  best_seller: boolean;
}

interface DestinationOption { slug: string; name: string; }

const INPUT = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]/20 focus:border-[#0B3D2E] transition-colors bg-white";
const TEXTAREA = INPUT + " resize-none";
const LABEL = "block text-xs font-semibold text-gray-600 mb-1.5";
const SECTION = "bg-white rounded-2xl border border-gray-100 p-6 space-y-5";
const SECTION_TITLE = "text-sm font-bold text-gray-900 uppercase tracking-wider pb-3 border-b border-gray-100";

export default function TourForm({
  initial,
  isEdit,
  destinationOptions = [],
}: {
  initial?: Partial<TourFormData>;
  isEdit?: boolean;
  destinationOptions?: DestinationOption[];
}) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<TourFormData>({
    id: initial?.id,
    slug: initial?.slug ?? "",
    title: initial?.title ?? "",
    summary: initial?.summary ?? "",
    details: initial?.details ?? "",
    hero_image: initial?.hero_image ?? "",
    hero_image_alt: initial?.hero_image_alt ?? "",
    duration: initial?.duration ?? 3,
    group_size: initial?.group_size ?? "2–12",
    price_from_kes: initial?.price_from_kes ?? 65000,
    difficulty: initial?.difficulty ?? "easy",
    category: initial?.category ?? "Wildlife Safari",
    destinations: initial?.destinations ?? [],
    highlights: initial?.highlights ?? [""],
    inclusions: initial?.inclusions ?? [""],
    exclusions: initial?.exclusions ?? [""],
    gallery: initial?.gallery ?? [""],
    itinerary: initial?.itinerary?.length
      ? initial.itinerary
      : [{ day: 1, title: "", description: "", meals: "", accommodation: "" }],
    faqs: initial?.faqs?.length ? initial.faqs : [{ question: "", answer: "" }],
    featured: initial?.featured ?? false,
    best_seller: initial?.best_seller ?? false,
  });

  function setField<K extends keyof TourFormData>(key: K, value: TourFormData[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function autoSlug(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function setArrayItem(field: "highlights" | "inclusions" | "exclusions" | "gallery", i: number, val: string) {
    const arr = [...form[field]];
    arr[i] = val;
    setField(field, arr);
  }
  function addArrayItem(field: "highlights" | "inclusions" | "exclusions" | "gallery") {
    setField(field, [...form[field], ""]);
  }
  function removeArrayItem(field: "highlights" | "inclusions" | "exclusions" | "gallery", i: number) {
    setField(field, form[field].filter((_, idx) => idx !== i));
  }

  const galleryInputRef = useRef<HTMLInputElement>(null);
  const [galleryUploading, setGalleryUploading] = useState(false);
  const [galleryProgress, setGalleryProgress] = useState({ done: 0, total: 0 });

  async function handleGalleryMultiUpload(files: FileList) {
    if (!files.length) return;
    setGalleryUploading(true);
    setGalleryProgress({ done: 0, total: files.length });
    const urls: string[] = [];
    for (const file of Array.from(files)) {
      try {
        const fd = new FormData();
        fd.append("file", file);
        fd.append("folder", "gallery");
        const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
        const data = await res.json();
        if (res.ok && data.url) urls.push(data.url);
      } catch {}
      setGalleryProgress((p) => ({ ...p, done: p.done + 1 }));
    }
    if (urls.length) {
      const existing = form.gallery.filter(Boolean);
      setField("gallery", [...existing, ...urls]);
    }
    setGalleryUploading(false);
    setGalleryProgress({ done: 0, total: 0 });
  }

  function setItineraryDay(i: number, key: keyof ItineraryDay, val: string | number) {
    const arr = form.itinerary.map((d, idx) => idx === i ? { ...d, [key]: val } : d);
    setField("itinerary", arr);
  }
  function addDay() {
    setField("itinerary", [
      ...form.itinerary,
      { day: form.itinerary.length + 1, title: "", description: "", meals: "", accommodation: "" },
    ]);
  }
  function removeDay(i: number) {
    const arr = form.itinerary.filter((_, idx) => idx !== i).map((d, idx) => ({ ...d, day: idx + 1 }));
    setField("itinerary", arr);
  }

  function setFaq(i: number, key: "question" | "answer", val: string) {
    const arr = form.faqs.map((f, idx) => idx === i ? { ...f, [key]: val } : f);
    setField("faqs", arr);
  }

  function toggleDestination(slug: string) {
    const arr = form.destinations.includes(slug)
      ? form.destinations.filter((d) => d !== slug)
      : [...form.destinations, slug];
    setField("destinations", arr);
  }

  async function handleSave() {
    setSaving(true);
    setError("");
    try {
      const payload = {
        ...form,
        highlights: form.highlights.filter(Boolean),
        inclusions: form.inclusions.filter(Boolean),
        exclusions: form.exclusions.filter(Boolean),
        gallery: form.gallery.filter(Boolean),
        itinerary: form.itinerary.filter((d) => d.title || d.description),
        faqs: form.faqs.filter((f) => f.question || f.answer),
      };

      const url = isEdit ? `/api/admin/tours/${form.id}` : "/api/admin/tours";
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

      router.push("/admin/tours");
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
          <h1 className="text-2xl font-bold text-gray-900">{isEdit ? "Edit Package" : "New Tour Package"}</h1>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#002800] disabled:opacity-60 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          <Save size={15} />
          {saving ? "Saving..." : "Save Package"}
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
            <label className={LABEL}>Package Title *</label>
            <input
              className={INPUT}
              value={form.title}
              onChange={(e) => {
                setField("title", e.target.value);
                if (!isEdit) setField("slug", autoSlug(e.target.value));
              }}
              placeholder="e.g. 3-Day Maasai Mara Safari"
            />
          </div>
          <div>
            <label className={LABEL}>URL Slug *</label>
            <input className={INPUT} value={form.slug} onChange={(e) => setField("slug", e.target.value)} placeholder="3-day-maasai-mara-safari" />
          </div>
          <div>
            <label className={LABEL}>Category *</label>
            <select className={INPUT} value={form.category} onChange={(e) => setField("category", e.target.value)}>
              {["Wildlife Safari", "Beach & Island", "Honeymoon", "Hiking & Adventure", "Cultural Tour", "Custom"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={LABEL}>Difficulty</label>
            <select className={INPUT} value={form.difficulty} onChange={(e) => setField("difficulty", e.target.value as TourFormData["difficulty"])}>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="challenging">Challenging</option>
            </select>
          </div>
        </div>

        {/* Featured image upload */}
        <div className="pt-2">
          <ImageUpload
            value={form.hero_image}
            onChange={(url) => setField("hero_image", url)}
            folder="tours"
            aspectRatio="aspect-[16/9]"
            label="Featured Image *"
          />
          <div className="mt-3">
            <label className={LABEL}>Image Alt Text (SEO) *</label>
            <input
              className={INPUT}
              value={form.hero_image_alt}
              onChange={(e) => setField("hero_image_alt", e.target.value)}
              placeholder="e.g. Wildebeest crossing the Mara River at dawn"
            />
            <p className="text-xs text-gray-400 mt-1">Describe what&apos;s in the image — used by search engines and screen readers.</p>
          </div>
        </div>

        {/* Summary */}
        <div>
          <label className={LABEL}>Summary / Description *</label>
          <textarea
            className={TEXTAREA}
            rows={3}
            value={form.summary}
            onChange={(e) => setField("summary", e.target.value)}
            placeholder="A compelling one-paragraph description shown on tour cards and at the top of the tour page..."
          />
        </div>
      </div>

      {/* Tour Details rich editor */}
      <div className={SECTION}>
        <div className="border-b border-gray-100 pb-3">
          <p className="text-sm font-bold text-gray-900 uppercase tracking-wider">Tour Details</p>
          <p className="text-xs text-gray-400 mt-0.5">
            Optional extended content — ideal for tours without a full day-by-day itinerary.
            Use the toolbar to format headings, lists, bold text, images, and more.
          </p>
        </div>
        <RichTextEditor
          value={form.details}
          onChange={(html) => setField("details", html)}
          placeholder="Start writing your tour description here — add headings, paragraphs, bullet points, images, and more..."
          minHeight="min-h-[320px]"
        />
      </div>

      {/* Pricing & logistics */}
      <div className={SECTION}>
        <p className={SECTION_TITLE}>Pricing & Logistics</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <label className={LABEL}>Duration (days) *</label>
            <input type="number" className={INPUT} min={1} value={form.duration} onChange={(e) => setField("duration", Number(e.target.value))} />
          </div>
          <div>
            <label className={LABEL}>Group Size</label>
            <input className={INPUT} value={form.group_size} onChange={(e) => setField("group_size", e.target.value)} placeholder="2–12" />
          </div>
          <div>
            <label className={LABEL}>Price From (USD) *</label>
            <input type="number" className={INPUT} min={0} value={form.price_from_kes} onChange={(e) => setField("price_from_kes", Number(e.target.value))} />
          </div>
        </div>
        <div className="flex flex-wrap gap-6 pt-2">
          {([["featured", "Featured on Homepage"], ["best_seller", "Best Seller Badge"]] as const).map(([key, label]) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form[key] as boolean}
                onChange={(e) => setField(key, e.target.checked)}
                className="w-4 h-4 accent-[#0B3D2E]"
              />
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Destinations */}
      <div className={SECTION}>
        <p className={SECTION_TITLE}>Destinations</p>
        <p className="text-xs text-gray-500 -mt-2">Select all destinations covered by this package.</p>
        {destinationOptions.length === 0 ? (
          <p className="text-xs text-gray-400 italic">
            No destinations found.{" "}
            <a href="/admin/destinations/new" target="_blank" className="text-[#0B3D2E] font-semibold underline">
              Add one here ↗
            </a>
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {destinationOptions.map((d) => (
              <button
                key={d.slug}
                type="button"
                onClick={() => toggleDestination(d.slug)}
                className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${
                  form.destinations.includes(d.slug)
                    ? "bg-[#0B3D2E] text-white border-[#0B3D2E]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#0B3D2E]"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        )}
        <a
          href="/admin/destinations/new"
          target="_blank"
          className="text-xs text-[#0B3D2E] font-semibold flex items-center gap-1 hover:underline w-fit"
        >
          <Plus size={12} /> Add a new destination
        </a>
      </div>

      {/* Highlights */}
      <div className={SECTION}>
        <p className={SECTION_TITLE}>Trip Highlights</p>
        {form.highlights.map((h, i) => (
          <div key={i} className="flex gap-2">
            <input className={INPUT} value={h} onChange={(e) => setArrayItem("highlights", i, e.target.value)} placeholder={`Highlight ${i + 1}`} />
            {form.highlights.length > 1 && (
              <button onClick={() => removeArrayItem("highlights", i)} className="text-red-400 hover:text-red-600 flex-shrink-0"><Trash2 size={16} /></button>
            )}
          </div>
        ))}
        <button onClick={() => addArrayItem("highlights")} className="text-xs text-[#0B3D2E] font-semibold flex items-center gap-1 hover:underline">
          <Plus size={13} /> Add Highlight
        </button>
      </div>

      {/* Day-by-Day Itinerary */}
      <div className={SECTION}>
        <p className={SECTION_TITLE}>Day-by-Day Itinerary</p>
        <p className="text-xs text-gray-500 -mt-2">Optional — fill this in for detailed itinerary tours. Leave empty if using Tour Details instead.</p>
        <div className="space-y-5">
          {form.itinerary.map((day, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-4 space-y-3 bg-gray-50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B3D2E] uppercase">Day {day.day}</span>
                {form.itinerary.length > 1 && (
                  <button onClick={() => removeDay(i)} className="text-red-400 hover:text-red-600 text-xs flex items-center gap-1">
                    <Trash2 size={13} /> Remove
                  </button>
                )}
              </div>
              <input className={INPUT} value={day.title} onChange={(e) => setItineraryDay(i, "title", e.target.value)} placeholder="Day title (e.g. Nairobi to Maasai Mara)" />
              <textarea className={TEXTAREA} rows={3} value={day.description} onChange={(e) => setItineraryDay(i, "description", e.target.value)} placeholder="Detailed day description..." />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input className={INPUT} value={day.meals} onChange={(e) => setItineraryDay(i, "meals", e.target.value)} placeholder="Meals (e.g. Breakfast, Lunch, Dinner)" />
                <input className={INPUT} value={day.accommodation} onChange={(e) => setItineraryDay(i, "accommodation", e.target.value)} placeholder="Accommodation (e.g. Tented Camp, Mara)" />
              </div>
            </div>
          ))}
        </div>
        <button onClick={addDay} className="text-xs text-[#0B3D2E] font-semibold flex items-center gap-1 hover:underline mt-2">
          <Plus size={13} /> Add Day
        </button>
      </div>

      {/* Inclusions & Exclusions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(["inclusions", "exclusions"] as const).map((field) => (
          <div key={field} className={SECTION}>
            <p className={SECTION_TITLE}>{field === "inclusions" ? "✓ What's Included" : "✗ Not Included"}</p>
            {form[field].map((item, i) => (
              <div key={i} className="flex gap-2">
                <input className={INPUT} value={item} onChange={(e) => setArrayItem(field, i, e.target.value)} placeholder={`Item ${i + 1}`} />
                {form[field].length > 1 && (
                  <button onClick={() => removeArrayItem(field, i)} className="text-red-400 hover:text-red-600 flex-shrink-0"><Trash2 size={15} /></button>
                )}
              </div>
            ))}
            <button onClick={() => addArrayItem(field)} className="text-xs text-[#0B3D2E] font-semibold flex items-center gap-1 hover:underline">
              <Plus size={13} /> Add Item
            </button>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div className={SECTION}>
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <p className={SECTION_TITLE}>Photo Gallery</p>
            <p className="text-xs text-gray-500 mt-0.5">Additional photos shown in the gallery on the tour page.</p>
          </div>
          <button
            type="button"
            disabled={galleryUploading}
            onClick={() => galleryInputRef.current?.click()}
            className="flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#002800] disabled:opacity-60 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors flex-shrink-0"
          >
            {galleryUploading ? (
              <>
                <Loader2 size={13} className="animate-spin" />
                {galleryProgress.done}/{galleryProgress.total} uploading…
              </>
            ) : (
              <>
                <Images size={13} />
                Add Multiple Photos
              </>
            )}
          </button>
          <input
            ref={galleryInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.length) handleGalleryMultiUpload(e.target.files);
              e.target.value = "";
            }}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
          {form.gallery.map((url, i) => (
            <div key={i} className="space-y-2">
              <ImageUpload
                value={url}
                onChange={(newUrl) => setArrayItem("gallery", i, newUrl)}
                folder="gallery"
                aspectRatio="aspect-square"
                label={`Photo ${i + 1}`}
              />
              {form.gallery.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem("gallery", i)}
                  className="text-xs text-red-400 hover:text-red-600 flex items-center gap-1 w-full justify-center"
                >
                  <Trash2 size={11} /> Remove
                </button>
              )}
            </div>
          ))}
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => addArrayItem("gallery")}
              className="w-full aspect-square rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#0B3D2E]/40 flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-[#0B3D2E] transition-colors"
            >
              <Plus size={24} />
              <span className="text-xs font-medium">Add Photo</span>
            </button>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className={SECTION}>
        <p className={SECTION_TITLE}>Frequently Asked Questions</p>
        <div className="space-y-4">
          {form.faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-4 space-y-3 bg-gray-50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500">FAQ {i + 1}</span>
                {form.faqs.length > 1 && (
                  <button onClick={() => setField("faqs", form.faqs.filter((_, idx) => idx !== i))} className="text-red-400 hover:text-red-600 text-xs flex items-center gap-1">
                    <Trash2 size={13} /> Remove
                  </button>
                )}
              </div>
              <input className={INPUT} value={faq.question} onChange={(e) => setFaq(i, "question", e.target.value)} placeholder="Question" />
              <textarea className={TEXTAREA} rows={2} value={faq.answer} onChange={(e) => setFaq(i, "answer", e.target.value)} placeholder="Answer" />
            </div>
          ))}
        </div>
        <button onClick={() => setField("faqs", [...form.faqs, { question: "", answer: "" }])} className="text-xs text-[#0B3D2E] font-semibold flex items-center gap-1 hover:underline">
          <Plus size={13} /> Add FAQ
        </button>
      </div>

      {/* Save button */}
      <div className="flex gap-3 pb-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#002800] disabled:opacity-60 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          <Save size={15} />
          {saving ? "Saving..." : "Save Package"}
        </button>
        <button onClick={() => router.back()} className="text-sm text-gray-500 hover:text-gray-900 px-4 py-3 rounded-xl border border-gray-200 transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
}
