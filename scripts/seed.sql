-- ============================================================
-- Bella Safaris — Seed Data
-- ============================================================

-- ─── DESTINATIONS ────────────────────────────────────────────
INSERT INTO destinations (slug, name, country, region, short_description, hero_image, best_time, climate, about, highlights, featured) VALUES
(
  'maasai-mara', 'Maasai Mara', 'Kenya', 'Rift Valley',
  'Kenya''s most iconic game reserve — home of the Great Migration and the Big Five.',
  '/images/Ashnil-Mara-6.jpg',
  'July – October (Migration), January – March (Calving Season)',
  'Warm and dry Jul–Oct · Green and lush Nov–Jun · 20–30°C year-round',
  'The Maasai Mara is Kenya''s crown jewel and one of the most celebrated wildlife destinations on earth. Stretching across 1,500 km² of open savanna in Kenya''s southern Rift Valley, the Mara forms the northern extension of the greater Serengeti ecosystem. It is home to the densest concentration of lion in Africa, resident cheetah, massive elephant herds, and every member of the Big Five.',
  ARRAY['The Great Wildebeest Migration and dramatic Mara River crossings','Africa''s highest density of lion and cheetah','All of the Big Five within a single reserve','Hot air balloon safaris at sunrise','Maasai cultural villages and warrior ceremonies'],
  true
),
(
  'amboseli', 'Amboseli', 'Kenya', 'Southern Kenya',
  'Iconic elephant herds set against the snow-capped peak of Kilimanjaro.',
  '/images/keekorok.jpg',
  'June – October · January – February',
  'Warm and dry Jun–Oct · Short rains Oct–Nov · Long rains Mar–May · 20–28°C',
  'Amboseli National Park is one of Africa''s most photogenic destinations — a vast, open ecosystem at the foot of Mount Kilimanjaro. The park is famous for its huge elephant families and the iconic view of Kilimanjaro''s snow-capped summit behind them.',
  ARRAY['World-famous elephant families habituated to vehicles','Kilimanjaro as the ultimate wildlife photography backdrop','The Enkongo Narok swamp — hippo and waterbirds','Excellent cheetah and lion sightings'],
  true
),
(
  'zanzibar', 'Zanzibar', 'Tanzania', 'Indian Ocean Islands',
  'The spice islands — white-sand beaches, turquoise waters, and ancient Stone Town.',
  '/images/Swahili-0-1.jpg',
  'June – October (Dry Season) · December – February',
  'Tropical · 25–32°C year-round · Short rains Oct–Nov · Long rains Mar–May',
  'Zanzibar is a semi-autonomous archipelago off the coast of Tanzania, steeped in a rich history of Swahili, Arab, Persian, and Portuguese influence. Famous for its dazzling white-sand beaches, UNESCO-listed Stone Town, and world-class spice farms.',
  ARRAY['World-class white-sand beaches — Nungwi, Kendwa, Paje','UNESCO World Heritage Site — Stone Town','Spice farm tours through clove, vanilla, and cinnamon groves','Sunset dhow cruises on the Indian Ocean','Snorkelling at Mnemba Atoll'],
  true
),
(
  'serengeti', 'Serengeti', 'Tanzania', 'Northern Tanzania',
  'Endless plains, enormous wildlife herds, and the greatest show on earth.',
  '/images/SSS-4.jpg',
  'June – October (Migration) · January – March (Calving)',
  'Warm and dry Jun–Oct · Short rains Oct–Nov · Long rains Apr–May · 20–30°C',
  'The Serengeti — from the Maasai word meaning "endless plains" — is Tanzania''s most celebrated national park and a UNESCO World Heritage Site. Covering nearly 15,000 km², it is the largest wildlife ecosystem on earth and the stage for the Great Wildebeest Migration.',
  ARRAY['The Great Wildebeest Migration','Africa''s largest lion population','High-density leopard sightings along the Seronera River','Adjacent Ngorongoro Crater — a world wonder','Genuine wilderness — vast, remote, and unspoilt'],
  true
),
(
  'mount-kenya', 'Mount Kenya', 'Kenya', 'Central Kenya',
  'Africa''s second-highest peak — glaciers, moorlands, and extraordinary wildlife.',
  '/images/LNR-4.jpg',
  'January – February · August – September',
  'Alpine · Cold at altitude (-5°C at summit) · Warm at base (20–25°C)',
  'Mount Kenya is Africa''s second-highest mountain at 5,199m, a UNESCO World Heritage Site with distinct ecological zones from montane rainforest through Afro-alpine moorland to permanent glaciers.',
  ARRAY['Point Lenana summit (4,985m) — Africa''s third highest peak','Spectacular Afro-alpine moorlands','Glaciers and glacial lakes at high altitude','Diverse wildlife: elephant, buffalo, leopard'],
  true
),
(
  'diani-beach', 'Diani Beach', 'Kenya', 'Kenyan South Coast',
  'Kenya''s finest beach — pristine coral reef, turquoise water, and swaying palms.',
  '/images/Southern-palm-8-1.jpg',
  'October – March (Best Beach Season)',
  'Tropical · 26–32°C year-round · Long rains Apr–Jun · Short rains Oct–Nov',
  'Diani Beach, stretching 17 km along Kenya''s south coast, is consistently voted one of Africa''s best beaches. Protected coral reef, world-class kite surfing, and excellent scuba diving.',
  ARRAY['17km of pristine white-sand beach','Calm lagoon protected by coral reef','World-class kite surfing','Scuba diving — manta rays, whale sharks'],
  false
)
ON CONFLICT (slug) DO NOTHING;


