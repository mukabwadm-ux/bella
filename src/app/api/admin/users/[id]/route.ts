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

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const admin = await getAuthedAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  // Prevent changing own role
  if (admin.id === params.id) {
    return NextResponse.json({ error: "You cannot change your own role." }, { status: 400 });
  }

  const { role } = await request.json();
  if (!["admin", "editor"].includes(role)) {
    return NextResponse.json({ error: "Invalid role." }, { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from("user_roles")
    .update({ role })
    .eq("id", params.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const admin = await getAuthedAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  // Prevent self-deletion
  if (admin.id === params.id) {
    return NextResponse.json({ error: "You cannot remove your own account." }, { status: 400 });
  }

  // Delete from auth (cascades to user_roles via FK)
  const { error } = await supabaseAdmin.auth.admin.deleteUser(params.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}
