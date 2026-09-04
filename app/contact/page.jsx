import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/lib/data";

export const metadata = {
  title: "Contact & Join — IRONX Gym Dhaka",
  description:
    "Get in touch with IRONX Dhaka. Book a free trial, ask about membership packages or visit our Banani location.",
};

const info = [
  { icon: MapPin, label: "Location", value: site.address },
  { icon: Phone, label: "Call Us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Clock, label: "Opening Hours", value: site.hours },
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
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="IRONX location"
                  src="https://www.google.com/maps?q=Banani,Dhaka&output=embed"
                  className="h-64 w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
