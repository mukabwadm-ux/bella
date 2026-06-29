import Image from "next/image";
import { FileText, ExternalLink } from "lucide-react";

const partners = [
  { name: "TOSK — Tour Operators Society of Kenya", src: "/images/partners/tosk.png", width: 140, height: 80 },
  { name: "KNCCI — Kenya National Chamber of Commerce & Industry", src: "/images/partners/kncci.png", width: 160, height: 80 },
];

const certificates = [
  {
    title: "Kenya Top 100 Mid-Sized Companies",
    subtitle: "Business Daily & KPMG — 2018/2019",
    url: "https://bomdzcpoyeebfxtqwnuh.supabase.co/storage/v1/object/public/bella-images/pdfs/1782776018250-7vx0yp.pdf",
  },
  {
    title: "TOSK Certificate of Membership",
    subtitle: "Tour Operators Society of Kenya — No. 0211",
    url: "https://bomdzcpoyeebfxtqwnuh.supabase.co/storage/v1/object/public/bella-images/pdfs/1782776015218-fv50ps.pdf",
  },
  {
    title: "TRA Tourism Licence",
    subtitle: "Tourism Regulatory Authority — Licence No. TRA1/47/C01/74390",
    url: "https://bomdzcpoyeebfxtqwnuh.supabase.co/storage/v1/object/public/bella-images/pdfs/1782776012926-jxicnu.pdf",
  },
];

export default function PartnersSection() {
  return (
    <section className="bg-white border-t border-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left column — Partners */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D98200] mb-5">Our Partners</p>
            <div className="flex flex-wrap items-center gap-8">
              {partners.map((p) => (
                <div key={p.name} className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
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

          {/* Right column — Proof of Association and Excellence */}
          <div className="md:border-l md:border-gray-100 md:pl-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D98200] mb-5">
              Proof of Association and Excellence
            </p>
            <div className="space-y-3">
              {certificates.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-[#0B3D2E]/30 hover:bg-gray-50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0B3D2E]/8 flex items-center justify-center flex-shrink-0">
                    <FileText size={16} className="text-[#0B3D2E]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 leading-snug">{cert.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5 truncate">{cert.subtitle}</p>
                  </div>
                  <ExternalLink size={13} className="text-gray-300 group-hover:text-[#0B3D2E] flex-shrink-0 transition-colors" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
