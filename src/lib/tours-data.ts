import type { Tour } from "@/types";

export const toursData: Tour[] = [
  {
    id: "9",
    slug: "3-days-sarova-mara",
    title: "3-Day Maasai Mara Safari at Sarova Mara Game Camp",
    summary:
      "Big Five game drives, a Maasai cultural village, and luxury tented accommodation inside Kenya's most celebrated reserve — Sarova Mara Game Camp puts you right in the heart of the action.",
    hero_image: "/images/tours/maasai-mara/mara-wildebeest-migration.jpg",
    duration: 3,
    group_size: "2–12",
    price_from_kes: 0,
    difficulty: "easy",
    category: "Wildlife Safari",
    destinations: ["maasai-mara"],
    highlights: [
      "Luxury tented accommodation inside the Maasai Mara National Reserve",
      "Morning and afternoon game drives for Big Five and Great Migration sightings",
      "Maasai cultural village visit — traditional dances, customs, and beadwork",
      "Camp activities: swimming, archery, mini-golf, kayaking, and catch-and-release fishing",
      "Optional hot air balloon safari at sunrise over the Mara plains",
      "Family-friendly with dedicated animation team for children",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi — Sarova Mara Game Camp",
        description:
          "Depart Nairobi at 7:00 AM for the scenic 4-hour drive to the Maasai Mara National Reserve, passing through the dramatic Great Rift Valley. Alternatively, fly from Wilson Airport to Keekorok Airstrip (45 minutes) followed by a short 30-minute transfer. Arrive at Sarova Mara Game Camp — located inside the reserve, just 2.5 km from Sekenani Gate — and check into your luxury tent: choose from Mara Deluxe Tents, Mara Club Tents, or Family Suites, each with a private patio and garden or park views. Lunch at the camp restaurant, then head out for your first afternoon game drive (4:00–6:00 PM) through the Maasai Mara in search of lion, elephant, buffalo, and the wider Big Five. Return to camp for dinner by the campfire.",
        meals: "Lunch, Dinner",
        accommodation: "Sarova Mara Game Camp (Luxury Tent)",
      },
      {
        day: 2,
        title: "Full Day of Game Drives and Cultural Exploration",
        description:
          "Rise at 6:00 AM for tea or coffee, then depart at 6:30 AM for an early morning game drive — the most rewarding time for predator activity, with lions finishing their night hunts across the open savanna. Return to camp for a hearty breakfast at 9:30 AM. Mid-morning, enjoy the camp's complimentary activities: mini-golf, archery, a tour of the Chef's Organic Garden, or a swim in the temperature-controlled pool. After lunch, visit a nearby Maasai village (3:00–4:30 PM) to witness traditional dances, learn about Maasai customs, and admire the intricate beadwork. Head straight from the village into a second afternoon game drive (4:30–6:30 PM) — if visiting between July and October, watch for the spectacular Great Migration as wildebeest and zebra cross the Mara River. Optional bush dinner under the stars at an additional cost.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Sarova Mara Game Camp (Luxury Tent)",
      },
      {
        day: 3,
        title: "Morning Game Drive and Departure",
        description:
          "An optional early wake-up for a final morning game drive (6:30–8:30 AM) — one last sweep across the Mara for photographs and wildlife encounters. Return to camp for a full breakfast, then relax by the pool or in your tent before check-out at 11:00 AM. Depart for Nairobi by road (arriving late afternoon) or fly back from Keekorok Airstrip to Wilson Airport.",
        meals: "Breakfast",
        accommodation: "N/A — Departure day",
      },
    ],
    inclusions: [
      "2 nights accommodation in luxury tents at Sarova Mara Game Camp",
      "Full-board meals — breakfast, lunch, and dinner daily",
      "Morning and afternoon game drives in a 4WD safari vehicle",
      "Maasai Mara National Reserve park entry fees",
      "Maasai cultural village visit",
      "Complimentary camp activities: swimming, mini-golf, table tennis, archery, kayaking, catch-and-release fishing",
      "Transfers from/to Nairobi (road or air)",
    ],
    exclusions: [
      "International flights to Nairobi",
      "Kenya visa fees",
      "Travel insurance (strongly recommended)",
      "Hot air balloon safari (optional — highly recommended)",
      "Bush dinner (optional, additional cost)",
      "Walking safari (optional, additional cost)",
      "Manyatta village visit add-on (optional)",
      "Alcoholic beverages",
      "Tips and gratuities",
    ],
    gallery: [
      "/images/tours/maasai-mara/mara-wildebeest-migration.jpg",
      "/images/tours/maasai-mara/mara-zebra-wildebeest.jpg",
      "/images/tours/maasai-mara/mara-lion-portrait.jpg",
      "/images/tours/maasai-mara/mara-acacia-sunset.jpg",
      "/images/tours/maasai-mara/mara-sarova-tent.jpg",
      "/images/tours/maasai-mara/mara-bush-dinner.jpg",
      "/images/tours/maasai-mara/mara-campfire.jpg",
    ],
    faqs: [
      {
        question: "When is the best time to visit for the Great Migration?",
        answer:
          "The Great Wildebeest Migration river crossings are most dramatic from July to October when the herds move north through the Maasai Mara. However, wildlife viewing is exceptional year-round — resident lion, cheetah, elephant, and leopard are present in every season.",
      },
      {
        question: "Can we fly into the Mara instead of driving?",
        answer:
          "Yes. Scheduled flights operate from Wilson Airport, Nairobi to Keekorok Airstrip daily (approximately 45 minutes). From the airstrip, it is a 30-minute transfer to Sarova Mara Game Camp. Flying is our recommended option for guests short on time.",
      },
      {
        question: "Is this package suitable for families?",
        answer:
          "Sarova Mara Game Camp is one of Kenya's most family-friendly safari properties. There is a dedicated animation team keeping children entertained, a swimming pool, and camp activities for all ages. Children will love the Maasai cultural village visit.",
      },
      {
        question: "What should I pack for early morning game drives?",
        answer:
          "The Maasai Mara sits at 1,500–1,900m altitude, so mornings and evenings can be cool. Pack warm layers (fleece or light jacket), a hat, and sun protection for the warmer afternoon drives. Neutral-coloured clothing (khaki, green, grey) is recommended for game drives.",
      },
    ],
    featured: true,
    best_seller: false,
    created_at: "",
  },
  {
    id: "10",
    slug: "3-days-sarova-shaba",
    title: "3-Day Samburu Safari Escape at Sarova Shaba Game Lodge",
    summary:
      "Kenya's wild north — the Samburu Special Five, Ewaso Nyiro River sundowners, and an authentic Samburu cultural manyatta. Three days of exclusive safari at Sarova Shaba Game Lodge in Shaba National Reserve.",
    hero_image: "/images/tours/samburu/samburu-giraffes-elephants.jpg",
    duration: 3,
    group_size: "2–12",
    price_from_kes: 0,
    difficulty: "easy",
    category: "Wildlife Safari",
    destinations: ["samburu"],
    highlights: [
      "Samburu Special Five — Reticulated Giraffe, Grevy's Zebra, Gerenuk, Beisa Oryx, and Somali Ostrich",
      "Luxury riverside accommodation at Sarova Shaba Game Lodge on the Ewaso Nyiro",
      "Crocodile viewing from the lodge's riverbank at dusk",
      "Samburu Cultural Manyatta visit — dances, storytelling, and traditional crafts",
      "Riverside sundowner with views of the African savannah",
      "Boma dinner with live Samburu cultural performances",
      "Optional night game drive for nocturnal wildlife",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi — Sarova Shaba Game Lodge",
        description:
          "Depart Nairobi at 7:00 AM for the scenic 5–6 hour drive through Kenya's Eastern region to Shaba National Reserve — or fly from Wilson Airport to Buffalo Springs Airstrip in just 45 minutes. Arrive at Sarova Shaba Game Lodge at 12:30 PM, nestled on the banks of the Ewaso Nyiro River. Check into your luxury room or suite — all with river views, with interconnecting rooms available for families. Lunch at the lodge restaurant, then head out for your first afternoon game drive (4:00–6:00 PM) in Shaba National Reserve in search of the Samburu Special Five (Reticulated Giraffe, Somali Ostrich, Grevy's Zebra, Gerenuk, and Beisa Oryx) and four of the Big Five. Return to the lodge at 6:30 PM for crocodile viewing along the riverbank before dinner under the stars.",
        meals: "Lunch, Dinner",
        accommodation: "Sarova Shaba Game Lodge (River View Room)",
      },
      {
        day: 2,
        title: "Full-Day Wildlife and Cultural Experience",
        description:
          "Wake at 6:00 AM for coffee or tea, then depart at 6:30 AM for an early morning game drive — the best time to spot predators, elephants, and gazelles in the cool of the day. Return to the lodge at 9:30 AM for a leisurely bush breakfast beside the Ewaso Nyiro River. Mid-morning, choose from complimentary lodge activities: a dip in the pool, fish foot therapy at the river's edge, or an optional walking safari. After lunch, visit a Samburu Cultural Manyatta (3:00–4:30 PM) for an immersive experience of Samburu traditions — traditional dances, storytelling, and the intricate art of beadwork. Spend the late afternoon at leisure before a riverside sundowner at 6:00 PM as the sun sets over the savannah. The evening is crowned with a boma or bush dinner at 7:30 PM featuring live Samburu cultural performances — one of the most memorable evenings on any Kenya safari. Optional night game drive at 9:30 PM at an additional cost.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Sarova Shaba Game Lodge (River View Room)",
      },
      {
        day: 3,
        title: "Morning Game Drive and Departure",
        description:
          "An optional early morning game drive (6:30–8:30 AM) offers a final chance to spot lions, elephants, and the more than 500 bird species recorded in the reserve. Return for breakfast at 9:00 AM, then check out at 11:00 AM. Depart for Nairobi by road, arriving late afternoon, or fly back from Buffalo Springs or Kalama Airstrip to Wilson Airport.",
        meals: "Breakfast",
        accommodation: "N/A — Departure day",
      },
    ],
    inclusions: [
      "2 nights accommodation at Sarova Shaba Game Lodge (river view room or suite)",
      "Full-board meals — breakfast, lunch, and dinner daily",
      "Morning and afternoon game drives in a 4WD safari vehicle",
      "Shaba National Reserve park entry fees",
      "Samburu Cultural Manyatta visit",
      "Complimentary lodge activities: swimming, crocodile viewing, fish foot therapy, darts, table tennis",
      "Riverside sundowner",
      "Boma/bush dinner with Samburu cultural performances",
      "Transfers from/to Nairobi (road or air)",
    ],
    exclusions: [
      "International flights to Nairobi",
      "Kenya visa fees",
      "Travel insurance (strongly recommended)",
      "Night game drive (optional, additional cost)",
      "Spa treatments at the lodge spa (optional)",
      "Bush breakfast (optional, additional cost)",
      "Hill or gorge climbing excursion (optional)",
      "Alcoholic beverages",
      "Tips and gratuities",
    ],
    gallery: [
      "/images/tours/samburu/samburu-giraffes-elephants.jpg",
      "/images/tours/samburu/samburu-giraffes-zebras.jpg",
      "/images/tours/samburu/samburu-warriors-dance.jpg",
      "/images/tours/samburu/samburu-manyatta-village.jpg",
      "/images/tours/samburu/samburu-woman-manyatta.jpg",
      "/images/tours/samburu/shaba-ewaso-nyiro-sundowner.jpg",
      "/images/tours/samburu/shaba-ewaso-nyiro-river.jpg",
      "/images/tours/samburu/shaba-lodge-restaurant-pool.jpg",
      "/images/tours/samburu/shaba-lodge-night.jpg",
    ],
    faqs: [
      {
        question: "What makes Samburu different from the Maasai Mara?",
        answer:
          "Samburu is home to five endemic species not found in southern Kenya — known as the Samburu Special Five: Reticulated Giraffe, Grevy's Zebra, Gerenuk, Beisa Oryx, and Somali Ostrich. The landscape is also distinct — a dramatic semi-arid wilderness of rocky hills, doum palms, and the Ewaso Nyiro River, giving it a feel completely unlike the Mara's open savanna.",
      },
      {
        question: "Can we fly directly to Samburu from Nairobi?",
        answer:
          "Yes. Scheduled flights operate from Wilson Airport, Nairobi to Buffalo Springs Airstrip (approximately 45 minutes). From the airstrip it is a short transfer to Sarova Shaba Game Lodge. This is our recommended option — the drive takes 5–6 hours.",
      },
      {
        question: "Is the boma dinner included?",
        answer:
          "Yes — the boma or bush dinner on Day 2 evening is included in the package, along with live Samburu cultural performances. It is one of the highlights of the safari experience at Shaba.",
      },
      {
        question: "Is this trip family-friendly?",
        answer:
          "Sarova Shaba Game Lodge is an excellent choice for families, offering interconnecting rooms, a swimming pool, and a wide range of activities. The Cultural Manyatta visit and crocodile viewing from the riverbank are particularly engaging for children.",
      },
    ],
    featured: true,
    best_seller: false,
    created_at: "",
  },
  {
    id: "11",
    slug: "2-nights-tsavo",
    title: "3 Days in Tsavo National Park — East & West",
    summary:
      "Kenya's largest wilderness — iconic red elephants, Lugard Falls, Mzima Springs, and the black rhino sanctuary. Three days exploring Tsavo East and West from luxury lodges in one of Africa's most dramatic landscapes.",
    hero_image: "/images/tours/tsavo/tsavo-red-elephants-herd.jpg",
    duration: 3,
    group_size: "2–12",
    price_from_kes: 0,
    difficulty: "easy",
    category: "Wildlife Safari",
    destinations: ["tsavo"],
    highlights: [
      "Famous red-dust elephants — the largest elephant population in Kenya",
      "Mzima Springs — crystal-clear pools with an underwater hippo and crocodile viewing chamber",
      "Lugard Falls — spectacular rock formations and rapids on the Galana River",
      "Ngulia Rhino Sanctuary — one of Kenya's key black rhino conservation areas",
      "Kilaguni Serena Safari Lodge — Kenya's first game lodge, overlooking a busy waterhole",
      "Big Five including Kenya's highest density of lion and buffalo",
      "Chyulu Hills — ancient volcanic landscape on the park's western edge",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi — Tsavo West National Park",
        description:
          "Depart Nairobi at 7:00 AM for the scenic 5–6 hour drive (250 km) southeast to Tsavo West National Park, Kenya's largest park and one of the world's greatest wildlife sanctuaries. Arrive mid-morning and check in at Kilaguni Serena Safari Lodge or Finch Hattons Luxury Camp — Kenya's oldest game lodge, dramatically positioned overlooking a waterhole where elephant herds gather throughout the day. After lunch, embark on your first afternoon game drive through Tsavo West's volcanic landscapes. Visit Mzima Springs, where crystal-clear water wells up through ancient lava rock to create a shimmering pool alive with hippos, crocodiles, and dozens of bird species — a raised underwater viewing chamber lets you observe them from below the waterline. Return to the lodge for dinner as the waterhole fills with elephants, buffalo, and zebra at dusk.",
        meals: "Lunch, Dinner",
        accommodation: "Kilaguni Serena Safari Lodge, Tsavo West",
      },
      {
        day: 2,
        title: "Full Day in Tsavo West",
        description:
          "An early morning game drive at first light — the ideal time to find lion and leopard still active from their night hunts, and the famous red elephants moving through the open bush. Drive to the Ngulia Rhino Sanctuary, one of Kenya's dedicated black rhino breeding and protection programs, for a chance to spot these critically endangered animals in their natural habitat. Return to the lodge for breakfast, then take a leisurely mid-morning hike near the Chyulu Hills — a 500-year-old volcanic range rising from the plains, home to rare plants, cave systems, and dramatic views. After lunch, head south for an afternoon game drive to Lugard Falls on the Galana River — a series of spectacular rapids cutting through smooth, millennia-worn rock formations. Optional sundowner at a scenic viewpoint. Return to the lodge for dinner.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Kilaguni Serena Safari Lodge, Tsavo West",
      },
      {
        day: 3,
        title: "Morning Game Drive and Return to Nairobi",
        description:
          "A final morning game drive at the waterhole and across the plains — with luck, the last of the nocturnal predators and the first of the morning elephant herds. Return to the lodge for a full breakfast, then check out and begin the return drive to Nairobi, arriving mid-afternoon.",
        meals: "Breakfast",
        accommodation: "N/A — Return day",
      },
    ],
    inclusions: [
      "2 nights accommodation at Kilaguni Serena Safari Lodge, Tsavo West",
      "Full-board meals — breakfast, lunch, and dinner daily",
      "All game drives in a 4WD safari vehicle",
      "Tsavo West National Park entry fees",
      "Mzima Springs visit with underwater viewing chamber",
      "Lugard Falls visit",
      "Ngulia Rhino Sanctuary drive",
      "Guided Chyulu Hills walk",
      "Professional, licensed English-speaking guide",
      "Return road transfers from Nairobi",
    ],
    exclusions: [
      "International flights to Nairobi",
      "Kenya visa fees",
      "Travel insurance (strongly recommended)",
      "Sundowner drinks (optional, additional cost)",
      "Alcoholic beverages",
      "Tips and gratuities",
      "Items of a personal nature",
    ],
    gallery: [
      "/images/tours/tsavo/tsavo-red-elephants-herd.jpg",
      "/images/tours/tsavo/tsavo-red-elephants-river.jpg",
      "/images/tours/tsavo/tsavo-elephant-sundowner.jpg",
      "/images/tours/tsavo/tsavo-elephants-waterhole.jpg",
      "/images/tours/tsavo/tsavo-kilaguni-lodge-veranda.jpg",
      "/images/tours/tsavo/tsavo-kilaguni-lodge-interior.jpg",
      "/images/tours/tsavo/tsavo-lugard-falls.jpg",
      "/images/tours/tsavo/tsavo-mzima-springs.jpg",
      "/images/tours/tsavo/tsavo-rhino-sanctuary.jpg",
      "/images/tours/tsavo/tsavo-rhino-zebra.jpg",
      "/images/tours/tsavo/tsavo-chyulu-hills.jpg",
      "/images/tours/tsavo/tsavo-giraffe-chyulu.jpg",
      "/images/tours/tsavo/tsavo-buffalo-waterhole.jpg",
      "/images/tours/tsavo/tsavo-lodge-impala-dusk.jpg",
    ],
    faqs: [
      {
        question: "How does Tsavo compare to the Maasai Mara?",
        answer:
          "Tsavo is a completely different experience. It is Kenya's largest wilderness — over ten times the size of the Mara — with far fewer visitors, a more rugged and dramatic landscape, and its own unique wildlife signature: the famous red-dust elephants. Game densities are lower but encounters feel more exclusive and wild. Tsavo is ideal for travellers who want the true feeling of remote Africa.",
      },
      {
        question: "Can we combine Tsavo with Amboseli or the Mombasa coast?",
        answer:
          "Yes — Tsavo sits between Nairobi and Mombasa, making it a perfect stop on a drive to the coast. It also connects naturally with Amboseli (which shares its southern boundary). We can design a combined Tsavo and Amboseli circuit or extend to the Diani or Mombasa coast on request.",
      },
      {
        question: "Why are the elephants red?",
        answer:
          "Tsavo's elephants roll in the park's distinctive red laterite soil to cool themselves and protect their skin from insects and the sun. Over time, this stains their grey hide a deep brick-red — one of the most iconic images in all of African wildlife photography.",
      },
      {
        question: "Is Tsavo good for the Big Five?",
        answer:
          "Yes. Tsavo holds all of the Big Five including one of the largest elephant populations in Kenya, enormous lion and buffalo herds, leopard (most often seen at night), and black rhino at the Ngulia Sanctuary. The park's bird list of over 500 species also makes it exceptional for birders.",
      },
    ],
    featured: true,
    best_seller: false,
    created_at: "",
  },
  {
    id: "6",
    slug: "8-day-serengeti-ngorongoro",
    title: "8-Day Serengeti & Ngorongoro",
    summary:
      "Tanzania's legendary crown jewels — the endless Serengeti plains and the magical Ngorongoro Crater — combined into one unforgettable eight-day safari circuit.",
    hero_image: "/images/SSS-4.jpg",
    duration: 8,
    group_size: "2–12",
    price_from_kes: 1630,
    difficulty: "easy",
    category: "Wildlife Safari",
    destinations: ["serengeti"],
    highlights: [
      "The Great Wildebeest Migration on the Serengeti plains",
      "Ngorongoro Crater — the world's largest intact caldera",
      "Highest Big Five density of any African destination",
      "Tarangire National Park — Africa's largest elephant herds",
      "Luxury tented camps inside the Serengeti",
      "Authentic Maasai cultural visit",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Kilimanjaro Airport — Arusha",
        description:
          "Arrive at Kilimanjaro International Airport and transfer to your Arusha hotel for the night. Meet your guide for a trip briefing and equipment check.",
        meals: "Dinner",
        accommodation: "Hotel, Arusha",
      },
      {
        day: 2,
        title: "Arusha — Tarangire National Park",
        description:
          "Drive south to Tarangire — a park famous for the largest elephant herds in Africa and the iconic baobab-studded landscape. An afternoon of spectacular game viewing along the Tarangire River.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Tented Camp, Tarangire",
      },
      {
        day: 3,
        title: "Tarangire — Serengeti National Park",
        description:
          "Early morning drive through the Ngorongoro Conservation Area and into the Serengeti. Game drive en route — the landscape opens dramatically as you enter the endless plains. Afternoon drive in the Serengeti's central corridor.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Luxury Tented Camp, Serengeti",
      },
      {
        day: 4,
        title: "Full Day in the Serengeti",
        description:
          "A full day in the Serengeti — morning and afternoon game drives covering the central Seronera area, famous for its resident lion prides and the Seronera River's leopard population. Sundowners on the plains as the stars emerge.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Luxury Tented Camp, Serengeti",
      },
      {
        day: 5,
        title: "Serengeti — Northern Plains (Migration Zone)",
        description:
          "Drive north towards the Mara River — the crossing point of the Great Migration (seasonal, peak July–October). Even outside migration season, the northern Serengeti holds extraordinary concentrations of resident game. An evening in one of the most remote and pristine sections of the park.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Luxury Tented Camp, Northern Serengeti",
      },
      {
        day: 6,
        title: "Northern Serengeti Game Drives",
        description:
          "A second full day in the northern Serengeti — one of Africa's most spectacular and least-visited wildlife areas. Morning and afternoon drives in search of lion, cheetah, leopard, elephant, and the vast herds that call this area home.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Luxury Tented Camp, Northern Serengeti",
      },
      {
        day: 7,
        title: "Serengeti — Ngorongoro Crater",
        description:
          "Drive south out of the Serengeti and descend into the Ngorongoro Crater — a UNESCO World Heritage Site and one of the natural wonders of the world. A full afternoon crater drive: lion, elephant, rhino, hippo, flamingo, and buffalo all within the 260km² caldera. Overnight on the crater rim.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Lodge, Ngorongoro Crater Rim",
      },
      {
        day: 8,
        title: "Ngorongoro — Arusha — Departure",
        description:
          "An optional early morning crater descent for a final game drive before ascending to the rim and driving to Arusha. Transfer to Kilimanjaro Airport for your international flight.",
        meals: "Breakfast",
        accommodation: "N/A — Departure day",
      },
    ],
    inclusions: [
      "All road transfers as per itinerary",
      "7 nights accommodation (1 Arusha, 1 Tarangire, 3 Serengeti, 1 Ngorongoro)",
      "All meals as specified",
      "All game drives in a 4WD safari vehicle",
      "Professional licensed English-speaking guide",
      "All national park and conservation area fees",
      "Mineral water throughout",
      "Flying doctors emergency cover",
    ],
    exclusions: [
      "International flights",
      "Tanzania visa fees (USD 50 obtainable on arrival)",
      "Travel insurance",
      "Crater descent vehicle fee if applicable",
      "Alcoholic beverages",
      "Tips and gratuities",
      "Items of a personal nature",
    ],
    gallery: [
      "/images/SSS-4.jpg",
      "/images/sarova-Shaba-9-1.jpg",
      "/images/Enkorok-3.jpg",
      "/images/GRVL-9.jpg",
      "/images/Flamingo-1.jpg",
      "/images/Ashnil-Mara-6.jpg",
    ],
    faqs: [
      {
        question: "Do I need a Tanzania visa?",
        answer:
          "Yes. Tanzania requires a visa for most nationalities. It costs USD 50 and can be obtained on arrival at Kilimanjaro Airport or in advance as an e-Visa. We will provide a full visa guidance document on booking.",
      },
      {
        question: "When is the best time to visit the Serengeti?",
        answer:
          "The Serengeti is excellent year-round. The Great Migration river crossings are most dramatic July–October. The calving season (January–March) on the southern plains is equally spectacular. The northern Serengeti holds wildlife year-round.",
      },
      {
        question: "How remote are the camps?",
        answer:
          "Our Serengeti camps are located inside or adjacent to the national park — genuinely remote, with no fences between you and the wildlife. They have full amenities including hot water, electricity, and quality cuisine.",
      },
    ],
    featured: true,
    best_seller: false,
    created_at: "",
  },
  {
    id: "8",
    slug: "3-nights-sarova-whitesands",
    title: "4 Days at Sarova Whitesands Beach Resort & Spa",
    summary:
      "Sun, sea, and Swahili culture on Mombasa's Bamburi Beach. Three nights of full-board luxury at one of Kenya's most beloved coastal resorts — with water sports, spa treatments, and a city tour of historic Mombasa.",
    hero_image: "/images/tours/mombasa/mombasa-sarova-aerial.jpg",
    duration: 4,
    group_size: "2–12",
    price_from_kes: 0,
    difficulty: "easy",
    category: "Beach & Island",
    destinations: ["mombasa"],
    highlights: [
      "3 nights full-board at Sarova Whitesands Beach Resort & Spa, Bamburi Beach",
      "Five swimming pools including a beachfront infinity pool",
      "PADI-certified scuba diving, jet skiing, and glass-bottom boat reef tours",
      "Tulia Spa — Swahili massages, body scrubs, and oceanview treatments",
      "Mombasa city tour: Fort Jesus, Old Town, and the Elephant Tusks",
      "Haller Park wildlife — giraffes, crocodiles, and birds",
      "Ozone Kids Club — daily activities for children",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Relaxation at the Beach",
        description:
          "Arrive at Moi International Airport or Vipingo Airstrip and transfer to Sarova Whitesands Beach Resort & Spa on Bamburi Beach, just 30 minutes from Mombasa city centre. Check into your luxury ocean-view or garden-view room. Enjoy lunch at one of the resort's dining outlets before spending the afternoon by one of five swimming pools or taking a glass-bottom boat ride along the reef. Join the in-house animation team for evening beach volleyball before a seafood dinner at Coco's Beach Bar — waves, ocean breeze, and the Kenyan coast at its finest.",
        meals: "Lunch, Dinner",
        accommodation: "Sarova Whitesands Beach Resort & Spa, Bamburi Beach",
      },
      {
        day: 2,
        title: "Water Sports and Mombasa City Tour",
        description:
          "Start with water aerobics at the pool or an early morning walk on Bamburi Beach, followed by a hearty breakfast. From 10am, dive into Blue Ocean Watersports — jet skiing, PADI-certified scuba diving, kayaking, and glass-bottom boat rides over the coral reef (at additional cost). After lunch at the resort, head out on an afternoon city tour of Mombasa: explore the ancient battlements of Fort Jesus, wander the atmospheric lanes of Old Town, and photograph the iconic Elephant Tusks on Moi Avenue. Return to the resort to unwind at Tulia Spa before an evening of salsa or disco night at Coco's Beach Bar.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Sarova Whitesands Beach Resort & Spa, Bamburi Beach",
      },
      {
        day: 3,
        title: "Spa, Wildlife, and Sunset Sundowners",
        description:
          "Rise early for yoga or meditation at Tulia Spa & Wellness Centre, or a workout in the Tulia Gym. After a poolside breakfast, spend the morning choosing your spa package — Swahili massage, body scrub, or facial treatments in open-air pavilions with ocean views. After lunch at the pavilion restaurant, head to Haller Park for a guided wildlife walk through this remarkable reclaimed quarry ecosystem — spot giraffes, hippos, crocodiles, and hundreds of bird species. Return to the resort for cocktails at Coco's Beach Bar as the sun melts into the Indian Ocean. Optional private beach dinner available at an additional cost.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Sarova Whitesands Beach Resort & Spa, Bamburi Beach",
      },
      {
        day: 4,
        title: "Farewell Morning and Departure",
        description:
          "One final swim in the resort's pools or a morning walk along Bamburi Beach before a farewell breakfast. Check out by 10am and transfer to Moi International Airport or Vipingo Airstrip for your onward journey.",
        meals: "Breakfast",
        accommodation: "N/A — Departure day",
      },
    ],
    inclusions: [
      "3 nights accommodation at Sarova Whitesands Beach Resort & Spa",
      "Full-board meals — breakfast, lunch, and dinner daily",
      "Complimentary access to all five swimming pools",
      "Tulia Gym and resort activities — water aerobics, mini-golf, table tennis, beach volleyball",
      "Mombasa city tour — Fort Jesus, Old Town, and Elephant Tusks",
      "Complimentary Wi-Fi throughout the property",
      "Ozone Kids Club daily activities",
      "Airport or airstrip transfers (Moi International / Vipingo)",
    ],
    exclusions: [
      "International flights to Mombasa",
      "Kenya visa fees",
      "Travel insurance (strongly recommended)",
      "Water sports — scuba diving, jet skiing, kayaking, glass-bottom boat (optional)",
      "Spa treatments at Tulia Spa (optional)",
      "Private beach or bush dinner (optional)",
      "Haller Park, Mama Ngina Waterfront, and Markita Market excursions (optional)",
      "Alcoholic beverages beyond those specified",
      "Tips and gratuities",
    ],
    gallery: [
      "/images/tours/mombasa/mombasa-sarova-aerial.jpg",
      "/images/tours/mombasa/mombasa-sarova-pool-infinity.jpg",
      "/images/tours/mombasa/mombasa-sarova-pool-bar.jpg",
      "/images/tours/mombasa/mombasa-sarova-grounds.jpg",
      "/images/tours/mombasa/mombasa-tulia-spa.jpg",
      "/images/tours/mombasa/mombasa-cocos-beach-bar.jpg",
      "/images/tours/mombasa/mombasa-fort-jesus.jpg",
      "/images/tours/mombasa/mombasa-old-town.jpg",
    ],
    faqs: [
      {
        question: "What is the best time to visit Mombasa?",
        answer:
          "Mombasa is a year-round destination. The best beach weather is July to October and December to March when skies are clear and the sea is calm. Avoid the long rains (April–June) and short rains (October–November) for water sports and outdoor activities.",
      },
      {
        question: "Are airport transfers included?",
        answer:
          "Yes, return transfers between Moi International Airport or Vipingo Airstrip and the resort are included in the package. Flight bookings are not included.",
      },
      {
        question: "Is the resort family-friendly?",
        answer:
          "Absolutely. Sarova Whitesands is one of Kenya's most popular family resorts. The Ozone Kids Club runs daily activities for children, and there are five pools of varying depths. The calm lagoon beach is safe for all ages.",
      },
      {
        question: "What water sports are available and are they included?",
        answer:
          "The resort's Blue Ocean Watersports centre offers PADI-certified scuba diving, jet skiing, kayaking, and glass-bottom boat rides. These activities are available at an additional cost and should be booked in advance to secure your preferred time slot.",
      },
    ],
    featured: true,
    best_seller: false,
    created_at: "",
  },
  {
    id: "7",
    slug: "4-night-diani-beach",
    title: "4-Night Luxury Diani Beach Escape",
    summary:
      "White sand, turquoise waters, and pure luxury at Africa's best-rated beach. Five days of wellness, water sports, cultural discovery, and deep-sea adventure at The Baobab Beach Resort & Spa, Diani Beach.",
    hero_image: "/images/tours/diani/diani-aerial.jpg",
    duration: 5,
    group_size: "2–12",
    price_from_kes: 0,
    difficulty: "easy",
    category: "Beach & Island",
    destinations: ["diani-beach"],
    highlights: [
      "Diani Beach — voted Africa's best beach destination",
      "Afya Bora Wellness Club & Spa treatments with Indian Ocean views",
      "UNESCO Kaya Kinondo Sacred Forest guided cultural tour",
      "Colobus monkey conservation educational experience",
      "Deep-sea big game fishing for marlin and tuna",
      "PADI 5-star scuba diving at Ocean Tribe, Diani",
      "Kitesurfing, snorkeling, and glass-bottom boat reef excursion",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Diani Beach",
        description:
          "Catch a Safarilink or Jambojet flight from Wilson Airport to Ukunda Airstrip — a stunning 1-hour flight with aerial views of Kenya's coastline. Transfer to The Baobab Beach Resort & Spa, a luxury beachfront estate within 80 acres of tropical gardens. Check into your ocean-view room, take a stroll along Diani's pristine white sands, then unwind with a cocktail as the sun sets over the Indian Ocean. Dinner at Maridadi Restaurant featuring a fusion of local and international cuisines.",
        meals: "Dinner",
        accommodation: "The Baobab Beach Resort & Spa, Diani Beach",
      },
      {
        day: 2,
        title: "Wellness and Water Sports",
        description:
          "Begin with a rejuvenating session at the Afya Bora Wellness Club — massages, yoga, and detox treatments with views of the coastal forest and Indian Ocean. Spend the afternoon on the beach: kitesurfing, snorkeling among vibrant coral reefs, jet skiing, or a glass-bottom boat tour exploring the reef just offshore. Dinner at Tapa Tapa Restaurant, featuring fresh Swahili seafood and international favourites.",
        meals: "Breakfast, Dinner",
        accommodation: "The Baobab Beach Resort & Spa, Diani Beach",
      },
      {
        day: 3,
        title: "Cultural and Nature Excursions",
        description:
          "A guided nature walk through Baobab Nature Park, home to over 100 bird species and the rare Colobus monkey. Visit Colobus Conservation to learn about efforts protecting these endangered primates. In the afternoon, explore the Kaya Kinondo Sacred Forest — a UNESCO World Heritage Site — along ancient trails with deep cultural significance to the Mijikenda people. Return to the resort for a beachfront dinner followed by traditional Swahili music and dance at the Porini Amphitheatre.",
        meals: "Breakfast, Dinner",
        accommodation: "The Baobab Beach Resort & Spa, Diani Beach",
      },
      {
        day: 4,
        title: "Adventure on the Water",
        description:
          "An early hearty breakfast before heading out for a deep-sea big game fishing excursion beyond the coral reef — a chance to catch marlin, sailfish, and tuna in the open Indian Ocean. Back on shore, choose between relaxing by the pool or joining a scuba diving session at Ocean Tribe, Diani's only PADI 5-star IDC training centre — ideal for both beginners and experienced divers. Wind down with sundowners at the Karibu Bar, followed by a romantic beach dinner under the stars.",
        meals: "Breakfast, Dinner",
        accommodation: "The Baobab Beach Resort & Spa, Diani Beach",
      },
      {
        day: 5,
        title: "Final Exploration and Departure",
        description:
          "A leisurely breakfast and one last walk along Diani's legendary white sands. If time permits, visit the Kongo River Estuary near Tiwi Beach for a scenic exploration of mangroves and sandbanks. Transfer to Ukunda Airstrip for your return flight to Nairobi, completing your unforgettable luxury coastal escape.",
        meals: "Breakfast",
        accommodation: "N/A — Departure day",
      },
    ],
    inclusions: [
      "Return domestic flights Nairobi (Wilson Airport) ↔ Ukunda Airstrip",
      "4 nights accommodation at The Baobab Beach Resort & Spa",
      "All meals as specified per itinerary",
      "Airport transfers in Diani",
      "Guided nature walk at Baobab Nature Park",
      "Colobus Conservation visit",
      "Guided Kaya Kinondo Sacred Forest tour",
      "Glass-bottom boat reef excursion",
      "Big game fishing excursion",
      "Professional, English-speaking guide throughout",
    ],
    exclusions: [
      "International flights to Nairobi",
      "Kenya visa fees",
      "Travel insurance (strongly recommended)",
      "Scuba diving course fees (contact us for pricing)",
      "Water sports equipment hire — kitesurfing, jet skiing (optional)",
      "Alcoholic beverages beyond welcome cocktail",
      "Additional spa treatments beyond included session",
      "Tips and gratuities",
      "Items of a personal nature",
    ],
    gallery: [
      "/images/tours/diani/diani-aerial.jpg",
      "/images/tours/diani/diani-resort-pool.jpg",
      "/images/tours/diani/diani-resort-restaurant.jpg",
      "/images/tours/diani/diani-beachfront-bar.jpg",
      "/images/tours/diani/diani-kaya-kinondo-sign.jpg",
      "/images/tours/diani/diani-kaya-kinondo-forest.jpg",
    ],
    faqs: [
      {
        question: "What is the best time to visit Diani Beach?",
        answer:
          "Diani Beach is beautiful year-round with warm temperatures between 25°C and 30°C. The best time to visit is June to October when the weather is drier and the sea is calmer — ideal for water sports, diving, and long beach days.",
      },
      {
        question: "Are the domestic flights included?",
        answer:
          "Yes, return flights from Wilson Airport, Nairobi to Ukunda Airstrip are included. Safarilink and Jambojet operate daily scheduled services. The flight takes approximately 1 hour and provides stunning aerial views of the Kenyan coastline.",
      },
      {
        question: "Is this package suitable for families?",
        answer:
          "Absolutely. Diani Beach is a wonderful family destination. The resort has family rooms and offers a wide range of activities suitable for all ages. The cultural excursions to Kaya Kinondo and Colobus Conservation are particularly enriching for children.",
      },
      {
        question: "What water sports are available?",
        answer:
          "Diani offers an exceptional range: kitesurfing, snorkeling, glass-bottom boat tours, jet skiing, scuba diving at Ocean Tribe (PADI 5-star), and deep-sea big game fishing. Most activities can be arranged through the resort or via our team.",
      },
    ],
    featured: true,
    best_seller: false,
    created_at: "",
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return toursData.find((t) => t.slug === slug);
}
