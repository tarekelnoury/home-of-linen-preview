const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE = "https://homeoflineneg.com";
global.window = {};
require(path.join(ROOT, "products.js"));
const { products, fabrics, towelColors } = global.window.HOL_PRODUCTS;

const esc = value => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");
const mkdirp = dir => fs.mkdirSync(dir, { recursive: true });
const write = (file, html) => {
  mkdirp(path.dirname(path.join(ROOT, file)));
  fs.writeFileSync(path.join(ROOT, file), html);
};
const slugify = text => String(text).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const categorySlugs = {
  "Fitted Sheets": "fitted-sheets",
  "Flat Sheets": "flat-sheets",
  Pillowcases: "pillowcases",
  "Duvet Covers": "duvet-covers",
  Towels: "towels",
  Comforters: "comforters",
  "Mattress Toppers": "mattress-toppers",
  Pillows: "pillows",
  "Summer Essentials": "summer-essentials",
  "Home Fragrance": "home-fragrance",
  Bedspreads: "bedspreads"
};

const infoNavGroups = [
  {
    label: "Customer Care",
    arLabel: "خدمة العملاء",
    items: [
      { label: "Contact", arLabel: "تواصل معنا", pathname: "/contact/" },
      { label: "Shipping Policy", arLabel: "سياسة الشحن", pathname: "/policies/shipping-policy/" },
      { label: "Refund Policy", arLabel: "سياسة الاسترجاع", pathname: "/policies/refund-policy/" },
      { label: "FAQs", arLabel: "الأسئلة الشائعة", pathname: "/faqs/" }
    ]
  },
  {
    label: "About",
    arLabel: "عن العلامة",
    items: [
      { label: "About Us", arLabel: "من نحن", pathname: "/about/" },
      { label: "Our Story", arLabel: "قصتنا", pathname: "/our-story/" }
    ]
  },
  {
    label: "Legal",
    arLabel: "القانونية",
    items: [
      { label: "Privacy Policy", arLabel: "سياسة الخصوصية", pathname: "/policies/privacy-policy/" },
      { label: "Terms & Conditions", arLabel: "الشروط والأحكام", pathname: "/policies/terms-and-conditions/" }
    ]
  }
];

const beddingCategories = ["Pillowcases", "Fitted Sheets", "Flat Sheets", "Duvet Covers", "Bedspreads", "Pillows", "Comforters", "Mattress Toppers"];

const categoryArabic = {
  "Fitted Sheets": "ملايات بأستك",
  "Flat Sheets": "ملايات سادة",
  Pillowcases: "أكياس مخدات",
  "Duvet Covers": "أغطية لحاف",
  Towels: "فوط",
  Comforters: "لحاف مبطن",
  "Mattress Toppers": "مراتب توبر",
  Pillows: "مخدات",
  "Summer Essentials": "أساسيات الصيف",
  "Home Fragrance": "معطرات المنزل",
  Bedspreads: "مفارش سرير"
};

const categoryHero = {
  "Fitted Sheets": "assets/images/editorial/fitted-sheets.png",
  "Flat Sheets": "assets/images/editorial/flat-sheets.png",
  Pillowcases: "assets/images/editorial/pillowcases.png",
  "Duvet Covers": "assets/images/editorial/duvet-covers.png",
  Towels: "assets/images/editorial/towels.png",
  Comforters: "assets/images/editorial/comforters.png",
  "Mattress Toppers": "assets/images/editorial/mattress-toppers.png",
  Pillows: "assets/images/editorial/pillows.png",
  "Summer Essentials": "assets/images/editorial/summer-essentials.png",
  "Home Fragrance": "assets/images/editorial/home-fragrance.png",
  Bedspreads: "assets/images/editorial/bedspreads.png",
  "About Us": "assets/images/editorial/about-us.png"
};

