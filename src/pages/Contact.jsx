import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";
import { FiCalendar, FiChevronDown, FiMail, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Hero from "../components/Hero.jsx";
import { serviceOptions, siteConfig } from "../data/site.js";

const initialFormState = {
  name: "",
  phone: "",
  service: "Resort Stay",
  travelDate: "",
  guests: "",
  message: "",
};

const monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatTravelDate(value) {
  if (!value) {
    return "DD-MMM-YYYY";
  }

  const [year, month, day] = value.split("-");

  if (!year || !month || !day) {
    return "DD-MMM-YYYY";
  }

  const monthLabel = monthShortNames[Number(month) - 1];

  if (!monthLabel) {
    return "DD-MMM-YYYY";
  }

  return `${day}-${monthLabel}-${year}`;
}

function ContactCard({ icon, title, value, href, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group min-w-0 rounded-[28px] border border-[#0b3d2e]/10 bg-white/80 p-6 shadow-[0_16px_45px_rgba(6,32,24,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(6,32,24,0.12)]"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b3d2e]/8 text-xl text-[#0b3d2e] transition group-hover:bg-[#0b3d2e] group-hover:text-white">
        {icon}
      </span>
      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#6b736e]">{title}</p>
      <p className="mt-3 min-w-0 break-all text-base font-semibold leading-8 text-[#0b271f] md:text-lg">
        {value}
      </p>
    </a>
  );
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("service");
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState("");
  const travelDateRef = useRef(null);

  useEffect(() => {
    if (requestedService) {
      setForm((current) => ({ ...current, service: requestedService }));
    }
  }, [requestedService]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const lines = [
      `Hello SG Holidays,`,
      `Name: ${form.name || "Not provided"}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Service: ${form.service}`,
      `Travel Date: ${form.travelDate ? formatTravelDate(form.travelDate) : "Flexible"}`,
      `Guests: ${form.guests || "Not specified"}`,
      `Message: ${form.message || "Need more details"}`,
    ];

    const message = encodeURIComponent(lines.join("\n"));
    window.open(`${siteConfig.whatsappLink}?text=${message}`, "_blank", "noopener,noreferrer");
    setStatus("WhatsApp chat opened with your enquiry details. You can send it directly.");
  }

  function openDatePicker() {
    const input = travelDateRef.current;

    if (!input) {
      return;
    }

    input.focus({ preventScroll: true });

    if (typeof input.showPicker === "function") {
      input.showPicker();
    }
  }

  return (
    <main>
      <Hero
        compact
        eyebrow="Contact SG Holidays"
        title="Call, WhatsApp, or Send Your Travel Plan"
        description="The contact page is built to remove friction. It surfaces the phone number, WhatsApp, social proof channels, map, and a quick enquiry form that feeds directly into WhatsApp."
        primaryAction={{ label: "Call Now", href: siteConfig.callLink }}
        secondaryAction={{ label: "WhatsApp Booking", href: siteConfig.whatsappLink, external: true, variant: "light" }}
        image="/assets/hero-safari-savanna.jpg"
        imageAlt="Contact SG Holidays for Vagamon bookings"
        imageNote="Direct-response tourism sites should never hide contact actions behind a form alone."
      />

      <section className="section-space">
        <div className="section-shell grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <ContactCard
            icon={<FiPhoneCall />}
            title="Phone"
            value={siteConfig.phoneDisplay}
            href={siteConfig.callLink}
          />
          <ContactCard
            icon={<FaWhatsapp />}
            title="WhatsApp"
            value="Start a chat"
            href={siteConfig.whatsappLink}
            external
          />
          <ContactCard
            icon={<FiMail />}
            title="Email"
            value={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />
          <ContactCard
            icon={<FaInstagram />}
            title="Instagram"
            value="@sgholidays.vagamon"
            href={siteConfig.instagram}
            external
          />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="rounded-[32px] border border-[#0b3d2e]/10 bg-white/80 p-7 shadow-[0_16px_45px_rgba(6,32,24,0.08)] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
              Contact Form
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#0b271f]">
              Send the basics and continue the conversation on WhatsApp.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#485851]">
              This keeps the enquiry flow fast without needing a backend form processor.
            </p>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#0b271f]">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-[#0b3d2e]/12 bg-[#f9f5ed] px-4 py-3 text-sm text-[#102721] outline-none transition focus:border-[#0b3d2e]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#0b271f]">Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full rounded-2xl border border-[#0b3d2e]/12 bg-[#f9f5ed] px-4 py-3 text-sm text-[#102721] outline-none transition focus:border-[#0b3d2e]"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#0b271f]">Service</span>
                  <div className="relative">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="input-surface w-full appearance-none rounded-[22px] px-4 py-3.5 pr-12 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] outline-none transition hover:border-[#0b3d2e]/20 focus:border-[#0b3d2e]"
                    >
                      {serviceOptions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#6b736e]">
                      <FiChevronDown className="text-lg" />
                    </span>
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#0b271f]">Travel Date</span>
                  <div className="relative cursor-pointer" onClick={openDatePicker}>
                    <div className="input-surface flex min-h-[3.7rem] items-center rounded-[22px] px-4 pr-12 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition hover:border-[#0b3d2e]/20">
                      <span className={form.travelDate ? "text-[#102721]" : "text-[#7d817e]"}>
                        {formatTravelDate(form.travelDate)}
                      </span>
                    </div>
                    <input
                      ref={travelDateRef}
                      type="date"
                      name="travelDate"
                      value={form.travelDate}
                      onChange={handleChange}
                      className="modern-date-input absolute inset-0 h-full w-full cursor-pointer rounded-[22px] opacity-0 outline-none"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#6b736e]">
                      <FiCalendar className="text-lg" />
                    </span>
                  </div>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#0b271f]">Guests</span>
                <input
                  type="text"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  placeholder="2 adults, 1 child, office team, etc."
                  className="w-full rounded-2xl border border-[#0b3d2e]/12 bg-[#f9f5ed] px-4 py-3 text-sm text-[#102721] outline-none transition focus:border-[#0b3d2e]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#0b271f]">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us whether you need stay only, safari only, or a full package."
                  className="w-full rounded-[24px] border border-[#0b3d2e]/12 bg-[#f9f5ed] px-4 py-3 text-sm text-[#102721] outline-none transition focus:border-[#0b3d2e]"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="submit" className="btn-primary btn-whatsapp">
                  Send via WhatsApp
                </button>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <FaFacebookF />
                  Facebook Page
                </a>
              </div>

              {status ? <p className="text-sm text-[#0b3d2e]">{status}</p> : null}
            </form>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[32px] border border-[#0b3d2e]/10 bg-white/80 shadow-[0_16px_45px_rgba(6,32,24,0.08)]">
              <iframe
                title="SG Holidays Vagamon Map"
                src={siteConfig.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[22rem] w-full border-0"
              />
            </div>

            <article className="rounded-[32px] border border-[#0b3d2e]/10 bg-white/80 p-7 shadow-[0_16px_45px_rgba(6,32,24,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#6b736e]">
                Social & Reach
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[#0b271f]">
                Use the channels travelers actually open first.
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <FaInstagram />
                  Instagram
                </a>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <FaFacebookF />
                  Facebook
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
