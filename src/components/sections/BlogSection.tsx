import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import type { BlogPost } from "@/types";

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  if (!posts.length) return null;

  return (
    <section className="section-pad bg-sand">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Travel Stories"
            title="Extraordinary Travel Stories"
            subtitle="Inspiration, insider guides, and Q&As to help you take the first step."
            className="mb-0"
          />
          <Link
            href="/blog"
            className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-savanna-gold hover:text-sunlit-gold transition-colors"
          >
            View All Articles
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-safari-green text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <p className="flex items-center gap-1.5 text-xs text-muted-text mb-2">
                  <Calendar size={11} />
                  {new Date(post.published_at).toLocaleDateString("en-KE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h3 className="font-semibold text-safari-green text-sm leading-snug mb-2 group-hover:text-savanna-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-text line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
