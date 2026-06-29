import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Binoculars, Waves, Heart, Mountain, Compass, Car,
  CheckCircle, ArrowRight, Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From wildlife safaris and beach holidays to honeymoon packages and mountain treks — Bella Safaris handles every detail so you can focus on the experience.",
};

const services = [
  {
    icon: Binoculars,
    title: "Wildlife Safaris",
    subtitle: "Kenya & Tanzania",
    description:
      "Game drives through the Maasai Mara, Amboseli, Tsavo, Serengeti, and Ngorongoro. Our KWS-licensed guides deliver Big Five sightings, predator action, and unforgettable encounters with Africa's iconic wildlife. Private, shared, and family safari options available.",
    features: [
      "Private and small-group game drives",
      "KWS-licensed, English-speaking guides",
      "All national park and reserve entry fees included",
      "Hand-picked tented camps and lodges",
      "Flexible itineraries adapted to wildlife activity",
    ],
    image: "/images/Ashnil-Mara-6.jpg",
    cta: "/tours",
    ctaLabel: "View Safari Packages",
    badge: "Most Popular",
  },
  {
    icon: Waves,
    title: "Beach Holidays",
    subtitle: "Zanzibar & Diani Beach",
    description:
      "Trade the savanna for the sea. We arrange complete beach escapes to Zanzibar's white-sand shores and Kenya's Diani Beach — including flights, beach hotels, dhow cruises, spice farm tours, and water sports. Perfect as standalone holidays or combined with safari.",
    features: [
      "Return flights Nairobi–Zanzibar",
      "Handpicked beach hotels and villas",
      "Stone Town guided tours and spice farm experiences",
      "Sunset dhow cruises",
      "Optional snorkelling, kite surfing, and dolphin watching",
    ],
    image: "/images/Swahili-0-1.jpg",
    cta: "/tours/5-day-zanzibar-beach",
    ctaLabel: "Explore Beach Packages",
    badge: null,
  },
  {
    icon: Heart,
    title: "Honeymoon Packages",
    subtitle: "Romance in the Wild",
    description:
      "Bush to beach honeymoons designed around intimacy and wonder. Private tented camps, candlelit bush dinners, champagne sundowners, and boutique Zanzibar beach villas. Every detail — from rose petals to private dhow charters — is arranged on your behalf.",
    features: [
      "Private game drives with dedicated guide",
      "Honeymoon room decorations and welcome gifts",
      "Private candlelit bush dinner arrangements",
      "Champagne and special occasion touches throughout",
      "Seamless Mara-to-Zanzibar connections",
    ],
    image: "/images/Ramada-2-1.jpg",
    cta: "/tours/honeymoon-mara-zanzibar",
    ctaLabel: "See Honeymoon Package",
    badge: null,
  },
  {
    icon: Mountain,
    title: "Mountain & Adventure",
    subtitle: "Mount Kenya & Beyond",
    description:
      "Summit Africa's second-highest peak or explore Kenya's dramatic highland landscapes. Our certified mountain guides lead treks through ancient Afro-alpine moorlands, giant groundsel forests, and glacial valleys to the roof of Kenya.",
    features: [
      "Experienced, certified mountain guides",
      "Full camping equipment provided",
      "All national park fees included",
      "Summit certificate on completion",
      "Flying doctors emergency cover",
    ],
    image: "/images/LNR-4.jpg",
    cta: "/tours/4-day-mount-kenya-trek",
    ctaLabel: "View Trek Package",
    badge: null,
  },
  {
    icon: Compass,
    title: "Custom Itineraries",
    subtitle: "Bespoke Safari Planning",
    description:
      "No two travellers are the same. If you can dream it, we can build it. Whether it's a 14-day circuit through four countries, a solo photography safari, or a multi-generational family adventure, our specialists design bespoke itineraries around your exact dates, interests, and budget.",
    features: [
      "Dedicated safari specialist for your trip",
      "Fully personalised itinerary document",
      "Accommodation matched to your style and budget",
      "Any length, any combination of destinations",
      "24/7 on-trip support",
    ],
    image: "/images/GRVL-9.jpg",
    cta: "/plan-your-trip",
    ctaLabel: "Start Planning",
    badge: null,
  },
  {
    icon: Car,
    title: "Airport & Ground Transfers",
    subtitle: "Seamless Logistics",
    description:
      "Reliable, professional airport pickups and drop-offs across Nairobi, Mombasa, Kilimanjaro, and Zanzibar. We also handle inter-park transfers, domestic flight connections, and hotel-to-hotel moves — so your entire itinerary runs like clockwork.",
    features: [
      "JKIA, Wilson Airport, and all domestic airports",
      "Clean, air-conditioned safari vehicles",
      "Flight monitoring — no late pickups",
      "24/7 availability",
      "Competitive, transparent pricing",
    ],
    image: "/images/Enkorok-3.jpg",
    cta: "/contact",
    ctaLabel: "Request a Transfer",
    badge: null,
  },
];

