"use client";

import { gallery } from "@/lib/data";
import Reveal from "./Reveal";
import { Tilt } from "./Interactive";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink-900 py-24 lg:py-32">
      <div className="container-x">
        <div className="mb-12 text-center">
          <Reveal>
            <span className="eyebrow">[ Inside Our Gym ]</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-heading mx-auto mt-4 max-w-3xl text-4xl text-white sm:text-5xl lg:text-6xl">
              Take A Look <span className="text-volt">Around</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {gallery.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 0.07}>
              <Tilt>
                <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_rgba(78,168,222,0.55)]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 font-display text-lg uppercase text-white sm:p-5 sm:text-xl">
                    {photo.label}
                  </figcaption>
                </figure>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
