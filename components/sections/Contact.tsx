"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { fadeUp } from "@/lib/motion";

type Fields = { name: string; email: string; subject: string; message: string };
const empty: Fields = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);

  const validate = (next: Fields) => {
    const e: Partial<Fields> = {};
    if (!next.name.trim()) e.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) e.email = "Enter a valid email.";
    if (!next.subject.trim()) e.subject = "Add a subject.";
    if (next.message.trim().length < 12) e.message = "A little more context helps.";
    return e;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const e = validate(fields);
    setErrors(e);
    if (Object.keys(e).length) return;
    const body = encodeURIComponent(`${fields.message}\n\n— ${fields.name} (${fields.email})`);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(fields.subject)}&body=${body}`;
    setSent(true);
  };

  const set = (key: keyof Fields) => (value: string) => {
    const next = { ...fields, [key]: value };
    setFields(next);
    if (errors[key]) setErrors(validate(next));
  };

  return (
    <section id="contact" className="relative z-[2] py-16 lg:py-24">
      <div className="shell grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <motion.aside {...fadeUp} className="glass-card flex flex-col justify-between rounded-[2rem] p-8 lg:p-10">
          <div>
            <p className="text-[12px] font-bold tracking-[0.18em] text-[#7c4dff]">CONNECT</p>
            <h2 className="mt-4 text-[clamp(2rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em] text-ink">
              Begin a conversation.
            </h2>
            <p className="mt-4 max-w-md text-[1.02rem] leading-[1.8] text-muted">
              Partnerships, speaking, ventures, and mentoring inquiries — the door is open.
            </p>
            <ul className="mt-8 space-y-4 text-[0.98rem] text-[#2d3140]">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#efe8ff] text-[#7c4dff]">
                    <Mail size={16} />
                  </span>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#efe8ff] text-[#7c4dff]">
                    <Phone size={16} />
                  </span>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.websiteHref} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#efe8ff] text-[#7c4dff]">
                    <Globe size={16} />
                  </span>
                  {site.websiteLabel}
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#efe8ff] text-[#7c4dff]">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V24H.24zM8.34 8.25h4.33v2.14h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.94V24h-4.52v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24H8.34z" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#efe8ff] text-[#7c4dff]">
                  <MapPin size={16} />
                </span>
                {site.location}
              </li>
            </ul>
          </div>
        </motion.aside>

        <motion.form
          {...fadeUp}
          onSubmit={onSubmit}
          className="contact-form rounded-[2rem] p-8 lg:p-10"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" error={errors.name}>
              <input value={fields.name} onChange={(e) => set("name")(e.target.value)} autoComplete="name" />
            </Field>
            <Field label="Email" error={errors.email}>
              <input type="email" value={fields.email} onChange={(e) => set("email")(e.target.value)} autoComplete="email" />
            </Field>
          </div>
          <Field label="Subject" error={errors.subject} className="mt-5">
            <input value={fields.subject} onChange={(e) => set("subject")(e.target.value)} />
          </Field>
          <Field label="Message" error={errors.message} className="mt-5">
            <textarea rows={5} value={fields.message} onChange={(e) => set("message")(e.target.value)} />
          </Field>
          <button type="submit" className="connect-btn mt-7 inline-flex">
            {sent ? "Opening mail…" : "Send message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[12px] font-bold tracking-[0.12em] text-[#7c4dff]">{label}</span>
      <span className="field-shell mt-2 block">{children}</span>
      {error ? <span className="mt-1.5 block text-[12px] text-[#b42318]">{error}</span> : null}
    </label>
  );
}
