"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const go = (dir) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="container-x">
        <div className="mb-12 text-center">
          <Reveal>
            <span className="eyebrow">[ Success Stories ]</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-heading mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">
              Real People. <span className="text-volt">Real Results.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-ink-800/50 p-8 sm:p-12">
          <Quote size={44} className="text-volt" />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-6"
            >
              <p className="text-xl leading-relaxed text-white/85 sm:text-2xl">
                “{t.quote}”
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-heading font-semibold uppercase tracking-wide text-white">
                      {t.name}
                    </p>
                    <p className="text-sm text-white/50">{t.role}</p>
                  </div>
                </div>
                <div className="hidden gap-1 sm:flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="text-volt" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-volt hover:text-volt"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-volt" : "w-2 bg-white/25"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-volt hover:text-volt"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