const whyUs = [
  "Licensed & fully insured tour operator based in Nairobi",
  "Over a decade of East Africa expertise",
  "Small groups — never lost in a crowd",
  "Transparent pricing — no hidden extras",
  "Post-trip support and reviews",
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="bg-safari-green py-20 md:py-28">
        <div className="container-xl text-center">
          <span className="inline-block text-savanna-gold text-xs font-semibold uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            From the first enquiry to the last game drive — Bella Safaris handles every detail so you can
            be fully present for every extraordinary moment.
          </p>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ─────────────────────────── */}
      <div className="bg-sand">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isReversed = i % 2 !== 0;
          return (
            <section
              key={service.title}
              className={`py-16 md:py-24 ${i % 2 === 0 ? "bg-sand" : "bg-surface"}`}
            >
              <div className="container-xl">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isReversed ? "lg:flex lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {service.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="flex items-center gap-1 bg-savanna-gold text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                          <Star size={10} fill="white" /> {service.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-green-tint flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-safari-green" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-savanna-gold">
                          {service.subtitle}
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-safari-green leading-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-body-text leading-relaxed mb-6">{service.description}</p>

                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-body-text">
                          <CheckCircle size={15} className="text-safari-green flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.cta}
                      className="inline-flex items-center gap-2 bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
                    >
                      {service.ctaLabel} <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── WHY BELLA SAFARIS ────────────────────────── */}
      <section className="bg-safari-green py-16 md:py-24">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-savanna-gold text-xs font-semibold uppercase tracking-widest mb-3">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                East Africa&apos;s Trusted Safari Specialists
              </h2>
              <p className="text-white/75 leading-relaxed mb-8">
                We are a Nairobi-based tour operator with deep roots in East African travel. Our team
                combines local knowledge with international service standards — giving every client
                the confidence that their trip is in expert hands.
              </p>
              <ul className="space-y-3 mb-8">
                {whyUs.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/90 text-sm">
                    <CheckCircle size={16} className="text-savanna-gold flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
                >
                  About Us <ArrowRight size={15} />
                </Link>
                <Link
                  href="/plan-your-trip"
                  className="inline-flex items-center gap-2 bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
                >
                  Start Planning <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/keekorok.jpg"
                alt="Bella Safaris team in the field"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={14} className="text-savanna-gold fill-savanna-gold" />
                  ))}
                </div>
                <p className="text-white text-sm font-semibold">
                  &ldquo;The best organised safari I have ever experienced.&rdquo;
                </p>
                <p className="text-white/70 text-xs mt-1">— Steve Mbuthia · 7-Day Classic Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────── */}
      <section className="bg-sand py-16">
        <div className="container-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-safari-green mb-4">
            Ready to Start Planning?
          </h2>
          <p className="text-muted-text max-w-lg mx-auto mb-8">
            Tell us your dream trip — dates, destinations, group size, budget — and we will design
            a personalised itinerary within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/plan-your-trip"
              className="inline-flex items-center gap-2 bg-safari-green hover:bg-forest-ink text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Plan Your Safari <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/254700506464"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
