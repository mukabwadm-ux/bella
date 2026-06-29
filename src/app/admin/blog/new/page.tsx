import BlogForm from "@/components/admin/BlogForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "New Blog Post" };

export default function NewBlogPage() {
  return <BlogForm />;
}
