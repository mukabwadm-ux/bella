/**
 * Bella Safaris — Supabase Seeder (via REST API)
 * Run: node scripts/seed-via-api.js
 *
 * Requires env vars (copy from .env.local):
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 */
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function checkTables() {
  const { error } = await supabase.from('destinations').select('id').limit(1);
  if (error && (error.code === '42P01' || error.message.includes('does not exist') || error.message.includes('schema cache'))) return false;
  return true;
}

async function seedDestinations() {
  const rows = [
    { slug:'maasai-mara', name:'Maasai Mara', country:'Kenya', region:'Rift Valley', short_description:'Kenya\'s most iconic game reserve — home of the Great Migration and the Big Five.', hero_image:'/images/Ashnil-Mara-6.jpg', best_time:'July – October (Migration), January – March (Calving Season)', climate:'Warm and dry Jul–Oct · Green and lush Nov–Jun · 20–30°C year-round', about:'The Maasai Mara is Kenya\'s crown jewel and one of the most celebrated wildlife destinations on earth. Stretching across 1,500 km² of open savanna in Kenya\'s southern Rift Valley, the Mara forms the northern extension of the greater Serengeti ecosystem.', highlights:['The Great Wildebeest Migration and dramatic Mara River crossings','Africa\'s highest density of lion and cheetah','All of the Big Five within a single reserve','Hot air balloon safaris at sunrise','Maasai cultural villages and warrior ceremonies'], featured:true },
    { slug:'amboseli', name:'Amboseli', country:'Kenya', region:'Southern Kenya', short_description:'Iconic elephant herds set against the snow-capped peak of Kilimanjaro.', hero_image:'/images/keekorok.jpg', best_time:'June – October · January – February', climate:'Warm and dry Jun–Oct · Short rains Oct–Nov · 20–28°C', about:'Amboseli National Park is one of Africa\'s most photogenic destinations — a vast, open ecosystem at the foot of Mount Kilimanjaro.', highlights:['World-famous elephant families habituated to vehicles','Kilimanjaro as the ultimate wildlife photography backdrop','The Enkongo Narok swamp — hippo and waterbirds'], featured:true },
    { slug:'zanzibar', name:'Zanzibar', country:'Tanzania', region:'Indian Ocean Islands', short_description:'The spice islands — white-sand beaches, turquoise waters, and ancient Stone Town.', hero_image:'/images/Swahili-0-1.jpg', best_time:'June – October (Dry Season) · December – February', climate:'Tropical · 25–32°C year-round', about:'Zanzibar is a semi-autonomous archipelago off the coast of Tanzania, steeped in a rich history of Swahili, Arab, Persian, and Portuguese influence.', highlights:['World-class white-sand beaches','UNESCO World Heritage Site — Stone Town','Spice farm tours','Sunset dhow cruises','Snorkelling at Mnemba Atoll'], featured:true },
    { slug:'serengeti', name:'Serengeti', country:'Tanzania', region:'Northern Tanzania', short_description:'Endless plains, enormous wildlife herds, and the greatest show on earth.', hero_image:'/images/SSS-4.jpg', best_time:'June – October (Migration) · January – March (Calving)', climate:'Warm and dry Jun–Oct · 20–30°C', about:'The Serengeti is Tanzania\'s most celebrated national park and a UNESCO World Heritage Site, covering nearly 15,000 km².', highlights:['The Great Wildebeest Migration','Africa\'s largest lion population','High-density leopard sightings','Adjacent Ngorongoro Crater'], featured:true },
    { slug:'mount-kenya', name:'Mount Kenya', country:'Kenya', region:'Central Kenya', short_description:'Africa\'s second-highest peak — glaciers, moorlands, and extraordinary wildlife.', hero_image:'/images/LNR-4.jpg', best_time:'January – February · August – September', climate:'Alpine · Cold at altitude (-5°C at summit) · Warm at base (20–25°C)', about:'Mount Kenya is Africa\'s second-highest mountain at 5,199m, a UNESCO World Heritage Site with distinct ecological zones.', highlights:['Point Lenana summit (4,985m)','Spectacular Afro-alpine moorlands','Glaciers and glacial lakes','Diverse wildlife'], featured:true },
    { slug:'diani-beach', name:'Diani Beach', country:'Kenya', region:'Kenyan South Coast', short_description:'Kenya\'s finest beach — pristine coral reef, turquoise water, and swaying palms.', hero_image:'/images/Southern-palm-8-1.jpg', best_time:'October – March', climate:'Tropical · 26–32°C year-round', about:'Diani Beach, stretching 17 km along Kenya\'s south coast, is consistently voted one of Africa\'s best beaches.', highlights:['17km of pristine white-sand beach','Calm lagoon protected by coral reef','World-class kite surfing','Excellent scuba diving'], featured:false },
  ];
  const { error } = await supabase.from('destinations').upsert(rows, { onConflict: 'slug' });
  if (error) throw new Error('destinations: ' + error.message);
  console.log(`  ✓ ${rows.length} destinations seeded`);
}

