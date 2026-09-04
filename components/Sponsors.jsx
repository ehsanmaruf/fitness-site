"use client";

import { sponsors } from "@/lib/data";

export default function Sponsors() {
  return (
    <section className="border-y border-white/10 bg-ink-950 py-12">
      <div className="container-x">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-white/35">
          Trusted supplements &amp; gear partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {sponsors.map((s) => (
            <span
              key={s}
              className="font-heading text-xl font-bold uppercase tracking-widest text-white/25 transition-colors duration-300 hover:text-volt sm:text-2xl"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
