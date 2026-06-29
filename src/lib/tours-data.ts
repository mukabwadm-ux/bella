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