async function seedTours() {
  const rows = [
    {
      slug: '3-day-maasai-mara-safari',
      title: '3-Day Maasai Mara Safari',
      summary: 'Witness the Big Five on an action-packed three-day escape to Kenya\'s most iconic game reserve. Perfect for first-timers who want the full Mara experience without a long commitment.',
      hero_image: '/images/Ashnil-Mara-6.jpg',
      duration: 3,
      group_size: '2–12',
      price_from_kes: 65000,
      difficulty: 'easy',
      category: 'Wildlife Safari',
      destinations: ['maasai-mara'],
      highlights: [
        'Full-day game drives across the open Mara plains',
        'Professional KWS-licensed guide with Big Five expertise',
        'Chance to witness the Great Wildebeest Migration (Jul–Oct)',
        'Sundowner drinks on the Mara River',
        'Comfortable tented camp accommodation',
      ],
      itinerary: [
        { day: 1, title: 'Nairobi to Maasai Mara', description: 'Depart Nairobi early morning for a scenic 5-hour drive through the Great Rift Valley, passing Narok town and the open Mara plains. Arrive at camp in time for lunch, followed by a full afternoon game drive to begin your wildlife encounter. Watch the golden hour settle over the savanna before returning to camp for dinner and a briefing from your guide.', meals: 'Lunch, Dinner', accommodation: 'Tented Camp, Maasai Mara' },
        { day: 2, title: 'Full Day in the Maasai Mara', description: 'An early morning wake-up call at 6:00am for the golden hour game drive when predators are most active. Return to camp for a full breakfast, then head out again for a mid-morning drive. After a leisurely lunch, an optional visit to a Maasai village offers insight into the ancient culture that coexists with the wildlife. Evening game drive at sunset, watching the bush transition into night.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Tented Camp, Maasai Mara' },
        { day: 3, title: 'Morning Game Drive & Return to Nairobi', description: 'One final early morning game drive before a hot breakfast at camp. Depart the Mara by late morning for the return drive to Nairobi, arriving in the early afternoon. Drop-off at your Nairobi hotel or Wilson Airport for onward flights.', meals: 'Breakfast', accommodation: 'N/A — Return day' },
      ],
      inclusions: ['Return road transfer Nairobi to Maasai Mara','2 nights tented camp accommodation','All meals as specified (B = Breakfast, L = Lunch, D = Dinner)','All game drives in a 4WD safari vehicle','Professional, licensed English-speaking guide','Maasai Mara National Reserve entry fees','Mineral water on all drives','Flying doctors emergency cover'],
      exclusions: ['International or domestic flights','Kenya visa fees','Travel insurance (strongly recommended)','Hot air balloon safari (available at extra cost — approx. USD 450/person)','Alcoholic beverages','Personal tips for guide and camp staff','Any items of personal nature'],
      gallery: ['/images/Ashnil-Mara-6.jpg','/images/Enkorok-3.jpg','/images/keekorok.jpg','/images/GRVL-9.jpg','/images/Flamingo-1.jpg','/images/LNR-4.jpg'],
      faqs: [
        { question: 'Is this safari suitable for children?', answer: 'Yes, the 3-Day Mara Safari is family-friendly. Children of all ages are welcome and will love the wildlife encounters. We recommend the trip for children aged 5 and above for the best experience.' },
        { question: 'What is the best time of year to visit?', answer: 'The Maasai Mara is excellent year-round. The Great Migration river crossings happen July to October. January to March offers calving season with intense predator activity. June to October is considered peak season.' },
        { question: 'What type of accommodation is provided?', answer: 'We use well-appointed tented camps with en-suite bathrooms, hot water, comfortable beds, and electricity. These are safari-standard properties that balance comfort with an authentic bush atmosphere.' },
        { question: 'Can I extend this to a longer safari?', answer: 'Absolutely. We can extend this to 4, 5, or 7 days and combine it with Amboseli, Lake Nakuru, or other destinations. Contact us to design your perfect itinerary.' },
      ],
      featured: true,
      best_seller: true,
    },
    {
      slug: '7-day-classic-kenya',
      title: '7-Day Classic Kenya Safari',
      summary: 'The definitive Kenya safari — a carefully sequenced circuit through the Maasai Mara, Amboseli, and Tsavo combining the Big Five, elephant herds against Kilimanjaro, and diverse landscapes.',
      hero_image: '/images/keekorok.jpg',
      duration: 7,
      group_size: '2–12',
      price_from_kes: 145000,
      difficulty: 'easy',
      category: 'Wildlife Safari',
      destinations: ['maasai-mara', 'amboseli'],
      highlights: ['Big Five sightings across three world-class parks','Iconic Amboseli elephant herds with Kilimanjaro backdrop','Great Mara River — wildebeest crossing territory','Tsavo\'s vast red-earth landscape and enormous lion prides','Comfortable lodges and camps throughout','Flexible itinerary adapted to wildlife activity'],
      itinerary: [
        { day: 1, title: 'Nairobi — Amboseli National Park', description: 'Depart Nairobi in the morning for the 4-hour drive to Amboseli. En route, watch as Mount Kilimanjaro — Africa\'s highest peak — emerges from the clouds. Arrive at your Amboseli lodge for lunch and an afternoon game drive through the park\'s famous open plains, where herds of elephant roam freely against the mountain backdrop.', meals: 'Lunch, Dinner', accommodation: 'Lodge, Amboseli' },
        { day: 2, title: 'Full Day in Amboseli', description: 'A full day to explore Amboseli at your own pace. Morning and afternoon drives in search of the park\'s legendary elephant matriarchs, lion prides, cheetah, and over 400 species of birds. The swamp area at the base of the mountain is extraordinary for close elephant encounters.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Lodge, Amboseli' },
        { day: 3, title: 'Amboseli — Tsavo West National Park', description: 'Drive north-west into Tsavo West, Kenya\'s largest national park. Check in at your lodge overlooking the Chyulu Hills and head out on an afternoon game drive through Tsavo\'s dramatic red-earth landscape. Spot rhino, buffalo, and lion along the waterholes.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Lodge, Tsavo West' },
        { day: 4, title: 'Full Day in Tsavo', description: 'Explore Tsavo West\'s volcanic landscapes, lava flows, and the famous Mzima Springs — crystal-clear pools fed by underground water from Kilimanjaro, home to hippo and crocodile.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Lodge, Tsavo West' },
        { day: 5, title: 'Tsavo — Maasai Mara', description: 'An early departure for the drive north to the Maasai Mara. Arrive at your tented camp in the afternoon for a briefing and an evening game drive — your first taste of the legendary Mara landscape.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Tented Camp, Maasai Mara' },
        { day: 6, title: 'Full Day in the Maasai Mara', description: 'A full day dedicated to the Mara — the crown jewel of Kenya\'s safari circuit. Dawn drive in the crisp morning air, watching predators finish their night hunts. Optional hot air balloon safari at sunrise. Afternoon drive along the Mara River.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Tented Camp, Maasai Mara' },
        { day: 7, title: 'Morning Drive & Return to Nairobi', description: 'Final morning game drive before breakfast at camp. Depart for Nairobi, arriving mid-afternoon. Transfer to your hotel or Jomo Kenyatta Airport for international departures.', meals: 'Breakfast', accommodation: 'N/A — Return day' },
      ],
      inclusions: ['All road transfers as per itinerary','6 nights accommodation (2 Amboseli, 2 Tsavo, 2 Mara)','All meals as specified','All game drives in a 4WD safari vehicle','Professional, licensed English-speaking guide','All national park and reserve entry fees','Mineral water throughout','Flying doctors emergency cover'],
      exclusions: ['International flights','Kenya visa fees','Travel insurance','Hot air balloon safari (optional, approx. USD 450/person)','Alcoholic beverages','Tips and gratuities','Items of a personal nature'],
      gallery: ['/images/keekorok.jpg','/images/Ashnil-Mara-6.jpg','/images/Enkorok-3.jpg','/images/GRVL-9.jpg','/images/sarova-Shaba-9-1.jpg','/images/LNR-4.jpg'],
      faqs: [
        { question: 'How much driving is involved each day?', answer: 'The longest transfer day is Nairobi to Amboseli (approx. 4 hours). Most drives between parks are 2–3 hours on scenic roads. We build in rest time so the driving never feels tiring.' },
        { question: 'Can we do this itinerary in reverse?', answer: 'Yes, we can customise the route order. Some guests prefer to start with the Mara and finish in Amboseli — both sequences work beautifully.' },
        { question: 'Is this suitable for older travellers?', answer: 'Absolutely. The Classic Kenya Safari is designed to be comfortable and accessible for all ages. All lodges have full amenities and the game drives are seated in open-roof 4WD vehicles.' },
      ],
      featured: true,
      best_seller: false,
    },
    {
      slug: '5-day-zanzibar-beach',
      title: '5-Day Zanzibar Beach Retreat',
      summary: 'Trade the savanna for the sea. Five days of pure relaxation on Zanzibar\'s world-famous white-sand beaches — with a cultural detour through UNESCO-listed Stone Town.',
      hero_image: '/images/Swahili-0-1.jpg',
      duration: 5,
      group_size: '2–10',
      price_from_kes: 85000,
      difficulty: 'easy',
      category: 'Beach & Island',
      destinations: ['zanzibar'],
      highlights: ['White-sand beaches with turquoise Indian Ocean waters','Half-day spice farm tour — see cloves, vanilla, and nutmeg','Sunset dhow cruise along the Zanzibar coastline','UNESCO Stone Town walking tour','Optional snorkelling and dolphin watching','Fresh Swahili seafood cuisine throughout'],
      itinerary: [
        { day: 1, title: 'Arrival in Zanzibar', description: 'Fly into Zanzibar International Airport (direct from Nairobi, 1 hour). Transfer to your beach hotel on the north or east coast. Spend the afternoon settling in and taking your first walk on the beach. Welcome dinner at the hotel featuring fresh Swahili seafood.', meals: 'Dinner', accommodation: 'Beach Hotel, Zanzibar' },
        { day: 2, title: 'Stone Town Cultural Tour', description: 'A half-day guided walking tour through Zanzibar\'s UNESCO-listed Stone Town — a labyrinth of narrow alleys, ancient mosques, Swahili doorways, and spice markets. Visit the Old Fort, the Palace Museum, and the poignant Slave Memorial. Afternoon free at the beach.', meals: 'Breakfast', accommodation: 'Beach Hotel, Zanzibar' },
        { day: 3, title: 'Spice Farm Tour & Sunset Dhow Cruise', description: 'Morning spice farm tour to discover where cloves, cinnamon, vanilla, cardamom, and nutmeg grow in their natural environment. Return for lunch, then free afternoon. At dusk, board a traditional wooden dhow for a sunset cruise along the coast.', meals: 'Breakfast, Lunch', accommodation: 'Beach Hotel, Zanzibar' },
        { day: 4, title: 'Beach Day — Snorkelling & Water Sports', description: 'A full free day at the beach. Optional activities include snorkelling at Mnemba Atoll, dolphin watching at Kizimkazi, kite surfing, or a day trip to Prison Island to see giant Aldabra tortoises.', meals: 'Breakfast', accommodation: 'Beach Hotel, Zanzibar' },
        { day: 5, title: 'Leisure Morning & Departure', description: 'Final morning at leisure — breakfast on your terrace, one last swim. Hotel check-out and transfer to the airport for your onward flight.', meals: 'Breakfast', accommodation: 'N/A — Departure day' },
      ],
      inclusions: ['Return flights Nairobi–Zanzibar (economy)','4 nights beach hotel accommodation','Meals as specified','Stone Town guided walking tour','Spice farm tour with lunch','Sunset dhow cruise with drinks','All transfers in Zanzibar'],
      exclusions: ['International flights to Nairobi','Kenya and Tanzania visa fees','Travel insurance','Optional water sports and excursions','Alcoholic beverages (unless specified)','Personal tips'],
      gallery: ['/images/Swahili-0-1.jpg','/images/Southern-palm-8-1.jpg','/images/Ramada-2-1.jpg','/images/layer-2.jpg','/images/Flamingo-1.jpg','/images/SSS-4.jpg'],
      faqs: [
        { question: 'Which part of Zanzibar do you use for accommodation?', answer: 'We prefer the north coast (Nungwi/Kendwa) for its calm, swimmable waters year-round and vibrant atmosphere, or the east coast (Paje/Bwejuu) for a quieter, more secluded experience.' },
        { question: 'Can this be combined with a safari?', answer: 'Absolutely — this is one of our most popular combinations. We offer the 6-Day Honeymoon Mara + Zanzibar package, and can build bespoke safari-to-beach itineraries of any length.' },
        { question: 'Is Zanzibar safe to visit?', answer: 'Zanzibar is a very safe, welcoming destination. It is a predominantly Muslim island so we ask guests to dress modestly when in towns and villages. On the beaches, normal beach attire is perfectly appropriate.' },
      ],
      featured: true,
      best_seller: false,
    },
    {
      slug: 'honeymoon-mara-zanzibar',
      title: '6-Day Honeymoon — Mara & Zanzibar',
      summary: 'The perfect East Africa honeymoon — wildlife and wonder in the Maasai Mara, followed by days of bliss on Zanzibar\'s white-sand shores. Curated with romance at every turn.',
      hero_image: '/images/Ramada-2-1.jpg',
      duration: 6,
      group_size: '2',
      price_from_kes: 180000,
      difficulty: 'easy',
      category: 'Honeymoon',
      destinations: ['maasai-mara', 'zanzibar'],
      highlights: ['Private game drives in the Maasai Mara at dawn','Champagne sundowner on the Mara River','Private candlelit bush dinner under the stars','Fly from Mara to Zanzibar — no long drives','Boutique beach villa with private pool or terrace','Sunset dhow cruise with cocktails','Honeymoon room decorations and surprises arranged'],
      itinerary: [
        { day: 1, title: 'Arrival — Nairobi to Maasai Mara', description: 'Fly from Wilson Airport, Nairobi into the Maasai Mara (45-minute scenic flight). Transfer to your private tented camp. Champagne on arrival, freshening up, and a relaxed afternoon game drive. A candlelit dinner at camp under a sky full of stars.', meals: 'Lunch, Dinner', accommodation: 'Private Tented Camp, Maasai Mara' },
        { day: 2, title: 'Full Day in the Maasai Mara', description: 'Rise before dawn for the golden hour — the most magical time in the Mara. Your private guide takes you into the reserve for an exclusive game drive. Optional morning hot air balloon flight. This evening, your camp team has arranged a private bush dinner — a table for two set in the open savanna, lanterns glowing.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Private Tented Camp, Maasai Mara' },
        { day: 3, title: 'Mara to Zanzibar', description: 'Final morning game drive before flying back to Nairobi, connecting onward to Zanzibar. Arrive at your beach retreat and settle into your room or villa. Quiet first evening by the ocean — cocktails at sunset, seafood dinner on the beach.', meals: 'Breakfast, Dinner', accommodation: 'Boutique Beach Villa, Zanzibar' },
        { day: 4, title: 'Zanzibar — Stone Town & Spice Farm', description: 'A morning guided tour of UNESCO Stone Town. Afternoon spice farm tour. Evening free for a romantic walk along the beach.', meals: 'Breakfast, Lunch', accommodation: 'Boutique Beach Villa, Zanzibar' },
        { day: 5, title: 'Zanzibar — Beach Day & Sunset Dhow Cruise', description: 'A completely free day to enjoy your private beach, the pool, spa treatments, or optional snorkelling at Mnemba Atoll. At dusk, board a traditional hand-carved dhow for a private sunset cruise — just the two of you, your captain, champagne, and the Indian Ocean turning gold.', meals: 'Breakfast', accommodation: 'Boutique Beach Villa, Zanzibar' },
        { day: 6, title: 'Departure', description: 'Leisurely breakfast on your terrace. Hotel checkout and transfer to Zanzibar Airport for your onward flight. A honeymoon you will talk about for the rest of your lives.', meals: 'Breakfast', accommodation: 'N/A — Departure day' },
      ],
      inclusions: ['Domestic flight Nairobi to Maasai Mara (return)','Flight Nairobi to Zanzibar','2 nights luxury private tented camp, Mara','3 nights boutique beach villa, Zanzibar','All meals as specified','Private game drives with dedicated guide','All national park and reserve fees','Stone Town guided tour','Spice farm tour with lunch','Private sunset dhow cruise','Honeymoon room decorations and welcome gift','Flying doctors emergency cover'],
      exclusions: ['International flights','Kenya and Tanzania visa fees','Travel insurance','Hot air balloon (optional, USD 450/person)','Spa treatments','Alcoholic beverages beyond those specified','Personal gratuities'],
      gallery: ['/images/Ramada-2-1.jpg','/images/Ashnil-Mara-6.jpg','/images/Swahili-0-1.jpg','/images/Southern-palm-8-1.jpg','/images/Enashipai-12.jpg','/images/layer-2.jpg'],
      faqs: [
        { question: 'Can you arrange honeymoon surprises?', answer: 'Yes — this is what we do best. We coordinate with each property to arrange rose petals, private dinners, champagne on arrival, anniversary cakes, and other personal touches. Just let us know your preferences when you enquire.' },
        { question: 'What if our travel dates are during the off-peak migration?', answer: 'The Mara is exceptional year-round. Outside peak migration season (Jul–Oct), you benefit from quieter camps, better rates, and an equally spectacular resident wildlife experience.' },
        { question: 'Can we extend the beach stay?', answer: 'Of course. We can extend Zanzibar to 5, 6, or 7 days for a more relaxed pace. Let us know your priorities and we will design the perfect itinerary.' },
      ],
      featured: true,
      best_seller: false,
    },
    {
      slug: '4-day-mount-kenya-trek',
      title: '4-Day Mount Kenya Trek',
      summary: 'Summit Africa\'s second-highest peak through ancient Afro-alpine moorlands and dramatic glaciers. A challenging and deeply rewarding adventure for fit trekkers.',
      hero_image: '/images/LNR-4.jpg',
      duration: 4,
      group_size: '2–8',
      price_from_kes: 55000,
      difficulty: 'challenging',
      category: 'Hiking & Adventure',
      destinations: ['mount-kenya'],
      highlights: ['Summit Point Lenana (4,985m) — Africa\'s third highest peak','Afro-alpine moorlands and giant groundsel forests','Dramatic glaciers and glacial lakes','Diverse wildlife: buffalo, elephant, leopard, hyrax','Experienced high-altitude mountain guides','Complete camping equipment provided'],
      itinerary: [
        { day: 1, title: 'Nairobi — Mount Kenya Gate (Naro Moru Route)', description: 'Depart Nairobi early for the 3-hour drive to the Naro Moru gate on the western side of Mount Kenya. Register, gear up, and begin the trek through montane forest (2,400m). Arrive at the Met Station (3,050m) camp by late afternoon.', meals: 'Lunch, Dinner', accommodation: 'Mountain Hut, Met Station (3,050m)' },
        { day: 2, title: 'Met Station to Mackinder\'s Camp', description: 'A demanding but spectacular day trekking from 3,050m to Mackinder\'s Valley Camp at 4,300m — the base camp for the summit attempt. You ascend through the famous \'vertical bog\' into the high-altitude heather and giant groundsel zone.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Mackinder\'s Camp (4,300m)' },
        { day: 3, title: 'Summit Day — Point Lenana (4,985m)', description: 'Wake at midnight. Begin the summit push in the dark and cold. Reach the summit of Point Lenana (4,985m) at dawn for one of the most spectacular sunrises on the African continent. Descend back to Mackinder\'s Camp for breakfast, then continue down to the Met Station.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Mountain Hut, Met Station (3,050m)' },
        { day: 4, title: 'Descent to Nairobi', description: 'Final morning descent through the montane forest back to the Naro Moru gate. Certificate of achievement presented at the gate. Transfer back to Nairobi, arriving mid-afternoon.', meals: 'Breakfast, Lunch', accommodation: 'N/A — Return day' },
      ],
      inclusions: ['Return road transfer Nairobi to Mount Kenya gate','3 nights mountain accommodation (huts/camping)','All meals on the mountain','Experienced, certified mountain guides (2 guides per group)','Porters for group equipment','Mount Kenya National Park fees','Full camping equipment: tents, sleeping bags, mats (if required)','Summit certificate','Flying doctors emergency cover'],
      exclusions: ['Personal trekking gear (boots, waterproofs, warm layers)','Personal porters for personal bags (optional, recommended)','Travel insurance including altitude evacuation cover','Beverages beyond water and tea','Tips for guides and porters'],
      gallery: ['/images/LNR-4.jpg','/images/GRVL-9.jpg','/images/Enkorok-3.jpg','/images/Flamingo-1.jpg','/images/keekorok.jpg','/images/Ashnil-Mara-6.jpg'],
      faqs: [
        { question: 'How fit do I need to be?', answer: 'This is a challenging trek requiring good cardiovascular fitness. You should be comfortable walking 6–8 hours per day on uneven terrain. We recommend training with hiking and stair workouts for at least 6–8 weeks before your trip.' },
        { question: 'Is altitude sickness a concern?', answer: 'Altitude sickness is a real risk above 3,500m. Our itinerary is designed to allow gradual acclimatisation. We carry supplemental oxygen and our guides are trained in altitude sickness recognition and response. Travel insurance with altitude evacuation cover is mandatory.' },
        { question: 'What gear do I need to bring?', answer: 'Sturdy waterproof hiking boots, warm base layers, a down jacket, waterproof outer shell, hat, gloves, and a head torch. We can provide a full gear list on booking. Many items can be hired in Nairobi if needed.' },
      ],
      featured: true,
      best_seller: false,
    },
    {
      slug: '8-day-serengeti-ngorongoro',
      title: '8-Day Serengeti & Ngorongoro',
      summary: 'Tanzania\'s legendary crown jewels — the endless Serengeti plains and the magical Ngorongoro Crater — combined into one unforgettable eight-day safari circuit.',
      hero_image: '/images/SSS-4.jpg',
      duration: 8,
      group_size: '2–12',
      price_from_kes: 210000,
      difficulty: 'easy',
      category: 'Wildlife Safari',
      destinations: ['serengeti'],
      highlights: ['The Great Wildebeest Migration on the Serengeti plains','Ngorongoro Crater — the world\'s largest intact caldera','Highest Big Five density of any African destination','Tarangire National Park — Africa\'s largest elephant herds','Luxury tented camps inside the Serengeti','Authentic Maasai cultural visit'],
      itinerary: [
        { day: 1, title: 'Arrive Kilimanjaro Airport — Arusha', description: 'Arrive at Kilimanjaro International Airport and transfer to your Arusha hotel for the night. Meet your guide for a trip briefing and equipment check.', meals: 'Dinner', accommodation: 'Hotel, Arusha' },
        { day: 2, title: 'Arusha — Tarangire National Park', description: 'Drive south to Tarangire — a park famous for the largest elephant herds in Africa and the iconic baobab-studded landscape. An afternoon of spectacular game viewing along the Tarangire River.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Tented Camp, Tarangire' },
        { day: 3, title: 'Tarangire — Serengeti National Park', description: 'Early morning drive through the Ngorongoro Conservation Area and into the Serengeti. Game drive en route — the landscape opens dramatically as you enter the endless plains. Afternoon drive in the Serengeti\'s central corridor.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Luxury Tented Camp, Serengeti' },
        { day: 4, title: 'Full Day in the Serengeti', description: 'A full day in the Serengeti — morning and afternoon game drives covering the central Seronera area, famous for its resident lion prides and the Seronera River\'s leopard population. Sundowners on the plains as the stars emerge.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Luxury Tented Camp, Serengeti' },
        { day: 5, title: 'Serengeti — Northern Plains (Migration Zone)', description: 'Drive north towards the Mara River — the crossing point of the Great Migration (seasonal, peak July–October). An evening in one of the most remote and pristine sections of the park.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Luxury Tented Camp, Northern Serengeti' },
        { day: 6, title: 'Northern Serengeti Game Drives', description: 'A second full day in the northern Serengeti — one of Africa\'s most spectacular and least-visited wildlife areas. Morning and afternoon drives in search of lion, cheetah, leopard, elephant, and the vast herds that call this area home.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Luxury Tented Camp, Northern Serengeti' },
        { day: 7, title: 'Serengeti — Ngorongoro Crater', description: 'Drive south out of the Serengeti and descend into the Ngorongoro Crater — a UNESCO World Heritage Site and one of the natural wonders of the world. A full afternoon crater drive: lion, elephant, rhino, hippo, flamingo, and buffalo all within the 260km² caldera.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Lodge, Ngorongoro Crater Rim' },
        { day: 8, title: 'Ngorongoro — Arusha — Departure', description: 'An optional early morning crater descent for a final game drive before ascending to the rim and driving to Arusha. Transfer to Kilimanjaro Airport for your international flight.', meals: 'Breakfast', accommodation: 'N/A — Departure day' },
      ],
      inclusions: ['All road transfers as per itinerary','7 nights accommodation (1 Arusha, 1 Tarangire, 3 Serengeti, 1 Ngorongoro)','All meals as specified','All game drives in a 4WD safari vehicle','Professional licensed English-speaking guide','All national park and conservation area fees','Mineral water throughout','Flying doctors emergency cover'],
      exclusions: ['International flights','Tanzania visa fees (USD 50 obtainable on arrival)','Travel insurance','Crater descent vehicle fee if applicable','Alcoholic beverages','Tips and gratuities','Items of a personal nature'],
      gallery: ['/images/SSS-4.jpg','/images/sarova-Shaba-9-1.jpg','/images/Enkorok-3.jpg','/images/GRVL-9.jpg','/images/Flamingo-1.jpg','/images/Ashnil-Mara-6.jpg'],
      faqs: [
        { question: 'Do I need a Tanzania visa?', answer: 'Yes. Tanzania requires a visa for most nationalities. It costs USD 50 and can be obtained on arrival at Kilimanjaro Airport or in advance as an e-Visa. We will provide a full visa guidance document on booking.' },
        { question: 'When is the best time to visit the Serengeti?', answer: 'The Serengeti is excellent year-round. The Great Migration river crossings are most dramatic July–October. The calving season (January–March) on the southern plains is equally spectacular.' },
        { question: 'How remote are the camps?', answer: 'Our Serengeti camps are located inside or adjacent to the national park — genuinely remote, with no fences between you and the wildlife. They have full amenities including hot water, electricity, and quality cuisine.' },
      ],
      featured: true,
      best_seller: false,
    },
  ];

  const { error } = await supabase.from('tours').upsert(rows, { onConflict: 'slug' });
  if (error) throw new Error('tours: ' + error.message);
  console.log(`  ✓ ${rows.length} tours seeded`);
}

