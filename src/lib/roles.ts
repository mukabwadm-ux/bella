import { supabaseAdmin } from "./supabase-server";

export type UserRole = "admin" | "editor";

export async function getUserRole(userId: string): Promise<UserRole | null> {
  const { data } = await supabaseAdmin
    .from("user_roles")
    .select("role")
    .eq("id", userId)
    .single();
  return (data?.role as UserRole) ?? null;
}

export async function requireAdmin(userId: string): Promise<boolean> {
  const role = await getUserRole(userId);
  return role === "admin";
}