const categoryIntros = {
  "Fitted Sheets": {
    en: "A well-made egyptian cotton fitted sheet is the foundation of a calm, comfortable bed. At Home of Linen, our fitted sheet sets are designed in Egypt for everyday homes that want hotel-level freshness without losing warmth. Each fitted sheet is cut to sit smoothly around the mattress, with a practical 30 cm mattress depth for a secure fit. The percale cotton finish feels crisp, breathable and clean against the skin, making it ideal for warm Egyptian weather and year-round layering. Choose from soft neutrals and selected colours, then pair your fitted sheet with matching pillowcases, flat sheets or duvet covers to build a complete bedroom story. If you are preparing a new room, refreshing a master bedroom or building a complete bedding set, our fitted sheets make ordering simple: select your mattress size, colour and quantity, then send your order directly through WhatsApp for personal confirmation.",
    ar: "الملاية الأستك المصنوعة من قطن مصري هي أساس السرير المرتب والمريح. في Home of Linen نقدم ملايات سرير قطن مصري مصممة في مصر لتناسب الاستخدام اليومي وتمنح الغرفة إحساساً هادئاً ونظيفاً مثل الفنادق. كل ملاية بأستك مصممة لتثبت بسلاسة حول المرتبة، مع عمق 30 سم يناسب معظم المراتب ويجعل الشكل مشدوداً ومنظماً. خامة البركال القطنية تمنح ملمساً بارداً ونظيفاً ومناسباً لأجواء مصر طوال العام. يمكنك اختيار المقاس واللون، ثم تنسيق الملاية مع أكياس مخدات، ملاية سادة أو غطاء لحاف بنفس اللون لبناء طقم متكامل. سواء كنت تجدد غرفة النوم أو تجهز بيت جديد أو تبني طقم مفروشات كامل، يمكنك اختيار المقاس واللون والكمية ثم إرسال الطلب على واتساب للتأكيد الشخصي."
  },
  "Flat Sheets": {
    en: "Egyptian cotton flat sheets bring a light, elegant layer to the bed. They can be folded neatly over the duvet, used as a breathable top sheet or paired with fitted sheets for a complete hotel-inspired set. Home of Linen flat sheet sets are made for customers who enjoy a polished bed with a soft, calm finish. The percale weave gives the cotton a crisp matte touch that feels fresh without shine, especially in warm weather. Available in considered colours, each flat sheet set can match your fitted sheet, pillowcases and duvet cover for a coordinated bedroom. Flat sheets are also useful for guest rooms, summer sleeping and complete new-home bedding bundles because they add flexibility without visual clutter. Choose the sheet size that suits your bed, select the colour, and complete the order through WhatsApp with clear EGP pricing and personal confirmation.",
    ar: "الملايات السادة القطن المصري تضيف طبقة خفيفة وأنيقة للسرير. يمكن استخدامها كملاية علوية قابلة للطي فوق اللحاف، أو كطبقة ناعمة ومريحة في الصيف، أو مع الملاية الأستك للحصول على طقم مستوحى من الفنادق. ملايات Home of Linen السادة مصممة لمن يحب شكل السرير المرتب والهادئ بدون تفاصيل كثيرة. نسيج البركال يمنح القطن ملمساً نظيفاً ومطفياً ومناسباً للأجواء الدافئة. تتوفر الملايات بألوان مختارة يمكن تنسيقها مع ملايات الأستك وأكياس المخدات وأغطية اللحاف لنفس الغرفة. كما أنها اختيار عملي لغرف الضيوف وتجهيز البيت الجديد لأنها تضيف مرونة وأناقة في نفس الوقت. اختر مقاس الملاية واللون والكمية، ثم أرسل الطلب على واتساب بأسعار واضحة بالجنيه المصري."
  },
  Pillowcases: {
    en: "Pillowcases are the finishing detail that make bedding feel complete. Home of Linen Egyptian cotton pillowcase sets are designed with a clean tailored finish, soft breathability and a calm colour palette that works with modern bedrooms. The 50 × 70 cm pillowcase size is easy to pair with everyday pillows and coordinates naturally with fitted sheets, flat sheets and duvet covers. Made in crisp percale cotton, each pillowcase has a fresh matte feel that stays elegant rather than shiny. Customers often use pillowcases to refresh a bed quickly, add a second colour to a neutral set or complete a coordinated bedding bundle. Choose white, off-white, beige and other soft colours depending on your room, then add matching sheets or duvet covers for a complete look. Ordering is simple: select the colour, quantity and send the basket through WhatsApp for confirmation.",
    ar: "أكياس المخدات هي اللمسة التي تجعل طقم السرير مكتملاً. أكياس مخدات Home of Linen من قطن مصري مصممة بتشطيب نظيف وملمس ناعم وألوان هادئة تناسب غرف النوم العصرية. مقاس 50 × 70 سم عملي وسهل التنسيق مع المخدات اليومية، كما يمكن مطابقته مع الملايات الأستك أو الملايات السادة أو أغطية اللحاف. خامة البركال القطنية تمنح إحساساً بارداً ومطفياً وأنيقاً بدون لمعان زائد. يستخدم العملاء أكياس المخدات لتجديد شكل السرير بسرعة، أو لإضافة لون هادئ لطقم محايد، أو لاستكمال طقم مفروشات متناسق. اختر اللون المناسب مثل الأبيض أو الأوف وايت أو البيج، ثم أضف القطع المطابقة إذا أردت طقماً كاملاً. بعد اختيار اللون والكمية يمكنك إرسال الطلب مباشرة على واتساب للتأكيد."
  },
  "Duvet Covers": {
    en: "An Egyptian cotton duvet cover changes the whole feeling of a bedroom. It is the largest visible bedding layer, so the fabric, colour and drape matter. Home of Linen duvet cover sets are made with crisp percale cotton for a calm, breathable and refined finish. Each set can include matching pillowcases, or you can choose a single item when you want only the duvet cover. The colours are selected to sit quietly inside warm, modern bedrooms and pair easily with our fitted sheets, flat sheets and pillowcase sets. Duvet covers are ideal for customers who want the bed to look complete without heavy styling. They are also important when building a complete bedroom set because they create a strong base for multiple looks. Choose your duvet size, colour and set option, then send your basket through WhatsApp for a personal order confirmation.",
    ar: "غطاء اللحاف القطن المصري يغير إحساس غرفة النوم بالكامل، لأنه أكبر طبقة ظاهرة على السرير. لذلك يهم أن يكون القماش هادئاً وناعماً ولونه سهل التنسيق. أغطية لحاف Home of Linen مصنوعة من قطن بركال مصري يمنح ملمساً نظيفاً ومريحاً ومناسباً للاستخدام اليومي. يمكنك اختيار الطقم مع أكياس مخدات مطابقة أو اختيار الغطاء فقط حسب احتياجك. الألوان مختارة لتناسب الغرف الدافئة والعصرية، ويمكن تنسيقها بسهولة مع الملايات الأستك والملايات السادة وأكياس المخدات. أغطية اللحاف مناسبة لمن يريد شكلاً كاملاً للسرير بدون مبالغة، كما أنها قطعة أساسية عند بناء طقم غرفة نوم كامل لأنها تبني شكل الغرفة. اختر المقاس واللون ونوع الطقم ثم أرسل الطلب على واتساب للتأكيد."
  },
  Towels: {
    en: "Soft Egyptian cotton towels turn daily routines into a calmer experience. Home of Linen towels are selected for customers who want absorbency, comfort and a spa-like bathroom feel without loud styling. The collection includes face towels, hand towels, bath towels, extra-large bath towels, kitchen towels and pool towels, with sizes clearly shown so you can choose the right piece for every use. The 600 gsm cotton towels feel plush and substantial, while the colours range from clean white and off-white to soft neutrals and selected accents. Towels can be ordered individually or coordinated as a bathroom set for a new home or guest bathroom. Choose your towel type, size and colour, then send the basket through WhatsApp for quick confirmation in EGP.",
    ar: "الفوط القطن المصري الناعمة تجعل الاستخدام اليومي أكثر راحة وهدوءاً. مجموعة فوط Home of Linen مختارة لمن يريد امتصاصاً جيداً وملمساً مريحاً وإحساساً يشبه السبا بدون ألوان صاخبة. تشمل المجموعة فوطة وجه، فوطة يد، فوطة حمام، فوطة حمام كبيرة، فوط مطبخ وفوط حمام سباحة، مع توضيح المقاسات حتى تختار القطعة المناسبة لكل استخدام. فوط 600 جرام من القطن تمنح إحساساً ممتلئاً وناعماً، وتتوفر بألوان مثل الأبيض والأوف وايت والبيج وبعض الألوان الهادئة. يمكن طلب الفوط منفردة أو تنسيقها كمجموعة للحمام أو بيت جديد أو حمام الضيوف. اختر النوع والمقاس واللون ثم أرسل السلة عبر واتساب للتأكيد بالجنيه المصري."
  },
  "Summer Essentials": {
    en: "Summer essentials from Home of Linen are designed for bright days by the pool, beach weekends and relaxed family holidays. The collection focuses on large pool towels and beach towels with clear sizes, bold stripes and a clean premium presentation that still feels connected to the calm Home of Linen world. Each piece is easy to choose by colour, size and quantity, with EGP pricing shown clearly before ordering through WhatsApp. These towels are made for practical summer use while keeping the visual mood refined: fresh white stripes, sunlit colour and generous proportions for lounging. Pair them with everyday bath towels or keep them as a separate summer set for travel, pool houses and beach bags. Choose the design you like, review the basket and send the order for personal confirmation.",
    ar: "أساسيات الصيف من Home of Linen مصممة للأيام المشرقة بجانب حمام السباحة وعطلات البحر والسفر العائلي. تركز المجموعة على فوط حمام سباحة كبيرة وفوط بحر بمقاسات واضحة وخطوط ملونة وشكل نظيف يظل مناسباً لهدوء هوية Home of Linen. كل قطعة سهلة الاختيار حسب اللون والمقاس والكمية، مع أسعار واضحة بالجنيه المصري قبل إرسال الطلب على واتساب. هذه الفوط عملية للصيف وفي نفس الوقت تحافظ على مظهر أنيق: خطوط بيضاء منعشة، ألوان صيفية ومقاس كبير مناسب للاسترخاء. يمكن تنسيقها مع فوط الحمام اليومية أو استخدامها كمجموعة صيفية منفصلة للسفر والبحر. اختر التصميم وراجع السلة ثم أرسل الطلب للتأكيد الشخصي."
  },
  Pillows: {
    en: "The right pillow affects both comfort and the way the bed looks. Home of Linen bed pillows are designed with a smooth blended-cotton shell and polydown alternative fill, giving the bed a clean, full and inviting shape. Choose soft, medium or firm depending on the sleeping feel you prefer. Soft pillows create a lower relaxed feel, medium pillows offer balanced everyday support, and firm pillows give more height and structure. The white finish makes them easy to pair with Egyptian cotton pillowcases and complete bedding sets. Pillows are often bought with pillowcases, fitted sheets, mattress toppers and comforters to build a full bedroom refresh. Select your comfort level and quantity, then use the WhatsApp checkout for clear pricing and personal confirmation.",
    ar: "اختيار المخدة المناسبة يؤثر على الراحة وعلى شكل السرير أيضاً. مخدات Home of Linen مصممة بغطاء ناعم من قطن مخلوط وحشو بديل للريش يمنح السرير شكلاً ممتلئاً ونظيفاً. يمكنك الاختيار بين سوفت، ميديوم أو فيرم حسب إحساس النوم الذي تفضله. المخدة السوفت تعطي إحساساً منخفضاً ومرتاحاً، الميديوم توازن بين النعومة والدعم اليومي، والفيرم تمنح ارتفاعاً وثباتاً أكثر. اللون الأبيض يجعلها سهلة التنسيق مع أكياس مخدات قطن مصري وباقي أطقم السرير. غالباً يتم شراء المخدات مع أكياس المخدات أو الملايات أو التوبر أو اللحاف المبطن لتجديد غرفة النوم بالكامل. اختر نوع الدعم والكمية ثم أرسل الطلب على واتساب للتأكيد."
  },
  Comforters: {
    en: "A white comforter adds softness, warmth and a finished look to the bed. Home of Linen comforters are designed with a smooth blended-cotton shell and airy premium fill, making them suitable for customers who want a clean hotel-inspired layer. Choose All-Season for light year-round comfort or Winter for a warmer, fuller feel during cooler nights. The simple white appearance works beautifully with Egyptian cotton duvet covers, fitted sheets, flat sheets and pillowcases in matching or neutral colours. Comforters are also a smart part of a complete bedroom refresh because they finish the bed without relying on heavy decoration. Select your type and size, add matching bedding if needed, and confirm the order through WhatsApp with EGP pricing.",
    ar: "اللحاف المبطن الأبيض يضيف نعومة ودفئاً وشكلاً مكتملاً للسرير. لحاف Home of Linen مصمم بغطاء ناعم من قطن مخلوط وحشو خفيف وفاخر ليناسب من يريد طبقة نظيفة مستوحاة من الفنادق. اختر All-Season لراحة خفيفة طوال العام أو Winter لإحساس أكثر دفئاً وامتلاءً في الليالي الباردة. اللون الأبيض البسيط يتناسق بسهولة مع أغطية اللحاف والملايات الأستك والملايات السادة وأكياس المخدات من القطن المصري. اللحاف المبطن أيضاً قطعة مهمة لتجديد غرفة النوم بالكامل لأنه يكمل السرير بدون ديكور زائد. اختر النوع والمقاس، وأضف القطع المطابقة إذا أردت، ثم أكد الطلب عبر واتساب بأسعار واضحة."
  },
  "Mattress Toppers": {
    en: "A mattress topper is an easy way to refresh the comfort of your bed without replacing the mattress. Home of Linen mattress toppers are designed to add a clean cushioned layer that makes the bed feel softer, fuller and more inviting. Choose the 9 cm polydown alternative topper for a plush hotel-like feel, or the 7 cm microfiber topper for a slightly lower everyday comfort layer. The white quilted finish keeps the bedroom calm and pairs naturally with Egyptian cotton fitted sheets, pillows and comforters. Mattress toppers are especially useful for guest rooms, new homes and customers who want a softer sleep surface. Select your fill type and mattress size, then complete the order through WhatsApp for personal confirmation.",
    ar: "مرتبة التوبر طريقة سهلة لتجديد راحة السرير بدون تغيير المرتبة نفسها. توبر Home of Linen مصمم ليضيف طبقة مبطنة نظيفة تجعل السرير أكثر نعومة وامتلاءً وجاذبية. اختر توبر 9 سم بحشو بديل للريش لإحساس فاخر يشبه الفنادق، أو توبر 7 سم مايكروفايبر لطبقة عملية وأقل ارتفاعاً للاستخدام اليومي. التشطيب الأبيض المبطن يحافظ على هدوء الغرفة ويتناسق بسهولة مع ملايات أستك قطن مصري ومخدات ولحاف مبطن. التوبر مناسب لغرف الضيوف والبيوت الجديدة وكل من يريد سطح نوم أكثر راحة. اختر نوع الحشو ومقاس المرتبة ثم أرسل الطلب عبر واتساب للتأكيد الشخصي."
  },
  "Home Fragrance": {
    en: "Home Fragrance is a coming soon extension of the Home of Linen world. Beautiful bedding deserves a beautiful scent, so this collection is being prepared to sit naturally beside Egyptian cotton sheets, pillowcases, duvet covers and calm bedroom essentials. The direction is warm, minimal and hotel-inspired, with linen and pillow mist, reed diffusers, room sprays and scented candles planned for future release. For now, the collection page is kept visible for preview and SEO structure while products remain unavailable to order. This allows customers to understand the upcoming mood without showing fake prices or stock. The final collection will focus on gentle everyday scents, elegant packaging and fragrance rituals that make bedrooms, bathrooms and living spaces feel more complete.",
    ar: "معطرات المنزل هي امتداد قادم لعالم Home of Linen. المفروشات الجميلة تستحق رائحة جميلة، لذلك يتم تجهيز هذه المجموعة لتتناسب بشكل طبيعي مع الملايات القطن المصري وأكياس المخدات وأغطية اللحاف ومستلزمات غرفة النوم الهادئة. الاتجاه العام دافئ وبسيط ومستوحى من الفنادق، مع معطر مفروشات ومخدات ودفيوزر أعواد ومعطر غرفة وشموع معطرة مخطط لها لاحقاً. حالياً تظهر الصفحة للمعاينة وبناء الموقع بشكل منظم بدون أسعار وهمية أو مخزون غير حقيقي. المجموعة النهائية ستركز على روائح يومية ناعمة، تغليف أنيق وطقوس عطرية تجعل غرف النوم والحمامات والمساحات المعيشية أكثر اكتمالاً."
  },
  Bedspreads: {
    en: "Home of Linen bedspreads are designed as the final editorial layer for a calm, finished bedroom. The honeycomb woven texture adds quiet depth without making the bed feel heavy or busy, creating the kind of relaxed luxury associated with boutique hotels and warm modern interiors. Available in Off White, Beige and Olive, each colour is selected to sit naturally beside Egyptian cotton sheets, pillows, duvet covers and comforters. The generous 180 × 240 cm and 230 × 240 cm sizes make the bedspread easy to style across different bed setups, whether folded at the foot of the bed or spread fully for a soft, textured finish. Use it to add warmth, texture and a more complete look to the room while keeping the Home of Linen mood minimal, neutral and timeless.",
    ar: "مفارش السرير من Home of Linen مصممة كطبقة أخيرة أنيقة تمنح غرفة النوم شكلاً هادئاً ومكتملاً. نسيج الهوني كومب يضيف ملمساً واضحاً وعمقاً ناعماً بدون أن يجعل السرير مزدحماً أو ثقيلاً، ليعطي إحساساً قريباً من الفنادق البوتيك والغرف العصرية الدافئة. تتوفر الألوان أوف وايت، بيج وأوليف لتتناسب بسهولة مع ملايات القطن المصري والمخدات وأغطية اللحاف واللحاف المبطن. مقاسات 180 × 240 سم و230 × 240 سم تجعل المفرش عملياً لتنسيقات مختلفة، سواء مطوياً عند نهاية السرير أو مفروشاً بالكامل كطبقة ناعمة ذات ملمس. استخدمه لإضافة دفء وملمس وشكل أكثر اكتمالاً مع الحفاظ على هوية Home of Linen الهادئة والبسيطة."
  }
};

