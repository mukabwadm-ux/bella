import Image from "next/image";
import Link from "next/link";
import { Shield, Compass, Users, Leaf, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const pillars = [
  { icon: Compass, title: "Expert Guides", description: "Kenya Wildlife Service certified guides with 10+ years in the field." },
  { icon: Shield, title: "Safe & Reliable", description: "Fully insured, KATO-licensed, and with 24/7 emergency support." },
  { icon: Users, title: "Small Groups", description: "Intimate groups of 6–12 for an authentic, personal experience." },
  { icon: Leaf, title: "Eco-Conscious", description: "We work with eco-certified lodges and support local conservation." },
  { icon: HeartHandshake, title: "Tailored Trips", description: "Every itinerary is customised around your dates, budget and style." },
];

export default function DifferenceSection() {
  return (
    <section className="section-pad bg-sand">
      <div className="container-xl">
        {/* Top split: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="The Bella Safaris Difference"
              subtitle="We don't just run tours — we craft extraordinary East African experiences. From the moment you enquire to the day you return home, every detail is handled with care."
            />
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-safari-green border-2 border-safari-green hover:bg-safari-green hover:text-white px-6 py-2.5 rounded-full transition-colors"
            >
              More About Us
            </Link>
          </div>
          <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/Enashipai-12.jpg"
              alt="Bella Safaris lodge"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* 5 pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-surface rounded-2xl p-5 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-green-tint flex items-center justify-center mx-auto mb-3">
                <Icon size={22} className="text-safari-green" />
              </div>
              <h3 className="text-sm font-semibold text-safari-green mb-1.5">{title}</h3>
              <p className="text-xs text-muted-text leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
