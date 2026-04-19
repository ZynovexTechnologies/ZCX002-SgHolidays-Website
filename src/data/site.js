export const siteConfig = {
  brand: "SG Holidays",
  siteName: "SG Holidays Vagamon",
  tagline: "Homestay, cottage, villa stays, jeep safari rides, and curated Vagamon tour packages.",
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
    "SG Holidays helps guests book a 4 BHK home stay for up to 15 guests, a 2 bedroom cottage for up to 6 guests, and a private 4 bedroom villa for up to 14 guests in Vagamon, alongside jeep safari rides and curated holiday packages from one contact point.",
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
    title: "Group Stay Options",
    description:
      "Choose between a 4 BHK home stay for up to 15 guests and a private 4 bedroom villa for up to 14 guests, both built for stronger privacy.",
    tag: "Stay",
    to: "/resort",
  },
  {
    title: "2 Bedroom Cottage",
    description:
      "A plantation-facing cottage for up to 6 guests with WiFi, breakfast, dining area, and a quieter Vagamon mood.",
    tag: "Cottage",
    to: "/resort",
  },
  {
    title: "Jeep Safari",
    description:
      "Scenic jeep routes covering Vagamon sightseeing, pilgrimage hills, Idukki viewpoints, and Ulupunni off-road stretches.",
    tag: "Adventure",
    to: "/safari",
  },
];

export const homeHeroBackgrounds = [
  "/assets/sg-holidays-villa-exterior-front.jpeg",
  "/assets/sg-holidays-tea-estate-view.jpeg",
  "/assets/sg-holidays-covered-balcony-view.jpeg",
  "/assets/sg-holidays-living-dining-room.jpeg",
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
    src: "/assets/sg-holidays-villa-exterior-front.jpeg",
    alt: "Front exterior of the SG Holidays villa in Vagamon",
    caption: "The villa exterior sets the tone for private group stays before the enquiry even starts.",
  },
  {
    src: "/assets/sg-holidays-covered-balcony-view.jpeg",
    alt: "Covered balcony view from the SG Holidays property",
    caption: "Balcony-facing hill views are one of the easiest reasons the stay mix feels premium.",
  },
  {
    src: "/assets/sg-holidays-tea-estate-view.jpeg",
    alt: "Tea estate view from the SG Holidays cottage side",
    caption: "Tea plantation scenery gives the cottage offer a clearer Vagamon identity.",
  },
  {
    src: "/assets/sg-holidays-living-dining-room.jpeg",
    alt: "Living and dining space inside the SG Holidays homestay",
    caption: "Shared interiors help larger families picture the stay as a full-property booking.",
  },
];

export const contactHeroBackgrounds = [
  "/assets/sg-holidays-covered-balcony-view.jpeg",
  "/assets/sg-holidays-villa-exterior-front.jpeg",
  "/assets/sg-holidays-tea-estate-view.jpeg",
  "/assets/sg-holidays-living-dining-room.jpeg",
];
