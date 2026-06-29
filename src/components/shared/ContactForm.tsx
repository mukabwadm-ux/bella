"use client";

import { useState } from "react";
import { User, Mail, Phone, MessageSquare, Loader2, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-tint flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-safari-green" />
        </div>
        <h3 className="text-lg font-bold text-safari-green mb-2">Message received!</h3>
        <p className="text-sm text-muted-text max-w-xs">
          Thank you for reaching out. We will respond to your enquiry within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-body-text mb-1.5" htmlFor="c-name">
            Full Name *
          </label>
          <div className="relative">
            <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" />
            <input id="c-name" name="name" type="text" required placeholder="Jane Doe"
              value={form.name} onChange={handleChange}
              className="w-full pl-9 pr-4 py-3 text-sm border border-border rounded-xl bg-sand focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-colors" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-body-text mb-1.5" htmlFor="c-email">
            Email *
          </label>
          <div className="relative">
            <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" />
            <input id="c-email" name="email" type="email" required placeholder="jane@example.com"
              value={form.email} onChange={handleChange}
              className="w-full pl-9 pr-4 py-3 text-sm border border-border rounded-xl bg-sand focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-colors" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-body-text mb-1.5" htmlFor="c-phone">
            Phone / WhatsApp
          </label>
          <div className="relative">
            <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" />
            <input id="c-phone" name="phone" type="tel" placeholder="+254 700 000 000"
              value={form.phone} onChange={handleChange}
              className="w-full pl-9 pr-4 py-3 text-sm border border-border rounded-xl bg-sand focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-colors" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-body-text mb-1.5" htmlFor="c-subject">
            Subject
          </label>
          <select id="c-subject" name="subject" value={form.subject} onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-sand focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-colors appearance-none">
            <option value="">Select a topic…</option>
            <option>Safari Package Enquiry</option>
            <option>Custom Itinerary Request</option>
            <option>Honeymoon Planning</option>
            <option>Group Booking</option>
            <option>General Question</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-body-text mb-1.5" htmlFor="c-message">
          Your Message *
        </label>
        <div className="relative">
          <MessageSquare size={14} className="absolute left-3 top-3.5 text-muted-text" />
          <textarea id="c-message" name="message" rows={5} required
            placeholder="Tell us about your travel plans, dates, group size, or any questions…"
            value={form.message} onChange={handleChange}
            className="w-full pl-9 pr-4 py-3 text-sm border border-border rounded-xl bg-sand focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-colors resize-none" />
        </div>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or WhatsApp us directly.</p>
      )}

      <button type="submit" disabled={status === "loading"}
        className="w-full bg-safari-green hover:bg-forest-ink disabled:opacity-60 text-white font-semibold py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 text-sm">
        {status === "loading"
          ? <><Loader2 size={16} className="animate-spin" /> Sending…</>
          : "Send Message"}
      </button>
    </form>
  );
}
