"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/85" />
      </div>

      <div className="container-x relative py-24 text-center lg:py-32">
        <Reveal>
          <span className="eyebrow">[ No More Excuses ]</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-heading mx-auto mt-5 max-w-4xl text-5xl text-white sm:text-6xl lg:text-7xl">
            Your Transformation
            <br /> Starts <span className="text-volt">Today</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/65">
            Book a free trial session, tour the floor and meet the coaches. Walk
            in unsure — walk out unstoppable.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Claim Free Trial <ArrowRight size={18} />
            </Link>
            <Link href="/#packages" className="btn-ghost">
              View Packages
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
