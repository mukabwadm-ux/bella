import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient, supabaseAdmin } from "@/lib/supabase-server";

export async function POST(request: NextRequest) {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const folder = (formData.get("folder") as string) || "uploads";

  if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });
  const isImage = file.type.startsWith("image/");
  const isPdf = file.type === "application/pdf";
  if (!isImage && !isPdf) return NextResponse.json({ error: "File must be an image or PDF" }, { status: 400 });
  if (file.size > 20 * 1024 * 1024) return NextResponse.json({ error: "File must be under 20 MB" }, { status: 400 });

  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const filename = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

  const bytes = await file.arrayBuffer();

  const { data, error } = await supabaseAdmin.storage
    .from("bella-images")
    .upload(filename, bytes, {
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    // If bucket doesn't exist yet, surface a clear message
    if (error.message.includes("Bucket not found") || error.message.includes("bucket")) {
      return NextResponse.json(
        { error: 'Storage bucket "bella-images" not found. Please create it in your Supabase dashboard under Storage.' },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { data: { publicUrl } } = supabaseAdmin.storage
    .from("bella-images")
    .getPublicUrl(data.path);

  return NextResponse.json({ url: publicUrl });
}
