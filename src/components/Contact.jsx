import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Section } from "./Section.jsx";
import { SocialDock } from "./SocialDock.jsx";
import { cv } from "../data/cv.js";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${cv.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const cards = [
    { icon: Mail, label: "Email", value: cv.email, href: `mailto:${cv.email}` },
    { icon: Phone, label: "Phone", value: cv.phone, href: `tel:${cv.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: cv.location },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="Have an opportunity, a project idea, or just want to say hi? My inbox is open."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 content-start">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-accent/40 hover:-translate-y-1 transition-smooth"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-glow shrink-0">
                <c.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="font-medium truncate">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Your name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-smooth"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-smooth"
                placeholder="jane@company.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-smooth resize-none"
              placeholder="Tell me a little about your project or opportunity…"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3 font-medium shadow-glow hover:scale-[1.03] transition-smooth"
          >
            {sent ? (
              <>
                <CheckCircle2 className="w-4 h-4" /> Opening your email…
              </>
            ) : (
              <>
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
      <div className="mt-10">
        <div className="text-center text-xs uppercase tracking-widest text-accent mb-3">Find me on</div>
        <SocialDock />
      </div>
    </Section>
  );
}
