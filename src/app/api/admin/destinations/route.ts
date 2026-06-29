import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient, supabaseAdmin } from "@/lib/supabase-server";

export async function GET() {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabaseAdmin
    .from("destinations")
    .select("*")
    .order("name");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...payload } = body;

  // Check slug uniqueness
  const { data: existing } = await supabaseAdmin
    .from("destinations")
    .select("id")
    .eq("slug", payload.slug)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({ error: `A destination with slug "${payload.slug}" already exists.` }, { status: 409 });
  }

  const { data, error } = await supabaseAdmin
    .from("destinations")
    .insert([payload])
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}
