/* Shared opportunity dataset and helper functions */

const DATA = [

      /* ══════════════════════════════════════════════════════════
         💻  TECHNOLOGY & DIGITAL
      ══════════════════════════════════════════════════════════ */
      { n: "AI Prompt Freelancing", d: "Businesses need people who get results from ChatGPT & Claude. Sell prompt packs or consult hourly. Fiverr and LinkedIn are full of buyers right now.", cap: "₹0", adv: "Fiverr · LinkedIn", cat: "digital", tags: ["Tech", "AI"] },
      { n: "Short-Form Video Editing", d: "Reels and Shorts editing for local businesses and creators. Every brand needs video; almost none have editors. CapCut is free — learn and earn this week.", cap: "₹0", adv: "Fastest growing", cat: "digital", tags: ["Tech", "Video"] },
      { n: "Local SEO for Small Shops", d: "Set up Google Business profiles, add photos, collect reviews for restaurants and clinics. Each client takes 3 hours. Most shops have no idea this exists.", cap: "₹0", adv: "Walk-in pitch", cat: "digital", tags: ["Tech", "SEO"] },
      { n: "AI Chatbot Setup", d: "Build WhatsApp or website chatbots for salons, clinics, and restaurants using no-code tools like Tidio or ManyChat. Clients pay ₹2–5k/month to never miss a customer.", cap: "₹0", adv: "Recurring income", cat: "digital", tags: ["Tech", "No-code"] },
      { n: "AI Study Material Maker", d: "Convert textbook chapters into flashcards, MCQs, and visual summaries using AI. Sell semester packs per subject on WhatsApp. Scales to every college in India.", cap: "₹0", adv: "Telegram groups", cat: "digital", tags: ["Tech", "EdTech"] },
      { n: "No-Code App Builder", d: "Use Glide, Bubble, or Softr to build booking systems, inventory trackers, or staff rosters for local businesses. Charge ₹8–25k per app — no coding needed.", cap: "₹0", adv: "No coding needed", cat: "digital", tags: ["Tech", "Apps"] },
      { n: "LinkedIn Ghost-Writing", d: "Write posts for founders, consultants, and CAs who hate writing. ₹5–15k/month per client. One good referral chain fills your calendar.", cap: "₹0", adv: "High retention", cat: "digital", tags: ["Tech", "Writing"] },
      { n: "Google Ads Management", d: "Run paid campaigns for coaching centres, clinics, and shops. Google Skillshop certification is free. Clients pay ₹5–15k/month + ad spend. One client covers your semester.", cap: "₹0", adv: "Recurring retainer", cat: "digital", tags: ["Tech", "Ads"] },
      { n: "Data Entry & VA Services", d: "Handle email, calendar, spreadsheet tasks for busy professionals remotely. ₹150–300/hour to start; scale to a small team once you have 3+ clients.", cap: "₹0", adv: "Always in demand", cat: "digital", tags: ["Tech", "Remote"] },
      { n: "Website Flipping", d: "Buy underperforming websites on Flippa for ₹5–20k, improve SEO and content, resell for 2–5× in 3 months. Teaches you marketing, SEO, and negotiation all at once.", cap: "₹5k", adv: "High ROI", cat: "digital", tags: ["Tech", "Investing"] },
      { n: "WhatsApp Catalogue Setup", d: "Set up WhatsApp Business catalogues for local retailers and kirana stores. Simple, repeatable, huge market — most shops don't have one yet.", cap: "₹0", adv: "Walk-in sales", cat: "digital", tags: ["Tech", "Local"] },
      { n: "Podcast Production Service", d: "Edit, mix, and publish podcast episodes for busy professionals. Clients record audio; you do everything else. Recurring monthly work with very low competition.", cap: "₹0", adv: "Low competition", cat: "digital", tags: ["Tech", "Audio"] },
      { n: "AI Image Generation for Brands", d: "Create product mockups, ad creatives, and social posts using Midjourney or DALL-E. Small brands spend ₹20k–50k/month on design — you undercut and outpace them.", cap: "₹0", adv: "Fast turnaround", cat: "digital", tags: ["Tech", "AI"] },
      { n: "Email Newsletter Management", d: "Run weekly newsletters for D2C brands or coaches. Mailchimp is free up to 500 subscribers. Write once, send to thousands. Recurring monthly retainer.", cap: "₹0", adv: "Recurring", cat: "digital", tags: ["Tech", "Marketing"] },
      { n: "Website Maintenance Retainer", d: "Manage plugin updates, backups, and content changes for WordPress/Wix sites. Businesses pay ₹2k–5k/month to avoid touching it themselves.", cap: "₹0", adv: "Passive monthly", cat: "digital", tags: ["Tech", "Web"] },
      { n: "UI/UX Figma Design", d: "Design app screens and website mockups for startups and agencies. Figma is free. Internshala and Toptal have steady openings at good rates.", cap: "₹0", adv: "High pay", cat: "digital", tags: ["Tech", "Design"] },
      { n: "YouTube Thumbnail Design", d: "Split-test thumbnails can double channel views. YouTubers pay ₹200–800 per thumbnail. Volume makes this a real, scalable income from day one.", cap: "₹0", adv: "Volume play", cat: "digital", tags: ["Tech", "Design"] },
      { n: "Data Web Scraping Service", d: "Collect, clean, and structure data for businesses, researchers, and agencies. Python automates 80% — you sell speed and accuracy. High demand from marketing and research teams.", cap: "₹0", adv: "Instant demand", cat: "digital", tags: ["Tech", "Data"] },

      /* ══════════════════════════════════════════════════════════
         🎓  CAMPUS & STUDENT
      ══════════════════════════════════════════════════════════ */
      { n: "Study Notes Subscription", d: "Create concise, well-designed notes for tough subjects. Sell semester access via Razorpay. Demand spikes before exams — every semester, like clockwork.", cap: "₹0", adv: "WhatsApp groups", cat: "campus", tags: ["Campus", "Notes"] },
      { n: "Late-Night Hostel Delivery", d: "Take orders on WhatsApp after 10 PM when canteens close. Source snacks wholesale. Delivery radius = 10 min on a cycle. Pure demand, zero competition after midnight.", cap: "₹2k", adv: "Zero competition", cat: "campus", tags: ["Campus", "Food"] },
      { n: "Campus Event Photographer", d: "Fests, farewells, freshers' nights — every event needs photos. Start with your phone. Build a Linktree portfolio, get booked months ahead by student committees.", cap: "₹0", adv: "Instagram portfolio", cat: "campus", tags: ["Campus", "Photo"] },
      { n: "Placement Prep Club", d: "Run paid mock interviews, GD practice, and aptitude coaching for juniors. Students trust peers who just cracked the same companies more than any coaching centre.", cap: "₹0", adv: "Word of mouth", cat: "campus", tags: ["Campus", "Career"] },
      { n: "Student Errand Service", d: "Pick up parcels, submit forms, queue at admin offices, buy groceries for seniors or busy students. ₹50–150/task. Build a WhatsApp broadcast — demand is instant.", cap: "₹0", adv: "Instant demand", cat: "campus", tags: ["Campus", "Local"] },
      { n: "Campus Brand Ambassador Hub", d: "Aggregate ambassador gigs from Swiggy, Zomato, fintech apps, edtech brands. Take 10–15% margin by coordinating 10 students as a micro-agency. Low effort, consistent income.", cap: "₹0", adv: "No capital needed", cat: "campus", tags: ["Campus", "Brand"] },
      { n: "Secondhand Textbook Bazaar", d: "Buy used textbooks from outgoing students at 20% of MRP, resell to juniors at 50%. Just a WhatsApp group and a cupboard. Runs itself every semester.", cap: "₹2k", adv: "Recurring cycle", cat: "campus", tags: ["Campus", "Books"] },
      { n: "Dorm Room Décor Service", d: "Help new hostel residents personalise rooms — fairy lights, posters, storage hacks. Charge ₹500–1,500 per room. Peak season: June–July when freshers arrive.", cap: "₹3k", adv: "Peak season boom", cat: "campus", tags: ["Campus", "Décor"] },
      { n: "Campus Merchandise Store", d: "Sell college-branded hoodies, mugs, and stickers. Print-on-demand means no stock risk. One viral design funds a semester.", cap: "₹2k", adv: "Viral potential", cat: "campus", tags: ["Campus", "Merch"] },
      { n: "Hostel Laundry Service", d: "Collect, wash, fold, and return laundry for ₹200–400/month per student. Partner with a nearby dhobi. 50 students = solid monthly income with zero capital.", cap: "₹0", adv: "Recurring", cat: "campus", tags: ["Campus", "Service"] },
      { n: "Student Talent Agency", d: "Manage 5–10 talented students — photographers, DJs, emcees — and book them for college events. Take 15–20% commission. Zero capital, pure coordination.", cap: "₹0", adv: "Commission model", cat: "campus", tags: ["Campus", "Events"] },
      { n: "Exam Reminder Bot", d: "Build a WhatsApp or Telegram bot that sends exam and deadline reminders to students at your college. Monetise with small ads or paid premium alerts.", cap: "₹0", adv: "Campus viral", cat: "campus", tags: ["Campus", "Tech"] },

      /* ══════════════════════════════════════════════════════════
         🔧  LOCAL SERVICES
      ══════════════════════════════════════════════════════════ */
      { n: "Tech Support for Seniors", d: "140M+ Indians over 60 struggle daily with UPI, video calls, OTPs, and apps. Walk to the next apartment block and find 10 clients. Skills you already have.", cap: "₹0", adv: "Neighbourhood demand", cat: "service", tags: ["Local", "Tech"] },
      { n: "Resume + LinkedIn Makeovers", d: "Final-year students pay for a resume that gets calls. Pair it with a LinkedIn rewrite. Template once, reuse forever. Placement season = instant demand surge.", cap: "₹0", adv: "Internshala · LinkedIn", cat: "service", tags: ["Local", "Career"] },
      { n: "Sign Language Tutoring", d: "India has 63 lakh deaf or hard-of-hearing people. Learn ISL from free YouTube resources, teach on Zoom. Near-zero competition. Families pay reliably and refer immediately.", cap: "₹0", adv: "Low competition", cat: "service", tags: ["Local", "Education"] },
      { n: "Mobile Car Cleaning", d: "Car owners hate going to wash centres. You come to them at apartment parking lots on weekends. ₹2k kit, 5 cars per morning = ₹750–1,500/day.", cap: "₹2k", adv: "Weekend viable", cat: "service", tags: ["Local", "Cleaning"] },
      { n: "Part-Time Tourist Guide", d: "Lead tourists around your city — heritage walks, food tours, hidden gems. Zero capital, just local knowledge. List on Airbnb Experiences. Works any weekend.", cap: "₹0", adv: "Weekends only", cat: "service", tags: ["Local", "Tourism"] },
      { n: "Hyperlocal Delivery", d: "Deliver for local shops within 3–5 km on a bicycle or bike. WhatsApp-based orders, zero tech needed. Build relationships with 5 shops and you have a full schedule.", cap: "₹5k", adv: "Recurring", cat: "service", tags: ["Local", "Delivery"] },
      { n: "Mobile Repair Shop", d: "Smartphone repairs and accessories — low rent, walk-in demand. YouTube can teach you most repairs. Start at home, move to a kiosk once you have 10 regulars.", cap: "₹50k", adv: "Walk-in demand", cat: "service", tags: ["Local", "Repair"] },
      { n: "Home Cleaning Service", d: "Offer deep-cleaning and organising to apartments and small offices. ₹800–2,000 per session. Build a team of 2–3 and take 30% margin as the coordinator.", cap: "₹3k", adv: "Repeat bookings", cat: "service", tags: ["Local", "Cleaning"] },
      { n: "Laundry & Ironing Pickup", d: "Collect clothes from hostel students, send to local dhobi, deliver back neatly folded. ₹5–10/garment margin. 50 students × 20 garments/week = ₹5,000+ weekly.", cap: "₹0", adv: "Zero capital", cat: "service", tags: ["Local", "Laundry"] },
      { n: "Pet Sitting & Dog Walking", d: "India's pet industry is booming. Pet owners in urban apartments pay ₹200–500/walk and ₹500–1,500/day for sitting. Find first clients in your own building.", cap: "₹0", adv: "Growing fast", cat: "service", tags: ["Local", "Pets"] },
      { n: "Packers & Movers Broker", d: "Connect students and families moving locally with verified labour. Take ₹500–2,000 commission per booking. No van needed — just a phone and trusted contacts.", cap: "₹0", adv: "High ticket", cat: "service", tags: ["Local", "Logistics"] },
      { n: "Home Salon & Beauty Service", d: "Provide waxing, facials, and threading at clients' homes. No rent overhead. Women value privacy. Steady referral traffic once established.", cap: "₹3k", adv: "No rent", cat: "service", tags: ["Local", "Beauty"] },
      { n: "Birthday Party Organiser", d: "Decorate venues, arrange cakes, set up photo booths for ₹3k–8k per event. Parents don't have time and trust a local face more than an app.", cap: "₹5k", adv: "Word of mouth", cat: "service", tags: ["Local", "Events"] },
      { n: "Immigration & Visa Consultant", d: "Help students apply for US, UK, Canada visas. Charge for SOP writing, document checklist, and interview prep. ₹5k–20k per application, massive demand.", cap: "₹0", adv: "High margin", cat: "service", tags: ["Local", "Consulting"] },
      { n: "Elderly Care Companion", d: "Spend a few hours/day with elderly people — accompany to hospitals, help with gadgets, provide company. Families pay ₹5k–15k/month. Deeply underserved.", cap: "₹0", adv: "Underserved market", cat: "service", tags: ["Local", "Care"] },
      { n: "Plumbing & Electrician Network", d: "Partner with local tradespeople. Take bookings on WhatsApp, dispatch them, add a 20–30% margin. You're the coordinator, not the worker. Asset-light model.", cap: "₹0", adv: "Asset-light", cat: "service", tags: ["Local", "Trades"] },
      { n: "Notary & Document Assistance", d: "Help people with affidavits, attestations, and form-filling. A certified notary earns ₹100–300 per document. Volume is high near courts and banks.", cap: "₹5k", adv: "Volume play", cat: "service", tags: ["Local", "Legal"] },

      /* ══════════════════════════════════════════════════════════
         🎨  CREATIVE & CONTENT
      ══════════════════════════════════════════════════════════ */
      { n: "Vernacular Content Creation", d: "Telugu, Tamil, Marathi, Kannada content is massively undersupplied. Brands pay more than English creators. Your mother tongue is the competitive edge — no English needed.", cap: "₹0", adv: "Low competition", cat: "creative", tags: ["Creative", "Regional"] },
      { n: "Faceless YouTube Automation", d: "Run channels on finance, history, or tech facts without showing your face. AI voiceover + free stock footage. One good video earns ad money for years.", cap: "₹0", adv: "Passive income", cat: "creative", tags: ["Creative", "YouTube"] },
      { n: "Meme Page → Brand Deals", d: "Build a niche meme page on college life or engineering humor. At 10k followers brands pay ₹2–8k per post. No camera, no skills — just timing and consistency.", cap: "₹0", adv: "Instagram", cat: "creative", tags: ["Creative", "Social"] },
      { n: "Custom Digital Illustrations", d: "Commissions for digital portraits, couple art, pet illustrations, birthday gifts. Post process videos on Instagram Reels — they go viral and bring inbound orders daily.", cap: "₹0", adv: "Instagram DMs", cat: "creative", tags: ["Creative", "Art"] },
      { n: "Wedding Reel Videography", d: "Shoot and edit 60-second highlight Reels for weddings and engagements. Families pay ₹3–8k for a shareable memory. Start with a phone, upgrade to camera after 5 clients.", cap: "₹0", adv: "High demand", cat: "creative", tags: ["Creative", "Video"] },
      { n: "Canva Template Shop", d: "Design and sell Instagram post templates, resume templates, and pitch decks on Etsy or Gumroad. Create once, sell to thousands. ₹200–800/pack, no delivery cost.", cap: "₹0", adv: "Passive income", cat: "creative", tags: ["Creative", "Design"] },
      { n: "Print-on-Demand Merch", d: "Upload designs to Redbubble or Printful — they print and ship every order. You earn a royalty with no inventory, no capital. Works brilliantly alongside a meme page.", cap: "₹0", adv: "Design skills only", cat: "creative", tags: ["Creative", "Merch"] },
      { n: "Handicrafts & Artisan Goods", d: "Handmade products sold locally, at fairs, or online. India's handicraft market is ₹70,000 crore and growing. Resin art, macramé, candles — all sellable on Instagram.", cap: "₹10k", adv: "Cultural edge", cat: "creative", tags: ["Creative", "Handmade"] },
      { n: "Wedding Invitation Design", d: "Digital animated wedding invites are replacing physical cards. One invite = ₹1k–5k. Season = non-stop demand. Design on Canva or Adobe in under 2 hours.", cap: "₹0", adv: "Season demand", cat: "creative", tags: ["Creative", "Design"] },
      { n: "Logo & Branding Packages", d: "New businesses need logos. A starter pack — logo, visiting card, letterhead — sells for ₹2k–8k. Do 3 a week and it's a full-time income.", cap: "₹0", adv: "Always in demand", cat: "creative", tags: ["Creative", "Design"] },
      { n: "Real Estate Photography", d: "Property photos sell listings faster. Agents pay ₹500–2k per shoot. A decent phone and natural light is enough to start. Agents call back repeatedly.", cap: "₹0", adv: "Walk-in demand", cat: "creative", tags: ["Creative", "Photo"] },
      { n: "Voiceover Artist", d: "Record ad spots, explainer videos, and audiobooks in your language. Indian voice artists on Voices.com earn $20–100/hour. Bilingual = premium rates.", cap: "₹0", adv: "Global platform", cat: "creative", tags: ["Creative", "Audio"] },
      { n: "Custom Portrait & Illustration", d: "Draw digital or physical portraits for anniversaries, pet owners, and families. One viral Instagram post = weeks of inbound orders.", cap: "₹500", adv: "Gift market", cat: "creative", tags: ["Creative", "Art"] },
      { n: "Calligraphy & Lettering", d: "Handwritten envelopes, menu boards, and quotes for cafes. Brides pay ₹3k–10k for handwritten invitations. Wedding season = peak revenue.", cap: "₹500", adv: "Wedding season", cat: "creative", tags: ["Creative", "Handmade"] },
      { n: "Stop Motion Animation Reels", d: "Frame-by-frame animations for products go viral constantly. Brands pay ₹5k–20k for a single reel. Learn free on YouTube. Very few people offer this.", cap: "₹0", adv: "Viral format", cat: "creative", tags: ["Creative", "Video"] },

      /* ══════════════════════════════════════════════════════════
         🛒  COMMERCE & RESELL
      ══════════════════════════════════════════════════════════ */
      { n: "Thrift & Resell on Instagram", d: "Source second-hand branded clothes from raddiwala or OLX. Style, photograph, resell on Instagram. Eco-angle gets you organic press and a loyal, referring buyer base.", cap: "₹1k", adv: "2–4× margins", cat: "resell", tags: ["Commerce", "Fashion"] },
      { n: "Rebrand Local Products", d: "Find unbranded products from local manufacturers — snacks, spices, home goods. Add a label. List on Amazon, Meesho, or Instagram. Many students run this from home with ₹5k.", cap: "₹5k", adv: "Scalable", cat: "resell", tags: ["Commerce", "D2C"] },
      { n: "Gadget Parts Reselling", d: "Buy phone cases, chargers, earbuds wholesale from Indiamart or Alibaba. Resell on OLX, Facebook Marketplace, and campus. 2–3× margins and constant demand from students.", cap: "₹5k", adv: "Constant demand", cat: "resell", tags: ["Commerce", "Gadgets"] },
      { n: "Festival Gift Hampers", d: "Assemble curated hampers for Diwali, Rakhi, and Christmas. Sell to corporate offices and housing societies. Companies buy 100+ hampers per season — one B2B deal = big revenue.", cap: "₹10k", adv: "High-margin season", cat: "resell", tags: ["Commerce", "Gifts"] },
      { n: "Sneaker & Streetwear Resell", d: "Buy limited drops and discounted branded sneakers. Resell at 1.5–3× on OLX, Instagram, or StockX India. Sneaker culture is exploding in Tier 1 Indian cities.", cap: "₹5k", adv: "Growing niche", cat: "resell", tags: ["Commerce", "Fashion"] },
      { n: "Stationery Subscription Box", d: "Curate monthly stationery boxes — pens, planners, stickers — for students and remote workers. ₹299–499/month. Instagram-worthy packaging drives organic growth.", cap: "₹8k", adv: "Recurring revenue", cat: "resell", tags: ["Commerce", "Subscription"] },
      { n: "Wholesale to Retail Arbitrage", d: "Buy surplus goods from Sadar Bazaar or wholesale markets. List on Meesho with 40–60% markup. No investment in brand needed. Fast cash, high volume.", cap: "₹5k", adv: "Fast cash", cat: "resell", tags: ["Commerce", "Arbitrage"] },
      { n: "Custom Printed Products", d: "Sell custom phone cases, t-shirts, and mugs via Printify or local printers. Accept orders on Instagram. Bulk college orders are easy wins.", cap: "₹2k", adv: "Scalable", cat: "resell", tags: ["Commerce", "Print"] },
      { n: "Import via Alibaba & Resell", d: "Source niche products — LED strip lights, gadgets, accessories — from Alibaba. List on Amazon India. Start with one winning SKU and scale from there.", cap: "₹15k", adv: "High margin", cat: "resell", tags: ["Commerce", "Import"] },

      /* ══════════════════════════════════════════════════════════
         💚  HEALTH & WELLNESS
      ══════════════════════════════════════════════════════════ */
      { n: "Fitness Coaching via WhatsApp", d: "Personalised workout + diet plans for busy students and working adults. Deliver over WhatsApp. No gym needed. Monthly retainers build a steady, scalable income.", cap: "₹0", adv: "Recurring income", cat: "health", tags: ["Health", "Fitness"] },
      { n: "Mental Wellness Journaling Bot", d: "Daily check-in + journaling bot on WhatsApp for college students. Gen Z pays for calm. At 500 subscribers that's ₹25k–50k/month. Campus tie-ups give instant distribution.", cap: "₹0", adv: "Campus tie-ups", cat: "health", tags: ["Health", "Wellness"] },
      { n: "Yoga & Meditation Classes", d: "Run online or rooftop morning yoga sessions for apartment residents. ₹300–600/person/month. A batch of 15 people = ₹5,000–9,000/month for 45 minutes of effort per day.", cap: "₹0", adv: "Repeat attendance", cat: "health", tags: ["Health", "Yoga"] },
      { n: "Period Wellness Subscription", d: "Curate and ship monthly period care boxes — pads, dark-chocolate, pain patches, herbal tea. ₹399–599/month. High retention, subscription model, community that sells itself.", cap: "₹8k", adv: "High retention", cat: "health", tags: ["Health", "Women"] },
      { n: "Nutrition Meal Planning", d: "Create weekly meal plans for hostel students and working professionals. ₹500–1,000/month per client. Pair with a grocery list for maximum stickiness.", cap: "₹0", adv: "Always needed", cat: "health", tags: ["Health", "Nutrition"] },
      { n: "Cycle & Running Club", d: "Charge ₹200–500/month to organize weekend cycling or running groups. Strava integration, route planning, partner discounts. 50 members = ₹10–25k/month.", cap: "₹0", adv: "Community flywheel", cat: "health", tags: ["Health", "Fitness"] },
      { n: "Sports Coaching for Kids", d: "Cricket, football, or badminton coaching on weekends. Parents pay ₹800–1,500/month per child. Society parks and school playgrounds work perfectly.", cap: "₹2k", adv: "Weekend only", cat: "health", tags: ["Health", "Sports"] },
      { n: "Corporate Wellness Workshops", d: "Run stress management, breathing, or productivity workshops for IT companies. HR teams are actively looking. 1 session = ₹5k–15k. Pure B2B income.", cap: "₹0", adv: "B2B", cat: "health", tags: ["Health", "Corporate"] },

      /* ══════════════════════════════════════════════════════════
         🌍  ECO & PLANET
      ══════════════════════════════════════════════════════════ */
      { n: "Eco-Product Dropshipping", d: "Sell bamboo toothbrushes, reusable bags, beeswax wraps on Instagram or Meesho. Eco-conscious buyers refer constantly to friends and forgive premium pricing.", cap: "₹3k", adv: "Growing demand", cat: "planet", tags: ["Eco", "D2C"] },
      { n: "Solar Panel Dealership", d: "Sell and install rooftop solar systems as a referral agent. Govt subsidies under PM Surya Ghar make it very attractive. Growing demand in Tier 2–3 cities.", cap: "₹2k", adv: "Govt backed", cat: "planet", tags: ["Eco", "Energy"] },
      { n: "E-Waste Collection Drive", d: "Collect old phones, chargers, cables from apartment blocks. Sell to certified e-waste recyclers. Instagram the impact data — it markets itself for free.", cap: "₹0", adv: "Zero capital", cat: "planet", tags: ["Eco", "Recycling"] },
      { n: "Upcycled Furniture Flipping", d: "Buy old furniture at scrap rates from OLX, repaint and refinish, sell at 3–5× on Instagram or NoBroker. Transformation Reels go viral and attract buyers.", cap: "₹3k", adv: "High margins", cat: "planet", tags: ["Eco", "Furniture"] },
      { n: "Cloth Bag Printing Business", d: "Print custom branded cloth bags for kirana shops, bakeries, and boutiques replacing plastic. MOQ of 100 bags at ₹25 cost, sell at ₹45–60. One meeting = bulk order.", cap: "₹5k", adv: "B2B bulk orders", cat: "planet", tags: ["Eco", "Bags"] },
      { n: "Compost Collection Service", d: "Collect wet waste from 20–30 homes, compost, and sell to plant nurseries or farms. Charge ₹100–200/home/month. RWA partnerships scale it quickly.", cap: "₹3k", adv: "Recurring", cat: "planet", tags: ["Eco", "Waste"] },
      { n: "Plant Nursery & Delivery", d: "Grow indoor plants from cuttings — pothos, ZZ, money plant — and sell online. Urban plant parents are a loyal, growing customer base with high repeat purchases.", cap: "₹5k", adv: "Urban demand", cat: "planet", tags: ["Eco", "Plants"] },

      /* ══════════════════════════════════════════════════════════
         🌾  AGRICULTURE & LAND
      ══════════════════════════════════════════════════════════ */
      { n: "Terrace Farming Kits", d: "Curate and sell urban balcony or terrace vegetable starter kits — soil, seeds, pots, guide card. Growing demand in cities for home-grown food and clean eating.", cap: "₹10k", adv: "Urban demand", cat: "agri", tags: ["Agri", "Urban"] },
      { n: "Mushroom Cultivation", d: "High-demand crop you can grow in a spare room or garage. Restaurants and direct buyers pay premium prices. Training available on YouTube. Govt grants available.", cap: "₹30k", adv: "High margins", cat: "agri", tags: ["Agri", "Farming"] },
      { n: "Organic Farming", d: "Premium vegetables and fruits sold to urban households and stores. Govt subsidies available under PMKSY. Works with as little as half an acre of family land.", cap: "₹50k", adv: "Govt subsidies", cat: "agri", tags: ["Agri", "Organic"] },
      { n: "Agri-Tourism Farm Stays", d: "If your family owns farmland, convert weekends into paid experiences — organic tours, harvest activities, farm-to-table meals. ₹500–1,500/visitor. Airbnb handles marketing.", cap: "₹20k", adv: "Land you already own", cat: "agri", tags: ["Agri", "Tourism"] },
      { n: "Microgreens Growing", d: "Grow microgreens (sunflower, radish, pea shoots) in 7–10 days on trays. Sell to health cafés, hotels, and health-conscious families. ₹80–150 per tray. Fast cycle.", cap: "₹5k", adv: "Fast cycle", cat: "agri", tags: ["Agri", "Urban"] },
      { n: "Honey & Bee Products", d: "Beekeeping with 2–5 boxes produces honey, beeswax, propolis. Sell locally, to organic stores, or D2C on Instagram. Govt beekeeping training and subsidies available.", cap: "₹30k", adv: "Multiple products", cat: "agri", tags: ["Agri", "Natural"] },
      { n: "Vermicompost Production", d: "Convert organic waste into high-quality fertilizer. Sold to organic farms, nurseries, and urban gardeners. Low space, low capital, recurring buyers.", cap: "₹10k", adv: "Recurring buyers", cat: "agri", tags: ["Agri", "Organic"] },
      { n: "Floriculture (Flower Farming)", d: "Grow marigolds, roses, or gerberas for local mandis and event decorators. Short crop cycle (45–90 days). Govt subsidy under NHM scheme.", cap: "₹30k", adv: "Govt subsidy", cat: "agri", tags: ["Agri", "Flowers"] },
      { n: "Fish Farming (Aquaculture)", d: "Rohu, catla, or tilapia in small ponds or tanks. Demand is consistent year-round. NABARD offers 25% subsidy on pond construction.", cap: "₹50k", adv: "NABARD subsidy", cat: "agri", tags: ["Agri", "Aquaculture"] },

      /* ══════════════════════════════════════════════════════════
         🍳  FOOD & BEVERAGE
      ══════════════════════════════════════════════════════════ */
      { n: "Cloud Kitchen", d: "Delivery-only kitchen on Zomato/Swiggy — no storefront needed. Low overhead, high volume potential. One unique dish done well beats a full menu.", cap: "₹1L", adv: "No storefront", cat: "food", tags: ["Food", "Delivery"] },
      { n: "Tiffin Service", d: "Daily meals for office workers, students, or IT parks nearby. Predictable demand and recurring revenue. One satisfied client refers 3 more.", cap: "₹20k", adv: "Recurring revenue", cat: "food", tags: ["Food", "Daily"] },
      { n: "Packaged Snacks / Namkeen", d: "Produce and sell snacks to local shops, supermarkets, and online. FSSAI home license is simple to get. Regional recipes are differentiated and scalable.", cap: "₹30k", adv: "Scalable", cat: "food", tags: ["Food", "D2C"] },
      { n: "Juice / Beverage Shop", d: "Fresh juices, shakes, or cold brew — high margins, low setup. Footfall-based near colleges or offices. One good location = ₹20,000–60,000/month.", cap: "₹50k", adv: "High margins", cat: "food", tags: ["Food", "Retail"] },
      { n: "Healthy Meal Prep Boxes", d: "Weekly pre-portioned meals for gym-goers and dieters. ₹1,500–3,000/week per client. Subscription = predictable cash flow. 10 clients = ₹20k/week.", cap: "₹10k", adv: "Subscription", cat: "food", tags: ["Food", "Health"] },
      { n: "Homemade Pickle & Preserve", d: "Family recipes turned into sellable products. Source bottles wholesale, create a brand, sell on Instagram and WhatsApp. Loyal customers reorder every month.", cap: "₹5k", adv: "Family recipe edge", cat: "food", tags: ["Food", "D2C"] },
      { n: "Cake & Dessert Orders", d: "Custom cakes, brownies, and dessert boxes for birthdays and celebrations. Instagram is your storefront. ₹500–3,000 per order. Peak demand on weekends and festive seasons.", cap: "₹5k", adv: "High demand", cat: "food", tags: ["Food", "Baking"] },
      { n: "Street Food Stall", d: "A single well-executed dish near a college or office — momos, chaat, sandwiches, or dosa. 60–70% margin. Regulars = predictable daily revenue from day one.", cap: "₹20k", adv: "Footfall driven", cat: "food", tags: ["Food", "Retail"] },
      { n: "Catering for Small Events", d: "Cook and serve for birthday parties, pooja functions, kitty parties (20–50 people). ₹150–250/plate, 40–50 guests = solid per-event earning.", cap: "₹10k", adv: "Event season", cat: "food", tags: ["Food", "Catering"] },
      { n: "Home Bakery", d: "Cakes, cookies, and breads made at home and sold via Instagram + WhatsApp. Birthday cakes alone can sustain a small business. FSSAI license is affordable.", cap: "₹10k", adv: "Instagram sales", cat: "food", tags: ["Food", "Bakery"] },
      { n: "Ice Cream / Kulfi Cart", d: "Mobile cart near parks, schools, and markets. Low setup, loyal repeat customers in summer. Franchise models also available at ₹1–2L for a branded setup.", cap: "₹30k", adv: "Summer cash", cat: "food", tags: ["Food", "Retail"] },

      /* ══════════════════════════════════════════════════════════
         📚  EDUCATION & SKILLING
      ══════════════════════════════════════════════════════════ */
      { n: "Home Tuition / Coaching", d: "Teach school students in any subject — 1:1 or small batch. Zero capital, high trust factor in local communities. Referrals compound fast in neighbourhoods.", cap: "₹0", adv: "Zero capital", cat: "education", tags: ["Education", "Teaching"] },
      { n: "Online Course Creator", d: "Sell knowledge on Udemy, YouTube, or your own platform. Record once, earn repeatedly. One well-positioned course on a niche topic can earn ₹30–80k per month passively.", cap: "₹0", adv: "Passive income", cat: "education", tags: ["Education", "Digital"] },
      { n: "Competitive Exam Coaching", d: "UPSC, JEE, NEET, CLAT — premium coaching with high demand. Start online with zero infrastructure. Students who recently cleared exams are the most trusted teachers.", cap: "₹0", adv: "High demand", cat: "education", tags: ["Education", "Exams"] },
      { n: "Coding Bootcamp for Kids", d: "Teach Scratch, Python basics, or game-building to school kids aged 8–14. ₹800–1,500/month per child. Batch of 8 = ₹6,400–12,000/month for 2 hours/week.", cap: "₹0", adv: "Parent-funded", cat: "education", tags: ["Education", "Coding"] },
      { n: "Language Learning Classes", d: "Teach spoken English, French, German, or Japanese online. High demand from Tier 2 students going abroad. ₹500–1,500/month per student. Group classes scale easily.", cap: "₹0", adv: "High demand", cat: "education", tags: ["Education", "Language"] },
      { n: "Public Speaking & Debate Club", d: "Charge ₹300–500/month for weekly sessions on communication, debate, MUN prep, and presentation skills. Schools and parents gladly pay. Skills are universally valued.", cap: "₹0", adv: "Universal demand", cat: "education", tags: ["Education", "Skills"] },
      { n: "Art & Craft Classes for Kids", d: "Teach drawing, painting, origami, or clay modelling to children at home or online. ₹800–1,200/child/month. Batch of 6–8 kids on weekends = ₹5,000–9,600/month.", cap: "₹2k", adv: "Weekend only", cat: "education", tags: ["Education", "Art"] },
      { n: "IELTS / TOEFL Coaching", d: "English proficiency coaching for students applying abroad. Massive demand, few good tutors. ₹8k–15k per student for a 6-week programme. Referrals come automatically.", cap: "₹0", adv: "High value", cat: "education", tags: ["Education", "English"] },
      { n: "Robotics & Coding Kits Club", d: "After-school robotics clubs using Arduino kits. Schools and parents pay ₹1,000–2,500/month. Starter franchise kits available from ₹30k with school tie-ups.", cap: "₹30k", adv: "School tie-ups", cat: "education", tags: ["Education", "STEM"] },
      { n: "Library & Book Subscription", d: "Curate and lend books to households for ₹200–400/month. 50 subscribers + 500 books = a viable neighbourhood library. Minimal logistics, maximum community value.", cap: "₹10k", adv: "Recurring", cat: "education", tags: ["Education", "Books"] },
      { n: "Skill Bootcamp Organiser", d: "Run weekend bootcamps on video editing, Excel, or public speaking. Charge ₹500–1,500/seat. Partner with a skill-holder and split profits. Low risk, immediate revenue.", cap: "₹0", adv: "Weekend model", cat: "education", tags: ["Education", "Skills"] },

      /* ══════════════════════════════════════════════════════════
         🤯  WILDCARD — THINGS YOU NEVER THOUGHT OF
      ══════════════════════════════════════════════════════════ */
      { n: "Rent Out Your Parking Spot", d: "Unused parking slot near a market, hospital, or station? List it on Park+. People pay ₹2k–6k/month. You do nothing. Truly zero-effort passive income.", cap: "₹0", adv: "Zero effort", cat: "wow", tags: ["Wildcard", "Passive"] },
      { n: "Sleep Study Participant", d: "Hospitals and pharma companies pay ₹500–5,000 per session for sleep studies, vaccine trials, and clinical research. Legal, safe, and shockingly well-paid.", cap: "₹0", adv: "Get paid to sleep", cat: "wow", tags: ["Wildcard", "Unique"] },
      { n: "Sell Your Annotated Textbooks", d: "Your highlighted, annotated textbook is worth more than a clean one. Students pay a premium for a copy that's already been 'understood'. Sell on OLX or WhatsApp groups.", cap: "₹0", adv: "Sell what you own", cat: "wow", tags: ["Wildcard", "Campus"] },
      { n: "AI-Powered Astrology Reports", d: "Indians spend ₹3,000 crore/year on astrology. Use AI to generate detailed personalised birth chart reports and sell them for ₹199–499. No belief required — just build the tool.", cap: "₹0", adv: "₹3,000 Cr market", cat: "wow", tags: ["Wildcard", "AI"] },
      { n: "Charge EVs at Home", d: "If you have a home EV charger, list it on Zeon or PlugShare. EV owners in your neighbourhood pay per charge. A charger you already own becomes a revenue machine.", cap: "₹0", adv: "Passive income", cat: "wow", tags: ["Wildcard", "EV"] },
      { n: "Become a Movie / Ad Extra", d: "Film productions in Mumbai, Hyderabad, and Chennai constantly need background actors. Pay is ₹500–3,000/day. No experience needed. WhatsApp casting groups recruit daily.", cap: "₹0", adv: "Get paid on sets", cat: "wow", tags: ["Wildcard", "Film"] },
      { n: "Sell Unused Internet Bandwidth", d: "Apps like Honeygain pay you real money just for sharing your unused internet bandwidth in the background. Run it on your laptop 24/7 and earn while you sleep.", cap: "₹0", adv: "Earn while you sleep", cat: "wow", tags: ["Wildcard", "Passive"] },
      { n: "Ghost-Write Quora Answers", d: "Doctors, lawyers, and consultants want a Quora presence but have no time. Write their answers under their name — you earn ₹5k–15k/month per client. Totally legitimate.", cap: "₹0", adv: "Hidden goldmine", cat: "wow", tags: ["Wildcard", "Writing"] },
      { n: "Rent Out Your Clothes", d: "Designer sarees, sherwanis, and ethnic wear sitting in wardrobes. List them on Stage3 or Flyrobe. One saree rented 10 times earns more than its purchase price.", cap: "₹0", adv: "Clothes you own", cat: "wow", tags: ["Wildcard", "Fashion"] },
      { n: "Mystery Shopping Agent", d: "Companies hire mystery shoppers to test service quality and submit reports. They pay ₹200–1,500 per visit + reimburse your purchase. Platforms: iShop, Bare India.", cap: "₹0", adv: "Get paid to shop", cat: "wow", tags: ["Wildcard", "Unique"] },
      { n: "Drone Footage for Real Estate", d: "A DJI Mini drone + 2 hours of practice = ₹3,000–8,000 per property shoot. Builders are desperately looking for aerial footage. Drone rentals exist if you don't own one.", cap: "₹5k", adv: "Builders will call YOU", cat: "wow", tags: ["Wildcard", "Tech"] },
      { n: "Sell Unused GPU Time", d: "If you have a gaming PC with a good GPU, rent its compute power on Vast.ai or Salad.io to AI researchers. ₹3k–10k/month extra from hardware you already own.", cap: "₹0", adv: "Earn from your PC", cat: "wow", tags: ["Wildcard", "Tech"] },
      { n: "Local History & Ghost Tour", d: "Every city has dark history and forgotten stories. Design a 90-minute walking tour, charge ₹300–600/person, run it on weekends. TripAdvisor and Airbnb Experiences list you free.", cap: "₹0", adv: "No capital needed", cat: "wow", tags: ["Wildcard", "Tourism"] },
      { n: "Translate OTT Subtitles", d: "Netflix, Amazon, and indie films need subtitles in Indian languages. Platforms like Subly and GoTranscript pay per minute of video. Bilingual = money most people leave on the table.", cap: "₹0", adv: "Bilingual = money", cat: "wow", tags: ["Wildcard", "Language"] },
      { n: "Baby & Business Naming Service", d: "Parents search for hours for meaningful names. Business owners pay even more. Charge ₹500–2,000 for a curated name list with meanings and origins. Launch on Instagram and Etsy.", cap: "₹0", adv: "Nobody else does this", cat: "wow", tags: ["Wildcard", "Unique"] },
      { n: "Sell Digital Wallpapers on Etsy", d: "Custom aesthetic phone and desktop wallpaper packs sell for $2–5 on Etsy. Make a pack of 20 once. It sells while you're in class. Indian creators are massively underrepresented.", cap: "₹0", adv: "Make once, sell forever", cat: "wow", tags: ["Wildcard", "Digital"] },
      { n: "Human Billboard", d: "Companies pay students to wear branded t-shirts or hand out flyers at high-footfall spots. ₹300–800 for 2–3 hours. Your presence is the ad. Apps like TaskBob list these gigs.", cap: "₹0", adv: "Get paid to walk", cat: "wow", tags: ["Wildcard", "Gig"] },
      { n: "Digitise Old Family Photos", d: "Middle-class families have boxes of 1980s–2000s printed photos slowly decaying. Scan, restore with AI, and deliver a beautiful digital album. Charge ₹1,500–5,000 per family.", cap: "₹2k", adv: "Emotional premium", cat: "wow", tags: ["Wildcard", "AI"] },

      /* ══════════════════════════════════════════════════════════
         🆕 HIGH-CAPITAL OPPORTUNITIES (₹50k - ₹100k)
      ══════════════════════════════════════════════════════════ */
      { n: "Premium Shopify D2C Builder", d: "Build custom Shopify stores for local D2C brands. Capital goes toward premium theme licenses, custom plugins, and marketing templates to offer a high-end package.", cap: "₹50k", adv: "High client budgets", cat: "digital", tags: ["Tech", "Shopify"] },
      { n: "Local Business Drone Mapping Service", d: "Use a professional drone to map real estate properties, construction sites, and large farm plots. Sell high-resolution 3D models and orthomosaic maps.", cap: "₹75k", adv: "High ticket clients", cat: "digital", tags: ["Tech", "Drones"] },
      { n: "No-Code SaaS MVP Developer", d: "Build early MVPs for tech startups using Bubble, FlutterFlow, and Airtable. Budget covers yearly developer plans and UI kit resources.", cap: "₹60k", adv: "High margin retainer", cat: "digital", tags: ["Tech", "No-code"] },
      { n: "Custom Smart Home Integrations", d: "Consult, purchase, and install smart lighting, security systems, and entertainment centers for premium residences and new apartments.", cap: "₹80k", adv: "Affluent neighborhoods", cat: "digital", tags: ["Tech", "Hardware"] },
      { n: "Acoustic Pod & Home Studio Setup", d: "Design and install professional soundproofing and acoustic panels for aspiring podcasters, musicians, and streamers in their homes.", cap: "₹100k", adv: "Growing creator economy", cat: "digital", tags: ["Tech", "Audio"] },
      { n: "AI-Driven Local Ad Agency", d: "Run high-converting localized Meta and Google ads. Budget covers premium AI copywriting tools, design assets, and initial ad spend for client case studies.", cap: "₹50k", adv: "Recurring retainers", cat: "digital", tags: ["Tech", "AI"] },

      { n: "Campus Micro-Café Kiosk", d: "Run a compact coffee and sandwich bar near college hostels or fests. Budget covers espresso machine, sandwich press, and initial inventory.", cap: "₹60k", adv: "High foot traffic", cat: "campus", tags: ["Campus", "Food"] },
      { n: "Campus 3D Printing & Prototyping Lab", d: "Print 3D models and prototypes for engineering and design students' projects. Budget covers 2 high-quality 3D printers and filament stock.", cap: "₹50k", adv: "Engineering projects", cat: "campus", tags: ["Campus", "Tech"] },
      { n: "Student Co-Working Space Kiosk", d: "Rent out a small workspace equipped with high-speed internet, power backups, and study desks near campus. Capital covers router, power station, and desks.", cap: "₹75k", adv: "Exam season demand", cat: "campus", tags: ["Campus", "Space"] },
      { n: "Campus Apparel Printing Hub", d: "Start a customized t-shirt and hoodie printing business for college societies, fests, and departments. Budget covers heat press, cutter, and blank stock.", cap: "₹80k", adv: "Bulk college orders", cat: "campus", tags: ["Campus", "Merch"] },
      { n: "Electric Scooter Rental Fleet", d: "Purchase 3 electric scooters and rent them hourly/daily to students for easy campus commuting. Budget covers scooters and safety gear.", cap: "₹100k", adv: "Daily campus commute", cat: "campus", tags: ["Campus", "Commute"] },
      { n: "Campus Photography Equipment Rental", d: "Lease professional cameras, lenses, and tripods to student creators and event organizers. Budget covers mid-range DSLR, lenses, and insurance.", cap: "₹75k", adv: "Student film/event projects", cat: "campus", tags: ["Campus", "Events"] },

      { n: "Premium Car Detailing & Ceramic Coating", d: "Offer professional paint correction, interior detailing, and ceramic coating at the client's home. Budget covers polisher, vacuum, and high-end coating chemicals.", cap: "₹75k", adv: "Repeat premium clients", cat: "service", tags: ["Local", "Cars"] },
      { n: "Professional Carpet & Sofa Deep Cleaning", d: "Deep clean sofas, carpets, and mattresses using heavy-duty injection-extraction machines. Budget covers professional machines and cleaning compounds.", cap: "₹50k", adv: "High demand in cities", cat: "service", tags: ["Local", "Cleaning"] },
      { n: "Smart Lock & Home Security Installation", d: "Sell and install smart biometric door locks and CCTV security cameras for apartments and villas. Budget covers lock inventory, tools, and demo units.", cap: "₹60k", adv: "Urban security demand", cat: "service", tags: ["Local", "Hardware"] },
      { n: "Hyperlocal Pest Control Service", d: "Offer residential pest control and sanitization. Capital covers thermal foggers, sprayers, certified safety gear, and organic chemicals.", cap: "₹50k", adv: "High margins, repeat work", cat: "service", tags: ["Local", "PestControl"] },
      { n: "Mobile Appliance Repair Hub", d: "Set up a mobile repair service for ACs, washing machines, and refrigerators. Budget covers diagnostics equipment, spare parts, and tools.", cap: "₹80k", adv: "Essential local service", cat: "service", tags: ["Local", "Repairs"] },
      { n: "Custom Wall Art & Wall Decal Service", d: "Partner with local artists or use wall-printing machines to install custom wallpaper, decals, and murals for homes and offices.", cap: "₹70k", adv: "Home decor premium", cat: "service", tags: ["Local", "Decor"] },

      { n: "Professional Podcast Studio Rental", d: "Set up a mini soundproofed studio with professional mics and mixer for creators to record podcasts on an hourly basis.", cap: "₹100k", adv: "Hourly booking model", cat: "creative", tags: ["Creative", "Studio"] },
      { n: "High-End Laser Engraving Shop", d: "Create custom engraved wooden gifts, metal tumblers, and leather wallets. Budget covers a high-precision fiber laser engraving machine and blank products.", cap: "₹80k", adv: "Personalized gifts market", cat: "creative", tags: ["Creative", "Laser"] },
      { n: "Resin Art & Custom Countertop Workshop", d: "Design and sell high-end resin tables, clocks, and customized wall art. Budget covers premium epoxy resin, molds, safety gear, and wood inventory.", cap: "₹50k", adv: "High aesthetic appeal", cat: "creative", tags: ["Creative", "Art"] },
      { n: "Corporate Video Production Service", d: "Produce high-quality promo videos and employee onboarding clips for businesses. Budget covers professional lighting kits, stabilizer, and audio equipment.", cap: "₹90k", adv: "B2B high budget contracts", cat: "creative", tags: ["Creative", "Video"] },
      { n: "Custom Neon Sign Production", d: "Design and manufacture custom LED neon signs for businesses and home decor. Budget covers acrylic cutters, LED neon strips, power supplies, and shipping materials.", cap: "₹60k", adv: "Cafe & Bedroom decor trend", cat: "creative", tags: ["Creative", "Neon"] },
      { n: "Premium Event Backdrop & Balloon Decor", d: "Design premium arches, floral walls, and custom backdrops for weddings, baby showers, and birthdays. Budget covers high-quality stand sets and props.", cap: "₹50k", adv: "Frequent event bookings", cat: "creative", tags: ["Creative", "Events"] },

      { n: "Eco-Friendly Bamboo Toothbrush Brand", d: "Source bamboo toothbrushes and organic dental products in bulk. Package under your own brand and sell online. Budget covers MOQ, design, and eco-packaging.", cap: "₹50k", adv: "High repeat purchases", cat: "resell", tags: ["Commerce", "Eco"] },
      { n: "Imported Aesthetic Stationery Brand", d: "Source unique pastel and aesthetic stationery directly from overseas wholesalers. Sell via Instagram and Shopify. Budget covers custom boxes, import duties, and initial stock.", cap: "₹60k", adv: "Gen-Z journal culture", cat: "resell", tags: ["Commerce", "Stationery"] },
      { n: "Curated Vintage Leather Goods Brand", d: "Collaborate with local artisans to produce high-quality handcrafted leather bags, wallets, and belts. Budget covers leather stock, craftsmanship costs, and brand packaging.", cap: "₹75k", adv: "High ticket premium pricing", cat: "resell", tags: ["Commerce", "Leather"] },
      { n: "Sneaker Customization & Care Hub", d: "Sell custom hand-painted sneakers and high-end sneaker cleaning kits. Budget covers sneakers for customization, professional Angelus paints, and cleaning inventory.", cap: "₹50k", adv: "High-value sneaker market", cat: "resell", tags: ["Commerce", "Sneakers"] },
      { n: "Gourmet Loose-Leaf Tea Brand", d: "Source premium Darjeeling and Assam loose-leaf teas. Curate signature blends and pack them in glass jars and tin boxes. Budget covers teas, packaging, and food licensing.", cap: "₹60k", adv: "Wellness gifting peak", cat: "resell", tags: ["Commerce", "Tea"] },
      { n: "Smart Home Gadgets Reselling", d: "Wholesaler-to-consumer resell of smart bulbs, smart plugs, and automated pet feeders. Budget covers bulk Indiamart purchasing, storage, and Shopify ads.", cap: "₹80k", adv: "High consumer interest", cat: "resell", tags: ["Commerce", "Tech"] },

      { n: "Premium Home Gym Equipment Rental", d: "Buy premium treadmills, spin bikes, and adjustable dumbbells to rent out to home fitness enthusiasts. Budget covers high-durability fitness gear.", cap: "₹100k", adv: "Monthly recurring rentals", cat: "health", tags: ["Health", "Fitness"] },
      { n: "Organic Cold-Pressed Juice Delivery", d: "Prepare and deliver fresh cold-pressed wellness juices daily. Budget covers commercial slow-juicer, fresh produce supply contract, and glass bottles.", cap: "₹50k", adv: "Daily subscription model", cat: "health", tags: ["Health", "Juice"] },
      { n: "Air & Water Quality Wellness Store", d: "Sell and install high-efficiency air purifiers and alkaline water filters. Budget covers inventory, testing meters, and marketing materials.", cap: "₹70k", adv: "High pollution awareness", cat: "health", tags: ["Health", "Wellness"] },
      { n: "Ergonomic Office Setup Consultant", d: "Curate and sell premium ergonomic chairs, standing desk converters, and monitor arms. Budget covers display inventory, marketing, and posture-testing tools.", cap: "₹60k", adv: "WFH corporate audience", cat: "health", tags: ["Health", "Office"] },
      { n: "Dietary Meal prep & Subscription", d: "Provide healthy, macro-calculated calorie-deficit or protein-rich meals for professionals. Budget covers kitchen equipment, dieticians' consult, and delivery boxes.", cap: "₹80k", adv: "Health-conscious urbanites", cat: "health", tags: ["Health", "Food"] },
      { n: "Aromatherapy & Herbal Soap Brand", d: "Manufacture and sell organic, handmade aromatherapy soaps, body scrubs, and bath bombs. Budget covers soap bases, organic essential oils, molds, and licensing.", cap: "₹50k", adv: "Self-care premium market", cat: "health", tags: ["Health", "Skin"] },

      { n: "Upcycled Plastic Board Furniture", d: "Manufacture high-durability benches, desks, and shelves using recycled plastic boards. Budget covers raw sheets, woodworking equipment, and designer fees.", cap: "₹100k", adv: "Circular economy appeal", cat: "planet", tags: ["Eco", "Furniture"] },
      { n: "Solar Powered Home Charger Network", d: "Partner with apartments to install solar-powered EV charging kiosks. Budget covers solar panel kits, inverter, and smart metering units.", cap: "₹80k", adv: "Green energy incentives", cat: "planet", tags: ["Eco", "Solar"] },
      { n: "Compostable Food Container Brand", d: "Source bagasse and areca palm leaf plates and containers. Supply local cafes and cloud kitchens. Budget covers bulk container stock and sales collateral.", cap: "₹75k", adv: "Ban on single-use plastics", cat: "planet", tags: ["Eco", "Packaging"] },
      { n: "Zero-Waste Refill Station Hub", d: "Partner with local stores to set up bulk dispensers for shampoo, detergents, and body washes where users bring containers. Budget covers dispensers and initial bulk chemical stock.", cap: "₹60k", adv: "Eco-conscious recurring users", cat: "planet", tags: ["Eco", "Retail"] },
      { n: "Urban Terrace Garden Installer", d: "Set up automated drip irrigation, organic vegetable planters, and vertical garden setups on city balconies and terraces. Budget covers pipes, soil mix, and planter stock.", cap: "₹50k", adv: "High aesthetic home upgrade", cat: "planet", tags: ["Eco", "Gardening"] },
      { n: "Water-Saving Smart Aerator Supply", d: "Bulk-supply and install water-saving aerators that reduce water flow by 80% for restaurants, hotels, and schools. Budget covers aerator stock and sales commissions.", cap: "₹50k", adv: "Water crisis solutions", cat: "planet", tags: ["Eco", "Water"] },

      { n: "Vertical Hydroponic Fodder Unit", d: "Grow highly nutritious green fodder hydroponically for local dairy farmers. Budget covers multi-tier racks, LED grow lights, trays, and temperature control.", cap: "₹90k", adv: "All-season dairy feed demand", cat: "agri", tags: ["Agri", "Hydroponics"] },
      { n: "Organic Honey Apiary Setup", d: "Set up 20 beehive boxes in rural or orchard areas. Produce and bottle certified organic honey. Budget covers boxes, bee colonies, extractor machine, and testing.", cap: "₹75k", adv: "High demand for pure honey", cat: "agri", tags: ["Agri", "Honey"] },
      { n: "Automated Drip Irrigation Dealer", d: "Sell and install smart automated drip systems that save 50% water. Budget covers piping inventory, valves, controllers, and demo setups.", cap: "₹80k", adv: "Government subsidy support", cat: "agri", tags: ["Agri", "Irrigation"] },
      { n: "Cold Storage Rental for Seeds", d: "Set up a mini walk-in cold room for farmers to store seeds and perishables. Budget covers insulated panels, refrigeration unit, and racks.", cap: "₹100k", adv: "Essential crop-season demand", cat: "agri", tags: ["Agri", "ColdStorage"] },
      { n: "Exotic Ornamental Plant Propagation", d: "Propagate rare indoor plants and premium bonsai. Budget covers polyhouse structure, pots, high-quality soil medium, and rare parent stock.", cap: "₹50k", adv: "High-end nurseries & hotels", cat: "agri", tags: ["Agri", "Plants"] },
      { n: "Bio-Fertilizer Production Unit", d: "Produce organic vermicompost and liquid bio-fertilizers like Jeevamrutha. Budget covers composting pits, shredder machine, packaging bag sealer, and testing.", cap: "₹60k", adv: "Low cost organic farming trend", cat: "agri", tags: ["Agri", "Bio"] },

      { n: "Gourmet Waffle & Shake Cart", d: "Open a premium dessert cart serving fresh waffles and thick shakes. Budget covers waffle irons, commercial blender, refrigerator, and cart design.", cap: "₹75k", adv: "Popular late-night crowd", cat: "food", tags: ["Food", "Dessert"] },
      { n: "Cloud Kitchen Dessert Brand", d: "Launch a delivery-only bakery specializing in custom cakes, brownies, and cookies. Budget covers deck oven, stand mixer, packaging, and Zomato/Swiggy onboarding.", cap: "₹80k", adv: "Online delivery platform focus", cat: "food", tags: ["Food", "Baking"] },
      { n: "Cold Brew Coffee Bottling Hub", d: "Batch brew, bottle, and seal ready-to-drink flavored cold brew coffees. Budget covers commercial brewing tanks, glass bottles, custom labels, and cooling storage.", cap: "₹50k", adv: "Ready-to-drink café market", cat: "food", tags: ["Food", "Coffee"] },
      { n: "Artisanal Cheese & Butter Brand", d: "Produce hand-stretched mozzarella, flavored gourmet butter, and cottage cheese. Budget covers pasteurizer, aging unit, milk source contract, and licensing.", cap: "₹60k", adv: "High margin gourmet segment", cat: "food", tags: ["Food", "Cheese"] },
      { n: "Bubble Tea Kiosk Setup", d: "Open a small takeaway bubble tea stand. Budget covers sealing machine, shaker, cup printer, tapioca cooker, and ingredients import contract.", cap: "₹100k", adv: "Massive youth trend", cat: "food", tags: ["Food", "Beverage"] },
      { n: "Healthy Salad & Wrap Prep Hub", d: "Supply pre-packaged fresh salads, protein wraps, and fruit bowls to corporate hubs. Budget covers commercial vegetable cutters, cooling display, and packaging.", cap: "₹70k", adv: "Corporate lunch demand", cat: "food", tags: ["Food", "Healthy"] },

      { n: "Interactive Robotics & STEM Lab", d: "Conduct weekend hands-on robotics, coding, and STEM workshops for kids. Budget covers Arduino/Raspberry Pi kits, sensor modules, and laptop rentals.", cap: "₹100k", adv: "School curriculum tie-ups", cat: "education", tags: ["Education", "STEM"] },
      { n: "Virtual Reality (VR) History Show", d: "Host mobile VR historical tours and space explorations for school students. Budget covers 5 standalone VR headsets, software licenses, and marketing.", cap: "₹80k", adv: "Novel educational experiences", cat: "education", tags: ["Education", "VR"] },
      { n: "Aesthetic Study Center Kiosk", d: "Set up a quiet, air-conditioned study hall with high-speed internet and power outlets for competitive exam aspirants. Budget covers furniture, AC, and fiber setup.", cap: "₹75k", adv: "Ideal study environment", cat: "education", tags: ["Education", "Space"] },
      { n: "Professional Video Course Studio", d: "Set up a high-quality green screen/smartboard recording studio for teachers making online courses. Budget covers studio lighting, camera, and smartboard.", cap: "₹60k", adv: "Rent out to educators", cat: "education", tags: ["Education", "Studio"] },
      { n: "STEM Toys & Educational Kits Brand", d: "Package and sell hands-on science and electronics activity kits for kids. Budget covers sourcing wooden/plastic parts, box print, and instruction booklet.", cap: "₹50k", adv: "Activity based learning trend", cat: "education", tags: ["Education", "Toys"] },
      { n: "Preschool Play Equipment Hub", d: "Sell or lease premium soft-play structures, sensory toys, and Montessori equipment to local daycare centers. Budget covers equipment stock.", cap: "₹90k", adv: "Expanding preschool market", cat: "education", tags: ["Education", "Play"] },

      { n: "Silent Disco Event Rental Fleet", d: "Lease silent disco wireless headphones for campus parties, corporate retreats, and terrace events. Budget covers 50 high-quality multi-channel headphones and transmitters.", cap: "₹100k", adv: "Noise constraint event niche", cat: "wow", tags: ["Wildcard", "Events"] },
      { n: "Professional Board Game Cafe Setup", d: "Supply a library of 100+ premium international board games to local cafes for weekend gaming events. Budget covers game imports and marketing.", cap: "₹60k", adv: "Community social hangout", cat: "wow", tags: ["Wildcard", "Cafe"] },
      { n: "Action Camera & Vlog Kit Rental", d: "Rent out GoPros, Insta360 cameras, gimbals, and ring lights to travel vloggers. Budget covers cameras, mounts, and protective travel gear.", cap: "₹50k", adv: "Travel vlog season peaks", cat: "wow", tags: ["Wildcard", "Rental"] },
      { n: "Sneaker Cleaning & Restoration Lab", d: "Deep clean, repaint, and restore luxury sneakers and leather shoes. Budget covers premium shoe-dryers, sonic cleaners, paints, and specialized brushes.", cap: "₹60k", adv: "Premium shoe care demand", cat: "wow", tags: ["Wildcard", "Care"] },
      { n: "Retro Gaming Console Arcade", d: "Rent out arcade cabinets and retro gaming consoles for college fests, corporate fun days, and birthdays. Budget covers consoles, monitors, and cabinet custom builds.", cap: "₹75k", adv: "Nostalgia based college events", cat: "wow", tags: ["Wildcard", "Gaming"] },
      { n: "Pop-Up Photo Booth Experience", d: "Build a modular photo booth with iPad, ring light, digital printing, and funny props for weddings and fests. Budget covers printing equipment, iPad, software subscription, and backdrops.", cap: "₹80k", adv: "High event rental demand", cat: "wow", tags: ["Wildcard", "Photo"] },

    ];

