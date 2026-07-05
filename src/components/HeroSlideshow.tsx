"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const SLIDE_DURATION = 6000;

const slides = [
  {
    src: "/projects/commercial/restaurant-visgraat.jpg",
    alt: "PVC Visgraat vloer in horecagelegenheid",
  },
  {
    src: "/projects/commercial/kantoor-visgraat-lounge.jpg",
    alt: "Visgraat vloer in modern kantoorpand",
  },
  {
    src: "/projects/residential/woonkamer-visgraat-licht.jpg",
    alt: "Lichte visgraat vloer in woonkamer",
  },
  {
    src: "/projects/commercial/kantoor-visgraat-groot.jpg",
    alt: "Grootschalig visgraat project kantoor",
  },
  {
    src: "/projects/epoxy/gietvloer-wit-kantoor.jpg",
    alt: "Witte gietvloer in kantoorpand",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(new Set([0]));

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const nextIdx = (current + 1) % slides.length;
    setLoaded((prev) => new Set(prev).add(nextIdx));
  }, [current]);

  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className="absolute inset-0 overflow-hidden transition-opacity duration-[1400ms] ease-in-out"
          style={{ opacity: index === current ? 1 : 0 }}
        >
          {(index === current || loaded.has(index)) && (
            <div
              className={`absolute inset-0 ${
                index === current ? "animate-kenburns" : ""
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
            </div>
          )}
        </div>
      ))}

      {/* Slide progress bars */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="group relative h-6 w-10 md:w-14"
            aria-label={`Slide ${index + 1}`}
          >
            <span className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 overflow-hidden rounded-full bg-cream/25 transition-colors group-hover:bg-cream/40">
              {index === current && (
                <span
                  key={current}
                  className="animate-slide-progress absolute inset-y-0 left-0 rounded-full bg-gold"
                />
              )}
              {index < current && (
                <span className="absolute inset-0 rounded-full bg-cream/40" />
              )}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
