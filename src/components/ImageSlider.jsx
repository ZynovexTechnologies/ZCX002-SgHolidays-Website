import { useEffect, useState } from "react";

function ImageSlider({
  images,
  auto = true,
  interval = 6500,
  showControls = true,
  overlay = true,
  className = "",
  height = "auto",
  children,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  useEffect(() => {
    if (!auto || total < 2) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, interval);
    return () => clearInterval(timer);
  }, [auto, interval, total]);

  const goTo = (next) => {
    const index = (next + total) % total;
    setActiveIndex(index);
  };

  return (
    <div className={`image-slider ${className}`} style={{ minHeight: height }}>
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`image-slide ${index === activeIndex ? "is-active" : ""}`}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}
      {overlay ? <div className="image-overlay" aria-hidden="true" /> : null}
      {children ? <div className="image-content">{children}</div> : null}
      {showControls && total > 1 ? (
        <div className="slider-controls">
          <button
            type="button"
            className="slider-btn"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous image"
          >
            Prev
          </button>
          <div className="slider-dots">
            {images.map((image, index) => (
              <button
                key={`${image.alt}-${index}`}
                type="button"
                className={`slider-dot ${index === activeIndex ? "is-active" : ""}`}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="slider-btn"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next image"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ImageSlider;
