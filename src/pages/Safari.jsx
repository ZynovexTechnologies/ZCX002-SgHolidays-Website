import Hero from "../components/Hero.jsx";
import {
  idukkiRouteStops,
  idukkiSpotlights,
  localSightseeingSpots,
  localSightseeingMeta,
  safariHeroBackgrounds,
  safariHeroStats,
  safariRouteCollections,
  signatureViewpoints,
  ulupunniMeta,
  ulupunniRoute,
} from "../data/safari.js";
import { siteConfig } from "../data/site.js";

function RouteCard({ route }) {
  return (
    <article className="rounded-[30px] border border-[#0b3d2e]/10 bg-white/82 p-6 shadow-[0_16px_45px_rgba(6,32,24,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6b736e]">
        {route.label}
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-[#0b271f]">{route.title}</h3>
      <p className="mt-4 text-sm leading-6 text-[#485851]">{route.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {route.stops.map((stop) => (
          <span
            key={stop}
            className="rounded-full bg-[#0b3d2e]/7 px-3 py-2 text-xs font-medium text-[#224136]"
          >
            {stop}
          </span>
        ))}
      </div>
    </article>
  );
}

function StopCard({ spot, tone = "default" }) {
  const imageHeight = tone === "feature" ? "h-80" : "h-64";

  return (
    <article className="group overflow-hidden rounded-[30px] border border-[#0b3d2e]/10 bg-white/85 shadow-[0_16px_45px_rgba(6,32,24,0.08)]">
      <div className="relative overflow-hidden">
        <img
          src={spot.src}
          alt={spot.alt}
          loading="lazy"
          className={`w-full object-cover transition duration-700 group-hover:scale-105 ${imageHeight}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061d16]/78 via-[#061d16]/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-2xl font-semibold text-white">{spot.name}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm leading-6 text-[#485851]">{spot.detail}</p>
      </div>
    </article>
  );
}

export default function Safari() {
  return (
    <main>
      <Hero
        compact
        eyebrow="Jeep safari and sightseeing in Vagamon"
        title="Scenic Jeep Routes Across Vagamon, Idukki, and Ulupunni"
        description="Plan one route around the places guests actually ask for: Vagamon local sightseeing, deeper Idukki stops, signature hilltop viewpoints, and rougher off-road stretches that still feel scenic from start to finish."
        primaryAction={{ label: "Plan Sightseeing Ride", to: "/contact?service=Jeep%20Safari" }}
        secondaryAction={{
          label: "WhatsApp Booking",
          href: siteConfig.whatsappLink,
          external: true,
          variant: "light",
        }}
        backgroundImages={safariHeroBackgrounds}
        stats={safariHeroStats}
      />

      <section className="section-space">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Route Overview
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              Choose the route by mood first, then build the stop list around it.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#485851]">
              The page is now organised around the real sightseeing routes: local Vagamon stops,
              deeper Idukki views, signature hilltop viewpoints, and Ulupunni off-road sections.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {safariRouteCollections.map((route) => (
              <RouteCard key={route.title} route={route} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/45">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Local Sightseeing
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              Tea Lake, meadows, pine slopes, and Vagamon's three pilgrimage hills in one local circuit.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#485851]">
              This side of the ride keeps the mood varied without sending guests too far out. It
              mixes softer family stops with the three pilgrimage hills that give Vagamon its sense
              of spiritual harmony.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {localSightseeingMeta.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#0b3d2e]/7 px-4 py-2 text-sm font-medium text-[#224136]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {localSightseeingSpots.map((spot) => (
              <StopCard key={spot.name} spot={spot} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell">
          <div className="grid gap-10 xl:grid-cols-[0.95fr,1.05fr] xl:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
                Idukki Sightseeing
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
                A deeper district-side route built around water, height, and long-range views.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#485851]">
                The Idukki stretch moves beyond Vagamon's local circuit into a route shaped by the
                reservoir belt. It combines gentler waterside halts with tunnel scenery, a hanging
                bridge, hilltop panoramas, and the Idukki dam side of the district.
              </p>

              <div className="mt-8 space-y-4">
                {idukkiRouteStops.map((stop) => (
                  <article
                    key={stop.name}
                    className="rounded-[24px] border border-[#0b3d2e]/10 bg-white/78 p-5 shadow-[0_12px_34px_rgba(6,32,24,0.06)]"
                  >
                    <h3 className="text-xl font-semibold text-[#0b271f]">{stop.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#485851]">{stop.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-1">
              {idukkiSpotlights.map((spot) => (
                <StopCard key={spot.name} spot={spot} tone="feature" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white/45">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Signature Viewpoints
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              Two stronger hilltop stops for guests chasing sunset, elevation, and edge-of-the-ridge views.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {signatureViewpoints.map((spot) => (
              <StopCard key={spot.name} spot={spot} tone="feature" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell">
          <div className="grid gap-8 xl:grid-cols-[1.02fr,0.98fr] xl:items-center">
            <StopCard spot={ulupunniRoute.image} tone="feature" />

            <div className="rounded-[34px] border border-[#0b3d2e]/10 bg-[#0b3d2e] p-7 text-white shadow-[0_24px_60px_rgba(6,32,24,0.18)] md:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-100/68">
                {ulupunniRoute.title}
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-4xl">
                A rougher trail for guests who want the jeep route to feel like the experience, not
                just the transport.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/82">{ulupunniRoute.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {ulupunniMeta.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm font-medium text-white/92"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {ulupunniRoute.stops.map((stop) => (
                  <span
                    key={stop}
                    className="rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm text-white/88"
                  >
                    {stop}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="section-shell">
          <div className="rounded-[36px] bg-[#08261d] px-6 py-8 text-white shadow-[0_30px_90px_rgba(6,32,24,0.2)] md:px-10 md:py-12">
            <div className="grid gap-6 lg:grid-cols-[1fr,auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-100/60">
                  Sightseeing Booking
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-4xl">
                  Share the places you want to cover first. We can shape the jeep route around the
                  sightseeing mix that fits your group.
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
