import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Programs from "@/components/Programs";
import Packages from "@/components/Packages";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { classes } from "@/lib/data";

export const metadata = {
  title: "Programs — Shanto's Fit n Fine Gym",
  description:
    "Explore Shanto's Fit n Fine Gym group classes and training programs: strength, CrossFit, HIIT, functional training, yoga, weight loss and muscle gain.",
};

const schedule = [
  { time: "6:30 AM – 2:00 PM", class: "Gents Hour", spots: "Combined" },
  { time: "2:00 PM – 6:00 PM", class: "Ladies Hour", spots: "Ladies only" },
  { time: "6:00 PM – 11:00 PM", class: "Gents Hour", spots: "Combined" },
  { time: "Every Day", class: "Steam Bath", spots: "All members" },
];

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Programs & Classes"
        subtitle="From heavy barbells to calming mobility flows — find the training that matches your goals and your schedule."
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Class cards */}
      <section className="bg-ink-950 py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">[ Group Classes ]</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-heading mt-4 text-4xl text-white sm:text-5xl">
              What We <span className="text-volt">Train</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {classes.map((cls, i) => (
              <Reveal key={cls.no} delay={i * 0.06}>
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-800/50">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={cls.image}
                      alt={cls.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-volt px-3 py-1 font-heading text-xs font-bold text-ink-950">
                      {cls.no}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl uppercase text-white">
                      {cls.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {cls.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee reverse />

      {/* Programs reused */}
      <Programs />

      {/* Weekly schedule */}
      <section className="bg-ink-900 py-24 lg:py-28">
        <div className="container-x">
          <div className="mb-12 text-center">
            <Reveal>
              <span className="eyebrow">[ Gym Timing ]</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-heading mt-4 text-4xl text-white sm:text-5xl">
                Open Every Day
              </h2>
            </Reveal>
          </div>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10">
            {schedule.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 items-center gap-4 border-b border-white/10 bg-ink-800/40 px-6 py-5 transition-colors last:border-0 hover:bg-ink-800"
              >
                <span className="flex items-center gap-2 font-heading text-sm font-semibold uppercase text-volt">
                  <Clock size={16} /> {row.time}
                </span>
                <span className="font-heading text-base font-medium text-white">
                  {row.class}
                </span>
                <span className="flex items-center justify-end gap-2 text-xs text-white/50">
                  <Users size={14} /> {row.spots}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              Join Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Packages />
    </>
  );
}