async function seedTestimonials() {
  const rows = [
    { name:'Caren Happuch', rating:5, body:'Absolutely incredible experience! The team at Bella Safaris made everything seamless. Our guide Samuel was knowledgeable and passionate — we saw all the Big Five in just two days. Will definitely book again!', trip_type:'3-Day Maasai Mara Safari', source:'Google', featured:true },
    { name:'Ajay Rao', rating:5, body:'From the first enquiry to the last game drive, Bella Safaris exceeded every expectation. The lodge selection was impeccable and the itinerary perfectly balanced. Worth every shilling.', trip_type:'7-Day Classic Kenya', source:'Google', featured:true },
    { name:'Sharon Mmbone', rating:5, body:'Our honeymoon was truly magical. The Mara at dawn, then Zanzibar\'s beaches — it was a dream. Bella Safaris took care of every detail and made us feel so special.', trip_type:'Honeymoon Mara & Zanzibar', source:'Google', featured:true },
    { name:'Cheptum Marilyn', rating:5, body:'The best decision we made was booking with Bella Safaris. The professionalism and attention to detail was outstanding. Our family of five had an unforgettable experience.', trip_type:'7-Day Classic Kenya', source:'Google', featured:true },
    { name:'Catherine Mutahi', rating:5, body:'Professional, reliable and incredibly knowledgeable team. The vehicle was comfortable and well-maintained, and we saw the migration! An unforgettable trip.', trip_type:'3-Day Maasai Mara Safari', source:'Google', featured:true },
    { name:'Steve Mbuthia', rating:5, body:'I have been on many safaris but this was by far the best organised. Every detail was thought through — from the camp quality to the timing of each drive. Highly recommend.', trip_type:'7-Day Classic Kenya', source:'Google', featured:true },
    { name:'Monah Wangando', rating:5, body:'Bella Safaris gave us a safari we will talk about for the rest of our lives. The sunrise at Point Lenana was worth every step of the climb. The guides were exceptional.', trip_type:'4-Day Mount Kenya Trek', source:'Google', featured:true },
    { name:'faith gakii', rating:5, body:'Amazing experience from start to finish. The zanzibar package was perfectly arranged — the spice tour, the dhow cruise, the hotel. Everything was perfect. 10/10!', trip_type:'5-Day Zanzibar Beach Retreat', source:'Google', featured:true },
  ];
  const { error } = await supabase.from('testimonials').insert(rows);
  if (error && !error.message.includes('duplicate')) throw new Error('testimonials: ' + error.message);
  console.log(`  ✓ ${rows.length} testimonials seeded`);
}

