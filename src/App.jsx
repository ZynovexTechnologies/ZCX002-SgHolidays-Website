import ImageSlider from "./components/ImageSlider.jsx";
import SectionHeader from "./components/SectionHeader.jsx";

const brandName = "SG Holidays";
const contactEmail = "sandeepunni163@gmail.com";
const locationDisplay = "Vagamon, Kerala, India";
const mapLocation = "Vagamon, Kerala";
const contactPhoneDisplay = "+91 82819 95008";
const contactPhoneDigits = "918281995008";
const contactEmailHref = `mailto:${contactEmail}`;
const contactPhoneHref = `tel:+${contactPhoneDigits}`;
const contactWhatsappHref = `https://wa.me/${contactPhoneDigits}`;
const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapLocation)}&output=embed`;

const heroImages = [
  {
    src: "/assets/hero-safari-jeep.jpg",
    alt: "Jeep safari trail at sunrise",
  },
  {
    src: "/assets/hero-safari-savanna.jpg",
    alt: "Safari jeep driving through the savanna",
  },
  {
    src: "/assets/hero-forest-cabin.jpg",
    alt: "Luxury jungle lodge surrounded by forest",
  },
];

const rooms = [
  {
    name: "Deluxe Jungle Room",
    price: "12,500",
    description:
      "Elegant canopy-facing rooms with earthy textures, artisan furniture, and quiet verandas for morning bird calls.",
    amenities: [
      "King bed with organic linens",
      "Private balcony with forest views",
      "Rain shower and herbal amenities",
      "Evening tea service",
    ],
    images: [
      {
        src: "/assets/room-deluxe-1.jpg",
        alt: "Deluxe jungle room with balcony",
      },
      {
        src: "/assets/room-deluxe-2.jpg",
        alt: "Rustic wooden room with warm textures",
      },
    ],
  },
  {
    name: "Family Cottage",
    price: "16,800",
    description:
      "Spacious cottages designed for families, with a private lounge and outdoor deck for shared jungle stories.",
    amenities: [
      "Two bedrooms with lounge area",
      "Private deck and hammock",
      "Indoor fireplace for cool evenings",
      "Kids safari discovery kit",
    ],
    images: [
      {
        src: "/assets/room-family-1.jpg",
        alt: "Family cottage interior with wood paneling",
      },
      {
        src: "/assets/room-family-2.jpg",
        alt: "Warm wooden cottage seating area",
      },
    ],
  },
  {
    name: "Luxury Safari Suite",
    price: "24,500",
    description:
      "Signature suites with panoramic glass, personal butler service, and a private plunge pool overlooking the reserve.",
    amenities: [
      "Panoramic glass lounge",
      "Private plunge pool",
      "Butler on call",
      "In-suite dining experience",
    ],
    images: [
      {
        src: "/assets/room-suite-1.jpg",
        alt: "Luxury safari suite lounge",
      },
      {
        src: "/assets/room-suite-2.jpg",
        alt: "Suite interior with rustic beams",
      },
    ],
  },
];

const safariPackages = [
  {
    title: "Morning Safari",
    price: "2,500",
    detail: "Golden hour tracks with expert naturalists and hot chai on return.",
    image: "/assets/hero-safari-jeep.jpg",
  },
  {
    title: "Evening Safari",
    price: "2,500",
    detail: "Sunset drives with dramatic light and a pause at the watering hole.",
    image: "/assets/hero-safari-savanna.jpg",
  },
  {
    title: "Full Day Safari",
    price: "4,500",
    detail: "Full-day immersion with packed breakfast, lunch stop, and tracker team.",
    image: "/assets/wildlife-tiger.jpg",
  },
];

const galleryImages = [
  {
    src: "/assets/wildlife-tiger.jpg",
    alt: "Tiger in the jungle",
  },
  {
    src: "/assets/wildlife-elephant.jpg",
    alt: "Elephant walking through the forest",
  },
  {
    src: "/assets/wildlife-bird.jpg",
    alt: "Bird perched in the canopy",
  },
  {
    src: "/assets/hero-safari-jeep.jpg",
    alt: "Safari jeep on a trail",
  },
  {
    src: "/assets/hero-safari-savanna.jpg",
    alt: "Safari jeep on the savanna",
  },
  {
    src: "/assets/forest-river.jpg",
    alt: "River winding through the jungle",
  },
  {
    src: "/assets/hero-forest-cabin.jpg",
    alt: "Forest lodge surrounded by greenery",
  },
  {
    src: "/assets/room-deluxe-1.jpg",
    alt: "Resort suite interior",
  },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    text: "The jeep safari felt private and unrushed. Every drive delivered a new moment of wonder.",
  },
  {
    name: "Rhea Kapoor",
    text: "Our cottage was serene and luxurious. Waking up to birdsong was unforgettable.",
  },
  {
    name: "Daniel Smith",
    text: "Impeccable service, eco-conscious details everywhere, and the best wildlife sightings I have had in India.",
  },
];

const contactOptions = [
  {
    label: "Email",
    value: contactEmail,
    href: contactEmailHref,
    icon: "email",
  },
  {
    label: "Phone",
    value: contactPhoneDisplay,
    href: contactPhoneHref,
    icon: "phone",
  },
  {
    label: "Instagram",
    value: "Instagram",
    href: "https://instagram.com/verdantmajesty",
    icon: "instagram",
  },
  {
    label: "WhatsApp",
    value: contactPhoneDisplay,
    href: contactWhatsappHref,
    icon: "whatsapp",
  },
];

function ContactIcon({ type }) {
  switch (type) {
    case "email":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="m22 8-10 6L2 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.63a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.44-1.15a2 2 0 0 1 2.11-.45c.85.28 1.73.48 2.63.6A2 2 0 0 1 22 16.9Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="2.5"
            y="2.5"
            width="19"
            height="19"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle
            cx="12"
            cy="12"
            r="3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21 12a8.5 8.5 0 0 1-12.5 7.5L3 21l1.7-5.4A8.5 8.5 0 1 1 21 12Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.3 9.1c.3-.6.6-.7 1-.7.3 0 .5 0 .7 0 .2 0 .5 0 .7.5.2.5.8 1.7.9 1.8.1.1.1.3 0 .5-.1.2-.2.3-.3.5-.1.1-.2.2-.4.4-.1.1-.3.2-.1.5.2.3.7 1.2 1.6 2 .9.8 1.6 1.1 1.9 1.2.3.1.4.1.6-.1.2-.2.6-.7.8-1 .2-.3.3-.2.5-.1.2.1 1.4.7 1.6.8.2.1.4.2.4.3 0 .1 0 .7-.3 1.4-.3.7-1.6 1.3-2.2 1.4-.6.1-1.2.1-2-.1-.8-.2-1.9-.7-3.2-1.8-1.4-1.1-2.3-2.5-2.6-3-.3-.6-.6-1.2-.6-1.8 0-.6.2-1.2.5-1.7Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container nav-shell">
          <a className="logo" href="#home">
            {brandName}
          </a>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#rooms">Rooms</a>
            <a href="#safari">Safari Rides</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-ghost" href="#contact">
            Book Stay
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <ImageSlider images={heroImages} className="hero-slider" height="78vh">
            <div className="hero-content">
              <p className="eyebrow">Luxury Eco Safari Resort</p>
              <h1>{brandName}</h1>
              <p className="hero-subtitle">
                A secluded wildlife lodge offering private jeep safaris, curated nature stays, and
                restorative jungle living.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#safari">
                  Book Safari
                </a>
                <a className="btn btn-outline" href="#rooms">
                  View Rooms
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Contact
                </a>
              </div>
              <div className="hero-highlights">
                <div>
                  <p className="highlight-value">45</p>
                  <p className="highlight-label">Private Acres</p>
                </div>
                <div>
                  <p className="highlight-value">2x</p>
                  <p className="highlight-label">Daily Safaris</p>
                </div>
                <div>
                  <p className="highlight-value">Eco</p>
                  <p className="highlight-label">Luxury Living</p>
                </div>
              </div>
            </div>
          </ImageSlider>
        </section>

        <section className="page-section">
          <div className="container grid two-col">
            <SectionHeader
              eyebrow="Welcome"
              title="A refined jungle retreat crafted for wildlife lovers."
              subtitle={`${brandName} pairs silent luxury with the thrill of guided safaris, night skies, and river trails.`}
            />
            <div className="intro-cards">
              <article className="surface-card">
                <h3>Eco-first Design</h3>
                <p>
                  Low-impact architecture, solar power, and locally crafted interiors that keep the
                  forest in balance.
                </p>
              </article>
              <article className="surface-card">
                <h3>Curated Nature Stays</h3>
                <p>
                  Seasonal menus, spa rituals, and outdoor lounges designed for deep restoration.
                </p>
              </article>
              <article className="surface-card">
                <h3>Expert Naturalists</h3>
                <p>
                  Certified trackers guide every drive, sharing stories of the land and its wildlife.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="page-section featured-safari">
          <div className="container grid two-col">
            <div className="featured-media">
              <img
                src="/assets/hero-safari-jeep.jpg"
                alt="Jeep safari on a forest trail"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="featured-content">
              <SectionHeader
                eyebrow="Featured Safari"
                title="Sunrise jeep safaris with exclusive trackers."
                subtitle="Start before dawn, follow fresh tracks, and return to a gourmet breakfast. Each ride is
                  limited to preserve serenity and sightings."
              />
              <div className="feature-list">
                <div>
                  <p className="feature-title">Small groups only</p>
                  <p>Two jeeps per trail, max privacy for the wildlife.</p>
                </div>
                <div>
                  <p className="feature-title">Comfort-first vehicles</p>
                  <p>Open-air seating, blankets, and onboard refreshments.</p>
                </div>
                <div>
                  <p className="feature-title">Golden hour routes</p>
                  <p>Routes designed for best visibility and photography.</p>
                </div>
              </div>
              <a className="btn btn-primary" href="#safari">
                View Safari Packages
              </a>
            </div>
          </div>
        </section>

        <section className="page-section" aria-labelledby="rooms-preview">
          <div className="container">
            <SectionHeader
              eyebrow="Rooms Preview"
              title="Suites designed for comfort, calm, and canopy views."
              subtitle="Three categories of stays, each layered with sustainable luxury and thoughtful amenities."
            />
            <div className="grid room-preview-grid">
              {rooms.map((room) => (
                <article key={room.name} className="room-preview-card">
                  <img
                    src={room.images[0].src}
                    alt={room.images[0].alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="room-preview-body">
                    <h3>{room.name}</h3>
                    <p>{room.description}</p>
                    <p className="price">
                      &#8377;{room.price} / night
                    </p>
                    <a className="text-link" href="#rooms">
                      View details
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section gallery-preview">
          <div className="container">
            <div className="flex-between">
              <SectionHeader
                eyebrow="Gallery Preview"
                title="Wildlife moments, forest textures, and safari trails."
                subtitle="A glimpse into the sights that shape every stay."
              />
              <a className="btn btn-outline" href="#gallery">
                View Full Gallery
              </a>
            </div>
            <div className="gallery-grid preview-grid">
              {galleryImages.slice(0, 6).map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="page-section testimonials">
          <div className="container">
            <SectionHeader
              eyebrow="Guest Stories"
              title="Memorable stays from travelers who love the wild."
              subtitle="Thoughts from guests who came for the safari and stayed for the calm."
            />
            <div className="grid testimonial-grid">
              {testimonials.map((item) => (
                <article key={item.name} className="surface-card testimonial-card">
                  <p className="testimonial-text">"{item.text}"</p>
                  <p className="testimonial-name">{item.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section cta-section">
          <div className="container cta-card">
            <div>
              <p className="eyebrow">Reserve Your Stay</p>
              <h2>Luxury in the wild, tailored to your rhythm.</h2>
              <p>
                Secure your preferred dates, select your safari schedule, and let us craft a bespoke
                nature escape.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="#contact">
                Start Booking
              </a>
              <a className="btn btn-outline" href="#rooms">
                Explore Rooms
              </a>
            </div>
          </div>
        </section>

        <section id="rooms" className="page-section rooms-section">
          <div className="container">
            <SectionHeader
              eyebrow="Rooms"
              title="Choose the stay that fits your safari pace."
              subtitle="Each category includes curated amenities, premium linens, and immersive jungle views."
            />
            <div className="room-detail-grid">
              {rooms.map((room) => (
                <article key={room.name} className="room-detail-card">
                  <ImageSlider
                    images={room.images}
                    auto={false}
                    showControls
                    overlay={false}
                    className="room-slider"
                  />
                  <div className="room-detail-content">
                    <h3>{room.name}</h3>
                    <p>{room.description}</p>
                    <ul className="amenity-list">
                      {room.amenities.map((amenity) => (
                        <li key={amenity}>{amenity}</li>
                      ))}
                    </ul>
                    <div className="room-detail-footer">
                      <p className="price">
                        &#8377;{room.price} / night
                      </p>
                      <a className="btn btn-primary" href="#contact">
                        Book Room
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="safari" className="page-section safari-section">
          <div className="container">
            <SectionHeader
              eyebrow="Safari Rides"
              title="Jeep safaris designed for comfort, safety, and wildlife sightings."
              subtitle="Our open-air vehicles and expert trackers take you deep into the reserve, with natural
                breaks for photography and quiet observation."
            />
            <div className="safari-grid">
              <div className="safari-text">
                <h3>What to expect</h3>
                <p>
                  Each safari includes a licensed driver, seasoned naturalist, refreshments, and a
                  curated route based on recent wildlife movement. Private rides are available on
                  request.
                </p>
                <ul className="amenity-list">
                  <li>Comfort seating with blankets</li>
                  <li>Sunset refreshments</li>
                  <li>High-visibility trails</li>
                  <li>Eco-conscious tracking</li>
                </ul>
              </div>
              <div className="safari-media">
                <img
                  src="/assets/hero-safari-savanna.jpg"
                  alt="Jeep safari vehicle in the reserve"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="grid safari-card-grid">
              {safariPackages.map((pkg) => (
                <article key={pkg.title} className="surface-card safari-card">
                  <img src={pkg.image} alt={pkg.title} loading="lazy" decoding="async" />
                  <div className="safari-card-body">
                    <h3>{pkg.title}</h3>
                    <p>{pkg.detail}</p>
                    <p className="price">
                      &#8377;{pkg.price} per jeep
                    </p>
                    <a className="btn btn-outline" href="#contact">
                      Reserve Safari
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="page-section gallery-section">
          <div className="container">
            <SectionHeader
              eyebrow="Gallery"
              title="Wildlife, forest light, and safari experiences."
              subtitle="Explore the moments that define our jungle resort."
            />
            <div className="gallery-grid">
              {galleryImages.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="page-section contact-section">
          <div className="container">
            <SectionHeader
              eyebrow="Contact"
              title="Plan your safari stay with our concierge."
              subtitle="Choose your dates, safari timing, and room category. We respond within 12 hours."
            />
            <div className="grid contact-grid">
              {contactOptions.map((option) => (
                <a
                  key={option.label}
                  className="contact-card"
                  href={option.href}
                  target={option.label === "Email" || option.label === "Phone" ? "_self" : "_blank"}
                  rel="noreferrer"
                >
                  <span className="contact-icon" aria-hidden="true">
                    <ContactIcon type={option.icon} />
                  </span>
                  <p className="contact-label">{option.label}</p>
                  <p className="contact-value">{option.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="map" className="page-section map-section">
          <div className="container">
            <SectionHeader
              eyebrow="Map Location"
              title="Find us in Vagamon, Kerala."
              subtitle="Located in Vagamon with scenic hill roads and easy access from nearby towns."
            />
            <div className="map-frame">
              <iframe
                title={`${brandName}, Vagamon, Kerala`}
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-title">{brandName}</p>
            <p>{locationDisplay}</p>
          </div>
          <div>
            <p className="footer-title">Contact</p>
            <p>{contactEmail}</p>
            <p>{contactPhoneDisplay}</p>
          </div>
          <div>
            <p className="footer-title">Instagram</p>
            <a href="https://instagram.com/verdantmajesty" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <p className="footer-bottom">
          Copyright 2026 {brandName}. All rights reserved.
        </p>
      </footer>

      <a className="whatsapp-float" href={contactWhatsappHref} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}

export default App;
