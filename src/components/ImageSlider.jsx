import { useEffect, useMemo, useState } from "react";

export default function ImageSlider({ images = [], intervalMs = 5000, className = "" }) {
  const slides = useMemo(() => [...new Set(images.filter(Boolean))], [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
  }, [slides]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (slides.length < 2 || prefersReducedMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => {
      window.clearInterval(timer);
    };
  }, [intervalMs, prefersReducedMotion, slides]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {slides.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt=""
            fetchPriority={index === 0 ? "high" : undefined}
            className="h-full w-full scale-[1.03] object-cover"
          />
        </div>
      ))}
    </div>
  );
}
