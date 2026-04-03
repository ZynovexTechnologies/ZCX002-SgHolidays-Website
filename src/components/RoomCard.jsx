import { Link } from "react-router-dom";

export default function RoomCard({ name, label, price, capacity, description, features, image }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#0b3d2e]/10 bg-white/82 shadow-[0_16px_45px_rgba(6,32,24,0.08)]">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061d16]/66 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b3d2e]">
          {label}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-[#0b271f]">{name}</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[#6b736e]">{capacity}</p>
          </div>
          <p className="text-lg font-semibold text-[#0b3d2e]">{price}</p>
        </div>

        <p className="text-sm leading-6 text-[#485851]">{description}</p>

        <ul className="grid gap-3 text-sm leading-6 text-[#224136] sm:grid-cols-2">
          {features.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#0b3d2e]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-2">
          <Link to="/contact?service=Resort%20Stay" className="btn-secondary">
            Book This Stay
          </Link>
        </div>
      </div>
    </article>
  );
}
