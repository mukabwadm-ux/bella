import { supabaseAdmin } from "@/lib/supabase-server";
import { notFound } from "next/navigation";
import DestinationForm from "@/components/admin/DestinationForm";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Edit Destination" };

export default async function EditDestinationPage({ params }: { params: { id: string } }) {
  const { data: dest } = await supabaseAdmin
    .from("destinations")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!dest) notFound();

  return (
    <DestinationForm
      initial={{
        ...dest,
        hero_image_alt: dest.hero_image_alt ?? "",
        highlights: Array.isArray(dest.highlights) ? dest.highlights : [],
        about: dest.about ?? "",
      }}
      isEdit
    />
  );
}
