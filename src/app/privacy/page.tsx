import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Bella Safaris privacy policy — how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "1. Who We Are",
    content: `Bella Safaris Limited ("Bella Safaris", "we", "us", "our") is a tour operator incorporated in Kenya under CAP 486, with offices at Rosslyn Riviera Mall, Level 1, Nairobi, Kenya. We are the data controller for personal information collected through this website and in connection with our services.

For privacy-related enquiries, contact us at: info@bellasafaris.com`,
  },
  {
    title: "2. Information We Collect",
    content: "We collect the following categories of personal information:",
    bullets: [
      "Contact details — name, email address, phone number / WhatsApp number.",
      "Travel preferences — preferred travel dates, group size, destination interests, budget range.",
      "Enquiry content — messages and special requests you send us via our contact or enquiry forms.",
      "Technical data — IP address, browser type, pages visited, and time spent on our website (collected automatically via analytics tools).",
      "Communications — records of emails, WhatsApp, and phone conversations between you and our team.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: "We use your personal information to:",
    bullets: [
      "Respond to your safari enquiries and provide quotations.",
      "Process and manage your booking and travel arrangements.",
      "Send booking confirmations, itineraries, and trip-related communications.",
      "Improve our website and tailor it to visitor needs using aggregated analytics data.",
      "Send you occasional marketing communications about our packages and offers — only where you have given consent or where we have a legitimate interest (you may opt out at any time).",
      "Comply with legal obligations under Kenyan law.",
    ],
  },
  {
    title: "4. Legal Basis for Processing",
    content: "We process your personal data on the following grounds:",
    bullets: [
      "Contract — processing is necessary to fulfil your booking or respond to your pre-booking enquiry.",
      "Legitimate interests — to improve our services, prevent fraud, and communicate with existing clients.",
      "Consent — where you have explicitly opted in to marketing communications.",
      "Legal obligation — where processing is required to comply with applicable law.",
    ],
  },
  {
    title: "5. Sharing Your Information",
    content:
      "We do not sell your personal data. We may share your information with:",
    bullets: [
      "Accommodation providers, airlines, ground handlers, and other suppliers necessary to fulfil your booking.",
      "Email and communications service providers (e.g. Resend) who process data on our behalf under strict data processing agreements.",
      "Analytics providers (e.g. Google Analytics) in anonymised or aggregated form.",
      "Regulatory and law enforcement authorities where required by Kenyan law.",
    ],
    footer:
      "All third parties are required to handle your data securely and only for the purposes we specify.",
  },
  {
    title: "6. Data Retention",
    content:
      "We retain personal data for as long as necessary to provide our services and meet legal obligations:",
    bullets: [
      "Enquiry data (no booking made) — up to 12 months.",
      "Booking and client records — up to 7 years in accordance with Kenyan tax and commercial law.",
      "Marketing preferences — until you withdraw consent.",
    ],
  },
  {
    title: "7. Your Rights",
    content:
      "You have the right to:",
    bullets: [
      "Access the personal data we hold about you.",
      "Request correction of inaccurate or incomplete data.",
      "Request deletion of your data where it is no longer necessary for us to hold it.",
      "Object to or restrict processing in certain circumstances.",
      "Withdraw consent for marketing communications at any time.",
      "Lodge a complaint with the relevant data protection authority in Kenya.",
    ],
    footer:
      "To exercise any of these rights, contact us at info@bellasafaris.com. We will respond within 30 days.",
  },
  {
    title: "8. Cookies & Analytics",
    content:
      "Our website uses cookies and similar tracking technologies to understand how visitors use the site. This includes Google Analytics, which collects anonymised data about page views, traffic sources, and device types. You may disable cookies in your browser settings, though this may affect some website functionality.",
  },
  {
    title: "9. Security",
    content:
      "We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. Our website uses HTTPS encryption. Access to personal data is restricted to staff who need it to perform their duties. However, no internet transmission is completely secure and we cannot guarantee absolute security.",
  },
  {
    title: "10. Links to Third-Party Websites",
    content:
      "Our website may contain links to third-party websites (including TripAdvisor, YouTube, and social media platforms). We are not responsible for the privacy practices of those sites and recommend you review their privacy policies independently.",
  },
  {
    title: "11. Children's Privacy",
    content:
      "Our services are not directed at children under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a minor, please contact us and we will delete it promptly.",
  },
  {
    title: "12. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. The latest version will always be available on this page with the effective date noted below. We encourage you to review this policy periodically.",
  },
  {
    title: "13. Governing Law",
    content:
      "This Privacy Policy is governed by the laws of the Republic of Kenya, including the Kenya Data Protection Act, 2019.",
  },
  {
    title: "14. Contact Us",
    content:
      "For any questions, concerns, or requests relating to this Privacy Policy or your personal data, please contact:",
    contact: true,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-safari-green py-16 md:py-20">
        <div className="container-xl text-center">
          <span className="inline-block text-savanna-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            We respect your privacy and are committed to protecting your personal information. This policy explains what we collect, why, and how we keep it safe.
          </p>
          <p className="text-white/50 text-xs mt-4">Effective date: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-sand">
        <div className="container-xl max-w-4xl">
          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.title}
                className="bg-surface rounded-2xl p-6 md:p-8 border border-border"
              >
                <h2 className="text-base md:text-lg font-bold text-safari-green mb-3">
                  {section.title}
                </h2>
                <p className="text-body-text text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
                {section.bullets && (
                  <ul className="mt-3 space-y-2">
                    {section.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm md:text-base text-body-text">
                        <span className="text-savanna-gold mt-1.5 flex-shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.footer && (
                  <p className="mt-3 text-sm text-muted-text italic">{section.footer}</p>
                )}
                {section.contact && (
                  <div className="mt-4 bg-green-tint rounded-xl p-4 text-sm text-body-text space-y-1">
                    <p className="font-semibold text-safari-green">Bella Safaris Limited</p>
                    <p>Rosslyn Riviera Mall, Level 1, Nairobi, Kenya</p>
                    <p>
                      Email:{" "}
                      <a href="mailto:info@bellasafaris.com" className="text-safari-green font-medium hover:underline">
                        info@bellasafaris.com
                      </a>
                    </p>
                    <p>
                      Phone:{" "}
                      <a href="tel:+254719888008" className="text-safari-green font-medium hover:underline">
                        +254 719 888 008
                      </a>{" "}
                      /{" "}
                      <a href="tel:+254739888008" className="text-safari-green font-medium hover:underline">
                        +254 739 888 008
                      </a>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted-text text-sm">
              You can also review our{" "}
              <Link href="/terms" className="text-safari-green font-semibold hover:underline">
                Booking Terms &amp; Conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
