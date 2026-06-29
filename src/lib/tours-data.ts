import type { Tour } from "@/types";

export const toursData: Tour[] = [
  {
    id: "1",
    slug: "3-day-maasai-mara-safari",
    title: "3-Day Maasai Mara Safari",
    summary:
      "Witness the Big Five on an action-packed three-day escape to Kenya's most iconic game reserve. Perfect for first-timers who want the full Mara experience without a long commitment.",
    hero_image: "/images/Ashnil-Mara-6.jpg",
    duration: 3,
    group_size: "2–12",
    price_from_kes: 500,
    difficulty: "easy",
    category: "Wildlife Safari",
    destinations: ["maasai-mara"],
    highlights: [
      "Full-day game drives across the open Mara plains",
      "Professional KWS-licensed guide with Big Five expertise",
      "Chance to witness the Great Wildebeest Migration (Jul–Oct)",
      "Sundowner drinks on the Mara River",
      "Comfortable tented camp accommodation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Maasai Mara",
        description:
          "Depart Nairobi early morning for a scenic 5-hour drive through the Great Rift Valley, passing Narok town and the open Mara plains. Arrive at camp in time for lunch, followed by a full afternoon game drive to begin your wildlife encounter. Watch the golden hour settle over the savanna before returning to camp for dinner and a briefing from your guide.",
        meals: "Lunch, Dinner",
        accommodation: "Tented Camp, Maasai Mara",
      },
      {
        day: 2,
        title: "Full Day in the Maasai Mara",
        description:
          "An early morning wake-up call at 6:00am for the golden hour game drive when predators are most active. Return to camp for a full breakfast, then head out again for a mid-morning drive. After a leisurely lunch, an optional visit to a Maasai village offers insight into the ancient culture that coexists with the wildlife. Evening game drive at sunset, watching the bush transition into night.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Tented Camp, Maasai Mara",
      },
      {
        day: 3,
        title: "Morning Game Drive & Return to Nairobi",
        description:
          "One final early morning game drive before a hot breakfast at camp. Depart the Mara by late morning for the return drive to Nairobi, arriving in the early afternoon. Drop-off at your Nairobi hotel or Wilson Airport for onward flights.",
        meals: "Breakfast",
        accommodation: "N/A — Return day",
      },
    ],
    inclusions: [
      "Return road transfer Nairobi to Maasai Mara",
      "2 nights tented camp accommodation",
      "All meals as specified (B = Breakfast, L = Lunch, D = Dinner)",
      "All game drives in a 4WD safari vehicle",
      "Professional, licensed English-speaking guide",
      "Maasai Mara National Reserve entry fees",
      "Mineral water on all drives",
      "Flying doctors emergency cover",
    ],
    exclusions: [
      "International or domestic flights",
      "Kenya visa fees",
      "Travel insurance (strongly recommended)",
      "Hot air balloon safari (available at extra cost — approx. USD 450/person)",
      "Alcoholic beverages",
      "Personal tips for guide and camp staff",
      "Any items of personal nature",
    ],
    gallery: [
      "/images/Ashnil-Mara-6.jpg",
      "/images/Enkorok-3.jpg",
      "/images/keekorok.jpg",
      "/images/GRVL-9.jpg",
      "/images/Flamingo-1.jpg",
      "/images/LNR-4.jpg",
    ],
    faqs: [
      {
        question: "Is this safari suitable for children?",
        answer:
          "Yes, the 3-Day Mara Safari is family-friendly. Children of all ages are welcome and will love the wildlife encounters. We recommend the trip for children aged 5 and above for the best experience.",
      },
      {
        question: "What is the best time of year to visit?",
        answer:
          "The Maasai Mara is excellent year-round. The Great Migration river crossings happen July to October. January to March offers calving season with intense predator activity. June to October is considered peak season.",
      },
      {
        question: "What type of accommodation is provided?",
        answer:
          "We use well-appointed tented camps with en-suite bathrooms, hot water, comfortable beds, and electricity. These are safari-standard properties that balance comfort with an authentic bush atmosphere.",
      },
      {
        question: "Can I extend this to a longer safari?",
        answer:
          "Absolutely. We can extend this to 4, 5, or 7 days and combine it with Amboseli, Lake Nakuru, or other destinations. Contact us to design your perfect itinerary.",
      },
    ],
    featured: true,
    best_seller: true,
    created_at: "",
  },
  {
    id: "2",
    slug: "7-day-classic-kenya",
    title: "7-Day Classic Kenya Safari",
    summary:
      "The definitive Kenya safari — a carefully sequenced circuit through the Maasai Mara, Amboseli, and Tsavo combining the Big Five, elephant herds against Kilimanjaro, and diverse landscapes.",
    hero_image: "/images/keekorok.jpg",
    duration: 7,
    group_size: "2–12",
    price_from_kes: 1125,
    difficulty: "easy",
    category: "Wildlife Safari",
    destinations: ["maasai-mara", "amboseli"],
    highlights: [
      "Big Five sightings across three world-class parks",
      "Iconic Amboseli elephant herds with Kilimanjaro backdrop",
      "Great Mara River — wildebeest crossing territory",
      "Tsavo's vast red-earth landscape and enormous lion prides",
      "Comfortable lodges and camps throughout",
      "Flexible itinerary adapted to wildlife activity",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi — Amboseli National Park",
        description:
          "Depart Nairobi in the morning for the 4-hour drive to Amboseli. En route, watch as Mount Kilimanjaro — Africa's highest peak — emerges from the clouds. Arrive at your Amboseli lodge for lunch and an afternoon game drive through the park's famous open plains, where herds of elephant roam freely against the mountain backdrop.",
        meals: "Lunch, Dinner",
        accommodation: "Lodge, Amboseli",
      },
      {
        day: 2,
        title: "Full Day in Amboseli",
        description:
          "A full day to explore Amboseli at your own pace. Morning and afternoon drives in search of the park's legendary elephant matriarchs, lion prides, cheetah, and over 400 species of birds. The swamp area at the base of the mountain is extraordinary for close elephant encounters.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Lodge, Amboseli",
      },
      {
        day: 3,
        title: "Amboseli — Tsavo West National Park",
        description:
          "Drive north-west into Tsavo West, Kenya's largest national park. Check in at your lodge overlooking the Chyulu Hills and head out on an afternoon game drive through Tsavo's dramatic red-earth landscape. Spot rhino, buffalo, and lion along the waterholes.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Lodge, Tsavo West",
      },
      {
        day: 4,
        title: "Full Day in Tsavo",
        description:
          "Explore Tsavo West's volcanic landscapes, lava flows, and the famous Mzima Springs — crystal-clear pools fed by underground water from Kilimanjaro, home to hippo and crocodile. A guided walk at Mzima Springs allows rare up-close observation from an underwater viewing chamber.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Lodge, Tsavo West",
      },
      {
        day: 5,
        title: "Tsavo — Maasai Mara",
        description:
          "An early departure for the drive north to the Maasai Mara. Arrive at your tented camp in the afternoon for a briefing and an evening game drive — your first taste of the legendary Mara landscape.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Tented Camp, Maasai Mara",
      },
      {
        day: 6,
        title: "Full Day in the Maasai Mara",
        description:
          "A full day dedicated to the Mara — the crown jewel of Kenya's safari circuit. Dawn drive in the crisp morning air, watching predators finish their night hunts. An optional hot air balloon safari at sunrise provides an unforgettable bird's-eye view of the savanna. Afternoon drive along the Mara River, scanning the banks for crocodile and hippo.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Tented Camp, Maasai Mara",
      },
      {
        day: 7,
        title: "Morning Drive & Return to Nairobi",
        description:
          "Final morning game drive before breakfast at camp. Depart for Nairobi, arriving mid-afternoon. Transfer to your hotel or Jomo Kenyatta Airport for international departures.",
        meals: "Breakfast",
        accommodation: "N/A — Return day",
      },
    ],
    inclusions: [
      "All road transfers as per itinerary",
      "6 nights accommodation (2 Amboseli, 2 Tsavo, 2 Mara)",
      "All meals as specified",
      "All game drives in a 4WD safari vehicle",
      "Professional, licensed English-speaking guide",
      "All national park and reserve entry fees",
      "Mineral water throughout",
      "Flying doctors emergency cover",
    ],
    exclusions: [
      "International flights",
      "Kenya visa fees",
      "Travel insurance",
      "Hot air balloon safari (optional, approx. USD 450/person)",
      "Alcoholic beverages",
      "Tips and gratuities",
      "Items of a personal nature",
    ],
    gallery: [
      "/images/keekorok.jpg",
      "/images/Ashnil-Mara-6.jpg",
      "/images/Enkorok-3.jpg",
      "/images/GRVL-9.jpg",
      "/images/sarova-Shaba-9-1.jpg",
      "/images/LNR-4.jpg",
    ],
    faqs: [
      {
        question: "How much driving is involved each day?",
        answer:
          "The longest transfer day is Nairobi to Amboseli (approx. 4 hours). Most drives between parks are 2–3 hours on scenic roads. We build in rest time so the driving never feels tiring.",
      },
      {
        question: "Can we do this itinerary in reverse?",
        answer:
          "Yes, we can customise the route order. Some guests prefer to start with the Mara and finish in Amboseli — both sequences work beautifully.",
      },
      {
        question: "Is this suitable for older travellers?",
        answer:
          "Absolutely. The Classic Kenya Safari is designed to be comfortable and accessible for all ages. All lodges have full amenities and the game drives are seated in open-roof 4WD vehicles.",
      },
    ],
    featured: true,
    best_seller: false,
    created_at: "",
  },
  {
    id: "4",
    slug: "honeymoon-mara-zanzibar",
    title: "6-Day Honeymoon — Mara & Zanzibar",
    summary:
      "The perfect East Africa honeymoon — wildlife and wonder in the Maasai Mara, followed by days of bliss on Zanzibar's white-sand shores. Curated with romance at every turn.",
    hero_image: "/images/Ramada-2-1.jpg",
    duration: 6,
    group_size: "2",
    price_from_kes: 1395,
    difficulty: "easy",
    category: "Honeymoon",
    destinations: ["maasai-mara", "zanzibar"],
    highlights: [
      "Private game drives in the Maasai Mara at dawn",
      "Champagne sundowner on the Mara River",
      "Private candlelit bush dinner under the stars",
      "Fly from Mara to Zanzibar — no long drives",
      "Boutique beach villa with private pool or terrace",
      "Sunset dhow cruise with cocktails",
      "Honeymoon room decorations and surprises arranged",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival — Nairobi to Maasai Mara",
        description:
          "Fly from Wilson Airport, Nairobi into the Maasai Mara (45-minute scenic flight). Transfer to your private tented camp — your home for the next two nights. Champagne on arrival, freshening up, and a relaxed afternoon game drive to ease into the bush. A candlelit dinner at camp under a sky full of stars.",
        meals: "Lunch, Dinner",
        accommodation: "Private Tented Camp, Maasai Mara",
      },
      {
        day: 2,
        title: "Full Day in the Maasai Mara",
        description:
          "Rise before dawn for the golden hour — the most magical time in the Mara. Your private guide takes you into the reserve for an exclusive game drive. Return to camp for a full English breakfast. Optional morning hot air balloon flight for a once-in-a-lifetime bird's-eye view of the savanna. Afternoon at leisure or another drive. This evening, your camp team has arranged a private bush dinner — a table for two set in the open savanna, lanterns glowing, your guide sharing the sounds of the night bush.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Private Tented Camp, Maasai Mara",
      },
      {
        day: 3,
        title: "Mara to Zanzibar",
        description:
          "Final morning game drive before flying back to Nairobi, connecting onward to Zanzibar. Arrive at your beach retreat and settle into your room or villa. Quiet first evening by the ocean — cocktails at sunset, seafood dinner on the beach.",
        meals: "Breakfast, Dinner",
        accommodation: "Boutique Beach Villa, Zanzibar",
      },
      {
        day: 4,
        title: "Zanzibar — Stone Town & Spice Farm",
        description:
          "A morning guided tour of UNESCO Stone Town — the ancient Swahili trading city with carved wooden doorways, Persian baths, and the evocative old Slave Market. Afternoon spice farm tour to understand Zanzibar's rich aromatic heritage. Evening free for a romantic walk along the beach.",
        meals: "Breakfast, Lunch",
        accommodation: "Boutique Beach Villa, Zanzibar",
      },
      {
        day: 5,
        title: "Zanzibar — Beach Day & Sunset Dhow Cruise",
        description:
          "A completely free day to enjoy your private beach, the pool, spa treatments, or optional snorkelling at Mnemba Atoll. At dusk, board a traditional hand-carved dhow for a private sunset cruise — just the two of you, your captain, champagne, and the Indian Ocean turning gold.",
        meals: "Breakfast",
        accommodation: "Boutique Beach Villa, Zanzibar",
      },
      {
        day: 6,
        title: "Departure",
        description:
          "Leisurely breakfast on your terrace. Hotel checkout and transfer to Zanzibar Airport for your onward flight. A honeymoon you will talk about for the rest of your lives.",
        meals: "Breakfast",
        accommodation: "N/A — Departure day",
      },
    ],
    inclusions: [
      "Domestic flight Nairobi to Maasai Mara (return)",
      "Flight Nairobi to Zanzibar",
      "2 nights luxury private tented camp, Mara",
      "3 nights boutique beach villa, Zanzibar",
      "All meals as specified",
      "Private game drives with dedicated guide",
      "All national park and reserve fees",
      "Stone Town guided tour",
      "Spice farm tour with lunch",
      "Private sunset dhow cruise",
      "Honeymoon room decorations and welcome gift",
      "Flying doctors emergency cover",
    ],
    exclusions: [
      "International flights",
      "Kenya and Tanzania visa fees",
      "Travel insurance",
      "Hot air balloon (optional, USD 450/person)",
      "Spa treatments",
      "Alcoholic beverages beyond those specified",
      "Personal gratuities",
    ],
    gallery: [
      "/images/Ramada-2-1.jpg",
      "/images/Ashnil-Mara-6.jpg",
      "/images/Swahili-0-1.jpg",
      "/images/Southern-palm-8-1.jpg",
      "/images/Enashipai-12.jpg",
      "/images/layer-2.jpg",
    ],
    faqs: [
      {
        question: "Can you arrange honeymoon surprises?",
        answer:
          "Yes — this is what we do best. We coordinate with each property to arrange rose petals, private dinners, champagne on arrival, anniversary cakes, and other personal touches. Just let us know your preferences when you enquire.",
      },
      {
        question: "What if our travel dates are during the off-peak migration?",
        answer:
          "The Mara is exceptional year-round. Outside peak migration season (Jul–Oct), you benefit from quieter camps, better rates, and an equally spectacular resident wildlife experience — lions, cheetah, elephant, buffalo, and hundreds of bird species.",
      },
      {
        question: "Can we extend the beach stay?",
        answer:
          "Of course. We can extend Zanzibar to 5, 6, or 7 days for a more relaxed pace. Let us know your priorities and we will design the perfect itinerary.",
      },
    ],
    featured: true,
    best_seller: false,
    created_at: "",
  },
  {
    id: "5",
    slug: "4-day-mount-kenya-trek",
    title: "4-Day Mount Kenya Trek",
    summary:
      "Summit Africa's second-highest peak through ancient Afro-alpine moorlands and dramatic glaciers. A challenging and deeply rewarding adventure for fit trekkers.",
    hero_image: "/images/LNR-4.jpg",
    duration: 4,
    group_size: "2–8",
    price_from_kes: 425,
    difficulty: "challenging",
    category: "Hiking & Adventure",
    destinations: ["mount-kenya"],
    highlights: [
      "Summit Point Lenana (4,985m) — Africa's third highest peak",
      "Afro-alpine moorlands and giant groundsel forests",
      "Dramatic glaciers and glacial lakes",
      "Diverse wildlife: buffalo, elephant, leopard, hyrax",
      "Experienced high-altitude mountain guides",
      "Complete camping equipment provided",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi — Mount Kenya Gate (Naro Moru Route)",
        description:
          "Depart Nairobi early for the 3-hour drive to the Naro Moru gate on the western side of Mount Kenya. Register, gear up, and begin the trek through montane forest (2,400m) where you may encounter buffalo, bushbuck, and Sykes monkey. Arrive at the Met Station (3,050m) camp by late afternoon. Your guides will brief you on acclimatisation, trail safety, and what to expect on the mountain.",
        meals: "Lunch, Dinner",
        accommodation: "Mountain Hut, Met Station (3,050m)",
      },
      {
        day: 2,
        title: "Met Station to Mackinder's Camp",
        description:
          "A demanding but spectacular day trekking from 3,050m to Mackinder's Valley Camp at 4,300m — the base camp for the summit attempt. You ascend through the famous 'vertical bog' — a challenging but iconic section of moorland — into the high-altitude heather and giant groundsel zone. Arrive at Mackinder's Camp for an early dinner and a mandatory early bedtime ahead of the summit push.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Mackinder's Camp (4,300m)",
      },
      {
        day: 3,
        title: "Summit Day — Point Lenana (4,985m)",
        description:
          "Wake at midnight. Begin the summit push in the dark and cold — head torches on, warm layers essential. Reach the summit of Point Lenana (4,985m) at dawn for one of the most spectacular sunrises on the African continent. The view encompasses both the true summit peaks (Batian and Nelion, for technical climbers) and the vast Kenyan plains stretching to the horizon. Descend back to Mackinder's Camp for breakfast, then continue down to the Met Station.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Mountain Hut, Met Station (3,050m)",
      },
      {
        day: 4,
        title: "Descent to Nairobi",
        description:
          "Final morning descent through the montane forest back to the Naro Moru gate. Certificate of achievement presented at the gate. Transfer back to Nairobi, arriving mid-afternoon. Drop-off at your hotel.",
        meals: "Breakfast, Lunch",
        accommodation: "N/A — Return day",
      },
    ],
    inclusions: [
      "Return road transfer Nairobi to Mount Kenya gate",
      "3 nights mountain accommodation (huts/camping)",
      "All meals on the mountain",
      "Experienced, certified mountain guides (2 guides per group)",
      "Porters for group equipment",
      "Mount Kenya National Park fees",
      "Full camping equipment: tents, sleeping bags, mats (if required)",
      "Summit certificate",
      "Flying doctors emergency cover",
    ],
    exclusions: [
      "Personal trekking gear (boots, waterproofs, warm layers)",
      "Personal porters for personal bags (optional, recommended)",
      "Travel insurance including altitude evacuation cover",
      "Beverages beyond water and tea",
      "Tips for guides and porters",
    ],
    gallery: [
      "/images/LNR-4.jpg",
      "/images/GRVL-9.jpg",
      "/images/Enkorok-3.jpg",
      "/images/Flamingo-1.jpg",
      "/images/keekorok.jpg",
      "/images/Ashnil-Mara-6.jpg",
    ],
    faqs: [
      {
        question: "How fit do I need to be?",
        answer:
          "This is a challenging trek requiring good cardiovascular fitness. You should be comfortable walking 6–8 hours per day on uneven terrain. We recommend training with hiking and stair workouts for at least 6–8 weeks before your trip.",
      },
      {
        question: "Is altitude sickness a concern?",
        answer:
          "Altitude sickness is a real risk above 3,500m. Our itinerary is designed to allow gradual acclimatisation. We carry supplemental oxygen and our guides are trained in altitude sickness recognition and response. Travel insurance with altitude evacuation cover is mandatory.",
      },
      {
        question: "What gear do I need to bring?",
        answer:
          "Sturdy waterproof hiking boots, warm base layers, a down jacket, waterproof outer shell, hat, gloves, and a head torch. We can provide a full gear list on booking. Many items can be hired in Nairobi if needed.",
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
