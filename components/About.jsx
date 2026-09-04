"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  "3,000+ sq. ft. training floor",
  "Premium imported equipment",
  "Certified, caring coaches",
  "Separate ladies training hours",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* Image collage */}
        <Reveal direction="right">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                alt="Inside IRONX gym"
                className="h-[520px] w-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-8 -left-6 hidden rounded-2xl border border-white/10 bg-ink-800 p-6 shadow-2xl sm:block"
            >
              <p className="font-display text-5xl text-volt">8+</p>
              <p className="mt-1 max-w-[120px] text-xs uppercase tracking-wider text-white/60">
                Years transforming Dhaka
              </p>
            </motion.div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">[ Designed for Performance ]</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-heading mt-5 text-4xl text-white sm:text-5xl lg:text-6xl">
              More Than a Gym —
              <br />A Space Built for <span className="text-volt">Progress</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
              At IRONX we believe fitness is built, not bought. Since 2018
              we&apos;ve helped thousands of people across Dhaka lose weight, gain
              muscle and rediscover what their bodies can do. Every plan is
              personal, every rep is coached, and every win is celebrated.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-volt text-ink-950">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm text-white/80">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