-- ─── TOURS ───────────────────────────────────────────────────
INSERT INTO tours (slug, title, summary, hero_image, duration, group_size, price_from_kes, difficulty, category, destinations, highlights, itinerary, inclusions, exclusions, gallery, faqs, featured, best_seller) VALUES
(
  '3-day-maasai-mara-safari',
  '3-Day Maasai Mara Safari',
  'Witness the Big Five on an action-packed three-day escape to Kenya''s most iconic game reserve. Perfect for first-timers who want the full Mara experience without a long commitment.',
  '/images/Ashnil-Mara-6.jpg',
  3, '2–12', 65000, 'easy', 'Wildlife Safari',
  ARRAY['maasai-mara'],
  ARRAY['Full-day game drives across the open Mara plains','Professional KWS-licensed guide with Big Five expertise','Chance to witness the Great Wildebeest Migration (Jul–Oct)','Sundowner drinks on the Mara River','Comfortable tented camp accommodation'],
  '[{"day":1,"title":"Nairobi to Maasai Mara","description":"Depart Nairobi early morning for a scenic 5-hour drive through the Great Rift Valley. Arrive at camp for lunch followed by a full afternoon game drive.","meals":"Lunch, Dinner","accommodation":"Tented Camp, Maasai Mara"},{"day":2,"title":"Full Day in the Maasai Mara","description":"Early morning game drive at 6:00am when predators are most active. Return for breakfast, then a mid-morning drive. Optional Maasai village visit in the afternoon. Evening sundowner drive.","meals":"Breakfast, Lunch, Dinner","accommodation":"Tented Camp, Maasai Mara"},{"day":3,"title":"Morning Game Drive & Return to Nairobi","description":"Final early morning game drive before hot breakfast at camp. Depart for Nairobi, arriving early afternoon.","meals":"Breakfast","accommodation":"N/A — Return day"}]'::jsonb,
  ARRAY['Return road transfer Nairobi to Maasai Mara','2 nights tented camp accommodation','All meals as specified','All game drives in a 4WD safari vehicle','Professional licensed English-speaking guide','Maasai Mara National Reserve entry fees','Mineral water on all drives','Flying doctors emergency cover'],
  ARRAY['International or domestic flights','Kenya visa fees','Travel insurance','Hot air balloon safari (available at extra cost)','Alcoholic beverages','Personal tips'],
  ARRAY['/images/Ashnil-Mara-6.jpg','/images/Enkorok-3.jpg','/images/keekorok.jpg','/images/GRVL-9.jpg','/images/Flamingo-1.jpg','/images/LNR-4.jpg'],
  '[{"question":"Is this safari suitable for children?","answer":"Yes, the 3-Day Mara Safari is family-friendly. Children of all ages are welcome."},{"question":"What is the best time of year to visit?","answer":"The Maasai Mara is excellent year-round. The Great Migration river crossings happen July to October."}]'::jsonb,
  true, true
),
(
  '7-day-classic-kenya',
  '7-Day Classic Kenya Safari',
  'The definitive Kenya safari — a carefully sequenced circuit through the Maasai Mara, Amboseli, and Tsavo combining the Big Five, elephant herds against Kilimanjaro, and diverse landscapes.',
  '/images/keekorok.jpg',
  7, '2–12', 145000, 'easy', 'Wildlife Safari',
  ARRAY['maasai-mara','amboseli'],
  ARRAY['Big Five sightings across three world-class parks','Iconic Amboseli elephant herds with Kilimanjaro backdrop','Great Mara River — wildebeest crossing territory','Tsavo''s vast red-earth landscape','Comfortable lodges and camps throughout'],
  '[{"day":1,"title":"Nairobi — Amboseli","description":"Drive to Amboseli with views of Kilimanjaro. Afternoon game drive.","meals":"Lunch, Dinner","accommodation":"Lodge, Amboseli"},{"day":2,"title":"Full Day in Amboseli","description":"Full day exploring elephant herds and open plains.","meals":"Breakfast, Lunch, Dinner","accommodation":"Lodge, Amboseli"},{"day":3,"title":"Amboseli — Tsavo West","description":"Drive into Tsavo West National Park. Afternoon game drive.","meals":"Breakfast, Lunch, Dinner","accommodation":"Lodge, Tsavo West"},{"day":4,"title":"Full Day in Tsavo","description":"Explore volcanic landscapes and Mzima Springs.","meals":"Breakfast, Lunch, Dinner","accommodation":"Lodge, Tsavo West"},{"day":5,"title":"Tsavo — Maasai Mara","description":"Drive north to the Maasai Mara. Evening game drive.","meals":"Breakfast, Lunch, Dinner","accommodation":"Tented Camp, Maasai Mara"},{"day":6,"title":"Full Day in the Maasai Mara","description":"Full day game drives. Optional hot air balloon at sunrise.","meals":"Breakfast, Lunch, Dinner","accommodation":"Tented Camp, Maasai Mara"},{"day":7,"title":"Morning Drive & Return","description":"Final drive then return to Nairobi.","meals":"Breakfast","accommodation":"N/A"}]'::jsonb,
  ARRAY['All road transfers as per itinerary','6 nights accommodation','All meals as specified','All game drives in a 4WD safari vehicle','Professional licensed guide','All national park and reserve entry fees','Mineral water','Flying doctors emergency cover'],
  ARRAY['International flights','Kenya visa fees','Travel insurance','Hot air balloon (optional)','Alcoholic beverages','Tips and gratuities'],
  ARRAY['/images/keekorok.jpg','/images/Ashnil-Mara-6.jpg','/images/Enkorok-3.jpg','/images/GRVL-9.jpg','/images/sarova-Shaba-9-1.jpg','/images/LNR-4.jpg'],
  '[{"question":"How much driving is involved?","answer":"The longest transfer is Nairobi to Amboseli (approx. 4 hours). Most drives between parks are 2–3 hours on scenic roads."}]'::jsonb,
  true, false
),
(
  '5-day-zanzibar-beach',
  '5-Day Zanzibar Beach Retreat',
  'Trade the savanna for the sea. Five days of pure relaxation on Zanzibar''s world-famous white-sand beaches — with a cultural detour through UNESCO-listed Stone Town.',
  '/images/Swahili-0-1.jpg',
  5, '2–10', 85000, 'easy', 'Beach & Island',
  ARRAY['zanzibar'],
  ARRAY['White-sand beaches with turquoise Indian Ocean waters','Half-day spice farm tour','Sunset dhow cruise along the Zanzibar coastline','UNESCO Stone Town walking tour','Optional snorkelling and dolphin watching'],
  '[{"day":1,"title":"Arrival in Zanzibar","description":"Fly into Zanzibar and transfer to your beach hotel. Welcome dinner featuring fresh Swahili seafood.","meals":"Dinner","accommodation":"Beach Hotel, Zanzibar"},{"day":2,"title":"Stone Town Cultural Tour","description":"Half-day guided walking tour through UNESCO-listed Stone Town.","meals":"Breakfast","accommodation":"Beach Hotel, Zanzibar"},{"day":3,"title":"Spice Farm & Sunset Dhow Cruise","description":"Morning spice farm tour then a sunset dhow cruise at dusk.","meals":"Breakfast, Lunch","accommodation":"Beach Hotel, Zanzibar"},{"day":4,"title":"Beach Day","description":"Full free day. Optional snorkelling, dolphin watching or kite surfing.","meals":"Breakfast","accommodation":"Beach Hotel, Zanzibar"},{"day":5,"title":"Departure","description":"Final morning at leisure then transfer to airport.","meals":"Breakfast","accommodation":"N/A"}]'::jsonb,
  ARRAY['Return flights Nairobi–Zanzibar (economy)','4 nights beach hotel accommodation','Meals as specified','Stone Town guided walking tour','Spice farm tour with lunch','Sunset dhow cruise with drinks','All transfers in Zanzibar'],
  ARRAY['International flights to Nairobi','Kenya and Tanzania visa fees','Travel insurance','Optional water sports and excursions','Alcoholic beverages','Personal tips'],
  ARRAY['/images/Swahili-0-1.jpg','/images/Southern-palm-8-1.jpg','/images/Ramada-2-1.jpg','/images/layer-2.jpg','/images/Flamingo-1.jpg','/images/SSS-4.jpg'],
  '[{"question":"Which part of Zanzibar?","answer":"We prefer the north coast (Nungwi/Kendwa) for calm waters year-round, or the east coast (Paje) for a quieter experience."}]'::jsonb,
  true, false
),
(
  'honeymoon-mara-zanzibar',
  '6-Day Honeymoon — Mara & Zanzibar',
  'The perfect East Africa honeymoon — wildlife and wonder in the Maasai Mara, followed by days of bliss on Zanzibar''s white-sand shores. Curated with romance at every turn.',
  '/images/Ramada-2-1.jpg',
  6, '2', 180000, 'easy', 'Honeymoon',
  ARRAY['maasai-mara','zanzibar'],
  ARRAY['Private game drives in the Maasai Mara at dawn','Champagne sundowner on the Mara River','Private candlelit bush dinner under the stars','Fly from Mara to Zanzibar — no long drives','Boutique beach villa with private pool','Sunset dhow cruise with cocktails','Honeymoon surprises arranged'],
  '[{"day":1,"title":"Arrival — Mara","description":"Fly from Wilson Airport to Maasai Mara. Champagne on arrival and evening game drive.","meals":"Lunch, Dinner","accommodation":"Private Tented Camp, Maasai Mara"},{"day":2,"title":"Full Day in the Mara","description":"Dawn drive, optional hot air balloon, private bush dinner under the stars.","meals":"Breakfast, Lunch, Dinner","accommodation":"Private Tented Camp, Maasai Mara"},{"day":3,"title":"Mara to Zanzibar","description":"Morning drive then fly to Zanzibar. Settle in at your beach villa.","meals":"Breakfast, Dinner","accommodation":"Boutique Beach Villa, Zanzibar"},{"day":4,"title":"Stone Town & Spice Farm","description":"Morning Stone Town tour and spice farm visit.","meals":"Breakfast, Lunch","accommodation":"Boutique Beach Villa, Zanzibar"},{"day":5,"title":"Beach Day & Dhow Cruise","description":"Free day then private sunset dhow cruise for two.","meals":"Breakfast","accommodation":"Boutique Beach Villa, Zanzibar"},{"day":6,"title":"Departure","description":"Leisurely breakfast then transfer to airport.","meals":"Breakfast","accommodation":"N/A"}]'::jsonb,
  ARRAY['Domestic flight Nairobi to Maasai Mara','Flight Nairobi to Zanzibar','2 nights luxury private tented camp, Mara','3 nights boutique beach villa, Zanzibar','All meals as specified','Private game drives with dedicated guide','Stone Town guided tour','Spice farm tour with lunch','Private sunset dhow cruise','Honeymoon room decorations and welcome gift'],
  ARRAY['International flights','Kenya and Tanzania visa fees','Travel insurance','Hot air balloon (optional)','Spa treatments','Personal gratuities'],
  ARRAY['/images/Ramada-2-1.jpg','/images/Ashnil-Mara-6.jpg','/images/Swahili-0-1.jpg','/images/Southern-palm-8-1.jpg','/images/Enashipai-12.jpg','/images/layer-2.jpg'],
  '[{"question":"Can you arrange honeymoon surprises?","answer":"Yes — we coordinate with each property to arrange rose petals, private dinners, champagne on arrival, and other personal touches."}]'::jsonb,
  true, false
),
(
  '4-day-mount-kenya-trek',
  '4-Day Mount Kenya Trek',
  'Summit Africa''s second-highest peak through ancient Afro-alpine moorlands and dramatic glaciers. A challenging and deeply rewarding adventure for fit trekkers.',
  '/images/LNR-4.jpg',
  4, '2–8', 55000, 'challenging', 'Hiking & Adventure',
  ARRAY['mount-kenya'],
  ARRAY['Summit Point Lenana (4,985m)','Afro-alpine moorlands and giant groundsel forests','Dramatic glaciers and glacial lakes','Diverse wildlife: buffalo, elephant, leopard','Experienced high-altitude mountain guides'],
  '[{"day":1,"title":"Nairobi to Mount Kenya Gate","description":"Drive to Naro Moru gate then trek through montane forest to Met Station (3,050m).","meals":"Lunch, Dinner","accommodation":"Mountain Hut, Met Station (3,050m)"},{"day":2,"title":"Met Station to Mackinder''s Camp","description":"Demanding trek through the moorlands to Mackinder''s Camp base camp at 4,300m.","meals":"Breakfast, Lunch, Dinner","accommodation":"Mackinder''s Camp (4,300m)"},{"day":3,"title":"Summit Day — Point Lenana (4,985m)","description":"Midnight start for the summit push. Reach Point Lenana at dawn for a spectacular sunrise. Descend to Met Station.","meals":"Breakfast, Lunch, Dinner","accommodation":"Mountain Hut, Met Station (3,050m)"},{"day":4,"title":"Descent to Nairobi","description":"Final descent to gate. Certificate of achievement. Transfer to Nairobi.","meals":"Breakfast, Lunch","accommodation":"N/A"}]'::jsonb,
  ARRAY['Return road transfer Nairobi to Mount Kenya gate','3 nights mountain accommodation','All meals on the mountain','Experienced certified mountain guides','Porters for group equipment','Mount Kenya National Park fees','Full camping equipment','Summit certificate','Flying doctors emergency cover'],
  ARRAY['Personal trekking gear','Personal porters for personal bags','Travel insurance with altitude evacuation cover','Tips for guides and porters'],
  ARRAY['/images/LNR-4.jpg','/images/GRVL-9.jpg','/images/Enkorok-3.jpg','/images/Flamingo-1.jpg','/images/keekorok.jpg','/images/Ashnil-Mara-6.jpg'],
  '[{"question":"How fit do I need to be?","answer":"Good cardiovascular fitness required. Comfortable walking 6–8 hours per day on uneven terrain. Train with hiking and stair workouts for 6–8 weeks before your trip."},{"question":"Is altitude sickness a concern?","answer":"Altitude sickness is a real risk above 3,500m. Our itinerary allows gradual acclimatisation. We carry supplemental oxygen."}]'::jsonb,
  true, false
),
(
  '8-day-serengeti-ngorongoro',
  '8-Day Serengeti & Ngorongoro',
  'Tanzania''s legendary crown jewels — the endless Serengeti plains and the magical Ngorongoro Crater — combined into one unforgettable eight-day safari circuit.',
  '/images/SSS-4.jpg',
  8, '2–12', 210000, 'easy', 'Wildlife Safari',
  ARRAY['serengeti'],
  ARRAY['The Great Wildebeest Migration on the Serengeti plains','Ngorongoro Crater — the world''s largest intact caldera','Highest Big Five density of any African destination','Tarangire National Park — Africa''s largest elephant herds','Luxury tented camps inside the Serengeti'],
  '[{"day":1,"title":"Arrive Kilimanjaro Airport","description":"Transfer to Arusha hotel. Trip briefing with your guide.","meals":"Dinner","accommodation":"Hotel, Arusha"},{"day":2,"title":"Tarangire National Park","description":"Drive to Tarangire. Afternoon game drive along the Tarangire River.","meals":"Breakfast, Lunch, Dinner","accommodation":"Tented Camp, Tarangire"},{"day":3,"title":"Tarangire — Serengeti","description":"Drive into the Serengeti via the Ngorongoro Conservation Area. Afternoon drive.","meals":"Breakfast, Lunch, Dinner","accommodation":"Luxury Tented Camp, Serengeti"},{"day":4,"title":"Full Day in the Serengeti","description":"Morning and afternoon game drives in the central corridor.","meals":"Breakfast, Lunch, Dinner","accommodation":"Luxury Tented Camp, Serengeti"},{"day":5,"title":"Northern Serengeti","description":"Drive north towards the Mara River migration crossing territory.","meals":"Breakfast, Lunch, Dinner","accommodation":"Luxury Tented Camp, Northern Serengeti"},{"day":6,"title":"Northern Serengeti","description":"Second full day in the northern Serengeti — remote and pristine.","meals":"Breakfast, Lunch, Dinner","accommodation":"Luxury Tented Camp, Northern Serengeti"},{"day":7,"title":"Serengeti — Ngorongoro","description":"Drive to Ngorongoro Crater. Full afternoon crater drive.","meals":"Breakfast, Lunch, Dinner","accommodation":"Lodge, Ngorongoro Crater Rim"},{"day":8,"title":"Departure","description":"Optional early morning crater drive then drive to Kilimanjaro Airport.","meals":"Breakfast","accommodation":"N/A"}]'::jsonb,
  ARRAY['All road transfers','7 nights accommodation','All meals as specified','All game drives in a 4WD safari vehicle','Professional licensed guide','All national park and conservation area fees','Mineral water','Flying doctors emergency cover'],
  ARRAY['International flights','Tanzania visa fees (USD 50)','Travel insurance','Alcoholic beverages','Tips and gratuities'],
  ARRAY['/images/SSS-4.jpg','/images/sarova-Shaba-9-1.jpg','/images/Enkorok-3.jpg','/images/GRVL-9.jpg','/images/Flamingo-1.jpg','/images/Ashnil-Mara-6.jpg'],
  '[{"question":"Do I need a Tanzania visa?","answer":"Yes. Tanzania requires a visa for most nationalities. It costs USD 50 and can be obtained on arrival at Kilimanjaro Airport."},{"question":"When is the best time to visit the Serengeti?","answer":"The Serengeti is excellent year-round. The Great Migration river crossings are most dramatic July–October."}]'::jsonb,
  true, false
)
ON CONFLICT (slug) DO NOTHING;


