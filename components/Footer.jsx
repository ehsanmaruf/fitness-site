import Link from "next/link";
import { Dumbbell, MapPin, Phone, Mail, Clock } from "lucide-react";
import { site, navLinks, programs } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-volt text-ink-950">
              <Dumbbell size={20} strokeWidth={2.5} />
            </span>
            <span className="font-display text-2xl uppercase tracking-tight">
              Iron<span className="text-volt">X</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            Dhaka&apos;s home for serious training. Real coaches, real results —
            whatever your goal, we&apos;ll help you forge it.
          </p>
          <div className="mt-6 flex gap-3">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-white/70 transition-colors hover:border-volt hover:text-volt"
                aria-label={s.label}
              >
                {s.label.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Explore
          </h4>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-white/55 transition-colors hover:text-volt"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Programs
          </h4>
          <ul className="mt-5 space-y-3">
            {programs.slice(0, 5).map((p) => (
              <li key={p.title}>
                <span className="text-sm text-white/55">{p.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Visit Us
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-white/55">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-volt" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-volt" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-volt" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-volt" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} IRONX Fitness Club, Dhaka. All rights reserved.</p>
          <p>
            Designed &amp; developed by{" "}
            <a
              href="https://md-maruf-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-volt transition-colors hover:text-white"
            >
              Maruf
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
