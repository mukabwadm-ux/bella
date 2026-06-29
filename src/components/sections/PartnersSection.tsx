import Image from "next/image";

const partners = [
  { name: "TOSK — Tour Operators Society of Kenya", src: "/images/partners/tosk.png", width: 140, height: 80 },
  { name: "KNCCI — Kenya National Chamber of Commerce & Industry", src: "/images/partners/kncci.png", width: 160, height: 80 },
];

export default function PartnersSection() {
  return (
    <section className="bg-white border-t border-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left column — Partners */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D98200] mb-5">Our Partners</p>
            <div className="flex flex-wrap items-center gap-8">
              {partners.map((p) => (
                <div key={p.name} className="relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={p.width}
                    height={p.height}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Memberships / Accreditations */}
          <div className="md:border-l md:border-gray-100 md:pl-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D98200] mb-5">Accreditations</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B3D2E] flex-shrink-0" />
                Fully insured & TRA licensed
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B3D2E] flex-shrink-0" />
                KATO member — Kenya Association of Tour Operators
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B3D2E] flex-shrink-0" />
                TOSK member — Tour Operators Society of Kenya
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B3D2E] flex-shrink-0" />
                KNCCI member — Kenya National Chamber of Commerce & Industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
