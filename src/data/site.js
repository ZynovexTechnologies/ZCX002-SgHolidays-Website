export const siteConfig = {
  brand: "SG Holidays",
  siteName: "SG Holidays Vagamon",
  tagline: "Luxury rooms, jeep safari rides, and curated Vagamon tour packages.",
  region: "Vagamon, Kerala",
  country: "India",
  locale: "en_IN",
  siteUrl: "",
  themeColor: "#0B3D2E",
  defaultOgImage: "/og-sg-holidays.png",
  defaultOgImageAlt:
    "SG Holidays Vagamon branded social preview for resort stays, jeep safari, and tour packages.",
  logoPath: "/assets/logo-sg-holidays.png",
  businessDescription:
    "SG Holidays helps guests book luxury rooms in Vagamon from ₹4,500 per room for up to 3 guests, with WiFi, pool access, parking, balcony views, hot water, breakfast, jeep safari rides, and curated holiday packages from one contact point.",
  phoneDisplay: "+91 82819 95008",
  phoneDigits: "918281995008",
  email: "sgholidaysvagamon@gmail.com",
  instagram: "https://www.instagram.com/sgholidays.vagamon/",
  facebook: "https://www.facebook.com/profile.php?id=61575740199548",
  callLink: "tel:+918281995008",
  whatsappLink: "https://wa.me/918281995008",
  mapEmbed:
    "https://www.google.com/maps?q=SG%20Holidays%20Vagamon%20Kerala&output=embed",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Resort", to: "/resort" },
  { label: "Jeep Safari", to: "/safari" },
  { label: "Packages", to: "/packages" },
  { label: "Contact", to: "/contact" },
];

export const serviceOptions = [
  "Resort Stay",
  "Jeep Safari",
  "Couple Package",
  "Family Tour",
  "Honeymoon Package",
  "Office Tour",
];

export const socials = [
  { label: "Instagram", href: siteConfig.instagram },
  { label: "Facebook", href: siteConfig.facebook },
  { label: "WhatsApp", href: siteConfig.whatsappLink },
];

export const homeHighlights = [
  {
    title: "Luxury Rooms",
    description:
      "Luxury rooms from ₹4,500 per room for up to 3 guests, with WiFi, pool access, parking, balcony view, hot water, and breakfast.",
    tag: "Stay",
    to: "/resort",
  },
  {
    title: "Budget Dormitory",
    description:
      "Affordable group-friendly dorm spaces that keep school tours, office trips, and backpacking plans simple.",
    tag: "Groups",
    to: "/resort",
  },
  {
    title: "Jeep Safari",
    description:
      "Sunrise and sunset off-road drives covering Vagamon’s scenic spots, pine forest trails, and activity stops.",
    tag: "Adventure",
    to: "/safari",
  },
];

export const homeHeroBackgrounds = [
  "/assets/sg-holidays-resort-exterior.jpg",
  "/assets/sg-holidays-valley-balcony.jpg",
  "/assets/sg-holidays-pool-view.jpg",
  "/assets/sg-holidays-premium-bedroom.jpg",
];

export const testimonials = [
  {
    name: "Akhil & Sneha",
    title: "Honeymoon guests",
    quote:
      "The team planned our stay, safari, and sightseeing without any friction. It felt personal from the first call.",
  },
  {
    name: "Sherin Thomas",
    title: "Family traveler",
    quote:
      "We booked rooms for the family and a sunset jeep safari. The pacing was relaxed, and every stop felt worth it.",
  },
  {
    name: "Rejin Mathew",
    title: "Office trip organizer",
    quote:
      "Dorm stay for the team, campfire at night, safari the next morning. Clean execution and quick coordination on WhatsApp.",
  },
];

export const instagramPreview = [
  {
    src: "/assets/sg-holidays-resort-exterior.jpg",
    alt: "SG Holidays resort exterior at dusk in Vagamon",
    caption: "A real property exterior that guests can recognize on arrival.",
  },
  {
    src: "/assets/sg-holidays-valley-balcony.jpg",
    alt: "Valley-facing balcony view from SG Holidays",
    caption: "Wide hill views that turn the stay into more than just a room booking.",
  },
  {
    src: "/assets/sg-holidays-pool-view.jpg",
    alt: "Pool view at SG Holidays with surrounding Vagamon hills",
    caption: "Poolside leisure framed by the Vagamon hillside.",
  },
  {
    src: "/assets/sg-holidays-premium-bedroom.jpg",
    alt: "Premium bedroom interior at SG Holidays",
    caption: "Warm room styling that suits couples and premium leisure stays.",
  },
];

export const contactHeroBackgrounds = [
  "/assets/sg-holidays-valley-balcony.jpg",
  "/assets/sg-holidays-resort-exterior.jpg",
  "/assets/sg-holidays-pool-view.jpg",
  "/assets/sg-holidays-premium-bedroom.jpg",
];
