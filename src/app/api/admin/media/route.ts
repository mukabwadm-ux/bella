import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient, supabaseAdmin } from "@/lib/supabase-server";

const BUCKET = "bella-images";
const SUBFOLDERS = ["tours", "blog", "destinations", "uploads", "pdfs", "media"];

async function listBucketFiles() {
  const allFiles: Array<{
    name: string;
    path: string;
    url: string;
    size: number;
    type: "image" | "pdf" | "other";
    created_at: string;
  }> = [];

  // List root-level files
  const { data: rootItems } = await supabaseAdmin.storage
    .from(BUCKET)
    .list("", { limit: 500, sortBy: { column: "created_at", order: "desc" } });

  for (const item of rootItems ?? []) {
    if (item.metadata) {
      const { data: { publicUrl } } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(item.name);
      const mime = item.metadata?.mimetype ?? "";
      allFiles.push({
        name: item.name,
        path: item.name,
        url: publicUrl,
        size: item.metadata?.size ?? 0,
        type: mime.startsWith("image/") ? "image" : mime === "application/pdf" ? "pdf" : "other",
        created_at: item.created_at ?? "",
      });
    }
  }

  // List known subfolders
  for (const folder of SUBFOLDERS) {
    const { data: items } = await supabaseAdmin.storage
      .from(BUCKET)
      .list(folder, { limit: 500, sortBy: { column: "created_at", order: "desc" } });

    for (const item of items ?? []) {
      if (item.metadata) {
        const path = `${folder}/${item.name}`;
        const { data: { publicUrl } } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(path);
        const mime = item.metadata?.mimetype ?? "";
        allFiles.push({
          name: item.name,
          path,
          url: publicUrl,
          size: item.metadata?.size ?? 0,
          type: mime.startsWith("image/") ? "image" : mime === "application/pdf" ? "pdf" : "other",
          created_at: item.created_at ?? "",
        });
      }
    }
  }

  // Sort newest first
  return allFiles.sort((a, b) => (b.created_at > a.created_at ? 1 : -1));
}

export async function GET() {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const files = await listBucketFiles();
    return NextResponse.json({ files });
  } catch {
    return NextResponse.json({ error: "Failed to list files" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { path } = await req.json();
  if (!path) return NextResponse.json({ error: "Path required" }, { status: 400 });

  const { error } = await supabaseAdmin.storage.from(BUCKET).remove([path]);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
