import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getUserRole } from "@/lib/roles";

export async function GET() {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ role: null }, { status: 401 });

  const role = await getUserRole(user.id);
  return NextResponse.json({ role });
}
