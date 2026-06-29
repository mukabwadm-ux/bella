import { NextRequest, NextResponse } from "next/server";
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

export async function GET() {
  const admin = await getAuthedAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { data, error } = await supabaseAdmin
    .from("user_roles")
    .select("id, email, full_name, role, created_at")
    .order("created_at");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const admin = await getAuthedAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { email, full_name, role } = await request.json();
  if (!email) return NextResponse.json({ error: "Email is required." }, { status: 400 });
  if (!["admin", "editor"].includes(role)) return NextResponse.json({ error: "Invalid role." }, { status: 400 });

  // Check if user already exists in our roles table
  const { data: existing } = await supabaseAdmin
    .from("user_roles")
    .select("id")
    .eq("email", email.toLowerCase())
    .maybeSingle();

  if (existing) return NextResponse.json({ error: "A user with this email already exists." }, { status: 409 });

  // Invite via Supabase Auth — sends email with a magic link
  const { data: inviteData, error: inviteError } = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
    data: { full_name: full_name ?? "" },
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/admin`,
  });

  if (inviteError) return NextResponse.json({ error: inviteError.message }, { status: 500 });

  // Insert into user_roles
  const { error: roleError } = await supabaseAdmin.from("user_roles").insert([{
    id: inviteData.user.id,
    email: email.toLowerCase(),
    full_name: full_name?.trim() ?? null,
    role,
  }]);

  if (roleError) return NextResponse.json({ error: roleError.message }, { status: 500 });
  return NextResponse.json({ success: true, userId: inviteData.user.id }, { status: 201 });
}
