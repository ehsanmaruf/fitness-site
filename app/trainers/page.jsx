import PageHeader from "@/components/PageHeader";
import Trainers from "@/components/Trainers";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { Award, HeartPulse, Salad } from "lucide-react";

export const metadata = {
  title: "Our Trainers — IRONX Gym Dhaka",
  description:
    "Meet the certified coaches at IRONX Dhaka — specialists in strength, weight loss, muscle gain, CrossFit, nutrition and mobility.",
};

const values = [
  {
    icon: Award,
    title: "Certified Experts",
    desc: "Every coach holds recognised fitness certifications and years of hands-on training experience.",
  },
  {
    icon: HeartPulse,
    title: "Goal-First Coaching",
    desc: "Your goals lead. We build the plan, adjust it weekly and keep you accountable the whole way.",
  },
  {
    icon: Salad,
    title: "Nutrition Included",
    desc: "Training is half the story. Our coaches guide your diet with realistic, local meal plans.",
  },
];

export default function TrainersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trainers"
        title="Meet The Team"
        subtitle="Behind every transformation is a coach who cares. Get to know the people who will push you further than you thought possible."
        image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1920&q=80"
      />

      <Trainers showHeader={false} showCta={false} />

      {/* Values */}
      <section className="bg-ink-900 py-24 lg:py-28">
        <div className="container-x">
          <div className="mb-12 text-center">
            <Reveal>
              <span className="eyebrow">[ Why Train With Us ]</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-heading mt-4 text-4xl text-white sm:text-5xl">
                Coaching That <span className="text-volt">Delivers</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-ink-800/50 p-8 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-volt/10 text-volt">
                    <v.icon size={26} />
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-semibold uppercase tracking-wide text-white">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
