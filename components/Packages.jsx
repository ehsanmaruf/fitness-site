"use client";

import Link from "next/link";
import { Check, Zap, BadgePercent } from "lucide-react";
import { packages, facilities } from "@/lib/data";
import Reveal from "./Reveal";

export default function Packages({ showHeader = true }) {
  return (
    <section id="packages" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-volt/10 blur-[120px]" />

      <div className="container-x relative">
        {showHeader && (
          <div className="mb-14 text-center">
            <Reveal>
              <span className="eyebrow">[ Membership Packages ]</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-heading mx-auto mt-4 max-w-3xl text-4xl text-white sm:text-5xl lg:text-6xl">
                Simple, Honest <span className="text-volt">Pricing</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/55">
                No hidden fees. Every plan includes all member facilities — the
                longer you commit, the more you save.
              </p>
            </Reveal>
          </div>
        )}

        <Reveal>
          <div className="mx-auto mb-12 flex max-w-2xl items-center gap-4 rounded-2xl border border-volt/50 bg-volt/10 px-6 py-5">
            <BadgePercent size={32} className="shrink-0 text-volt" />
            <p className="text-sm leading-relaxed text-white/85 sm:text-base">
              <span className="font-heading font-semibold uppercase tracking-wider text-volt">
                Special discounts available!
              </span>{" "}
              Visit our gym for special discounts on every membership package.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.07}>
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  pkg.highlight
                    ? "gradient-border border-transparent bg-gradient-to-b from-volt/10 to-ink-800 shadow-[0_0_60px_-20px_rgba(78,168,222,0.6)] hover:-translate-y-2"
                    : "border-white/10 bg-ink-800/50 hover:-translate-y-1 hover:border-white/25"
                }`}
              >
                {pkg.highlight && (
                  <span className="bg-brand-gradient absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-950">
                    <Zap size={12} fill="currentColor" strokeWidth={0} /> Best Value
                  </span>
                )}

                <h3 className="font-heading text-lg font-semibold uppercase tracking-wider text-white">
                  {pkg.name}
                </h3>

                <div className="mt-4 flex items-end gap-1">
                  <span className="text-gradient font-display text-5xl">৳{pkg.price}</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                  {pkg.period}
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm text-white/70">
                      <Check size={16} className="mt-0.5 shrink-0 text-volt" strokeWidth={3} />
                      {perk}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-brand-gradient text-ink-950 hover:shadow-[0_10px_40px_-8px_rgba(139,124,246,0.7)]"
                      : "border border-white/20 text-white hover:border-volt hover:text-volt"
                  }`}
                >
                  Choose Plan
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Facilities */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-4xl text-center">
            <h3 className="font-display text-3xl uppercase text-white sm:text-4xl">
              Facilities For <span className="text-volt">Every Member</span>
            </h3>
            <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
              {facilities.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/75">
                  <Check size={16} className="shrink-0 text-volt" strokeWidth={3} />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-white/40">
              Prices in Bangladeshi Taka (BDT). Visit our gym for special discounts.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
