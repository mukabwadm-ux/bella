import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bella Safaris. Visit us at Rosslyn Riviera Mall, Nairobi, call +254 700 506 464, or send an email.",
};

const officeInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["Rosslyn Riviera Mall, Level 1", "Rosslyn, Nairobi, Kenya"],
  },
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    lines: ["+254 700 506 464"],
    link: { href: "tel:+254700506464", label: "+254 700 506 464" },
  },
  {
    icon: Mail,
    title: "Email",
    lines: [],
    link: { href: "mailto:reservations@bellasafaris.com", label: "reservations@bellasafaris.com" },
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Monday – Saturday: 8:00am – 7:00pm", "Sunday: 10:00am – 4:00pm"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-safari-green py-20 md:py-28">
        <div className="container-xl text-center">
          <span className="inline-block text-savanna-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Talk to a Specialist
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Whether you have a question about a specific package or want to build something completely bespoke — we are here and happy to help.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-pad bg-sand">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left — office info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-safari-green mb-2">Contact Information</h2>
                <p className="text-sm text-muted-text leading-relaxed">
                  Reach us directly by phone, WhatsApp, or email. Or come visit us at our Nairobi office.
                </p>
              </div>

              <div className="space-y-4">
                {officeInfo.map(({ icon: Icon, title, lines, link }) => (
                  <div key={title} className="flex gap-4 bg-surface rounded-xl p-4 border border-border">
                    <div className="w-10 h-10 rounded-full bg-green-tint flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-safari-green" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-safari-green uppercase tracking-wider mb-1">
                        {title}
                      </p>
                      {lines.map((line) => (
                        <p key={line} className="text-sm text-body-text">{line}</p>
                      ))}
                      {link && (
                        <a
                          href={link.href}
                          className="text-sm text-savanna-gold hover:text-sunlit-gold font-medium transition-colors"
                        >
                          {link.label}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/254700506464?text=Hello%20Bella%20Safaris!%20I%20have%20a%20question%20about%20your%20safari%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3.5 rounded-full transition-colors shadow-sm"
              >
                <MessageCircle size={18} />
                Chat with us on WhatsApp
              </a>

              {/* Map embed placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-52 bg-green-tint flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={24} className="text-safari-green mx-auto mb-2" />
                  <p className="text-sm font-semibold text-safari-green">Rosslyn Riviera Mall</p>
                  <p className="text-xs text-muted-text">Level 1, Rosslyn, Nairobi</p>
                  <a
                    href="https://maps.google.com/?q=Rosslyn+Riviera+Mall+Nairobi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-savanna-gold hover:underline font-medium"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Right — contact form */}
            <div className="lg:col-span-3">
              <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <h2 className="text-xl font-bold text-safari-green mb-1">Send Us a Message</h2>
                <p className="text-sm text-muted-text mb-6">
                  We typically respond within a few hours during office hours.
                </p>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom trust bar */}
      <section className="bg-safari-green py-10">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { n: "500+", label: "Happy Travellers" },
              { n: "4.9★", label: "Google Rating" },
              { n: "24h", label: "Response Time" },
              { n: "KATO", label: "Licensed Operator" },
            ].map(({ n, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-savanna-gold">{n}</p>
                <p className="text-xs text-white/70 mt-0.5 uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
