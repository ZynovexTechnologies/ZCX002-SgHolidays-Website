import { Link } from "react-router-dom";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { navLinks, siteConfig } from "../data/site.js";

function SocialIcon({ label }) {
  if (label === "Instagram") {
    return <FaInstagram />;
  }

  if (label === "Facebook") {
    return <FaFacebookF />;
  }

  return <FaWhatsapp />;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#08261d] text-white">
      <div className="section-shell grid gap-8 py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] xl:gap-14 xl:py-14">
        <div className="surface-card-soft rounded-[30px] border border-white/10 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100/60">
            SG Holidays Vagamon
          </p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-tight">
            Luxury rooms, jeep safari rides, and custom Vagamon plans from one team.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
            Luxury rooms from ₹4,500 per room with WiFi, pool access, parking, balcony views, hot
            water, and breakfast. Flexible where travelers need fast answers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={siteConfig.callLink}
              className="flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/90 transition hover:bg-white/14"
            >
              <FiPhoneCall />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/90 transition hover:bg-white/14"
            >
              <FiMail />
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:self-stretch">
          <div className="surface-card-soft rounded-[30px] border border-white/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
              Explore
            </p>
            <div className="mt-5 grid gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="surface-card-soft rounded-[30px] border border-white/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
              Follow & Book
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-lg text-white/85 transition hover:-translate-y-0.5 hover:bg-white/14"
              >
                <SocialIcon label="Instagram" />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-lg text-white/85 transition hover:-translate-y-0.5 hover:bg-white/14"
              >
                <SocialIcon label="Facebook" />
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-lg text-white/85 transition hover:-translate-y-0.5 hover:bg-white/14"
              >
                <SocialIcon label="WhatsApp" />
              </a>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Quickest conversion path for this business: call or WhatsApp. The site keeps both
              actions persistent on every page.
            </p>
          </div>
        </div>
      </div>

      <div className="section-shell border-t border-white/10 py-5 text-center text-xs text-white/55">
        <p>Copyright {year} {siteConfig.brand}. All rights reserved.</p>
        <p className="mt-2">
          Powered by{" "}
          <a
            href="https://www.zynovex.in/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white/80 transition hover:text-white"
          >
            Zynovex Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}
