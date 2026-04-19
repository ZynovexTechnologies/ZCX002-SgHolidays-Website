import Hero from "../components/Hero.jsx";
import RoomCard from "../components/RoomCard.jsx";
import Gallery from "../components/Gallery.jsx";
import {
  resortExtras,
  resortFeatures,
  resortGallery,
  resortHeroBackgrounds,
  rooms,
} from "../data/rooms.js";
import { siteConfig } from "../data/site.js";

export default function Resort() {
  return (
    <main>
      <Hero
        compact
        eyebrow="Homestay, cottage, and private villa stays in Vagamon"
        title="4 BHK Home Stay, 2 Bedroom Cottage, and Private Villa Options"
        description="SG Holidays now highlights three clear stay formats: a 4 BHK home stay for up to 15 guests, a 2 bedroom cottage for up to 6 guests, and a private villa with 4 bedrooms for up to 14 guests."
        primaryAction={{ label: "Book Now", to: "/contact?service=Resort%20Stay" }}
        secondaryAction={{ label: "WhatsApp Booking", href: siteConfig.whatsappLink, external: true, variant: "light" }}
        backgroundImages={resortHeroBackgrounds}
        image="/assets/sg-holidays-villa-exterior-front.jpeg"
        imageAlt="Private villa stay at SG Holidays in Vagamon"
        imageNote="The resort page should make the stay lineup obvious first: type, guest capacity, price range, and the practical inclusions guests actually compare."
      />

      <section className="section-space">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Accommodation Types
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              Three stay types built for different group sizes, view preferences, and privacy needs.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {rooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/45">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr,1fr]">
          {resortFeatures.map((item) => (
            <article
              key={item.title}
              className="rounded-[30px] border border-[#0b3d2e]/10 bg-white/75 p-7 shadow-[0_16px_45px_rgba(6,32,24,0.08)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6b736e]">
                Feature
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-[#0b271f]">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#485851]">{item.description}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[#224136]">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#0b3d2e]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Extras
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              The strongest advantages are the setting, group fit, and how private each stay feels.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {resortExtras.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] border border-[#0b3d2e]/10 bg-white/78 p-7 shadow-[0_16px_45px_rgba(6,32,24,0.08)]"
              >
                <h3 className="text-2xl font-semibold text-[#0b271f]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#485851]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#0b3d2e] text-white">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-100/60">
              Pricing Snapshot
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Let guests compare the stay type, starting price, and capacity before they enquire.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {rooms.map((room) => (
              <article
                key={room.id}
                className="rounded-[26px] border border-white/10 bg-white/8 p-5 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">{room.label}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{room.name}</h3>
                <p className="mt-4 text-lg font-semibold text-[#d6b06a]">{room.price}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{room.capacity}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Image Gallery
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              Real property photos for the interiors, balcony views, tea slopes, and villa exterior.
            </h2>
          </div>
          <div className="mt-10">
            <Gallery items={resortGallery} />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="section-shell">
          <div className="rounded-[36px] bg-[#08261d] px-6 py-8 text-white shadow-[0_30px_90px_rgba(6,32,24,0.2)] md:px-10 md:py-12">
            <div className="grid gap-6 lg:grid-cols-[1fr,auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-100/60">
                  Book Your Stay
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-4xl">
                  Share your dates and guest count first. The team can point you to the right stay type quickly.
                </h2>
              </div>
              <div className="cta-row">
                <a href={siteConfig.callLink} className="btn-light">
                  Call Now
                </a>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary btn-whatsapp"
                >
                  WhatsApp Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
