"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { programs, site } from "@/lib/data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    goal: programs[0].title,
    message: "",
  });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Opens WhatsApp with the enquiry pre-filled, addressed to the gym's number.
  const onSubmit = (e) => {
    e.preventDefault();
    const text = [
      `New enquiry from ${site.name} website`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      `Goal: ${form.goal}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-volt/40 bg-volt/5 p-12 text-center">
        <CheckCircle2 size={48} className="text-volt" />
        <h3 className="mt-5 font-display text-3xl uppercase text-white">
          Almost Done!
        </h3>
        <p className="mt-3 max-w-sm text-sm text-white/60">
          Thanks {form.name.split(" ")[0] || "champ"} — WhatsApp has opened with your
          message. Just tap send there and our team will reply on WhatsApp.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold uppercase tracking-wider text-volt hover:text-white"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-ink-800/50 p-8 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" value={form.name} onChange={update} required placeholder="Your name" />
        <Field label="Phone" name="phone" value={form.phone} onChange={update} required placeholder="+880 1XXXXXXXXX" type="tel" />
      </div>

      <div className="mt-5">
        <Field label="Email" name="email" value={form.email} onChange={update} placeholder="you@email.com" type="email" />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-xs uppercase tracking-wider text-white/50">
          Your Goal
        </label>
        <select
          name="goal"
          value={form.goal}
          onChange={update}
          className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-volt"
        >
          {programs.map((p) => (
            <option key={p.title} value={p.title}>
              {p.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-xs uppercase tracking-wider text-white/50">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          rows={4}
          placeholder="Tell us a bit about what you want to achieve…"
          className="w-full resize-none rounded-xl border border-white/10 bg-ink-900 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-volt"
        />
      </div>

      <button type="submit" className="btn-primary mt-7 w-full">
        Send on WhatsApp <Send size={16} />
      </button>
    </form>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-wider text-white/50">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-volt"
      />
    </div>
  );
}