const productArabicNames = {
  "Pillowcase Set": "طقم أكياس مخدات",
  "Duvet Cover Set": "طقم غطاء لحاف",
  "Fitted Sheet Set": "طقم ملاية بأستك",
  "Flat Sheet Set": "طقم ملاية سادة",
  "Face Towel": "فوطة وجه",
  "Hand Towel": "فوطة يد",
  "Bath Towel": "فوطة حمام",
  "Extra-Large Bath Towel": "فوطة حمام كبيرة",
  "Large Pool Towel": "فوطة حمام سباحة كبيرة",
  "Kitchen Towels": "فوط مطبخ",
  "Premium Bed Pillow": "مخدة سرير فاخرة",
  "Mattress Topper": "مرتبة توبر",
  Comforter: "لحاف مبطن",
  "Honeycomb Bedspread": "مفرش سرير هوني كومب",
  "Linen & Pillow Mist": "معطر مفروشات ومخدات",
  "Reed Diffuser": "دفيوزر أعواد",
  "Scented Candle": "شمعة معطرة",
  "Room Spray": "معطر غرفة",
  "Bedroom Ritual Set": "مجموعة تعطير غرفة النوم",
  "Linen Refresh Set": "مجموعة إنعاش المفروشات"
};

function productName(product, locale) {
  return locale === "ar" ? (productArabicNames[product.name] || product.name) : product.name;
}

function productDescription(product, locale) {
  if (locale !== "ar") return product.description || "";
  const descriptions = {
    "Fitted Sheets": "ملاية بأستك من قطن مصري بملمس بركال نظيف، مصممة لتثبت بسلاسة على المرتبة وتكمل شكل السرير الهادئ.",
    "Flat Sheets": "ملاية سادة من قطن مصري خفيف ومريح، مناسبة كطبقة علوية أنيقة أو لاستكمال طقم السرير.",
    Pillowcases: "أكياس مخدات من قطن مصري بتشطيب بسيط وملمس منعش، سهلة التنسيق مع باقي مفروشات السرير.",
    "Duvet Covers": "غطاء لحاف من قطن مصري مصمم ليمنح السرير طبقة هادئة وناعمة بتفاصيل نظيفة.",
    Towels: "فوط قطنية ناعمة وعملية للاستخدام اليومي، بألوان هادئة ومقاسات واضحة.",
    "Summer Essentials": "فوط صيفية كبيرة ومريحة بألوان مخططة مناسبة للبحر وحمام السباحة.",
    Pillows: "مخدة سرير بيضاء بحشو مريح، متوفرة بدرجات دعم مختلفة حسب إحساس النوم الذي تفضله.",
    Comforters: "لحاف مبطن أبيض بطبقة ناعمة ودافئة، مناسب لتنسيق سرير هادئ ومكتمل.",
    "Mattress Toppers": "توبر أبيض مبطن يضيف طبقة راحة إضافية للمرتبة ويجعل السرير أكثر نعومة.",
    "Home Fragrance": "معطرات منزلية قادمة قريباً لتكمل إحساس المفروشات الهادئة برائحة أنيقة.",
    Bedspreads: "مفرش سرير بنسيج هوني كومب هادئ يضيف ملمساً دافئاً وطبقة نهائية أنيقة للغرفة."
  };
  return descriptions[product.category] || product.description || "";
}

function categoryName(category, locale) {
  return locale === "ar" ? (categoryArabic[category] || category) : category;
}

function productSlug(product) {
  return product.id;
}

function enUrl(pathname) {
  return `${SITE}${pathname}`;
}

function arUrl(pathname) {
  return `${SITE}/ar${pathname === "/" ? "/" : pathname}`;
}

function pagePath(locale, pathname) {
  if (locale === "ar") return pathname === "/" ? "ar/index.html" : `ar${pathname}index.html`;
  return pathname === "/" ? "index.html" : `${pathname.slice(1)}index.html`;
}

function hrefTo(fromLocale, fromPathname, toLocale, toPathname) {
  const fromDir = path.posix.dirname(pagePath(fromLocale, fromPathname));
  const toFile = pagePath(toLocale, toPathname);
  const relative = path.posix.relative(fromDir, toFile);
  return relative || "./index.html";
}

function assetPrefix(locale, pathname) {
  const fromDir = path.posix.dirname(pagePath(locale, pathname));
  const relative = path.posix.relative(fromDir, ".");
  return relative ? `${relative}/` : "./";
}

function assetRef(locale, pathname, assetPath) {
  return `${assetPrefix(locale, pathname)}${assetPath}`;
}

function nav(locale, pathname) {
  const categoryItems = Object.entries(categorySlugs).map(([label, slug]) =>
    `<a href="${hrefTo(locale, pathname, locale, `/categories/${slug}/`)}">${esc(categoryName(label, locale))}</a>`
  ).join("");
  const infoGroups = infoNavGroups.map(group =>
    `<div class="nav-dropdown">
      <button class="nav-dropdown-button" type="button" aria-haspopup="true" aria-expanded="false">${esc(locale === "ar" ? group.arLabel : group.label)}</button>
      <div class="nav-dropdown-menu">
        ${group.items.map(item => `<a href="${hrefTo(locale, pathname, locale, item.pathname)}">${esc(locale === "ar" ? item.arLabel : item.label)}</a>`).join("")}
      </div>
    </div>`
  ).join("");
  return `${categoryItems}${infoGroups}`;
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Home of Linen",
    url: SITE,
    logo: `${SITE}/assets/brand/home-of-linen-logo.png`,
    contactPoint: [{ "@type": "ContactPoint", telephone: "+201004333340", contactType: "customer service", areaServed: "EG" }]
  };
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

