export const siteConfig = {
  brand: "SG Holidays",
  region: "Vagamon, Kerala",
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
    title: "Luxury Resort",
    description:
      "Premium hill-facing stays with private room options, cottages, and quiet corners built for comfort.",
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
    src: "/assets/hero-forest-cabin.jpg",
    alt: "Hill-view stay at SG Holidays in Vagamon",
    caption: "Premium stays with valley-facing energy.",
  },
  {
    src: "/assets/hero-safari-jeep.jpg",
    alt: "Jeep safari ride through scenic Vagamon trails",
    caption: "Off-road mornings built for Vagamon weather.",
  },
  {
    src: "/assets/room-suite-1.jpg",
    alt: "Luxury room interior at SG Holidays",
    caption: "Comfort-first rooms for couples and families.",
  },
  {
    src: "/assets/forest-river.jpg",
    alt: "Green landscape near Vagamon attractions",
    caption: "Nature-heavy stops between activity points.",
  },
];
