"use client";

import { Star } from "lucide-react";

const defaultItems = [
  "Strength",
  "Discipline",
  "Weight Loss",
  "Muscle Gain",
  "CrossFit",
  "Cardio",
  "Personal Training",
  "No Excuses",
];

export default function Marquee({ items = defaultItems, reverse = false }) {
  const loop = [...items, ...items];

  return (
    <div className="relative flex overflow-hidden border-y border-white/10 bg-brand-gradient py-4 text-ink-950">
      <div
        className={`flex shrink-0 items-center gap-8 whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl uppercase tracking-tight sm:text-3xl">
              {item}
            </span>
            <Star size={18} fill="currentColor" strokeWidth={0} />
          </span>
        ))}
      </div>
    </div>
  );
}
