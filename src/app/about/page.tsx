import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Compass, Users, Leaf, Award, HeartHandshake, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Bella Safaris — Kenya's trusted safari specialists since 2015, based at Rosslyn Riviera Mall, Nairobi.",
};

const values = [
  { icon: Compass, title: "Expert Knowledge", description: "Our guides are KWS-certified with an average of 12 years of field experience across East Africa." },
  { icon: Shield, title: "Reliability & Safety", description: "Fully licensed by KATO, comprehensively insured, with 24/7 emergency support on every trip." },
  { icon: Users, title: "Personal Service", description: "Every enquiry is handled by a real human specialist — never a chatbot or a generic brochure." },
  { icon: Leaf, title: "Responsible Tourism", description: "We work exclusively with eco-certified properties and contribute to local conservation initiatives." },
  { icon: HeartHandshake, title: "Community First", description: "We partner with Maasai communities and local businesses to ensure tourism benefits the people who protect the wildlife." },
  { icon: Award, title: "Proven Excellence", description: "Ranked #26 in the top 100 mid-sized companies in Kenya by KPMG. 4.9 stars across hundreds of Google reviews." },
];

const team = [
  { name: "Bella Safaris Team", role: "Safari Specialists", image: "/images/Enashipai-12.jpg" },
  { name: "Field Operations", role: "Licensed Guides & Drivers", image: "/images/GRVL-9.jpg" },
  { name: "Reservations Team", role: "Available Mon–Sat, 8am–7pm", image: "/images/Flamingo-1.jpg" },
];

const milestones = [
  { year: "2015", event: "Bella Safaris founded in Nairobi, Kenya" },
  { year: "2017", event: "Expanded operations to Tanzania — Serengeti & Ngorongoro" },
  { year: "2018", event: "Ranked #26 in KPMG Top 100 Mid-Sized Companies in Kenya" },
  { year: "2020", event: "Launched beach extension packages to Zanzibar and Diani" },
  { year: "2022", event: "Added Mount Kenya trekking and adventure programmes" },
  { year: "2024", event: "500+ safari experiences completed · 4.9★ on Google Reviews" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center">
        <Image
          src="/images/Enashipai-12.jpg"
          alt="Bella Safaris team"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-ink/85 via-forest-ink/50 to-transparent" />
        <div className="relative container-xl text-white">
          <span className="inline-block text-savanna-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 max-w-2xl">
            About Bella Safaris
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            A Kenyan-born safari company built on passion for the wild, genuine care for our guests, and deep respect for the communities and ecosystems that make East Africa extraordinary.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad bg-sand">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-savanna-gold">
                Who We Are
              </span>
              <h2 className="text-3xl font-bold text-safari-green mt-2 mb-5">
                Kenya's Trusted Safari Specialists Since 2015
              </h2>
              <div className="space-y-4 text-body-text leading-relaxed">
                <p>
                  Bella Safaris was founded in Nairobi in 2015 with a simple but powerful belief: that every person who travels to East Africa deserves more than a tour — they deserve a transformative experience. One that changes how they see the world and their place in it.
                </p>
                <p>
                  Based at Rosslyn Riviera Mall, Level 1, Nairobi, we are a fully licensed, Kenyan tour operator with deep roots in the communities and landscapes we work in. Our team includes some of Kenya's most experienced safari guides, passionate reservations specialists, and logistics experts who between them have decades of field experience across Kenya and Tanzania.
                </p>
                <p>
                  We are incorporated in Kenya under CAP 486 and are members of KATO (Kenya Association of Tour Operators). In 2018, we were recognised by KPMG as one of Kenya's Top 100 mid-sized companies — a reflection of our commitment to quality, reliability, and growth.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/GRVL-9.jpg"
                alt="Safari vehicle in the Maasai Mara"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Stat overlay */}
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                {[
                  { n: "500+", label: "Trips Completed" },
                  { n: "4.9★", label: "Google Rating" },
                  { n: "10+", label: "Years Experience" },
                ].map(({ n, label }) => (
                  <div key={label} className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-safari-green">{n}</p>
                    <p className="text-xs text-muted-text leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-green-tint">
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-savanna-gold">
              Our Values
            </span>
            <h2 className="text-3xl font-bold text-safari-green mt-2">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-surface rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-tint flex items-center justify-center mb-4">
                  <Icon size={22} className="text-safari-green" />
                </div>
                <h3 className="font-bold text-safari-green mb-2">{title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-surface">
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-savanna-gold">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-safari-green mt-2">
              A Decade of East African Adventures
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-6">
                {milestones.map(({ year, event }) => (
                  <div key={year} className="flex gap-6 items-start">
                    <div className="relative flex-shrink-0 w-12 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-savanna-gold border-4 border-surface shadow" />
                    </div>
                    <div className="pb-6 flex-1">
                      <span className="text-xs font-bold text-savanna-gold uppercase tracking-wider">
                        {year}
                      </span>
                      <p className="text-body-text font-medium mt-0.5">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-safari-green py-16 md:py-20">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience East Africa with Us?
          </h2>
          <p className="text-white/75 text-base max-w-md mx-auto mb-8">
            Talk to one of our specialists and start designing your perfect safari.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/plan-your-trip"
              className="bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold px-7 py-3.5 rounded-full transition-colors inline-flex items-center gap-2"
            >
              Plan Your Safari <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-safari-green font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