function jsonLd(schema) {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

function layout({ locale = "en", type = "content", title, description, pathname, h1, body, catalogHtml = "", config = {}, schema = [], ogImage = "/assets/images/og-default.jpg" }) {
  const dir = locale === "ar" ? "rtl" : "ltr";
  const enHref = enUrl(pathname);
  const arHref = arUrl(pathname);
  const canonical = locale === "ar" ? arHref : enHref;
  const pageConfig = { locale, type, assetBase: assetPrefix(locale, pathname), ...config };
  return `<!doctype html>
<html lang="${locale}" dir="${dir}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#fbf7ef" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="en" href="${enHref}" />
    <link rel="alternate" hreflang="ar" href="${arHref}" />
    <link rel="alternate" hreflang="x-default" href="${enHref}" />
    <link rel="icon" href="${assetRef(locale, pathname, "assets/brand/home-of-linen-logo.png")}" />
    <meta property="og:site_name" content="Home of Linen" />
    <meta property="og:type" content="${type === "guide" ? "article" : "website"}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:image" content="${SITE}${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${SITE}${ogImage}" />
    <link rel="stylesheet" href="${assetRef(locale, pathname, "styles.css")}" />
    ${[organizationSchema(), ...schema].map(jsonLd).join("\n    ")}
    <script>window.HOL_PAGE = ${JSON.stringify(pageConfig)};</script>
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="${hrefTo(locale, pathname, locale, "/")}" aria-label="Home of Linen home">
        <img src="${assetRef(locale, pathname, "assets/brand/home-of-linen-logo.png")}" alt="Home of Linen logo" />
      </a>
      <button class="menu-button" id="menuToggle" type="button" aria-label="${locale === "ar" ? "فتح القائمة" : "Open menu"}" aria-expanded="false" aria-controls="siteNav"><span></span><span></span><span></span></button>
      <nav class="nav" id="siteNav" aria-label="${locale === "ar" ? "أقسام المنتجات" : "Product categories"}"><div class="nav-panel">${nav(locale, pathname)}</div></nav>
      <button class="basket-button" id="openBasket" aria-label="${locale === "ar" ? "افتح السلة" : "Open basket"}">${locale === "ar" ? "السلة" : "Basket"} <span id="basketCount" class="hidden">0</span></button>
    </header>
    <main id="top">
      ${body}
      <section class="order-review hidden" id="order-review" aria-labelledby="orderReviewTitle">
        <div class="order-review-head">
          <p class="eyebrow">${locale === "ar" ? "هوم أوف لينن" : "Home Of Linen"}</p>
          <h2 id="orderReviewTitle">${locale === "ar" ? "مراجعة الطلب" : "Review Your Order"}</h2>
          <p>${locale === "ar" ? "راجع السلة ثم أضف بيانات التوصيل. بعد التأكيد سيظهر رقم الطلب ويفتح واتساب برسالة جاهزة للإرسال." : "Please check your basket, then add your delivery details. After confirmation, you will receive an order number and WhatsApp will open with your order ready to send."}</p>
        </div>
        <div class="order-review-layout">
          <div class="order-summary-card">
            <div class="order-summary-title"><h3>${locale === "ar" ? "سلتك" : "Your Basket"}</h3><button type="button" class="text-button" id="editBasket">${locale === "ar" ? "تعديل السلة" : "Edit Basket"}</button></div>
            <div id="reviewItems" class="review-items"></div>
            <div class="review-total total-breakdown" id="reviewSubtotal"></div>
          </div>
          <div class="order-details-card">
            <h3>${locale === "ar" ? "بيانات التوصيل" : "Delivery Details"}</h3>
            <div class="customer-fields" id="customerFields" aria-label="${locale === "ar" ? "بيانات العميل" : "Customer details"}">
              <label>${locale === "ar" ? "الاسم بالكامل" : "Full Name"}<input id="customerName" type="text" autocomplete="name" placeholder="${locale === "ar" ? "الاسم الأول واسم العائلة" : "First and last name"}" /></label>
              <label>${locale === "ar" ? "رقم الموبايل" : "Mobile Number"}<input id="customerPhone" type="tel" autocomplete="tel" placeholder="${locale === "ar" ? "رقم الموبايل" : "Mobile number"}" /></label>
              <label>${locale === "ar" ? "البريد الإلكتروني" : "Email Address"}<input id="customerEmail" type="email" autocomplete="email" placeholder="${locale === "ar" ? "البريد الإلكتروني" : "Email address"}" /></label>
              <label>${locale === "ar" ? "عنوان التوصيل" : "Delivery Address"}<textarea id="customerAddress" rows="4" autocomplete="street-address" placeholder="${locale === "ar" ? "العمارة، الشارع، المنطقة، المدينة" : "Building, street, area, city"}"></textarea></label>
            </div>
            <button id="confirmOrder" class="checkout" type="button">${locale === "ar" ? "تأكيد الطلب والمتابعة إلى واتساب" : "Confirm Order & Continue To WhatsApp"}</button>
            <div class="order-confirmation hidden" id="orderConfirmation" role="status" aria-live="polite"></div>
          </div>
        </div>
      </section>
      <div id="catalog">${catalogHtml}</div>
    </main>
    <aside class="drawer" id="basketDrawer" aria-hidden="true">
      <div class="drawer-panel" role="dialog" aria-modal="true" aria-labelledby="basketTitle">
        <div class="drawer-header"><div><p class="eyebrow">${locale === "ar" ? "اختياراتك" : "Your Selection"}</p><h2 id="basketTitle">${locale === "ar" ? "السلة" : "Basket"}</h2></div><button id="closeBasket" class="icon-button" aria-label="${locale === "ar" ? "إغلاق السلة" : "Close basket"}">×</button></div>
        <div id="basketItems" class="basket-items"></div>
        <div class="drawer-footer"><div class="subtotal total-breakdown" id="subtotal"></div><button id="checkout" class="checkout">${locale === "ar" ? "مراجعة الطلب" : "Review Order"}</button><p class="checkout-note">${locale === "ar" ? "راجع السلة قبل إدخال بيانات التوصيل وتأكيد الطلب على واتساب." : "Review your basket before adding delivery details and confirming on WhatsApp."}</p></div>
      </div>
    </aside>
    <footer class="site-footer"></footer>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
    <script src="${assetRef(locale, pathname, "products.js")}"></script>
    <script src="${assetRef(locale, pathname, "app.js")}"></script>
  </body>
</html>`;
}

function productImage(product) {
  if (product.fabricBased) {
    const images = {
      "fitted-sheet-set": "assets/lifestyle/fitted-colors/fitted-sheet-set-white.jpg",
      "duvet-cover-set": "assets/lifestyle/duvet-colors/duvet-cover-set-white.jpg",
      "pillowcase-set": "assets/lifestyle/pillowcase-colors/pillowcase-set-white.jpg",
      "flat-sheet-set": "assets/lifestyle/flat-colors/flat-sheet-set-white.jpg"
    };
    return images[product.id] || fabrics.percale.options[0].image;
  }
  return product.image || "assets/images/main-hero-image.png";
}

function firstPrice(product) {
  if (product.noPrice) return "";
  if (product.fabricBased) return product.sizes[0].percale;
  if (product.matrix) return Object.values(product.matrix.variants[0].prices)[0];
  return product.variants?.[0]?.price || "";
}

function productCardStatic(product, locale, pathname) {
  const image = productImage(product);
  const productHref = hrefTo(locale, pathname, locale, `/products/${productSlug(product)}/`);
  return `<article class="card" data-product="${esc(product.id)}">
    <a class="image-wrap" data-image href="${productHref}"><img src="${assetRef(locale, pathname, image)}" alt="${esc(productName(product, locale))} ${locale === "ar" ? "من هوم أوف لينن" : "by Home of Linen"}" loading="lazy"></a>
    <div class="mobile-controls" data-mobile-controls></div>
    <div class="card-body"><div><p class="eyebrow">${esc(categoryName(product.category, locale))}</p><h3><a href="${productHref}">${esc(productName(product, locale))}</a></h3></div><div data-controls></div><div class="buy-row"><div><div class="price" data-price>${firstPrice(product) ? `EGP ${firstPrice(product).toLocaleString("en-EG")}` : ""}</div><div class="qty" aria-label="Quantity selector"><button type="button" data-qty-down>−</button><span data-qty>1</span><button type="button" data-qty-up>+</button></div></div><button class="add-button" type="button" data-add>${product.noPrice ? (locale === "ar" ? "قريباً" : "Coming Soon") : (locale === "ar" ? "أضف للسلة" : "Add to Basket")}</button></div><p class="description" data-description>${esc(productDescription(product, locale))}</p><p class="spec" data-spec>${esc(product.includes || "")}</p></div>
  </article>`;
}

function categoryPage(category, locale) {
  const slug = categorySlugs[category];
  const pathname = `/categories/${slug}/`;
  const name = categoryName(category, locale);
  const enTitle = `${category} in Egypt | Home of Linen`;
  const arTitle = `${name} قطن مصري | Home of Linen`;
  const title = locale === "ar" ? arTitle : enTitle;
  const description = locale === "ar"
    ? `تسوق ${name} من Home of Linen بتصميم هادئ وأسعار بالجنيه المصري. اختر المقاس واللون واطلب بسهولة عبر واتساب.`
    : `Shop ${category.toLowerCase()} in Egyptian cotton from Home of Linen. Choose your size and colour, then order easily through WhatsApp in EGP.`;
  const catalogHtml = `<section class="category category-${slug} only-products" id="${slug}">
    <h1 class="visually-hidden">${esc(locale === "ar" ? `${name} قطن مصري` : `Egyptian Cotton ${category}`)}</h1>
    <div class="grid">${products.filter(product => product.category === category).map(product => productCardStatic(product, locale, pathname)).join("")}</div>
  </section>`;
  const schema = [breadcrumbSchema([
    { name: "Home", url: locale === "ar" ? arUrl("/") : enUrl("/") },
    { name, url: locale === "ar" ? arUrl(pathname) : enUrl(pathname) }
  ])];
  return { locale, pathname, html: layout({ locale, type: "category", title, description, pathname, h1: name, body: "", catalogHtml, config: { type: "category", category: slug, h1: locale === "ar" ? `${name} قطن مصري` : `Egyptian Cotton ${category}` }, schema }) };
}

function beddingPage(locale) {
  const pathname = "/categories/bedding/";
  const title = locale === "ar" ? "مفروشات السرير | Home of Linen" : "Bedding Collection | Home of Linen Egypt";
  const description = locale === "ar"
    ? "تسوق مفروشات السرير من Home of Linen: أكياس مخدات، ملايات بأستك، ملايات سادة، أغطية لحاف، لحاف مبطن، مخدات ومراتب توبر."
    : "Shop Home of Linen bedding: pillowcase sets, fitted sheet sets, flat sheet sets, duvet cover sets, comforters, pillows and mattress toppers.";
  const h1 = locale === "ar" ? "مفروشات السرير" : "Bedding Collection";
  const orderedProducts = beddingCategories.flatMap(category => products.filter(product => product.category === category));
  const catalogHtml = `<section class="category category-bedding-products only-products"><div class="grid">${orderedProducts.map(product => productCardStatic(product, locale, pathname)).join("")}</div></section>`;
  const body = `<h1 class="visually-hidden">${esc(h1)}</h1>`;
  const schema = [breadcrumbSchema([
    { name: "Home", url: locale === "ar" ? arUrl("/") : enUrl("/") },
    { name: h1, url: locale === "ar" ? arUrl(pathname) : enUrl(pathname) }
  ])];
  return { locale, pathname, html: layout({ locale, type: "category", title, description, pathname, h1, body, catalogHtml, config: { type: "category", category: "bedding", h1 }, schema }) };
}

function productPage(product, locale) {
  const pathname = `/products/${productSlug(product)}/`;
  const name = productName(product, locale);
  const catName = categoryName(product.category, locale);
  const price = firstPrice(product);
  const title = locale === "ar" ? `${name} | ${catName} | Home of Linen` : `${product.name} | ${product.category} | Home of Linen`;
  const description = locale === "ar"
    ? `تسوق ${name} من Home of Linen. اختر المقاس أو اللون وأرسل الطلب عبر واتساب بأسعار واضحة بالجنيه المصري.`
    : `Shop ${product.name} from Home of Linen in Egypt. Choose size, colour and quantity, then confirm your order through WhatsApp in EGP.`;
  const image = productImage(product);
  const galleryHtml = product.gallery?.length > 1
    ? `<section class="product-gallery-strip" aria-label="${esc(locale === "ar" ? "صور المنتج" : "Product images")}">
    ${product.gallery.map((galleryImage, index) => `<img src="${assetRef(locale, pathname, galleryImage)}" alt="${esc(`${product.name} ${index === 0 ? "featured product image" : "lifestyle image"}`)}" loading="lazy">`).join("")}
  </section>`
    : "";
  const body = `<section class="product-seo-page"><p class="eyebrow">${esc(catName)}</p><h1>${esc(locale === "ar" ? `${name} من Home of Linen` : `${product.name} in Egypt`)}</h1><p>${esc(locale === "ar" ? "اختر التفاصيل المناسبة وأكمل الطلب عبر واتساب." : "Choose your preferred details and complete your order through WhatsApp.")}</p></section>${galleryHtml ? `\n  ${galleryHtml}` : ""}`;
  const catalogHtml = `<div class="grid">${productCardStatic(product, locale, pathname)}</div>`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    image: `${SITE}/${image}`,
    description,
    brand: { "@type": "Brand", name: "Home of Linen" },
    offers: price ? { "@type": "Offer", priceCurrency: "EGP", price, availability: "https://schema.org/InStock", url: locale === "ar" ? arUrl(pathname) : enUrl(pathname) } : undefined
  };
  const schema = [productSchema, breadcrumbSchema([
    { name: "Home", url: locale === "ar" ? arUrl("/") : enUrl("/") },
    { name: catName, url: locale === "ar" ? arUrl(`/categories/${categorySlugs[product.category]}/`) : enUrl(`/categories/${categorySlugs[product.category]}/`) },
    { name, url: locale === "ar" ? arUrl(pathname) : enUrl(pathname) }
  ])];
  return { locale, pathname, html: layout({ locale, type: "product", title, description, pathname, h1: name, body, catalogHtml, config: { type: "product", productId: product.id }, schema }) };
}

