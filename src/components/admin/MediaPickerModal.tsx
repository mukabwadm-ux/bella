"use client";

import { X } from "lucide-react";
import MediaLibrary, { type MediaFile } from "./MediaLibrary";

interface Props {
  open: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
}

export default function MediaPickerModal({ open, onClose, onSelect }: Props) {
  if (!open) return null;

  function handleSelect(file: MediaFile) {
    onSelect(file.url);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Media Library"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 className="font-semibold text-gray-900 text-sm">Media Library</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Click a file to select it, or upload a new one
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Library content */}
        <div className="flex-1 overflow-y-auto p-5">
          <MediaLibrary pickerMode onSelect={handleSelect} />
        </div>
      </div>
    </div>
  );
}