async function seedBlogPosts() {
  const rows = [
    { slug:'discovering-romance-in-east-africa', title:'Discovering Romance in East Africa', excerpt:'From private game drives at dawn to candlelit dinners under a cathedral of stars — why East Africa is the world\'s most extraordinary honeymoon destination.', content:'Full article content available on the website.', cover_image:'/images/Ramada-2-1.jpg', category:'Honeymoon', tags:['romance','zanzibar','maasai mara','honeymoon'], author:'Bella Safaris Team', featured:true, published_at:'2024-02-14' },
    { slug:'best-time-to-visit-maasai-mara', title:'Best Time to Visit the Maasai Mara', excerpt:'The Great Migration, seasonal weather patterns, crowd levels, and green season secrets — everything you need to pick the perfect window for your Mara safari.', content:'Full article content available on the website.', cover_image:'/images/Ashnil-Mara-6.jpg', category:'Travel Guide', tags:['maasai mara','migration','planning','seasons'], author:'Bella Safaris Team', featured:true, published_at:'2024-01-10' },
    { slug:'what-to-pack-for-a-kenyan-safari', title:'What to Pack for a Kenyan Safari', excerpt:'A comprehensive packing list vetted by our expert guides — the right clothing colours, camera gear, health essentials, and the items most travellers forget.', content:'Full article content available on the website.', cover_image:'/images/Enkorok-3.jpg', category:'Travel Tips', tags:['packing','kenya','safari','essentials'], author:'Bella Safaris Team', featured:true, published_at:'2023-12-01' },
  ];
  const { error } = await supabase.from('blog_posts').upsert(rows, { onConflict: 'slug' });
  if (error) throw new Error('blog_posts: ' + error.message);
  console.log(`  ✓ ${rows.length} blog posts seeded`);
}

(async () => {
  console.log('\nBella Safaris — Supabase Seeder\n');

  const tablesExist = await checkTables();
  if (!tablesExist) {
    console.log('⚠  Tables not found. Please run the schema SQL first:');
    console.log('   1. Go to https://supabase.com/dashboard/project/bomdzcpoyeebfxtqwnuh/sql/new');
    console.log('   2. Paste and run the contents of scripts/schema.sql');
    console.log('   3. Then re-run this script\n');
    process.exit(1);
  }

  console.log('Tables found — seeding data...\n');
  try {
    await seedDestinations();
    await seedTours();
    await seedTestimonials();
    await seedBlogPosts();
    console.log('\n✅ All seed data inserted successfully!');
    console.log('   6 destinations | 6 tours | 8 testimonials | 3 blog posts\n');
  } catch (err) {
    console.error('\n✗ Seed error:', err.message);
    process.exit(1);
  }
})();
