import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiPhoneCall, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks, siteConfig } from "../data/site.js";

function getNavLinkClass(isActive) {
  return `text-sm font-medium transition ${
    isActive ? "text-white" : "text-white/70 hover:text-white"
  }`;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08261d]/80 text-white backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/assets/logo-sg-holidays.png"
            alt="SG Holidays logo"
            className="h-12 w-12 shrink-0 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
          />
          <span className="min-w-0">
            <span className="block truncate text-[0.65rem] uppercase tracking-[0.3em] text-emerald-100/60">
              Vagamon
            </span>
            <span className="block truncate text-base font-semibold">{siteConfig.brand}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => getNavLinkClass(isActive)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.callLink}
            className="theme-toggle-button inline-flex min-h-[3rem] min-w-[10.5rem] items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-white/90 transition"
          >
            <FiPhoneCall />
            Call Now
          </a>
          <Link to="/contact?service=Resort%20Stay" className="btn-primary !bg-[#d6b06a] !text-[#0b271f] hover:!bg-[#e3bb74]">
            Plan My Stay
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-xl transition hover:bg-white/14 lg:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-shell pb-6">
          <div className="rounded-[30px] border border-white/10 bg-[#0d3026] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "border-white/14 bg-white/10 text-white"
                        : "border-white/8 text-white/75 hover:border-white/14 hover:bg-white/8 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={siteConfig.callLink}
                className="theme-toggle-button flex min-h-[3rem] items-center justify-center gap-2 rounded-[22px] px-4 text-sm font-semibold text-white transition"
              >
                <FiPhoneCall />
                Call Now
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp flex min-h-[3rem] items-center justify-center gap-2 rounded-[22px] px-4 text-sm font-semibold"
              >
                <FaWhatsapp />
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
