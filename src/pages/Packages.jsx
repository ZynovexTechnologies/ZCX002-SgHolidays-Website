import Hero from "../components/Hero.jsx";
import PackageCard from "../components/PackageCard.jsx";
import { packages } from "../data/packages.js";
import { siteConfig } from "../data/site.js";

export default function Packages() {
  return (
    <main>
      <Hero
        compact
        eyebrow="Tour packages in Vagamon"
        title="Packages for Couples, Families, Honeymoons, and Office Trips"
        description="The packages page is where the business can position itself as more than a room provider. Each package combines duration, activities, and pricing into a simpler buying decision for guests who want a complete Vagamon plan."
        primaryAction={{ label: "Plan My Package", to: "/contact?service=Couple%20Package" }}
        secondaryAction={{ label: "WhatsApp Booking", href: siteConfig.whatsappLink, external: true, variant: "light" }}
        image="/assets/room-family-1.jpg"
        imageAlt="Tour package experience with stay and sightseeing"
        imageNote="Package pages help move undecided users into enquiry with clearer structure and higher perceived value."
      />

      <section className="section-space">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Tour Packages
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f] md:text-5xl">
              Each package includes clear duration, activity mix, and pricing from the first screen.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {packages.map((item) => (
              <PackageCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/45">
        <div className="section-shell grid gap-6 lg:grid-cols-3">
          <article className="rounded-[28px] border border-[#0b3d2e]/10 bg-white/78 p-6 shadow-[0_16px_45px_rgba(6,32,24,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6b736e]">Duration</p>
            <h3 className="mt-4 text-2xl font-semibold text-[#0b271f]">Flexible by guest type</h3>
            <p className="mt-4 text-sm leading-6 text-[#485851]">
              Short weekend plans for couples, slightly wider pacing for families, and clean group
              timelines for office tours.
            </p>
          </article>

          <article className="rounded-[28px] border border-[#0b3d2e]/10 bg-white/78 p-6 shadow-[0_16px_45px_rgba(6,32,24,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6b736e]">Activities</p>
            <h3 className="mt-4 text-2xl font-semibold text-[#0b271f]">Stay + safari + sightseeing</h3>
            <p className="mt-4 text-sm leading-6 text-[#485851]">
              The strongest packages combine accommodation, jeep safari, and a curated local route
              instead of trying to sell disconnected items.
            </p>
          </article>

          <article className="rounded-[28px] border border-[#0b3d2e]/10 bg-white/78 p-6 shadow-[0_16px_45px_rgba(6,32,24,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6b736e]">Pricing</p>
            <h3 className="mt-4 text-2xl font-semibold text-[#0b271f]">Clear starting points</h3>
            <p className="mt-4 text-sm leading-6 text-[#485851]">
              Pricing is framed as a starting point so the sales conversation stays flexible without
              feeling vague.
            </p>
          </article>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="section-shell">
          <div className="rounded-[36px] bg-[#08261d] px-6 py-8 text-white shadow-[0_30px_90px_rgba(6,32,24,0.2)] md:px-10 md:py-12">
            <div className="grid gap-6 lg:grid-cols-[1fr,auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-100/60">
                  Package CTA
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-4xl">
                  Tell the team who is travelling and they can match the right package in minutes.
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
