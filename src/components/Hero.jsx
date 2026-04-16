import { Link } from "react-router-dom";
import terrainLines from "../assets/terrain-lines.svg";
import ImageSlider from "./ImageSlider.jsx";

function HeroAction({ action }) {
  if (!action) {
    return null;
  }

  const className =
    action.variant === "secondary"
      ? "btn-secondary"
      : action.variant === "light"
        ? "btn-light"
        : "btn-primary";

  if (action.href) {
    return (
      <a
        href={action.href}
        target={action.external ? "_blank" : undefined}
        rel={action.external ? "noreferrer" : undefined}
        className={className}
      >
        {action.label}
      </a>
    );
  }

  return (
    <Link to={action.to} className={className}>
      {action.label}
    </Link>
  );
}

export default function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats = [],
  image,
  imageAlt,
  imageNote,
  backgroundImages = [],
  compact = false,
}) {
  const heroBackgroundImages = backgroundImages.length > 0 ? backgroundImages : [image];
  const usesBackgroundShowcase = backgroundImages.length > 0;

  return (
    <section className="relative overflow-hidden bg-[#08261d] text-white">
      <ImageSlider images={heroBackgroundImages} className="opacity-52" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,38,29,0.72)_0%,rgba(8,38,29,0.62)_34%,rgba(8,38,29,0.46)_68%,rgba(8,38,29,0.34)_100%)]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(112, 154, 127, 0.34), transparent 34%), radial-gradient(circle at 84% 12%, rgba(214, 176, 106, 0.18), transparent 20%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `url(${terrainLines})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <div
        className={`section-shell relative z-10 ${
          usesBackgroundShowcase
            ? compact
              ? "py-16 md:py-20"
              : "py-18 md:min-h-[calc(100svh-5rem)] md:py-24"
            : `grid items-center gap-10 py-14 md:grid-cols-[1.35fr,0.65fr] xl:grid-cols-[1.45fr,0.55fr] ${
                compact ? "md:py-18" : "md:min-h-[calc(100svh-5rem)] md:py-24"
              }`
        }`}
      >
        <div
          className={`pt-10 md:pt-8 ${
            usesBackgroundShowcase ? "max-w-[64rem] md:pt-12" : "max-w-[52rem]"
          }`}
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100/80">
            {eyebrow}
          </p>
          <h1
            className={`mt-5 text-balance font-semibold leading-none ${
              compact ? "text-4xl md:text-6xl" : "text-5xl md:text-7xl"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-5 text-base leading-7 text-white/82 md:text-lg ${
              usesBackgroundShowcase ? "max-w-[56rem]" : "max-w-[48rem]"
            }`}
          >
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <HeroAction action={primaryAction} />
            <HeroAction action={secondaryAction} />
          </div>

          {stats.length > 0 ? (
            <dl
              className={`mt-10 grid gap-3 sm:grid-cols-3 ${
                usesBackgroundShowcase ? "max-w-[56rem]" : "max-w-[48rem]"
              }`}
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-white/12 bg-white/8 p-4 backdrop-blur"
                >
                  <dt className="text-xs uppercase tracking-[0.24em] text-white/55">{item.label}</dt>
                  <dd className="mt-2 text-lg font-semibold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        {!usesBackgroundShowcase ? (
          <div className="relative w-full max-w-[30rem] md:ml-auto">
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-[#d6b06a]/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/12 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
              <img
                src={image}
                alt={imageAlt}
                className={`w-full object-cover ${compact ? "h-[22rem] md:h-[31rem]" : "h-[26rem] md:h-[40rem]"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061d16] via-transparent to-transparent" />
              {imageNote ? (
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="max-w-md text-sm leading-6 text-white/82">{imageNote}</p>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