-- ─── TESTIMONIALS ────────────────────────────────────────────
INSERT INTO testimonials (name, rating, body, trip_type, source, featured) VALUES
('Caren Happuch', 5, 'Absolutely incredible experience! The team at Bella Safaris made everything seamless. Our guide Samuel was knowledgeable and passionate — we saw all the Big Five in just two days. Will definitely book again!', '3-Day Maasai Mara Safari', 'Google', true),
('Ajay Rao', 5, 'From the first enquiry to the last game drive, Bella Safaris exceeded every expectation. The lodge selection was impeccable and the itinerary perfectly balanced. Worth every shilling.', '7-Day Classic Kenya', 'Google', true),
('Sharon Mmbone', 5, 'Our honeymoon was truly magical. The Mara at dawn, then Zanzibar''s beaches — it was a dream. Bella Safaris took care of every detail and made us feel so special.', 'Honeymoon Mara & Zanzibar', 'Google', true),
('Cheptum Marilyn', 5, 'The best decision we made was booking with Bella Safaris. The professionalism and attention to detail was outstanding. Our family of five had an unforgettable experience.', '7-Day Classic Kenya', 'Google', true),
('Catherine Mutahi', 5, 'Professional, reliable and incredibly knowledgeable team. The vehicle was comfortable and well-maintained, and we saw the migration! An unforgettable trip.', '3-Day Maasai Mara Safari', 'Google', true),
('Steve Mbuthia', 5, 'I have been on many safaris but this was by far the best organised. Every detail was thought through — from the camp quality to the timing of each drive. Highly recommend.', '7-Day Classic Kenya', 'Google', true),
('Monah Wangando', 5, 'Bella Safaris gave us a safari we will talk about for the rest of our lives. The sunrise at Point Lenana was worth every step of the climb. The guides were exceptional.', '4-Day Mount Kenya Trek', 'Google', true),
('faith gakii', 5, 'Amazing experience from start to finish. The zanzibar package was perfectly arranged — the spice tour, the dhow cruise, the hotel. Everything was perfect. 10/10!', '5-Day Zanzibar Beach Retreat', 'Google', true)
ON CONFLICT DO NOTHING;


