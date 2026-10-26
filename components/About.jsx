"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  "Fully air-conditioned gym",
  "Every day steam bath & shower",
  "Full-time instructors",
  "Separate ladies hour",
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
                src="/images/gym-floor.jpg"
                alt="Inside Shanto's Fit n Fine Gym"
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
              <p className="font-display text-5xl text-volt">M &amp; W</p>
              <p className="mt-1 max-w-[140px] text-xs uppercase tracking-wider text-white/60">
                Complete fitness for men &amp; women
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
              Shanto&apos;s Fit n Fine Gym is a complete fitness solution for men
              and women at Morol Bazar, Nadda, Dhaka. Whether you want to lose
              weight, gain muscle or simply get fit, our full-time instructors,
              latest equipment and personal diet plans will get you there.
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
