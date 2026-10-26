import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { MapPin, Phone, Clock, Users, MessageCircle, Navigation } from "lucide-react";
import { site } from "@/lib/data";

export const metadata = {
  title: "Contact & Join — Shanto's Fit n Fine Gym",
  description:
    "Get in touch with Shanto's Fit n Fine Gym. Book a free trial, ask about membership packages or visit us at Morol Bazar, Nadda, Dhaka.",
};

const info = [
  { icon: MapPin, label: "Location", value: site.address, href: site.mapUrl },
  { icon: Phone, label: "Call Us", value: site.phone, href: `tel:+${site.whatsapp}` },
  { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: `https://wa.me/${site.whatsapp}` },
  { icon: Clock, label: "Gents Hours", value: site.hours.replace("Gents: ", "") },
  { icon: Users, label: "Ladies Hour", value: site.ladiesHours.replace("Ladies: ", "") },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Get Started"
        subtitle="Book your free trial, ask about packages, or just come say hi. We usually reply within a few hours."
        image="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-ink-950 py-24 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <Reveal>
              <span className="eyebrow">[ Reach Out ]</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-heading mt-4 text-4xl text-white sm:text-5xl">
                Come Train With <span className="text-volt">Us</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">
                Walk in for a tour, or drop your details and we&apos;ll set up a
                free trial session and a quick fitness assessment — no pressure,
                no strings.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {info.map((item, i) => (
                <Reveal key={item.label} delay={0.1 + i * 0.06}>
                  <div className="rounded-2xl border border-white/10 bg-ink-800/50 p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-volt/10 text-volt">
                      <item.icon size={20} />
                    </span>
                    <p className="mt-4 text-xs uppercase tracking-wider text-white/40">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="mt-1 block text-sm text-white/80 hover:text-volt"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-white/80">{item.value}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Shanto's Fit n Fine Gym location"
                  src={site.mapEmbed}
                  className="h-64 w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary absolute bottom-4 right-4 px-5 py-2.5 text-xs"
                >
                  <Navigation size={14} /> Get Directions
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="left" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
