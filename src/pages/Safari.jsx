import Hero from "../components/Hero.jsx";
import SafariCard from "../components/SafariCard.jsx";
import Gallery from "../components/Gallery.jsx";
import { safariGallery, safariPackages, safariRides, sightseeingSpots } from "../data/safari.js";
import { siteConfig } from "../data/site.js";

export default function Safari() {
  return (
    <main>
      <Hero
        compact
        eyebrow="Jeep safari in Vagamon"
        title="Off-Road Jeep Safari Rides Built Around Vagamon’s Best Scenic Stops"
        description="The safari page is structured to sell both timing-based rides and full sightseeing value. It covers sunrise and sunset experiences, the stop list, and package-based reservation options without making the user hunt for next steps."
        primaryAction={{ label: "Reserve Safari", to: "/contact?service=Jeep%20Safari" }}
        secondaryAction={{ label: "WhatsApp Booking", href: siteConfig.whatsappLink, external: true, variant: "light" }}
        image="/assets/hero-safari-jeep.jpg"
        imageAlt="Jeep safari in Vagamon"
        imageNote="Adventure, scenery, and direct booking intent all need to show up above the fold."
      />

      <section className="section-space">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Off-Road Rides
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              Two core ride timings that handle the strongest jeep safari demand.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {safariRides.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] border border-[#0b3d2e]/10 bg-white/80 p-7 shadow-[0_16px_45px_rgba(6,32,24,0.08)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6b736e]">
                  {item.timing}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-[#0b271f]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#485851]">{item.description}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-[#224136]">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#0b3d2e]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/45">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Sightseeing Stops
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              Pine Forest to Tea Lake Boating, the route story is part of the offer.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sightseeingSpots.map((spot) => (
              <article
                key={spot.name}
                className="rounded-[28px] border border-[#0b3d2e]/10 bg-white/78 p-6 shadow-[0_16px_45px_rgba(6,32,24,0.08)]"
              >
                <h3 className="text-2xl font-semibold text-[#0b271f]">{spot.name}</h3>
                <p className="mt-4 text-sm leading-6 text-[#485851]">{spot.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Safari Packages
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              Ready-to-book safari formats for fast decisions and faster enquiries.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {safariPackages.map((item) => (
              <SafariCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Gallery
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              Use imagery here to sell trail mood, not just vehicle availability.
            </h2>
          </div>
          <div className="mt-10">
            <Gallery items={safariGallery} />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="section-shell">
          <div className="rounded-[36px] bg-[#08261d] px-6 py-8 text-white shadow-[0_30px_90px_rgba(6,32,24,0.2)] md:px-10 md:py-12">
            <div className="grid gap-6 lg:grid-cols-[1fr,auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-100/60">
                  Safari CTA
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-4xl">
                  Lock the safari slot first. The best timings usually become the fastest-moving inventory.
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
