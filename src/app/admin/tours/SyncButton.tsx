"use client";

import { useState } from "react";
import { RefreshCw, CheckCircle, XCircle } from "lucide-react";

export default function SyncButton() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function handleSync() {
    setState("loading");
    setMsg("");
    try {
      const res = await fetch("/api/admin/sync", { method: "POST" });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Sync failed");
      const { tours, destinations } = json;
      setMsg(
        `Synced ${tours.synced} tours · ${destinations.synced} destinations` +
        (tours.deleted > 0 ? ` · removed ${tours.deleted} stale` : "")
      );
      setState("success");
      setTimeout(() => window.location.reload(), 1200);
    } catch (e: unknown) {
      setMsg(e instanceof Error ? e.message : "Unknown error");
      setState("error");
      setTimeout(() => setState("idle"), 8000);
    }
  }

  return (
    <div className="flex items-center gap-2">
      {state === "success" && (
        <span className="flex items-center gap-1.5 text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-lg">
          <CheckCircle size={13} /> {msg}
        </span>
      )}
      {state === "error" && (
        <span className="flex items-center gap-1.5 text-xs text-red-700 bg-red-50 border border-red-200 px-3 py-1.5 rounded-lg">
          <XCircle size={13} /> {msg}
        </span>
      )}
      <button
        onClick={handleSync}
        disabled={state === "loading"}
        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-60 text-gray-700 font-medium text-sm px-3 py-2 rounded-xl transition-colors"
      >
        <RefreshCw size={14} className={state === "loading" ? "animate-spin" : ""} />
        {state === "loading" ? "Syncing…" : "Sync to Supabase"}
      </button>
    </div>
  );
}
