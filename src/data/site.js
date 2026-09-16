export const ANNOUNCEMENT =
  "Every single ships sleeved, top-loaded and tracked.";

export const NAV_LINKS = [
  { label: "Home", to: "/", end: true },
  { label: "All products", to: "/products" },
  { label: "Pokémon", to: "/pokemon" },
  { label: "Magic: The Gathering", to: "/magic" },
  { label: "Riftbound", to: "/riftbound" },
  { label: "Contact", to: "/contact" },
];

export const HERO = {
  title: ["Gotta Catch", "Em All."],
  description:
    "Singles, sealed product and graded slabs, all held on our own shelf and shipped the day you order.",
  stat: "Search for what you’re looking for! sealed product, singles, top loaders, sleeves etc...",
  quickLinks: [
    {
      label: "Prismatic Evolutions",
      to: "/products?set=Prismatic%20Evolutions",
    },
    { label: "Under $20", to: "/products?maxPrice=20" },
    { label: "Japanese prints", to: "/products?category=japanese" },
    { label: "PSA 10", to: "/products?category=graded&grader=PSA&minGrade=10" },
    { label: "New this week", to: "/products?isNew=1" },
  ],
};

export const SEALED_SPOTLIGHT_IDS = [
  "phantasmal-flames-bundle",
  "ascended-heroes-etb",
  "prismatic-evolutions-box",
];

export const ABOUT_PARAGRAPHS = [
  "We are a card shop, not a marketplace. Everything listed is stock we already hold, photographed in our own shop and graded by us before it goes up. No third-party sellers, no drop-shipping, no waiting to find out whose hands your card is in.",
  "Condition is where that shows. Marketplaces let every seller grade their own cards, which is why the same card turns up in five different states. We apply one standard to everything on the shelf, checked in daylight, and we photograph the front and back so you can judge it yourself.",
];

export const FOOTER_BLURB =
  "A card shop that photographs and grades every single before it goes on sale.";

export const FOOTER_COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All products", to: "/products" },
      { label: "Singles", to: "/products?category=singles" },
      { label: "Sealed product", to: "/products?category=sealed" },
      { label: "Graded slabs", to: "/products?category=graded" },
      { label: "Preorders", to: "/products?category=preorders" },
    ],
  },
  {
    title: "Buying",
    links: [
      { label: "How we grade", to: "/contact" },
      { label: "Shipping and packing", to: "/contact" },
      { label: "Returns", to: "/contact" },
      { label: "Preorder terms", to: "/contact" },
      { label: "Track an order", to: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "Sell to us", to: "/contact" },
      { label: "Consign a collection", to: "/contact" },
      { label: "Grading submissions", to: "/contact" },
      { label: "Instagram", to: "/contact" },
    ],
  },
];

export const CONTACT_CHANNELS = [
  {
    icon: "mail",
    title: "Email",
    lines: ["hello@raretcg.shop", "We reply within one working day."],
    action: { label: "Write an email", href: "mailto:hello@raretcg.shop" },
  },
  {
    icon: "clock",
    title: "Shop hours",
    lines: ["Monday to Friday, 9am to 6pm", "Saturday, 10am to 4pm"],
  },
  {
    icon: "pin",
    title: "Collection point",
    lines: ["Unit 4, Harbour Yard", "Pickup by appointment only"],
  },
];

export const SELL_CTA = {
  title: "Selling a collection?",
  description:
    "Send a few photos and a rough list. We make cash and store credit offers on binders, bulk and slabs.",
  label: 'Choose "Selling or consigning" in the form',
};

export const CONTACT_FIELDS = [
  {
    name: "name",
    label: "Full name",
    required: true,
    placeholder: "Jordan Lee",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "you@example.com",
  },
  {
    name: "orderNumber",
    label: "Order number",
    placeholder: "RARE-10482, if you have one",
  },
  {
    name: "topic",
    label: "Topic",
    type: "select",
    required: true,
    placeholder: "Choose a topic",
    options: [
      "Order and shipping",
      "Card condition",
      "Preorders",
      "Selling or consigning",
      "Something else",
    ],
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
    full: true,
    placeholder: "Tell us which card or order this is about.",
  },
];

export const FAQS = [
  {
    question: "When will my order ship?",
    answer:
      "Orders placed before 4pm on a working day leave the same day. Every single is sleeved, top-loaded and sent tracked.",
  },
  {
    question: "How do you grade condition?",
    answer:
      "One person checks every card in daylight against our five-step scale, from Near Mint to Damaged. Front and back photos are on every listing.",
  },
  {
    question: "Can I return a card?",
    answer:
      "Yes, within 14 days if it arrives in a different condition than listed. Send it back in the same sleeve and top-loader.",
  },
  {
    question: "When am I charged for a preorder?",
    answer:
      "Only when it ships. If a release is delayed or our allocation is cut, your reservation is cancelled at no cost.",
  },
  {
    question: "Do you buy cards?",
    answer:
      'We buy singles, sealed product and slabs. Pick "Selling or consigning" in the form and attach a list or photos.',
  },
  {
    question: "Is RARE affiliated with The Pokémon Company?",
    answer:
      "No. We are an independent shop and are not affiliated with or endorsed by The Pokémon Company.",
  },
];
