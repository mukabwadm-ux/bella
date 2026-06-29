import { supabaseAdmin } from "@/lib/supabase-server";
import UsersManager from "@/components/admin/UsersManager";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Users" };
export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
  const { data: users } = await supabaseAdmin
    .from("user_roles")
    .select("id, email, full_name, role, created_at")
    .order("created_at");

  return <UsersManager initialUsers={users ?? []} />;
}
