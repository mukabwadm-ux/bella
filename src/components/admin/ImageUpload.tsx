"use client";
import { useRef, useState } from "react";
import { Upload, ImageIcon, Loader2, X, FolderOpen } from "lucide-react";
import MediaPickerModal from "./MediaPickerModal";

interface Props {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  aspectRatio?: string;
  label?: string;
}

export default function ImageUpload({
  value,
  onChange,
  folder = "tours",
  aspectRatio = "aspect-[16/9]",
  label = "Featured Image",
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [pickerOpen, setPickerOpen] = useState(false);

  async function handleFile(file: File) {
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("Image must be under 10 MB.");
      return;
    }

    setUploading(true);
    setError("");

    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", folder);

      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      onChange(data.url);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-gray-600">{label}</p>

      {/* Drop zone / preview */}
      <div
        className={`relative ${aspectRatio} rounded-2xl overflow-hidden cursor-pointer group border-2 ${
          value ? "border-transparent" : "border-dashed border-gray-200 hover:border-[#0B3D2E]/40"
        } bg-gray-50 transition-colors`}
        onClick={() => !uploading && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); }}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files[0];
          if (file) handleFile(file);
        }}
      >
        {value ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={value} alt="" className="w-full h-full object-cover" />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
              <Upload size={24} className="text-white" />
              <p className="text-white text-sm font-semibold">Click to replace</p>
            </div>
            {/* Remove button */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onChange(""); }}
              className="absolute top-3 right-3 w-7 h-7 bg-black/60 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
            >
              <X size={14} className="text-white" />
            </button>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-400">
            {uploading ? (
              <>
                <Loader2 size={32} className="animate-spin text-[#0B3D2E]" />
                <p className="text-sm text-[#0B3D2E] font-medium">Uploading...</p>
              </>
            ) : (
              <>
                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <ImageIcon size={28} className="text-gray-300" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-500">Click to upload image</p>
                  <p className="text-xs text-gray-400 mt-0.5">or drag and drop here</p>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG, WebP — max 10 MB</p>
                </div>
              </>
            )}
          </div>
        )}

        {/* Loading overlay when replacing */}
        {uploading && value && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Loader2 size={32} className="animate-spin text-white" />
          </div>
        )}
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}

      {/* Browse library button */}
      <button
        type="button"
        onClick={() => setPickerOpen(true)}
        className="flex items-center gap-2 text-xs text-[#0B3D2E] font-medium hover:underline"
      >
        <FolderOpen size={13} />
        Browse Media Library
      </button>

      <MediaPickerModal
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={(url) => { onChange(url); setPickerOpen(false); }}
      />

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}