function getEnrichedDetails(item) {
      var commitment = "5–10 hours/week";
      if (['service', 'resell', 'food', 'agri'].indexOf(item.cat) !== -1) {
        commitment = "10–15 hours/week";
      } else if (item.capNum >= 50000) {
        commitment = "15–20 hours/week";
      }

      var earnings = "₹5,000 - ₹15,000/mo";
      if (item.capNum >= 75000) {
        earnings = "₹30,000 - ₹75,000/mo";
      } else if (item.capNum >= 30000) {
        earnings = "₹15,000 - ₹40,000/mo";
      } else if (item.capNum >= 5000) {
        earnings = "₹10,000 - ₹25,000/mo";
      } else if (['digital', 'creative'].indexOf(item.cat) !== -1) {
        earnings = "₹8,000 - ₹20,000/mo";
      }

      var tools = "Smartphone, internet connection, basic communication";
      var tagsStr = (item.tags.join(" ") + " " + item.n).toLowerCase();
      var nameStr = item.n.toLowerCase();

      if (tagsStr.indexOf("video") !== -1 || tagsStr.indexOf("design") !== -1 || tagsStr.indexOf("photo") !== -1) {
        tools = "Smartphone/Laptop, CapCut/Canva, social media account";
      } else if (tagsStr.indexOf("tech") !== -1 || tagsStr.indexOf("ai") !== -1 || tagsStr.indexOf("no-code") !== -1) {
        tools = "Laptop, internet access, ChatGPT/Claude accounts, basic tech literacy";
      } else if (tagsStr.indexOf("merch") !== -1 || tagsStr.indexOf("print") !== -1 || tagsStr.indexOf("commerce") !== -1) {
        tools = "Smartphone/Laptop, Canva, UPI account, WhatsApp Business";
      } else if (tagsStr.indexOf("food") !== -1 || tagsStr.indexOf("bakery") !== -1) {
        tools = "Kitchen equipment, raw ingredients, FSSAI registration (simple online)";
      } else if (tagsStr.indexOf("cleaning") !== -1 || tagsStr.indexOf("repair") !== -1 || tagsStr.indexOf("auto") !== -1) {
        tools = "Basic cleaning supplies or toolkits, local marketing, transportation";
      } else if (tagsStr.indexOf("agri") !== -1 || tagsStr.indexOf("organic") !== -1) {
        tools = "Small garden space/pots, seeds, organic fertilizer, watering tools";
      } else if (tagsStr.indexOf("teaching") !== -1 || tagsStr.indexOf("education") !== -1) {
        tools = "Subject expertise, teaching materials, Zoom/WhatsApp, patience";
      }

      var firstStep = "Research local demand and list your service on WhatsApp status and local groups.";
      if (nameStr.indexOf("video editing") !== -1 || nameStr.indexOf("capcut") !== -1) {
        firstStep = "Create 3 sample edits of trending reels using CapCut, upload to a Google Drive link, and DM 10 local content creators.";
      } else if (tagsStr.indexOf("ai") !== -1 || tagsStr.indexOf("prompt") !== -1) {
        firstStep = "Complete a free 1-hour generative AI tutorial, create 3 custom prompt templates for small businesses, and showcase on LinkedIn.";
      } else if (nameStr.indexOf("seo") !== -1 || nameStr.indexOf("google business") !== -1) {
        firstStep = "Claim and optimize a local business profile on Google Maps for free, show the business owner the change, and request a testimonial.";
      } else if (tagsStr.indexOf("campus") !== -1 || nameStr.indexOf("hostel") !== -1) {
        firstStep = "Launch a WhatsApp group with your close hostel mates, announce the service, and print a simple flyer for the hostel notice board.";
      } else if (tagsStr.indexOf("resell") !== -1 || nameStr.indexOf("thrift") !== -1) {
        firstStep = "Select 5 unused high-quality clothing items or surplus gadgets, photograph them in bright natural light, and post on Instagram/OLX.";
      } else if (tagsStr.indexOf("food") !== -1 || tagsStr.indexOf("bakery") !== -1) {
        firstStep = "Bake a small test batch of cookies or prepare 3 test meals, distribute to neighbors for free feedback, and set up a WhatsApp business catalogue.";
      } else if (tagsStr.indexOf("cleaning") !== -1 || tagsStr.indexOf("service") !== -1) {
        firstStep = "Create a digital flyer of your service using Canva, post it in your apartment building's WhatsApp group, and offer a 20% discount on the first booking.";
      } else if (tagsStr.indexOf("teaching") !== -1 || tagsStr.indexOf("education") !== -1) {
        firstStep = "Identify your strongest academic subject, notify 5 parents in your neighborhood about weekend coaching, and conduct a free demo class.";
      } else if (tagsStr.indexOf("agri") !== -1 || tagsStr.indexOf("organic") !== -1) {
        firstStep = "Watch a 15-minute setup video on YouTube, purchase a basic starter kit, and set up your first experimental tray in a balcony or empty room.";
      } else if (tagsStr.indexOf("pet") !== -1 || tagsStr.indexOf("dog") !== -1) {
        firstStep = "Post in your neighborhood forum that you are available for dog-walking or pet-sitting on weekends, providing proof of trust/safety.";
      } else if (nameStr.indexOf("astrology") !== -1 || nameStr.indexOf("chart") !== -1) {
        firstStep = "Create a basic astro-report template using free online software, offer 5 free reports to friends on WhatsApp, and ask them to share their reviews.";
      }

      return { commitment: commitment, earnings: earnings, tools: tools, firstStep: firstStep };
    }

    function getStarRating(name) {
      if (!name) return "4.5";
      let sum = 0;
      for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
      }
      const rating = 4.2 + (sum % 8) * 0.1;
      return rating.toFixed(1);
    }
