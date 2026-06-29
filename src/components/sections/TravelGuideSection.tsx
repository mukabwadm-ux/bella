import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const guides = [
  {
    title: "Best Time to Visit the Maasai Mara",
    description: "Understand the Great Migration calendar, rainfall patterns, and the best months for game viewing.",
    href: "/blog/best-time-to-visit-maasai-mara",
    tag: "Planning",
  },
  {
    title: "What to Pack for a Kenyan Safari",
    description: "A comprehensive packing list vetted by our expert guides — from clothing colours to essential gadgets.",
    href: "/blog/what-to-pack-for-a-kenyan-safari",
    tag: "Travel Tips",
  },
  {
    title: "Discovering Romance in East Africa",
    description: "Why East Africa is the world's most extraordinary honeymoon destination — and how we make it seamless.",
    href: "/blog/discovering-romance-in-east-africa",
    tag: "Honeymoon",
  },
];

export default function TravelGuideSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: image */}
          <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
            <Image
              src="/images/Ramada-2-1.jpg"
              alt="Safari planning guide"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-wider text-savanna-gold mb-1">Featured Story</p>
              <h4 className="text-sm font-semibold text-safari-green leading-snug mb-2">
                Discovering Romance in East Africa
              </h4>
              <Link
                href="/blog/discovering-romance-in-east-africa"
                className="inline-flex items-center gap-1 text-xs font-semibold text-savanna-gold hover:text-sunlit-gold transition-colors"
              >
                Read the Full Story <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Travel Resources"
              title="Your Complete Safari Planning Guide"
              subtitle="Everything you need to know before you go — from the best travel windows to what to pack for the bush."
            />

            <div className="space-y-4">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group flex gap-4 items-start p-4 rounded-xl hover:bg-green-tint transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-savanna-gold flex-shrink-0 mt-2" />
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-savanna-gold uppercase tracking-wide">
                      {guide.tag}
                    </span>
                    <h4 className="text-sm font-semibold text-safari-green mt-0.5 mb-1 group-hover:text-savanna-gold transition-colors">
                      {guide.title}
                    </h4>
                    <p className="text-xs text-muted-text leading-relaxed">{guide.description}</p>
                  </div>
                  <ArrowRight size={14} className="text-muted-text group-hover:text-savanna-gold transition-colors flex-shrink-0 mt-1" />
                </Link>
              ))}
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold bg-safari-green hover:bg-forest-ink text-white px-6 py-3 rounded-full transition-colors"
            >
              Browse All Guides
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
