import { supabaseAdmin } from "@/lib/supabase-server";
import { notFound } from "next/navigation";
import TourForm from "@/components/admin/TourForm";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Edit Tour Package" };

export default async function EditTourPage({ params }: { params: { id: string } }) {
  const [{ data: tour }, { data: destinations }] = await Promise.all([
    supabaseAdmin.from("tours").select("*").eq("id", params.id).single(),
    supabaseAdmin.from("destinations").select("slug, name").order("name"),
  ]);

  if (!tour) notFound();

  return (
    <TourForm
      initial={tour}
      isEdit
      destinationOptions={(destinations ?? []).map((d) => ({ slug: d.slug, name: d.name }))}
    />
  );
}