const guides = [
  ["egyptian-cotton-bedding-guide", "Complete Guide to Egyptian Cotton Bedding", "الدليل الكامل لمفروشات القطن المصري", "Learn how Egyptian cotton bedding feels, why it matters, and how to build a calm bedroom with sheets, pillowcases and duvet covers.", "تعرف على مفروشات القطن المصري وكيف تختار الملايات وأكياس المخدات وأغطية اللحاف المناسبة لبيت هادئ."],
  ["best-thread-count-cotton-sheets", "What Thread Count Is Best for Cotton Sheets?", "ما هو أفضل عدد خيوط للملايات القطن؟", "Understand thread count, weave and comfort so you can choose breathable Egyptian cotton sheets with confidence.", "افهم عدد الخيوط ونوع النسيج حتى تختار ملايات قطن مصري مريحة ومناسبة."],
  ["percale-vs-sateen", "Percale vs Sateen: Which Bedding Feels Better?", "بركال أم ساتين: أيهما أنسب للمفروشات؟", "Compare percale and sateen bedding in feel, finish and everyday use before choosing your next sheet set.", "قارن بين البركال والساتين من حيث الملمس والشكل والاستخدام اليومي قبل اختيار طقم السرير."],
  ["care-for-egyptian-cotton-sheets", "How to Care for Egyptian Cotton Sheets", "طريقة العناية بملايات القطن المصري", "Simple washing, drying and storage tips to keep Egyptian cotton sheets fresh, soft and long lasting.", "نصائح بسيطة للغسيل والتجفيف والتخزين للحفاظ على ملايات القطن المصري ناعمة ومنعشة."],
  ["bed-sheet-size-guide-egypt", "Bed & Sheet Size Guide in Egypt", "دليل مقاسات السرير والملايات في مصر", "Use this Egypt-focused bed size guide to choose fitted sheets, flat sheets, duvet covers and toppers.", "استخدم دليل مقاسات السرير في مصر لاختيار الملايات والأغطية والتوبر بالمقاس الصحيح."]
];

const businessInfo = {
  name: "Home of Linen (Nourytex)",
  website: "https://homeoflineneg.com",
  email: "sales@homeoflineneg.com",
  phone: "02 21828477",
  internationalPhone: "+20 2 21828477",
  address: "9 Tawakol Street, Industrial Area, Gesr El Suess, Cairo, Egypt",
  arAddress: "9 شارع التوكل، المنطقة الصناعية، جسر السويس، القاهرة، مصر",
  commercialRegistration: "252129",
  taxRegistration: "100-034-497",
  supportHours: "Sunday – Thursday, 9:00 AM – 5:00 PM (Egypt Time)"
};

