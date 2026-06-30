window.HOL_PRODUCTS = {
  fabrics: {
    percale: {
      label: "Percale",
      spec: "TC300 · 100% Egyptian Cotton · Crisp, Matte, Solid Colours",
      imageSuffix: "percale",
      options: [
        { name: "White", value: "#FFFFFF", image: "assets/lifestyle/fitted-colors/fitted-sheet-set-white.jpg", sourceSlug: "white" },
        { name: "Off-White", value: "#F1E8D6", image: "assets/lifestyle/fitted-colors/fitted-sheet-set-off-white.jpg", sourceSlug: "off-white" },
        { name: "Beige", value: "#D7C2A7", image: "assets/lifestyle/fitted-colors/fitted-sheet-set-beige.jpg", sourceSlug: "beige" },
        { name: "Cream", value: "#F5E7C8", image: "assets/lifestyle/fitted-colors/fitted-sheet-set-cream.jpg", sourceSlug: "cream" },
        { name: "Peach", value: "#E8B299", image: "assets/lifestyle/fitted-colors/fitted-sheet-set-peach.jpg", sourceSlug: "peach" },
        { name: "Purple", value: "#74528B", image: "assets/lifestyle/fitted-colors/fitted-sheet-set-purple.jpg", sourceSlug: "purple" },
        { name: "Canary", value: "#F0D76B", image: "assets/lifestyle/fitted-colors/fitted-sheet-set-canary.jpg", sourceSlug: "canary" },
        { name: "Olive", value: "#C5D7A4", image: "assets/lifestyle/fitted-colors/fitted-sheet-set-pistachio.jpg", sourceSlug: "pistachio" },
        { name: "Pistachio", value: "#B9D8C6", image: "assets/lifestyle/fitted-colors/fitted-sheet-set-pastel.jpg", sourceSlug: "pastel" },
        { name: "Orange", value: "#D65F6F", image: "assets/lifestyle/fitted-colors/fitted-sheet-set-watermelon.jpg", sourceSlug: "watermelon" }
      ]
    }
  },
  towelColors: [
    { name: "White", swatch: "assets/towel-colors/white.jpg", sourceSlug: "white" },
    { name: "Offwhite", swatch: "assets/towel-colors/offwhite.jpg", sourceSlug: "offwhite" },
    { name: "Light Beige", swatch: "assets/towel-colors/light-beige.jpg", sourceSlug: "light-beige" },
    { name: "Beige", swatch: "assets/towel-colors/beige.jpg", sourceSlug: "beige" },
    { name: "Silver", swatch: "assets/towel-colors/silver.jpg", sourceSlug: "silver" },
    { name: "Grey", swatch: "assets/towel-colors/grey.jpg", sourceSlug: "grey" },
    { name: "Black", swatch: "assets/towel-colors/black.jpg", sourceSlug: "black" },
    { name: "Baby Blue", swatch: "assets/towel-colors/baby-blue.jpg", sourceSlug: "baby-blue" },
    { name: "Dark Blue", swatch: "assets/towel-colors/dark-blue.jpg", sourceSlug: "dark-blue" },
    { name: "Mint", swatch: "assets/towel-colors/mint.jpg", sourceSlug: "mint" },
    { name: "Rose", swatch: "assets/towel-colors/rose.jpg", sourceSlug: "rose" }
  ],
  scents: [
    { name: "Fresh Linen", mood: "Freshly washed Egyptian cotton.", notes: ["White Musk", "Soft Cotton", "Powder", "Light Amber"] },
    { name: "Soft Slumber", mood: "A relaxing evening scent.", notes: ["Lavender", "White Musk", "Vanilla", "Cashmere"] },
    { name: "Morning Light", mood: "Bright, clean and uplifting.", notes: ["Bergamot", "Neroli", "Green Tea", "White Woods"] },
    { name: "Quiet Evening", mood: "Warm, sophisticated and quietly luxurious.", notes: ["Sandalwood", "Cedarwood", "Amber", "Tonka Bean"] }
  ],
  products: [
    {
      id: "pillowcase-set",
      category: "Pillowcases",
      name: "Pillowcase Set",
      includes: "2 Pillowcases",
      description: "A Pair Of 50 × 70 Cm Pillowcases In Crisp Percale TC300 Egyptian Cotton, Made To Bring A Fresh, Coordinated Finish To The Bed. Smooth, Breathable And Elegant For Everyday Sleeping, With A Clean Tailored Look That Reflects Home Of Linen’s Quiet Luxury Style.",
      fabricBased: true,
      heroBase: "pillowcases",
      sizes: [{ label: "50 × 70 cm", percale: 420 }]
    },
    {
      id: "duvet-cover-set",
      category: "Duvet Covers",
      name: "Duvet Cover Set",
      includes: "Duvet Cover + 2 Pillowcases",
      description: "A Complete Percale TC300 Duvet Cover Set With Two Matching Pillowcases, Designed To Create A Soft, Breathable And Beautifully Layered Bed. The Look Is Calm And Hotel-Inspired, With The Natural Freshness Of Egyptian Cotton For Everyday Comfort.",
      fabricBased: true,
      heroBase: "duvet",
      sizes: [
        { label: "185 × 255 cm", percale: 1970 },
        { label: "245 × 255 cm", percale: 2675 }
      ]
    },
    {
      id: "fitted-sheet-set",
      category: "Fitted Sheets",
      name: "Fitted Sheet Set",
      includes: "Fitted Sheet + 2 Pillowcases",
      description: "A Smooth Percale TC300 Fitted Sheet Set With Two Matching Pillowcases, Tailored To Sit Securely Around The Mattress And Keep The Bed Looking Fresh. Crisp, Matte And Breathable, It Gives The Room A Clean Egyptian Cotton Finish Without Feeling Overstyled.",
      fabricBased: true,
      heroBase: "fitted",
      sizeLabel: "Mattress Size",
      sizes: [
        { label: "100 × 200 cm + 30 cm Mattress Depth", percale: 1300 },
        { label: "120 × 200 cm + 30 cm Mattress Depth", percale: 1400 },
        { label: "160 × 200 cm + 30 cm Mattress Depth", percale: 1580 },
        { label: "180 × 200 cm + 30 cm Mattress Depth", percale: 1750 },
        { label: "200 × 200 cm + 30 cm Mattress Depth", percale: 1900 }
      ]
    },
    {
      id: "flat-sheet-set",
      category: "Flat Sheets",
      name: "Flat Sheet Set",
      includes: "Flat Sheet + 2 Pillowcases",
      description: "A Refined Percale TC300 Flat Sheet Set With Two Matching Pillowcases, Perfect As A Light Top-Sheet Layer For A Neatly Folded Boutique-Hotel Bed. It Adds Breathability, Polish And An Elegant Finish Between The Sleeper And The Duvet.",
      fabricBased: true,
      heroBase: "flat",
      sizeLabel: "Sheet Size",
      sizes: [
        { label: "180 × 260 cm", percale: 1350 },
        { label: "260 × 260 cm", percale: 1850 }
      ]
    },
    {
      id: "face-towel",
      category: "Towels",
      name: "Face Towel",
      includes: "600 Gsm Egyptian Cotton Towel",
      description: "A Small Everyday Essential In Dense 600 Gsm Egyptian Cotton Terry, Soft Enough For The Face And Practical Enough For Daily Use. Plush, Absorbent And Calmly Finished For A Spa-Like Bathroom Detail.",
      image: "assets/towels/face-towel.jpg",
      colorBased: true,
      variants: [{ label: "33 × 33 cm", price: 50 }]
    },
    {
      id: "hand-towel",
      category: "Towels",
      name: "Hand Towel",
      includes: "600 Gsm Egyptian Cotton Towel",
      description: "A Generously Sized 600 Gsm Egyptian Cotton Hand Towel With A Plush Terry Feel And Excellent Absorbency. Designed For The Bathroom, Guest Washroom Or Vanity Area With The Soft, Understated Finish Of Home Of Linen.",
      image: "assets/towels/hand-towel.jpg",
      colorBased: true,
      variants: [{ label: "50 × 100 cm", price: 265 }]
    },
    {
      id: "bath-towel",
      category: "Towels",
      name: "Bath Towel",
      includes: "600 Gsm Egyptian Cotton Towel",
      description: "A Plush 600 Gsm Egyptian Cotton Bath Towel Made To Feel Soft, Substantial And Absorbent After Every Shower. It Brings A Clean Spa-Like Touch To Daily Bathing While Staying Elegant And Simple.",
      image: "assets/towels/bath-towel.jpg",
      colorBased: true,
      variants: [{ label: "70 × 140 cm", price: 555 }]
    },
    {
      id: "xl-bath-towel",
      category: "Towels",
      name: "Extra-Large Bath Towel",
      includes: "600 Gsm Egyptian Cotton Towel",
      description: "An Extra-Large 600 Gsm Egyptian Cotton Bath Towel For A More Enveloping, Hotel-Like Feel. Soft, Dense And Highly Absorbent, It Is Made For Customers Who Prefer A Larger Towel With A More Luxurious Drape.",
      image: "assets/towels/xl-bath-towel.jpg",
      colorBased: true,
      variants: [{ label: "90 × 160 cm", price: 680 }]
    },
    {
      id: "large-pool-towel",
      category: "Summer Essentials",
      name: "Large Pool Towel",
      includes: "Striped Pool Towel",
      description: "A generous striped pool towel made for sunny days by the pool, beach weekends and relaxed summer lounging. Soft, absorbent and bold enough to bring a fresh resort feel to the outdoor setup.",
      image: "assets/pool-towels/large-pool-towel-yellow.jpg",
      colorBased: true,
      colors: [
        { name: "Yellow", value: "#E8A900", image: "assets/pool-towels/large-pool-towel-yellow.jpg" },
        { name: "Blue", value: "#1F5F97", image: "assets/pool-towels/large-pool-towel-blue.jpg" }
      ],
      variants: [{ label: "100 × 190 cm", price: 650 }]
    },
    {
      id: "beach-towel",
      category: "Summer Essentials",
      name: "Beach Towel",
      includes: "Striped Summer Towel",
      description: "A bright summer towel for beach bags, pool days and relaxed outdoor escapes. The striped design keeps the look fresh and resort-inspired while staying practical, absorbent and easy to style.",
      image: "assets/pool-towels/large-pool-towel-blue.jpg",
      colorBased: true,
      colors: [
        { name: "Blue Stripe", value: "#1F5F97", image: "assets/pool-towels/large-pool-towel-blue.jpg" },
        { name: "Yellow Stripe", value: "#E8A900", image: "assets/pool-towels/large-pool-towel-yellow.jpg" }
      ],
      variants: [{ label: "100 × 190 cm", price: 650 }]
    },
    {
      id: "kitchen-towel",
      category: "Towels",
      name: "Kitchen Towels",
      includes: "Cotton Kitchen Towel",
      description: "A practical cotton kitchen towel with a clean checked pattern, made for everyday drying, styling and warm kitchen details. Soft, useful and easy to pair with a calm Home Of Linen kitchen look.",
      image: "assets/kitchen-towels/kitchen-towel-red.jpg",
      colorBased: true,
      colors: [
        { name: "Red", value: "#B84A4B", image: "assets/kitchen-towels/kitchen-towel-red.jpg" },
        { name: "Blue", value: "#2F6EA5", image: "assets/kitchen-towels/kitchen-towel-blue.jpg" },
        { name: "Grey", value: "#8A8A84", image: "assets/kitchen-towels/kitchen-towel-grey.jpg" }
      ],
      variants: [{ label: "40 × 60 cm", price: 100 }]
    },
    {
      id: "pillows",
      category: "Pillows",
      name: "Premium Bed Pillow",
      includes: "Blended Cotton Shell · Polydown Alternative",
      description: "White Bed Pillows With A Smooth Blended-Cotton Shell And Polydown Alternative Fill, Available In Three Comfort Levels. Choose Soft For A Gentle Sink-In Feel, Medium For Balanced Everyday Support, Or Firm For A Higher, More Structured Pillow.",
      image: "assets/products/pillows.jpg",
      variants: [
        { label: "Firm · 1200 g", price: 600, description: "Firm · 1200 G Is The Most Supportive Pillow Option, Made For Customers Who Prefer Extra Height, Structure And A Fuller Feel Through The Night. It Keeps The Bed Looking Plump While Offering A More Stable Resting Surface." },
        { label: "Medium · 1000 g", price: 480, description: "Medium · 1000 G Is The Balanced Everyday Choice, Combining Softness And Support In A Comfortable Middle Feel. It Is A Good Fit For Customers Who Want A Pillow That Feels Plush Without Being Too High Or Too Soft." },
        { label: "Soft · 850 g", price: 400, description: "Soft · 850 G Has The Gentlest Feel, Designed For Customers Who Prefer A Lower, More Relaxed Pillow With An Easy Sink-In Comfort. It Brings A Light And Airy Finish To The Bed." }
      ]
    },
    {
      id: "mattress-topper",
      category: "Mattress Toppers",
      name: "Mattress Topper",
      includes: "Blended Cotton Shell",
      description: "A Quilted White Mattress Topper Designed To Add A Clean, Cushioned Comfort Layer To The Bed. Choose The Loftier 9 Cm Polydown Alternative For A Softer Cloud-Like Feel, Or The 7 Cm Microfiber For A Slightly Lower, Practical Comfort Upgrade.",
      image: "assets/products/mattress-topper.jpg",
      matrix: {
        variantLabel: "Fill",
        sizeLabel: "Size",
        variants: [
          { label: "9 cm Polydown Alternative", description: "9 Cm Polydown Alternative Is The Plusher Topper Choice, Made To Add Noticeable Height, Softness And A More Cushioned Hotel-Bed Feeling. It Is Ideal When The Customer Wants A Softer Sleep Surface And A More Luxurious Layered Bed Look.", prices: { "100 × 200 cm": 1250, "120 × 200 cm": 1500, "160 × 200 cm": 2000, "180 × 200 cm": 2250, "200 × 200 cm": 2500 } },
          { label: "7 cm Microfiber", description: "7 Cm Microfiber Is A Slightly Lower And More Practical Comfort Layer, Designed To Refresh The Mattress With Softness Without Adding As Much Height. It Is A Clean Everyday Upgrade For A Smoother, More Inviting Bed.", prices: { "100 × 200 cm": 1100, "120 × 200 cm": 1320, "160 × 200 cm": 1750, "180 × 200 cm": 1980, "200 × 200 cm": 2200 } }
        ]
      }
    },
    {
      id: "comforter",
      category: "Comforters",
      name: "Comforter",
      includes: "Blended Cotton Shell",
      description: "A White Comforter With A Smooth Blended-Cotton Shell And An Airy, Premium Fill. Choose All-Season For Comfortable Year-Round Layering, Or Winter For A Warmer, Fuller Feel During Cooler Nights.",
      image: "assets/products/comforter.jpg",
      matrix: {
        variantLabel: "Type",
        sizeLabel: "Size",
        variants: [
          { label: "All-Season", description: "All-Season Is The Versatile Comforter Option, Designed For A Light Yet Cozy Layer That Works Across Most Of The Year. It Keeps The Bed Looking Soft And Full Without Feeling Too Heavy.", prices: { "180 × 240 cm": 1450, "240 × 250 cm": 1650 } },
          { label: "Winter", description: "Winter Is The Warmer Comforter Option, Made With A Fuller Feel For Cooler Nights And Customers Who Prefer Extra Coziness. It Creates A Plush, Inviting Bed With A More Substantial Layer.", prices: { "180 × 240 cm": 1650, "240 × 250 cm": 1850 } }
        ]
      }
    },
    {
      id: "linen-pillow-mist",
      category: "Home Fragrance",
      name: "Linen & Pillow Mist",
      includes: "150 ml Fine Mist Spray",
      description: "A light, elegant mist designed to refresh bed sheets, pillowcases, duvet covers and washable bedroom fabrics before sleeping. It creates a calm bedroom atmosphere with a fine, delicate application and a bottle designed to sit beautifully beside your linen.",
      image: "assets/fragrance/linen-pillow-mist.jpg",
      fragranceBased: true,
      noPrice: true,
      variants: []
    },
    {
      id: "reed-diffuser",
      category: "Home Fragrance",
      name: "Reed Diffuser",
      includes: "100 ml Diffuser Bottle + Fibre Reeds + Premium Carton",
      description: "A continuous home fragrance piece for bedrooms, bathrooms, entrances and living rooms. The diffuser scents the room effortlessly while adding a warm, minimal decorative object to modern interiors.",
      image: "assets/fragrance/home-fragrance-collection.jpg",
      fragranceBased: true,
      noPrice: true,
      variants: []
    },
    {
      id: "scented-candle",
      category: "Home Fragrance",
      name: "Scented Candle",
      includes: "Approx. 220–250 g Premium Candle",
      description: "A premium scented candle created for slow, calming rituals and a warm bedroom ambience. The clean glass vessel feels refined on a bedside table, vanity or tray, making the candle both a fragrance piece and a decorative object.",
      image: "assets/fragrance/scented-candle.jpg",
      fragranceBased: true,
      noPrice: true,
      variants: []
    },
    {
      id: "room-spray",
      category: "Home Fragrance",
      name: "Room Spray",
      includes: "150 ml Room Spray",
      description: "An immediate room refresh for bedrooms, living rooms, bathrooms and entrances. The elegant bottle delivers a clean fragrance moment throughout the home and is intended for the air and room atmosphere.",
      image: "assets/fragrance/home-fragrance-collection.jpg",
      fragranceBased: true,
      noPrice: true,
      variants: []
    },
    {
      id: "bedroom-ritual-set",
      category: "Home Fragrance",
      name: "Bedroom Ritual Set",
      includes: "1 Reed Diffuser + 1 Linen & Pillow Mist + 1 Candle",
      description: "A complete bedroom fragrance ritual designed to layer a soft atmosphere across the room and the bed. The set combines continuous scent, a gentle linen refresh and candlelight for a polished Home Of Linen bedroom experience.",
      image: "assets/fragrance/home-fragrance-bundle.jpg",
      fragranceBased: true,
      noPrice: true,
      variants: []
    },
    {
      id: "linen-refresh-set",
      category: "Home Fragrance",
      name: "Linen Refresh Set",
      includes: "Linen & Pillow Mist + Room Spray",
      description: "A simple everyday fragrance duo for refreshing the bedroom and creating a clean, welcoming home atmosphere. Light, practical and elegant, it pairs naturally with fresh bedding and towels.",
      image: "assets/fragrance/home-fragrance-bundle.jpg",
      fragranceBased: true,
      noPrice: true,
      variants: []
    }
  ]
};
