import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock, Users, TrendingUp, CheckCircle, XCircle,
  ArrowLeft, Phone, Star, MapPin,
} from "lucide-react";
import { getTourBySlug } from "@/lib/supabase";
import { formatKES } from "@/lib/utils";
import ItineraryAccordion from "@/components/shared/ItineraryAccordion";
import TourGallery from "@/components/shared/TourGallery";
import EnquiryForm from "@/components/shared/EnquiryForm";
import TourFAQ from "@/components/shared/TourFAQ";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const tour = await getTourBySlug(params.slug);
  if (!tour) return { title: "Tour Not Found" };
  return {
    title: tour.title,
    description: tour.summary,
  };
}

const difficultyConfig = {
  easy: { label: "Easy", color: "bg-green-tint text-safari-green" },
  moderate: { label: "Moderate", color: "bg-gold-tint text-savanna-gold" },
  challenging: { label: "Challenging", color: "bg-red-50 text-red-700" },
};

export default async function TourPage({ params }: { params: { slug: string } }) {
  const [tour, allTours] = await Promise.all([
    getTourBySlug(params.slug),
    getAllTours(),
  ]);
  if (!tour) notFound();

  const diff = difficultyConfig[tour.difficulty];

  const relatedTours = allTours.filter(
    (t) => t.slug !== tour.slug && t.category === tour.category
  ).slice(0, 2);
  const otherTours = relatedTours.length < 2
    ? [...relatedTours, ...allTours.filter(
        (t) => t.slug !== tour.slug && !relatedTours.includes(t)
      ).slice(0, 2 - relatedTours.length)]
    : relatedTours;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[440px] flex items-end">
        <Image
          src={tour.hero_image}
          alt={tour.hero_image_alt || tour.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/90 via-forest-ink/40 to-transparent" />

        <div className="relative container-xl pb-10 text-white w-full">
          <Link
            href="/tours"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-medium mb-4 transition-colors"
          >
            <ArrowLeft size={13} />
            All Safari Packages
          </Link>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-savanna-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
              {tour.category}
            </span>
            {tour.best_seller && (
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <Star size={10} fill="white" /> Best Seller
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl">
            {tour.title}
          </h1>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-savanna-gold" />
              <span className="text-sm">
                <span className="font-bold">{tour.duration}</span>{" "}
                {tour.duration === 1 ? "Day" : "Days"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-savanna-gold" />
              <span className="text-sm">
                <span className="font-bold">{tour.group_size}</span> People
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-savanna-gold" />
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${diff.color}`}>
                {diff.label}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-savanna-gold" />
              <span className="text-sm capitalize">
                {tour.destinations.join(", ").replace(/-/g, " ")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY PRICE BAR ─────────────────────────── */}
      <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-border shadow-sm">
        <div className="container-xl flex items-center justify-between py-3 gap-4">
          <div>
            {tour.price_from_kes > 0 ? (
              <>
                <span className="text-xs text-muted-text">From</span>
                <span className="text-xl font-bold text-safari-green ml-2">
                  {formatKES(tour.price_from_kes)}
                </span>
                <span className="text-xs text-muted-text ml-1">per person</span>
              </>
            ) : (
              <span className="text-xl font-bold text-safari-green">
                Price on Request
              </span>
            )}
          </div>
          <div className="flex gap-2 sm:gap-3">
            {/* Full WhatsApp button — desktop */}
            <a
              href="https://wa.me/254719888008"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 border-2 border-safari-green text-safari-green hover:bg-safari-green hover:text-white font-semibold text-sm px-4 py-2 rounded-full transition-colors"
            >
              <Phone size={14} />
              WhatsApp Us
            </a>
            {/* Icon-only WhatsApp button — mobile */}
            <a
              href="https://wa.me/254719888008"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="sm:hidden flex items-center justify-center w-9 h-9 border-2 border-safari-green text-safari-green hover:bg-safari-green hover:text-white rounded-full transition-colors flex-shrink-0"
            >
              <Phone size={15} />
            </a>
            <a
              href="#enquire"
              className="bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold text-sm px-4 sm:px-5 py-2 rounded-full transition-colors whitespace-nowrap"
            >
              <span className="hidden sm:inline">Request a Callback</span>
              <span className="sm:hidden">Enquire</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────────── */}
      <div className="bg-sand">
        <div className="container-xl py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT COLUMN — main content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold text-safari-green mb-4">Overview</h2>
                <p className="text-body-text leading-relaxed text-base mb-6">{tour.summary}</p>

                <h3 className="text-base font-semibold text-safari-green mb-3">
                  Trip Highlights
                </h3>
                <ul className="space-y-2.5">
                  {tour.highlights.map((h: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-body-text">
                      <CheckCircle size={16} className="text-safari-green flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tour Details (CMS rich content) */}
              {tour.details && (
                <section>
                  <div
                    className="prose prose-base max-w-none prose-headings:text-safari-green prose-headings:font-bold prose-a:text-savanna-gold prose-strong:text-safari-green prose-li:text-body-text prose-p:text-body-text prose-p:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: tour.details }}
                  />
                </section>
              )}

              {/* Itinerary */}
              {tour.itinerary?.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-safari-green mb-2">Day-by-Day Itinerary</h2>
                <p className="text-sm text-muted-text mb-5">
                  Click each day to expand the details.
                </p>
                <ItineraryAccordion days={tour.itinerary} />
              </section>
              )}

              {/* Inclusions & Exclusions */}
              <section>
                <h2 className="text-2xl font-bold text-safari-green mb-5">
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-surface rounded-2xl p-5">
                    <h3 className="text-sm font-bold text-safari-green uppercase tracking-wider mb-4 flex items-center gap-2">
                      <CheckCircle size={15} className="text-safari-green" />
                      Included
                    </h3>
                    <ul className="space-y-2.5">
                      {tour.inclusions.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-body-text">
                          <span className="w-1.5 h-1.5 rounded-full bg-safari-green flex-shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-surface rounded-2xl p-5">
                    <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <XCircle size={15} className="text-red-500" />
                      Not Included
                    </h3>
                    <ul className="space-y-2.5">
                      {tour.exclusions.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-text">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-300 flex-shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Gallery */}
              <section>
                <h2 className="text-2xl font-bold text-safari-green mb-5">Photo Gallery</h2>
                <TourGallery images={tour.gallery} />
              </section>

              {/* FAQs */}
              {tour.faqs.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-safari-green mb-5">
                    Frequently Asked Questions
                  </h2>
                  <TourFAQ faqs={tour.faqs} />
                </section>
              )}
            </div>

            {/* RIGHT COLUMN — sticky sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-36 space-y-5">
                {/* Quick facts card */}
                <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
                  <h3 className="text-sm font-bold text-safari-green uppercase tracking-wider mb-4">
                    Quick Facts
                  </h3>
                  <dl className="space-y-3 text-sm">
                    {[
                      { label: "Duration", value: `${tour.duration} Days` },
                      { label: "Group Size", value: tour.group_size },
                      { label: "Difficulty", value: diff.label },
                      { label: "Category", value: tour.category },
                      { label: "Price From", value: tour.price_from_kes > 0 ? formatKES(tour.price_from_kes) + " / person" : "Price on Request" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <dt className="text-muted-text">{label}</dt>
                        <dd className="font-semibold text-body-text text-right">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Need help card */}
                <div className="bg-safari-green rounded-2xl p-6 text-white text-center">
                  <p className="font-semibold mb-1">Need help deciding?</p>
                  <p className="text-white/75 text-sm mb-4">
                    Talk to a safari specialist — we&apos;ll answer every question.
                  </p>
                  <a
                    href="https://wa.me/254719888008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm py-2.5 rounded-full transition-colors mb-3"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+254719888008"
                    className="block border border-white/30 hover:bg-white/10 text-white font-medium text-sm py-2.5 rounded-full transition-colors"
                  >
                    +254 719 888 008
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── ENQUIRY FORM ────────────────────────────── */}
      <section id="enquire" className="bg-green-tint py-16 md:py-20">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-savanna-gold">
                Request a Callback
              </span>
              <h2 className="text-3xl font-bold text-safari-green mt-2 mb-3">
                Interested in this package?
              </h2>
              <p className="text-muted-text text-sm max-w-md mx-auto">
                Leave your details and one of our safari specialists will call you back within 24
                hours to discuss your trip.
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-sm">
              <EnquiryForm tourTitle={tour.title} tourSlug={tour.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED TOURS ────────────────────────────── */}
      {otherTours.length > 0 && (
        <section className="section-pad bg-sand">
          <div className="container-xl">
            <h2 className="text-xl font-bold text-safari-green mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherTours.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tours/${t.slug}`}
                  className="group flex gap-4 bg-surface rounded-xl p-4 hover:shadow-md transition-shadow border border-border"
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={t.hero_image}
                      alt={t.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-savanna-gold font-semibold mb-1">{t.category}</p>
                    <h4 className="text-sm font-bold text-safari-green group-hover:text-savanna-gold transition-colors leading-snug mb-1">
                      {t.title}
                    </h4>
                    <p className="text-xs text-muted-text">
                      {t.duration} days · {t.price_from_kes > 0 ? `From ${formatKES(t.price_from_kes)}` : "Price on Request"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
