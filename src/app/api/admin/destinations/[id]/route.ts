import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { createSupabaseServerClient, supabaseAdmin } from "@/lib/supabase-server";
import { getUserRole } from "@/lib/roles";

async function getAuthedAdmin() {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const role = await getUserRole(user.id);
  if (role !== "admin") return null;
  return user;
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const user = await getAuthedAdmin();
  if (!user) return NextResponse.json({ error: "Forbidden — admin only." }, { status: 403 });

  const body = await request.json();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, created_at, ...payload } = body;

  // Prevent slug collision on edit
  if (payload.slug) {
    const { data: existing } = await supabaseAdmin
      .from("destinations")
      .select("id")
      .eq("slug", payload.slug)
      .neq("id", params.id)
      .maybeSingle();
    if (existing) {
      return NextResponse.json({ error: `Slug "${payload.slug}" is already in use.` }, { status: 409 });
    }
  }

  const { data, error } = await supabaseAdmin
    .from("destinations")
    .update(payload)
    .eq("id", params.id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  revalidatePath("/");
  revalidatePath("/destinations");
  if (data?.slug) revalidatePath(`/destinations/${data.slug}`);

  return NextResponse.json(data);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const user = await getAuthedAdmin();
  if (!user) return NextResponse.json({ error: "Forbidden — admin only." }, { status: 403 });

  const { data: dest } = await supabaseAdmin.from("destinations").select("slug").eq("id", params.id).single();
  const { error } = await supabaseAdmin.from("destinations").delete().eq("id", params.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  revalidatePath("/");
  revalidatePath("/destinations");
  if (dest?.slug) revalidatePath(`/destinations/${dest.slug}`);

  return NextResponse.json({ success: true });
}