const policyPages = [
  {
    slug: "terms-and-conditions",
    title: "Terms & Conditions | Home of Linen",
    arTitle: "الشروط والأحكام | Home of Linen",
    description: "Read Home of Linen terms and conditions before shopping. Learn about orders, pricing, payments, product information and Egyptian law.",
    arDescription: "اقرأ الشروط والأحكام الخاصة بـ Home of Linen قبل التسوق، بما في ذلك الطلبات والأسعار والدفع ومعلومات المنتجات.",
    h1: "Terms & Conditions",
    arH1: "الشروط والأحكام",
    sections: [
      ["Overview", ["Welcome to Home of Linen. By accessing our website or placing an order, you agree to these Terms & Conditions. If you do not agree with these terms, please do not use our website."]],
      ["Orders", ["All orders are subject to product availability and order confirmation. We reserve the right to refuse, limit, or cancel any order due to stock availability, pricing errors, payment verification issues, or suspected fraudulent activity. If your order is cancelled after payment has been received, a full refund will be issued."]],
      ["Product Information", ["We make every effort to display our products as accurately as possible. Colours may vary slightly depending on your device or monitor. Minor variations in colour, weave, stitching, texture, or dimensions are natural characteristics of textile manufacturing and do not constitute defects."]],
      ["Pricing", ["All prices are displayed in Egyptian Pounds (EGP) and include applicable taxes unless otherwise stated. Prices and promotions may change without prior notice. Should an obvious pricing error occur, we reserve the right to cancel the order and issue a full refund."]],
      ["Payment", ["Payment is accepted using the methods displayed during checkout. For Cash on Delivery orders, payment is due in full upon delivery."]],
      ["Intellectual Property", ["All content on this website — including product photography, graphics, logos, illustrations, text, branding, and designs — is the exclusive property of Home of Linen. No content may be copied, reproduced, distributed, or used without our prior written permission."]],
      ["Limitation of Liability", ["To the fullest extent permitted by law, Home of Linen shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products. Our maximum liability shall not exceed the amount paid for the product giving rise to the claim. Nothing in these Terms limits your rights under applicable Egyptian consumer protection laws."]],
      ["Governing Law", ["These Terms are governed by the laws of the Arab Republic of Egypt. We may update these Terms periodically. Any changes become effective immediately upon publication on this page."]]
    ],
    arSections: [
      ["نظرة عامة", ["مرحباً بك في Home of Linen. باستخدامك للموقع أو إتمام أي طلب، فإنك توافق على هذه الشروط والأحكام. إذا كنت لا توافق عليها، يرجى عدم استخدام الموقع."]],
      ["الطلبات", ["تخضع جميع الطلبات لتوافر المنتجات وتأكيد الطلب. نحتفظ بحق رفض أو تحديد أو إلغاء أي طلب بسبب عدم توافر المخزون، أو أخطاء التسعير، أو مشكلات التحقق من الدفع، أو الاشتباه في نشاط غير صحيح. إذا تم إلغاء الطلب بعد استلام الدفع، سيتم رد المبلغ بالكامل."]],
      ["معلومات المنتجات", ["نحرص على عرض المنتجات بأكبر قدر ممكن من الدقة. قد تختلف الألوان قليلاً حسب شاشة الجهاز. الاختلافات البسيطة في اللون أو النسيج أو الخياطة أو الملمس أو المقاسات هي خصائص طبيعية في صناعة المنسوجات ولا تعتبر عيوباً."]],
      ["الأسعار", ["جميع الأسعار معروضة بالجنيه المصري وتشمل الضرائب المطبقة ما لم يُذكر خلاف ذلك. قد تتغير الأسعار والعروض دون إشعار مسبق. في حال وجود خطأ واضح في السعر، نحتفظ بحق إلغاء الطلب ورد المبلغ بالكامل."]],
      ["الدفع", ["يتم قبول وسائل الدفع المتاحة أثناء إتمام الطلب. في طلبات الدفع عند الاستلام، يكون الدفع مستحقاً بالكامل عند التوصيل."]],
      ["الملكية الفكرية", ["جميع محتويات الموقع، بما في ذلك الصور والرسومات والشعارات والنصوص والعلامة التجارية والتصميمات، مملوكة حصرياً لـ Home of Linen. لا يجوز نسخ أو إعادة إنتاج أو توزيع أو استخدام أي محتوى دون موافقة كتابية مسبقة."]],
      ["حدود المسؤولية", ["إلى أقصى حد يسمح به القانون، لا تتحمل Home of Linen مسؤولية أي أضرار غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام الموقع أو المنتجات. لا تتجاوز مسؤوليتنا القصوى قيمة المنتج محل المطالبة، ولا يحد ذلك من حقوقك بموجب قوانين حماية المستهلك المصرية."]],
      ["القانون الحاكم", ["تخضع هذه الشروط لقوانين جمهورية مصر العربية. قد نقوم بتحديث هذه الشروط من وقت لآخر، وتصبح أي تغييرات سارية فور نشرها على هذه الصفحة."]]
    ]
  },
  {
    slug: "refund-policy",
    title: "Refund Policy | Home of Linen Egypt",
    arTitle: "سياسة الاسترجاع | Home of Linen",
    description: "Review Home of Linen return, exchange and refund rules. Returns are accepted within 14 days when products are unused and eligible.",
    arDescription: "تعرف على سياسة الاسترجاع والاستبدال ورد المبالغ من Home of Linen خلال 14 يوماً للمنتجات المؤهلة وغير المستخدمة.",
    h1: "Refund Policy",
    arH1: "سياسة الاسترجاع",
    sections: [
      ["Returns", ["We accept returns within 14 days of delivery. To be eligible for a return, your item must be unused, unwashed, in its original condition, returned in its original packaging with all tags and accessories attached, and show no signs of use, damage, alteration, or laundering.", "To initiate a return, please contact us at sales@homeoflineneg.com with your order number, the reason for your return, and photos of the item if it is damaged or incorrect."]],
      ["Non-Returnable Items", ["For hygiene reasons, we cannot accept returns of used or washed bedding, towels, pillows, or comforters; items removed from sealed packaging where applicable; or final sale and clearance items, unless the product is defective or delivered incorrectly."]],
      ["Damaged or Incorrect Orders", ["Please inspect your order upon delivery. If you receive an incorrect, damaged, or defective item, contact us within 48 hours of delivery with your order number, clear photographs showing the issue, and a brief description. After review, we will arrange a replacement or issue a full refund, including applicable shipping costs if the error was ours."]],
      ["Refunds", ["Once your returned item has been received and inspected, we will notify you of the outcome. Approved refunds will be processed using your original payment method within 7–14 business days, depending on your payment provider.", "For Cash on Delivery (COD) orders, refunds will be issued via bank transfer, Instapay, or another mutually agreed payment method. Original shipping charges are non-refundable unless the return is due to a defective product or an error on our part."]],
      ["Exchanges", ["We are happy to exchange eligible products for a different size or colour, subject to stock availability. Please contact us within 14 days of delivery and our team will assist you."]]
    ],
    arSections: [
      ["الاسترجاع", ["نقبل طلبات الاسترجاع خلال 14 يوماً من تاريخ التوصيل. يجب أن يكون المنتج غير مستخدم، غير مغسول، بحالته الأصلية، داخل العبوة الأصلية مع جميع الملصقات والإكسسوارات، ولا يظهر عليه أي استخدام أو تلف أو تعديل أو غسيل.", "لبدء طلب الاسترجاع، يرجى التواصل معنا عبر sales@homeoflineneg.com مع رقم الطلب وسبب الاسترجاع وصور المنتج إذا كان تالفاً أو غير صحيح."]],
      ["المنتجات غير القابلة للاسترجاع", ["لأسباب تتعلق بالنظافة، لا يمكن قبول استرجاع المفروشات أو الفوط أو المخدات أو اللحاف المستخدم أو المغسول، أو المنتجات التي تمت إزالتها من العبوات المغلقة حيثما ينطبق، أو منتجات التخفيضات النهائية، إلا إذا كان المنتج معيباً أو تم توصيله بالخطأ."]],
      ["الطلبات التالفة أو غير الصحيحة", ["يرجى فحص الطلب عند الاستلام. إذا وصلك منتج غير صحيح أو تالف أو معيب، يرجى التواصل معنا خلال 48 ساعة من التوصيل مع رقم الطلب وصور واضحة للمشكلة ووصف مختصر. بعد المراجعة، سنقوم بترتيب الاستبدال أو رد كامل للمبلغ بما في ذلك رسوم الشحن المطبقة إذا كان الخطأ من طرفنا."]],
      ["رد المبالغ", ["بعد استلام المنتج المرتجع وفحصه، سنبلغك بنتيجة الطلب. يتم رد المبالغ المقبولة عبر وسيلة الدفع الأصلية خلال 7 إلى 14 يوم عمل حسب مزود الدفع.", "بالنسبة لطلبات الدفع عند الاستلام، يتم رد المبلغ عبر التحويل البنكي أو Instapay أو أي وسيلة متفق عليها. رسوم الشحن الأصلية غير قابلة للرد إلا إذا كان الاسترجاع بسبب عيب في المنتج أو خطأ من طرفنا."]],
      ["الاستبدال", ["يسعدنا استبدال المنتجات المؤهلة بمقاس أو لون مختلف حسب توافر المخزون. يرجى التواصل معنا خلال 14 يوماً من التوصيل وسيساعدك فريقنا."]]
    ]
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy | Home of Linen Egypt",
    arTitle: "سياسة الخصوصية | Home of Linen",
    description: "Learn how Home of Linen collects, uses and protects customer information for orders, delivery, support and website improvements.",
    arDescription: "تعرف على كيفية جمع Home of Linen لبيانات العملاء واستخدامها وحمايتها لأغراض الطلبات والتوصيل وخدمة العملاء.",
    h1: "Privacy Policy",
    arH1: "سياسة الخصوصية",
    sections: [
      ["Information We Collect", ["We may collect information you provide when placing an order or contacting us, including your name, phone number, email address, delivery address, order details, payment method, and customer service messages. We may also collect technical information such as device type, browser, pages viewed, and cookies to improve website performance."]],
      ["How We Use Your Information", ["We use your information to process and deliver orders, confirm order details through WhatsApp or email, provide customer support, manage returns and exchanges, prevent fraud, improve our website, and send marketing messages only where permitted or when you have opted in."]],
      ["Sharing Information", ["We may share necessary order information with delivery couriers, payment providers, website hosting providers, Shopify or ecommerce service providers, analytics tools, and professional advisers where required. We do not sell your personal information."]],
      ["Cookies", ["Our website may use cookies and similar technologies to remember basket activity, improve performance, understand customer journeys, and support analytics. You can control cookies through your browser settings."]],
      ["Data Retention and Security", ["We keep customer information only for as long as reasonably necessary for order fulfilment, customer service, accounting, legal, and business purposes. We apply reasonable safeguards to protect your information, but no online system can be guaranteed completely secure."]],
      ["Your Choices", ["You may contact us to request access, correction, or deletion of your personal information, subject to legal and business record requirements. To contact us, email sales@homeoflineneg.com."]],
      ["Updates", ["We may update this Privacy Policy from time to time. Updates become effective when published on this page."]]
    ],
    arSections: [
      ["البيانات التي نجمعها", ["قد نجمع البيانات التي تقدمها عند إتمام الطلب أو التواصل معنا، مثل الاسم ورقم الهاتف والبريد الإلكتروني وعنوان التوصيل وتفاصيل الطلب ووسيلة الدفع ورسائل خدمة العملاء. قد نجمع أيضاً معلومات تقنية مثل نوع الجهاز والمتصفح والصفحات التي تمت زيارتها وملفات تعريف الارتباط لتحسين أداء الموقع."]],
      ["كيفية استخدام البيانات", ["نستخدم بياناتك لمعالجة الطلبات وتوصيلها، وتأكيد تفاصيل الطلب عبر واتساب أو البريد الإلكتروني، وتقديم خدمة العملاء، وإدارة الاسترجاع والاستبدال، ومنع الاحتيال، وتحسين الموقع، وإرسال رسائل تسويقية فقط عند السماح بذلك أو موافقتك."]],
      ["مشاركة البيانات", ["قد نشارك بيانات الطلب الضرورية مع شركات التوصيل ومزودي الدفع والاستضافة ومزودي خدمات التجارة الإلكترونية مثل Shopify وأدوات التحليل والمستشارين المهنيين عند الحاجة. لا نقوم ببيع بياناتك الشخصية."]],
      ["ملفات تعريف الارتباط", ["قد يستخدم الموقع ملفات تعريف الارتباط وتقنيات مشابهة لحفظ السلة وتحسين الأداء وفهم رحلة العميل ودعم التحليلات. يمكنك التحكم في ملفات تعريف الارتباط من إعدادات المتصفح."]],
      ["الاحتفاظ بالبيانات والأمان", ["نحتفظ ببيانات العملاء فقط للمدة اللازمة لتنفيذ الطلبات وخدمة العملاء والمحاسبة والمتطلبات القانونية وأغراض العمل. نطبق إجراءات حماية معقولة، لكن لا يمكن ضمان أمان أي نظام إلكتروني بالكامل."]],
      ["اختياراتك", ["يمكنك التواصل معنا لطلب الوصول إلى بياناتك أو تصحيحها أو حذفها، مع مراعاة المتطلبات القانونية وسجلات الأعمال. للتواصل: sales@homeoflineneg.com."]],
      ["التحديثات", ["قد نقوم بتحديث سياسة الخصوصية من وقت لآخر، وتصبح التحديثات سارية عند نشرها على هذه الصفحة."]]
    ]
  },
  {
    slug: "shipping-policy",
    title: "Shipping Policy | Home of Linen Egypt",
    arTitle: "سياسة الشحن | Home of Linen",
    description: "See Home of Linen delivery times, shipping fees, tracking and inspection guidance for orders delivered across Egypt.",
    arDescription: "تعرف على مواعيد التوصيل ورسوم الشحن وتتبع الطلبات وفحصها من Home of Linen داخل مصر.",
    h1: "Shipping Policy",
    arH1: "سياسة الشحن",
    sections: [
      ["Delivery Area", ["We currently deliver throughout Egypt."]],
      ["Order Processing", ["Orders are typically processed within 1–2 business days after confirmation. Processing times may be longer during public holidays, promotional campaigns, or peak shopping periods."]],
      ["Estimated Delivery Times", ["Greater Cairo: 1–3 business days. Alexandria & Delta: 2–4 business days. Upper Egypt & other governorates: 3–6 business days. Delivery times are estimates and may vary depending on courier operations or unforeseen circumstances."]],
      ["Shipping Fees", ["Shipping is calculated during checkout. Orders below 6,000 EGP have a 70 EGP shipping fee. Orders of 6,000 EGP or more receive free shipping unless otherwise stated. Any free shipping promotions will be clearly displayed on our website."]],
      ["Order Tracking", ["Once your order has been dispatched, you may receive tracking details via SMS, email, or WhatsApp where available."]],
      ["Delivery Attempts", ["Please ensure your delivery address and phone number are correct. Our courier may contact you before delivery. If delivery cannot be completed due to incorrect information or repeated unsuccessful delivery attempts, additional shipping charges may apply."]],
      ["Delivery Inspection", ["Please inspect your order immediately upon delivery. If there are any issues, notify us within 48 hours so we can resolve them promptly."]]
    ],
    arSections: [
      ["نطاق التوصيل", ["نقوم حالياً بالتوصيل داخل جميع محافظات مصر."]],
      ["تجهيز الطلب", ["عادةً يتم تجهيز الطلب خلال 1 إلى 2 يوم عمل بعد التأكيد. قد تستغرق عملية التجهيز وقتاً أطول خلال العطلات الرسمية أو الحملات الترويجية أو فترات الضغط."]],
      ["مواعيد التوصيل المتوقعة", ["القاهرة الكبرى: من 1 إلى 3 أيام عمل. الإسكندرية والدلتا: من 2 إلى 4 أيام عمل. الصعيد وباقي المحافظات: من 3 إلى 6 أيام عمل. هذه المواعيد تقديرية وقد تختلف حسب شركة الشحن أو الظروف غير المتوقعة."]],
      ["رسوم الشحن", ["يتم احتساب الشحن عند إتمام الطلب. الطلبات الأقل من 6,000 جنيه مصري يضاف إليها 70 جنيه مصري رسوم شحن. الطلبات بقيمة 6,000 جنيه مصري أو أكثر تحصل على شحن مجاني ما لم يُذكر خلاف ذلك. سيتم عرض أي عروض شحن مجاني بوضوح على الموقع."]],
      ["تتبع الطلب", ["بعد شحن الطلب، قد تصلك تفاصيل التتبع عبر الرسائل القصيرة أو البريد الإلكتروني أو واتساب حيثما يتوفر ذلك."]],
      ["محاولات التوصيل", ["يرجى التأكد من صحة عنوان التوصيل ورقم الهاتف. قد يتواصل معك مندوب الشحن قبل التوصيل. إذا تعذر التوصيل بسبب بيانات غير صحيحة أو محاولات توصيل غير ناجحة متكررة، قد يتم تطبيق رسوم شحن إضافية."]],
      ["فحص الطلب عند الاستلام", ["يرجى فحص الطلب فور الاستلام. إذا وجدت أي مشكلة، أبلغنا خلال 48 ساعة حتى نتمكن من حلها سريعاً."]]
    ]
  }
];

