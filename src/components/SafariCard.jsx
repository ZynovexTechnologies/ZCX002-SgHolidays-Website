import { Link } from "react-router-dom";

export default function SafariCard({ title, duration, price, summary, includes, image }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#0b3d2e]/10 bg-white/82 shadow-[0_16px_45px_rgba(6,32,24,0.08)]">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061d16]/72 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b3d2e]">
          {duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold text-[#0b271f]">{title}</h3>
          <p className="text-lg font-semibold text-[#0b3d2e]">{price}</p>
        </div>

        <p className="text-sm leading-6 text-[#485851]">{summary}</p>

        <ul className="space-y-3 text-sm leading-6 text-[#224136]">
          {includes.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#0b3d2e]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-2">
          <Link to="/contact?service=Jeep%20Safari" className="btn-secondary">
            Reserve Safari
          </Link>
        </div>
      </div>
    </article>
  );
}
