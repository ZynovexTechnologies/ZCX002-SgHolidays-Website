export default function Gallery({ items, compact = false }) {
  const gridClass = compact ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {items.map((item, index) => (
        <figure
          key={`${item.src}-${index}`}
          className="group relative overflow-hidden rounded-[28px] border border-[#0b3d2e]/10 bg-white/70 shadow-[0_16px_45px_rgba(6,32,24,0.08)]"
        >
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
              compact ? "h-64" : index % 3 === 0 ? "h-80" : "h-72"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061d16]/82 via-[#061d16]/10 to-transparent opacity-95" />
          <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm leading-6 text-white/86">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