-- ─── BLOG POSTS ──────────────────────────────────────────────
INSERT INTO blog_posts (slug, title, excerpt, content, cover_image, category, tags, author, featured, published_at) VALUES
(
  'discovering-romance-in-east-africa',
  'Discovering Romance in East Africa',
  'From private game drives at dawn to candlelit dinners under a cathedral of stars — why East Africa is the world''s most extraordinary honeymoon destination.',
  'Full article content — see static data in code.',
  '/images/Ramada-2-1.jpg',
  'Honeymoon',
  ARRAY['romance','zanzibar','maasai mara','honeymoon'],
  'Bella Safaris Team',
  true,
  '2024-02-14'
),
(
  'best-time-to-visit-maasai-mara',
  'Best Time to Visit the Maasai Mara',
  'The Great Migration, seasonal weather patterns, crowd levels, and green season secrets — everything you need to pick the perfect window for your Mara safari.',
  'Full article content — see static data in code.',
  '/images/Ashnil-Mara-6.jpg',
  'Travel Guide',
  ARRAY['maasai mara','migration','planning','seasons'],
  'Bella Safaris Team',
  true,
  '2024-01-10'
),
(
  'what-to-pack-for-a-kenyan-safari',
  'What to Pack for a Kenyan Safari',
  'A comprehensive packing list vetted by our expert guides — the right clothing colours, camera gear, health essentials, and the items most travellers forget.',
  'Full article content — see static data in code.',
  '/images/Enkorok-3.jpg',
  'Travel Tips',
  ARRAY['packing','kenya','safari','essentials'],
  'Bella Safaris Team',
  true,
  '2023-12-01'
)
ON CONFLICT (slug) DO NOTHING;
