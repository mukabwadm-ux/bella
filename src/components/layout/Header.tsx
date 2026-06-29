"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Destinations", href: "/destinations" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white",
        scrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      <div className="container-xl flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/Bella_Safaris-Logo.png"
            alt="Bella Safaris"
            width={160}
            height={48}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-semibold text-safari-green hover:text-savanna-gold hover:bg-green-tint rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/plan-your-trip"
            className="bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
          >
            Plan Your Trip
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-safari-green p-2 rounded-md"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="container-xl py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-semibold text-safari-green hover:text-savanna-gold hover:bg-green-tint rounded-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/plan-your-trip"
              className="mt-3 bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold text-sm px-5 py-3 rounded-full text-center transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Plan Your Trip
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
