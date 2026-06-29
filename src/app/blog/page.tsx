import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { getAllBlogPosts } from "@/lib/supabase";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Travel Stories & Safari Guides",
  description:
    "Insider guides, travel stories, and expert advice to help you plan your perfect East Africa safari.",
};

const categoryColors: Record<string, string> = {
  Honeymoon: "bg-pink-50 text-pink-700",
  "Travel Guide": "bg-green-tint text-safari-green",
  "Travel Tips": "bg-gold-tint text-savanna-gold",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  if (!posts.length) return null;
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="bg-safari-green py-20 md:py-28">
        <div className="container-xl text-center">
          <span className="inline-block text-savanna-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Stories & Guides
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Extraordinary Travel Stories
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Inspiration, insider guides, and Q&amp;As to help you take the first step towards your East Africa adventure.
          </p>
        </div>
      </section>

      <section className="section-pad bg-sand">
        <div className="container-xl">

          {/* Featured post */}
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-savanna-gold mb-5">
              Featured Story
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-surface rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 md:h-auto min-h-[320px]">
                <Image
                  src={featured.cover_image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit ${
                    categoryColors[featured.category] ?? "bg-green-tint text-safari-green"
                  }`}
                >
                  {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-safari-green mb-3 group-hover:text-savanna-gold transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-muted-text text-sm leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-text">
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {featured.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(featured.published_at).toLocaleDateString("en-KE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-savanna-gold">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.cover_image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span
                    className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
                      categoryColors[post.category] ?? "bg-green-tint text-safari-green"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-safari-green mb-2 group-hover:text-savanna-gold transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-text leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-muted-text">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {new Date(post.published_at).toLocaleDateString("en-KE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-savanna-gold">
                      Read More <ArrowRight size={12} />
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-xs text-muted-text bg-sand px-2 py-0.5 rounded-full">
                        <Tag size={9} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
