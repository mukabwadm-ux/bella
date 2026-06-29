import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-server";
import { toursData } from "@/lib/tours-data";
import { destinationsData } from "@/lib/destinations-data";

export async function POST() {
  // 1. Upsert all tours from local data
  const toursToSync = toursData.map((t) => ({
    slug: t.slug,
    title: t.title,
    summary: t.summary,
    hero_image: t.hero_image,
    duration: t.duration,
    group_size: t.group_size,
    price_from_kes: t.price_from_kes,
    difficulty: t.difficulty,
    category: t.category,
    destinations: t.destinations,
    highlights: t.highlights,
    itinerary: t.itinerary,
    inclusions: t.inclusions,
    exclusions: t.exclusions,
    gallery: t.gallery,
    faqs: t.faqs,
    featured: t.featured,
    best_seller: t.best_seller,
  }));

  const { error: toursError } = await supabaseAdmin
    .from("tours")
    .upsert(toursToSync, { onConflict: "slug" });

  if (toursError) {
    return NextResponse.json({ error: toursError.message }, { status: 500 });
  }

  // 2. Delete stale tours no longer in local data
  const { data: existing } = await supabaseAdmin
    .from("tours")
    .select("slug");

  const activeSlugs = toursData.map((t) => t.slug);
  const staleSlugs = (existing ?? [])
    .map((r) => r.slug as string)
    .filter((s) => !activeSlugs.includes(s));

  if (staleSlugs.length > 0) {
    await supabaseAdmin.from("tours").delete().in("slug", staleSlugs);
  }

  // 3. Upsert all destinations from local data
  const destinationsToSync = destinationsData.map((d) => ({
    slug: d.slug,
    name: d.name,
    country: d.country,
    region: d.region,
    short_description: d.short_description,
    long_description: d.long_description ?? "",
    hero_image: d.hero_image,
    best_time: d.best_time,
    climate: d.climate,
    highlights: d.highlights,
    about: d.about,
    featured: d.featured,
  }));

  const { error: destError } = await supabaseAdmin
    .from("destinations")
    .upsert(destinationsToSync, { onConflict: "slug" });

  if (destError) {
    return NextResponse.json({ error: destError.message }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    tours: { synced: toursToSync.length, deleted: staleSlugs.length, stale: staleSlugs },
    destinations: { synced: destinationsToSync.length },
  });
}
