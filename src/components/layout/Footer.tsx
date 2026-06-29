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
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/bellasafarislimited/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/bellasafaris?igsh=dmVrcmRmNTJubnBl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E1306C] flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com/BellaSafarisKE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
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
                  href="tel:+254719888008"
                  className="flex gap-3 text-sm text-white/70 hover:text-savanna-gold transition-colors"
                >
                  <Phone size={16} className="text-savanna-gold flex-shrink-0" />
                  +254 719 888 008 / +254 739 888 008
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bellasafaris.com"
                  className="flex gap-3 text-sm text-white/70 hover:text-savanna-gold transition-colors"
                >
                  <Mail size={16} className="text-savanna-gold flex-shrink-0" />
                  info@bellasafaris.com
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
