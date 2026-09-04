import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeader({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-16 pt-32">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/40" />
      </div>

      <div className="container-x relative">
        <nav className="mb-6 flex items-center gap-1 text-xs uppercase tracking-widest text-white/50">
          <Link href="/" className="hover:text-volt">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-volt">{eyebrow}</span>
        </nav>
        <h1 className="display-heading max-w-4xl text-5xl text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
