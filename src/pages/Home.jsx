import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import PackageCard from "../components/PackageCard.jsx";
import Gallery from "../components/Gallery.jsx";
import { featuredPackages } from "../data/packages.js";
import {
  homeHeroBackgrounds,
  homeHighlights,
  instagramPreview,
  siteConfig,
  testimonials,
} from "../data/site.js";

export default function Home() {
  return (
    <main>
      <Hero
        eyebrow="Luxury rooms, safari and Vagamon tours"
        title="Luxury Rooms in Vagamon With Pool, Balcony Views, and Breakfast"
        description="SG Holidays leads with luxury rooms from ₹4,500 per room for up to 3 guests, with WiFi, pool access, parking, balcony views, hot water, and breakfast, while also handling jeep safari rides and curated holiday packages from the same team."
        primaryAction={{ label: "Book Stay", to: "/contact?service=Resort%20Stay" }}
        secondaryAction={{ label: "Book Jeep Safari", to: "/contact?service=Jeep%20Safari", variant: "light" }}
        backgroundImages={homeHeroBackgrounds}
        stats={[
          { label: "Price", value: "From ₹4,500 / room" },
          { label: "Capacity", value: "Up to 3 Guests" },
          { label: "Included", value: "WiFi, Pool, Breakfast" },
        ]}
        image="/assets/sg-holidays-resort-exterior.jpg"
        imageAlt="SG Holidays resort exterior in Vagamon"
        imageNote="The clearest room offer should surface pricing, guest count, and inclusions before the enquiry starts."
      />

      <section className="section-space">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Highlights
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              Start with the room offer most guests ask about, then add the rest of the trip.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#485851] md:text-lg">
              The homepage now makes the core stay product obvious first: luxury rooms with clear
              price, guest capacity, and inclusions, followed by safari bookings and package
              planning.
            </p>
            <Link to="/packages" className="btn-secondary mt-8">
              View Featured Packages
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {homeHighlights.map((item, index) => (
              <Link
                key={item.title}
                to={item.to}
                className={`group rounded-[28px] border border-[#0b3d2e]/10 bg-white/78 p-6 shadow-[0_16px_45px_rgba(6,32,24,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(6,32,24,0.12)] ${
                  index === 2 ? "md:col-span-2 xl:col-span-1" : ""
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6b736e]">
                  {item.tag}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#0b271f]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#485851]">{item.description}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-[#0b3d2e]">
                  Explore
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Featured Packages
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              Tour packages shaped around who is travelling, not generic brochure templates.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#485851] md:text-lg">
              Each plan can flex around stay type, safari timing, sightseeing pace, and guest mix.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredPackages.map((item) => (
              <PackageCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#0b3d2e] text-white">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-100/60">
              Testimonials
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Guests remember the coordination as much as the destination.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur"
              >
                <p className="text-lg leading-8 text-white/88">"{item.quote}"</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-sm text-white/55">{item.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr,1.15fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Instagram Preview
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              Keep the visual story active where travelers already research their weekend plans.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#485851] md:text-lg">
              The Instagram section gives the site a live, aspirational layer without breaking the
              conversion flow.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary mt-8"
            >
              Follow on Instagram
            </a>
          </div>

          <Gallery items={instagramPreview} compact />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[36px] bg-[#08261d] px-6 py-8 text-white shadow-[0_30px_90px_rgba(6,32,24,0.2)] md:px-10 md:py-12">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(214, 176, 106, 0.18), transparent 18%)",
              }}
            />
            <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr,auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-100/60">
                  Quick Booking CTA
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-4xl">
                  Ready to lock dates for your Vagamon stay or safari?
                </h2>
                <p className="mt-4 text-base leading-7 text-white/75">
                  The fastest lead path for SG Holidays is still a direct call or WhatsApp message.
                </p>
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
