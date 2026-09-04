"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1920&q=80"
          alt="Athlete training at IRONX"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/55 to-ink-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-ink-950/40" />
      </div>

      <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-8"
        >
          <motion.span variants={item} className="eyebrow">
            <span className="h-px w-8 bg-volt" /> Dhaka&apos;s Premier Fitness Club
          </motion.span>

          <motion.h1
            variants={item}
            className="display-heading mt-6 text-6xl text-white sm:text-7xl lg:text-8xl xl:text-9xl"
          >
            Train Hard.
            <br />
            <span className="text-volt">Forge</span> Iron.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/70"
          >
            More than a gym — a space built for progress. World-class equipment,
            expert coaches and a community that pushes you past every limit.
            Weight loss, muscle gain, strength — your goal, our mission.
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
          variants={item}
          initial="hidden"
          animate="show"
          className="lg:col-span-4"
        >
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink-950/70 p-6">
                <p className="font-display text-4xl text-volt sm:text-5xl">
                  {s.value}
                  <span className="text-white">{s.suffix}</span>
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

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
