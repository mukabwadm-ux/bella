"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Upload, Loader2, Trash2, Copy, Check, FileText, Search, X, ImageIcon,
} from "lucide-react";

export interface MediaFile {
  name: string;
  path: string;
  url: string;
  size: number;
  type: "image" | "pdf" | "other";
  created_at: string;
}

interface Props {
  /** picker mode: shows Select button instead of just copy/delete */
  pickerMode?: boolean;
  onSelect?: (file: MediaFile) => void;
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MediaLibrary({ pickerMode = false, onSelect }: Props) {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "image" | "pdf">("all");
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchFiles = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/media");
      const data = await res.json();
      setFiles(data.files ?? []);
    } catch {
      setFiles([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchFiles(); }, [fetchFiles]);

  async function handleUpload(file: File) {
    setUploading(true);
    setUploadError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", file.type === "application/pdf" ? "pdfs" : "media");
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      await fetchFiles();
    } catch (e: unknown) {
      setUploadError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(file: MediaFile) {
    if (!confirm(`Delete "${file.name}"? This cannot be undone.`)) return;
    setDeleting(file.path);
    try {
      await fetch("/api/admin/media", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: file.path }),
      });
      setFiles((f) => f.filter((x) => x.path !== file.path));
    } finally {
      setDeleting(null);
    }
  }

  function copyUrl(url: string) {
    navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
  }

  const filtered = files.filter((f) => {
    const matchType = filter === "all" || f.type === filter;
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="space-y-4">
      {/* Upload zone */}
      <div
        className="border-2 border-dashed border-gray-200 hover:border-[#0B3D2E]/40 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-gray-50"
        onClick={() => !uploading && inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files[0];
          if (file) handleUpload(file);
        }}
      >
        {uploading ? (
          <div className="flex flex-col items-center gap-2">
            <Loader2 size={28} className="animate-spin text-[#0B3D2E]" />
            <p className="text-sm text-[#0B3D2E] font-medium">Uploading…</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
              <Upload size={22} className="text-gray-400" />
            </div>
            <p className="text-sm font-semibold text-gray-600">Click to upload or drag & drop</p>
            <p className="text-xs text-gray-400">JPG, PNG, WebP, PDF — max 20 MB</p>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*,application/pdf"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleUpload(f);
            e.target.value = "";
          }}
        />
      </div>
      {uploadError && <p className="text-xs text-red-500">{uploadError}</p>}

      {/* Filters + search */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search files…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#0B3D2E] bg-white"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X size={13} />
            </button>
          )}
        </div>
        <div className="flex gap-1">
          {(["all", "image", "pdf"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-2 text-xs font-medium rounded-lg capitalize transition-colors ${
                filter === f
                  ? "bg-[#0B3D2E] text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-[#0B3D2E]"
              }`}
            >
              {f === "all" ? "All" : f === "image" ? "Images" : "PDFs"}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 size={28} className="animate-spin text-[#0B3D2E]" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <ImageIcon size={36} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">{files.length === 0 ? "No files uploaded yet." : "No files match your search."}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtered.map((file) => (
            <div
              key={file.path}
              className={`group relative rounded-xl border border-gray-100 bg-white overflow-hidden transition-shadow hover:shadow-md ${
                pickerMode ? "cursor-pointer" : ""
              }`}
              onClick={pickerMode ? () => onSelect?.(file) : undefined}
            >
              {/* Thumbnail */}
              <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                {file.type === "image" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <FileText size={32} className="text-[#D98200]" />
                    <span className="text-xs font-semibold text-[#D98200] uppercase">PDF</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-2">
                <p className="text-xs font-medium text-gray-700 truncate" title={file.name}>
                  {file.name}
                </p>
                <p className="text-xs text-gray-400">{formatBytes(file.size)}</p>
              </div>

              {/* Hover actions */}
              {!pickerMode && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); copyUrl(file.url); }}
                    title="Copy URL"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    {copied === file.url ? (
                      <Check size={14} className="text-green-600" />
                    ) : (
                      <Copy size={14} className="text-gray-700" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handleDelete(file); }}
                    title="Delete"
                    disabled={deleting === file.path}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-colors"
                  >
                    {deleting === file.path ? (
                      <Loader2 size={14} className="animate-spin text-gray-400" />
                    ) : (
                      <Trash2 size={14} className="text-red-500" />
                    )}
                  </button>
                </div>
              )}

              {/* Picker select overlay */}
              {pickerMode && (
                <div className="absolute inset-0 bg-[#0B3D2E]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-[#0B3D2E] text-xs font-bold px-3 py-1.5 rounded-full">
                    Select
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {!loading && filtered.length > 0 && (
        <p className="text-xs text-gray-400 text-right">
          {filtered.length} file{filtered.length !== 1 ? "s" : ""}
          {filter !== "all" || search ? ` (filtered from ${files.length} total)` : ""}
        </p>
      )}
    </div>
  );
}
