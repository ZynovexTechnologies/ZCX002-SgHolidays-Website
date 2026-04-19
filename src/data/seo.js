import { siteConfig } from "./site.js";

const sharedKeywords = [
  "SG Holidays Vagamon",
  "Vagamon resort stay",
  "Vagamon homestay",
  "Vagamon cottage stay",
  "Vagamon private villa",
  "Vagamon jeep safari",
  "Vagamon tour packages",
  "Vagamon stay booking",
  "Vagamon honeymoon package",
  "Vagamon family trip",
  "Vagamon group stay",
];

const pageConfigs = {
  "/": {
    title: "Vagamon Homestay, Cottage & Private Villa | Jeep Safari & Tour Packages | SG Holidays",
    heading: "SG Holidays Vagamon",
    breadcrumb: "Home",
    description:
      "Book a 4 BHK home stay, 2 bedroom cottage, or private villa in Vagamon with balcony views, privacy, breakfast, kitchen access, jeep safari rides, and holiday packages at SG Holidays.",
    keywords: [
      ...sharedKeywords,
      "Vagamon resort booking",
      "Vagamon balcony view stay",
      "Vagamon group villa",
      "Vagamon family homestay",
      "Kerala hill station stay",
      "Vagamon safari booking",
    ],
    image: siteConfig.defaultOgImage,
    imageAlt: siteConfig.defaultOgImageAlt,
    primaryImage: "/assets/sg-holidays-villa-exterior-front.jpeg",
    webPageType: "WebPage",
  },
  "/resort": {
    title: "Homestay, Cottage & Private Villa in Vagamon | SG Holidays",
    heading: "Homestay, Cottage & Private Villa in Vagamon",
    breadcrumb: "Resort",
    description:
      "Explore SG Holidays 4 BHK home stay, 2 bedroom cottage, and private 4 bedroom villa in Vagamon with privacy, balcony views, breakfast, parking, kitchen access, and tea plantation scenery.",
    keywords: [
      ...sharedKeywords,
      "Vagamon homestay booking",
      "Vagamon cottage booking",
      "Vagamon villa booking",
      "Vagamon breakfast stay",
      "Vagamon balcony view stay",
      "Vagamon cottages",
      "family resort Vagamon",
    ],
    image: siteConfig.defaultOgImage,
    imageAlt: siteConfig.defaultOgImageAlt,
    primaryImage: "/assets/sg-holidays-villa-exterior-front.jpeg",
    webPageType: "CollectionPage",
    serviceName: "Resort Stay Booking",
    serviceType: "Resort stay booking in Vagamon",
    category: "Accommodation",
  },
  "/safari": {
    title: "Jeep Safari in Vagamon | Local Sightseeing, Idukki Routes & Ulupunni Off-Road | SG Holidays",
    heading: "Jeep Safari in Vagamon",
    breadcrumb: "Jeep Safari",
    description:
      "Plan jeep safari and sightseeing in Vagamon with local stops, pilgrimage hills, Idukki dam-side routes, Anchuruli Tunnel, and Ulupunni off-road trails through SG Holidays.",
    keywords: [
      ...sharedKeywords,
      "Vagamon local sightseeing",
      "Vagamon off road jeep ride",
      "Vagamon sightseeing jeep safari",
      "Ulupunni off road",
      "Anchuruli tunnel trip",
      "Vagamon pine valley",
    ],
    image: siteConfig.defaultOgImage,
    imageAlt: siteConfig.defaultOgImageAlt,
    primaryImage: "/assets/vagamon-pine-forest.jpeg",
    webPageType: "CollectionPage",
    serviceName: "Jeep Safari Booking",
    serviceType: "Sightseeing jeep safari booking in Vagamon",
    category: "Sightseeing and Adventure Travel",
  },
  "/packages": {
    title: "Vagamon Tour Packages | Couple, Family & Group Trips | SG Holidays",
    heading: "Vagamon Tour Packages",
    breadcrumb: "Packages",
    description:
      "Compare couple packages, family tours, honeymoon plans, and office trip options in Vagamon with stay, safari, and sightseeing support from SG Holidays.",
    keywords: [
      ...sharedKeywords,
      "Vagamon couple package",
      "Vagamon honeymoon package",
      "Vagamon family package",
      "Vagamon office tour package",
    ],
    image: siteConfig.defaultOgImage,
    imageAlt: siteConfig.defaultOgImageAlt,
    primaryImage: "/assets/sg-holidays-villa-exterior-front.jpeg",
    webPageType: "CollectionPage",
    serviceName: "Holiday Package Planning",
    serviceType: "Holiday package planning in Vagamon",
    category: "Tour Packages",
  },
  "/contact": {
    title: "Contact SG Holidays Vagamon | Call, WhatsApp & Booking Enquiries",
    heading: "Contact SG Holidays",
    breadcrumb: "Contact",
    description:
      "Call, WhatsApp, email, or send your travel plan to SG Holidays for Vagamon resort stays, jeep safari bookings, and holiday package enquiries.",
    keywords: [
      ...sharedKeywords,
      "contact SG Holidays Vagamon",
      "Vagamon booking enquiry",
      "Vagamon WhatsApp booking",
      "Vagamon travel contact",
    ],
    image: siteConfig.defaultOgImage,
    imageAlt: siteConfig.defaultOgImageAlt,
    primaryImage: "/assets/sg-holidays-covered-balcony-view.jpeg",
    webPageType: "ContactPage",
  },
};

