"use client";

import {
  Flame,
  Dumbbell,
  Trophy,
  User,
  Activity,
  Apple,
} from "lucide-react";
import { programs } from "@/lib/data";
import Reveal from "./Reveal";
import { Spotlight } from "./Interactive";

const iconMap = {
  flame: Flame,
  dumbbell: Dumbbell,
  trophy: Trophy,
  user: User,
  activity: Activity,
  apple: Apple,
};

export default function Programs() {
  return (
    <section id="programs" className="bg-ink-950 py-24 lg:py-32">
      <div className="container-x">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">[ Our Programs ]</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-heading mt-4 max-w-2xl text-4xl text-white sm:text-5xl lg:text-6xl">
                Pick Your Goal.
                <br />
                We&apos;ll Build The <span className="text-volt">Plan</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              Whether you want to shed fat, pack on muscle or train like an
              athlete, every program comes with coaching, nutrition and
              progress tracking.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((prog, i) => {
            const Icon = iconMap[prog.icon] ?? Dumbbell;
            return (
              <Reveal key={prog.title} delay={i * 0.06}>
                <Spotlight className="group h-full rounded-2xl border border-white/10 bg-ink-800/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-volt/60 hover:bg-ink-800">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-volt/10 text-volt transition-all duration-300 group-hover:bg-brand-gradient group-hover:rotate-6 group-hover:scale-110 group-hover:text-ink-950">
                    <Icon size={26} strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-semibold uppercase tracking-wide text-white">
                    {prog.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {prog.desc}
                  </p>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
