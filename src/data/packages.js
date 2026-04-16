export const packages = [
  {
    id: "couple-package",
    title: "Couple Package",
    idealFor: "Romantic escape",
    duration: "2 Days / 1 Night",
    price: "From ₹12,900",
    tagline:
      "A quiet Vagamon break with a scenic stay, handpicked sightseeing stops, and time carved out for two.",
    activities: [
      "Private resort stay",
      "Sunset jeep safari",
      "Campfire setup on request",
      "Sightseeing coordination",
    ],
    image: "/assets/sg-holidays-valley-balcony.jpg",
    featured: true,
  },
  {
    id: "family-tour",
    title: "Family Tour",
    idealFor: "Parents and kids",
    duration: "2 Days / 1 Night",
    price: "From ₹18,500",
    tagline:
      "A flexible family-friendly plan mixing room comfort, safe sightseeing, and light adventure without rushing the schedule.",
    activities: [
      "Family room or cottage stay",
      "Pine forest and meadow visit",
      "Adventure park stop",
      "Bonfire evening add-on",
    ],
    image: "/assets/sg-holidays-suite-lounge.jpg",
    featured: true,
  },
  {
    id: "honeymoon-package",
    title: "Honeymoon Package",
    idealFor: "Private premium trip",
    duration: "3 Days / 2 Nights",
    price: "From ₹24,900",
    tagline:
      "A more premium stay built around scenic privacy, custom sightseeing, and soft-touch hospitality.",
    activities: [
      "Luxury room stay",
      "Sunrise or sunset safari",
      "Decor support on request",
      "Tailored local sightseeing",
    ],
    image: "/assets/sg-holidays-premium-bedroom.jpg",
    featured: true,
  },
  {
    id: "office-tour",
    title: "Office Tour",
    idealFor: "Teams and outings",
    duration: "2 Days / 1 Night",
    price: "From ₹21,000",
    tagline:
      "Built for teams that want clean logistics, group accommodation, safari fun, and evening engagement in one booking.",
    activities: [
      "Dormitory or private stay mix",
      "Jeep safari slot booking",
      "DJ music setup",
      "Campfire and group coordination",
    ],
    image: "/assets/sg-holidays-resort-exterior.jpg",
    featured: false,
  },
];

export const featuredPackages = packages.filter((item) => item.featured);

export const packageHeroBackgrounds = packages.map((item) => item.image);
