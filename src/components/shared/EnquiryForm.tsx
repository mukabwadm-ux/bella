"use client";

import { useState } from "react";
import { Phone, Mail, User, Calendar, Users, MessageSquare, CheckCircle, Loader2 } from "lucide-react";

interface EnquiryFormProps {
  tourTitle?: string;
  tourSlug?: string;
}

export default function EnquiryForm({ tourTitle, tourSlug }: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travel_date: "",
    group_size: "2",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tour_slug: tourSlug }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-tint flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-safari-green" />
        </div>
        <h3 className="text-xl font-bold text-safari-green mb-2">
          Thank you, we&apos;ll be in touch shortly!
        </h3>
        <p className="text-muted-text text-sm max-w-sm">
          One of our safari specialists will call or email you within 24 hours to discuss your
          trip. You can also reach us directly on WhatsApp.
        </p>
        <a
          href="https://wa.me/254700506464"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
        >
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {tourTitle && (
        <div className="bg-green-tint rounded-xl px-4 py-3 text-sm text-safari-green font-medium">
          Enquiring about: <span className="font-bold">{tourTitle}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-body-text mb-1.5" htmlFor="name">
            Full Name *
          </label>
          <div className="relative">
            <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" />
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jane Doe"
              value={form.name}
              onChange={handleChange}
              className="w-full pl-9 pr-4 py-3 text-sm border border-border rounded-xl bg-sand focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-body-text mb-1.5" htmlFor="email">
            Email Address *
          </label>
          <div className="relative">
            <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" />
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full pl-9 pr-4 py-3 text-sm border border-border rounded-xl bg-sand focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-colors"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-body-text mb-1.5" htmlFor="phone">
            Phone / WhatsApp *
          </label>
          <div className="relative">
            <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" />
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+254 700 000 000"
              value={form.phone}
              onChange={handleChange}
              className="w-full pl-9 pr-4 py-3 text-sm border border-border rounded-xl bg-sand focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-colors"
            />
          </div>
        </div>

        {/* Travel date */}
        <div>
          <label className="block text-xs font-semibold text-body-text mb-1.5" htmlFor="travel_date">
            Preferred Travel Date
          </label>
          <div className="relative">
            <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" />
            <input
              id="travel_date"
              name="travel_date"
              type="date"
              value={form.travel_date}
              onChange={handleChange}
              className="w-full pl-9 pr-4 py-3 text-sm border border-border rounded-xl bg-sand focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-colors"
            />
          </div>
        </div>

        {/* Group size */}
        <div>
          <label className="block text-xs font-semibold text-body-text mb-1.5" htmlFor="group_size">
            Number of Travellers
          </label>
          <div className="relative">
            <Users size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" />
            <select
              id="group_size"
              name="group_size"
              value={form.group_size}
              onChange={handleChange}
              className="w-full pl-9 pr-4 py-3 text-sm border border-border rounded-xl bg-sand focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-colors appearance-none"
            >
              {["1", "2", "3", "4", "5", "6", "7–10", "10+"].map((n) => (
                <option key={n} value={n}>
                  {n} {n === "1" ? "person" : "people"}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-body-text mb-1.5" htmlFor="message">
          Tell us about your trip
        </label>
        <div className="relative">
          <MessageSquare size={15} className="absolute left-3 top-3.5 text-muted-text" />
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Any special requirements, dates, budget, or questions — the more you tell us, the better we can tailor your safari."
            value={form.message}
            onChange={handleChange}
            className="w-full pl-9 pr-4 py-3 text-sm border border-border rounded-xl bg-sand focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-colors resize-none"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-savanna-gold hover:bg-sunlit-gold disabled:opacity-60 text-white font-semibold py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 text-sm"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending your enquiry…
          </>
        ) : (
          "Request a Callback"
        )}
      </button>

      <p className="text-center text-xs text-muted-text">
        We respond within 24 hours. You can also reach us directly on{" "}
        <a
          href="https://wa.me/254700506464"
          target="_blank"
          rel="noopener noreferrer"
          className="text-safari-green font-medium hover:underline"
        >
          WhatsApp
        </a>
        .
      </p>
    </form>
  );
}
