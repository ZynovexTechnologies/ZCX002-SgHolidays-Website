import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../data/site.js";

export default function CTAButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <div className="flex flex-col gap-2 rounded-[24px] border border-white/70 bg-white/90 p-2 shadow-[0_18px_55px_rgba(6,32,24,0.18)] backdrop-blur-xl">
        <a
          href={siteConfig.callLink}
          aria-label="Call Now"
          title="Call Now"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-[#84d7a7] text-[1.05rem] text-[#08261d] shadow-[0_18px_40px_rgba(132,215,167,0.28)] transition hover:-translate-y-0.5 hover:bg-[#99e1b7]"
        >
          <FiPhoneCall />
        </a>
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-[#25D366] text-[1.05rem] text-white shadow-[0_18px_40px_rgba(37,211,102,0.25)] transition hover:-translate-y-0.5 hover:bg-[#1fb659]"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
