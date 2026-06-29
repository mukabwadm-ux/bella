"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin, Calendar, Users, MessageSquare,
  CheckCircle, Phone, Mail, Clock,
} from "lucide-react";

const destinations = [
  "Maasai Mara",
  "Amboseli",
  "Tsavo",
  "Lake Nakuru",
  "Samburu",
  "Zanzibar",
  "Serengeti",
  "Ngorongoro Crater",
  "Mount Kenya",
  "Diani Beach",
  "Not sure — advise me",
];

const durations = [
  "3–4 days",
  "5–7 days",
  "8–10 days",
  "11–14 days",
  "2+ weeks",
  "Not sure yet",
];

const budgetRanges = [
  "Budget (under KES 80,000/person)",
  "Mid-range (KES 80,000–150,000/person)",
  "Comfort (KES 150,000–250,000/person)",
  "Luxury (KES 250,000+/person)",
  "Flexible — show me the best options",
];

const travelStyles = [
  "Wildlife & Game Drives",
  "Beach & Relaxation",
  "Honeymoon / Romance",
  "Family Adventure",
  "Photography Safari",
  "Hiking & Trekking",
  "Cultural Immersion",
  "Bird Watching",
];

const steps = [
  {
    number: "01",
    title: "Tell Us Your Dream",
    description:
      "Fill in the form below with your travel dates, preferred destinations, group size, and any special interests. The more detail, the better we can tailor your itinerary.",
  },
  {
    number: "02",
    title: "We Design Your Itinerary",
    description:
      "Within 24 hours, one of our safari specialists will contact you with a personalised itinerary — day-by-day, with accommodation options and transparent pricing.",
  },
  {
    number: "03",
    title: "Refine & Confirm",
    description:
      "We tweak the itinerary together until it is exactly right. Once you are happy, we handle all bookings, permits, and logistics — you just need to pack.",
  },
];

