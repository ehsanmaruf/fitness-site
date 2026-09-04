"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { classes } from "@/lib/data";
import Reveal from "./Reveal";

export default function ClassesList() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="container-x">
        <div className="mb-12 text-center">
          <Reveal>
            <span className="eyebrow">[ Our Fitness Classes ]</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-heading mx-auto mt-4 max-w-3xl text-4xl text-white sm:text-5xl lg:text-6xl">
              Find The Class That <span className="text-volt">Moves</span> You
            </h2>
          </Reveal>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {classes.map((cls, i) => {
            const isActive = active === i;
            return (
              <div
                key={cls.no}
                onMouseEnter={() => setActive(i)}
                className="group relative"
              >
                <div className="grid grid-cols-12 items-center gap-4 px-2 py-6 transition-colors duration-300 lg:py-7">
                  <span
                    className={`col-span-2 font-heading text-sm transition-colors sm:text-base ${
                      isActive ? "text-volt" : "text-white/40"
                    }`}
                  >
                    {cls.no}
                  </span>

                  <h3
                    className={`col-span-10 font-display text-3xl uppercase transition-all duration-300 sm:text-4xl lg:col-span-6 lg:text-5xl ${
                      isActive ? "text-white lg:translate-x-3" : "text-white/60"
                    }`}
                  >
                    {cls.name}
                  </h3>

                  <p className="col-span-12 hidden text-sm leading-relaxed text-white/50 lg:col-span-3 lg:block">
                    {cls.desc}
                  </p>

                  <span className="col-span-12 hidden justify-end lg:col-span-1 lg:flex">
                    <ArrowUpRight
                      size={26}
                      className={`transition-all duration-300 ${
                        isActive ? "text-volt" : "text-white/30"
                      }`}
                    />
                  </span>

                  <p className="col-span-12 text-sm leading-relaxed text-white/50 lg:hidden">
                    {cls.desc}
                  </p>
                </div>

                {/* Hover image reveal */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="pointer-events-none absolute right-[26%] top-1/2 z-10 hidden h-40 w-64 -translate-y-1/2 overflow-hidden rounded-xl xl:block"
                    >
                      <img
                        src={cls.image}
                        alt={cls.name}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