export const seoRoutes = ["/", "/resort", "/safari", "/packages", "/contact"];

function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function normalizeBaseUrl(value) {
  return value ? value.replace(/\/+$/, "") : "";
}

export function resolveSiteOrigin(origin = "") {
  return normalizeBaseUrl(siteConfig.siteUrl || origin);
}

export function buildUrl(pathname, origin = "") {
  if (/^https?:\/\//i.test(pathname)) {
    return pathname;
  }

  const base = resolveSiteOrigin(origin);

  if (!base) {
    return pathname;
  }

  return new URL(pathname, `${base}/`).toString();
}

function buildWebsiteSchema(origin = "") {
  const homeUrl = buildUrl("/", origin);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${homeUrl}#website`,
    name: siteConfig.siteName,
    description: siteConfig.businessDescription,
    url: homeUrl,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${homeUrl}#business`,
    },
  };
}

function buildBusinessSchema(origin = "") {
  const homeUrl = buildUrl("/", origin);

  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${homeUrl}#business`,
    name: siteConfig.siteName,
    description: siteConfig.businessDescription,
    url: homeUrl,
    logo: buildUrl(siteConfig.logoPath, origin),
    image: [
      buildUrl(siteConfig.defaultOgImage, origin),
      buildUrl("/assets/sg-holidays-villa-exterior-front.jpeg", origin),
    ],
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vagamon",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Place",
      name: "Vagamon, Kerala, India",
    },
    sameAs: [siteConfig.instagram, siteConfig.facebook],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: siteConfig.phoneDisplay,
        email: siteConfig.email,
        areaServed: "IN",
        availableLanguage: "English",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SG Holidays travel services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Homestay, cottage, and villa stays in Vagamon",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jeep safari rides in Vagamon",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Couple, family, and group tour packages in Vagamon",
          },
        },
      ],
    },
  };
}

function buildWebPageSchema(pathname, config, origin = "") {
  const homeUrl = buildUrl("/", origin);
  const pageUrl = buildUrl(pathname, origin);

  return {
    "@context": "https://schema.org",
    "@type": config.webPageType || "WebPage",
    name: config.heading,
    description: config.description,
    url: pageUrl,
    inLanguage: "en-IN",
    isPartOf: {
      "@id": `${homeUrl}#website`,
    },
    about: {
      "@id": `${homeUrl}#business`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: buildUrl(config.primaryImage || siteConfig.defaultOgImage, origin),
    },
  };
}

function buildServiceSchema(pathname, config, origin = "") {
  if (!config.serviceType) {
    return null;
  }

  const homeUrl = buildUrl("/", origin);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.serviceName,
    description: config.description,
    serviceType: config.serviceType,
    category: config.category,
    provider: {
      "@id": `${homeUrl}#business`,
    },
    areaServed: {
      "@type": "Place",
      name: "Vagamon, Kerala, India",
    },
    url: buildUrl(pathname, origin),
    image: buildUrl(config.primaryImage || siteConfig.defaultOgImage, origin),
  };
}

function buildBreadcrumbSchema(pathname, config, origin = "") {
  const trail = [{ name: "Home", path: "/" }];

  if (pathname !== "/") {
    trail.push({ name: config.breadcrumb, path: pathname });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildUrl(item.path, origin),
    })),
  };
}

function buildSchemas(pathname, config, origin = "") {
  const schemas = [];

  if (pathname === "/") {
    schemas.push(buildWebsiteSchema(origin), buildBusinessSchema(origin));
  }

  schemas.push(buildWebPageSchema(pathname, config, origin));
  schemas.push(buildBreadcrumbSchema(pathname, config, origin));

  const serviceSchema = buildServiceSchema(pathname, config, origin);
  if (serviceSchema) {
    schemas.push(serviceSchema);
  }

  return schemas;
}

export function getPageSeo(pathname = "/", origin = "") {
  const route = normalizePath(pathname);
  const config = pageConfigs[route] || pageConfigs["/"];

  return {
    ...config,
    pathname: route,
    canonical: buildUrl(route, origin),
    url: buildUrl(route, origin),
    image: buildUrl(config.image || siteConfig.defaultOgImage, origin),
    imageAlt: config.imageAlt || siteConfig.defaultOgImageAlt,
    keywords: config.keywords.join(", "),
    type: "website",
    locale: siteConfig.locale,
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    themeColor: siteConfig.themeColor,
    siteName: siteConfig.siteName,
    twitterCard: "summary_large_image",
    imageWidth: "1200",
    imageHeight: "630",
    schemas: buildSchemas(route, config, origin),
  };
}
