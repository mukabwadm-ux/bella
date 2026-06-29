import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Tag, ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { supabase } from "@/lib/supabase";
import sanitizeHtml from "sanitize-html";

interface ArticleContent {
  slug: string;
  title: string;
  excerpt: string;
  cover_image: string;
  category: string;
  tags: string[];
  author: string;
  published_at: string;
  read_time: number;
  body: Section[];
}

interface Section {
  type: "paragraph" | "h2" | "h3" | "ul" | "quote" | "tip";
  content: string | string[];
}

const articles: Record<string, ArticleContent> = {
  "discovering-romance-in-east-africa": {
    slug: "discovering-romance-in-east-africa",
    title: "Discovering Romance in East Africa",
    excerpt:
      "From private game drives at dawn to candlelit dinners under a cathedral of stars — why East Africa is the world's most extraordinary honeymoon destination.",
    cover_image: "/images/Ramada-2-1.jpg",
    category: "Honeymoon",
    tags: ["romance", "zanzibar", "maasai mara", "honeymoon"],
    author: "Bella Safaris Team",
    published_at: "2024-02-14",
    read_time: 7,
    body: [
      {
        type: "paragraph",
        content:
          "Imagine waking before sunrise, stepping out of your canvas tent into the cool Mara air, and watching the golden horizon ignite as a lion calls in the distance. Your guide is already waiting with hot coffee and a soft blanket. This is how your honeymoon begins — not with crowds and queues, but with the wild, unhurried rhythm of East Africa.",
      },
      {
        type: "h2",
        content: "Why East Africa is the Ultimate Honeymoon Destination",
      },
      {
        type: "paragraph",
        content:
          "East Africa has long been the world's best-kept romantic secret. While the Maldives offers pristine beaches and Europe offers cultural grandeur, no destination on earth combines the thrill of the wild with pure luxury the way Kenya and Tanzania do. Every moment here is cinematic — the kind of backdrop that makes the rest of the world feel small and ordinary.",
      },
      {
        type: "paragraph",
        content:
          "Whether you are watching a cheetah hunt from a private game vehicle at dawn, or clinking champagne glasses as the sun dips behind the Ngorongoro Crater, East Africa gifts honeymooners with experiences so vivid they become the stories you tell for the rest of your lives.",
      },
      {
        type: "h2",
        content: "The Classic Honeymoon Route: Mara + Zanzibar",
      },
      {
        type: "paragraph",
        content:
          "The most beloved honeymoon itinerary in East Africa is the bush-to-beach combination — a few days in the Maasai Mara or Serengeti followed by a week on the white-sand shores of Zanzibar. It is the perfect contrast: adrenaline and awe in the bush, then blissful relaxation on the island.",
      },
      {
        type: "ul",
        content: [
          "Days 1–3: Fly into Nairobi and transfer to a private tented camp in the Maasai Mara. Morning and evening game drives with a private guide. Sundowner cocktails on a riverbank as hippos wallow below.",
          "Day 4: Bush breakfast in the open savanna before a scenic flight to Zanzibar.",
          "Days 5–9: Check into a boutique beach villa on the north coast. Snorkelling, spice farm tours, a sunset dhow cruise, and long, quiet meals on your private terrace.",
          "Day 10: Fly back to Nairobi and onward home.",
        ],
      },
      {
        type: "h2",
        content: "Romantic Experiences You Can Only Find Here",
      },
      {
        type: "h3",
        content: "The Hot Air Balloon Safari",
      },
      {
        type: "paragraph",
        content:
          "Floating above the Maasai Mara at sunrise in a hot air balloon is one of Africa's most iconic romantic experiences. You drift silently over herds of wildebeest and giraffe as the sky turns amber and pink, completely alone with your partner and the landscape. A champagne breakfast in the bush follows the landing — the perfect anniversary for a new marriage.",
      },
      {
        type: "h3",
        content: "Private Bush Dinners",
      },
      {
        type: "paragraph",
        content:
          "The best luxury camps in Kenya and Tanzania will arrange a private dinner in the bush for honeymooners — a candlelit table set up in a clearing, lanterns swaying in the breeze, a dedicated chef preparing a three-course meal while your guide shares stories of the wildlife you tracked that day. The Milky Way overhead. Absolute silence except for the distant call of a hyena.",
      },
      {
        type: "h3",
        content: "Zanzibar Dhow Sunset Cruise",
      },
      {
        type: "paragraph",
        content:
          "A traditional Swahili dhow gliding across the Indian Ocean at dusk, with a seafood spread laid out on deck and the old Stone Town glowing amber on the horizon — this is the kind of evening that Zanzibar was made for. Many of our honeymoon couples tell us this was the single most beautiful moment of their trip.",
      },
      {
        type: "quote",
        content:
          "Our honeymoon was truly magical. The Mara at dawn, then Zanzibar's beaches — it was a dream. Bella Safaris took care of every detail and made us feel so special. — Sharon Mmbone",
      },
      {
        type: "h2",
        content: "Choosing the Right Lodges",
      },
      {
        type: "paragraph",
        content:
          "Not all safari lodges are created equal for honeymooners. When we plan a honeymoon, we look for properties that offer privacy above all — private plunge pools, secluded tents away from the main camp, in-room dining options, and dedicated butler service. We have spent years building relationships with the finest romantic properties in East Africa so we can match you perfectly to your style.",
      },
      {
        type: "ul",
        content: [
          "In the Maasai Mara: Intimate tented camps along the Mara River with under-10-tent capacity for a truly private feel.",
          "In Zanzibar: Boutique beach villas on the quieter north or east coast, away from the busier resort areas.",
          "For the ultra-romantic: Private fly-camping in the bush — just the two of you, your guide, and the stars.",
        ],
      },
      {
        type: "tip",
        content:
          "Honeymoon Tip: Always let us know you are celebrating your honeymoon when you enquire. We coordinate with our lodge partners to arrange complimentary surprises — rose petals, champagne on arrival, private dinners — as our gift to you.",
      },
      {
        type: "h2",
        content: "When to Go",
      },
      {
        type: "paragraph",
        content:
          "The good news is that East Africa is a year-round destination. For the Maasai Mara, the classic Great Migration spectacle runs July to October. But the green season (November to March) offers lush landscapes, baby animals, and significantly lower rates — making it a wonderful value option for honeymooners who want privacy over peak-season crowds.",
      },
      {
        type: "paragraph",
        content:
          "Zanzibar is best from June to October (the dry season), though the short rains in November are brief and the island remains warm and beautiful throughout the year.",
      },
      {
        type: "h2",
        content: "Start Planning Your Honeymoon",
      },
      {
        type: "paragraph",
        content:
          "Every honeymoon we plan is different, because every couple is different. Some want adrenaline and adventure; others want privacy and pure relaxation. Our job is to listen, understand your vision, and build an itinerary that is unmistakably yours. Tell us your dream and we will make it happen.",
      },
    ],
  },

  "best-time-to-visit-maasai-mara": {
    slug: "best-time-to-visit-maasai-mara",
    title: "Best Time to Visit the Maasai Mara",
    excerpt:
      "The Great Migration, seasonal weather patterns, crowd levels, and green season secrets — everything you need to pick the perfect window for your Mara safari.",
    cover_image: "/images/Ashnil-Mara-6.jpg",
    category: "Travel Guide",
    tags: ["maasai mara", "migration", "planning", "seasons"],
    author: "Bella Safaris Team",
    published_at: "2024-01-10",
    read_time: 8,
    body: [
      {
        type: "paragraph",
        content:
          "The Maasai Mara is Kenya's most iconic wildlife reserve — a vast, open savanna that forms part of the greater Serengeti ecosystem. It is home to the Big Five, some of Africa's densest lion and cheetah populations, and every year plays host to one of the greatest natural events on the planet: the Great Wildebeest Migration.",
      },
      {
        type: "paragraph",
        content:
          "But when exactly should you visit? The answer depends on what you want to see, how much you want to spend, and how much company you are willing to share the bush with. Here is our complete, honest guide.",
      },
      {
        type: "h2",
        content: "The Great Migration: July to October",
      },
      {
        type: "paragraph",
        content:
          "The Migration is the world's largest overland mammal movement — over 1.5 million wildebeest, 400,000 zebra, and 200,000 gazelle moving in a great circuit between the Serengeti (Tanzania) and the Maasai Mara (Kenya). In July, the herds begin crossing the Mara River into Kenya. These crossings are dramatic and chaotic — crocodiles launch from the water as thousands of wildebeest leap blindly from the banks. It is raw, violent, breathtaking.",
      },
      {
        type: "ul",
        content: [
          "July–August: River crossings begin. The herds are in Kenya and the action is intense. Expect full camps and higher prices.",
          "September: Often considered the single best month. Herds are well-established in the Mara, crossings happen daily, and the light is spectacular.",
          "October: Crossings begin slowing as herds start moving back south. Still excellent game viewing with slightly fewer crowds.",
          "November: The herds return to Tanzania. The Mara quiets considerably.",
        ],
      },
      {
        type: "quote",
        content:
          "September in the Mara is like nothing else on earth. We saw three river crossings in two days. I cried at the first one — it is that overwhelming. — Catherine Mutahi, Bella Safaris guest",
      },
      {
        type: "h2",
        content: "Peak Season Considerations",
      },
      {
        type: "paragraph",
        content:
          "July to October is peak season, which means two things: the wildlife viewing is at its best, and the camps are at their fullest and most expensive. The Mara ecosystem is heavily visited during this window — you will share game drives with multiple vehicles at popular sightings.",
      },
      {
        type: "tip",
        content:
          "Peak Season Tip: Book at least 6–9 months in advance for July–September travel. The best camps sell out fast, particularly for migration season. If you are flexible on dates, mid-September often offers the same quality wildlife with slightly fewer visitors than August.",
      },
      {
        type: "h2",
        content: "The Green Season: November to June",
      },
      {
        type: "paragraph",
        content:
          "Here is what most safari brochures will not tell you: the green season in the Maasai Mara is spectacular. The two rainy periods — the short rains (October–November) and the long rains (March–May) — transform the landscape into something lush and vivid. And the game viewing? Often better than you would expect.",
      },
      {
        type: "h3",
        content: "Why the Green Season is Underrated",
      },
      {
        type: "ul",
        content: [
          "The calving season (January–March) sees thousands of wildebeest, zebra, and gazelle giving birth on the Mara plains. Predator activity is at its peak.",
          "Fewer vehicles at sightings means a more intimate, authentic experience.",
          "Rates are 20–40% lower than peak season.",
          "The landscape is incredibly beautiful — green plains, wildflowers, dramatic skies.",
          "Excellent birdwatching, with migratory species present.",
        ],
      },
      {
        type: "paragraph",
        content:
          "The rains in the Mara are rarely all-day downpours. They typically arrive in short, heavy showers — often in the afternoon — leaving crisp, clear mornings perfect for game drives. Many seasoned safari-goers actually prefer the green season for this reason.",
      },
      {
        type: "h2",
        content: "Month-by-Month Quick Guide",
      },
      {
        type: "ul",
        content: [
          "January–February: Excellent. Calving season, predator action, resident wildlife, clear skies. Highly recommended.",
          "March–April: Short rains. Fewer visitors, lush scenery, good value. Some tracks may be muddy.",
          "May–June: Long rains taper off. Resident game concentrates. Often overlooked and great value.",
          "July–August: Peak migration season. River crossings. Book early.",
          "September: Best all-round month — migration, predators, light, and weather.",
          "October: Late migration, crossings slow. Still very good.",
          "November: Herds return south. Short rains begin. Fewer visitors.",
          "December: Good resident game. Festive season sees some camps fill up again.",
        ],
      },
      {
        type: "h2",
        content: "Private Conservancies vs. the National Reserve",
      },
      {
        type: "paragraph",
        content:
          "One of the best-kept secrets of the Mara ecosystem is the network of private conservancies that surround the national reserve — areas like the Olare Motorogi, Ol Kinyei, and Naboisho conservancies. These areas have strict limits on the number of vehicles and visitors, meaning you can enjoy sightings in complete privacy. They also allow off-road driving and night game drives — experiences not permitted in the national reserve.",
      },
      {
        type: "tip",
        content:
          "Our Recommendation: For couples and small groups seeking a more exclusive experience, we always recommend staying in one of the private conservancies. The wildlife is just as prolific, and the experience is incomparably more intimate.",
      },
      {
        type: "h2",
        content: "Planning Your Mara Safari",
      },
      {
        type: "paragraph",
        content:
          "Whether you are chasing the migration or seeking the quiet magic of the green season, our team at Bella Safaris will help you pick the perfect window and match you with the right camps and experiences for your travel style. Get in touch to start building your Maasai Mara safari.",
      },
    ],
  },

  "what-to-pack-for-a-kenyan-safari": {
    slug: "what-to-pack-for-a-kenyan-safari",
    title: "What to Pack for a Kenyan Safari",
    excerpt:
      "A comprehensive packing list vetted by our expert guides — the right clothing colours, camera gear, health essentials, and the items most travellers forget.",
    cover_image: "/images/Enkorok-3.jpg",
    category: "Travel Tips",
    tags: ["packing", "kenya", "safari", "essentials"],
    author: "Bella Safaris Team",
    published_at: "2023-12-01",
    read_time: 9,
    body: [
      {
        type: "paragraph",
        content:
          "Packing for a safari is unlike packing for any other trip. The bush has its own rules — rules shaped by decades of guiding experience. Pack too much and you will be charged excess baggage fees on the light aircraft transfers. Pack the wrong colours and you might spook the wildlife. Get the health essentials wrong and an amazing trip can unravel quickly.",
      },
      {
        type: "paragraph",
        content:
          "This guide is put together by our Bella Safaris guides — people who have seen thousands of guests pack their bags over the years. We know what works, what does not, and what most first-time safari travellers forget.",
      },
      {
        type: "h2",
        content: "The Golden Rule: Luggage Weight and Size",
      },
      {
        type: "paragraph",
        content:
          "If your Kenya itinerary includes a light aircraft transfer to the Mara (which most do), your luggage must be soft-sided and weigh no more than 15kg total, including hand luggage. This is a strict rule imposed by the airlines — not something we can waive. We recommend a soft duffel bag rather than a hard suitcase.",
      },
      {
        type: "tip",
        content:
          "Luggage Tip: If you are travelling with a full-size suitcase, many Nairobi hotels offer free luggage storage. Pack a small duffel with your safari essentials and leave the main case behind during the bush portion of your trip.",
      },
      {
        type: "h2",
        content: "Clothing: Colours Matter",
      },
      {
        type: "paragraph",
        content:
          "This is the single most important packing rule for safari: avoid white, black, and bright colours. These either attract tsetse flies (dark colours), reflect light, or make you stand out to wildlife. Stick to neutral, earthy tones.",
      },
      {
        type: "ul",
        content: [
          "Best colours: Khaki, tan, olive green, beige, stone, dusty brown",
          "Avoid: White, black, bright blue, red, orange, or any fluorescent colour",
          "Layering is essential — mornings in the Mara can be cold (10–15°C), afternoons warm (28–32°C)",
          "Pack 2–3 long-sleeve shirts for evening insect protection",
          "A lightweight fleece or zip-up jacket for early morning drives",
          "A waterproof or windproof shell layer if travelling during rainy seasons",
          "Comfortable, well-broken-in walking shoes for camp and short walks",
          "Flip-flops or sandals for around the lodge",
          "One smart-casual outfit if dining at a more upscale lodge",
        ],
      },
      {
        type: "h2",
        content: "Camera Gear",
      },
      {
        type: "paragraph",
        content:
          "The Mara is arguably the world's best wildlife photography destination — the light is extraordinary, the animals are habituated to vehicles, and the action is relentless. Do not arrive with only your phone camera.",
      },
      {
        type: "ul",
        content: [
          "A zoom lens of at least 300mm (ideally 400–600mm) for wildlife shots",
          "A wide-angle lens for landscapes and camp shots",
          "Spare batteries — charging opportunities can be limited in remote camps",
          "Memory cards with plenty of space (you will shoot more than you expect)",
          "A dust bag or camera bag with a rain cover — dust is significant on dirt tracks",
          "A small beanbag for stabilising your camera on the vehicle window",
          "Binoculars — at least 8x42 — essential for spotting and identifying animals",
        ],
      },
      {
        type: "quote",
        content:
          "Most guests who bring binoculars say it completely transformed their safari experience. Even if you have a long camera lens, binoculars let you scan the horizon in real time. — Samuel, Lead Guide, Bella Safaris",
      },
      {
        type: "h2",
        content: "Health & Medication Essentials",
      },
      {
        type: "paragraph",
        content:
          "Kenya requires no specific vaccinations for entry (except Yellow Fever if arriving from an endemic country), but we strongly recommend the following:",
      },
      {
        type: "ul",
        content: [
          "Antimalarials — consult your doctor or travel clinic at least 4 weeks before departure",
          "High-DEET insect repellent (50%+) — essential for morning and evening in the bush",
          "Sun protection: SPF 50 sunscreen and a wide-brimmed hat",
          "Lip balm with SPF — the African sun is intense",
          "Basic first aid kit: plasters, antiseptic cream, diarrhoea treatment, antihistamines",
          "Any personal prescription medications — bring more than you need",
          "Rehydration sachets — the dry Mara air dehydrates you faster than you notice",
        ],
      },
      {
        type: "tip",
        content:
          "Health Tip: Drink more water than you think you need on safari. The combination of early starts, dry air, and excitement means dehydration sneaks up on guests. All our vehicles carry cold water and snacks.",
      },
      {
        type: "h2",
        content: "Miscellaneous Must-Haves",
      },
      {
        type: "ul",
        content: [
          "A small daypack or camera bag for game drives",
          "A headlamp or torch — paths between tents in remote camps are unlit",
          "A travel adaptor (Kenya uses Type G plugs, same as UK)",
          "A small amount of Kenyan shillings for tips and small purchases",
          "A journal — you will want to record everything",
          "A lightweight travel towel if visiting budget lodges",
        ],
      },
      {
        type: "h2",
        content: "What NOT to Pack",
      },
      {
        type: "ul",
        content: [
          "Camouflage clothing — illegal in Kenya",
          "Hard-sided suitcases if taking bush flights",
          "Excessive electronics — the bush is about disconnecting",
          "Strong perfumes or colognes — they attract insects and disturb wildlife",
          "Plastic bags — banned in Kenya; bring reusable alternatives",
        ],
      },
      {
        type: "h2",
        content: "Packing for Zanzibar (If Combining with Safari)",
      },
      {
        type: "paragraph",
        content:
          "If your itinerary includes a Zanzibar beach extension — as many of our packages do — pack separately for this. Zanzibar is a predominantly Muslim island and while beachwear is fine on the beach, modesty is appreciated when exploring Stone Town or local villages. Pack a light shawl or sarong that can double as a cover-up.",
      },
      {
        type: "h2",
        content: "Ready to Go?",
      },
      {
        type: "paragraph",
        content:
          "Once you have booked your safari with us, our team will send you a detailed pre-departure pack tailored to your specific itinerary — including lodge-specific packing notes, health advice, and travel tips. Every trip we run starts with making sure you are fully prepared. Contact us to begin planning your Kenyan safari.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = articles[params.slug];
  if (article) return { title: article.title, description: article.excerpt };

  // CMS article
  const { data } = await supabase.from("blog_posts").select("title, excerpt, seo_title, meta_description").eq("slug", params.slug).single();
  if (!data) return { title: "Article Not Found" };
  return { title: data.seo_title || data.title, description: data.meta_description || data.excerpt };
}

export async function generateStaticParams() {
  const hardcoded = Object.keys(articles).map((slug) => ({ slug }));
  const { data } = await supabase.from("blog_posts").select("slug");
  const cms = (data ?? []).map((r: { slug: string }) => ({ slug: r.slug }));
  const all = [...hardcoded];
  cms.forEach((c) => { if (!all.find((h) => h.slug === c.slug)) all.push(c); });
  return all;
}

export const revalidate = 3600;

function renderSection(section: Section, index: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2 key={index} className="text-2xl font-bold text-safari-green mt-10 mb-4">
          {section.content as string}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className="text-lg font-semibold text-safari-green mt-6 mb-3">
          {section.content as string}
        </h3>
      );
    case "paragraph":
      return (
        <p key={index} className="text-body-text leading-relaxed mb-4">
          {section.content as string}
        </p>
      );
    case "ul":
      return (
        <ul key={index} className="space-y-2.5 mb-6 ml-1">
          {(section.content as string[]).map((item, i) => (
            <li key={i} className="flex gap-3 text-body-text">
              <span className="w-2 h-2 rounded-full bg-savanna-gold flex-shrink-0 mt-2" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="my-8 border-l-4 border-savanna-gold pl-5 py-2 bg-gold-tint rounded-r-xl"
        >
          <p className="text-body-text italic leading-relaxed">{section.content as string}</p>
        </blockquote>
      );
    case "tip":
      return (
        <div
          key={index}
          className="my-6 bg-green-tint border border-safari-green/20 rounded-xl p-5"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-safari-green mb-1">
            Expert Tip
          </p>
          <p className="text-sm text-body-text leading-relaxed">{section.content as string}</p>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  // If not a hardcoded article, fetch from CMS
  if (!article) {
    const { data: cmsPost } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", params.slug)
      .single();

    if (!cmsPost) notFound();

    const relatedSlugs = Object.keys(articles);
    const readTime = Math.max(1, Math.ceil(cmsPost.content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length / 200));

    return (
      <>
        <section className="relative h-[50vh] min-h-[360px] flex items-end">
          {cmsPost.cover_image && (
            <Image src={cmsPost.cover_image} alt={cmsPost.cover_image_alt || cmsPost.title} fill priority className="object-cover" sizes="100vw" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/85 via-forest-ink/30 to-transparent" />
          <div className="relative container-xl pb-10 text-white">
            <span className="inline-block bg-savanna-gold text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">{cmsPost.category}</span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl text-white">{cmsPost.title}</h1>
          </div>
        </section>

        <div className="bg-surface border-b border-border">
          <div className="container-xl py-4 flex flex-wrap items-center gap-5 text-sm text-muted-text">
            <span className="flex items-center gap-1.5"><User size={14} />{cmsPost.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} />{new Date(cmsPost.published_at).toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} />{readTime} min read</span>
            <div className="flex gap-2 ml-auto flex-wrap">
              {(Array.isArray(cmsPost.tags) ? cmsPost.tags : []).map((tag: string) => (
                <span key={tag} className="flex items-center gap-1 text-xs bg-sand px-2.5 py-1 rounded-full"><Tag size={10} />{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <section className="section-pad bg-sand">
          <div className="container-xl">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-muted-text leading-relaxed mb-8 font-medium border-l-4 border-savanna-gold pl-5">{cmsPost.excerpt}</p>
              <div
                className="prose prose-lg max-w-none prose-headings:text-safari-green prose-a:text-savanna-gold prose-strong:text-safari-green"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(cmsPost.content, {
                    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                      "img", "h1", "h2", "h3", "h4", "h5", "h6", "figure", "figcaption",
                    ]),
                    allowedAttributes: {
                      ...sanitizeHtml.defaults.allowedAttributes,
                      img: ["src", "alt", "width", "height", "class"],
                      a: ["href", "target", "rel", "class"],
                      "*": ["class"],
                    },
                    allowedSchemes: ["http", "https", "mailto"],
                    disallowedTagsMode: "discard",
                  }),
                }}
              />
              <div className="mt-12 bg-safari-green rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Ready to Start Planning?</h3>
                <p className="text-white/75 text-sm mb-5">Talk to our team and let us design your perfect East Africa experience.</p>
                <Link href="/plan-your-trip" className="inline-flex items-center gap-2 bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold px-6 py-3 rounded-full transition-colors">
                  Plan Your Safari <ArrowRight size={16} />
                </Link>
              </div>
              <div className="mt-8">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-safari-green hover:text-savanna-gold transition-colors">
                  <ArrowLeft size={14} /> Back to Travel Stories
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-surface border-t border-border">
          <div className="container-xl">
            <h2 className="text-xl font-bold text-safari-green mb-6">More Travel Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedSlugs.map((slug) => {
                const related = articles[slug];
                return (
                  <Link key={slug} href={`/blog/${slug}`} className="group flex gap-4 bg-sand rounded-xl p-4 hover:bg-green-tint transition-colors">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={related.cover_image} alt={related.title} fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-savanna-gold font-semibold">{related.category}</span>
                      <h4 className="text-sm font-semibold text-safari-green mt-0.5 group-hover:text-savanna-gold transition-colors leading-snug">{related.title}</h4>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-text mt-1">Read more <ArrowRight size={10} /></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }

  const relatedSlugs = Object.keys(articles).filter((s) => s !== article.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <Image
          src={article.cover_image}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/85 via-forest-ink/30 to-transparent" />
        <div className="relative container-xl pb-10 text-white">
          <span className="inline-block bg-savanna-gold text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl text-white">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Meta bar */}
      <div className="bg-surface border-b border-border">
        <div className="container-xl py-4 flex flex-wrap items-center gap-5 text-sm text-muted-text">
          <span className="flex items-center gap-1.5">
            <User size={14} />
            {article.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {new Date(article.published_at).toLocaleDateString("en-KE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {article.read_time} min read
          </span>
          <div className="flex gap-2 ml-auto flex-wrap">
            {article.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-xs bg-sand px-2.5 py-1 rounded-full">
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article body */}
      <section className="section-pad bg-sand">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            {/* Lead */}
            <p className="text-lg md:text-xl text-muted-text leading-relaxed mb-8 font-medium border-l-4 border-savanna-gold pl-5">
              {article.excerpt}
            </p>

            {/* Body sections */}
            <div className="prose-article">
              {article.body.map((section, i) => renderSection(section, i))}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-safari-green rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Ready to Start Planning?
              </h3>
              <p className="text-white/75 text-sm mb-5">
                Talk to our team and let us design your perfect East Africa experience.
              </p>
              <Link
                href="/plan-your-trip"
                className="inline-flex items-center gap-2 bg-savanna-gold hover:bg-sunlit-gold text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Plan Your Safari <ArrowRight size={16} />
              </Link>
            </div>

            {/* Back to blog */}
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-safari-green hover:text-savanna-gold transition-colors"
              >
                <ArrowLeft size={14} />
                Back to Travel Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="section-pad bg-surface border-t border-border">
        <div className="container-xl">
          <h2 className="text-xl font-bold text-safari-green mb-6">More Travel Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedSlugs.map((slug) => {
              const related = articles[slug];
              return (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="group flex gap-4 bg-sand rounded-xl p-4 hover:bg-green-tint transition-colors"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={related.cover_image}
                      alt={related.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-savanna-gold font-semibold">{related.category}</span>
                    <h4 className="text-sm font-semibold text-safari-green mt-0.5 group-hover:text-savanna-gold transition-colors leading-snug">
                      {related.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-text mt-1">
                      Read more <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
