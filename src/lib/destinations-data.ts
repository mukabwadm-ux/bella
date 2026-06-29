import type { Destination } from "@/types";

export interface DestinationFull extends Destination {
  best_time: string;
  climate: string;
  highlights: string[];
  about: string;
  tour_slugs: string[];
}

export const destinationsData: DestinationFull[] = [
  {
    id: "1",
    slug: "maasai-mara",
    name: "Maasai Mara",
    country: "Kenya",
    region: "Rift Valley",
    short_description: "Kenya's most iconic game reserve — home of the Great Migration and the Big Five.",
    long_description: "",
    hero_image: "/images/Ashnil-Mara-6.jpg",
    featured: true,
    created_at: "",
    best_time: "July – October (Migration), January – March (Calving Season)",
    climate: "Warm and dry Jul–Oct · Green and lush Nov–Jun · 20–30°C year-round",
    about:
      "The Maasai Mara is Kenya's crown jewel and one of the most celebrated wildlife destinations on earth. Stretching across 1,500 km² of open savanna in Kenya's southern Rift Valley, the Mara forms the northern extension of the greater Serengeti ecosystem. It is home to the densest concentration of lion in Africa, resident cheetah, massive elephant herds, and every member of the Big Five. Between July and October, over 1.5 million wildebeest, zebra, and gazelle cross the Mara River in the great annual migration — one of the most dramatic natural events on the planet. Year-round, the Mara rewards visitors with exceptional predator-prey interactions, stunning landscapes, and an authentic connection to the ancient Maasai culture that surrounds the reserve.",
    highlights: [
      "The Great Wildebeest Migration and dramatic Mara River crossings",
      "Africa's highest density of lion and cheetah",
      "All of the Big Five within a single reserve",
      "Hot air balloon safaris at sunrise",
      "Maasai cultural villages and warrior ceremonies",
      "Private conservancies for exclusive, off-road game drives",
    ],
    tour_slugs: ["3-day-maasai-mara-safari", "7-day-classic-kenya", "honeymoon-mara-zanzibar"],
  },
  {
    id: "2",
    slug: "amboseli",
    name: "Amboseli",
    country: "Kenya",
    region: "Southern Kenya",
    short_description: "Iconic elephant herds set against the snow-capped peak of Kilimanjaro.",
    long_description: "",
    hero_image: "/images/keekorok.jpg",
    featured: true,
    created_at: "",
    best_time: "June – October · January – February",
    climate: "Warm and dry Jun–Oct · Short rains Oct–Nov · Long rains Mar–May · 20–28°C",
    about:
      "Amboseli National Park is one of Africa's most photogenic destinations — a vast, open ecosystem at the foot of Mount Kilimanjaro, Africa's highest peak. The park is famous for its huge elephant families, many of which have been studied for over 50 years by researchers, making them exceptionally relaxed around vehicles and allowing for extraordinarily close encounters. On clear mornings, the sight of a matriarch leading her family across the open plains with Kilimanjaro's snow-capped summit gleaming behind them is one of the most iconic images in all of wildlife photography. Beyond elephants, Amboseli is home to lion, cheetah, giraffe, zebra, and over 400 species of birds. The Enkongo Narok swamps at the base of the mountain support an abundance of hippo and waterbirds, creating beautiful reflections in the still water.",
    highlights: [
      "World-famous elephant families habituated to vehicles",
      "Kilimanjaro as the ultimate wildlife photography backdrop",
      "The Enkongo Narok swamp — hippo and waterbirds",
      "Excellent cheetah and lion sightings on the open plains",
      "Over 400 bird species recorded",
      "Authentic Maasai community visits nearby",
    ],
    tour_slugs: ["7-day-classic-kenya"],
  },
  {
    id: "3",
    slug: "zanzibar",
    name: "Zanzibar",
    country: "Tanzania",
    region: "Indian Ocean Islands",
    short_description: "The spice islands — white-sand beaches, turquoise waters, and ancient Stone Town.",
    long_description: "",
    hero_image: "/images/Swahili-0-1.jpg",
    featured: true,
    created_at: "",
    best_time: "June – October (Dry Season) · December – February",
    climate: "Tropical · 25–32°C year-round · Short rains Oct–Nov · Long rains Mar–May",
    about:
      "Zanzibar is a semi-autonomous archipelago off the coast of Tanzania, steeped in a rich history of Swahili, Arab, Persian, and Portuguese influence. The main island — Unguja — is famous for its dazzling white-sand beaches and turquoise Indian Ocean waters, but there is far more to Zanzibar than the beach. The UNESCO-listed Stone Town at the island's heart is a living museum of ancient carved doorways, mosques, bazaars, and the sobering legacy of the East African spice trade and slave market. Zanzibar is also the source of some of the world's finest spices — cloves, vanilla, cinnamon, nutmeg, and cardamom still grow here in abundance, earning the island its nickname: the Spice Island. For safari travellers, Zanzibar makes the perfect complement — a few nights of pure relaxation after the intensity of the bush.",
    highlights: [
      "World-class white-sand beaches — Nungwi, Kendwa, Paje",
      "UNESCO World Heritage Site — Stone Town",
      "Spice farm tours through clove, vanilla, and cinnamon groves",
      "Sunset dhow cruises on the Indian Ocean",
      "Snorkelling at Mnemba Atoll — one of Africa's finest dive sites",
      "Dolphin watching at Kizimkazi",
    ],
    tour_slugs: ["5-day-zanzibar-beach", "honeymoon-mara-zanzibar"],
  },
  {
    id: "4",
    slug: "serengeti",
    name: "Serengeti",
    country: "Tanzania",
    region: "Northern Tanzania",
    short_description: "Endless plains, enormous wildlife herds, and the greatest show on earth.",
    long_description: "",
    hero_image: "/images/SSS-4.jpg",
    featured: true,
    created_at: "",
    best_time: "June – October (Migration) · January – March (Calving)",
    climate: "Warm and dry Jun–Oct · Short rains Oct–Nov · Long rains Apr–May · 20–30°C",
    about:
      "The Serengeti — from the Maasai word 'Siringet' meaning 'endless plains' — is Tanzania's most celebrated national park and a UNESCO World Heritage Site. Covering nearly 15,000 km², it is the largest, oldest, and arguably the most impressive wildlife ecosystem on earth. The Serengeti is the stage for the greatest wildlife spectacle on the planet: the Great Wildebeest Migration, in which 1.5 million wildebeest and hundreds of thousands of zebra and gazelle move in a vast circuit following the rains. But the Serengeti is exceptional even outside migration season — it holds the largest lion population in Africa, enormous leopard numbers along the Seronera River, cheetah on the open plains, and one of the only remaining healthy black rhino populations on the continent, protected within the Ngorongoro Crater adjacent to the park.",
    highlights: [
      "The Great Wildebeest Migration — the greatest wildlife show on earth",
      "Africa's largest lion population",
      "High-density leopard sightings along the Seronera River",
      "Cheetah hunts on the open southern plains",
      "Adjacent Ngorongoro Crater — a world wonder",
      "Genuine wilderness — vast, remote, and unspoilt",
    ],
    tour_slugs: ["8-day-serengeti-ngorongoro"],
  },
  {
    id: "5",
    slug: "mount-kenya",
    name: "Mount Kenya",
    country: "Kenya",
    region: "Central Kenya",
    short_description: "Africa's second-highest peak — glaciers, moorlands, and extraordinary wildlife.",
    long_description: "",
    hero_image: "/images/LNR-4.jpg",
    featured: true,
    created_at: "",
    best_time: "January – February · August – September (Best Climbing Windows)",
    climate: "Alpine · Cold at altitude (-5°C at summit) · Warm at base (20–25°C) · Equatorial rains Apr–Jun, Oct–Nov",
    about:
      "Mount Kenya is Africa's second-highest mountain at 5,199m, rising dramatically from the surrounding plains in Kenya's Central Highlands. A UNESCO World Heritage Site and national park, it is one of the most biologically diverse mountains in the world, with distinct ecological zones ranging from montane rainforest at the base through Afro-alpine moorland to permanent glaciers and rocky summits. The mountain is home to an extraordinary array of wildlife — elephant, buffalo, leopard, and the endemic Mount Kenya mole rat inhabit the forests, while the moorlands above 3,000m support eland, rock hyrax, and the spectacular lammergeier vulture. For trekkers, the mountain offers multiple routes of varying difficulty to Point Lenana (4,985m) — the highest accessible summit and a deeply rewarding adventure for fit walkers. Technical climbers can attempt the true summits of Batian (5,199m) and Nelion (5,188m).",
    highlights: [
      "Point Lenana summit (4,985m) — Africa's third highest peak",
      "Spectacular Afro-alpine moorlands and giant groundsel forests",
      "Glaciers and glacial lakes at high altitude",
      "Diverse wildlife: elephant, buffalo, leopard in the montane forest",
      "Multiple trekking routes for different fitness levels",
      "Sunrise from the summit — one of Africa's most magnificent views",
    ],
    tour_slugs: ["4-day-mount-kenya-trek"],
  },
  {
    id: "6",
    slug: "diani-beach",
    name: "Diani Beach",
    country: "Kenya",
    region: "Kenyan South Coast",
    short_description: "Kenya's finest beach — pristine coral reef, turquoise water, and swaying palms.",
    long_description: "",
    hero_image: "/images/Southern-palm-8-1.jpg",
    featured: false,
    created_at: "",
    best_time: "October – March (Best Beach Season)",
    climate: "Tropical · 26–32°C year-round · Long rains Apr–Jun · Short rains Oct–Nov",
    about:
      "Diani Beach, stretching 17 km along Kenya's south coast, is consistently voted one of Africa's best beaches and one of the top beaches in the world. The beach is backed by dense forest — home to Colobus monkeys — and fronted by a protected coral reef that creates a calm, sheltered lagoon perfect for swimming and snorkelling. Diani is a world-class kite surfing destination (the consistent Indian Ocean trade winds are legendary), and the reef beyond the lagoon offers exceptional scuba diving with manta rays, whale sharks, and abundant coral fish. The south coast has a deeply laid-back, tropical atmosphere quite different from Mombasa's busier north coast — perfect for travellers wanting a quiet, high-quality beach experience after a Kenya safari.",
    highlights: [
      "17km of pristine white-sand beach — regularly voted Africa's best",
      "Calm, clear lagoon protected by coral reef",
      "World-class kite surfing with consistent trade winds",
      "Scuba diving — manta rays, whale sharks, vibrant reef",
      "Colobus monkey forest directly behind the beach",
      "Shimba Hills Reserve — elephant and roan antelope nearby",
    ],
    tour_slugs: [],
  },
];

export function getDestinationBySlug(slug: string): DestinationFull | undefined {
  return destinationsData.find((d) => d.slug === slug);
}