export default function PlanYourTripPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travel_date: "",
    duration: "",
    group_size: "2",
    destinations_interest: [] as string[],
    travel_style: [] as string[],
    budget: "",
    accommodation: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function toggleArrayField(field: "destinations_interest" | "travel_style", value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const message = [
      form.duration && `Duration: ${form.duration}`,
      form.destinations_interest.length && `Destinations of interest: ${form.destinations_interest.join(", ")}`,
      form.travel_style.length && `Travel style: ${form.travel_style.join(", ")}`,
      form.budget && `Budget: ${form.budget}`,
      form.accommodation && `Accommodation preference: ${form.accommodation}`,
      form.message && `Additional notes: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          travel_date: form.travel_date || undefined,
          group_size: form.group_size,
          message,
          subject: "Custom Safari Planning Request",
          source: "plan_your_trip",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[380px] flex items-center">
        <Image
          src="/images/Ashnil-Mara-6.jpg"
          alt="Plan your safari"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-ink/90 via-forest-ink/60 to-transparent" />
        <div className="relative container-xl py-20 md:py-28">
          <span className="inline-block text-savanna-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Custom Safari Planning
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl">
            Your Dream Safari, Expertly Planned
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Tell us what you are dreaming of — we will design a personalised itinerary and have it
            in your inbox within 24 hours.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-savanna-gold">
              The Process
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-safari-green mt-2">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <div key={step.number} className="text-center relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-safari-green text-savanna-gold text-xl font-bold mb-4 relative z-10">
                  {step.number}
                </div>
                <h3 className="font-bold text-safari-green text-lg mb-2">{step.title}</h3>
                <p className="text-muted-text text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ─────────────────────────────── */}
      <section className="bg-sand section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* FORM */}
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-2xl p-6 md:p-10 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-tint flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={32} className="text-safari-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-safari-green mb-3">
                      We&apos;ve Received Your Request!
                    </h3>
                    <p className="text-muted-text mb-6 max-w-sm mx-auto">
                      One of our safari specialists will contact you within 24 hours with a
                      personalised itinerary tailored to your dream trip.
                    </p>
                    <a
                      href="https://wa.me/254700506464"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-full transition-colors"
                    >
                      Chat on WhatsApp for faster response
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <h2 className="text-xl font-bold text-safari-green mb-1">
                        Tell Us About Your Trip
                      </h2>
                      <p className="text-sm text-muted-text">
                        All fields marked * are required.
                      </p>
                    </div>

                    {/* Contact details */}
                    <fieldset>
                      <legend className="text-sm font-semibold text-safari-green uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-safari-green text-white text-xs flex items-center justify-center font-bold">1</span>
                        Your Contact Details
                      </legend>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-body-text mb-1.5">
                            Full Name *
                          </label>
                          <input
                            required
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Your full name"
                            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-safari-green/30 focus:border-safari-green transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-body-text mb-1.5">
                            Email Address *
                          </label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="your@email.com"
                            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-safari-green/30 focus:border-safari-green transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-body-text mb-1.5">
                            Phone / WhatsApp *
                          </label>
                          <input
                            required
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+254 7XX XXX XXX"
                            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-safari-green/30 focus:border-safari-green transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-body-text mb-1.5">
                            Group Size *
                          </label>
                          <select
                            value={form.group_size}
                            onChange={(e) => setForm({ ...form, group_size: e.target.value })}
                            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-safari-green/30 focus:border-safari-green transition-colors bg-white"
                          >
                            {["1", "2", "3–4", "5–8", "9–12", "13+"].map((s) => (
                              <option key={s} value={s}>{s} {s === "1" ? "person" : "people"}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </fieldset>

                    {/* Trip details */}
                    <fieldset>
                      <legend className="text-sm font-semibold text-safari-green uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-safari-green text-white text-xs flex items-center justify-center font-bold">2</span>
                        Trip Details
                      </legend>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-xs font-semibold text-body-text mb-1.5">
                            <Calendar size={11} className="inline mr-1" />
                            Travel Date (approximate)
                          </label>
                          <input
                            type="date"
                            value={form.travel_date}
                            onChange={(e) => setForm({ ...form, travel_date: e.target.value })}
                            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-safari-green/30 focus:border-safari-green transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-body-text mb-1.5">
                            <Clock size={11} className="inline mr-1" />
                            Trip Duration
                          </label>
                          <select
                            value={form.duration}
                            onChange={(e) => setForm({ ...form, duration: e.target.value })}
                            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-safari-green/30 focus:border-safari-green transition-colors bg-white"
                          >
                            <option value="">Select duration</option>
                            {durations.map((d) => (
                              <option key={d} value={d}>{d}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Destinations */}
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-body-text mb-2">
                          <MapPin size={11} className="inline mr-1" />
                          Destinations of Interest (select all that apply)
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {destinations.map((dest) => (
                            <button
                              key={dest}
                              type="button"
                              onClick={() => toggleArrayField("destinations_interest", dest)}
                              className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${
                                form.destinations_interest.includes(dest)
                                  ? "bg-safari-green text-white border-safari-green"
                                  : "bg-white text-body-text border-border hover:border-safari-green"
                              }`}
                            >
                              {dest}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Travel style */}
                      <div>
                        <label className="block text-xs font-semibold text-body-text mb-2">
                          <Users size={11} className="inline mr-1" />
                          Travel Style (select all that apply)
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {travelStyles.map((style) => (
                            <button
                              key={style}
                              type="button"
                              onClick={() => toggleArrayField("travel_style", style)}
                              className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${
                                form.travel_style.includes(style)
                                  ? "bg-savanna-gold text-white border-savanna-gold"
                                  : "bg-white text-body-text border-border hover:border-savanna-gold"
                              }`}
                            >
                              {style}
                            </button>
                          ))}
                        </div>
                      </div>
                    </fieldset>

                    {/* Budget & accommodation */}
                    <fieldset>
                      <legend className="text-sm font-semibold text-safari-green uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-safari-green text-white text-xs flex items-center justify-center font-bold">3</span>
                        Budget & Preferences
                      </legend>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-body-text mb-1.5">
                            Budget Range
                          </label>
                          <select
                            value={form.budget}
                            onChange={(e) => setForm({ ...form, budget: e.target.value })}
                            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-safari-green/30 focus:border-safari-green transition-colors bg-white"
                          >
                            <option value="">Select budget</option>
                            {budgetRanges.map((b) => (
                              <option key={b} value={b}>{b}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-body-text mb-1.5">
                            Accommodation Preference
                          </label>
                          <select
                            value={form.accommodation}
                            onChange={(e) => setForm({ ...form, accommodation: e.target.value })}
                            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-safari-green/30 focus:border-safari-green transition-colors bg-white"
                          >
                            <option value="">Select type</option>
                            <option>Budget camps / guesthouses</option>
                            <option>Mid-range lodges & tented camps</option>
                            <option>Luxury lodges & exclusive camps</option>
                            <option>Mix of comfort levels</option>
                            <option>Surprise me with the best fit</option>
                          </select>
                        </div>
                      </div>
                    </fieldset>

                    {/* Additional notes */}
                    <fieldset>
                      <legend className="text-sm font-semibold text-safari-green uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-safari-green text-white text-xs flex items-center justify-center font-bold">4</span>
                        Anything Else We Should Know?
                      </legend>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        placeholder="Special occasions (honeymoon, anniversary, birthday), dietary requirements, accessibility needs, specific wildlife you are hoping to see, previous safari experience..."
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-safari-green/30 focus:border-safari-green transition-colors resize-none"
                      />
                    </fieldset>

                    {error && (
                      <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-safari-green hover:bg-forest-ink disabled:opacity-60 text-white font-semibold py-3.5 rounded-full transition-colors text-sm"
                    >
                      {submitting ? "Sending your request..." : "Send My Safari Request"}
                    </button>

                    <p className="text-center text-xs text-muted-text">
                      We will respond within 24 hours. No commitment required.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">

              {/* Contact card */}
              <div className="bg-safari-green rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Prefer to Talk First?</h3>
                <p className="text-white/75 text-sm mb-5 leading-relaxed">
                  Our team is available every day. Reach us directly on WhatsApp or by phone.
                </p>
                <a
                  href="https://wa.me/254700506464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm py-3 px-5 rounded-full transition-colors mb-3"
                >
                  <MessageSquare size={16} />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+254700506464"
                  className="flex items-center gap-3 border border-white/30 hover:bg-white/10 text-white font-medium text-sm py-3 px-5 rounded-full transition-colors mb-3"
                >
                  <Phone size={16} />
                  +254 700 506 464
                </a>
                <a
                  href="mailto:reservations@bellasafaris.com"
                  className="flex items-center gap-3 border border-white/30 hover:bg-white/10 text-white font-medium text-sm py-3 px-5 rounded-full transition-colors"
                >
                  <Mail size={16} />
                  reservations@bellasafaris.com
                </a>
              </div>

              {/* Promise card */}
              <div className="bg-surface rounded-2xl p-5 border border-border">
                <h3 className="text-sm font-bold text-safari-green uppercase tracking-wider mb-4">
                  Our Promise to You
                </h3>
                <ul className="space-y-3">
                  {[
                    "Response within 24 hours",
                    "No pressure, no obligation",
                    "Personalised — not a template",
                    "Transparent, all-inclusive pricing",
                    "On-trip support, 7 days a week",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-body-text">
                      <CheckCircle size={14} className="text-safari-green flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular packages */}
              <div className="bg-surface rounded-2xl p-5 border border-border">
                <h3 className="text-sm font-bold text-safari-green uppercase tracking-wider mb-4">
                  Popular Starting Points
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "3-Day Maasai Mara Safari", href: "/tours/3-day-maasai-mara-safari" },
                    { label: "7-Day Classic Kenya", href: "/tours/7-day-classic-kenya" },
                    { label: "Honeymoon Mara & Zanzibar", href: "/tours/honeymoon-mara-zanzibar" },
                    { label: "8-Day Serengeti & Ngorongoro", href: "/tours/8-day-serengeti-ngorongoro" },
                  ].map((pkg) => (
                    <Link
                      key={pkg.href}
                      href={pkg.href}
                      className="block text-sm text-safari-green hover:text-savanna-gold font-medium py-1.5 border-b border-border last:border-0 transition-colors"
                    >
                      → {pkg.label}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