function guideRelatedLinks(pathname, locale) {
  const related = {
    "egyptian-cotton-bedding-guide": ["Fitted Sheets", "Pillowcases", "Duvet Covers"],
    "best-thread-count-cotton-sheets": ["Fitted Sheets", "Flat Sheets"],
    "percale-vs-sateen": ["Fitted Sheets", "Duvet Covers"],
    "care-for-egyptian-cotton-sheets": ["Fitted Sheets", "Flat Sheets", "Pillowcases"],
    "bed-sheet-size-guide-egypt": ["Fitted Sheets", "Flat Sheets", "Mattress Toppers"]
  };
  const slug = pathname.split("/").filter(Boolean).pop();
  const categories = related[slug] || [];
  if (!categories.length) return "";
  const label = locale === "ar" ? "تصفح الأقسام المرتبطة" : "Shop related categories";
  return `<nav class="guide-links" aria-label="${esc(label)}"><p class="eyebrow">${esc(label)}</p>${categories.map(category => `<a href="${hrefTo(locale, pathname, locale, `/categories/${categorySlugs[category]}/`)}">${esc(categoryName(category, locale))}</a>`).join("")}</nav>`;
}

function contentPage(locale, pathname, titleEn, titleAr, descEn, descAr, h1En, h1Ar, paragraphs, type = "content") {
  const title = locale === "ar" ? titleAr : titleEn;
  const description = locale === "ar" ? descAr : descEn;
  const h1 = locale === "ar" ? h1Ar : h1En;
  const body = `<section class="content-page"><p class="eyebrow">Home Of Linen</p><h1>${esc(h1)}</h1>${paragraphs[locale].map(p => `<p>${esc(p)}</p>`).join("")}${guideRelatedLinks(pathname, locale)}</section>`;
  const schema = type === "guide" ? [{
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    description,
    author: { "@type": "Organization", name: "Home of Linen" },
    publisher: { "@type": "Organization", name: "Home of Linen", logo: { "@type": "ImageObject", url: `${SITE}/assets/brand/home-of-linen-logo.png` } },
    mainEntityOfPage: locale === "ar" ? arUrl(pathname) : enUrl(pathname)
  }] : [];
  return { locale, pathname, html: layout({ locale, type, title, description, pathname, h1, body, config: { type }, schema }) };
}

function policyPage(page, locale) {
  const pathname = `/policies/${page.slug}/`;
  const title = locale === "ar" ? page.arTitle : page.title;
  const description = locale === "ar" ? page.arDescription : page.description;
  const h1 = locale === "ar" ? page.arH1 : page.h1;
  const sections = locale === "ar" ? page.arSections : page.sections;
  const body = `<section class="policy-page">
    <p class="eyebrow">Home Of Linen</p>
    <h1>${esc(h1)}</h1>
    <div class="policy-card">
      ${sections.map(([heading, paragraphs]) => `<section class="policy-section"><h2>${esc(heading)}</h2>${paragraphs.map(p => `<p>${esc(p)}</p>`).join("")}</section>`).join("")}
    </div>
  </section>`;
  const schema = [breadcrumbSchema([
    { name: "Home", url: locale === "ar" ? arUrl("/") : enUrl("/") },
    { name: h1, url: locale === "ar" ? arUrl(pathname) : enUrl(pathname) }
  ])];
  return { locale, pathname, html: layout({ locale, type: "content", title, description, pathname, h1, body, config: { type: "content" }, schema }) };
}

function contactPage(locale) {
  const pathname = "/contact/";
  const title = locale === "ar" ? "تواصل معنا | Home of Linen" : "Contact Us | Home of Linen Egypt";
  const description = locale === "ar"
    ? "تواصل مع Home of Linen عبر البريد الإلكتروني أو الهاتف أو العنوان المسجل في القاهرة، مصر."
    : "Contact Home of Linen in Egypt by email, phone, WhatsApp or registered address for order support and customer care.";
  const h1 = locale === "ar" ? "تواصل معنا" : "Contact Us";
  const rows = locale === "ar"
    ? [
      ["اسم النشاط", businessInfo.name],
      ["الموقع الإلكتروني", businessInfo.website],
      ["البريد الإلكتروني", businessInfo.email],
      ["الهاتف داخل مصر", businessInfo.phone],
      ["الهاتف الدولي", businessInfo.internationalPhone],
      ["العنوان", businessInfo.arAddress],
      ["رقم السجل التجاري", businessInfo.commercialRegistration],
      ["رقم التسجيل الضريبي", businessInfo.taxRegistration],
      ["ساعات الدعم", "الأحد – الخميس، 9:00 صباحاً – 5:00 مساءً بتوقيت مصر"]
    ]
    : [
      ["Business Name", businessInfo.name],
      ["Website", businessInfo.website],
      ["Email", businessInfo.email],
      ["Phone in Egypt", businessInfo.phone],
      ["International Phone", businessInfo.internationalPhone],
      ["Registered Address", businessInfo.address],
      ["Commercial Registration No.", businessInfo.commercialRegistration],
      ["Tax Registration No.", businessInfo.taxRegistration],
      ["Customer Support Hours", businessInfo.supportHours]
    ];
  const body = `<section class="policy-page contact-page">
    <p class="eyebrow">Home Of Linen</p>
    <h1>${esc(h1)}</h1>
    <div class="policy-card">
      <section class="policy-section">
        <h2>${esc(locale === "ar" ? "بيانات التواصل" : "Contact Information")}</h2>
        <p>${esc(locale === "ar" ? "يسعدنا مساعدتك. للحصول على أسرع خدمة، يرجى ذكر رقم الطلب عند التواصل معنا." : "We are always happy to help. For the fastest assistance, please include your order number when contacting us.")}</p>
        <dl class="contact-list">${rows.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join("")}</dl>
      </section>
      <section class="policy-section">
        <h2>${esc(locale === "ar" ? "إشعار قانوني" : "Legal Notice")}</h2>
        <p>${esc(locale === "ar" ? "هذا الموقع مملوك ويتم تشغيله بواسطة Home of Linen. جميع المحتويات المتاحة على هذا الموقع، بما في ذلك الشعارات والصور والنصوص والتصميمات، محمية بموجب قوانين الملكية الفكرية المعمول بها." : "This website is owned and operated by Home of Linen. All content available on this website — including logos, product photography, graphics, text, illustrations, branding, product descriptions, and website design — is protected by applicable intellectual property laws.")}</p>
        <p>${esc(locale === "ar" ? "تحتفظ Home of Linen بحق تحديث المنتجات والأسعار ومحتوى الموقع والسياسات في أي وقت دون إشعار مسبق." : "Home of Linen reserves the right to update products, pricing, website content, and policies at any time without prior notice.")}</p>
      </section>
    </div>
  </section>`;
  const schema = [breadcrumbSchema([
    { name: "Home", url: locale === "ar" ? arUrl("/") : enUrl("/") },
    { name: h1, url: locale === "ar" ? arUrl(pathname) : enUrl(pathname) }
  ])];
  return { locale, pathname, html: layout({ locale, type: "content", title, description, pathname, h1, body, config: { type: "content" }, schema }) };
}

function faqsPage(locale) {
  const pathname = "/faqs/";
  const title = locale === "ar" ? "الأسئلة الشائعة | Home of Linen" : "FAQs | Home of Linen Egypt";
  const description = locale === "ar"
    ? "إجابات سريعة عن الشحن والاسترجاع والدفع والطلبات من Home of Linen داخل مصر."
    : "Find quick answers about Home of Linen shipping, returns, exchanges, payments and order support in Egypt.";
  const h1 = locale === "ar" ? "الأسئلة الشائعة" : "FAQs";
  const sections = locale === "ar"
    ? [
      ["أين تقومون بالتوصيل؟", ["نقوم حالياً بالتوصيل داخل جميع محافظات مصر."]],
      ["ما مدة التوصيل؟", ["القاهرة الكبرى من 1 إلى 3 أيام عمل، الإسكندرية والدلتا من 2 إلى 4 أيام عمل، والصعيد وباقي المحافظات من 3 إلى 6 أيام عمل."]],
      ["ما تكلفة الشحن؟", ["الطلبات الأقل من 6,000 جنيه مصري يضاف إليها 70 جنيه شحن. الطلبات بقيمة 6,000 جنيه أو أكثر تحصل على شحن مجاني ما لم يُذكر خلاف ذلك."]],
      ["هل يمكن الاسترجاع أو الاستبدال؟", ["نقبل الاسترجاع أو الاستبدال خلال 14 يوماً من التوصيل للمنتجات المؤهلة، بشرط أن تكون غير مستخدمة وغير مغسولة وبحالتها الأصلية."]],
      ["ماذا أفعل إذا وصلني منتج تالف أو غير صحيح؟", ["يرجى التواصل معنا خلال 48 ساعة من التوصيل مع رقم الطلب وصور واضحة للمشكلة حتى نتمكن من المساعدة."]],
      ["كيف أتواصل معكم؟", [`يمكنك مراسلتنا عبر ${businessInfo.email} أو الاتصال على ${businessInfo.phone}.`]]
    ]
    : [
      ["Where do you deliver?", ["We currently deliver throughout Egypt."]],
      ["How long does delivery take?", ["Greater Cairo usually takes 1–3 business days, Alexandria and Delta take 2–4 business days, and Upper Egypt or other governorates take 3–6 business days."]],
      ["How much is shipping?", ["Orders below 6,000 EGP have a 70 EGP shipping fee. Orders of 6,000 EGP or more receive free shipping unless otherwise stated."]],
      ["Can I return or exchange an item?", ["Eligible products can be returned or exchanged within 14 days of delivery, provided they are unused, unwashed, in original condition, and returned in their original packaging."]],
      ["What if my order arrives damaged or incorrect?", ["Please contact us within 48 hours of delivery with your order number and clear photos of the issue so we can help promptly."]],
      ["How can I contact Home of Linen?", [`You can email us at ${businessInfo.email} or call us in Egypt on ${businessInfo.phone}.`]]
    ];
  const body = `<section class="policy-page">
    <p class="eyebrow">Home Of Linen</p>
    <h1>${esc(h1)}</h1>
    <div class="policy-card">
      ${sections.map(([heading, paragraphs]) => `<section class="policy-section"><h2>${esc(heading)}</h2>${paragraphs.map(p => `<p>${esc(p)}</p>`).join("")}</section>`).join("")}
    </div>
  </section>`;
  const schema = [breadcrumbSchema([
    { name: "Home", url: locale === "ar" ? arUrl("/") : enUrl("/") },
    { name: h1, url: locale === "ar" ? arUrl(pathname) : enUrl(pathname) }
  ])];
  return { locale, pathname, html: layout({ locale, type: "content", title, description, pathname, h1, body, config: { type: "content" }, schema }) };
}

