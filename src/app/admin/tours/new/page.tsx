import { supabaseAdmin } from "@/lib/supabase-server";
import TourForm from "@/components/admin/TourForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "New Tour Package" };

export default async function NewTourPage() {
  const { data: destinations } = await supabaseAdmin
    .from("destinations")
    .select("slug, name")
    .order("name");

  return (
    <TourForm
      destinationOptions={(destinations ?? []).map((d) => ({ slug: d.slug, name: d.name }))}
    />
  );
}
