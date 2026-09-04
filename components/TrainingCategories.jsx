"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";
import Reveal from "./Reveal";

export default function TrainingCategories() {
  const scroller = useRef(null);

  const scrollBy = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="bg-ink-950 py-24 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">[ Train Your Way ]</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-heading mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">
                Explore The Floor
              </h2>
            </Reveal>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scrollBy("prev")}
              aria-label="Previous"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-volt hover:bg-volt hover:text-ink-950"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scrollBy("next")}
              aria-label="Next"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-volt hover:bg-volt hover:text-ink-950"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="mt-12 flex gap-5 overflow-x-auto scroll-smooth px-5 pb-4 sm:px-8 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((cat) => (
          <article
            key={cat.title}
            className="group relative h-[420px] w-[300px] shrink-0 overflow-hidden rounded-2xl sm:w-[340px]"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-volt">
                {cat.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl uppercase text-white">
                {cat.title}
              </h3>
              <div className="mt-3 h-0.5 w-0 bg-volt transition-all duration-500 group-hover:w-16" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
