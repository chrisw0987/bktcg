import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import show01 from "../assets/show-01.jpg";
import show02 from "../assets/show-02.jpg";
import show03 from "../assets/show-03.jpg";
import show04 from "../assets/show-04.jpg";
import show05 from "../assets/show-05.jpg";
import show06 from "../assets/show-06.jpg";
import show07 from "../assets/show-07.jpg";
import show08 from "../assets/show-08.jpg";
import show09 from "../assets/show-09.jpg";

const heroImages = [
  show01,
  show02,
  show03,
  show04,
  show05,
  show06,
  show07,
  show08,
  show09,
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically advance every 5 seconds.
  // When the last image is reached, return to the first.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previousImage) =>
        previousImage === heroImages.length - 1
          ? 0
          : previousImage + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage]);

  // Previous image.
  // If we're on the first image, go to the last.
  const previousSlide = () => {
    setCurrentImage((previousImage) =>
      previousImage === 0
        ? heroImages.length - 1
        : previousImage - 1
    );
  };

  // Next image.
  // If we're on the last image, go back to the first.
  const nextSlide = () => {
    setCurrentImage((previousImage) =>
      previousImage === heroImages.length - 1
        ? 0
        : previousImage + 1
    );
  };

  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#0B1D5A] px-6 py-24 text-center text-white md:min-h-[780px]">
      {/* BACKGROUND SLIDESHOW */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
              index === currentImage
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#0B1D5A]/65" />

      {/* PURPLE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A1E68]/45 via-transparent to-[#2A1E68]/80" />

      {/* BLUE GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#4FCBFF]/20 blur-[120px]" />

      {/* LEFT ARROW */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous show photo"
        className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#0B1D5A]/50 text-3xl font-bold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#2A1E68]/90 md:left-8 md:h-14 md:w-14"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next show photo"
        className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#0B1D5A]/50 text-3xl font-bold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#2A1E68]/90 md:right-8 md:h-14 md:w-14"
      >
        ›
      </button>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-5xl flex-col items-center justify-center">
        <img
          src="/bktcg-logo.png"
          alt="BKTCG Show"
          className="mx-auto mb-8 w-72 drop-shadow-2xl md:w-96"
        />

        <h1 className="text-5xl font-black tracking-tight drop-shadow-lg md:text-7xl">
          Brooklyn{" "}
          <span className="text-[#FFA500]">
            TCG
          </span>{" "}
          Show
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/90 drop-shadow-md md:text-xl">
          The Home of Brooklyn's Trading Card Community, Where Brooklyn's
          Collectors Come Together
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/events"
            className="rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-8 py-3 font-bold text-[#0B1D5A] shadow-lg transition hover:scale-105"
          >
            Get Tickets
          </Link>

          <Link
            to="/events"
            className="rounded-xl border border-white/40 bg-[#0B1D5A]/25 px-8 py-3 font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            View Events
          </Link>
        </div>

        {/* SLIDESHOW INDICATORS */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImage(index)}
              aria-label={`View show photo ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentImage === index
                  ? "w-8 bg-[#FFA500]"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;