import MediaLibrary from "@/components/admin/MediaLibrary";

export default function AdminMediaPage() {
  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Media Library</h1>
        <p className="text-gray-500 text-sm mt-0.5">
          Upload and manage images and PDFs. Select any file to copy its URL.
        </p>
      </div>
      <MediaLibrary />
    </div>
  );
}