function ourStoryPage(locale) {
  const pathname = "/our-story/";
  const title = locale === "ar" ? "قصتنا | Home of Linen" : "Our Story | Home of Linen Egypt";
  const description = locale === "ar"
    ? "تعرف على قصة Home of Linen وخبرة Nourytex في تصنيع المنسوجات المصرية منذ عام 1988."
    : "Discover the Home of Linen story, backed by Nourytex and more than 30 years of Egyptian textile expertise.";
  const h1 = locale === "ar" ? "قصتنا" : "Our Story";
  const body = `<section class="about-story about-story-page">
    <div class="about-story-copy">
      <h1>${esc(h1)}</h1>
      <p>Every Home of Linen product begins with over 30 years of Egyptian textile expertise.</p>
      <p>Founded by Nourytex, a trusted manufacturer established in 1988, our heritage is built on crafting premium home textiles for many of Egypt’s leading brands.</p>
      <p>Today, we’re proud to bring that same quality directly from our factory to your home—offering beautifully crafted bedding, towels, and home essentials made from the finest Egyptian cotton, designed for everyday comfort and made to last.</p>
    </div>
    <figure class="about-story-image">
      <img src="${assetRef(locale, pathname, "assets/images/editorial/about-story-image.png")}" alt="Layered Egyptian cotton bedding and textured home textiles in a warm Home of Linen bedroom" loading="lazy">
    </figure>
  </section>`;
  const schema = [breadcrumbSchema([
    { name: "Home", url: locale === "ar" ? arUrl("/") : enUrl("/") },
    { name: h1, url: locale === "ar" ? arUrl(pathname) : enUrl(pathname) }
  ])];
  return { locale, pathname, html: layout({ locale, type: "content", title, description, pathname, h1, body, config: { type: "content" }, schema }) };
}

function aboutPage(locale) {
  const pathname = "/about/";
  const title = locale === "ar" ? "من نحن | Home of Linen" : "About Us | Home of Linen Egypt";
  const description = locale === "ar"
    ? "تعرف على قصة Home of Linen وخبرة Nourytex في تصنيع المنسوجات المصرية منذ عام 1988."
    : "Discover the Home of Linen story, backed by Nourytex and more than 30 years of Egyptian textile expertise.";
  const body = `<section class="about-story about-story-page">
    <div class="about-story-copy">
      <h1>Our Story</h1>
      <p>Every Home of Linen product begins with over 30 years of Egyptian textile expertise.</p>
      <p>Founded by Nourytex, a trusted manufacturer established in 1988, our heritage is built on crafting premium home textiles for many of Egypt’s leading brands.</p>
      <p>Today, we’re proud to bring that same quality directly from our factory to your home—offering beautifully crafted bedding, towels, and home essentials made from the finest Egyptian cotton, designed for everyday comfort and made to last.</p>
    </div>
    <figure class="about-story-image">
      <img src="${assetRef(locale, pathname, "assets/images/editorial/about-story-image.png")}" alt="Layered Egyptian cotton bedding and textured home textiles in a warm Home of Linen bedroom" loading="lazy">
    </figure>
  </section>`;
  const schema = [breadcrumbSchema([
    { name: "Home", url: locale === "ar" ? arUrl("/") : enUrl("/") },
    { name: locale === "ar" ? "من نحن" : "About Us", url: locale === "ar" ? arUrl(pathname) : enUrl(pathname) }
  ])];
  return { locale, pathname, html: layout({ locale, type: "content", title, description, pathname, h1: "Our Story", body, config: { type: "content" }, schema }) };
}

function homePage(locale) {
  const title = locale === "ar"
    ? "Home of Linen | مفروشات قطن مصري في مصر"
    : "Home of Linen | Egyptian Cotton Bedding in Egypt";
  const description = locale === "ar"
    ? "تسوق مفروشات قطن مصري وفوط ومخدات من Home of Linen في مصر. اختر المقاس واللون واطلب بسهولة عبر واتساب."
    : "Shop Egyptian cotton bedding, towels, pillows and comfort essentials by Home of Linen in Egypt. Choose your size and order on WhatsApp today.";
  const h1 = locale === "ar" ? "مفروشات قطن مصري مصنوعة في مصر" : "Egyptian Cotton Bedding, Made in Egypt";
  const body = `<h1 class="visually-hidden">${esc(h1)}</h1>
      <section class="hero" aria-label="${esc(h1)}">
        <a class="hero-link" href="${hrefTo(locale, "/", locale, "/categories/bedding/")}" aria-label="${esc(locale === "ar" ? "تسوق مفروشات القطن المصري" : "Shop Egyptian cotton bedding")}">
          <img class="hero-image" src="${assetRef(locale, "/", "assets/images/main-hero-image.png")}" alt="${esc(locale === "ar" ? "سرير بمفروشات قطن مصري بيضاء من Home of Linen في غرفة هادئة" : "white Egyptian cotton bedding in a warm Home of Linen bedroom")}" />
        </a>
        <a class="hero-hotspot" href="${hrefTo(locale, "/", locale, "/categories/bedding/")}" aria-label="${esc(locale === "ar" ? "تسوق مفروشات القطن المصري" : "Shop Egyptian cotton bedding")}"></a>
      </section>`;
  return {
    locale,
    pathname: "/",
    html: layout({
      locale,
      type: "home",
      title,
      description,
      pathname: "/",
      h1,
      body,
      config: { type: "home" }
    })
  };
}

function generate() {
  const pages = [];
  pages.push(homePage("en"));
  pages.push(homePage("ar"));
  pages.push(beddingPage("en"));
  pages.push(beddingPage("ar"));
  Object.keys(categorySlugs).forEach(category => {
    pages.push(categoryPage(category, "en"));
    pages.push(categoryPage(category, "ar"));
  });
  products.forEach(product => {
    pages.push(productPage(product, "en"));
    pages.push(productPage(product, "ar"));
  });
  pages.push(aboutPage("en"));
  pages.push(aboutPage("ar"));
  pages.push(ourStoryPage("en"));
  pages.push(ourStoryPage("ar"));
  pages.push(faqsPage("en"));
  pages.push(faqsPage("ar"));
  policyPages.forEach(page => {
    pages.push(policyPage(page, "en"));
    pages.push(policyPage(page, "ar"));
  });
  pages.push(contactPage("en"));
  pages.push(contactPage("ar"));
  pages.push(contentPage("en", "/guides/", "Bedding Guides | Home of Linen Egypt", "دليل المفروشات | Home of Linen", "Read Home of Linen guides for Egyptian cotton bedding, thread count, percale, sateen, care and bed sizes in Egypt.", "اقرأ دليل Home of Linen عن القطن المصري وعدد الخيوط والبركال والساتين والعناية والمقاسات في مصر.", "Egyptian Cotton Bedding Guides", "دليل مفروشات القطن المصري", { en: guides.map(g => `${g[1]} — ${g[3]}`), ar: guides.map(g => `${g[2]} — ${g[4]}`) }));
  pages.push(contentPage("ar", "/guides/", "Bedding Guides | Home of Linen Egypt", "دليل المفروشات | Home of Linen", "Read Home of Linen guides for Egyptian cotton bedding, thread count, percale, sateen, care and bed sizes in Egypt.", "اقرأ دليل Home of Linen عن القطن المصري وعدد الخيوط والبركال والساتين والعناية والمقاسات في مصر.", "Egyptian Cotton Bedding Guides", "دليل مفروشات القطن المصري", { en: [], ar: guides.map(g => `${g[2]} — ${g[4]}`) }));
  guides.forEach(([slug, enTitle, arTitle, enDesc, arDesc]) => {
    const paragraphs = {
      en: [enDesc, "For the best result, start with the way you sleep and the climate of your room. Then choose fitted sheets, flat sheets, pillowcases and duvet covers that work together in colour and texture.", "Explore our related bedding categories to build a complete Home of Linen set with clear sizing and WhatsApp ordering."],
      ar: [arDesc, "لأفضل نتيجة ابدأ بطريقة نومك وطبيعة الغرفة. بعد ذلك اختر الملايات وأكياس المخدات وأغطية اللحاف التي تتناسق في اللون والملمس.", "تصفح الأقسام المرتبطة لبناء طقم Home of Linen كامل بمقاسات واضحة وطلب سهل عبر واتساب."]
    };
    pages.push(contentPage("en", `/guides/${slug}/`, `${enTitle} | Home of Linen`, `${arTitle} | Home of Linen`, `${enDesc} Shop related Home of Linen bedding today.`, `${arDesc} تصفح مفروشات Home of Linen اليوم.`, enTitle, arTitle, paragraphs, "guide"));
    pages.push(contentPage("ar", `/guides/${slug}/`, `${enTitle} | Home of Linen`, `${arTitle} | Home of Linen`, `${enDesc} Shop related Home of Linen bedding today.`, `${arDesc} تصفح مفروشات Home of Linen اليوم.`, enTitle, arTitle, paragraphs, "guide"));
  });
  pages.forEach(page => write(pagePath(page.locale, page.pathname), page.html));
  const urls = pages.map(page => {
    const loc = page.locale === "ar" ? arUrl(page.pathname) : enUrl(page.pathname);
    return `  <url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>${page.pathname === "/" ? "1.0" : "0.8"}</priority></url>`;
  }).join("\n");
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
  console.log(`Generated ${pages.length} pages`);
}

generate();
