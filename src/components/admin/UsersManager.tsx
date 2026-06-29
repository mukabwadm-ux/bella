"use client";
import { useState } from "react";
import { UserPlus, Trash2, ShieldCheck, PenLine, Mail, Loader2, RefreshCw } from "lucide-react";

interface UserRow {
  id: string;
  email: string;
  full_name: string | null;
  role: "admin" | "editor";
  created_at: string;
}

const INPUT = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]/20 focus:border-[#0B3D2E] transition-colors bg-white";
const LABEL = "block text-xs font-semibold text-gray-600 mb-1.5";

const roleConfig = {
  admin:  { label: "Admin",  classes: "bg-[#0B3D2E]/10 text-[#0B3D2E]",  icon: ShieldCheck },
  editor: { label: "Editor", classes: "bg-[#D98200]/10 text-[#D98200]", icon: PenLine },
};

export default function UsersManager({ initialUsers }: { initialUsers: UserRow[] }) {
  const [users, setUsers] = useState<UserRow[]>(initialUsers);
  const [showInvite, setShowInvite] = useState(false);
  const [inviteForm, setInviteForm] = useState({ email: "", full_name: "", role: "editor" });
  const [inviting, setInviting] = useState(false);
  const [inviteError, setInviteError] = useState("");
  const [inviteSuccess, setInviteSuccess] = useState(false);
  const [changingRole, setChangingRole] = useState<string | null>(null);
  const [removing, setRemoving] = useState<string | null>(null);

  async function handleInvite(e: React.FormEvent) {
    e.preventDefault();
    setInviting(true);
    setInviteError("");
    setInviteSuccess(false);
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inviteForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Invite failed");
      setInviteSuccess(true);
      setInviteForm({ email: "", full_name: "", role: "editor" });
      setShowInvite(false);
      // Refresh list
      const updated = await fetch("/api/admin/users").then((r) => r.json());
      setUsers(updated);
    } catch (err: unknown) {
      setInviteError(err instanceof Error ? err.message : "Invite failed");
    } finally {
      setInviting(false);
    }
  }

  async function handleRoleChange(userId: string, newRole: string) {
    setChangingRole(userId);
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole }),
      });
      if (!res.ok) {
        const d = await res.json();
        alert(d.error ?? "Failed to change role");
        return;
      }
      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, role: newRole as "admin" | "editor" } : u))
      );
    } finally {
      setChangingRole(null);
    }
  }

  async function handleRemove(user: UserRow) {
    if (!confirm(`Remove ${user.full_name ?? user.email} from the admin panel? This cannot be undone.`)) return;
    setRemoving(user.id);
    try {
      const res = await fetch(`/api/admin/users/${user.id}`, { method: "DELETE" });
      if (!res.ok) {
        const d = await res.json();
        alert(d.error ?? "Failed to remove user");
        return;
      }
      setUsers((prev) => prev.filter((u) => u.id !== user.id));
    } finally {
      setRemoving(null);
    }
  }

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-500 text-sm mt-1">{users.length} user{users.length !== 1 ? "s" : ""} with dashboard access</p>
        </div>
        <button
          onClick={() => { setShowInvite((o) => !o); setInviteError(""); setInviteSuccess(false); }}
          className="flex items-center gap-2 bg-[#D98200] hover:bg-[#c07300] text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
        >
          <UserPlus size={16} /> Invite User
        </button>
      </div>

      {/* Invite success banner */}
      {inviteSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
          <Mail size={15} />
          Invite sent! The user will receive an email with a link to set their password and access the dashboard.
        </div>
      )}

      {/* Invite form */}
      {showInvite && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Invite New User</h2>
          <form onSubmit={handleInvite} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={LABEL}>Full Name</label>
                <input
                  className={INPUT}
                  value={inviteForm.full_name}
                  onChange={(e) => setInviteForm((f) => ({ ...f, full_name: e.target.value }))}
                  placeholder="e.g. Jane Kamau"
                />
              </div>
              <div>
                <label className={LABEL}>Email Address *</label>
                <input
                  type="email"
                  required
                  className={INPUT}
                  value={inviteForm.email}
                  onChange={(e) => setInviteForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div>
              <label className={LABEL}>Role *</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(["admin", "editor"] as const).map((r) => {
                  const cfg = roleConfig[r];
                  const Icon = cfg.icon;
                  const selected = inviteForm.role === r;
                  return (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setInviteForm((f) => ({ ...f, role: r }))}
                      className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-colors ${
                        selected ? "border-[#0B3D2E] bg-[#0B3D2E]/5" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Icon size={18} className={selected ? "text-[#0B3D2E]" : "text-gray-400"} />
                      <div>
                        <p className={`text-sm font-semibold ${selected ? "text-[#0B3D2E]" : "text-gray-700"}`}>{cfg.label}</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {r === "admin"
                            ? "Full access — can create, edit, and delete everything."
                            : "Can create and edit tours and blog posts. Cannot delete."}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {inviteError && (
              <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">{inviteError}</p>
            )}

            <div className="flex gap-3 pt-1">
              <button
                type="submit"
                disabled={inviting}
                className="flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#002800] disabled:opacity-60 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                {inviting ? <><Loader2 size={14} className="animate-spin" /> Sending invite…</> : <><Mail size={14} /> Send Invite</>}
              </button>
              <button
                type="button"
                onClick={() => setShowInvite(false)}
                className="text-sm text-gray-500 hover:text-gray-900 px-4 py-2.5 rounded-xl border border-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Users list */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {users.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-gray-400 text-sm">No users yet. Invite someone to get started.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {users.map((user) => {
              const cfg = roleConfig[user.role];
              const Icon = cfg.icon;
              const isChanging = changingRole === user.id;
              const isRemoving = removing === user.id;

              return (
                <div key={user.id} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[#0B3D2E]/10 flex items-center justify-center flex-shrink-0 font-bold text-[#0B3D2E] text-sm">
                    {(user.full_name ?? user.email).charAt(0).toUpperCase()}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 truncate">
                      {user.full_name ?? <span className="text-gray-400 font-normal italic">No name set</span>}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>

                  {/* Role badge */}
                  <span className={`hidden sm:flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${cfg.classes}`}>
                    <Icon size={11} />
                    {cfg.label}
                  </span>

                  {/* Role change dropdown */}
                  <div className="flex items-center gap-2">
                    {isChanging ? (
                      <RefreshCw size={14} className="animate-spin text-gray-400" />
                    ) : (
                      <select
                        value={user.role}
                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                        className="text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 bg-white text-gray-700 focus:outline-none focus:border-[#0B3D2E] cursor-pointer"
                      >
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                      </select>
                    )}

                    {isRemoving ? (
                      <Loader2 size={15} className="animate-spin text-gray-400" />
                    ) : (
                      <button
                        onClick={() => handleRemove(user)}
                        className="p-1.5 text-gray-300 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                        title="Remove user"
                      >
                        <Trash2 size={15} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Role legend */}
      <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 space-y-3">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Role Permissions</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-600">
          <div className="space-y-1.5">
            <p className="font-semibold text-[#0B3D2E] flex items-center gap-1.5"><ShieldCheck size={13} /> Admin</p>
            <ul className="space-y-1 ml-5 list-disc">
              <li>Full access to all pages</li>
              <li>Create, edit, and <strong>delete</strong> tours and blog posts</li>
              <li>Manage destinations and contact form</li>
              <li>Invite and remove users</li>
            </ul>
          </div>
          <div className="space-y-1.5">
            <p className="font-semibold text-[#D98200] flex items-center gap-1.5"><PenLine size={13} /> Editor</p>
            <ul className="space-y-1 ml-5 list-disc">
              <li>Access to Tour Packages and Blog Posts only</li>
              <li>Can create and edit — <strong>cannot delete</strong></li>
              <li>Cannot access Destinations, Contact Form, or Users</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
