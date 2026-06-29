"use client";

import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";

export default function DeleteTourButton({ id, title }: { id: string; title: string }) {
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/tours/${id}`, { method: "DELETE" });
      if (res.ok) {
        window.location.href = `/admin/tours?t=${Date.now()}`;
      } else {
        const d = await res.json();
        alert(`Delete failed: ${d.error ?? res.status}`);
        setDeleting(false);
      }
    } catch {
      alert("Delete failed — network error.");
      setDeleting(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={deleting}
      aria-label="Delete tour"
      className="flex items-center justify-center w-7 h-7 text-red-400 hover:text-red-600 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-lg transition-colors disabled:opacity-50"
    >
      {deleting ? <Loader2 size={13} className="animate-spin" /> : <Trash2 size={13} />}
    </button>
  );
}
