import { supabaseAdmin } from "@/lib/supabase-server";
import { notFound } from "next/navigation";
import BlogForm from "@/components/admin/BlogForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Edit Blog Post" };

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  const { data: post } = await supabaseAdmin
    .from("blog_posts")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!post) notFound();

  return (
    <BlogForm
      initial={{
        ...post,
        tags: Array.isArray(post.tags) ? post.tags.join(", ") : (post.tags ?? ""),
        seo_title: post.seo_title ?? "",
        meta_description: post.meta_description ?? "",
        focus_keyword: post.focus_keyword ?? "",
        cover_image_alt: post.cover_image_alt ?? "",
      }}
      isEdit
    />
  );
}
