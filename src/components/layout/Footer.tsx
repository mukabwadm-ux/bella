import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const tourLinks = [
  { label: "3-Day Maasai Mara Safari", href: "/tours/3-day-maasai-mara-safari" },
  { label: "7-Day Classic Kenya", href: "/tours/7-day-classic-kenya" },
  { label: "5-Day Zanzibar Beach", href: "/tours/5-day-zanzibar-beach" },
  { label: "Honeymoon Mara & Zanzibar", href: "/tours/honeymoon-mara-zanzibar" },
  { label: "4-Day Mount Kenya Trek", href: "/tours/4-day-mount-kenya-trek" },
  { label: "8-Day Serengeti & Ngorongoro", href: "/tours/8-day-serengeti-ngorongoro" },
];

const destinationLinks = [
  { label: "Maasai Mara", href: "/destinations/maasai-mara" },
  { label: "Amboseli", href: "/destinations/amboseli" },
  { label: "Serengeti", href: "/destinations/serengeti" },
  { label: "Zanzibar", href: "/destinations/zanzibar" },
  { label: "Mount Kenya", href: "/destinations/mount-kenya" },
  { label: "Diani Beach", href: "/destinations/diani-beach" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Plan Your Trip", href: "/plan-your-trip" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-ink text-white">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/images/Bella_Safaris-Logo.png"
              alt="Bella Safaris"
              width={150}
              height={45}
              className="h-11 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Kenya&apos;s trusted safari specialists. Creating unforgettable wildlife
              experiences across East Africa since 2015.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                {
                  label: "Facebook", href: "#",
                  svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
                },
                {
                  label: "Instagram", href: "#",
                  svg: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
                },
                {
                  label: "Twitter/X", href: "#",
                  svg: <path d="M4 4l16 16M4 20L20 4" />,
                },
                {
                  label: "YouTube", href: "#",
                  svg: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></>,
                },
              ].map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-savanna-gold flex items-center justify-center transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Tours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-savanna-gold mb-4">
              Safari Packages
            </h4>
            <ul className="space-y-2.5">
              {tourLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-savanna-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-savanna-gold mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5">
              {destinationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-savanna-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-savanna-gold mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/70">
                <MapPin size={16} className="text-savanna-gold flex-shrink-0 mt-0.5" />
                <span>Rosslyn Riviera Mall, Level 1, Nairobi, Kenya</span>
              </li>
              <li>
                <a
                  href="tel:+254700506464"
                  className="flex gap-3 text-sm text-white/70 hover:text-savanna-gold transition-colors"
                >
                  <Phone size={16} className="text-savanna-gold flex-shrink-0" />
                  +254 700 506 464
                </a>
              </li>
              <li>
                <a
                  href="mailto:reservations@bellasafaris.com"
                  className="flex gap-3 text-sm text-white/70 hover:text-savanna-gold transition-colors"
                >
                  <Mail size={16} className="text-savanna-gold flex-shrink-0" />
                  reservations@bellasafaris.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-savanna-gold mb-3">
                Company Links
              </h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-savanna-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Bella Safaris. All rights reserved. Incorporated in Kenya (CAP 486).</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/80 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
