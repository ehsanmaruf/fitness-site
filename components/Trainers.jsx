"use client";

import Link from "next/link";
import { Instagram, ArrowRight } from "lucide-react";
import { trainers } from "@/lib/data";
import Reveal from "./Reveal";

export default function Trainers({ showHeader = true, showCta = true }) {
  return (
    <section className="bg-ink-950 py-24 lg:py-32">
      <div className="container-x">
        {showHeader && (
          <div className="mb-14 text-center">
            <Reveal>
              <span className="eyebrow">[ Coaches & Specialists ]</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-heading mx-auto mt-4 max-w-3xl text-4xl text-white sm:text-5xl lg:text-6xl">
                Trained By The <span className="text-volt">Best</span>
              </h2>
            </Reveal>
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article className="group relative overflow-hidden rounded-2xl">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-volt">
                    {t.speciality}
                  </p>
                  <h3 className="mt-1 font-display text-2xl uppercase text-white">
                    {t.name}
                  </h3>
                  <p className="text-sm text-white/60">{t.role}</p>
                </div>

                <span className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-volt text-ink-950 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Instagram size={18} />
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        {showCta && (
          <Reveal delay={0.1}>
            <div className="mt-12 text-center">
              <Link href="/trainers" className="btn-ghost">
                Meet All Trainers <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
