"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { stats } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// Headline words revealed one by one; accent words get the brand gradient
const headline = [
  [{ text: "Train" }, { text: "Hard." }],
  [{ text: "Stay" }, { text: "Fit", accent: true }, { text: "n", accent: true }, { text: "Fine", accent: true }],
];

const word = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background with parallax + slow zoom */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1920&q=80"
          alt="Athlete training at Shanto's Fit n Fine Gym"
          className="h-full w-full animate-slow-zoom object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/55 to-ink-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-ink-950/40" />
      </motion.div>

      {/* Aurora glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[420px] w-[420px] animate-aurora rounded-full bg-volt/25 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[480px] w-[480px] animate-aurora rounded-full bg-glow/20 blur-[140px] [animation-delay:-9s]" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x relative grid gap-12 lg:grid-cols-12 lg:items-center"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-8"
        >
          <motion.span variants={item} className="eyebrow">
            <span className="h-px w-8 bg-volt" /> Shanto&apos;s Fit n Fine Gym · Nadda
          </motion.span>

          <motion.h1
            variants={container}
            className="display-heading mt-6 text-6xl text-white sm:text-7xl lg:text-8xl xl:text-9xl"
          >
            {headline.map((line, li) => (
              <span key={li} className="block">
                {line.map((w) => (
                  <span key={w.text} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                    <motion.span
                      variants={word}
                      className={`inline-block ${w.accent ? "text-volt" : ""}`}
                    >
                      {w.text}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/70"
          >
            A complete fitness solution for men &amp; women. Well-ventilated gym,
            latest equipment, full-time instructors and an every day steam bath.
            Weight loss, weight gain, body building — your goal, our mission.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Start Training <ArrowRight size={18} />
            </Link>
            <Link href="/programs" className="btn-ghost">
              <Play size={16} fill="currentColor" strokeWidth={0} /> View Programs
            </Link>
          </motion.div>
        </motion.div>

        {/* Stat card */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-4"
        >
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={item}
                className="bg-ink-950/70 p-6 transition-colors duration-300 hover:bg-ink-800/80"
              >
                <p className="text-gradient font-display text-4xl sm:text-5xl">
                  {s.value}
                  <span className="text-white">{s.suffix}</span>
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-volt to-transparent" />
      </motion.div>
    </section>
  );
}
